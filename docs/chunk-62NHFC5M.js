import{Ra as P,Sb as $,Tb as U,ha as M,hb as m,ja as c,jb as F,ka as B,mb as C,na as D,oa as h,pa as l,pb as f,ra as R,rb as k,ta as O,tb as x,ua as p,va as L,wa as T,yb as N}from"./chunk-LNVCPBNY.js";var Y=null;function E(){return Y}function Ke(n){Y??=n}var z=class{},v=new D(""),b=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=c({token:e,factory:()=>l(X),providedIn:"platform"});let n=e;return n})(),Xe=new D(""),X=(()=>{let e=class e extends b{constructor(){super(),this._doc=l(v),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return E().getBaseHref(this._doc)}onPopState(t){let i=E().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=E().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=c({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function I(n,e){if(n.length==0)return e;if(e.length==0)return n;let s=0;return n.endsWith("/")&&s++,e.startsWith("/")&&s++,s==2?n+e.substring(1):s==1?n+e:n+"/"+e}function j(n){let e=n.match(/#|\?|$/),s=e&&e.index||n.length,t=s-(n[s-1]==="/"?1:0);return n.slice(0,t)+n.slice(s)}function d(n){return n&&n[0]!=="?"?"?"+n:n}var g=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=c({token:e,factory:()=>l(q),providedIn:"root"});let n=e;return n})(),Z=new D(""),q=(()=>{let e=class e extends g{constructor(t,i){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??l(v).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return I(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+d(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,o){let u=this.prepareExternalUrl(r+d(o));this._platformLocation.pushState(t,i,u)}replaceState(t,i,r,o){let u=this.prepareExternalUrl(r+d(o));this._platformLocation.replaceState(t,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(i){return new(i||e)(h(b),h(Z,8))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),qe=(()=>{let e=class e extends g{constructor(t,i){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(t){let i=I(this._baseHref,t);return i.length>0?"#"+i:i}pushState(t,i,r,o){let u=this.prepareExternalUrl(r+d(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.pushState(t,i,u)}replaceState(t,i,r,o){let u=this.prepareExternalUrl(r+d(o));u.length==0&&(u=this._platformLocation.pathname),this._platformLocation.replaceState(t,i,u)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(i){return new(i||e)(h(b),h(Z,8))},e.\u0275prov=c({token:e,factory:e.\u0275fac});let n=e;return n})(),Q=(()=>{let e=class e{constructor(t){this._subject=new x,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=te(j(G(i))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+d(i))}normalize(t){return e.stripTrailingSlash(ee(this._basePath,G(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+d(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+d(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i,complete:r})}};e.normalizeQueryParams=d,e.joinWithSlash=I,e.stripTrailingSlash=j,e.\u0275fac=function(i){return new(i||e)(h(g))},e.\u0275prov=c({token:e,factory:()=>J(),providedIn:"root"});let n=e;return n})();function J(){return new Q(h(g))}function ee(n,e){if(!n||!e.startsWith(n))return e;let s=e.substring(n.length);return s===""||["/",";","?","#"].includes(s[0])?s:e}function G(n){return n.replace(/\/index.html$/,"")}function te(n){if(new RegExp("^(https?:)?//").test(n)){let[,s]=n.split(/\/\/[^\/]+/);return s}return n}function Qe(n,e){e=encodeURIComponent(e);for(let s of n.split(";")){let t=s.indexOf("="),[i,r]=t==-1?[s,""]:[s.slice(0,t),s.slice(t+1)];if(i.trim()===e)return decodeURIComponent(r)}return null}var y=/\s+/,V=[],Je=(()=>{let e=class e{constructor(t,i){this._ngEl=t,this._renderer=i,this.initialClasses=V,this.stateMap=new Map}set klass(t){this.initialClasses=t!=null?t.trim().split(y):V}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(y):t}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let i of t)this._updateState(i,!0);else if(t!=null)for(let i of Object.keys(t))this._updateState(i,!!t[i]);this._applyStateDiff()}_updateState(t,i){let r=this.stateMap.get(t);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(t,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let i=t[0],r=t[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(t,i){t=t.trim(),t.length>0&&t.split(y).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}};e.\u0275fac=function(i){return new(i||e)(f(m),f(F))},e.\u0275dir=p({type:e,selectors:[["","ngClass",""]],inputs:{klass:[R.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let n=e;return n})();var et=(()=>{let e=class e{constructor(t){this._viewContainerRef=t,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(t){if(this._shouldRecreateView(t)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(t,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}};e.\u0275fac=function(i){return new(i||e)(f(N))},e.\u0275dir=p({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[T]});let n=e;return n})();function ne(n,e){return new M(2100,!1)}var w=class{createSubscription(e,s){return C(()=>e.subscribe({next:s,error:t=>{throw t}}))}dispose(e){C(()=>e.unsubscribe())}},A=class{createSubscription(e,s){return e.then(s,t=>{throw t})}dispose(e){}},ie=new A,re=new w,tt=(()=>{let e=class e{constructor(t){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){return this._obj?t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue:(t&&this._subscribe(t),this._latestValue)}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,i=>this._updateLatestValue(t,i))}_selectStrategy(t){if($(t))return ie;if(U(t))return re;throw ne(e,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,i){t===this._obj&&(this._latestValue=i,this._ref.markForCheck())}};e.\u0275fac=function(i){return new(i||e)(f(k,16))},e.\u0275pipe=L({name:"async",type:e,pure:!1,standalone:!0});let n=e;return n})();var nt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=B({});let n=e;return n})(),se="browser",oe="server";function ue(n){return n===se}function it(n){return n===oe}var rt=(()=>{let e=class e{};e.\u0275prov=c({token:e,providedIn:"root",factory:()=>ue(l(P))?new S(l(v),window):new _});let n=e;return n})(),S=class{constructor(e,s){this.document=e,this.window=s,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let s=ae(this.document,e);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let s=e.getBoundingClientRect(),t=s.left+this.window.pageXOffset,i=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(t-r[0],i-r[1])}};function ae(n,e){let s=n.getElementById(e)||n.getElementsByName(e)[0];if(s)return s;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),i=t.currentNode;for(;i;){let r=i.shadowRoot;if(r){let o=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(o)return o}i=t.nextNode()}}return null}var _=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},H=class{};var a=function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n}(a||{}),ut="*";function at(n,e){return{type:a.Trigger,name:n,definitions:e,options:{}}}function ct(n,e=null){return{type:a.Animate,styles:e,timings:n}}function dt(n,e=null){return{type:a.Group,steps:n,options:e}}function ht(n,e=null){return{type:a.Sequence,steps:n,options:e}}function lt(n){return{type:a.Style,styles:n,offset:null}}function ft(n,e,s){return{type:a.State,name:n,styles:e,options:s}}function Dt(n,e,s=null){return{type:a.Transition,expr:n,animation:e,options:s}}function gt(n=null){return{type:a.AnimateChild,options:n}}function pt(n,e,s=null){return{type:a.Query,selector:n,animation:e,options:s}}var W=class{constructor(e=0,s=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+s}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let s=e=="start"?this._onStartFns:this._onDoneFns;s.forEach(t=>t()),s.length=0}},K=class{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let s=0,t=0,i=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++s==r&&this._onFinish()}),o.onDestroy(()=>{++t==r&&this._onDestroy()}),o.onStart(()=>{++i==r&&this._onStart()})}),this.totalTime=this.players.reduce((o,u)=>Math.max(o,u.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let s=e*this.totalTime;this.players.forEach(t=>{let i=t.totalTime?Math.min(1,s/t.totalTime):1;t.setPosition(i)})}getPosition(){let e=this.players.reduce((s,t)=>s===null||t.totalTime>s.totalTime?t:s,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let s=e=="start"?this._onStartFns:this._onDoneFns;s.forEach(t=>t()),s.length=0}},mt="!";export{E as a,Ke as b,z as c,v as d,Xe as e,g as f,q as g,qe as h,Q as i,Qe as j,Je as k,et as l,tt as m,nt as n,se as o,ue as p,it as q,rt as r,H as s,a as t,ut as u,at as v,ct as w,dt as x,ht as y,lt as z,ft as A,Dt as B,gt as C,pt as D,W as E,K as F,mt as G};
/*! Bundled license information:

@angular/common/fesm2022/common.mjs:
  (**
   * @license Angular v17.1.2
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v17.1.2
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/