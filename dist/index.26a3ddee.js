var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,m,v,g,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},S=b.parcelRequire3a11;null==S&&((S=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequire3a11=S),(0,S.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),S("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.26a3ddee.js","eyyUD","icons.c14567a0.svg"]'));var E={},O={},F=function(e){return e&&e.Math===Math&&e};O=F("object"==typeof globalThis&&globalThis)||F("object"==typeof window&&window)||F("object"==typeof self&&self)||F("object"==typeof b&&b)||F("object"==typeof O&&O)||function(){return this}()||Function("return this")();var M={},j={};M=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},P={};P=!j(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var H=Function.prototype.call;$=P?H.bind(H):function(){return H.apply(H,arguments)};var T={}.propertyIsEnumerable,q=Object.getOwnPropertyDescriptor;o=q&&!T.call({1:2},1)?function(e){var t=q(this,e);return!!t&&t.enumerable}:T;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},x={},A={},C=Function.prototype,N=C.call,D=P&&C.bind.bind(N,N),R={},z=(A=P?D:function(e){return function(){return N.apply(e,arguments)}})({}.toString),U=A("".slice);R=function(e){return U(z(e),8,-1)};var W=Object,B=A("".split);x=j(function(){return!W("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?B(e,""):W(e)}:W;var J={},V={};V=function(e){return null==e};var Q=TypeError;J=function(e){if(V(e))throw new Q("Can't call method on "+e);return e},I=function(e){return x(J(e))};var G={},K={},Y={},X={},Z="object"==typeof document&&document.all;X=void 0===Z&&void 0!==Z?function(e){return"function"==typeof e||e===Z}:function(e){return"function"==typeof e},Y=function(e){return"object"==typeof e?null!==e:X(e)};var ee={},et={};et=function(e,t){var r;return arguments.length<2?(r=O[e],X(r)?r:void 0):O[e]&&O[e][t]};var er={};er=A({}.isPrototypeOf);var en={},ei={},eo={},ea={};ea="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var es=O.process,ec=O.Deno,eu=es&&es.versions||ec&&ec.version,el=eu&&eu.v8;el&&(s=(a=el.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&ea&&(!(a=ea.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=ea.match(/Chrome\/(\d+)/))&&(s=+a[1]),eo=s;var ed=O.String;en=(ei=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol("symbol detection");return!ed(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ep=Object;ee=en?function(e){return"symbol"==typeof e}:function(e){var t=et("Symbol");return X(t)&&er(t.prototype,ep(e))};var ef={},eh={},em={},ev=String;em=function(e){try{return ev(e)}catch(e){return"Object"}};var eg=TypeError;eh=function(e){if(X(e))return e;throw new eg(em(e)+" is not a function")},ef=function(e,t){var r=e[t];return V(r)?void 0:eh(r)};var ey={},eb=TypeError;ey=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!Y(n=$(r,e))||X(r=e.valueOf)&&!Y(n=$(r,e))||"string"!==t&&X(r=e.toString)&&!Y(n=$(r,e)))return n;throw new eb("Can't convert object to primitive value")};var e_={},ew={},ek={};ek=!1;var eS={},eE=Object.defineProperty;eS=function(e,t){try{eE(O,e,{value:t,configurable:!0,writable:!0})}catch(r){O[e]=t}return t};var eO="__core-js_shared__",eF=ew=O[eO]||eS(eO,{});(eF.versions||(eF.versions=[])).push({version:"3.37.0",mode:ek?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",source:"https://github.com/zloirock/core-js"}),e_=function(e,t){return ew[e]||(ew[e]=t||{})};var eM={},ej={},e$=Object;ej=function(e){return e$(J(e))};var eP=A({}.hasOwnProperty);eM=Object.hasOwn||function(e,t){return eP(ej(e),t)};var eH={},eT=0,eq=Math.random(),eL=A(1..toString);eH=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eL(++eT+eq,36)};var eI=O.Symbol,ex=e_("wks"),eA=en?eI.for||eI:eI&&eI.withoutSetter||eH,eC=TypeError,eN=(eM(ex,e="toPrimitive")||(ex[e]=ei&&eM(eI,e)?eI[e]:eA("Symbol."+e)),ex[e]);K=function(e,t){if(!Y(e)||ee(e))return e;var r,n=ef(e,eN);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!Y(r)||ee(r))return r;throw new eC("Can't convert object to primitive value")}return void 0===t&&(t="number"),ey(e,t)},G=function(e){var t=K(e,"string");return ee(t)?t:t+""};var eD={},eR={},ez=O.document,eU=Y(ez)&&Y(ez.createElement);eR=function(e){return eU?ez.createElement(e):{}},eD=!M&&!j(function(){return 7!==Object.defineProperty(eR("div"),"a",{get:function(){return 7}}).a});var eW=Object.getOwnPropertyDescriptor;i=M?eW:function(e,t){if(e=I(e),t=G(t),eD)try{return eW(e,t)}catch(e){}if(eM(e,t))return L(!$(o,e,t),e[t])};var eB={},eJ={};eJ=M&&j(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eV={},eQ=String,eG=TypeError;eV=function(e){if(Y(e))return e;throw new eG(eQ(e)+" is not an object")};var eK=TypeError,eY=Object.defineProperty,eX=Object.getOwnPropertyDescriptor,eZ="enumerable",e0="configurable",e1="writable";c=M?eJ?function(e,t,r){if(eV(e),t=G(t),eV(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e1 in r&&!r[e1]){var n=eX(e,t);n&&n[e1]&&(e[t]=r.value,r={configurable:e0 in r?r[e0]:n[e0],enumerable:eZ in r?r[eZ]:n[eZ],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eV(e),t=G(t),eV(r),eD)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eB=M?function(e,t,r){return c(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var e2={},e7={},e4=Function.prototype,e3=M&&Object.getOwnPropertyDescriptor,e8=eM(e4,"name")&&(!M||M&&e3(e4,"name").configurable),e9={},e5=A(Function.toString);X(ew.inspectSource)||(ew.inspectSource=function(e){return e5(e)}),e9=ew.inspectSource;var e6={},te={},tt=O.WeakMap;te=X(tt)&&/native code/.test(String(tt));var tr={},tn=e_("keys");tr=function(e){return tn[e]||(tn[e]=eH(e))};var ti={};ti={};var to="Object already initialized",ta=O.TypeError,ts=O.WeakMap;if(te||ew.state){var tc=ew.state||(ew.state=new ts);tc.get=tc.get,tc.has=tc.has,tc.set=tc.set,u=function(e,t){if(tc.has(e))throw new ta(to);return t.facade=e,tc.set(e,t),t},l=function(e){return tc.get(e)||{}},d=function(e){return tc.has(e)}}else{var tu=tr("state");ti[tu]=!0,u=function(e,t){if(eM(e,tu))throw new ta(to);return t.facade=e,eB(e,tu,t),t},l=function(e){return eM(e,tu)?e[tu]:{}},d=function(e){return eM(e,tu)}}var tl=(e6={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=l(t)).type!==e)throw new ta("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=e6.get,tf=String,th=Object.defineProperty,tm=A("".slice),tv=A("".replace),tg=A([].join),ty=M&&!j(function(){return 8!==th(function(){},"length",{value:8}).length}),tb=String(String).split("String"),t_=e7=function(e,t,r){"Symbol("===tm(tf(t),0,7)&&(t="["+tv(tf(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eM(e,"name")||e8&&e.name!==t)&&(M?th(e,"name",{value:t,configurable:!0}):e.name=t),ty&&r&&eM(r,"arity")&&e.length!==r.arity&&th(e,"length",{value:r.arity});try{r&&eM(r,"constructor")&&r.constructor?M&&th(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tl(e);return eM(n,"source")||(n.source=tg(tb,"string"==typeof t?t:"")),e};Function.prototype.toString=t_(function(){return X(this)&&tp(this).source||e9(this)},"toString"),e2=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(X(r)&&e7(r,o,n),n.global)i?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tw={},tk={},tS={},tE={},tO={},tF={},tM=Math.ceil,tj=Math.floor;tF=Math.trunc||function(e){var t=+e;return(t>0?tj:tM)(t)},tO=function(e){var t=+e;return t!=t||0===t?0:tF(t)};var t$=Math.max,tP=Math.min;tE=function(e,t){var r=tO(e);return r<0?t$(r+t,0):tP(r,t)};var tH={},tT={},tq=Math.min;tT=function(e){var t=tO(e);return t>0?tq(t,9007199254740991):0},tH=function(e){return tT(e.length)};var tL=function(e){return function(t,r,n){var i,o=I(t),a=tH(o);if(0===a)return!e&&-1;var s=tE(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tI={includes:tL(!0),indexOf:tL(!1)}.indexOf,tx=A([].push);tS=function(e,t){var r,n=I(e),i=0,o=[];for(r in n)!eM(ti,r)&&eM(n,r)&&tx(o,r);for(;t.length>i;)eM(n,r=t[i++])&&(~tI(o,r)||tx(o,r));return o};var tA=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tS(e,tA)},f=Object.getOwnPropertySymbols;var tC=A([].concat);tk=et("Reflect","ownKeys")||function(e){var t=p(eV(e));return f?tC(t,f(e)):t},tw=function(e,t,r){for(var n=tk(t),o=0;o<n.length;o++){var a=n[o];eM(e,a)||r&&eM(r,a)||c(e,a,i(t,a))}};var tN={},tD=/#|\.prototype\./,tR=function(e,t){var r=tU[tz(e)];return r===tB||r!==tW&&(X(t)?j(t):!!t)},tz=tR.normalize=function(e){return String(e).replace(tD,".").toLowerCase()},tU=tR.data={},tW=tR.NATIVE="N",tB=tR.POLYFILL="P";tN=tR,E=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?O:l?O[c]||eS(c,{}):O[c]&&O[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tN(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tw(a,o)}(e.sham||o&&o.sham)&&eB(a,"sham",!0),e2(r,n,a,e)}};var tJ={},tV={},tQ=Function.prototype,tG=tQ.apply,tK=tQ.call;tV="object"==typeof Reflect&&Reflect.apply||(P?tK.bind(tG):function(){return tK.apply(tG,arguments)});var tY={},tX={},tZ=(tX=function(e){if("Function"===R(e))return A(e)})(tX.bind);tY=function(e,t){return eh(e),void 0===t?e:P?tZ(e,t):function(){return e.apply(t,arguments)}};var t0={};t0=et("document","documentElement");var t1={};t1=A([].slice);var t2={},t7=TypeError;t2=function(e,t){if(e<t)throw new t7("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t3={};t3="process"===R(O.process);var t8=O.setImmediate,t9=O.clearImmediate,t5=O.process,t6=O.Dispatch,re=O.Function,rt=O.MessageChannel,rr=O.String,rn=0,ri={},ro="onreadystatechange";j(function(){h=O.location});var ra=function(e){if(eM(ri,e)){var t=ri[e];delete ri[e],t()}},rs=function(e){return function(){ra(e)}},rc=function(e){ra(e.data)},ru=function(e){O.postMessage(rr(e),h.protocol+"//"+h.host)};t8&&t9||(t8=function(e){t2(arguments.length,1);var t=X(e)?e:re(e),r=t1(arguments,1);return ri[++rn]=function(){tV(t,void 0,r)},m(rn),rn},t9=function(e){delete ri[e]},t3?m=function(e){t5.nextTick(rs(e))}:t6&&t6.now?m=function(e){t6.now(rs(e))}:rt&&!t4?(g=(v=new rt).port2,v.port1.onmessage=rc,m=tY(g.postMessage,g)):O.addEventListener&&X(O.postMessage)&&!O.importScripts&&h&&"file:"!==h.protocol&&!j(ru)?(m=ru,O.addEventListener("message",rc,!1)):m=ro in eR("script")?function(e){t0.appendChild(eR("script"))[ro]=function(){t0.removeChild(this),ra(e)}}:function(e){setTimeout(rs(e),0)});var rl=(tJ={set:t8,clear:t9}).clear;E({global:!0,bind:!0,enumerable:!0,forced:O.clearImmediate!==rl},{clearImmediate:rl});var rd=tJ.set,rp={},rf={};rf="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rh=O.Function,rm=/MSIE .\./.test(ea)||rf&&((t=O.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rp=function(e,t){var r=t?2:1;return rm?function(n,i){var o=t2(arguments.length,1)>r,a=X(n)?n:rh(n),s=o?t1(arguments,r):[],c=o?function(){tV(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rv=O.setImmediate?rp(rd,!1):rd;E({global:!0,bind:!0,enumerable:!0,forced:O.setImmediate!==rv},{setImmediate:rv});const rg="https://forkify-api.herokuapp.com/api/v2/recipes/",ry="5d7b88b3-2c00-444c-b1ce-5e42a978be9e",rb=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},r_={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rw=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rk=async function(e){try{let t=await rb(`${rg}${e}?key =${ry}`);r_.recipe=rw(t),r_.bookmarks.some(t=>t.id===e)?r_.recipe.bookmarked=!0:r_.recipe.bookmarked=!1,console.log(r_.recipe)}catch(e){throw e}},rS=async function(e){try{r_.search.query=e;let t=await rb(`${rg}?search=${e}&key =${ry}`);console.log(t),r_.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:recipe.publisher,sourceUrl:e.source_url,image:e.image_url,...e.key&&{key:e.key}})),r_.search.page=1}catch(e){throw e}},rE=function(e=r_.search.page){r_.search.page=e;let t=(e-1)*r_.search.resultsPerPage,r=e*r_.search.resultsPerPage;return r_.search.results.slice(t,r)},rO=function(e){r_.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/r_.recipe.servings}),r_.recipe.servings=e},rF=function(){localStorage.setItem("bookmarks",JSON.stringify(r_.bookmarks))},rM=function(){r_.bookmarks.push(recipe),recipe.id===r_.recipe.id&&(r_.recipe.bookmarked=!0),rF()},rj=function(){let e=r_.bookmarks.findIndex(e=>e.id===id);r_.bookmarks.splice(e,1),id===r_.recipe.id&&(r_.recipe.bookmarked=!1),rF()};!function(){let e=localStorage.getItem("bookmarks");e&&(r_.bookmarks=JSON.parse(e))}();const r$=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Plase use the correct format.");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rb(`${rg}?key =${ry}`,r);r_.recipe=rw(n),rM(r_.recipe)}catch(e){console.log(e)}};var rP={};rP=new URL("icons.c14567a0.svg",import.meta.url).toString();class rH{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{e.isEqualNode(n)||e.firstChild?.nodeValue.trim()===""||(n.textcontent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach(e=>n.setAttributes(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
  <div class="spinner">
          <svg>
            <use href="${_(rP)}#icon-loader"></use>
          </svg>
        </div>`;this._clear,this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
          <div class="error">
            <div>
              <svg>
                <use href="${_(rP)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear,this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
          <div class="message">
            <div>
              <svg>
                <use href="${_(rP)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear,this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rT extends rH{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=+r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="this._#data__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rP)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rP)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${_(rP)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${_(rP)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${_(rP)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${_(rP)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredients).join("")}           
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${_(rP)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `}_generateMarkupIngredients(e){return`<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${_(rP)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                pasta
              </div>
            </li>
          </ul>`}}var rq=new rT;class rL{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){return this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rI=new rL,rx=new class extends rH{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
          <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.image}}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>              
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                  <use href="${_(rP)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
                `}};class rA extends rH{_parentElement=document.querySelector(".results");_errorMessage="No recipe found for your query! Please try again";_message="";_generateMarkup(){return console.log(this._data),this._data.map(e=>rx.render(e,!1)).join()}}var rC=new rA;class rN extends rH{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet, find a nice recipe and bookmark it.";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rx.render(e,!1)).join()}}var rD=new rN;class rR extends rH{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rz=new rR;const rU=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rq.renderSpinner(),rC.update(rE()),rD.update(r_.bookmarks),await rk(e),rq.render(r_.recipe)}catch(e){rq.renderError()}},rW=async function(){try{rC.renderSpinner();let e=rI.getQuery();if(!e)return;await rS(e),rC.render(rE()),rC.render(r_.search)}catch(e){console.log(e)}},rB=async function(e){try{rz.renderSpinner(),await r$(e),console.log(r_.recipe),rq.render(r_.recipe),rz.renderMessage(),rD.render(r_.bookmarks),window.history.pushState(null,"",`${r_.recipe.id}`),setTimeout(()=>{},2500)}catch(e){console.error("\uD83D\uDCA3",e),rz.renderError(e.message)}};rD.addHandlerRender(function(){rD.render(r_.bookmarks)}),rq.addHandlerRender(rU),rq.addHandlerUpdateServings(function(e){rO(e),rq.update(r_.recipe)}),rq.addHandlerAddBookmark(function(){r_.recipe.bookmarked?rj(r_.recipe):rM(r_.recipe),rq.update(r_.recipe),rD.render(r_.bookmarks)}),rI.addHandlerSearch(rW),rC.addHandlerClick(function(e){rC.render(rE(e)),rC.render(r_.search)}),rz.addHandlerUpload(rB);
//# sourceMappingURL=index.26a3ddee.js.map
