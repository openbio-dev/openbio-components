/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='openbio-components']"));
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,l=null,s=!1,i=!1,a=arguments.length;for(;a-- >2;)k.push(arguments[a]);for(;k.length>0;){let t=k.pop();if(t&&void 0!==t.pop)for(a=t.length;a--;)k.push(t[a]);else"boolean"==typeof t&&(t=null),(i="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(i=!1)),i&&s?l[l.length-1].vtext+=t:null===l?l=[i?{vtext:t}:t]:l.push(i?{vtext:t}:t),s=i}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(a in t.class)t.class[a]&&k.push(a);t.class=k.join(" "),k.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],j):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,l:!1}}const l="$",s={},i={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},a=(t,n,o,s)=>{let i=o.t+l,a=o[i];if((2===o.s||1===o.s&&!t.u.i)&&(s["s-sc"]=a?e(o,s.mode):e(o)),a){let e=n.p.head;if(n.i)if(1===o.s)e=s.shadowRoot;else{const t=s.getRootNode();t.host&&(e=t)}let l=t.m.get(e);if(l||t.m.set(e,l={}),!l[i]){let t;{t=a.content.cloneNode(!0),l[i]=!0;const o=e.querySelectorAll("[data-styles]");n.v(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},f=e=>null!=e,u=e=>e.toLowerCase(),p="http://www.w3.org/1999/xlink",b=(e,t,n,o,l,s)=>{if("class"!==n||s)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!s&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.M(t);o&&o.g&&o.g[n]?v(t,n,l):"ref"!==n&&(v(t,n,null==l?"":l),null!=l&&!1!==l||e.u.k(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS(p,u(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS(p,u(t),n):e.setAttribute(t,n))})(t,n,l):(s||e.u.j(t,n)&&(null==l||!1===l))&&e.u.k(t,n);else n=u(n)in t?u(n.substring(2)):u(n[2])+n.substring(3),l?l!==o&&e.u.C(t,n,l,0):e.u.W(t,n,0);else if(o!==l){const e=m(o),n=m(l),s=e.filter(e=>!n.includes(e)),i=m(t.className).filter(e=>!s.includes(e)),a=n.filter(t=>!e.includes(t)&&!i.includes(t));i.push(...a),t.className=i.join(" ")}},m=e=>null==e||""===e?[]:e.trim().split(/\s+/),v=(e,t,n)=>{try{e[t]=n}catch(e){}},y=(e,t,n,o,l)=>{const i=11===n.o.nodeType&&n.o.host?n.o.host:n.o,a=t&&t.vattrs||s,r=n.vattrs||s;for(l in a)r&&null!=r[l]||null==a[l]||b(e,i,l,a[l],void 0,o,n.l);for(l in r)l in a&&r[l]===("value"===l||"checked"===l?i[l]:a[l])||b(e,i,l,a[l],r[l],o,n.l)};let M=!1;const $=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{$(e,t)}))},g=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),s=!1!==e.asyncQueue,i=Promise.resolve(),a=[],r=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(r);const t=s?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=r.length+c.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){a.push(e),1===a.length&&i.then(()=>p(a))},read:u(r),write:u(c)}}},k=[],j={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},C=(e,t,n)=>{const[o,l,,s,i,a]=e,r={color:{N:"color"}};if(s)for(t=0;t<s.length;t++)r[(n=s[t])[0]]={O:n[1],S:!!n[2],N:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{t:o,T:l,g:Object.assign({},r),s:i,R:a?a.map(W):void 0}},W=e=>({L:e[0],D:e[1],q:!!e[2],B:!!e[3],I:!!e[4]}),N=(e,t)=>f(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,O=(e,t,n)=>{e.P.add(t),e.F.has(t)||(e.F.set(t,!0),e.H?e.queue.write(()=>S(e,t,n)):e.queue.tick(()=>S(e,t,n)))},S=async(e,n,l,s,i,a)=>{if(e.F.delete(n),!e.U.has(n)){if(!(i=e.Z.get(n))){if((a=e.G.get(n))&&!a["s-rn"])return void(a["s-rc"]=a["s-rc"]||[]).push(()=>{S(e,n,l)});if(i=D(e,n,e.J.get(n),l))try{i.componentWillLoad&&await i.componentWillLoad()}catch(t){e.K(t,3,n)}}((e,n,l,s)=>{try{const i=n.V.host,a=n.V.encapsulation,r="shadow"===a&&e.u.i;let c,f=l;if(r&&(f=l.shadowRoot),!l["s-rn"]){e.X(e,e.u,n,l);const o=l["s-sc"];o&&(e.u.Y(l,t(o,!0)),"scoped"===a&&e.u.Y(l,t(o)))}if(s.render||s.hostData||i||c){e._=!0;const t=s.render&&s.render();let n;e._=!1;const i=o(null,n,t),c=e.ee.get(l)||{};c.o=f,e.ee.set(l,e.render(l,c,i,r,a))}l["s-rn"]=!0,l["s-rc"]&&(l["s-rc"].forEach(e=>e()),l["s-rc"]=null)}catch(t){e._=!1,e.K(t,8,l,!0)}})(e,e.M(n),n,i),n["s-init"]()}},E=(e,t,n,o,l,s,i,a,r)=>{if(t.type||t.state){const c=e.te.get(n);t.state||(!t.attr||void 0!==c[l]&&""!==c[l]||(a=s&&s.ne)&&f(r=a[t.attr])&&(c[l]=N(t.type,r)),n.hasOwnProperty(l)&&(void 0===c[l]&&(c[l]=N(t.type,n[l])),"mode"!==l&&delete n[l])),o.hasOwnProperty(l)&&void 0===c[l]&&(c[l]=o[l]),t.watchCallbacks&&(c[L+l]=t.watchCallbacks.slice()),R(o,l,function c(t){return(t=e.te.get(e.oe.get(this)))&&t[l]},function u(n,o){(o=e.oe.get(this))&&(t.state||t.mutable)&&A(e,o,l,n,i)})}else t.elementRef&&T(o,l,n)},A=(e,t,n,o,l,s,i)=>{(i=e.te.get(t))||e.te.set(t,i={});const a=i[n];if(o!==a&&(i[n]=o,s=e.Z.get(t))){{const e=i[L+n];if(e)for(let t=0;t<e.length;t++)try{s[e[t]].call(s,o,a,n)}catch(e){console.error(e)}}!e._&&t["s-rn"]&&O(e,t,l)}},T=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},R=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},L="wc-",D=(e,t,n,o,l,s)=>{try{l=new(s=e.M(t).V),((e,t,n,o,l,s)=>{e.oe.set(o,n),e.te.has(n)||e.te.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,i])=>{E(e,i,n,o,t,l,s)})})(e,s,t,l,n,o),function i(e,t,n){if(t){const o=e.oe.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.le(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,s.events,l)}catch(n){l={},e.K(n,7,t,!0)}return e.Z.set(t,l),l},q=(e,t,n,o,l,s)=>{if(e.P.delete(t),(l=e.G.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.G.delete(t)),e.se.length&&!e.P.size)for(;s=e.se.shift();)s()},B=(e,t,n,o)=>{t.forEach(([t,l])=>{3&l.O&&R(n,t,function n(){return(e.te.get(this)||{})[t]},function n(s){A(e,this,t,N(l.A,s),o)})})},I=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.ie.has(n)||(e.ae=!0,e.P.add(n),e.ie.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.re(n);)if(e.ce(n)){e.fe.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.ue(n)),n["s-cr"]||e.pe(n,"ssrv")||e.i&&1===t.s||(n["s-cr"]=e.de(""),n["s-cr"]["s-cn"]=!0,e.v(n,n["s-cr"],e.be(n)[0])),1===t.s&&e.i&&!n.shadowRoot&&e.me(n,{mode:"open"}),o={ne:{}},t.g&&Object.keys(t.g).forEach(s=>{(l=t.g[s].N)&&(o.ne[l]=e.pe(n,l))}),o))(e.u,t,n)),e.ve(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{if(!e.he&&((e,t)=>{for(;t;){if(!e.ye(t))return 9!==e.we(t);t=e.ye(t)}})(e.u,t)){e.U.set(t,!0),q(e,t),$(e.ee.get(t),!0);{const n=e.Z.get(t);n&&n.componentDidUnload&&n.componentDidUnload()}e.u.W(t),e.Me.delete(t),[e.G,e.$e,e.J].forEach(e=>e.delete(t))}})(e,this)},n["s-init"]=function(){((e,t,n,o,l,s,i)=>{if((l=e.Z.get(t))&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.fe.set(t,!0),(i=e.ge.has(t))||(e.ge.set(t,!0),t["s-ld"]=void 0,e.u.Y(t,n));try{$(e.ee.get(t)),(s=e.$e.get(t))&&(s.forEach(e=>e(t)),e.$e.delete(t)),!i&&l.componentDidLoad&&l.componentDidLoad()}catch(n){e.K(n,4,t)}q(e,t)}})(e,this,o)},n.forceUpdate=function(){O(e,this,l)},t.g){const o=Object.entries(t.g);{let e={};o.forEach(([t,{N:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[u(n)];l&&(t[l]=(null!==o||"boolean"!=typeof t[l])&&o)})(e,this,t,o)}}B(e,o,n,l)}};((e,t,n,s,r,c,p)=>{const d=n.performance,b={html:{}},m=n[e]=n[e]||{},v=((e,t,n)=>{const o=new WeakMap,l={p:n,i:!!n.documentElement.attachShadow,ke:!1,we:e=>e.nodeType,je:e=>n.createElement(e),Ce:(e,t)=>n.createElementNS(e,t),de:e=>n.createTextNode(e),We:e=>n.createComment(e),v:(e,t,n)=>e.insertBefore(t,n),Ne:e=>e.remove(),Oe:(e,t)=>e.appendChild(t),Y:(e,t)=>{e.classList.add(t)},be:e=>e.childNodes,ye:e=>e.parentNode,Se:e=>e.nextSibling,Ee:e=>e.previousSibling,xe:e=>u(e.nodeName),Ae:e=>e.textContent,Te:(e,t)=>e.textContent=t,pe:(e,t)=>e.getAttribute(t),Re:(e,t,n)=>e.setAttribute(t,n),k:(e,t)=>e.removeAttribute(t),j:(e,t)=>e.hasAttribute(t),ue:t=>t.getAttribute("mode")||(e.Context||{}).mode,Le:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.re(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,C:(t,n,s,a,r,c,f,u,p,d)=>{let b=t,m=s,v=o.get(t);d=n+a,v&&v[d]&&v[d](),"string"==typeof f?b=l.Le(t,f):"object"==typeof f?b=f:(p=n.split(":")).length>1&&(b=l.Le(t,p[0]),n=p[1]),b&&((p=n.split(".")).length>1&&(n=p[0],m=(e=>{e.keyCode===i[p[1]]&&s(e)})),u=l.ke?{capture:!!r,passive:!!c}:!!r,e.ael(b,n,m,u),v||o.set(t,v={}),v[d]=(()=>{b&&e.rel(b,n,m,u),v[d]=null}))},W:(e,t,n,l)=>{(l=o.get(e))&&(t?l[t+n]&&l[t+n]():Object.keys(l).forEach(e=>{l[e]&&l[e]()}))},De:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),re:(e,t)=>(t=l.ye(e))&&11===l.we(t)?t.host:t,qe:(e,t,n,o)=>e.setAttributeNS(t,n,o),me:(e,t)=>e.attachShadow(t)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>l.ke=!0}))}catch(e){}return l})(m,n,s),h=v.p.documentElement,w=n["s-defined"]=n["s-defined"]||{},$=(e,t)=>{n.customElements.get(e.t)||(I(k,b[e.t]=e,t.prototype,c,d),t.observedAttributes=Object.values(e.g).map(e=>e.N).filter(e=>!!e),n.customElements.define(e.t,t))},k={u:v,Be:$,M:e=>b[v.xe(e)],Ie:e=>t[e],isClient:!0,ce:e=>!(!w[v.xe(e)]&&!k.M(e)),K:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=g(m,n),ve:(e,t)=>{{const n=e.T,o=!v.i;let s=r+n+(o?".sc":"")+".entry.js";import(s).then(n=>{try{e.V=n[(e=>u(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,s,i){if(s){const n=t.t+(i||l);if(!t[n]){const o=e.je("template");t[n]=o,o.innerHTML=`<style>${s}</style>`,e.Oe(e.p.head,o)}}}(v,e,e.s,e.V.style,e.V.styleMode),O(k,t,d)}catch(t){console.error(t),e.V=class{}}},e=>console.error(e,s))}},_:!1,H:!1,he:!1,X:a,G:new WeakMap,m:new WeakMap,ie:new WeakMap,Me:new WeakMap,ge:new WeakMap,fe:new WeakMap,oe:new WeakMap,J:new WeakMap,Z:new WeakMap,U:new WeakMap,F:new WeakMap,$e:new WeakMap,Pe:new WeakMap,ee:new WeakMap,te:new WeakMap,P:new Set,se:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=s,t.resourcesUrl=t.publicPath=r,k.le=t.emit=((e,n,o)=>v.De(e,t.eventNameFn?t.eventNameFn(n):n,o)),m.h=o,m.Context=t,m.onReady=(()=>new Promise(e=>k.queue.write(()=>k.P.size?k.se.push(e):e()))),k.render=((e,t)=>{let n,o,l,s,i,a,r;const c=(l,p,d,b,m,v,h,w,$)=>{if(w=p.vchildren[d],n||(s=!0,"slot"===w.vtag&&(o&&t.Y(b,o+"-s"),w.vchildren?w.Fe=!0:w.He=!0)),f(w.vtext))w.o=t.de(w.vtext);else if(w.He)w.o=t.de("");else{if(v=w.o=M||"svg"===w.vtag?t.Ce("http://www.w3.org/2000/svg",w.vtag):t.je(w.Fe?"slot-fb":w.vtag),e.ce(v)&&e.fe.delete(r),M="svg"===w.vtag||"foreignObject"!==w.vtag&&M,y(e,null,w,M),f(o)&&v["s-si"]!==o&&t.Y(v,v["s-si"]=o),w.vchildren)for(m=0;m<w.vchildren.length;++m)(h=c(l,w,m,v))&&t.Oe(v,h);"svg"===w.vtag&&(M=!1)}return w.o["s-hn"]=a,(w.Fe||w.He)&&(w.o["s-sr"]=!0,w.o["s-cr"]=i,w.o["s-sn"]=w.vname||"",($=l&&l.vchildren&&l.vchildren[d])&&$.vtag===w.vtag&&l.o&&u(l.o)),w.o},u=(n,o,l,i)=>{e.he=!0;const r=t.be(n);for(l=r.length-1;l>=0;l--)(i=r[l])["s-hn"]!==a&&i["s-ol"]&&(t.Ne(i),t.v(v(i),i,m(i)),t.Ne(i["s-ol"]),i["s-ol"]=null,s=!0),o&&u(i,o);e.he=!1},p=(e,n,o,l,s,i,r,u)=>{const p=e["s-cr"];for((r=p&&t.ye(p)||e).shadowRoot&&t.xe(r)===a&&(r=r.shadowRoot);s<=i;++s)l[s]&&(u=f(l[s].vtext)?t.de(l[s].vtext):c(null,o,s,e))&&(l[s].o=u,t.v(r,u,m(n)))},d=(e,n,o,s)=>{for(;n<=o;++n)f(e[n])&&(s=e[n].o,l=!0,s["s-ol"]?t.Ne(s["s-ol"]):u(s,!0),t.Ne(s))},b=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),m=e=>e&&e["s-ol"]?e["s-ol"]:e,v=e=>t.ye(e["s-ol"]?e["s-ol"]:e),h=(n,o,l)=>{const s=o.o=n.o,i=n.vchildren,a=o.vchildren;M=o.o&&f(t.re(o.o))&&void 0!==o.o.ownerSVGElement,M="svg"===o.vtag||"foreignObject"!==o.vtag&&M,f(o.vtext)?(l=s["s-cr"])?t.Te(t.ye(l),o.vtext):n.vtext!==o.vtext&&t.Te(s,o.vtext):("slot"!==o.vtag&&y(e,n,o,M),f(i)&&f(a)?((e,n,o,l,s,i,a,r)=>{let y=0,w=0,M=n.length-1,$=n[0],g=n[M],k=l.length-1,j=l[0],C=l[k];for(;y<=M&&w<=k;)if(null==$)$=n[++y];else if(null==g)g=n[--M];else if(null==j)j=l[++w];else if(null==C)C=l[--k];else if(b($,j))h($,j),$=n[++y],j=l[++w];else if(b(g,C))h(g,C),g=n[--M],C=l[--k];else if(b($,C))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.ye($.o)),h($,C),t.v(e,$.o,t.Se(g.o)),$=n[++y],C=l[--k];else if(b(g,j))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.ye(g.o)),h(g,j),t.v(e,g.o,$.o),g=n[--M],j=l[++w];else{for(s=null,i=y;i<=M;++i)if(n[i]&&f(n[i].vkey)&&n[i].vkey===j.vkey){s=i;break}f(s)?((r=n[s]).vtag!==j.vtag?a=c(n&&n[w],o,s,e):(h(r,j),n[s]=void 0,a=r.o),j=l[++w]):(a=c(n&&n[w],o,w,e),j=l[++w]),a&&t.v(v($.o),a,m($.o))}y>M?p(e,null==l[k+1]?null:l[k+1].o,o,l,w,k):w>k&&d(n,y,M)})(s,i,o,a):f(a)?(f(n.vtext)&&t.Te(s,""),p(s,null,o,a,0,a.length-1)):f(i)&&d(i,0,i.length-1)),M&&"svg"===o.vtag&&(M=!1)},w=(e,n,o,l,s,i,a,r)=>{for(l=0,s=(o=t.be(e)).length;l<s;l++)if(n=o[l],1===t.we(n)){if(n["s-sr"])for(a=n["s-sn"],n.hidden=!1,i=0;i<s;i++)if(o[i]["s-hn"]!==n["s-hn"])if(r=t.we(o[i]),""!==a){if(1===r&&a===t.pe(o[i],"slot")){n.hidden=!0;break}}else if(1===r||3===r&&""!==t.Ae(o[i]).trim()){n.hidden=!0;break}w(n)}},$=[],g=(e,n,o,s,i,a,r,c,f,u)=>{for(i=0,a=(n=t.be(e)).length;i<a;i++){if((o=n[i])["s-sr"]&&(s=o["s-cr"]))for(c=t.be(t.ye(s)),f=o["s-sn"],r=c.length-1;r>=0;r--)(s=c[r])["s-cn"]||s["s-nr"]||s["s-hn"]===o["s-hn"]||((3===(u=t.we(s))||8===u)&&""===f||1===u&&null===t.pe(s,"slot")&&""===f||1===u&&t.pe(s,"slot")===f)&&($.some(e=>e.Qe===s)||(l=!0,s["s-sn"]=f,$.push({Ue:o,Qe:s})));1===t.we(o)&&g(o)}};return(c,f,u,p,d,b,m,v,y,M,k,j)=>{if(r=c,a=t.xe(r),i=r["s-cr"],n=p,o=r["s-sc"],s=l=!1,h(f,u),s){for(g(u.o),m=0;m<$.length;m++)(v=$[m]).Qe["s-ol"]||((y=t.de(""))["s-nr"]=v.Qe,t.v(t.ye(v.Qe),v.Qe["s-ol"]=y,v.Qe));for(e.he=!0,m=0;m<$.length;m++){for(v=$[m],k=t.ye(v.Ue),j=t.Se(v.Ue),y=v.Qe["s-ol"];y=t.Ee(y);)if((M=y["s-nr"])&&M&&M["s-sn"]===v.Qe["s-sn"]&&k===t.ye(M)&&(M=t.Se(M))&&M&&!M["s-nr"]){j=M;break}(!j&&k!==t.ye(v.Qe)||t.Se(v.Qe)!==j)&&v.Qe!==j&&(t.Ne(v.Qe),t.v(k,v.Qe,j))}e.he=!1}return l&&w(u.o),$.length=0,u}})(k,v),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{k.fe.set(h,m.loaded=k.H=!0),v.De(n,"appload",{detail:{namespace:e}})}),p.map(C).forEach(e=>$(e,class extends HTMLElement{})),k.ae||h["s-init"](),((e,t,n,o,l,s)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.M(t);if(o)if(e.fe.has(t))n(t);else{const o=e.$e.get(t)||[];o.push(n),e.$e.set(t,o)}return!!o}),l){for(s=l.length-1;s>=0;s--)t.componentOnReady(l[s][0],l[s][1])&&l.splice(s,1);for(s=0;s<o.length;s++)if(!n[o[s]].componentOnReady)return;for(s=0;s<l.length;s++)l[s][1](null);l.length=0}})(k,m,n,n["s-apps"],n["s-cr"]),m.initialized=!0,k})(n,x,w,d,r,h,c);
})(window,document,{},"OpenbioComponents","hydrated",[["cnh-preview","xdkdzzj1",1,[["cnhTemplate",16],["componentContainer",64],["inputSignature",1,0,"input-signature",1],["person",2,0,1,1],["photo",1,0,1,1],["signature",16],["size",2]],1],["help-component","oanhlf2a",1,[["componentContainer",64],["helpText",2,0,"help-text",2],["isHelpModalActive",16],["locale",2,0,1,2],["src",1,0,1,2],["translations",16]],1],["image-cropper-component","cbyg2zlp",1,[["aspectRatio",1,0,"aspect-ratio",1],["componentContainer",64],["cropBoxResizable",1,0,"crop-box-resizable",4],["cropCallback",1,0,"crop-callback",1],["cropper",16],["currentElementTag",1,0,"current-element-tag",2],["locale",2,0,1,2],["parentComponentContext",1,0,"parent-component-context",1],["parentElementTag",1,0,"parent-element-tag",2],["segment",16],["src",1,0,1,2],["translations",16]],1],["image-filter-component","cbyg2zlp",1,[["componentContainer",64],["currentElementTag",1,0,"current-element-tag",2],["filterCallback",1,0,"filter-callback",1],["filters",16],["locale",2,0,1,2],["parentComponentContext",1,0,"parent-component-context",1],["parentElementTag",1,0,"parent-element-tag",2],["src",1,0,1,2],["translations",16]],1],["image-segmentation-adjustment-component","cbyg2zlp",1,[["area_select",16],["backgroundCanvas",16],["backgroundContext",16],["backgroundImage",16],["brush_radius",16],["color",16],["componentContainer",64],["currentElementTag",1,0,"current-element-tag",2],["eraser_radius",16],["imageAdjustmentCallback",1,0,"image-adjustment-callback",1],["imagesArray",16],["index",16],["inputColor",16],["isPress",16],["old",16],["originalImage",1,0,"original-image",1],["overlayCanvas",16],["overlayContext",16],["overlayImage",16],["paint_radius",16],["parentComponentContext",1,0,"parent-component-context",1],["parentElementTag",1,0,"parent-element-tag",2],["radius",16],["rangeContainer",16],["redo_disable",16],["restorer_radius",16],["saveAdjustedImageCallback",1,0,"save-adjusted-image-callback",1],["segmentedImage",1,0,"segmented-image",1],["tool",16],["tooltip",16],["translations",16],["undo_disabled",16],["x_old",16],["x_select",16],["y_old",16],["y_select",16]],1],["loader-component","oanhlf2a",1,[["enabled",2,0,1,4]],1],["my-component","a49iemzr",1,[["first",1,0,1,2],["last",1,0,1,2],["middle",1,0,1,2]],1],["notification-component","3icftsqp",1,[["notificationType",1,0,"notification-type",2],["text",1,0,1,2]],1],["openbio-face","qlqcy4jp",1,[["componentContainer",64],["deviceReady",16],["forceLoadComponent",16],["locale",2,0,1,2],["translations",16]],1],["openbio-face-auth","hdb9i36l",1,[["authenticateError",16],["cameraInitialized",16],["captured",16],["componentContainer",64],["countdown",16],["cpf",1,0,1,2],["cpfState",16],["debug",16],["faceDetected",16],["hiddenCamera",1,0,"hidden-camera",4],["isDebug",1,0,"is-debug",4],["locale",2,0,1,2],["person",16],["personImage",1,0,"person-image",2],["personImageState",16],["personName",1,0,"person-name",2],["personNameState",16],["showFullscreenLoader",16],["thresholdAuthenticate",16],["translations",16],["useOpenbioMatcher",1,0,"use-openbio-matcher",4],["useOpenbioMatcherState",16],["videoInterval",16]],1],["openbio-face-details","cbyg2zlp",1,[["adjustedImage",16],["adjustment",16],["allowConfiguration",16],["anomaly",16],["anomalyOptions",16],["aperture",16],["autoCapture",16],["autoCaptureCount",16],["autoCaptureInterval",16],["autoCapturing",16],["backendSession",16],["brand",16],["cameraPresetOptions",16],["cameraSettingsOptions",16],["captureInput",16],["centerLineLocationRatio",16],["componentContainer",64],["crop",16],["cropSegment",16],["croppedImage",16],["croppedImageURL",16],["cropperModal",16],["detached",2,0,1,4],["deviceReady",16],["deviceStatus",16],["dpiValue",16],["evaluations",16],["eyeAxisLocationRatio",16],["eyeAxysAngle",16],["eyeSeparation",16],["face",16],["faceDetected",16],["flashCharge",16],["flashProperty",16],["flashWidth",16],["imageAdjustmentModal",16],["imageFilterBase64",16],["imageFilterModal",16],["imageFormat",16],["isCapturing",16],["isPreviewing",16],["isTagComponent",1,0,"is-tag-component",4],["isoValue",16],["locale",2,0,1,2],["manualEyeSelection",16],["model",16],["offAngleGaze",16],["originalImage",16],["poseAngleYaw",16],["preset",16],["previewSize",16],["previewType",16],["rawImage",16],["rightOrLeftEyeClosed",16],["segmentation",16],["segmentedImage",16],["serial",16],["serviceConfigs",16],["serviceTime",16],["shallCapture",16],["showCameraConfiguration",16],["showLoader",16],["showPreviewTemplate",16],["shutterSpeed",16],["tab",16],["tempFace",1,0,"temp-face",1],["tempPerson",1,0,"temp-person",1],["track",16],["translations",16],["uploadedBase64",16],["uploadedBase64Original",16],["validation",16],["video",16],["whiteBalance",16]],1],["openbio-face-validation-box-component","cbyg2zlp",1,[["componentContainer",64],["detached",1,0,1,4],["leftIcon",1,0,"left-icon",4],["locale",2,0,1,2],["status",1,0,1,1],["statusMessage",16],["translations",16],["type",1,0,1,2],["typeTitle",1,0,"type-title",2]],1],["openbio-finger","glnmtnbs",1,[["componentContainer",64],["deviceReady",16],["forceLoadComponent",16],["locale",2,0,1,2],["translations",16]],1],["openbio-finger-auth","ltgwi9j4",1,[["captureMessage",16],["captureType",16],["componentContainer",64],["cpf",1,0,1,2],["cpfState",16],["currentFingerImage",16],["debug",16],["deviceBrand",16],["deviceModel",16],["deviceSerial",16],["fingerAuthenticate",16],["fingerAuthenticationSimilarity",16],["fingerNfiqScore",16],["fingerOriginalImage",16],["fingerPreviewCurrentRollingStatus",16],["fingerPreviewCurrentStatusLineX",16],["isDebug",1,0,"is-debug",4],["locale",2,0,1,2],["modalSettings",16],["person",16],["personImage",1,0,"person-image",2],["personImageState",16],["personName",1,0,"person-name",2],["personNameState",16],["ready",16],["selectedFinger",16],["showFullscreenLoader",16],["thresholdAuthenticate",16],["translations",16],["useOpenbioMatcher",1,0,"use-openbio-matcher",4],["useOpenbioMatcherState",16]],1],["openbio-finger-details","xuhhry41",1,[["anomalies",16],["anomaly",16],["anomalyOptions",16],["authenticationSimilarity",16],["backendSession",16],["badNfiqQualityCount",16],["brand",16],["captureDone",16],["captureType",16],["captureTypeName",16],["capturedData",16],["componentContainer",64],["cpf",1,0,1,2],["cpfSt",16],["currentFingerImage",16],["currentFingerNames",16],["currentFingerSequence",16],["currentRollingStatus",16],["currentStatusLineX",16],["detached",2,0,1,4],["deviceReady",16],["disabledControls",16],["editingId",16],["failControl",16],["fingerCaptureType",1,0,"finger-capture-type",8],["fingerNamesList",16],["fingerSequence",16],["fingers",16],["fingersToCapture",16],["flowOptions",16],["flowType",16],["generateBMP",16],["isEditing",16],["isTagComponent",1,0,"is-tag-component",4],["locale",2,0,1,2],["match",16],["modalSettings",16],["model",16],["nfiqScore",16],["onCaptureFingerprint",1],["onOpenbioMatcher",1],["opened",16],["originalImage",16],["personImage",1,0,"person-image",2],["personInfo",16],["personName",1,0,"person-name",2],["repeatedCount",16],["repetitionControl",16],["selectedFinger",16],["serial",16],["serviceConfigs",16],["serviceTime",16],["showControlDisable",16],["showLoader",16],["singleCapture",1,0,"single-capture",4],["singleCaptureLoading",16],["singleCaptureSt",16],["smearCount",16],["stepPhase",16],["storeOriginalImage",16],["tab",16],["tempFingers",1,0,"temp-fingers",1],["tempPerson",1,0,"temp-person",1],["translations",16],["unmatchCount",16],["useOpenbioMatcher",1,0,"use-openbio-matcher",4],["useOpenbioMatcherSt",16]],1],["openbio-finger-image-component","xuhhry41",1,[["allowUpload",1,0,"allow-upload",4],["captureInput",16],["componentContainer",64],["editFingerCallback",1,0,"edit-finger-callback",1],["finger",1,0,1,1],["fingerIndex",1,0,"finger-index",8],["fingerName",1,0,"finger-name",2],["isModalShown",16],["locale",2,0,1,2],["parentComponentContext",1,0,"parent-component-context",1],["translations",16],["uploadFingerImageCallback",1,0,"upload-finger-image-callback",1]],1],["openbio-mugshot","kxcn1qnw",1,[["componentContainer",64],["deviceReady",16],["forceLoadComponent",16],["locale",2,0,1,2],["translations",16]],1],["openbio-mugshot-details","kxcn1qnw",1,[["allowConfiguration",1,0,"allow-configuration",1],["anomaly",16],["anomalyOptions",16],["aperture",16],["autoCapture",16],["backendSession",16],["brand",16],["cameraPresetOptions",16],["cameraSettingsOptions",16],["capturedData",16],["centerLineLocationRatio",16],["componentContainer",64],["crop",16],["croppedImage",16],["detached",1,0,1,4],["deviceReady",16],["deviceStatus",16],["eyeAxisLocationRatio",16],["eyeAxysAngle",16],["eyeSeparation",16],["flashCharge",16],["flashProperty",16],["flashWidth",16],["imageFormat",16],["isCapturing",16],["isTagComponent",1,0,"is-tag-component",4],["isoValue",16],["locale",2,0,1,2],["model",16],["mugshotDescription",16],["mugshotIndex",16],["mugshotPhotos",16],["originalImage",16],["poseAnglePitch",16],["poseAngleYaw",16],["preset",16],["rawImage",16],["rightOrLeftEyeClosed",16],["segmentation",16],["segmentedImage",16],["serial",16],["serviceConfigs",16],["serviceTime",16],["showCameraConfiguration",16],["showLoader",16],["shutterSpeed",16],["tab",16],["tempMugshotPhotos",1,0,"temp-mugshot-photos",1],["tempPerson",1,0,"temp-person",1],["track",16],["translations",16],["video",16],["whiteBalance",16]],1],["openbio-oma-face","k6ma4lul",1,[["action",1,0,1,2],["callback",1],["cameraHeight",1,0,"camera-height",8],["cameraWidth",1,0,"camera-width",8],["captured",16],["capturedImage",16],["componentContainer",64],["containerBackgroundColor",1,0,"container-background-color",2],["headerTitle",1,0,"header-title",2],["locale",2,0,1,2],["primaryColor",1,0,"primary-color",2],["projectId",1,0,"project-id",2],["recordId",1,0,"record-id",2],["requestKey",1,0,"request-key",2],["showFullscreenLoader",16],["showHeader",1,0,"show-header",4],["textColor",1,0,"text-color",2],["token",1,0,1,2],["translations",16],["videoElement",16],["videoInterval",16]]],["openbio-scanner","igsp5nmi",1,[["componentContainer",64]],1],["openbio-scanner-details","igsp5nmi",1,[["anomaly",16],["anomalyOptions",16],["backendSession",16],["brand",16],["captureInput",16],["componentContainer",64],["detached",2,0,1,4],["deviceList",16],["deviceOpened",16],["deviceReady",16],["deviceStatus",16],["disableFormSelection",16],["form",16],["formType",16],["imgTest",16],["isCapturing",16],["isTagComponent",1,0,"is-tag-component",4],["locale",2,0,1,2],["modal",16],["model",16],["palmAnomalyOptions",16],["palmFormType",16],["palmType",16],["person",16],["selectedDevice",16],["serial",16],["serviceConfigs",16],["showLoader",16],["tempPerson",1,0,"temp-person",1],["translations",16]],1],["openbio-signature","o0e3t9a3",1,[["captureInput",16],["componentContainer",64],["deviceReady",16],["forceLoadComponent",16],["locale",2,0,1,2],["translations",16]],1],["openbio-signature-details","o0e3t9a3",1,[["anomaly",16],["anomalyOptions",16],["backendSession",16],["brand",16],["captureDone",16],["componentContainer",64],["cropperModal",16],["detached",1,0,1,4],["deviceOpened",16],["deviceReady",16],["deviceStatus",16],["dpiValue",16],["isCapturing",16],["isTagComponent",1,0,"is-tag-component",4],["locale",2,0,1,2],["model",16],["originalImage",16],["points",16],["rawImage",16],["serial",16],["serviceConfigs",16],["serviceTime",16],["showLoader",16],["signature",16],["tab",16],["tempPerson",1,0,"temp-person",1],["tempSignature",1,0,"temp-signature",1],["translations",16],["uploadedBase64",16]],1]]);