$wnd.jsme.runAsyncCallback1('var W5="Assignment of aromatic double bonds failed";function X5(a,b){var c;c=a.x[b];return 3<=c&&4>=c||11<=c&&13>=c||19<=c&&31>=c||37<=c&&51>=c||55<=c&&84>=c||87<=c&&103>=c}function $(a,b){var c,d;c=b;for(d=0;0!=b;)0==a.c&&(a.e=(a.a[++a.d]&63)<<11,a.c=6),d|=~~(65536&a.e)>>16-c+b,a.e<<=1,--b,--a.c;return d}function Y5(a,b,c){a.c=6;a.d=c;a.a=b;a.e=(b[a.d]&63)<<11}function Z5(a,b){var c,d;c=~~(b/2);(d=a>=c)&&(a-=c);c=~~(b/32)*a/(c-a);return d?-c:c}function $5(){this.b=!0}x(24,1,{},$5);_.a=null;_.b=!1;\n_.c=0;_.d=0;_.e=0;_.f=null;function a6(a,b){var c,d,e;1==a.b.B[b]&&Zn(a.b,b,2);for(d=0;2>d;++d){c=D(a.b,d,b);jr(a.b,c,!1);for(e=0;e<a.b.f[c];++e)a.a[ao(a.b,c,e)]=!1}}function b6(a){var b,c,d,e,f,g,h;do{h=!1;for(c=0;c<a.b.d;++c)if(a.a[c]){f=!1;for(e=0;2>e;++e){b=!1;d=D(a.b,e,c);for(g=0;g<a.b.f[d];++g)if(c!=ao(a.b,d,g)&&a.a[ao(a.b,d,g)]){b=!0;break}if(!b){f=!0;break}}f&&(h=!0,a6(a,c))}}while(h)}function c6(){}x(29,1,{},c6);_.a=null;_.b=null;\nfunction d6(a,b,c,d){a.b||(4==a.i||3==a.i&&-1!=a.c?a.b=!0:(a.j[a.i]=d,a.f[a.i]=b,a.k[a.i]=c,++a.i))}\nfunction e6(a,b){var c,d,e,f;if(a.b)return 3;-1!=a.c&&(a.c=b[a.c]);for(e=0;e<a.i;++e)2147483647!=a.f[e]&&(a.f[e]=b[a.f[e]]);if(-1==a.c&&0==a.d){d=2147483647;f=-1;for(e=0;e<a.i;++e)d>a.k[e]&&(d=a.k[e],f=e);a.c=a.f[f];for(e=f+1;e<a.i;++e)a.f[e-1]=a.f[e],a.k[e-1]=a.k[e],a.j[e-1]=a.j[e];--a.i}f=(-1==a.c?0:1)+a.d+a.i;if(4<f||3>f)return 3;c=-1==a.c&&1==a.d||-1!=a.c&&Dr(a.n.b,a.c);d=-1;for(e=0;e<a.i;++e)if(a.j[e]){if(-1!=d||c)return 3;d=e}f=!1;if(-1!=d)for(e=0;e<a.i;++e)!a.j[e]&&a.f[d]<a.f[e]&&(f=!f);d=\n!1;if(-1!=a.c&&!c)for(e=0;e<a.i;++e)a.c<a.f[e]&&(d=!d);e=a.f;c=a.k;var g,h,j;h=!1;for(g=1;g<a.i;++g)for(j=0;j<g;++j)e[j]>e[g]&&(h=!h),c[j]>c[g]&&(h=!h);return a.e^h^d^f?2:1}function f6(a,b,c,d,e,f){this.n=a;0!=d&&1!=d?this.b=!0:(this.a=b,this.c=c,this.d=d,this.e=f,this.i=0,this.j=C(Yn,Zm,-1,4,2),this.f=C(B,v,-1,4,1),this.k=C(B,v,-1,4,1),-1!=c&&1==d&&(d6(this,2147483647,e,!0),this.d=0))}x(30,1,{},f6);_.a=0;_.b=!1;_.c=0;_.d=0;_.e=!1;_.f=null;_.i=0;_.j=null;_.k=null;_.n=null;\nfunction g6(a){Xn(a,15);if(a.b){var a=a.b,b;for(b=0;b<a.H.c;++b)if(0==(a.H.s[b]&67108864)&&3==a.S[b]){var c=a.H;c.s[b]|=67108864;c.K&=3}for(b=0;b<a.H.d;++b)3==a.k[b]&&2==fo(a.H,b)&&Zn(a.H,b,26)}}function h6(){this.e=1}x(33,1,{},h6);\nfunction i6(a){var b;if(null==a||0==a.length||0==cs(a).length)return uO(new TM,m,!0);b=new rs;var c=new c6,d=aU(cs(a)),e,f,g,h,j,l,n,q,r,t,A,u,w,F,H,s,Q,da,Y,W,ja,vb,Ua,db,M,yb,ua,P,Ca,mb,va,hb,R,Uc,ra,qb,ib;c.b=b;Tq(c.b);Ua=null;h=C(B,v,-1,64,1);h[0]=-1;yb=C(B,v,-1,64,1);ua=C(B,v,-1,64,1);for(w=0;64>w;++w)yb[w]=-1;f=M=0;P=db=mb=!1;l=0;Ca=d.length;for(j=1;32>=d[M];)++M;for(;M<Ca;)if(va=d[M++]&65535,j6(va)||42==va){g=0;A=-1;F=vb=H=!1;if(mb)82==va&&WL(d[M]&65535)?(da=null!=String.fromCharCode(d[M+1]&\n65535).match(/\\d/)?2:1,g=vr(Uq(d,M-1,1+da)),M+=da):(s=String.fromCharCode(d[M]&65535).toLowerCase().charCodeAt(0)==(d[M]&65535)&&j6(d[M]&65535)?2:1,g=vr(Uq(d,M-1,s)),M+=s-1,A=0),64==d[M]&&(++M,64==d[M]&&(F=!0,++M),vb=!0),72==d[M]&&(++M,A=1,WL(d[M]&65535)&&(A=d[M]-48,++M));else if(42==va)g=6,H=!0;else switch(String.fromCharCode(va).toUpperCase().charCodeAt(0)){case 66:M<Ca&&114==d[M]?(g=35,++M):g=5;break;case 67:M<Ca&&108==d[M]?(g=17,++M):g=6;break;case 70:g=9;break;case 73:g=53;break;case 78:g=7;\nbreak;case 79:g=8;break;case 80:g=15;break;case 83:g=16}if(0==g)throw new $o("SmilesParser: unknown element label found");e=Oq(c.b,g);H?(P=!0,mr(c.b,e,1)):jr(c.b,e,String.fromCharCode(va).toLowerCase().charCodeAt(0)==va&&j6(va));if(-1!=A&&1!=g){n=C(Ap,Tm,-1,1,1);n[0]=~~(A<<24)>>24;var bb=c.b,$a=e,eb=n;null!=eb&&0==eb.length&&(eb=null);null==eb?null!=bb.r&&(bb.r[$a]=null):(null==bb.r&&(bb.r=C(Mq,o,3,bb.G,0)),bb.r[$a]=eb)}u=h[l];-1!=h[l]&&128!=j&&Sq(c.b,e,h[l],j);j=1;h[l]=e;0!=f&&(kr(c.b,e,f),f=0);\n(W=!Ua?null:Tr(Ua,qP(u)))&&d6(W,e,M,1==g);vb&&(!Ua&&(Ua=new ls),ms(Ua,qP(e),new f6(c,e,u,A,M,F)))}else if(46==va)j=128;else if(61==va)j=2;else if(35==va)j=4;else if(WL(va))if(Y=va-48,mb){for(;M<Ca&&WL(d[M]&65535);)Y=10*Y+d[M]-48,++M;f=Y}else{db&&M<Ca&&WL(d[M]&65535)&&(Y=10*Y+d[M]-48,++M);db=!1;if(64<=Y)throw new $o("SmilesParser: ringClosureAtom number out of range");if(-1==yb[Y])yb[Y]=h[l],ua[Y]=M-1;else{if(yb[Y]==h[l])throw new $o("SmilesParser: ring closure to same atom");Ua&&((W=Tr(Ua,qP(yb[Y])))&&\nd6(W,h[l],ua[Y],!1),(W=Tr(Ua,qP(h[l])))&&d6(W,yb[Y],M-1,!1));Sq(c.b,h[l],yb[Y],j);yb[Y]=-1}j=1}else if(43==va){if(!mb)throw new $o("SmilesParser: \'+\' found outside brackets");for(q=1;43==d[M];)++q,++M;1==q&&WL(d[M]&65535)&&(q=d[M]-48,++M);dr(c.b,h[l],q)}else if(45==va){if(mb){for(q=-1;45==d[M];)--q,++M;-1==q&&WL(d[M]&65535)&&(q=48-d[M],++M);dr(c.b,h[l],q)}}else if(40==va){if(-1==h[l])throw new $o("Smiles with leading parenthesis are not supported");h[l+1]=h[l];++l}else if(41==va)--l;else if(91==va){if(mb)throw new $o("SmilesParser: nested square brackets found");\nmb=!0}else if(93==va){if(!mb)throw new $o("SmilesParser: closing bracket without opening one");mb=!1}else if(37==va)db=!0;else if(58==va)if(mb){for(Q=0;WL(d[M]&65535);)Q=10*Q+d[M]-48,++M;c.b.u[h[l]]=Q}else j=64;else if(47==va)j=17;else if(92==va)j=9;else throw new $o("SmilesParser: unexpected character found: \'"+String.fromCharCode(va)+Mb);if(1!=j)throw new $o("SmilesParser: dangling open bond");for(w=0;64>w;++w)if(-1!=yb[w])throw new $o("SmilesParser: dangling ring closure");var La=c.b,ma,V,Fb,Tb,\nea,Lc;Lc=C(B,v,-1,La.o,1);Tb=C(Yn,Zm,-1,La.o,2);for(V=0;V<La.p;++V)for(Fb=0;2>Fb;++Fb)Dr(La,La.y[Fb][V])&&!Dr(La,La.y[1-Fb][V])&&(Tb[La.y[Fb][V]]=!0);for(ea=La.o-1;0<=ea&&Tb[ea];)Lc[ea]=ea,--ea;for(ma=0;ma<=ea;++ma)if(Tb[ma]){Lc[ma]=ea;Lc[ea]=ma;for(--ea;0<=ea&&Tb[ea];)Lc[ea]=ea,--ea}else Lc[ma]=ma;c.b.J=!0;Xn(c.b,1);for(e=0;e<c.b.o;++e)if(null!=(null==b.r?null:null==b.r[e]?null:Uq(b.r[e],0,b.r[e].length))&&!ar(c.b,e))if(t=(null==c.b.r?null:c.b.r[e])[0],c.b.x[e]<(Wo(),Lq).length&&null!=Lq[c.b.x[e]]){r=\n!1;hb=Hp(c.b,e);hb-=Jp(c.b,e,hb);for(Uc=Lq[c.b.x[e]],ra=0,qb=Uc.length;ra<qb;++ra)if(R=Uc[ra],hb<=R){r=!0;R!=hb+t&&cr(c.b,e,hb+t);break}r||cr(c.b,e,hb+t)}var G,S,Lb,Gb;for(G=0;G<c.b.c;++G)if(7==c.b.x[G]&&0==c.b.q[G]&&3<Hp(c.b,G)&&0<c.b.k[G])for(Gb=0;Gb<c.b.f[G];++Gb)if(S=bo(c.b,G,Gb),Lb=ao(c.b,G,Gb),1<fo(c.b,Lb)&&xr(c.b.x[S])){4==c.b.B[Lb]?Zn(c.b,Lb,2):Zn(c.b,Lb,1);dr(c.b,G,c.b.q[G]+1);dr(c.b,S,c.b.q[S]-1);break}var Mc,Ub,ka,nb,Hb,ya,ob,Nc,O,Ka,qc,yc,wb,Ib,xb,bc;Xn(c.b,1);c.a=C(Yn,Zm,-1,c.b.d,2);\nfor(ka=0;ka<c.b.d;++ka)64==c.b.B[ka]&&(Zn(c.b,ka,1),c.a[ka]=!0);bc=new $n(c.b,3);Nc=C(Yn,Zm,-1,bc.i.c,2);for(wb=0;wb<bc.i.c;++wb){Ib=io(bc.i,wb);Nc[wb]=!0;for(ob=0;ob<Ib.length;++ob)if(!ar(c.b,Ib[ob])){Nc[wb]=!1;break}if(Nc[wb]){xb=io(bc.j,wb);for(ob=0;ob<xb.length;++ob)c.a[xb[ob]]=!0}}for(ka=0;ka<c.b.d;++ka)if(!c.a[ka]&&0!=bc.b[ka]&&ar(c.b,D(c.b,0,ka))&&ar(c.b,D(c.b,1,ka)))a:{var rb=c,cc=ka,ab=void 0,K=void 0,Vb=void 0,Oc=void 0,Vc=void 0,ec=void 0,zc=void 0,Wb=void 0,zb=void 0,rc=void 0,dd=void 0,\noa=void 0,Xb=void 0,Wb=C(B,v,-1,rb.b.c,1),ec=C(B,v,-1,rb.b.c,1),zc=C(B,v,-1,rb.b.c,1),zb=C(B,v,-1,rb.b.c,1),ab=D(rb.b,0,cc),K=D(rb.b,1,cc);ec[0]=ab;ec[1]=K;zc[0]=-1;zc[1]=cc;Wb[ab]=1;Wb[K]=2;zb[ab]=-1;zb[K]=ab;for(rc=Vc=1;Vc<=rc&&15>Wb[ec[Vc]];){Xb=ec[Vc];for(dd=0;dd<rb.b.f[Xb];++dd)if(Vb=bo(rb.b,Xb,dd),Vb!=zb[Xb]){Oc=ao(rb.b,Xb,dd);if(Vb==ab){zc[0]=Oc;for(oa=0;oa<=rc;++oa)rb.a[zc[dd]]=!0;break a}ar(rb.b,Vb)&&0==Wb[Vb]&&(++rc,ec[rc]=Vb,zc[rc]=Oc,Wb[Vb]=Wb[Xb]+1,zb[Vb]=Xb)}++Vc}}Xn(c.b,3);for(wb=0;wb<\nbc.i.c;++wb)if(Nc[wb]){Ib=io(bc.i,wb);for(ob=0;ob<Ib.length;++ob){var xd;var Ac=c,Ga=Ib[ob],sc=void 0;16==Ac.b.x[Ga]&&0>=Ac.b.q[Ga]||6==Ac.b.x[Ga]&&0!=Ac.b.q[Ga]||!ar(Ac.b,Ga)?xd=!1:(sc=null==Pp(Ac.b,Ga)?0:(null==Ac.b.r?null:Ac.b.r[Ga])[0],xd=1>Zq(Ac.b,Ga)-Hp(Ac.b,Ga)-sc||5!=Ac.b.x[Ga]&&6!=Ac.b.x[Ga]&&7!=Ac.b.x[Ga]&&8!=Ac.b.x[Ga]&&15!=Ac.b.x[Ga]&&16!=Ac.b.x[Ga]&&33!=Ac.b.x[Ga]&&34!=Ac.b.x[Ga]?!1:!0);if(!xd){jr(c.b,Ib[ob],!1);for(Ka=0;Ka<c.b.f[Ib[ob]];++Ka)c.a[ao(c.b,Ib[ob],Ka)]=!1}}}b6(c);for(wb=\n0;wb<bc.i.c;++wb)if(Nc[wb]&&6==io(bc.j,wb).length){xb=io(bc.j,wb);O=!0;for(nb=0,Hb=xb.length;nb<Hb;++nb)if(ka=xb[nb],!c.a[ka]){O=!1;break}O&&(a6(c,xb[0]),a6(c,xb[2]),a6(c,xb[4]),b6(c))}for(yc=5;4<=yc;--yc){do{qc=!1;for(ka=0;ka<c.b.d;++ka)if(c.a[ka]){for(ob=Mc=0;2>ob;++ob){ya=D(c.b,ob,ka);for(Ka=0;Ka<c.b.f[ya];++Ka)c.a[ao(c.b,ya,Ka)]&&++Mc}if(Mc==yc){a6(c,ka);b6(c);qc=!0;break}}}while(qc)}for(ka=0;ka<c.b.d;++ka)if(c.a[ka])throw new $o(W5);for(Ub=0;Ub<c.b.c;++Ub)if(ar(c.b,Ub))throw new $o(W5);c.b.r=\nnull;c.b.J=!1;var Pc,pb,lc,jb,le,Cd,Yc,fc,yd,mc,gc;Xn(c.b,3);yd=!1;mc=C(B,v,-1,2,1);gc=C(B,v,-1,2,1);fc=C(B,v,-1,2,1);for(pb=0;pb<c.b.d;++pb)if(!Lo(c.b,pb)&&2==c.b.B[pb]){for(jb=0;2>jb;++jb){mc[jb]=-1;fc[jb]=-1;Pc=D(c.b,jb,pb);for(Yc=0;Yc<c.b.f[Pc];++Yc)lc=ao(c.b,Pc,Yc),lc!=pb&&(17==c.b.B[lc]||9==c.b.B[lc]?(mc[jb]=bo(c.b,Pc,Yc),gc[jb]=lc):fc[jb]=bo(c.b,Pc,Yc));if(-1==mc[jb])break}if(-1!=mc[0]&&-1!=mc[1]){Cd=c.b.B[gc[0]]!=c.b.B[gc[1]];le=!1;for(jb=0;2>jb;++jb)-1!=fc[jb]&&fc[jb]<mc[jb]&&(le=!le);rr(c.b,\npb,Cd^le?2:1,!1);yd=!0}}for(pb=0;pb<c.b.d;++pb)(17==c.b.B[pb]||9==c.b.B[pb])&&Zn(c.b,pb,1);yd&&(c.b.K|=4);Ms(new h6,c.b);if(Ua){for(ja=k6((ib=new cV(Ua),new l6(Ua,ib)));wU(ja.a.a);)W=(ja.a.b=hq(ja.a.a)).Gi(),lr(c.b,W.a,e6(W,Lc),!1);c.b.K|=4}Er(c.b);g6(c.b);P&&tr(c.b,!0);return(new Nr(b)).a.a.a}function j6(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}function k6(a){a=new fV(a.b.a);return new m6(a)}function l6(a,b){this.a=a;this.b=b}x(659,647,{},l6);\n_.Di=function(a){a:{var b,c;for(c=new fV((new cV(this.a)).a);wU(c.a);)if(b=c.b=hq(c.a),b=b.Gi(),null==a?null==b:rw(a,b)){a=!0;break a}a=!1}return a};_.af=function(){return k6(this)};_.xg=function(){return this.b.a.c};_.a=null;_.b=null;function m6(a){this.a=a}x(660,1,{},m6);_.Be=function(){return wU(this.a.a)};_.Ce=function(){return(this.a.b=hq(this.a.a)).Gi()};_.De=function(){eV(this.a)};_.a=null;function n6(){KU();this.a=6122;this.b=12230397}x(676,1,{},n6);x(726,619,sn);\n_.be=function(){var a,b,c,d,e;a=b=d=null;if(this.b.a==(AP(),BP)&&this.b.i==(CP(),DP))try{var f=this.b.b,g,h,j;j=null;h=new rs;Yr(new os,h,new eL(new jL(f)))&&(g=new Nr(h),j=g.a.a.a);b=j;if(null==b)throw new $o("V3000 read failed.");a=Pk;this.a.Gc.a="V3000 conversion provided by OpenChemLib"}catch(l){if(l=No(l),E(l,102))c=l,d=c._d();else throw l;}else if(this.b.a==XV)try{var n=this.b.b,q,r,t,A,u,w,F;b=-1!=n.indexOf(Wd)?(q=ZT(n,Wd),r=3<=q.length&&0<q[2].length,t=2<=q.length&&0<q[1].length,A=i6(q[0]),\nu=r?i6(q[2]):i6(m),w=t?i6(q[1]):i6(m),F=m,F+=Ab,F+=rQ(1,3)+rQ(1,3),t&&(F+=rQ(1,3)),F+=ba,F+=lb+A,F+=lb+u,t&&(F+=lb+w),F):i6(n);this.b.f==(xP(),GP)?a="readSMIRKS":this.b.f==UV&&(a="readSMILES");this.a.Gc.a="SMILES conversion provided by OpenChemLib"}catch(H){if(H=No(H),E(H,102))c=H,d="SMILES parsing error:"+c._d();else throw H;}else if(d="Invalid or unsupported input",this.a.Yc&&!this.b.d)try{var s=new $5,Q=cs(this.b.b),da;if(null==Q||0==Q.length)da=null;else{var Y=aU(Q),W,ja,vb,Ua,db;if(null==Y)da=\nnull;else{Y5(s,Y,0);W=$(s,4);Ua=$(s,4);8<W&&(W=Ua);ja=$(s,W);vb=$(s,Ua);db=new fs(ja,vb);var M=null,yb,ua,P,Ca,mb,va,hb,R,Uc,ra,qb,ib,bb,$a,eb,La,ma,V,Fb,Tb,ea,Lc,G,S,Lb,Gb,Mc,Ub,ka,nb,Hb,ya,ob,Nc,O,Ka,qc,yc,wb,Ib,xb,bc,rb,cc,ab,K,Vb,Oc,Vc,ec,zc,Wb,zb,rc,dd,oa,Xb,xd,Ac,Ga,sc,Pc,pb,lc,jb,le,Cd,Yc,fc,yd,mc,gc;le=8;s.f=db;Tq(s.f);if(!(null==Y||0==Y.length))if(null!=M&&0==M.length&&(M=null),Y5(s,Y,0),P=$(s,4),La=$(s,4),8<P&&(le=P,P=La),0==P)tr(s.f,1==$(s,1));else{Ca=$(s,P);mb=$(s,La);dd=$(s,P);Ac=$(s,\nP);xd=$(s,P);Lb=$(s,P);for(R=0;R<Ca;++R)Oq(s.f,6);for(K=0;K<dd;++K)Rq(s.f,$(s,P),7);for(K=0;K<Ac;++K)Rq(s.f,$(s,P),8);for(K=0;K<xd;++K)Rq(s.f,$(s,P),$(s,8));for(K=0;K<Lb;++K)dr(s.f,$(s,P),$(s,4)-8);Gb=1+mb-Ca;ob=$(s,4);eb=0;nr(s.f,0,0);or(s.f,0,0);pr(s.f,0,0);Nc=null!=M&&39<=M[0];gc=yd=Yc=jb=0;nb=ka=!1;Nc&&(M.length>2*Ca-2&&39==M[2*Ca-2]||M.length>3*Ca-3&&39==M[3*Ca-3]?(nb=!0,Vb=(ka=M.length==3*Ca-3+9)?3*Ca-3:2*Ca-2,$a=86*(M[Vb+1]-40)+M[Vb+2]-40,jb=Math.pow(10,$a/2E3-1),Vb+=2,Cd=86*(M[Vb+1]-40)+M[Vb+\n2]-40,Yc=Math.pow(10,Cd/1500-1),Vb+=2,fc=86*(M[Vb+1]-40)+M[Vb+2]-40,yd=Math.pow(10,fc/1500-1),ka&&(Vb+=2,mc=86*(M[Vb+1]-40)+M[Vb+2]-40,gc=Math.pow(10,mc/1500-1))):ka=M.length==3*Ca-3);s.b&&ka&&(M=null,Nc=!1);for(K=1;K<Ca;++K)O=$(s,ob),0==O?(Nc&&(nr(s.f,K,s.f.D[0].a+8*(M[2*K-2]-83)),or(s.f,K,s.f.D[0].b+8*(M[2*K-1]-83)),ka&&pr(s.f,K,s.f.D[0].c+8*(M[2*Ca-3+K]-83))),++Gb):(eb+=O-1,Nc&&(nr(s.f,K,uo(s.f,eb)+M[2*K-2]-83),or(s.f,K,vo(s.f,eb)+M[2*K-1]-83),ka&&pr(s.f,K,wo(s.f,eb)+(M[2*Ca-3+K]-83))),Sq(s.f,\neb,K,1));for(K=0;K<Gb;++K)Sq(s.f,$(s,P),$(s,P),1);Vc=C(Yn,Zm,-1,mb,2);for(V=0;V<mb;++V)switch(ea=$(s,2),ea){case 0:X5(s.f,D(s.f,0,V))||X5(s.f,D(s.f,1,V))?Zn(s.f,V,32):Vc[V]=!0;break;case 2:Zn(s.f,V,2);break;case 3:Zn(s.f,V,4)}ua=$(s,P);for(K=0;K<ua;++K)if(R=$(s,P),8==le)Ga=$(s,2),3==Ga?(fr(s.f,R,1,0),lr(s.f,R,1,!1)):lr(s.f,R,Ga,!1);else switch(Ga=$(s,3),Ga){case 4:lr(s.f,R,1,!1);fr(s.f,R,1,$(s,3));break;case 5:lr(s.f,R,2,!1);fr(s.f,R,1,$(s,3));break;case 6:lr(s.f,R,1,!1);fr(s.f,R,2,$(s,3));break;\ncase 7:lr(s.f,R,2,!1);fr(s.f,R,2,$(s,3));break;default:lr(s.f,R,Ga,!1)}8==le&&0==$(s,1)&&(s.f.F=!0);yb=$(s,La);for(K=0;K<yb;++K)if(V=$(s,La),1==s.f.B[V])switch(Ga=$(s,3),Ga){case 4:rr(s.f,V,1,!1);qr(s.f,V,1,$(s,3));break;case 5:rr(s.f,V,2,!1);qr(s.f,V,1,$(s,3));break;case 6:rr(s.f,V,1,!1);qr(s.f,V,2,$(s,3));break;case 7:rr(s.f,V,2,!1);qr(s.f,V,2,$(s,3));break;default:rr(s.f,V,Ga,!1)}else rr(s.f,V,$(s,2),!1);tr(s.f,1==$(s,1));hb=null;for(Xb=0;1==$(s,1);)switch(ya=Xb+$(s,4),ya){case 0:oa=$(s,P);for(K=\n0;K<oa;++K)R=$(s,P),mr(s.f,R,2048);break;case 1:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),zb=$(s,8),kr(s.f,R,zb);break;case 2:oa=$(s,La);for(K=0;K<oa;++K)V=$(s,La),Zn(s.f,V,64);break;case 3:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),mr(s.f,R,4096);break;case 4:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),lc=$(s,4)<<3,mr(s.f,R,lc);break;case 5:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),va=$(s,2)<<1,mr(s.f,R,va);break;case 6:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),mr(s.f,R,1);break;case 7:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),cc=$(s,\n4)<<7,mr(s.f,R,cc);break;case 8:oa=$(s,P);for(K=0;K<oa;++K){R=$(s,P);qb=$(s,4);Uc=C(B,v,-1,qb,1);for(ec=0;ec<qb;++ec)ra=$(s,8),Uc[ec]=ra;var Hc=s.f,lf=R,ed=Uc;null==Hc.t&&(Hc.t=C(Bo,En,92,Hc.G,0));null!=ed&&jp(ed);Hc.t[lf]=ed;Hc.K=0;Hc.E=!0}break;case 9:oa=$(s,La);for(K=0;K<oa;++K)V=$(s,La),lc=$(s,2)<<4,sr(s.f,V,lc);break;case 10:oa=$(s,La);for(K=0;K<oa;++K)V=$(s,La),Lc=$(s,4),sr(s.f,V,Lc);break;case 11:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),mr(s.f,R,8192);break;case 12:oa=$(s,La);for(K=0;K<oa;++K)V=\n$(s,La),G=$(s,8)<<6,sr(s.f,V,G);break;case 13:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),sc=$(s,3)<<14,mr(s.f,R,sc);break;case 14:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),rc=$(s,5)<<17,mr(s.f,R,rc);break;case 15:Xb=16;break;case 16:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),pb=$(s,3)<<22,mr(s.f,R,pb);break;case 17:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),cr(s.f,R,$(s,4));break;case 18:oa=$(s,P);Wb=$(s,4);for(K=0;K<oa;++K){R=$(s,P);Hb=$(s,Wb);zc=C(Ap,Tm,-1,Hb,1);for(ec=0;ec<Hb;++ec)zc[ec]=~~($(s,7)<<24)>>24;var fb=s.f,md=\nR,Qc=Uq(zc,0,zc.length),Ha=void 0;if(null!=Qc)if(0==Qc.length)Qc=null;else if(Ha=vr(Qc),0!=Ha&&ds(Qc,Iq[Ha])||ds(Qc,Xd))Rq(fb,md,Ha),Qc=null;null==Qc?null!=fb.r&&(fb.r[md]=null):(null==fb.r&&(fb.r=C(Mq,o,3,fb.G,0)),fb.r[md]=aU(Qc))}break;case 19:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),S=$(s,3)<<25,mr(s.f,R,S);break;case 20:oa=$(s,La);for(K=0;K<oa;++K)V=$(s,La),pb=$(s,3)<<14,sr(s.f,V,pb);break;case 21:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),hr(s.f,R,$(s,2)<<4);break;case 22:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,\nP),mr(s.f,R,268435456);break;case 23:oa=$(s,La);for(K=0;K<oa;++K)V=$(s,La),sr(s.f,V,131072);break;case 24:oa=$(s,La);for(K=0;K<oa;++K)V=$(s,La),va=$(s,2)<<18,sr(s.f,V,va);break;case 25:for(K=0;K<Ca;++K)if(1==$(s,1)){var fd=s.f;fd.s[K]|=512}break;case 26:oa=$(s,La);hb=C(B,v,-1,oa,1);for(K=0;K<oa;++K)hb[K]=$(s,La);break;case 27:oa=$(s,P);for(K=0;K<oa;++K)R=$(s,P),mr(s.f,R,536870912)}Wn(new jo(s.f),Vc);if(null!=hb)for(Fb=0,Tb=hb.length;Fb<Tb;++Fb)V=hb[Fb],Zn(s.f,V,2==s.f.B[V]?4:2);Mc=0;if(null==M&&Y.length>\ns.d+1&&(32==Y[s.d+1]||9==Y[s.d+1]))M=Y,Mc=s.d+2;if(null!=M)try{if(33==M[Mc]||35==M[Mc]){Y5(s,M,Mc+1);ka=1==$(s,1);nb=1==$(s,1);Pc=2*$(s,4);ma=1<<Pc;V=0;for(R=1;R<Ca;++R)V<mb&&D(s.f,1,V)==R?(bc=D(s.f,0,V++),xb=1):(bc=0,xb=8),nr(s.f,R,uo(s.f,bc)+xb*($(s,Pc)-~~(ma/2))),or(s.f,R,vo(s.f,bc)+xb*($(s,Pc)-~~(ma/2))),ka&&pr(s.f,R,wo(s.f,bc)+xb*($(s,Pc)-~~(ma/2)));bb=ka?1.5:(Wo(),24);ib=Vq(s.f,Ca,mb,bb);if(35==M[Mc]){ab=0;rb=C(B,v,-1,Ca,1);for(R=0;R<Ca;++R)ab+=rb[R]=ip(s.f,R);for(R=0;R<Ca;++R)for(K=0;K<rb[R];++K)cc=\nOq(s.f,1),Sq(s.f,R,cc,1),nr(s.f,cc,uo(s.f,R)+($(s,Pc)-~~(ma/2))),or(s.f,cc,vo(s.f,R)+($(s,Pc)-~~(ma/2))),ka&&pr(s.f,cc,wo(s.f,R)+($(s,Pc)-~~(ma/2)));Ca+=ab}if(nb){var Zc=$(s,Pc),we=Math.log(2E3)*Math.LOG10E*Zc/(ma-1)-1;jb=Math.pow(10,we);Yc=jb*Z5($(s,Pc),ma);yd=jb*Z5($(s,Pc),ma);ka&&(gc=jb*Z5($(s,Pc),ma));xb=jb/ib;for(R=0;R<Ca;++R)nr(s.f,R,Yc+xb*uo(s.f,R)),or(s.f,R,yd+xb*vo(s.f,R)),ka&&pr(s.f,R,gc+xb*wo(s.f,R))}else{xb=1.5/ib;for(R=0;R<Ca;++R)nr(s.f,R,xb*uo(s.f,R)),or(s.f,R,xb*vo(s.f,R)),ka&&pr(s.f,\nR,xb*wo(s.f,R))}}else if(ka&&!nb&&0==jb&&(jb=1.5),0!=jb&&0!=s.f.p){for(V=ib=0;V<s.f.p;++V)Ka=uo(s.f,D(s.f,0,V))-uo(s.f,D(s.f,1,V)),qc=vo(s.f,D(s.f,0,V))-vo(s.f,D(s.f,1,V)),yc=ka?wo(s.f,D(s.f,0,V))-wo(s.f,D(s.f,1,V)):0,ib+=Math.sqrt(Ka*Ka+qc*qc+yc*yc);ib/=s.f.p;Ib=jb/ib;for(R=0;R<s.f.o;++R)nr(s.f,R,uo(s.f,R)*Ib+Yc),or(s.f,R,vo(s.f,R)*Ib+yd),ka&&pr(s.f,R,wo(s.f,R)*Ib+gc)}}catch(Ea){if(Ea=No(Ea),E(Ea,102))wb=Ea,wb._d(),M=null,ka=!1;else throw Ea;}if((Ub=null!=M&&!ka)||s.b){Xn(s.f,3);for(V=0;V<s.f.d;++V)if(2==\nfo(s.f,V)&&!Lo(s.f,V)&&0==(s.f.z[V]&3)){var tc=s.f;tc.z[V]|=16777216}}!Ub&&s.b&&(s.f.K|=4,Oc=new h6,Oc.i=new n6,Ms(Oc,s.f),Ub=!0);Ub?(Er(s.f),g6(s.f)):ka||(s.f.K|=4)}da=db}}b=(new Nr(da)).a.a.a;a="readOCLCode";d=null}catch(Yb){if(Yb=No(Yb),!E(Yb,102))throw Yb;}e=!1;if(null!=b&&null==d)try{if((e=EP(this.a,b,!1))&&this.c){var Ie=this.a;if(Ie.v){var Jb=Ie.v;Jb.a=a;RN(Jb,Ie.Vb,0,0,0)}Ie.Fc=!0}}catch(nd){if(nd=No(nd),E(nd,102))d="Invalid converted molfile";else throw nd;}this.a.cc=e;this.e?e?MP(this.e):\nNP(this.e,new $o(d)):null!=d&&r2(this.a,d);this.d&&LI(this.a)};Z(659);Z(660);Z(24);Z(29);Z(30);T(SZ)(1);\n//@ sourceURL=1.js\n')
