import time
import base64
import pickle
import sqlite3
from math import ceil
from flask import Blueprint, render_template, request, make_response
from flask_restful import Resource
from rdkit import Chem
from rdkit import DataStructs
from rdkit.Chem.Fingerprints import FingerprintMols
from rdkit.Chem import rdChemReactions, AllChem, Draw
from application import db
from application.models import Substance, Reactions


# Blueprint Configuration
search_bp = Blueprint(
    'search_bp', __name__,
    template_folder='templates',
    static_folder='static',
    static_url_path='/search/static'
)

# Response data
data = []
amount = 0
response_time = 0
query_type = None


class Search(Resource):
    objects = []
    similarity = 0.0
    condition = None

    def get(self, page_num=1):
        print('GET request')
        page_data = self.get_png(page_num)
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('search.html',
                                             objects=page_data,
                                             amount=amount,
                                             response_time=response_time), 200, headers)

    def put(self):
        pass

    def post(self, page_num=1):
        """
        Function to handle user POST query
        fingerprints - array of ExplicitBitVectors
        similarity score - Tanimoto
        Estimation performs with BulkTanimotoSimilarity - fastest method for RDKit DataStructures
        Algorithm of similarity search:
            1. Obtaining available molecules
            2. Forming array of bitvectors based on bitstrings
            3. Calculating similarity for all pairs "query fingerprint - molecule fingerprint"
            4. Forming array of enumerated values to get needed molecules
            4. Filtering array with needed accuracy
            5. Sorting array (highest similarity -> lowest similarity)
            5. Obtaining molecules with required accuracy
        """
        global data, amount, response_time, query_type
        user_query = request.form.get('smiles')  # SMILES from textfield
        query_type = request.form.get('rsvp')  # ChEMBL or reactions database
        subquery_mols = request.form.get('mols_dropdown')  # Type of search
        subquery_reactions = request.form.get('reactions_dropdown')  # Type of search
        self.condition = request.form.get('condition_dropdown')  # Condition of reaction
        print(request.form)

        start_time = time.time()  # Measuring response time

        if query_type == "reactions":
            if user_query:
                query_react = rdChemReactions.ReactionFromSmarts(user_query)
                query_fp = rdChemReactions.CreateStructuralFingerprintForReaction(query_react).ToBitString()
            else:
                query_fp = ""

            if subquery_reactions == "Conditions":
                print('Checking conditions')
                data = self.get_objects('reactions', "", filter_conditions=True)
            else:
                print('Generating fingerprints')
                data = self.get_objects('reactions', query_fp, 4096)

        elif query_type == "chembl":
            if subquery_mols == 'Similarity':
                self.similarity = int(request.form.get('similarity_value'))/100
            if user_query:
                query_mol = Chem.MolFromSmiles(user_query)
                query_fp = FingerprintMols.FingerprintMol(query_mol).ToBitString()
            else:
                query_fp = ""
            data = self.get_objects('substances', query_fp, 2048)

        if data:
            amount = len(data)
            page_data = self.get_png(page_num)
        else:
            amount = 0
        response_time = round(time.time() - start_time, 4)
        print("--- %s seconds ---" % response_time)
        headers = {'Content-Type': 'text/html'}
        return make_response(render_template('search.html',
                                             objects=page_data,
                                             amount=amount,
                                             response_time=response_time), 200, headers)

    def get_png(self, page_num):
        global data, query_type
        chunk = data[(page_num-1)*10:page_num*10]
        print("Query type:", query_type)
        if query_type == "reactions":
            for obj in chunk:
                rxn = AllChem.ReactionFromSmarts(obj['Smiles'])
                d2d = Draw.MolDraw2DCairo(800, 250)
                d2d.DrawReaction(rxn)
                png_bytes = d2d.GetDrawingText()
                png_base64 = base64.b64encode(png_bytes)
                png_base64 = png_base64.decode("utf-8")
                obj['png'] = png_base64
        elif query_type == "chembl":
            for obj in chunk:
                rxn = Chem.MolFromSmiles(obj['Smiles'])
                d2d = Draw.MolDraw2DCairo(800, 150)
                d2d.DrawMolecule(rxn)
                png_bytes = d2d.GetDrawingText()
                png_base64 = base64.b64encode(png_bytes)
                png_base64 = png_base64.decode("utf-8")
                obj['png'] = png_base64
        return chunk

    def get_objects(self, table, query_fp, bit_len=0, filter_conditions=False):
        """
        Handle similarity searching
        :param table:string
        :param query_fp: bitstring
        :param bit_len: integer
        :return: List[Dict, Dict, ...]
        """
        connection = sqlite3.connect('db.sqlite')
        c = connection.cursor()
        c.execute(f"SELECT * from {table}")
        objects = c.fetchall()
        if filter_conditions:
            objects = [pickle.loads(obj[1]) for obj in objects]
            filtered_objects = list(filter(self.check_condition, objects))
        else:
            if query_fp:
                query_fp = query_fp + '0' * (bit_len - len(query_fp))
                query_fp = DataStructs.cDataStructs.CreateFromBitString(query_fp)

                objects = [(obj[0], pickle.loads(obj[1])) for obj in objects]
                fingerprints = [DataStructs.cDataStructs.CreateFromBitString(obj[1]['fingerprint']) for obj in objects]
                similarities = list(enumerate(DataStructs.BulkTanimotoSimilarity(query_fp, fingerprints)))
                filtered_similarities = list(filter(self.check_similarity, similarities))
                filtered_similarities = sorted(filtered_similarities, key=lambda values: values[1], reverse=True)
                filtered_objects = [objects[indice[0]][1] for indice in filtered_similarities]
            else:
                filtered_objects = [pickle.loads(obj[1]) for obj in objects]
        return filtered_objects

    def check_condition(self, obj):
        """
        Check conditions of reactions
        :param obj: Dict
        :return: Bool
        """
        try:
            if isinstance(obj['Conditions'], str):
                if obj['Conditions'] == self.condition:
                    return True
                else:
                    return False
            elif isinstance(obj['Conditions'], list):
                if self.condition in obj['Conditions']:
                    return True
                else:
                    return False
            else:
                return False
        except KeyError:
            return False

    def check_similarity(self, sim_value):
        """
        Check if similarity of queried fingerprint and fingerprint from database
        is high enough to keep it
        :param sim_value: Tuple(enumerate, similarity_value)
        :return: Bool
        """
        if sim_value[1] >= self.similarity:
            return True
        else:
            return False


"""
@search_bp.route("/search", methods=['GET', 'POST'])
@search_bp.route("/search/<int:page_num>", methods=['GET', 'POST'])
def search(page_num=1):
    ""
    Page with connection to database
    ""

    smiles_query = request.form.get('smiles')
    print(smiles_query)
    query = Substance.query.all()
    print(type(query))
    print(dir(query))
    result = []
    for mol in query:
        result.append(mol.smiles)
    print(result)
    return render_template('search.html')
    # current_page = int(request.form['current_page'])


    #  ------------- QUERY using engine with pure SQL -------------- #

    # array, total_results, num_of_pages = get_paged_results(smiles_query, mol_weight, current_page)

    #  ------------- QUERY using ORM query system + pagination -------------- #

    # Query for exact match (case INSENSITIVE)
    # query = Substance.query.filter(db.and_(Substance.smiles.like(smiles_query), Substance.mol_weight > 0))

    # Query for substring search (case INSENSITIVE)
    # query = Substance.query.filter(db.and_(Substance.smiles.contains(smiles_query),
    #                                        Substance.mol_weight > mol_weight))
    #
    # page = query.paginate(page_num, 10, False)
    # num_of_pages = page.pages
    # total_results = page.total
    # array = [get_description(mol, orm=True) for mol in page.items]

    return {'result_array': array, 'number': total_results, 'num_of_pages': num_of_pages}
"""
