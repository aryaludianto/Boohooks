(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69181143"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"07ac":function(t,e,r){var n=r("23e7"),o=r("6f53").values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("60ae"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,r){"use strict";var n=r("23e7"),o=r("5a34"),i=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),i=r("d039"),a=r("ad6d"),c="toString",s=RegExp.prototype,u=s[c],f=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(f||l)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,o=r("69f3"),i=r("7dd0"),a="String Iterator",c=o.set,s=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},"44e7":function(t,e,r){var n=r("861d"),o=r("c6b6"),i=r("b622"),a=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"4df4":function(t,e,r){"use strict";var n=r("f8c2"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,v=o(t),b="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,m=void 0!==p,g=0,y=u(v);if(m&&(p=n(p,h>2?arguments[2]:void 0,2)),void 0==y||b==Array&&a(y))for(e=c(v.length),r=new b(e);e>g;g++)s(r,g,m?p(v[g],g):v[g]);else for(l=y.call(v),d=l.next,r=new b;!(f=d.call(l)).done;g++)s(r,g,m?i(l,p,[f.value,g],!0):f.value);return r.length=g,r}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5e25":function(t,e,r){"use strict";var n=r("f85a"),o=r.n(n);o.a},6547:function(t,e,r){var n=r("a691"),o=r("1d80"),i=function(t){return function(e,r){var i,a,c=String(o(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6f53":function(t,e,r){var n=r("83ab"),o=r("df75"),i=r("fc6a"),a=r("d1e7").f,c=function(t){return function(e){var r,c=i(e),s=o(c),u=s.length,f=0,l=[];while(u>f)r=s[f++],n&&!a.call(c,r)||l.push(t?[r,c[r]]:c[r]);return l}};t.exports={entries:c(!0),values:c(!1)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("c032"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},7535:function(t,e,r){},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},9994:function(t,e,r){},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),i=r("e8b5"),a=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),v=r("60ae"),b=d("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",m=v>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),g=l("concat"),y=function(t){if(!a(t))return!1;var e=t[b];return void 0!==e?!!e:i(t)},k=!m||!g;n({target:"Array",proto:!0,forced:k},{concat:function(t){var e,r,n,o,i,a=c(this),l=f(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?a:arguments[e],y(i)){if(o=s(i.length),d+o>h)throw TypeError(p);for(r=0;r<o;r++,d++)r in i&&u(l,d,i[r])}else{if(d>=h)throw TypeError(p);u(l,d++,i)}return l.length=d,l}})},a434:function(t,e,r){"use strict";var n=r("23e7"),o=r("23cb"),i=r("a691"),a=r("50c4"),c=r("7b0b"),s=r("65f0"),u=r("8418"),f=r("1dde"),l=Math.max,d=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f("splice")},{splice:function(t,e){var r,n,f,h,p,m,g=c(this),y=a(g.length),k=o(t,y),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=y-k):(r=w-2,n=d(l(i(e),0),y-k)),y+r-n>v)throw TypeError(b);for(f=s(g,n),h=0;h<n;h++)p=k+h,p in g&&u(f,h,g[p]);if(f.length=n,r<n){for(h=k;h<y-n;h++)p=h+n,m=h+r,p in g?g[m]=g[p]:delete g[m];for(h=y;h>y-n+r;h--)delete g[h-1]}else if(r>n)for(h=y-n;h>k;h--)p=h+n-1,m=h+r-1,p in g?g[m]=g[p]:delete g[m];for(h=0;h<r;h++)g[h+k]=arguments[h+2];return g.length=y-n+r,f}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),v=r("861d"),b=r("825a"),h=r("7b0b"),p=r("fc6a"),m=r("c04e"),g=r("5c6c"),y=r("7c73"),k=r("df75"),w=r("241c"),S=r("057f"),T=r("7418"),x=r("06cf"),C=r("9bf2"),O=r("d1e7"),E=r("9112"),M=r("6eeb"),H=r("5692"),A=r("f772"),N=r("d012"),j=r("90e3"),G=r("b622"),z=r("c032"),L=r("746f"),B=r("d44e"),P=r("69f3"),X=r("b727").forEach,J=A("hidden"),Q="Symbol",W="prototype",D=G("toPrimitive"),F=P.set,Y=P.getterFor(Q),V=Object[W],R=o.Symbol,q=i("JSON","stringify"),I=x.f,U=C.f,K=S.f,Z=O.f,_=H("symbols"),$=H("op-symbols"),tt=H("string-to-symbol-registry"),et=H("symbol-to-string-registry"),rt=H("wks"),nt=o.QObject,ot=!nt||!nt[W]||!nt[W].findChild,it=c&&f((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=I(V,e);n&&delete V[e],U(t,e,r),n&&t!==V&&U(V,e,n)}:U,at=function(t,e){var r=_[t]=y(R[W]);return F(r,{type:Q,tag:t,description:e}),c||(r.description=e),r},ct=s&&"symbol"==typeof R.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof R},st=function(t,e,r){t===V&&st($,e,r),b(t);var n=m(e,!0);return b(r),l(_,n)?(r.enumerable?(l(t,J)&&t[J][n]&&(t[J][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,J)||U(t,J,g(1,{})),t[J][n]=!0),it(t,n,r)):U(t,n,r)},ut=function(t,e){b(t);var r=p(e),n=k(r).concat(bt(r));return X(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=m(t,!0),r=Z.call(this,e);return!(this===V&&l(_,e)&&!l($,e))&&(!(r||!l(this,e)||!l(_,e)||l(this,J)&&this[J][e])||r)},dt=function(t,e){var r=p(t),n=m(e,!0);if(r!==V||!l(_,n)||l($,n)){var o=I(r,n);return!o||!l(_,n)||l(r,J)&&r[J][n]||(o.enumerable=!0),o}},vt=function(t){var e=K(p(t)),r=[];return X(e,(function(t){l(_,t)||l(N,t)||r.push(t)})),r},bt=function(t){var e=t===V,r=K(e?$:p(t)),n=[];return X(r,(function(t){!l(_,t)||e&&!l(V,t)||n.push(_[t])})),n};if(s||(R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(t),r=function(t){this===V&&r.call($,t),l(this,J)&&l(this[J],e)&&(this[J][e]=!1),it(this,e,g(1,t))};return c&&ot&&it(V,e,{configurable:!0,set:r}),at(e,t)},M(R[W],"toString",(function(){return Y(this).tag})),O.f=lt,C.f=st,x.f=dt,w.f=S.f=vt,T.f=bt,c&&(U(R[W],"description",{configurable:!0,get:function(){return Y(this).description}}),a||M(V,"propertyIsEnumerable",lt,{unsafe:!0}))),u||(z.f=function(t){return at(G(t),t)}),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:R}),X(k(rt),(function(t){L(t)})),n({target:Q,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=R(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:vt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:f((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(h(t))}}),q){var ht=!s||f((function(){var t=R();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(v(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,q.apply(null,o)}})}R[W][D]||E(R[W],D,R[W].valueOf),B(R,Q),N[J]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},ab13:function(t,e,r){var n=r("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,s="name";!n||s in i||o(i,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("f8c2"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(v,b,h,p){for(var m,g,y=i(v),k=o(y),w=n(b,h,3),S=a(k.length),T=0,x=p||c,C=e?x(v,S):r?x(v,0):void 0;S>T;T++)if((d||T in k)&&(m=k[T],g=w(m,T,y),t))if(e)C[T]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return T;case 2:s.call(C,m)}else if(f)return!1;return l?-1:u||f?f:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c032:function(t,e,r){var n=r("b622");e.f=n},c71c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"books"},[r("div",{attrs:{id:"large-th"}},[r("div",{staticClass:"container"},["all"===t.keyword?r("div",{staticClass:"welcome"},[r("h1",[t._v("Welcome to Boohooks!")]),r("p",[t._v("You can start looking by searching any book you desire")])]):null!=t.keyword?r("div",{staticClass:"welcome"},[r("h2",[t._v('Boohooks list of "'+t._s(t.keyword)+'"')])]):r("div",{staticClass:"welcome"},[r("h2",[t._v(t._s(t.books[0].volumeInfo.authors[0])+"'s Boohooks")])]),r("br"),r("div",{staticClass:"books-container"},t._l(t.books,(function(e,n){return r("div",{key:n,attrs:{id:"list-th"}},[r("router-link",{attrs:{to:{name:"BookDetails",params:{bookDetails:e}}}},[r("div",{staticClass:"book read"},[r("img",{staticClass:"cover",attrs:{src:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:t.noCoverUrl}}),r("p",{staticClass:"description title"},[t._v(t._s(e.volumeInfo.title))])])])],1)})),0)])])])},o=[],i=r("2b0e"),a=i["a"].extend({name:"Book",components:{},props:{books:Array,keyword:String},data:function(){return{noCoverUrl:"data:image/png;base64,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"}}}),c=a,s=(r("dc96"),r("2877")),u=Object(s["a"])(c,n,o,!1,null,"6f50a53e",null);e["a"]=u.exports},caad:function(t,e,r){"use strict";var n=r("23e7"),o=r("4d64").includes,i=r("44d2");n({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d178:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar",class:t.burgerBar},[r("div",{staticClass:"mobile-res",class:t.burgerBar},[r("div",{staticClass:"nav",class:t.burgerBar,on:{click:t.burgerBarClick}},[r("h2",{staticClass:"title"},[t._v("Boohooks")])]),r("div",{staticClass:"nav-content-res",class:t.burgerBar},[r("a",{class:t.activeStatus.home,attrs:{href:"/"}},[t._v("Home")]),r("div",{staticClass:"dropdown"},[t._m(0),r("div",{staticClass:"dropdown-content"},t._l(t.filteredCategories,(function(e){return r("a",{key:e,attrs:{value:e},on:{click:function(r){return t.onClick(e)}}},[t._v(t._s(e&&e))])})),0)]),r("router-link",{class:t.activeStatus.random,attrs:{to:"/randomPage"}},[t._v(" Random ")])],1),"home"==this.$route.name?r("div",{staticClass:"keyword"},[r("p",[t._v("Search By :")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{placeholder:"keyword"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(t.keyword)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]):t._e()]),r("div",{staticClass:"desktop-res"},[r("h2",{staticClass:"title"},[t._v("Boohooks")]),r("div",{staticClass:"nav-content"},[r("a",{class:t.activeStatus.home,attrs:{href:"/"}},[t._v("Home")]),r("div",{staticClass:"dropdown"},[t._m(1),r("div",{staticClass:"dropdown-content"},t._l(t.filteredCategories,(function(e){return r("a",{key:e,attrs:{value:e},on:{click:function(r){return t.onClick(e)}}},[t._v(t._s(e&&e))])})),0)]),r("router-link",{class:t.activeStatus.random,attrs:{to:"/randomPage"}},[t._v(" Random ")])],1),"home"==this.$route.name?r("div",{staticClass:"keyword"},[r("p",[t._v("Search By :")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{placeholder:"keyword"},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(t.keyword)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]):t._e()])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"dropbtn"},[t._v(" Sort By Categories "),r("i",{staticClass:"fa fa-caret-down"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"dropbtn"},[t._v(" Sort By Categories "),r("i",{staticClass:"fa fa-caret-down"})])}];r("99af"),r("caad"),r("d81d"),r("a434"),r("b0c0"),r("07ac"),r("2532");function i(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return i(t)||a(t)||c()}var u=r("2b0e"),f=u["a"].extend({name:"Navbar",props:{data:Array},created:function(){"home"===this.$route.name?this.activeStatus={home:"inactive",random:""}:this.activeStatus={home:"",random:"inactive"},"BookDetails"===this.$route.name&&(this.activeStatus={home:"",random:""})},data:function(){return{keyword:null,burgerBar:"",activeStatus:{home:"",random:""}}},methods:{onSubmit:function(t){this.$emit("submit",t)},onClick:function(t){this.$emit("click",t),this.burgerBarClick()},burgerBarClick:function(){""===this.burgerBar?this.burgerBar="active":this.burgerBar=""}},computed:{filteredCategories:function(){var t=[];this.data&&Object.values(this.data).map((function(e){void 0!==e.volumeInfo.categories&&t.push(e.volumeInfo.categories[0])}));var e=t.reduce((function(t,e){return t.includes(e)?t:[].concat(s(t),[e])}),[]);return e.splice(0,0,"All"),e}}}),l=f,d=(r("db13"),r("2877")),v=Object(d["a"])(l,n,o,!1,null,"48133d71",null);e["a"]=v.exports},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("d039"),a=r("1dde"),c=a("map"),s=c&&!i((function(){[].map.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},db13:function(t,e,r){"use strict";var n=r("9994"),o=r.n(n);o.a},dc96:function(t,e,r){"use strict";var n=r("7535"),o=r.n(n);o.a},ddb0:function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("e260"),a=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),f=i.values;for(var l in o){var d=n[l],v=d&&d.prototype;if(v){if(v[s]!==f)try{a(v,s,f)}catch(h){v[s]=f}if(v[u]||a(v,u,l),o[l])for(var b in i)if(v[b]!==i[b])try{a(v,b,i[b])}catch(h){v[b]=i[b]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var v=d.prototype=f.prototype;v.constructor=d;var b=v.toString,h="Symbol(test)"==String(f("test")),p=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=b.call(t);if(a(l,t))return"";var r=h?e.slice(7,-1):e.replace(p,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f85a:function(t,e,r){},fd2d:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("h2",{staticClass:"title"},[t._v("Boohooks")])])}],i=r("2b0e"),a=i["a"].extend({name:"Footer",props:{},data:function(){return{}}}),c=a,s=(r("5e25"),r("2877")),u=Object(s["a"])(c,n,o,!1,null,"4043924f",null);e["a"]=u.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-69181143.8345b21e.js.map