var G=Object.defineProperty;var J=(r,t,e)=>t in r?G(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var L=(r,t,e)=>(J(r,typeof t!="symbol"?t+"":t,e),e),Q=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var P=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)};var D=(r,t,e)=>(Q(r,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const M=window,f=M.trustedTypes,O=f?f.createPolicy("lit-html",{createHTML:r=>r}):void 0,B="$lit$",p=`lit$${(Math.random()+"").slice(9)}$`,z="?"+p,X=`<${z}>`,g=document,H=()=>g.createComment(""),x=r=>r===null||typeof r!="object"&&typeof r!="function",F=Array.isArray,tt=r=>F(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",S=`[ 	
\f\r]`,y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,R=/>/g,v=RegExp(`>|${S}(?:([^\\s"'>=/]+)(${S}*=${S}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,j=/"/g,Y=/^(?:script|style|textarea|title)$/i,et=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),it=et(1),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),W=new WeakMap,_=g.createTreeWalker(g,129,null,!1);function Z(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return O!==void 0?O.createHTML(t):t}const st=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":"",n=y;for(let d=0;d<e;d++){const l=r[d];let h,a,c=-1,$=0;for(;$<l.length&&(n.lastIndex=$,a=n.exec(l),a!==null);)$=n.lastIndex,n===y?a[1]==="!--"?n=U:a[1]!==void 0?n=R:a[2]!==void 0?(Y.test(a[2])&&(i=RegExp("</"+a[2],"g")),n=v):a[3]!==void 0&&(n=v):n===v?a[0]===">"?(n=i??y,c=-1):a[1]===void 0?c=-2:(c=n.lastIndex-a[2].length,h=a[1],n=a[3]===void 0?v:a[3]==='"'?j:V):n===j||n===V?n=v:n===U||n===R?n=y:(n=v,i=void 0);const A=n===v&&r[d+1].startsWith("/>")?" ":"";o+=n===y?l+X:c>=0?(s.push(h),l.slice(0,c)+B+l.slice(c)+p+A):l+p+(c===-2?(s.push(void 0),d):A)}return[Z(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const d=t.length-1,l=this.parts,[h,a]=st(t,e);if(this.el=N.createElement(h,s),_.currentNode=this.el.content,e===2){const c=this.el.content,$=c.firstChild;$.remove(),c.append(...$.childNodes)}for(;(i=_.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const $ of i.getAttributeNames())if($.endsWith(B)||$.startsWith(p)){const A=a[n++];if(c.push($),A!==void 0){const K=i.getAttribute(A.toLowerCase()+B).split(p),C=/([.?@])?(.*)/.exec(A);l.push({type:1,index:o,name:C[2],strings:K,ctor:C[1]==="."?ot:C[1]==="?"?lt:C[1]==="@"?ht:T})}else l.push({type:6,index:o})}for(const $ of c)i.removeAttribute($)}if(Y.test(i.tagName)){const c=i.textContent.split(p),$=c.length-1;if($>0){i.textContent=f?f.emptyScript:"";for(let A=0;A<$;A++)i.append(c[A],H()),_.nextNode(),l.push({type:2,index:++o});i.append(c[$],H())}}}else if(i.nodeType===8)if(i.data===z)l.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(p,c+1))!==-1;)l.push({type:7,index:o}),c+=p.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function m(r,t,e=r,s){var i,o,n,d;if(t===b)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const h=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,s)),s!==void 0?((n=(d=e)._$Co)!==null&&n!==void 0?n:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=m(r,l._$AS(r,t.values),l,s)),t}class nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(s,!0);_.currentNode=o;let n=_.nextNode(),d=0,l=0,h=i[0];for(;h!==void 0;){if(d===h.index){let a;h.type===2?a=new w(n,n.nextSibling,this,t):h.type===1?a=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(a=new dt(n,this,t)),this._$AV.push(a),h=i[++l]}d!==(h==null?void 0:h.index)&&(n=_.nextNode(),d++)}return _.currentNode=g,o}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class w{constructor(t,e,s,i){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=m(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):tt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(Z(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(s);else{const n=new nt(o,this),d=n.u(this.options);n.v(s),this.$(d),this._$AH=n}}_$AC(t){let e=W.get(t.strings);return e===void 0&&W.set(t.strings,e=new N(t)),e}T(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new w(this.k(H()),this.k(H()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class T{constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=m(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const d=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=m(this,d[s+l],e,l),h===b&&(h=this._$AH[l]),n||(n=!x(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}n&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const rt=f?f.emptyScript:"";class lt extends T{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,rt):this.element.removeAttribute(this.name)}}class ht extends T{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=m(this,t,e,0))!==null&&s!==void 0?s:u)===b)return;const i=this._$AH,o=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class dt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){m(this,t)}}const k=M.litHtmlPolyfillSupport;k==null||k(N,w),((I=M.litHtmlVersions)!==null&&I!==void 0?I:M.litHtmlVersions=[]).push("2.8.0");const at=(r,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=o._$litPart$;if(n===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new w(t.insertBefore(H(),d),d,void 0,e??{})}return n._$AI(r),n};var E,q;class ct{constructor(){P(this,E);L(this,"greeting","");D(this,E,q).call(this)}}E=new WeakSet,q=function(){let t=it`
      <main>
        <div class="heading">
          <h1>Enter your birthday</h1>
        </div>
        <div class="input1">
          <input type="date" id="date" />
        </div>
        <div class="button1">
          <button id="btn">Calculate age</button>
        </div>
        <h1 id="result"></h1>
      </main>
    `;at(t,document.getElementById("root"));const e=document.getElementById("date"),s=document.getElementById("btn"),i=document.getElementById("result"),o=()=>{const d=e.value;if(e.value==="")alert("Please enter your birthday");else{const l=n(d);i.innerText=`You are ${l} ${l>1?"years":"year"} old.`}},n=d=>{const l=new Date,h=new Date(d);let a=l.getFullYear()-h.getFullYear();const c=l.getMonth()-h.getMonth();return(c<0||c===0&&l.getDate()<h.getDate())&&a--,a};s.addEventListener("click",o)};new ct;