$wnd.jsme.runAsyncCallback8('var y5="!a",z5=\'" fill="\',A5="M",B5="r";function C5(a){var b;b=a.K.c*D5(a.G);a.R=0.06*b;a.M=0.15*b;a.L=0.38*b;a.P=0.47*b;a.Q=I(0.6*b*a.E+0.5);a.O=0.12*b;a.S=0.4*b;a.y=0.5*b+0.5}\nfunction E5(a,b,c,d){var e,f,g;f=(b.b-b.a)/10;g=(b.d-b.c)/10;e=new F5;G5(a.G,jq(a.G,c,d))?d=c=-3:(c=a.r[c],d=a.r[d]);H5(a,c);e.a=b.a;e.c=b.c;e.b=b.a+2*f;e.d=b.c+2*g;I5(a,e);e.a=b.a+4*f;e.c=b.c+4*g;e.b=b.a+5*f;e.d=b.c+5*g;I5(a,e);H5(a,d);e.a=b.a+5*f;e.c=b.c+5*g;e.b=b.a+6*f;e.d=b.c+6*g;I5(a,e);e.a=b.a+8*f;e.c=b.c+8*g;e.b=b.b;e.d=b.d;I5(a,e);H5(a,a.J)}\nfunction J5(a,b,c,d){if(G5(a.G,jq(a.G,c,d)))H5(a,-3),I5(a,b),H5(a,a.J);else if(a.r[c]!=a.r[d]){var e,f;e=new F5;f=new F5;e.a=b.a;e.c=b.c;e.b=(b.a+b.b)/2;e.d=(b.c+b.d)/2;f.a=e.b;f.c=e.d;f.b=b.b;f.d=b.d;K5(a,e)&&(H5(a,a.r[c]),I5(a,e));K5(a,f)&&(H5(a,a.r[d]),I5(a,f));H5(a,a.J)}else 0!=a.r[c]?(H5(a,a.r[c]),I5(a,b),H5(a,a.J)):I5(a,b)}\nfunction L5(a,b){var c;for(c=0;c<a.T.c;++c)a.w=M5(a.w,Zn(a.T,c));var d,e,f,g,h;d=C(Pn,Im,-1,a.G.o,2);for(c=0;c<a.G.p;++c)0!=(a.G.z[c]&131072)&&(d[D(a.G,0,c)]=!0,d[D(a.G,1,c)]=!0);f=new tJ;for(c=0;c<a.G.o;++c)e=0!=(a.G.w[c]&536870912)?0.47*b:d[c]?0.38*b:0,0!=e&&(g=N5(a.K,lo(a.G,c)),h=O5(a.K,mo(a.G,c)),GI(f,g-e,h-e,2*e,2*e),a.w=M5(a.w,f));c=0.1*b;a.w.d-=c;a.w.e-=c;a.w.c+=2*c;a.w.b+=2*c}\nfunction P5(a,b){var c,d;if(0!=(a.B&128))return a.r[b];d=Q5(a,b);if(-1==d){c=a.G;var e,f,g,h;e=-1;if(1==c.k[b])for(f=0;f<c.f[b];++f)if(2==c.j[b][f]){f=c.e[b][f];if(2==c.f[f]&&2==c.k[f])for(h=0;2>h;++h)if(g=c.e[f][h],g!=b&&1==c.k[g]){e=f;break}break}c=e;-1!=c&&(b=c,d=Q5(a,c))}if(-1==d)return a.r[b];switch(d&255){case 1:return 384;case 2:return 64;default:return 448}}\nfunction Q5(a,b){var c,d,e;d=e=-1;if(0!=(a.B&128))return-1;0!=(a.G.s[b]&134217728)&&(e=Kp(a.G,b),d=Lp(a.G,b));c=kp(a.G,b);-1!=c&&(e=(a.G.z[c]&3072)>>10,d=Mp(a.G,c));-1!=e&&0!=e&&(e|=d<<8);return e}function R5(a,b){var c;if(0==Vn(a.G,b))return!1;for(c=0;c<Vn(a.G,b);++c)if(!G5(a.G,Sn(a.G,b,c)))return!1;return!0}function S5(a){var b;a.s=C(Pn,Im,-1,a.G.o,2);for(b=0;b<a.G.p;++b)a.s[D(a.G,0,b)]=!0,a.s[D(a.G,1,b)]=!0}\nfunction T5(a,b,c,d,e){var f,g,h,j,l,m,q;m=!1;e.a=0;e.b=0;0<d?f=2.617993878:f=3.665191429;q=to(a.G,b,c);for(j=0;j<a.G.f[b];++j)g=Sn(a.G,b,j),h=q,D(a.G,0,g)==b?l=D(a.G,1,g):l=D(a.G,0,g),l!=c&&(g=to(a.G,b,l),q<g&&(h+=6.283185307179586),g=h-g,0<d?(3.141592653589793>g&&(m=!0),2.617993878<g&&(g=2.617993878),0.523598776>g&&(g=0.523598776),g<=f&&(f=g,g=a.M*Math.tan(g-1.5707963267948966)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))):(3.141592653589793<=g&&(m=!0),3.665191429>g&&(g=3.665191429),5.759586531<\ng&&(g=5.759586531),g>=f&&(f=g,g=a.M*Math.tan(4.712388981-g)/2,e.a=-(g*Math.sin(h)),e.b=-(g*Math.cos(h)))));return m}function U5(a,b,c,d){0==b?(0>c?d.a=a.M:d.a=-a.M,d.b=0):(c=Math.atan(c/b),0>b&&(c+=3.141592653589793),d.a=-(a.M*Math.sin(c)),d.b=a.M*Math.cos(c))}\nfunction V5(a,b,c,d){var e,f,g,h,j,l,m,q;e=new F5;h=new F5;l=new rJ;j=new rJ;f=D(a.G,0,c);g=D(a.G,1,c);d&&(m=b.a,b.a=b.b,b.b=m,m=b.c,b.c=b.d,b.d=m,m=f,f=g,g=m);if(K5(a,b))if(po(a.G,c)){e.a=b.a;e.c=b.c;e.b=b.b;e.d=b.d;d=d?-W5(a,c):W5(a,c);0==d&&(d=1);U5(a,b.b-b.a,b.d-b.c,l);if(0<d){if(h.a=b.a+l.a,h.c=b.c+l.b,h.b=b.b+l.a,h.d=b.d+l.b,T5(a,f,g,1,j)||1<a.G.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a}else if(h.a=b.a-l.a,h.c=b.c-l.b,h.b=b.b-l.a,h.d=b.d-l.b,T5(a,f,g,-1,j)||1<a.G.f[f])h.a+=j.a+l.b,h.c+=j.b-l.a;26==a.G.B[c]&&\nX5(e,h);K5(a,e)&&J5(a,e,f,g);64==a.G.B[c]?K5(a,h)&&E5(a,h,f,g):K5(a,h)&&J5(a,h,f,g)}else{U5(a,b.b-b.a,b.d-b.c,l);m=l.a/2;q=l.b/2;d=!1;e.a=b.a+m;e.c=b.c+q;e.b=b.b+m;e.d=b.d+q;if(1<a.G.f[f])if(T5(a,f,g,1,j)){if(e.a+=j.a,e.c+=j.b,2==a.G.f[f]&&(0!=j.a||0!=j.b))e.a+=l.b,e.c-=l.a}else a.q[f]=new Y5(e.a,e.c);h.a=b.a-m;h.c=b.c-q;h.b=b.b-m;h.d=b.d-q;if(1<a.G.f[f])if(T5(a,f,g,0,j)){if(h.a+=j.a,h.c+=j.b,2==a.G.f[f]&&(0!=j.a||0!=j.b))h.a+=l.b,h.c-=l.a}else a.q[f]=new Y5(h.a,h.c),d=!0;26==a.G.B[c]&&X5(e,h);64==\na.G.B[c]?d?(E5(a,e,f,g),J5(a,h,f,g)):(J5(a,e,f,g),E5(a,h,f,g)):(J5(a,e,f,g),J5(a,h,f,g))}}\nfunction Z5(a,b){var c,d,e,f,g,h,j,l,m,q,r,t;a.F||(r=O5(a.K,mo(a.G,b)),r=\'<circle id="\'+(null!=a.k?a.k:Pj+$5)+":Atom:"+b+\'" class="event" cx="\'+I(100*N5(a.K,lo(a.G,b)))/100+Ma+I(100*r)/100+\'" r="8" fill-opacity="0"/>\',Tp(a.b,r));h=null;0!=a.G.q[b]&&(r=1==$q(a.G.q[b])?n:n+$q(a.G.q[b]),h=0>a.G.q[b]?r+fc:r+Yb);g=null;r=a.G.w[b];0!=r&&(0!=(r&2)&&(g=uh),0!=(r&4)&&(g=null==g?y5:g+",!a"),0!=(r&4096)&&(g=null==g?Vk:g+",s"),0!=(r&1920)&&(e=r&1920,1792==e?g=null==g?"h0":g+",h0":1664==e?g=null==g?"h1":g+",h1":\n1408==e?g=null==g?"h2":g+",h2":128==e?g=null==g?"h>0":g+",h>0":384==e?g=null==g?"h>1":g+",h>1":1024==e?g=null==g?"h<3":g+",h<3":1536==e&&(g=null==g?"h<2":g+",h<2")),0!=(r&234881024)&&(e=r&234881024,167772160==e?g=null==g?"c0":g+",c0":100663296==e?g=null==g?"c+":g+",c+":201326592==e&&(g=null==g?"c-":g+",c-")),0!=(r&114688)&&(e=r&114688,98304==e?g=null==g?"pi0":g+",pi0":81920==e?g=null==g?"pi1":g+",pi1":49152==e?g=null==g?"pi2":g+",pi2":16384==e&&(g=null==g?"pi>0":g+",pi>0")),0!=(r&4063232)&&(e=r&4063232,\n3801088==e?g=null==g?"n1":g+",n1":3538944==e?g=null==g?"n2":g+",n2":3014656==e?g=null==g?"n3":g+",n3":3145728==e?g=null==g?"n<3":g+",n<3":2097152==e?g=null==g?"n<4":g+",n<4":393216==e?g=null==g?"n>1":g+",n>1":917504==e?g=null==g?"n>2":g+",n>2":1966080==e&&(g=null==g?"n>3":g+",n>3")),0!=(r&120)&&(e=r&120,112==e?g=null==g?$h:g+",c":8==e?g=null==g?B5:g+",r":104==e?g=null==g?"rb2":g+",rb2":88==e?g=null==g?"rb3":g+",rb3":56==e&&(g=null==g?"rb4":g+",rb4")),0!=(r&29360128)&&(g=null==g?"rs"+((r&29360128)>>\n22):g+",rs"+((r&29360128)>>22)),0!=(r&268435456)&&(g=null==g?"sp2":g+",sp2"));0!=a.G.v[b]&&(g=null==g?n+a.G.v[b]:g+Zb+(n+a.G.v[b]));r=0;if(0!=(a.G.s[b]&48))switch(a.G.s[b]&48){case 16:h=null==h?$l:h+",|";break;case 32:r=1;break;case 48:r=2}e=null;if(0==(a.B&64))if(0!=(a.G.s[b]&67108864))e=Wd;else if(0!=(a.G.s[b]&98304)>>15)if(2==a.G.f[b])switch((a.G.s[b]&98304)>>15){case 2:e=0!=(a.G.s[b]&4)?sk:ig;break;case 1:e=0!=(a.G.s[b]&4)?xj:A5;break;default:e=Vb}else switch((a.G.s[b]&98304)>>15){case 1:e=0!=\n(a.G.s[b]&4)?B5:pg;break;case 2:e=0!=(a.G.s[b]&4)?Vk:Dg;break;default:e=Vb}0!=(a.B&1792)&&(e=null==e?n+(null==a.G.b.d?-1:a.G.b.d[b]):e+Zb+(n+(null==a.G.b.d?-1:a.G.b.d[b])));m=null;0!=(a.B&16)&&0!=$q(a.G.u[b])&&(m=n+$q(a.G.u[b]));l=null;a:{j=a.G;On(j,1);if(2==j.f[b]&&2==j.j[b][0]&&2==j.j[b][1])for(d=0;2>d;++d)for(c=0;c<Vn(j,j.e[b][d]);++c){if(yq(j,j.i[j.e[b][d]][c],j.e[b][d])){j=j.i[j.e[b][d]][c];break a}}else for(d=0;d<j.f[j.o+b];++d)if(yq(j,j.i[b][d],b)){j=j.i[b][d];break a}j=-1}-1!=j&&(j=Q5(a,b),\n-1!=j&&(l=0==j?vh:(1==(j&255)?Gb:pk)+(1+(j>>8))));j=0;a.G.E?((6!=a.G.x[b]||!a.s[b])&&0!=(a.G.w[b]&2048)&&0!=a.G.q[b]||0!=(a.G.s[b]&48))&&(j=$o(a.G,b)):(6!=a.G.x[b]||!a.s[b]||0!=(a.G.s[b]&48))&&(j=$o(a.G,b));c=Gp(a.G,b);if(null!=c)j=0;else if(null!=vp(a.G,b)){d=0!=(a.G.w[b]&1)?"[!":jh;c=a.G;if(null==c.t||null==c.t[b])c=0!=(c.w[b]&1)?n:zq[c.x[b]];else{t=n;for(q=0;q<c.t[b].length;++q)0<q&&(t+=Zb),f=c.t[b][q],t+=zq[f];c=t}c=d+c+rh;5<c.length&&(c=d+vp(a.G,b).length+rh);0!=(a.G.w[b]&2048)&&(j=-1)}else 0!=\n(a.G.w[b]&1)?(c=Wd,0!=(a.G.w[b]&2048)&&(j=-1)):(6!=a.G.x[b]||null!=h||null!=g||0<j||!a.s[b])&&(c=zq[a.G.x[b]]);d=0;!Jp(a.G,b)&0!=(a.G.w[b]&536870912)&&H5(a,-8);if(null!=c)d=a6(a,c),b6(a,N5(a.K,lo(a.G,b)),O5(a.K,mo(a.G,b)),c,!0),a.t[b]=!0;else{a:if(2!=a.G.f[b])c=!1;else{for(c=0;2>c;++c)if(2!=a.G.j[b][c]){c=!1;break a}c=!0}c&&(c=N5(a.K,lo(a.G,b)),f=O5(a.K,mo(a.G,b)),Tp(a.T,new uJ(c-a.O,f-a.O,2*a.O,2*a.O)),a.F||Tp(a.N,new c6(c,f,R5(a,b)?-3:a.r[b])))}null!=h&&(d6(a,~~((2*a.Q+1)/3)),f=N5(a.K,lo(a.G,b))+\n((d+a6(a,h))/2+1),c=O5(a.K,mo(a.G,b))-~~((4*a.o-4)/8),b6(a,f,c,h,!0),d6(a,a.Q));0!=(a.B&2)&&(g=n+b);null!=g&&(d6(a,~~((2*a.Q+1)/3)),f=N5(a.K,lo(a.G,b))-(d+a6(a,g))/2,c=O5(a.K,mo(a.G,b))-~~((4*a.o-4)/8),b6(a,f,c,g,!0),d6(a,a.Q));null!=e&&(d6(a,~~((2*a.Q+1)/3)),f=N5(a.K,lo(a.G,b))-(d+a6(a,e))/2,c=O5(a.K,mo(a.G,b))+~~((4*a.o+4)/8),q=a.z,H5(a,448),b6(a,f,c,e,!1),H5(a,q),d6(a,a.Q));null!=m&&(d6(a,~~((2*a.Q+1)/3)),f=N5(a.K,lo(a.G,b))+((d+a6(a,m))/2+1),c=O5(a.K,mo(a.G,b))+~~((4*a.o+4)/8),q=a.z,H5(a,0>a.G.u[b]?\n384:448),b6(a,f,c,m,!0),H5(a,q),d6(a,a.Q));if(null!=l){var A,v;c=C(ko,Am,-1,Vn(a.G,b),1);for(f=0;f<Vn(a.G,b);++f)c[f]=to(a.G,b,Tn(a.G,b,f));ap(c);q=e6(c,0);t=f6(c,0,q);for(f=1;f<c.length;++f)A=e6(c,f),v=f6(c,f,A),t<v&&(t=v,q=A);c=q;d6(a,~~((2*a.Q+1)/3));f=N5(a.K,lo(a.G,b))+0.7*a.o*Math.sin(c);c=O5(a.K,mo(a.G,b))+0.7*a.o*Math.cos(c);q=a.z;H5(a,P5(a,b));b6(a,f,c,l,!1);H5(a,q);d6(a,a.Q)}if(!(0==j&&0==r)){l=C(ko,Am,-1,4,1);for(c=0;c<Vn(a.G,b);++c){f=Sn(a.G,b,c);for(q=0;2>q;++q)D(a.G,q,f)==b&&(t=to(a.G,\nD(a.G,q,f),D(a.G,1-q,f)),-1.5707963267948966>t?(l[0]-=t+1.5707963267948966,l[3]+=t+3.141592653589793):0>t?(l[2]+=t+1.5707963267948966,l[3]-=t):1.5707963267948966>t?(l[1]+=t,l[2]+=1.5707963267948966-t):(l[0]+=t-1.5707963267948966,l[1]+=3.141592653589793-t))}0==a.G.f[b]?or(a.G.x[b])?l[3]-=0.2:l[1]-=0.2:l[1]-=0.1;(null!=h||null!=m)&&(l[1]+=10);(null!=g||null!=e)&&(l[3]+=10);e=n;0!=j&&(f=a6(a,sf),m=0,-1==j?(e=Xj,d6(a,~~((2*a.Q+1)/3)),m=a6(a,e)):1<j&&(e=n+j,d6(a,~~((2*a.Q+1)/3)),m=a6(a,e)),0.6>l[1]||0.6>\nl[3]?(h=O5(a.K,mo(a.G,b)),l[1]<=l[3]?(l[1]+=10,g=N5(a.K,lo(a.G,b))+(d+f)/2):(l[3]+=10,g=N5(a.K,lo(a.G,b))-(d+f)/2-m)):(g=N5(a.K,lo(a.G,b)),l[0]<l[2]?(l[0]+=10,h=O5(a.K,mo(a.G,b))-a.o):(l[2]+=10,h=O5(a.K,mo(a.G,b))+a.o)),0<m&&(c=h+~~((4*a.o+4)/8),b6(a,g+(f+m)/2,c,e,!0),d6(a,a.Q)),b6(a,g,h,sf,!0));e=0;if(0!=r){m=50;for(c=g=0;4>c;++c)h=1<c?c-2:c+2,l[c]<m?(e=c,m=l[c],g=l[h]):l[c]==m&&l[h]>g&&(e=c,g=l[h]);switch(e){case 0:g=N5(a.K,lo(a.G,b));h=O5(a.K,mo(a.G,b))-a.O-d/2;break;case 1:g=N5(a.K,lo(a.G,b))+\na.O+d/2;h=O5(a.K,mo(a.G,b));break;case 2:g=N5(a.K,lo(a.G,b));h=O5(a.K,mo(a.G,b))+a.O+d/2;break;default:g=N5(a.K,lo(a.G,b))-a.O-d/2,h=O5(a.K,mo(a.G,b))}if(1==r)Tp(a.T,new uJ(g-a.O,h-a.O,2*a.O,2*a.O)),a.F||Tp(a.N,new c6(g,h,R5(a,b)?-3:a.r[b]));else{switch(e){case 2:case 0:r=2*a.O;e=0;g-=a.O;break;case 1:r=0;e=2*a.O;h-=a.O;break;default:r=0,e=2*a.O,h-=a.O}Tp(a.T,new uJ(g-a.O,h-a.O,2*a.O,2*a.O));a.F||Tp(a.N,new c6(g,h,R5(a,b)?-3:a.r[b]));Tp(a.T,new uJ(g+r-a.O,h+e-a.O,2*a.O,2*a.O));a.F||Tp(a.N,new c6(g+\nr,h+e,R5(a,b)?-3:a.r[b]))}}}-8==a.z&&H5(a,-9)}\nfunction g6(a,b){var c,d,e,f,g,h,j,l,m,q,r,t;m=new F5;c=new F5;f=new F5;j=new rJ;h=new rJ;d=D(a.G,0,b);e=D(a.G,1,b);var A=O5(a.K,mo(a.G,d)),v=N5(a.K,lo(a.G,e)),s=O5(a.K,mo(a.G,e)),A=\'<line id="\'+(null!=a.k?a.k:Pj+$5)+":Bond:"+d+fc+e+\'" class="event" x1="\'+I(100*N5(a.K,lo(a.G,d)))/100+cb+I(100*A)/100+Wa+I(100*v)/100+eb+I(100*s)/100+\'" stroke-width="8" stroke-opacity="0"/>\';Tp(a.c,A);!Jp(a.G,d)&&!Jp(a.G,e)&&0!=((a.G.w[d]|a.G.w[e])&536870912)&&H5(a,-8);a.q[d]?(m.a=a.q[d].a,m.c=a.q[d].b):(m.a=N5(a.K,\nlo(a.G,d)),m.c=O5(a.K,mo(a.G,d)));a.q[e]?(m.b=a.q[e].a,m.d=a.q[e].b):(m.b=N5(a.K,lo(a.G,e)),m.d=O5(a.K,mo(a.G,e)));if(0!=(a.G.A[b]&16320))K5(a,m)&&(g=n+I(100*m.a)/100,l=n+I(100*m.b)/100,q=n+I(100*m.c)/100,r=n+I(100*m.d)/100,t=\'<line stroke-dasharray="3, 3" x1="\'+g+cb+q+Wa+l+eb+r+Ta+a.e+\'" stroke-width:\'+I(100*a.n)/100+gb,h6(a,t)),H5(a,-9);else{g=64==a.G.B[b]?0:32==a.G.B[b]?1:Wn(a.G,b);switch(g){case 1:switch(a.G.B[b]){case 1:K5(a,m)&&J5(a,m,d,e);break;case 17:i6(a,m,d,e);break;case 9:h=m.b-m.a;j=\nm.d-m.c;G5(a.G,jq(a.G,d,e))?f=e=-3:(e=a.r[d],f=P5(a,d),e==(a.G.s[d]&448)&&(e=f));for(d=2;17>d;d+=2)c.a=m.a+d*h/17-d*j/128,c.c=m.c+d*j/17+d*h/128,c.b=m.a+d*h/17+d*j/128,c.d=m.c+d*j/17-d*h/128,K5(a,c)&&(H5(a,9>d?e:f),I5(a,c),H5(a,a.J));break;case 32:if(K5(a,m)){f=m.b-m.a;j=m.d-m.c;c=Math.sqrt(f*f+j*j);c=2*J(L(O(c/(4*a.R))));f/=c-1;j/=c-1;G5(a.G,jq(a.G,d,e))?e=d=-3:(d=a.r[d],e=a.r[e]);h=m.a-a.R/2;m=m.c-a.R/2;H5(a,d);for(d=0;d<~~(c/2);++d)j6(a,h,m,a.R),h+=f,m+=j;H5(a,e);for(d=0;d<~~(c/2);++d)j6(a,h,m,\na.R),h+=f,m+=j;H5(a,a.J)}}break;case 0:case 2:if((a.t[d]||2==a.G.k[d])&&(a.t[e]||2==a.G.k[e])&&!po(a.G,b)&&2==g){if(!K5(a,m))break;U5(a,m.b-m.a,m.d-m.c,j);h=j.a/2;j=j.b/2;c.a=m.a+h;c.c=m.c+j;c.b=m.b+h;c.d=m.d+j;f.a=m.a-h;f.c=m.c-j;f.b=m.b-h;f.d=m.d-j;26==a.G.B[b]&&X5(c,f);J5(a,c,d,e);J5(a,f,d,e)}else if((a.t[e]||2==a.G.k[e])&&2==g)V5(a,m,b,!1);else if((a.t[d]||2==a.G.k[d])&&2==g)V5(a,m,b,!0);else{l=W5(a,b);0==l&&(l=1);c.a=m.a;c.c=m.c;c.b=m.b;c.d=m.d;U5(a,m.b-m.a,m.d-m.c,j);if(0<l){f.a=m.a+j.a;f.c=\nm.c+j.b;f.b=m.b+j.a;f.d=m.d+j.b;if(T5(a,d,e,1,h)||1<a.G.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(T5(a,e,d,-1,h)||1<a.G.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}else{f.a=m.a-j.a;f.c=m.c-j.b;f.b=m.b-j.a;f.d=m.d-j.b;if(T5(a,d,e,-1,h)||1<a.G.f[d])f.a+=h.a+j.b,f.c+=h.b-j.a;if(T5(a,e,d,1,h)||1<a.G.f[e])f.b+=h.a-j.b,f.d+=h.b+j.a}26==a.G.B[b]&&X5(c,f);K5(a,c)&&J5(a,c,d,e);2==g?K5(a,f)&&J5(a,f,d,e):K5(a,f)&&E5(a,f,d,e)}break;case 3:K5(a,m)&&(J5(a,m,d,e),U5(a,m.b-m.a,m.d-m.c,j),c.a=m.a+j.a,c.c=m.c+j.b,c.b=m.b+j.a,c.d=m.d+j.b,\nJ5(a,c,d,e),c.a=m.a-j.a,c.c=m.c-j.b,c.b=m.b-j.a,c.d=m.d-j.b,J5(a,c,d,e))}-8==a.z&&H5(a,-9)}}function b6(a,b,c,d,e){var f;e&&(e=a6(a,d),e=e/2+~~(a.o/8),f=~~(a.o/2),(d==Yb||d==fc)&&(f=2*f/3),Tp(a.T,new uJ(b-e,c-f,2*e,2*f)));a.F||k6(a,d,b,c)}function l6(a){var b;b=a.a;a.a=a.b;a.b=b;b=a.c;a.c=a.d;a.d=b}\nfunction f6(a,b,c){a=0==b?6.283185307179586+a[0]-a[a.length-1]:a[b]-a[b-1];-2.0943951023931953<c&&1.0471975511965976>c?a-=2*Math.cos(c+0.5235987755982988):a-=0.5*Math.cos(c+0.5235987755982988);return a}function m6(a){var b;b=new tJ;a.a<=a.b?(b.d=a.a,b.c=a.b-a.a):(b.d=a.b,b.c=a.a-a.b);a.c<=a.d?(b.e=a.c,b.b=a.d-a.c):(b.e=a.d,b.b=a.c-a.d);return b}function e6(a,b){var c;if(0<b)return(a[b]+a[b-1])/2;c=3.141592653589793+(a[0]+a[a.length-1])/2;return 3.141592653589793<c?c-6.283185307179586:c}\nfunction i6(a,b,c,d){var e,f,g;g=new F5;if(!(b.a==b.b&&b.c==b.d)){g.a=b.a;g.c=b.c;g.b=b.b;g.d=b.d;f=m6(g);for(b=0;b<a.T.c;++b)if(e=Zn(a.T,b),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(n6(a,g.a,g.c,b)){if(n6(a,g.b,g.d,b))return;o6(a,g,0,b);i6(a,g,c,d);return}if(n6(a,g.b,g.d,b)){o6(a,g,1,b);i6(a,g,c,d);return}}var h,j,l;j=(g.c-g.d)/9;l=(g.b-g.a)/9;b=C(ko,Am,-1,3,1);e=C(ko,Am,-1,3,1);f=C(ko,Am,-1,4,1);h=C(ko,Am,-1,4,1);b[0]=g.a;e[0]=g.c;f[2]=g.b+j;h[2]=g.d+l;f[3]=g.b-j;h[3]=g.d-l;b[1]=\n(b[0]+f[2])/2;e[1]=(e[0]+h[2])/2;b[2]=(b[0]+f[3])/2;e[2]=(e[0]+h[3])/2;f[0]=b[2];h[0]=e[2];f[1]=b[1];h[1]=e[1];G5(a.G,jq(a.G,c,d))?g=d=-3:(d=a.r[c],g=P5(a,c),d==(a.G.s[c]&448)&&(d=g));H5(a,d);a.Bd(b,e,3);H5(a,g);a.Bd(f,h,4);H5(a,a.J)}}function n6(a,b,c,d){if(0!=(a.B&1))return!1;a=Zn(a.T,d);return b>a.d&&b<a.d+a.c&&c>a.e&&c<a.e+a.b}function X5(a,b){var c;c=a.b;a.b=b.b;b.b=c;c=a.d;a.d=b.d;b.d=c}\nfunction W5(a,b){var c,d,e,f,g,h,j,l,m,q;j=C(Pn,Im,-1,16,2);l=C(Pn,Im,-1,16,2);c=C(ko,Am,-1,16,1);f=C(ko,Am,-1,2,1);for(h=d=0;2>h;++h){e=D(a.G,h,b);for(m=0;m<a.G.f[e];++m)if(g=Sn(a.G,e,m),g!=b){if(4==d)return 0;j[d]=jo(a.G,g);l[d]=po(a.G,g);c[d++]=to(a.G,e,Tn(a.G,e,m))}}f[0]=to(a.G,D(a.G,0,b),D(a.G,1,b));0>f[0]?(f[1]=f[0]+3.141592653589793,e=!1):(f[1]=f[0],f[0]=f[1]-3.141592653589793,e=!0);for(h=g=0;h<d;++h)j[h]?q=20:l[h]?q=17:q=16,c[h]>f[0]&&c[h]<f[1]?g-=q:g+=q;return e?-g:g}\nfunction K5(a,b){var c,d,e,f;if(b.a==b.b&&b.c==b.d){for(d=0;d<a.T.c;++d)if(e=Zn(a.T,d),EI(e,b.a,b.c))return!1;return!0}f=m6(b);c=!1;b.a>b.b&&(l6(b),c=!0);for(d=0;d<a.T.c;++d)if(e=Zn(a.T,d),!(e.d>f.d+f.c||e.e>f.e+f.b||f.d>e.d+e.c||f.e>e.e+e.b)){if(n6(a,b.a,b.c,d)){if(n6(a,b.b,b.d,d))return c&&l6(b),!1;o6(a,b,0,d);d=K5(a,b);c&&l6(b);return d}if(n6(a,b.b,b.d,d))return o6(a,b,1,d),d=K5(a,b),c&&l6(b),d}c&&l6(b);return!0}\nfunction o6(a,b,c,d){var e,f,g,h,j,l;0==c?(j=b.a,l=b.c,g=b.b,f=b.d):(j=b.b,l=b.d,g=b.a,f=b.c);d=Zn(a.T,d);a=g>j?d.d+d.c:d.d;h=f>l?d.e+d.b:d.e;d=g-j;e=f-l;(0>=d?0-d:d)>(0>=e?0-e:e)?l==f?(f=a,g=l):(f=j+d*(h-l)/e,g>j==a>f?g=h:(f=a,g=l+e*(a-j)/d)):j==g?(f=j,g=h):(g=l+e*(a-j)/d,f>l==h>g?f=a:(f=j+d*(h-l)/e,g=h));0==c?(b.a=f,b.c=g):(b.b=f,b.d=g)}\nfunction p6(a,b,c,d){c/=2;switch(d&786432){case 786432:if(b){a.x.a=b.d+b.c/2;a.x.b=b.e+b.b-c;break}case 0:a.x.a=a.w.d+a.w.c/2;a.x.b=a.w.e+a.w.b+c;b&&a.x.b>b.e+b.b-c&&(a.x.b=b.e+b.b-c);break;case 524288:if(b){a.x.a=b.d+b.c/2;a.x.b=b.e+c;break}case 262144:a.x.a=a.w.d+a.w.c/2,a.x.b=a.w.e-c,b&&a.x.b<b.e+c&&(a.x.b=b.e+c)}}\nfunction H5(a,b){if(!a.F&&(-10==b&&(a.z=-999,b=a.J),!(b==a.z||-8==a.z&&-9!=b)))switch(-8==b&&(a.I=a.z),-9==b&&(b=a.I),a.z=b,b){case 0:a.Cd((zH(),HH));break;case -6:a.Cd(a.A);break;case -4:a.Cd(a.H);break;case -2:a.Cd(a.u);break;case -3:a.Cd(a.v);break;case -7:a.Cd(a.C);break;case -8:a.Cd(a.D);break;case 64:a.Cd(Gn);break;case 128:a.Cd(Hn);break;case 256:a.Cd(Jn);break;case 192:a.Cd(In);break;case 320:a.Cd(Kn);break;case 384:a.Cd(Ln);break;case 448:a.Cd(Mn);break;case 1:a.Cd((zH(),EH));break;default:a.Cd((zH(),\nHH))}}function q6(a){var b,c,d,e,f;e=N5(a.K,a.G.D[0].a);c=N5(a.K,a.G.D[0].a);f=O5(a.K,a.G.D[0].b);d=O5(a.K,a.G.D[0].b);for(b=0;b<a.G.o;++b)e>N5(a.K,lo(a.G,b))&&(e=N5(a.K,lo(a.G,b))),c<N5(a.K,lo(a.G,b))&&(c=N5(a.K,lo(a.G,b))),f>O5(a.K,mo(a.G,b))&&(f=O5(a.K,mo(a.G,b))),d<O5(a.K,mo(a.G,b))&&(d=O5(a.K,mo(a.G,b)));a.w=new uJ(e,f,c-e,d-f)}x(3,1,{});_.q=null;_.r=null;_.s=null;_.t=null;_.u=null;_.v=null;_.x=null;_.y=0;_.z=0;_.A=null;_.B=0;_.C=null;_.D=null;_.E=0;_.F=!1;_.G=null;_.H=null;_.I=0;_.J=0;_.K=null;\n_.L=0;_.M=0;_.N=null;_.O=0;_.P=0;_.Q=0;_.R=0;_.S=0;_.T=null;function c6(a,b,c){this.b=a;this.c=b;this.a=c}x(4,1,{},c6);_.a=0;_.b=0;_.c=0;function F5(){}x(5,1,{},F5);_.a=0;_.b=0;_.c=0;_.d=0;function r6(a,b){b.c*=a.c;b.a=b.a*a.c+a.a;b.b=b.b*a.c+a.b}function s6(a,b){b.d=b.d*a.c+a.a;b.e=b.e*a.c+a.b;b.c*=a.c;b.b*=a.c}function N5(a,b){return b*a.c+a.a}function O5(a,b){return b*a.c+a.b}function t6(){this.b=this.a=0;this.c=1}\nfunction u6(a,b,c){var d,e,f;this.b=this.a=0;this.c=1;b&&(d=b.c/a.c,f=b.b/a.b,e=0,0==e?e=24:e/=256,c=e/c,this.c=c<(d<f?d:f)?c:d<f?d:f,this.a=b.d+b.c/2-this.c*(a.d+a.c/2),this.b=b.e+b.b/2-this.c*(a.e+a.b/2))}x(19,1,{},t6,u6);_.tS=function(){return"DepictorTransformation Offset: "+this.a+Zb+this.b+" Scaling: "+this.c};_.a=0;_.b=0;_.c=0;function D5(a){return Mq(a,a.o,a.p,24)}function G5(a,b){return 0!=(a.z[b]&262144)}\nfunction I5(a,b){var c,d,e,f;c=n+I(100*b.a)/100;d=n+I(100*b.b)/100;e=n+I(100*b.c)/100;f=n+I(100*b.d)/100;c=Pd+c+cb+e+Wa+d+eb+f+\'" style="stroke:\'+a.e+";stroke-width:"+I(100*a.n)/100+gb;h6(a,c)}function k6(a,b,c,d){a6(a,b);b=Td+I(100*c)/100+\'" text-anchor="middle" y="\'+I(100*(d+~~(a.o/3)))/100+\'" font-family=" \'+a.f.a+\'" font-size="\'+a.f.b+z5+a.e+lb+b+Od;h6(a,b)}function j6(a,b,c,d){b=\'<circle cx="\'+I(100*b)/100+Ma+I(100*c)/100+\'" r="\'+I(100*d)/100+z5+a.e+\'" />\';h6(a,b)}\nfunction a6(a,b){var c;c=vQ();if(-1<c&&9>c)return!a.i&&(a.i=(xG(),new yG(a.f))),c=QI(b,a.i.a),11<=a.f.b&&(c*=1.5714285714285714),c;var d=a.f;c=b;var e=v6;e||(v6=e=$doc.createElement("canvas"));d=n+d.b+Ek+d.a;e=e.getContext("2d");e.font=d;c=e.measureText(c);return(new uJ(0,0,c.width,0)).c}function d6(a,b){a.o!=b&&(a.o=b,a.f=new mI(uf,0,b))}\nfunction w6(a){var b,c,d;d=\'<svg id="\'+(null!=a.k?a.k:Pj+$5)+\'" xmlns="http://www.w3.org/2000/svg" version="1.1" \'+a.Gd(ja)+\'width="\'+a.p+\'px" height="\'+a.j+\'px" viewBox="0 0 \'+a.p+ja+a.j+\'">\\n\';b="<style> #"+(null!=a.k?a.k:Pj+$5)+" {pointer-events:none; }  #"+(null!=a.k?a.k:Pj+$5)+" .event  { pointer-events:all;}  <\/style>\\n";d+=ha;d+=b;for(c=new Yp(a.c);c.b<c.d.ng();)b=Zp(c),h6(a,b);for(c=new Yp(a.b);c.b<c.d.ng();)b=Zp(c),h6(a,b);return d+a.Fd(ha)+kx(a.d.a)+Md}\nfunction h6(a,b){P(a.d,ha);P(a.d,b);P(a.d,ia)}x(28,3,{});_.Fd=UB;_.Gd=UB;_.Bd=function(a,b,c){var d,e;e=new SA(\'<polygon points="\');for(d=0;d<c;++d){var f=n+I(100*a[d])/100;Vv(e.a,f);Vv(e.a,Zb);f=n+I(100*b[d])/100;Vv(e.a,f);Vv(e.a,ja)}Vv(e.a,\'" style="fill:\'+this.e+";stroke:"+this.e+\';stroke-width:1"/>\');h6(this,kx(e.a))};_.Cd=function(a){this.e=Nk+(a.d>>16&255)+Zb+(a.d>>8&255)+Zb+(a.d&255)+Ub};_.tS=function(){return w6(this)};_.e=Rh;_.i=null;_.j=400;_.k=null;_.n=1;_.o=10;_.p=400;var $5=0;\nfunction x6(a){var b;On(a,15);b=a.C&65535;switch(a.C&-65536){case 65536:return null;case 131072:return 1==b?"meso":n+b+" meso diastereomers";case 0:return"unknown chirality";case 196608:return"racemate";case 262144:return"this enantiomer";case 327680:return"this or other enantiomer";case 393216:return"two epimers";default:return 1==b?"one stereo isomer":n+b+" stereo isomers"}}function y6(){y6=y;z6=z(VH,fn,-1,[0.29899999499320984,0.5870000123977661,0.11400000005960464])}\nfunction A6(a,b){y6();var c,d,e,f,g,h;c=!b?1:(z6[0]*(b.d>>16&255)+z6[1]*(b.d>>8&255)+z6[2]*(b.d&255))/255;f=!a?1:(z6[0]*(a.d>>16&255)+z6[1]*(a.d>>8&255)+z6[2]*(a.d&255))/255;e=vq(c-f);if(0.30000001192092896<e)return a;d=C(VH,fn,-1,3,1);B6(b.d>>16&255,b.d>>8&255,b.d&255,d);g=C(VH,fn,-1,3,1);B6(a.d>>16&255,a.d>>8&255,a.d&255,g);h=vq(g[0]-d[0]);0.5<h&&(h=1-h);g=1-(g[1]>d[1]?g[1]:d[1]);d=vq(f+c-1);h=Math.cos(9.42477796076938*h);h=0.30000001192092896*(g>(d>h?d:h)?g:d>h?d:h);if(e>h)c=a;else if(e=(f>c?1<\nf+h:0<f-h)?c-h:c+h,c=null,null==c&&(c=C(VH,fn,-1,4,1)),null!=a.b?c[3]=a.a:c[3]=(a.d>>24&255)/255,f=c,null==f&&(f=C(VH,fn,-1,3,1)),null!=a.b?(f[2]=a.b[2],f[1]=a.b[1],f[0]=a.b[0]):(f[2]=(a.d&255)/255,f[1]=(a.d>>8&255)/255,f[0]=(a.d>>16&255)/255),f=!a?1:(z6[0]*(a.d>>16&255)+z6[1]*(a.d>>8&255)+z6[2]*(a.d&255))/255,0==f)c=new UH(f,f,f,c[3]);else{d=e/(!a?1:(z6[0]*(a.d>>16&255)+z6[1]*(a.d>>8&255)+z6[2]*(a.d&255))/255);for(e=f=h=0;3>e;++e)c[e]*=d,1>c[e]?f+=z6[e]:(h+=(c[e]-1)*z6[e],c[e]=1);if(0!=h){for(e=\nd=0;3>e;++e)1>c[e]&&(c[e]+=h/f,1<c[e]&&(d+=(c[e]-1)*z6[e],c[e]=1));if(0!=d)for(e=0;3>e;++e)1>c[e]&&(c[e]+=d/z6[e],1<c[e]&&(c[e]=1))}c=new UH(c[0],c[1],c[2],c[3])}return c}var z6;function C6(a){zH();this.d=a|-16777216}function B6(a,b,c,d){zH();var e,f,g,h,j,l;null==d&&(d=C(VH,fn,-1,3,1));j=c>(a>b?a:b)?c:a>b?a:b;l=c<(a<b?a:b)?c:a<b?a:b;j==l?g=h=0:(h=(j-l)/j,f=(j-a)/(j-l),e=(j-b)/(j-l),c=(j-c)/(j-l),a==j?g=c-e:b==j?g=2+f-c:g=4+e-f,g/=6,0>g&&++g);d[0]=g;d[1]=h;d[2]=j/255}x(471,1,{58:1,67:1,71:1},C6);\nvar v6=null;function Y5(a,b){this.a=a;this.b=b}x(523,494,{80:1,81:1},Y5);function M5(a,b){var c;c=new tJ;FI(a,b,c);return c}x(694,593,on);\n_.Zd=function(){var a,b,c;b=rL(this.a,!1,!0);c=null;a=new gs;if(Or(new ds,a,new CJ(new HJ(b)))){a=new D6(a,b);b=new uJ(0,0,400,300);var d;if(0!=a.G.o){a.p=I(b.c);a.j=I(b.b);0==a.G.o?c=null:(q6(a),c=a.K.c*D5(a.G),d=new u6(a.w,b,c),1==d.c&&0==d.a&&0==d.b?d=null:(r6(d,a.K),s6(d,a.w)),p6(a,b,c,131072),c=d);On(a.G,0!=(a.B&256)?31:0!=(a.B&512)?47:0!=(a.B&1024)?79:15);S5(a);a.N.Qg();a.T.Qg();C5(a);d6(a,a.Q);a.F=!0;for(d=0;d<a.G.o;++d)Z5(a,d);a.F=!1;d=a.K.c*D5(a.G);L5(a,d);p6(a,b,d,131072);var e;if(e=b){e=\na.w.d;var f=a.w.e,g=a.w.c,h=a.w.b,j,l,m,q;b.cg()||0>=g||0>=h?e=!1:(j=b.d,m=b.e,l=j+b.c,q=m+b.b,e=j<=e&&e+g<=l&&m<=f&&f+h<=q);e=!e}e&&(b=new u6(a.w,b,d),r6(b,a.K),s6(b,a.w),d=a.x,d.a=d.a*b.c+b.a,d.b=d.b*b.c+b.b,c&&r6(b,c))}if(0!=a.G.o){On(a.G,0!=(a.B&256)?31:0!=(a.B&512)?47:0!=(a.B&1024)?79:15);C5(a);b=!1;a.r=C(B,w,-1,a.G.o,1);for(c=0;c<a.G.o;++c)a.r[c]=a.G.s[c]&448,0!=a.r[c]&&(b=!0),Jp(a.G,c)&&(a.r[c]=128),0!=(a.G.s[c]&131072)&&0==(a.B&4096)&&(a.r[c]=256);H5(a,-10);if(a.G.E){d=a.P;H5(a,-7);for(c=\n0;c<a.G.c;++c)0!=(a.G.w[c]&536870912)&&j6(a,N5(a.K,lo(a.G,c))-d,O5(a.K,mo(a.G,c))-d,2*d);a.n=2*a.P;f=new F5;for(e=0;e<a.G.p;++e)c=D(a.G,0,e),d=D(a.G,1,e),0!=(a.G.w[c]&a.G.w[d]&536870912)&&(f.a=N5(a.K,lo(a.G,c)),f.c=O5(a.K,mo(a.G,c)),f.b=N5(a.K,lo(a.G,d)),f.d=O5(a.K,mo(a.G,d)),I5(a,f))}a.n=2*a.L;f=new F5;for(e=0;e<a.G.p;++e)c=D(a.G,0,e),d=D(a.G,1,e),0!=(a.G.z[e]&131072)&&(f.a=N5(a.K,lo(a.G,c)),f.c=O5(a.K,mo(a.G,c)),f.b=N5(a.K,lo(a.G,d)),f.d=O5(a.K,mo(a.G,d)),H5(a,-2),I5(a,f));if(a.G.E){H5(a,320);if(0!=\n(a.B&8))for(c=0;c<a.G.c;++c)0!=(a.G.w[c]&-536870913)&&j6(a,N5(a.K,lo(a.G,c))-a.S/2,O5(a.K,mo(a.G,c))-a.S/2,a.S);for(e=0;e<a.G.d;++e)0!=a.G.A[e]&&(c=D(a.G,0,e),d=D(a.G,1,e),j6(a,(N5(a.K,lo(a.G,c))+N5(a.K,lo(a.G,d))-a.S)/2,(O5(a.K,mo(a.G,c))+O5(a.K,mo(a.G,d))-a.S)/2,a.S))}0==(a.B&32)&&(d=x6(a.G),null!=d&&(0==a.x.a&&0==a.x.b&&(c=a.K.c*D5(a.G),q6(a),L5(a,c),p6(a,null,c,0)),d6(a,I(a.y)),H5(a,448),k6(a,d,a.x.a,a.x.b+0.30000001192092896*a.y)));d6(a,a.Q);a.n=a.R;H5(a,a.J);S5(a);a.N.Qg();a.T.Qg();for(c=0;c<\na.G.o;++c)R5(a,c)?(H5(a,-3),Z5(a,c),H5(a,a.J)):0!=a.r[c]?(H5(a,a.r[c]),Z5(a,c),H5(a,a.J)):!b&&1!=a.G.x[c]&&6!=a.G.x[c]&&0==(a.B&2048)&&null==vp(a.G,c)&&a.G.x[c]<An.length?(d=a,e=An[a.G.x[c]],g=f=void 0,f=(zH(),AH),g=new C6(e),e=A6(g,f),d.z=-5,d.e=Nk+(e.d>>16&255)+Zb+(e.d>>8&255)+Zb+(e.d&255)+Ub,Z5(a,c),H5(a,a.J)):Z5(a,c);for(c=new Yp(a.N);c.b<c.d.ng();)b=Zp(c),H5(a,b.a),j6(a,b.b-a.O/2,b.c-a.O/2,a.O);H5(a,a.J);c=!1;for(b=0;b<a.G.d;++b)d=null,0!=(a.G.A[b]&16320)?(e=(a.G.A[b]&960)>>6,d=((a.G.A[b]&960)>>\n6)+((a.G.A[b]&15360)>>10),d=e==d?jh+e+rh:jh+e+Hd+d+rh):0!=(a.G.A[b]&786432)?d=262144==(a.G.A[b]&786432)?uh:32==(a.G.A[b]&48)?"r!a":y5:0!=(a.G.A[b]&48)&&(d=32==(a.G.A[b]&48)?B5:"!r"),e=(a.G.A[b]&114688)>>14,0!=e&&(d=(null==d?n:d)+e),null!=d&&(h=D(a.G,0,b),j=D(a.G,1,b),c||(d6(a,~~((2*a.Q+1)/3)),c=!0),f=(N5(a.K,lo(a.G,h))+N5(a.K,lo(a.G,j)))/2,g=(O5(a.K,mo(a.G,h))+O5(a.K,mo(a.G,j)))/2,e=N5(a.K,lo(a.G,j))-N5(a.K,lo(a.G,h)),j=O5(a.K,mo(a.G,j))-O5(a.K,mo(a.G,h)),h=Math.sqrt(e*e+j*j),m=0.6*a6(a,d),l=0.55*\na.o,0!=h&&(0<e?b6(a,f+m*j/h,g-l*e/h,d,!0):b6(a,f-m*j/h,g+l*e/h,d,!0)));c&&d6(a,a.Q);a.q=C(E6,o,81,a.G.o,0);for(b=0;b<a.G.p;++b)(2==a.G.B[b]||26==a.G.B[b]||64==a.G.B[b])&&g6(a,b);for(b=0;b<a.G.p;++b)2!=a.G.B[b]&&26!=a.G.B[b]&&64!=a.G.B[b]&&g6(a,b);if(0==(a.B&64))for(b=0;b<a.G.p;++b)if(0!=(a.G.z[b]&48)>>4){switch((a.G.z[b]&48)>>4){case 1:g=2==Wn(a.G,b)?df:0!=(a.G.z[b]&4)?sk:ig;break;case 2:g=2==Wn(a.G,b)?"Z":0!=(a.G.z[b]&4)?xj:A5;break;default:g=Wd}d6(a,~~((2*a.Q+1)/3));H5(a,G5(a.G,b)?-3:448);e=D(a.G,\n0,b);f=D(a.G,1,b);c=(N5(a.K,lo(a.G,e))+N5(a.K,lo(a.G,f)))/2;d=(O5(a.K,mo(a.G,e))+O5(a.K,mo(a.G,f)))/2;h=(N5(a.K,lo(a.G,e))-N5(a.K,lo(a.G,f)))/3;e=(O5(a.K,mo(a.G,e))-O5(a.K,mo(a.G,f)))/3;b6(a,c+e,d-h,g,!0);H5(a,a.J);d6(a,a.Q)}if(0!=(a.B&4)){d6(a,~~((2*a.Q+1)/3));H5(a,384);for(b=0;b<a.G.p;++b)e=D(a.G,0,b),f=D(a.G,1,b),g=0!=(a.G.z[b]&512)?"d":jo(a.G,b)?uh:n,c=(N5(a.K,lo(a.G,e))+N5(a.K,lo(a.G,f)))/2,d=(O5(a.K,mo(a.G,e))+O5(a.K,mo(a.G,f)))/2,b6(a,c,d,g+n+b,!0);H5(a,a.J);d6(a,a.Q)}}c=w6(a)}oL(c)};\nfunction D6(a,b){var c;zn();this.w=new tJ;this.G=a;this.B=0;this.E=1;this.K=new t6;this.T=new Pp;this.N=new Pp;this.t=C(Pn,Im,-1,this.G.o,2);this.x=new rJ;this.J=0;this.z=-1;c=(zH(),AH);var d=Dn;y6();this.u=new Cn(I((c.d>>16&255)+0.30000001192092896*((d.d>>16&255)-(c.d>>16&255))),I((c.d>>8&255)+0.30000001192092896*((d.d>>8&255)-(c.d>>8&255))),I((c.d&255)+0.30000001192092896*((d.d&255)-(c.d&255))));this.v=A6(Bn,c);this.C=Fn;this.D=En;this.c=new Pp;this.b=new Pp;this.d=new Uv;this.f=new mI(uf,0,12);\nnew mI(uf,0,120);this.k=n;++$5;this.a=b}x(723,28,{},D6);_.Fd=function(a){var b;b=n;null!=this.a&&0<this.a.length&&(b=yQ(this.a,"(\\\\r|\\\\n|\\\\r\\\\n)",oh),b=a+"<chemical:x-mdl-molfile>"+b+"<\/chemical:x-mdl-molfile>\\n");return b};_.Gd=function(a){return\'xmlns:chemical="http://www.ch.ic.ac.uk/chemime/"\'+a};_.a=null;Z(3);Z(28);Z(723);var E6=WR(956,sJ);Z(4);Z(5);Z(19);U(dY)(8);function UB(){return n};\n//@ sourceURL=8.js\n')
