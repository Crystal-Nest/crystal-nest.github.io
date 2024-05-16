import{$a as S,$b as Je,A as Ie,Aa as M,Ca as ce,D as Se,Da as C,Ea as O,Fa as I,Ga as Ue,Ha as _e,Ia as Be,J as oe,Ja as Ve,Ka as ze,La as $e,Ma as Ke,Na as D,S as ke,Ta as Xe,Va as le,W as T,Xb as de,Y as m,Z as X,a as K,aa as w,b as Ne,ba as d,ca as E,da as x,dc as ue,ec as Ge,fc as qe,g as re,ga as J,gc as v,m as Oe,mc as G,n as se,r as L,ra as ie,rc as We,ta as Le,tc as he,ua as xe,va as Ce,vc as q,xa as je,ya as ae,za as Fe}from"./chunk-MFNIPWEN.js";var F=class{},Z=class{},P=class t{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(s=>{let n=s.indexOf(":");if(n>0){let r=s.slice(0,n),o=r.toLowerCase(),a=s.slice(n+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){let s=new t;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){let s=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,s);let r=(e.op==="a"?this.headers.get(s):void 0)||[];r.push(...n),this.headers.set(s,r);break;case"d":let o=e.value;if(!o)this.headers.delete(s),this.normalizedNames.delete(s);else{let a=this.headers.get(s);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,a)}break}}setHeaderEntries(e,s){let n=(Array.isArray(s)?s:[s]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}};var pe=class{encodeKey(e){return Ze(e)}encodeValue(e){return Ze(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function Rt(t,e){let s=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,i]=o==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],l=s.get(a)||[];l.push(i),s.set(a,l)}),s}var bt=/%(\d[a-f0-9])/gi,Mt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ze(t){return encodeURIComponent(t).replace(bt,(e,s)=>Mt[s]??e)}function W(t){return`${t}`}var R=class t{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new pe,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Rt(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{let n=e.fromObject[s],r=Array.isArray(n)?n.map(W):[W(n)];this.map.set(s,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){let s=[];return Object.keys(e).forEach(n=>{let r=e[n];Array.isArray(r)?r.forEach(o=>{s.push({param:n,value:o,op:"a"})}):s.push({param:n,value:r,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let s=this.encoder.encodeKey(e);return this.map.get(e).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let s=new t({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let s=(e.op==="a"?this.map.get(e.param):void 0)||[];s.push(W(e.value)),this.map.set(e.param,s);break;case"d":if(e.value!==void 0){let n=this.map.get(e.param)||[],r=n.indexOf(W(e.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var ye=class{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Dt(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ye(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Qe(t){return typeof Blob<"u"&&t instanceof Blob}function He(t){return typeof FormData<"u"&&t instanceof FormData}function At(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var j=class t{constructor(e,s,n,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(Dt(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new P,this.context??=new ye,!this.params)this.params=new R,this.urlWithParams=s;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=s;else{let i=s.indexOf("?"),l=i===-1?"?":i<s.length-1?"&":"";this.urlWithParams=s+l+a}}}serializeBody(){return this.body===null?null:Ye(this.body)||Qe(this.body)||He(this.body)||At(this.body)||typeof this.body=="string"?this.body:this.body instanceof R?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||He(this.body)?null:Qe(this.body)?this.body.type||null:Ye(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof R?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let s=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,o=e.body!==void 0?e.body:this.body,a=e.withCredentials!==void 0?e.withCredentials:this.withCredentials,i=e.reportProgress!==void 0?e.reportProgress:this.reportProgress,l=e.headers||this.headers,c=e.params||this.params,u=e.context??this.context;return e.setHeaders!==void 0&&(l=Object.keys(e.setHeaders).reduce((p,y)=>p.set(y,e.setHeaders[y]),l)),e.setParams&&(c=Object.keys(e.setParams).reduce((p,y)=>p.set(y,e.setParams[y]),c)),new t(s,n,o,{params:c,headers:l,context:u,reportProgress:i,responseType:r,withCredentials:a})}},A=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(A||{}),U=class{constructor(e,s=B.Ok,n="OK"){this.headers=e.headers||new P,this.status=e.status!==void 0?e.status:s,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},me=class t extends U{constructor(e={}){super(e),this.type=A.ResponseHeader}clone(e={}){return new t({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},_=class t extends U{constructor(e={}){super(e),this.type=A.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new t({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},k=class extends U{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},B=function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t}(B||{});function fe(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var Pt=(()=>{let e=class e{constructor(n){this.handler=n}request(n,r,o={}){let a;if(n instanceof j)a=n;else{let c;o.headers instanceof P?c=o.headers:c=new P(o.headers);let u;o.params&&(o.params instanceof R?u=o.params:u=new R({fromObject:o.params})),a=new j(n,r,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=se(a).pipe(Se(c=>this.handler.handle(c)));if(n instanceof j||o.observe==="events")return i;let l=i.pipe(Ie(c=>c instanceof _));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return l.pipe(L(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe(L(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe(L(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return l.pipe(L(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new R().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,fe(o,r))}post(n,r,o={}){return this.request("POST",n,fe(o,r))}put(n,r,o={}){return this.request("PUT",n,fe(o,r))}};e.\u0275fac=function(r){return new(r||e)(d(F))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})();function st(t,e){return e(t)}function Nt(t,e){return(s,n)=>e.intercept(s,{handle:r=>t(r,n)})}function Ot(t,e,s){return(n,r)=>Ce(s,()=>e(n,o=>t(o,r)))}var It=new w(""),H=new w(""),St=new w(""),kt=new w("");function Lt(){let t=null;return(e,s)=>{t===null&&(t=(E(It,{optional:!0})??[]).reduceRight(Nt,st));let n=E(de),r=n.add();return t(e,s).pipe(oe(()=>n.remove(r)))}}var et=(()=>{let e=class e extends F{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=E(de);let o=E(kt,{optional:!0});this.backend=o??n}handle(n){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(H),...this.injector.get(St,[])]));this.chain=o.reduceRight((a,i)=>Ot(a,i,this.injector),st)}let r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe(oe(()=>this.pendingTasks.remove(r)))}};e.\u0275fac=function(r){return new(r||e)(d(Z),d(xe))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})(),xt=0,tt,Ct="JSONP injected script did not invoke callback.",jt="JSONP requests must use JSONP request method.",Ft="JSONP requests must use Json response type.",Ut="JSONP requests do not support headers.",Y=class{};function _t(){return typeof window=="object"?window:{}}var ot=(()=>{let e=class e{constructor(n,r){this.callbackMap=n,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return`ng_jsonp_callback_${xt++}`}handle(n){if(n.method!=="JSONP")throw new Error(jt);if(n.responseType!=="json")throw new Error(Ft);if(n.headers.keys().length>0)throw new Error(Ut);return new re(r=>{let o=this.nextCallback(),a=n.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${o}$1`),i=this.document.createElement("script");i.src=a;let l=null,c=!1;this.callbackMap[o]=b=>{delete this.callbackMap[o],l=b,c=!0};let u=()=>{i.parentNode&&i.parentNode.removeChild(i),delete this.callbackMap[o]},p=b=>{this.resolvedPromise.then(()=>{if(u(),!c){r.error(new k({url:a,status:0,statusText:"JSONP Error",error:new Error(Ct)}));return}r.next(new _({body:l,status:B.Ok,statusText:"OK",url:a})),r.complete()})},y=b=>{u(),r.error(new k({error:b,status:0,statusText:"JSONP Error",url:a}))};return i.addEventListener("load",p),i.addEventListener("error",y),this.document.body.appendChild(i),r.next({type:A.Sent}),()=>{c||this.removeListeners(i),u()}})}removeListeners(n){tt??=this.document.implementation.createHTMLDocument(),tt.adoptNode(n)}};e.\u0275fac=function(r){return new(r||e)(d(Y),d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})();function Bt(t,e){return t.method==="JSONP"?E(ot).handle(t):e(t)}var Vt=/^\)\]\}',?\n/;function zt(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var nt=(()=>{let e=class e{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new T(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?Oe(r.\u0275loadImpl()):se(null)).pipe(ke(()=>new re(a=>{let i=r.build();if(i.open(n.method,n.urlWithParams),n.withCredentials&&(i.withCredentials=!0),n.headers.forEach((h,f)=>i.setRequestHeader(h,f.join(","))),n.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let h=n.detectContentTypeHeader();h!==null&&i.setRequestHeader("Content-Type",h)}if(n.responseType){let h=n.responseType.toLowerCase();i.responseType=h!=="json"?h:"text"}let l=n.serializeBody(),c=null,u=()=>{if(c!==null)return c;let h=i.statusText||"OK",f=new P(i.getAllResponseHeaders()),N=zt(i)||n.url;return c=new me({headers:f,status:i.status,statusText:h,url:N}),c},p=()=>{let{headers:h,status:f,statusText:N,url:Pe}=u(),g=null;f!==B.NoContent&&(g=typeof i.response>"u"?i.responseText:i.response),f===0&&(f=g?B.Ok:0);let ne=f>=200&&f<300;if(n.responseType==="json"&&typeof g=="string"){let yt=g;g=g.replace(Vt,"");try{g=g!==""?JSON.parse(g):null}catch(mt){g=yt,ne&&(ne=!1,g={error:mt,text:g})}}ne?(a.next(new _({body:g,headers:h,status:f,statusText:N,url:Pe||void 0})),a.complete()):a.error(new k({error:g,headers:h,status:f,statusText:N,url:Pe||void 0}))},y=h=>{let{url:f}=u(),N=new k({error:h,status:i.status||0,statusText:i.statusText||"Unknown Error",url:f||void 0});a.error(N)},b=!1,De=h=>{b||(a.next(u()),b=!0);let f={type:A.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),n.responseType==="text"&&i.responseText&&(f.partialText=i.responseText),a.next(f)},Ae=h=>{let f={type:A.UploadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),a.next(f)};return i.addEventListener("load",p),i.addEventListener("error",y),i.addEventListener("timeout",y),i.addEventListener("abort",y),n.reportProgress&&(i.addEventListener("progress",De),l!==null&&i.upload&&i.upload.addEventListener("progress",Ae)),i.send(l),a.next({type:A.Sent}),()=>{i.removeEventListener("error",y),i.removeEventListener("abort",y),i.removeEventListener("load",p),i.removeEventListener("timeout",y),n.reportProgress&&(i.removeEventListener("progress",De),l!==null&&i.upload&&i.upload.removeEventListener("progress",Ae)),i.readyState!==i.DONE&&i.abort()}})))}};e.\u0275fac=function(r){return new(r||e)(d(q))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})(),it=new w(""),$t="XSRF-TOKEN",Kt=new w("",{providedIn:"root",factory:()=>$t}),Xt="X-XSRF-TOKEN",Jt=new w("",{providedIn:"root",factory:()=>Xt}),Q=class{},Gt=(()=>{let e=class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=G(n,this.cookieName),this.lastCookieString=n),this.lastToken}};e.\u0275fac=function(r){return new(r||e)(d(v),d(M),d(Kt))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})();function qt(t,e){let s=t.url.toLowerCase();if(!E(it)||t.method==="GET"||t.method==="HEAD"||s.startsWith("http://")||s.startsWith("https://"))return e(t);let n=E(Q).getToken(),r=E(Jt);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),e(t)}var ge=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(ge||{});function at(t,e){return{\u0275kind:t,\u0275providers:e}}function Wt(...t){let e=[Pt,nt,et,{provide:F,useExisting:et},{provide:Z,useExisting:nt},{provide:H,useValue:qt,multi:!0},{provide:it,useValue:!0},{provide:Q,useClass:Gt}];for(let s of t)e.push(...s.\u0275providers);return ie(e)}var rt=new w("");function Zt(){return at(ge.LegacyInterceptors,[{provide:rt,useFactory:Lt},{provide:H,useExisting:rt,multi:!0}])}function Yt(){return at(ge.JsonpSupport,[ot,{provide:Y,useFactory:_t},{provide:H,useValue:Bt,multi:!0}])}var Un=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=J({type:e}),e.\u0275inj=X({providers:[Wt(Zt())]});let t=e;return t})(),_n=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=J({type:e}),e.\u0275inj=X({providers:[Yt().\u0275providers]});let t=e;return t})();var Ee=class extends qe{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Te=class t extends Ee{static makeCurrent(){Ge(new t)}onAndCancel(e,s,n){return e.addEventListener(s,n),()=>{e.removeEventListener(s,n)}}dispatchEvent(e,s){e.dispatchEvent(s)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,s){return s=s||this.getDefaultDocument(),s.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,s){return s==="window"?window:s==="document"?e:s==="body"?e.body:null}getBaseHref(e){let s=Ht();return s==null?null:en(s)}resetBaseElement(){V=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return G(document.cookie,e)}},V=null;function Ht(){return V=V||document.querySelector("base"),V?V.getAttribute("href"):null}function en(t){return new URL(t,document.baseURI).pathname}var tn=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})(),Re=new w(""),ut=(()=>{let e=class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,o){return this._findPluginFor(r).addEventListener(n,r,o)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(a=>a.supports(n)),!r)throw new T(5101,!1);return this._eventNameToPlugin.set(n,r),r}};e.\u0275fac=function(r){return new(r||e)(d(Re),d(S))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})(),ee=class{constructor(e){this._doc=e}},ve="ng-app-id",ht=(()=>{let e=class e{constructor(n,r,o,a={}){this.doc=n,this.appId=r,this.nonce=o,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=he(a),this.resetHostNodes()}addStyles(n){for(let r of n)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(n){for(let r of n)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(r=>r.remove()),n.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){let r=this.styleRef;r.get(n)?.elements?.forEach(o=>o.remove()),r.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${ve}="${this.appId}"]`);if(n?.length){let r=new Map;return n.forEach(o=>{o.textContent!=null&&r.set(o.textContent,o)}),r}return null}changeUsageCount(n,r){let o=this.styleRef;if(o.has(n)){let a=o.get(n);return a.usage+=r,a.usage}return o.set(n,{usage:r,elements:[]}),r}getStyleElement(n,r){let o=this.styleNodesInDOM,a=o?.get(r);if(a?.parentNode===n)return o.delete(r),a.removeAttribute(ve),a;{let i=this.doc.createElement("style");return this.nonce&&i.setAttribute("nonce",this.nonce),i.textContent=r,this.platformIsServer&&i.setAttribute(ve,this.appId),n.appendChild(i),i}}addStyleToHost(n,r){let o=this.getStyleElement(n,r),a=this.styleRef,i=a.get(r)?.elements;i?i.push(o):a.set(r,{elements:[o],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(d(v),d(ae),d(ce,8),d(M))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})(),we={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Me=/%COMP%/g,ft="%COMP%",nn=`_nghost-${ft}`,rn=`_ngcontent-${ft}`,sn=!0,on=new w("",{providedIn:"root",factory:()=>sn});function an(t){return rn.replace(Me,t)}function cn(t){return nn.replace(Me,t)}function pt(t,e){return e.map(s=>s.replace(Me,t))}var ct=(()=>{let e=class e{constructor(n,r,o,a,i,l,c,u=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=a,this.doc=i,this.platformId=l,this.ngZone=c,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=he(l),this.defaultRenderer=new z(n,i,c,this.platformIsServer)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===x.ShadowDom&&(r=Ne(K({},r),{encapsulation:x.Emulated}));let o=this.getOrCreateRenderer(n,r);return o instanceof te?o.applyToHost(n):o instanceof $&&o.applyStyles(),o}getOrCreateRenderer(n,r){let o=this.rendererByCompId,a=o.get(r.id);if(!a){let i=this.doc,l=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,y=this.platformIsServer;switch(r.encapsulation){case x.Emulated:a=new te(c,u,r,this.appId,p,i,l,y);break;case x.ShadowDom:return new be(c,u,n,r,i,l,this.nonce,y);default:a=new $(c,u,r,p,i,l,y);break}o.set(r.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(d(ut),d(ht),d(ae),d(on),d(v),d(M),d(S),d(ce))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})(),z=class{constructor(e,s,n,r){this.eventManager=e,this.doc=s,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,s){return s?this.doc.createElementNS(we[s]||s,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,s){(lt(e)?e.content:e).appendChild(s)}insertBefore(e,s,n){e&&(lt(e)?e.content:e).insertBefore(s,n)}removeChild(e,s){e&&e.removeChild(s)}selectRootElement(e,s){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new T(-5104,!1);return s||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,s,n,r){if(r){s=r+":"+s;let o=we[r];o?e.setAttributeNS(o,s,n):e.setAttribute(s,n)}else e.setAttribute(s,n)}removeAttribute(e,s,n){if(n){let r=we[n];r?e.removeAttributeNS(r,s):e.removeAttribute(`${n}:${s}`)}else e.removeAttribute(s)}addClass(e,s){e.classList.add(s)}removeClass(e,s){e.classList.remove(s)}setStyle(e,s,n,r){r&(C.DashCase|C.Important)?e.style.setProperty(s,n,r&C.Important?"important":""):e.style[s]=n}removeStyle(e,s,n){n&C.DashCase?e.style.removeProperty(s):e.style[s]=""}setProperty(e,s,n){e!=null&&(e[s]=n)}setValue(e,s){e.nodeValue=s}listen(e,s,n){if(typeof e=="string"&&(e=ue().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${s}`);return this.eventManager.addEventListener(e,s,this.decoratePreventDefault(n))}decoratePreventDefault(e){return s=>{if(s==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(s)):e(s))===!1&&s.preventDefault()}}};function lt(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var be=class extends z{constructor(e,s,n,r,o,a,i,l){super(e,o,a,l),this.sharedStylesHost=s,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=pt(r.id,r.styles);for(let u of c){let p=document.createElement("style");i&&p.setAttribute("nonce",i),p.textContent=u,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,s){return super.appendChild(this.nodeOrShadowRoot(e),s)}insertBefore(e,s,n){return super.insertBefore(this.nodeOrShadowRoot(e),s,n)}removeChild(e,s){return super.removeChild(this.nodeOrShadowRoot(e),s)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},$=class extends z{constructor(e,s,n,r,o,a,i,l){super(e,o,a,i),this.sharedStylesHost=s,this.removeStylesOnCompDestroy=r,this.styles=l?pt(l,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},te=class extends ${constructor(e,s,n,r,o,a,i,l){let c=r+"-"+n.id;super(e,s,n,o,a,i,l,c),this.contentAttr=an(c),this.hostAttr=cn(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,s){let n=super.createElement(e,s);return super.setAttribute(n,this.contentAttr,""),n}},ln=(()=>{let e=class e extends ee{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,o){return n.addEventListener(r,o,!1),()=>this.removeEventListener(n,r,o)}removeEventListener(n,r,o){return n.removeEventListener(r,o)}};e.\u0275fac=function(r){return new(r||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})(),dt=["alt","control","meta","shift"],dn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},un={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},hn=(()=>{let e=class e extends ee{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,o){let a=e.parseEventName(r),i=e.eventCallback(a.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ue().onAndCancel(n,a.domEventName,i))}static parseEventName(n){let r=n.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let a=e._normalizeKey(r.pop()),i="",l=r.indexOf("code");if(l>-1&&(r.splice(l,1),i="code."),dt.forEach(u=>{let p=r.indexOf(u);p>-1&&(r.splice(p,1),i+=u+".")}),i+=a,r.length!=0||a.length===0)return null;let c={};return c.domEventName=o,c.fullKey=i,c}static matchEventFullKeyCode(n,r){let o=dn[n.key]||n.key,a="";return r.indexOf("code.")>-1&&(o=n.code,a="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),dt.forEach(i=>{if(i!==o){let l=un[i];l(n)&&(a+=i+".")}}),a+=o,a===r)}static eventCallback(n,r,o){return a=>{e.matchEventFullKeyCode(a,n)&&o.runGuarded(()=>r(a))}}static _normalizeKey(n){return n==="esc"?"escape":n}};e.\u0275fac=function(r){return new(r||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac});let t=e;return t})();function lr(t,e){return Je(K({rootComponent:t},fn(e)))}function fn(t){return{appProviders:[...vn,...t?.providers??[]],platformProviders:gn}}function pn(){Te.makeCurrent()}function yn(){return new le}function mn(){return je(document),document}var gn=[{provide:M,useValue:We},{provide:Fe,useValue:pn,multi:!0},{provide:v,useFactory:mn,deps:[]}];var vn=[{provide:Le,useValue:"root"},{provide:le,useFactory:yn,deps:[]},{provide:Re,useClass:ln,multi:!0,deps:[v,S,M]},{provide:Re,useClass:hn,multi:!0,deps:[v]},ct,ht,ut,{provide:Xe,useExisting:ct},{provide:q,useClass:tn,deps:[]},[]];var dr=(()=>{let e=class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};e.\u0275fac=function(r){return new(r||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var wn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=m({token:e,factory:function(r){let o=null;return r?o=new(r||e):o=d(En),o},providedIn:"root"});let t=e;return t})(),En=(()=>{let e=class e extends wn{constructor(n){super(),this._doc=n}sanitize(n,r){if(r==null)return null;switch(n){case D.NONE:return r;case D.HTML:return I(r,"HTML")?O(r):Ke(this._doc,String(r)).toString();case D.STYLE:return I(r,"Style")?O(r):r;case D.SCRIPT:if(I(r,"Script"))return O(r);throw new T(5200,!1);case D.URL:return I(r,"URL")?O(r):$e(String(r));case D.RESOURCE_URL:if(I(r,"ResourceURL"))return O(r);throw new T(5201,!1);default:throw new T(5202,!1)}}bypassSecurityTrustHtml(n){return Ue(n)}bypassSecurityTrustStyle(n){return _e(n)}bypassSecurityTrustScript(n){return Be(n)}bypassSecurityTrustUrl(n){return Ve(n)}bypassSecurityTrustResourceUrl(n){return ze(n)}};e.\u0275fac=function(r){return new(r||e)(d(v))},e.\u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{Pt as a,Un as b,_n as c,ct as d,lr as e,dr as f,wn as g};
/*! Bundled license information:

@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v17.1.2
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v17.1.2
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
