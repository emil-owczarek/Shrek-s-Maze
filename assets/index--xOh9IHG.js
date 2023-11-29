(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const fl={level1:{1:"1 / 1 / 7 / 3",2:"4 / 3 / 7 / 5",3:"2 / 6 / 8 / 8",4:"2 / 4 / 3 / 6"},level2:{2:"1 / 5 / 6 / 8",1:"1 / 8 / 4 / 9",3:"3 / 9 / 4 / 10",4:"5 / 9 / 11 / 11",5:"6 / 7 / 10 / 8",6:"2 / 3 / 11 / 4",7:"7 / 4 / 8 / 6",8:"1 / 1 / 5 / 2",9:"6 / 2 / 9 / 3",10:"9 / 5 / 10 / 7"},level3:{1:"18 / 4 / 19 / 7",2:"13 / 1 / 18 / 7",3:"1 / 1 / 13 / 3",4:"20 / 4 / 21 / 9",5:"1 / 3 / 3 / 18",6:"10 / 8 / 20 / 9",7:"10 / 4 / 12 / 8",8:"4 / 4 / 10 / 5",9:"4 / 5 / 5 / 16",10:"15 / 9 / 18 / 13",11:"14 / 10 / 15 / 13",12:"6 / 6 / 7 / 17",13:"8 / 6 / 9 / 17",14:"3 / 17 / 19 / 18",15:"10 / 10 / 13 / 16",16:"19 / 10 / 20 / 19",17:"14 / 14 / 18 / 17",18:"6 / 20 / 21 / 21",19:"9 / 18 / 18 / 19",20:"4 / 19 / 6 / 21"}},No={1:{gridColsRows:"repeat(7, 1fr)",background:"url('./assets/images/castle.webp')",pathColor:"#723305",wallsColor:"rgba(80, 5, 5, 0.822)",startArea:"7 / 1 / 8 / 2",finishArea:"1 / 7 / 2 / 8",startIcon:"url('./assets/images/dragon.webp')",finishIcon:"url('./assets/images/donkey.webp')",audioSource:"./assets/sounds/level1.mp3"},2:{gridColsRows:"repeat(10, 1fr)",background:"url('./assets/images/swamp.webp')",pathColor:"#aa5e27",wallsColor:"rgb(13, 83, 4)",startArea:"9 / 1 / 11 / 3",finishArea:"1 / 9 / 3 / 11",startIcon:"url('./assets/images/donkey.webp')",finishIcon:"url('./assets/images/shrek.webp')",audioSource:"./assets/sounds/level2.mp3"},3:{gridColsRows:"repeat(20, 1fr)",background:"url('./assets/images/far-far-away.webp')",pathColor:"#aa5e27",wallsColor:"#2d303d",startArea:"18 / 1 / 21 / 4",finishArea:"1 / 18 / 4 / 21",startIcon:"url('./assets/images/shrek.webp')",finishIcon:"url('./assets/images/fiona.webp')",audioSource:"./assets/sounds/level3.mp3"}};function ml(){document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.addEventListener("keydown",function(e){(e.key==="F12"||e.ctrlKey&&e.shiftKey&&(e.key==="I"||e.key==="C"||e.key==="J"))&&(e.preventDefault(),alert("Use of developer tools is blocked on this page."))})}var Ri={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},pl=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,u=s+2<e.length,l=u?e[s+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(f=64)),r.push(n[c],n[h],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ko(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new gl;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class gl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _l=function(e){const t=ko(e);return Mo.encodeByteArray(t,!0)},xn=function(e){return _l(e).replace(/\./g,"")},yl=function(e){try{return Mo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=()=>El().__FIREBASE_DEFAULTS__,vl=()=>{if(typeof process>"u"||typeof Ri>"u")return;const e=Ri.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Il=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&yl(e[1]);return t&&JSON.parse(t)},Oo=()=>{try{return Tl()||vl()||Il()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Al=e=>{var t,n;return(n=(t=Oo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},wl=e=>{const t=Al(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},xo=()=>{var e;return(e=Oo())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[xn(JSON.stringify(n)),xn(JSON.stringify(o)),a].join(".")}function Pl(){try{return typeof indexedDB=="object"}catch{return!1}}function Cl(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="FirebaseError";class pe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Vl,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Dl(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pe(s,a,r)}}function Dl(e,t){return e.replace(bl,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const bl=/\{\$([^}]+)}/g;function jr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Si(i)&&Si(o)){if(!jr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Si(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return e&&e._delegate?e._delegate:e}class Be{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Rl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ml(t))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Lt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Lt){return this.instances.has(t)}getOptions(t=Lt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Lt){return this.component?this.component.multipleInstances?t:Lt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kl(e){return e===Lt?void 0:e}function Ml(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Nl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const xl={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Ll=V.INFO,Fl={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Ul=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Fl[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fo{constructor(t){this.name=t,this._logLevel=Ll,this._logHandler=Ul,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Bl=(e,t)=>t.some(n=>e instanceof n);let Pi,Ci;function ql(){return Pi||(Pi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $l(){return Ci||(Ci=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uo=new WeakMap,zr=new WeakMap,Bo=new WeakMap,Pr=new WeakMap,vs=new WeakMap;function jl(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(St(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Uo.set(n,e)}).catch(()=>{}),vs.set(t,e),t}function zl(e){if(zr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});zr.set(e,t)}let Gr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Gl(e){Gr=e(Gr)}function Hl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cr(this),t,...n);return Bo.set(r,t.sort?t.sort():[t]),St(r)}:$l().includes(e)?function(...t){return e.apply(Cr(this),t),St(Uo.get(this))}:function(...t){return St(e.apply(Cr(this),t))}}function Kl(e){return typeof e=="function"?Hl(e):(e instanceof IDBTransaction&&zl(e),Bl(e,ql())?new Proxy(e,Gr):e)}function St(e){if(e instanceof IDBRequest)return jl(e);if(Pr.has(e))return Pr.get(e);const t=Kl(e);return t!==e&&(Pr.set(e,t),vs.set(t,e)),t}const Cr=e=>vs.get(e);function Wl(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=St(o);return r&&o.addEventListener("upgradeneeded",u=>{r(St(o.result),u.oldVersion,u.newVersion,St(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ql=["get","getKey","getAll","getAllKeys","count"],Yl=["put","add","delete","clear"],Vr=new Map;function Vi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Vr.get(t))return Vr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Yl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ql.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&u.done]))[0]};return Vr.set(t,i),i}Gl(e=>({...e,get:(t,n,r)=>Vi(t,n)||e.get(t,n,r),has:(t,n)=>!!Vi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hr="@firebase/app",Di="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Fo("@firebase/app"),Zl="@firebase/app-compat",tc="@firebase/analytics-compat",ec="@firebase/analytics",nc="@firebase/app-check-compat",rc="@firebase/app-check",sc="@firebase/auth",ic="@firebase/auth-compat",oc="@firebase/database",ac="@firebase/database-compat",uc="@firebase/functions",lc="@firebase/functions-compat",cc="@firebase/installations",hc="@firebase/installations-compat",dc="@firebase/messaging",fc="@firebase/messaging-compat",mc="@firebase/performance",pc="@firebase/performance-compat",gc="@firebase/remote-config",_c="@firebase/remote-config-compat",yc="@firebase/storage",Ec="@firebase/storage-compat",Tc="@firebase/firestore",vc="@firebase/firestore-compat",Ic="firebase",Ac="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]",wc={[Hr]:"fire-core",[Zl]:"fire-core-compat",[ec]:"fire-analytics",[tc]:"fire-analytics-compat",[rc]:"fire-app-check",[nc]:"fire-app-check-compat",[sc]:"fire-auth",[ic]:"fire-auth-compat",[oc]:"fire-rtdb",[ac]:"fire-rtdb-compat",[uc]:"fire-fn",[lc]:"fire-fn-compat",[cc]:"fire-iid",[hc]:"fire-iid-compat",[dc]:"fire-fcm",[fc]:"fire-fcm-compat",[mc]:"fire-perf",[pc]:"fire-perf-compat",[gc]:"fire-rc",[_c]:"fire-rc-compat",[yc]:"fire-gcs",[Ec]:"fire-gcs-compat",[Tc]:"fire-fst",[vc]:"fire-fst-compat","fire-js":"fire-js",[Ic]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new Map,Wr=new Map;function Rc(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fn(e){const t=e.name;if(Wr.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Wr.set(t,e);for(const n of Ln.values())Rc(n,e);return!0}function Sc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new Lo("app","Firebase",Pc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=Ac;function qo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(n||(n=xo()),!n)throw Pt.create("no-options");const i=Ln.get(s);if(i){if(jr(n,i.options)&&jr(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const o=new Ol(s);for(const u of Wr.values())o.addComponent(u);const a=new Cc(n,r,o);return Ln.set(s,a),a}function Dc(e=Kr){const t=Ln.get(e);if(!t&&e===Kr&&xo())return qo();if(!t)throw Pt.create("no-app",{appName:e});return t}function te(e,t,n){var r;let s=(r=wc[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}Fn(new Be(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="firebase-heartbeat-database",Nc=1,qe="firebase-heartbeat-store";let Dr=null;function $o(){return Dr||(Dr=Wl(bc,Nc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qe)}}}).catch(e=>{throw Pt.create("idb-open",{originalErrorMessage:e.message})})),Dr}async function kc(e){try{return await(await $o()).transaction(qe).objectStore(qe).get(jo(e))}catch(t){if(t instanceof pe)$t.warn(t.message);else{const n=Pt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function bi(e,t){try{const r=(await $o()).transaction(qe,"readwrite");await r.objectStore(qe).put(t,jo(e)),await r.done}catch(n){if(n instanceof pe)$t.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function jo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=1024,Oc=30*24*60*60*1e3;class xc{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ni();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Oc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ni(),{heartbeatsToSend:r,unsentEntries:s}=Lc(this._heartbeatsCache.heartbeats),i=xn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ni(){return new Date().toISOString().substring(0,10)}function Lc(e,t=Mc){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ki(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ki(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pl()?Cl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ki(e){return xn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(e){Fn(new Be("platform-logger",t=>new Xl(t),"PRIVATE")),Fn(new Be("heartbeat",t=>new xc(t),"PRIVATE")),te(Hr,Di,e),te(Hr,Di,"esm2017"),te("fire-js","")}Uc("");var Bc="firebase",qc="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(Bc,qc,"app");var $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,Is=Is||{},v=$c||self;function tr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function un(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function jc(e){return Object.prototype.hasOwnProperty.call(e,br)&&e[br]||(e[br]=++zc)}var br="closure_uid_"+(1e9*Math.random()>>>0),zc=0;function Gc(e,t,n){return e.call.apply(e.bind,arguments)}function Hc(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=Gc:Z=Hc,Z.apply(null,arguments)}function An(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Mt(){this.s=this.s,this.o=this.o}var Kc=0;Mt.prototype.s=!1;Mt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Kc!=0)&&jc(this)};Mt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function As(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Mi(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(tr(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var Wc=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",()=>{},t),v.removeEventListener("test",()=>{},t)}catch{}return e}();function $e(e){return/^[\s\xa0]*$/.test(e)}function er(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function dt(e){return er().indexOf(e)!=-1}function ws(e){return ws[" "](e),e}ws[" "]=function(){};function Qc(e,t){var n=qh;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Yc=dt("Opera"),ae=dt("Trident")||dt("MSIE"),Go=dt("Edge"),Qr=Go||ae,Ho=dt("Gecko")&&!(er().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),Xc=er().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function Ko(){var e=v.document;return e?e.documentMode:void 0}var Yr;t:{var Nr="",kr=function(){var e=er();if(Ho)return/rv:([^\);]+)(\)|;)/.exec(e);if(Go)return/Edge\/([\d\.]+)/.exec(e);if(ae)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Xc)return/WebKit\/(\S+)/.exec(e);if(Yc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(kr&&(Nr=kr?kr[1]:""),ae){var Mr=Ko();if(Mr!=null&&Mr>parseFloat(Nr)){Yr=String(Mr);break t}}Yr=Nr}var Xr;if(v.document&&ae){var Oi=Ko();Xr=Oi||parseInt(Yr,10)||void 0}else Xr=void 0;var Jc=Xr;function je(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ho){t:{try{ws(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Zc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&je.$.h.call(this)}}z(je,tt);var Zc={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),th=0;function eh(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++th,this.fa=this.ia=!1}function nr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Rs(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function nh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Wo(e){const t={};for(const n in e)t[n]=e[n];return t}const xi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qo(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<xi.length;i++)n=xi[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function rr(e){this.src=e,this.g={},this.h=0}rr.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Zr(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new eh(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Jr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=zo(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(nr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Zr(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Ss="closure_lm_"+(1e6*Math.random()|0),Or={};function Yo(e,t,n,r,s){if(r&&r.once)return Jo(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Yo(e,t[i],n,r,s);return null}return n=Vs(n),e&&e[ln]?e.O(t,n,un(r)?!!r.capture:!!r,s):Xo(e,t,n,!1,r,s)}function Xo(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=un(s)?!!s.capture:!!s,a=Cs(e);if(a||(e[Ss]=a=new rr(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=rh(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Wc||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ta(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rh(){function e(n){return t.call(e.src,e.listener,n)}const t=sh;return e}function Jo(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Jo(e,t[i],n,r,s);return null}return n=Vs(n),e&&e[ln]?e.P(t,n,un(r)?!!r.capture:!!r,s):Xo(e,t,n,!0,r,s)}function Zo(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Zo(e,t[i],n,r,s);else r=un(r)?!!r.capture:!!r,n=Vs(n),e&&e[ln]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Zr(i,n,r,s),-1<n&&(nr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Cs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Zr(t,n,r,s)),(n=-1<e?t[e]:null)&&Ps(n))}function Ps(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ln])Jr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ta(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Cs(t))?(Jr(n,e),n.h==0&&(n.src=null,t[Ss]=null)):nr(e)}}}function ta(e){return e in Or?Or[e]:Or[e]="on"+e}function sh(e,t){if(e.fa)e=!0;else{t=new je(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ps(e),e=n.call(r,t)}return e}function Cs(e){return e=e[Ss],e instanceof rr?e:null}var xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vs(e){return typeof e=="function"?e:(e[xr]||(e[xr]=function(t){return e.handleEvent(t)}),e[xr])}function j(){Mt.call(this),this.i=new rr(this),this.S=this,this.J=null}z(j,Mt);j.prototype[ln]=!0;j.prototype.removeEventListener=function(e,t,n,r){Zo(this,e,t,n,r)};function W(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var s=t;t=new tt(r,e),Qo(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=wn(o,r,!0,t)&&s}if(o=t.g=e,s=wn(o,r,!0,t)&&s,s=wn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=wn(o,r,!1,t)&&s}j.prototype.N=function(){if(j.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)nr(n[r]);delete e.g[t],e.h--}}this.J=null};j.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};j.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function wn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Jr(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ds=v.JSON.stringify;class ih{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function oh(){var e=bs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ah{constructor(){this.h=this.g=null}add(t,n){const r=ea.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ea=new ih(()=>new uh,e=>e.reset());class uh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function ch(e){v.setTimeout(()=>{throw e},0)}let ze,Ge=!1,bs=new ah,na=()=>{const e=v.Promise.resolve(void 0);ze=()=>{e.then(hh)}};var hh=()=>{for(var e;e=oh();){try{e.h.call(e.g)}catch(n){ch(n)}var t=ea;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ge=!1};function sr(e,t){j.call(this),this.h=e||1,this.g=t||v,this.j=Z(this.qb,this),this.l=Date.now()}z(sr,j);g=sr.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),W(this,"tick"),this.ga&&(Ns(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ns(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){sr.$.N.call(this),Ns(this),delete this.g};function ks(e,t,n){if(typeof e=="function")n&&(e=Z(e,n));else if(e&&typeof e.handleEvent=="function")e=Z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function ra(e){e.g=ks(()=>{e.g=null,e.i&&(e.i=!1,ra(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class dh extends Mt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ra(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){Mt.call(this),this.h=e,this.g={}}z(He,Mt);var Li=[];function sa(e,t,n,r){Array.isArray(n)||(n&&(Li[0]=n.toString()),n=Li);for(var s=0;s<n.length;s++){var i=Yo(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ia(e){Rs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ps(t)},e),e.g={}}He.prototype.N=function(){He.$.N.call(this),ia(this)};He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ir(){this.g=!0}ir.prototype.Ea=function(){this.g=!1};function fh(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function mh(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Zt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+gh(e,n)+(r?" "+r:"")})}function ph(e,t){e.info(function(){return"TIMEOUT: "+t})}ir.prototype.info=function(){};function gh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ds(n)}catch{return t}}var Ht={},Fi=null;function or(){return Fi=Fi||new j}Ht.Ta="serverreachability";function oa(e){tt.call(this,Ht.Ta,e)}z(oa,tt);function Ke(e){const t=or();W(t,new oa(t))}Ht.STAT_EVENT="statevent";function aa(e,t){tt.call(this,Ht.STAT_EVENT,e),this.stat=t}z(aa,tt);function rt(e){const t=or();W(t,new aa(t,e))}Ht.Ua="timingevent";function ua(e,t){tt.call(this,Ht.Ua,e),this.size=t}z(ua,tt);function cn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var ar={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},la={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ms(){}Ms.prototype.h=null;function Ui(e){return e.h||(e.h=e.i())}function ca(){}var hn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Os(){tt.call(this,"d")}z(Os,tt);function xs(){tt.call(this,"c")}z(xs,tt);var ts;function ur(){}z(ur,Ms);ur.prototype.g=function(){return new XMLHttpRequest};ur.prototype.i=function(){return{}};ts=new ur;function dn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new He(this),this.P=_h,e=Qr?125:void 0,this.V=new sr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ha}function ha(){this.i=null,this.g="",this.h=!1}var _h=45e3,es={},Un={};g=dn.prototype;g.setTimeout=function(e){this.P=e};function ns(e,t,n){e.L=1,e.v=cr(vt(t)),e.s=n,e.S=!0,da(e,null)}function da(e,t){e.G=Date.now(),fn(e),e.A=vt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Ta(n.i,"t",r),e.C=0,n=e.l.J,e.h=new ha,e.g=qa(e.l,n?t:null,!e.s),0<e.O&&(e.M=new dh(Z(e.Pa,e,e.g),e.O)),sa(e.U,e.g,"readystatechange",e.nb),t=e.I?Wo(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ke(),fh(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&ft(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const c=ft(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Qr||this.g&&(this.h.h||this.g.ja()||ji(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?Ke(3):Ke(2)),lr(this);var n=this.g.da();this.ca=n;e:if(fa(this)){var r=ji(this.g);e="";var s=r.length,i=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),ke(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,mh(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$e(a)){var l=a;break e}}l=null}if(n=l)Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,n);else{this.i=!1,this.o=3,rt(12),Ft(this),ke(this);break t}}this.S?(ma(this,c,o),Qr&&this.i&&c==3&&(sa(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,o,null),rs(this,o)),c==4&&Ft(this),this.i&&!this.J&&(c==4?La(this.l,this):(this.i=!1,fn(this)))}else Fh(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Ft(this),ke(this)}}}catch{}finally{}};function fa(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ma(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=yh(e,n),s==Un){t==4&&(e.o=4,rt(14),r=!1),Zt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==es){e.o=4,rt(15),Zt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Zt(e.j,e.m,s,null),rs(e,s);fa(e)&&s!=Un&&s!=es&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$s(t),t.M=!0,rt(11))):(Zt(e.j,e.m,n,"[Invalid Chunked Response]"),Ft(e),ke(e))}g.mb=function(){if(this.g){var e=ft(this.g),t=this.g.ja();this.C<t.length&&(lr(this),ma(this,e,t),this.i&&e!=4&&fn(this))}};function yh(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Un:(n=Number(t.substring(n,r)),isNaN(n)?es:(r+=1,r+n>t.length?Un:(t=t.slice(r,r+n),e.C=r+n,t)))}g.cancel=function(){this.J=!0,Ft(this)};function fn(e){e.Y=Date.now()+e.P,pa(e,e.P)}function pa(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=cn(Z(e.lb,e),t)}function lr(e){e.B&&(v.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ph(this.j,this.A),this.L!=2&&(Ke(),rt(17)),Ft(this),this.o=2,ke(this)):pa(this,this.Y-e)};function ke(e){e.l.H==0||e.J||La(e.l,e)}function Ft(e){lr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ns(e.V),ia(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function rs(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ss(n.i,e))){if(!e.K&&ss(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)$n(n),fr(n);else break t;qs(n),rt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=cn(Z(n.ib,n),6e3));if(1>=Aa(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ut(n,11)}else if((e.K||n.g==e)&&$n(n),!$e(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const R=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var i=r.i;i.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ls(i,i.h),i.h=null))}if(r.F){const P=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(r.Da=P,N(r.I,r.F,P))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Ba(r,r.J?r.pa:null,r.Y),o.K){wa(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(lr(a),fn(a)),r.g=o}else Oa(r);0<n.j.length&&mr(n)}else l[0]!="stop"&&l[0]!="close"||Ut(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ut(n,7):Bs(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ke(4)}catch{}}function Eh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(tr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Th(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(tr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ga(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(tr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Th(e),r=Eh(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var _a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qt){this.h=e.h,Bn(this,e.j),this.s=e.s,this.g=e.g,qn(this,e.m),this.l=e.l;var t=e.i,n=new We;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bi(this,n),this.o=e.o}else e&&(t=String(e).match(_a))?(this.h=!1,Bn(this,t[1]||"",!0),this.s=Ce(t[2]||""),this.g=Ce(t[3]||"",!0),qn(this,t[4]),this.l=Ce(t[5]||"",!0),Bi(this,t[6]||"",!0),this.o=Ce(t[7]||"")):(this.h=!1,this.i=new We(null,this.h))}qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ve(t,qi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ve(t,qi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ve(n,n.charAt(0)=="/"?wh:Ah,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ve(n,Sh)),e.join("")};function vt(e){return new qt(e)}function Bn(e,t,n){e.j=n?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bi(e,t,n){t instanceof We?(e.i=t,Ph(e.i,e.h)):(n||(t=Ve(t,Rh)),e.i=new We(t,e.h))}function N(e,t,n){e.i.set(t,n)}function cr(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Ih),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ih(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var qi=/[#\/\?@]/g,Ah=/[#\?:]/g,wh=/[#\?]/g,Rh=/[#\?@]/g,Sh=/#/g;function We(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ot(e){e.g||(e.g=new Map,e.h=0,e.i&&vh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=We.prototype;g.add=function(e,t){Ot(this),this.i=null,e=ge(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ya(e,t){Ot(e),t=ge(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ea(e,t){return Ot(e),t=ge(e,t),e.g.has(t)}g.forEach=function(e,t){Ot(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};g.ta=function(){Ot(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};g.Z=function(e){Ot(this);let t=[];if(typeof e=="string")Ea(this,e)&&(t=t.concat(this.g.get(ge(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return Ot(this),this.i=null,e=ge(this,e),Ea(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Ta(e,t,n){ya(e,t),0<n.length&&(e.i=null,e.g.set(ge(e,t),As(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function ge(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ph(e,t){t&&!e.j&&(Ot(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ya(this,r),Ta(this,s,n))},e)),e.j=t}var Ch=class{constructor(e,t){this.g=e,this.map=t}};function va(e){this.l=e||Vh,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vh=10;function Ia(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Aa(e){return e.h?1:e.g?e.g.size:0}function ss(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ls(e,t){e.g?e.g.add(t):e.h=t}function wa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}va.prototype.cancel=function(){if(this.i=Ra(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ra(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return As(e.i)}var Dh=class{stringify(e){return v.JSON.stringify(e,void 0)}parse(e){return v.JSON.parse(e,void 0)}};function bh(){this.g=new Dh}function Nh(e,t,n){const r=n||"";try{ga(e,function(s,i){let o=s;un(s)&&(o=Ds(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function kh(e,t){const n=new ir;if(v.Image){const r=new Image;r.onload=An(Rn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=An(Rn,n,r,"TestLoadImage: error",!1,t),r.onabort=An(Rn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=An(Rn,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Rn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function mn(e){this.l=e.ec||null,this.j=e.ob||!1}z(mn,Ms);mn.prototype.g=function(){return new hr(this.l,this.j)};mn.prototype.i=function(e){return function(){return e}}({});function hr(e,t){j.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Fs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(hr,j);var Fs=0;g=hr.prototype;g.open=function(e,t){if(this.readyState!=Fs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Qe(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pn(this)),this.readyState=Fs};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sa(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Sa(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?pn(this):Qe(this),this.readyState==3&&Sa(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,pn(this))};g.Ya=function(e){this.g&&(this.response=e,pn(this))};g.ka=function(){this.g&&pn(this)};function pn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Qe(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Qe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Mh=v.JSON.parse;function x(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pa,this.L=this.M=!1}z(x,j);var Pa="",Oh=/^https?$/i,xh=["POST","PUT"];g=x.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ts.g(),this.C=this.u?Ui(this.u):Ui(ts),this.g.onreadystatechange=Z(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){$i(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=v.FormData&&e instanceof v.FormData,!(0<=zo(xh,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Da(this),0<this.B&&((this.L=Lh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.ua,this)):this.A=ks(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){$i(this,i)}};function Lh(e){return ae&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof Is<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function $i(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ca(e),dr(e)}function Ca(e){e.F||(e.F=!0,W(e,"complete"),W(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),dr(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dr(this,!0)),x.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?Va(this):this.kb())};g.kb=function(){Va(this)};function Va(e){if(e.h&&typeof Is<"u"&&(!e.C[1]||ft(e)!=4||e.da()!=2)){if(e.v&&ft(e)==4)ks(e.La,0,e);else if(W(e,"readystatechange"),ft(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(_a)[1]||null;!s&&v.self&&v.self.location&&(s=v.self.location.protocol.slice(0,-1)),r=!Oh.test(s?s.toLowerCase():"")}n=r}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var i=2<ft(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Ca(e)}}finally{dr(e)}}}}function dr(e,t){if(e.g){Da(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=r}catch{}}}function Da(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function ft(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Mh(t)}};function ji(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Pa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Fh(e){const t={};e=(e.g&&2<=ft(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if($e(e[r]))continue;var n=lh(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}nh(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ba(e){let t="";return Rs(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Us(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=ba(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function Re(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Na(e){this.Ga=0,this.j=[],this.l=new ir,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Re("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Re("baseRetryDelayMs",5e3,e),this.hb=Re("retryDelaySeedMs",1e4,e),this.eb=Re("forwardChannelMaxRetries",2,e),this.xa=Re("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new va(e&&e.concurrentRequestLimit),this.Ja=new bh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=Na.prototype;g.ra=8;g.H=1;function Bs(e){if(ka(e),e.H==3){var t=e.W++,n=vt(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),gn(e,n),t=new dn(e,e.l,t),t.L=2,t.v=cr(vt(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=qa(t.l,null),t.g.ha(t.v)),t.G=Date.now(),fn(t)}Ua(e)}function fr(e){e.g&&($s(e),e.g.cancel(),e.g=null)}function ka(e){fr(e),e.u&&(v.clearTimeout(e.u),e.u=null),$n(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function mr(e){if(!Ia(e.i)&&!e.m){e.m=!0;var t=e.Na;ze||na(),Ge||(ze(),Ge=!0),bs.add(t,e),e.C=0}}function Uh(e,t){return Aa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=cn(Z(e.Na,e,t),Fa(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new dn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Wo(i),Qo(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ma(this,s,t),n=vt(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),gn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(ba(i)))+"&"+t:this.o&&Us(n,this.o,i)),Ls(this.i,s),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),s.aa=!0,ns(s,n,null)):ns(s,n,t),this.H=2}}else this.H==3&&(e?zi(this,e):this.j.length==0||Ia(this.i)||zi(this))};function zi(e,t){var n;t?n=t.m:n=e.W++;const r=vt(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),gn(e,r),e.o&&e.s&&Us(r,e.o,e.s),n=new dn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ma(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ls(e.i,n),ns(n,r,t)}function gn(e,t){e.na&&Rs(e.na,function(n,r){N(t,r,n)}),e.h&&ga({},function(n,r){N(t,r,n)})}function Ma(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Z(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let l=s[u].g;const c=s[u].map;if(l-=i,0>l)i=Math.max(0,s[u].g-100),a=!1;else try{Nh(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Oa(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ze||na(),Ge||(ze(),Ge=!0),bs.add(t,e),e.A=0}}function qs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=cn(Z(e.Ma,e),Fa(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,xa(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=cn(Z(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),fr(this),xa(this))};function $s(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function xa(e){e.g=new dn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=vt(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),gn(e,t),e.o&&e.s&&Us(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=cr(vt(t)),n.s=null,n.S=!0,da(n,e)}g.ib=function(){this.v!=null&&(this.v=null,fr(this),qs(this),rt(19))};function $n(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function La(e,t){var n=null;if(e.g==t){$n(e),$s(e),e.g=null;var r=2}else if(ss(e.i,t))n=t.F,wa(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=or(),W(r,new ua(r,n)),mr(e)}else Oa(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&Uh(e,t)||r==2&&qs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Ut(e,5);break;case 4:Ut(e,10);break;case 3:Ut(e,6);break;default:Ut(e,2)}}}function Fa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ut(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Z(e.pb,e);n||(n=new qt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||Bn(n,"https"),cr(n)),kh(n.toString(),r)}else rt(2);e.H=0,e.h&&e.h.za(t),Ua(e),ka(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function Ua(e){if(e.H=0,e.ma=[],e.h){const t=Ra(e.i);(t.length!=0||e.j.length!=0)&&(Mi(e.ma,t),Mi(e.ma,e.j),e.i.i.length=0,As(e.j),e.j.length=0),e.h.ya()}}function Ba(e,t,n){var r=n instanceof qt?vt(n):new qt(n);if(r.g!="")t&&(r.g=t+"."+r.g),qn(r,r.m);else{var s=v.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new qt(null);r&&Bn(i,r),t&&(i.g=t),s&&qn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),gn(e,r),r}function qa(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new x(new mn({ob:!0})):new x(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function $a(){}g=$a.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function jn(){if(ae&&!(10<=Number(Jc)))throw Error("Environmental error: no available transport.")}jn.prototype.g=function(e,t){return new ot(e,t)};function ot(e,t){j.call(this),this.g=new Na(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!$e(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!$e(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new _e(this)}z(ot,j);ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ba(e,null,e.Y),mr(e)};ot.prototype.close=function(){Bs(this.g)};ot.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ds(e),e=n);t.j.push(new Ch(t.fb++,e)),t.H==3&&mr(t)};ot.prototype.N=function(){this.g.h=null,delete this.j,Bs(this.g),delete this.g,ot.$.N.call(this)};function ja(e){Os.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(ja,Os);function za(){xs.call(this),this.status=1}z(za,xs);function _e(e){this.g=e}z(_e,$a);_e.prototype.Ba=function(){W(this.g,"a")};_e.prototype.Aa=function(e){W(this.g,new ja(e))};_e.prototype.za=function(e){W(this.g,new za)};_e.prototype.ya=function(){W(this.g,"b")};function Bh(){this.blockSize=-1}function ct(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(ct,Bh);ct.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Lr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}ct.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Lr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Lr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Lr(this,r),s=0;break}}this.h=s,this.i+=t};ct.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function b(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var qh={};function js(e){return-128<=e&&128>e?Qc(e,function(t){return new b([t|0],0>t?-1:0)}):new b([e|0],0>e?-1:0)}function mt(e){if(isNaN(e)||!isFinite(e))return ee;if(0>e)return H(mt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=is;return new b(t,0)}function Ga(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return H(Ga(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mt(Math.pow(t,8)),r=ee,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=mt(Math.pow(t,i)),r=r.R(i).add(mt(o))):(r=r.R(n),r=r.add(mt(o)))}return r}var is=4294967296,ee=js(0),os=js(1),Gi=js(16777216);g=b.prototype;g.ea=function(){if(at(this))return-H(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:is+r)*t,t*=is}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Et(this))return"0";if(at(this))return"-"+H(this).toString(e);for(var t=mt(Math.pow(e,6)),n=this,r="";;){var s=Gn(n,t).g;n=zn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Et(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Et(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function at(e){return e.h==-1}g.X=function(e){return e=zn(this,e),at(e)?-1:Et(e)?0:1};function H(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new b(n,~e.h).add(os)}g.abs=function(){return at(this)?H(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new b(n,n[n.length-1]&-2147483648?-1:0)};function zn(e,t){return e.add(H(t))}g.R=function(e){if(Et(this)||Et(e))return ee;if(at(this))return at(e)?H(this).R(H(e)):H(H(this).R(e));if(at(e))return H(this.R(H(e)));if(0>this.X(Gi)&&0>e.X(Gi))return mt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,u=e.D(s)&65535;n[2*r+2*s]+=o*u,Sn(n,2*r+2*s),n[2*r+2*s+1]+=i*u,Sn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Sn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Sn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new b(n,0)};function Sn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Se(e,t){this.g=e,this.h=t}function Gn(e,t){if(Et(t))throw Error("division by zero");if(Et(e))return new Se(ee,ee);if(at(e))return t=Gn(H(e),t),new Se(H(t.g),H(t.h));if(at(t))return t=Gn(e,H(t)),new Se(H(t.g),t.h);if(30<e.g.length){if(at(e)||at(t))throw Error("slowDivide_ only works with positive integers.");for(var n=os,r=t;0>=r.X(e);)n=Hi(n),r=Hi(r);var s=Qt(n,1),i=Qt(r,1);for(r=Qt(r,2),n=Qt(n,2);!Et(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Qt(r,1),n=Qt(n,1)}return t=zn(e,s.R(t)),new Se(s,t)}for(s=ee;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=mt(n),o=i.R(t);at(o)||0<o.X(e);)n-=r,i=mt(n),o=i.R(t);Et(i)&&(i=os),s=s.add(i),e=zn(e,o)}return new Se(s,e)}g.gb=function(e){return Gn(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new b(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new b(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new b(n,this.h^e.h)};function Hi(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new b(n,e.h)}function Qt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new b(s,e.h)}jn.prototype.createWebChannel=jn.prototype.g;ot.prototype.send=ot.prototype.u;ot.prototype.open=ot.prototype.m;ot.prototype.close=ot.prototype.close;ar.NO_ERROR=0;ar.TIMEOUT=8;ar.HTTP_ERROR=6;la.COMPLETE="complete";ca.EventType=hn;hn.OPEN="a";hn.CLOSE="b";hn.ERROR="c";hn.MESSAGE="d";j.prototype.listen=j.prototype.O;x.prototype.listenOnce=x.prototype.P;x.prototype.getLastError=x.prototype.Sa;x.prototype.getLastErrorCode=x.prototype.Ia;x.prototype.getStatus=x.prototype.da;x.prototype.getResponseJson=x.prototype.Wa;x.prototype.getResponseText=x.prototype.ja;x.prototype.send=x.prototype.ha;x.prototype.setWithCredentials=x.prototype.Oa;ct.prototype.digest=ct.prototype.l;ct.prototype.reset=ct.prototype.reset;ct.prototype.update=ct.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=mt;b.fromString=Ga;var $h=function(){return new jn},jh=function(){return or()},Fr=ar,zh=la,Gh=Ht,Ki={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hh=mn,Pn=ca,Kh=x,Wh=ct,ne=b;const Wi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ye="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Fo("@firebase/firestore");function Pe(){return jt.logLevel}function y(e,...t){if(jt.logLevel<=V.DEBUG){const n=t.map(zs);jt.debug(`Firestore (${ye}): ${e}`,...n)}}function It(e,...t){if(jt.logLevel<=V.ERROR){const n=t.map(zs);jt.error(`Firestore (${ye}): ${e}`,...n)}}function ue(e,...t){if(jt.logLevel<=V.WARN){const n=t.map(zs);jt.warn(`Firestore (${ye}): ${e}`,...n)}}function zs(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${ye}) INTERNAL ASSERTION FAILED: `+e;throw It(t),new Error(t)}function M(e,t){e||T()}function w(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends pe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Qh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class Yh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Xh{constructor(t){this.t=t,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ct,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ct)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(M(typeof r.accessToken=="string"),new Ha(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new X(t)}}class Jh{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=X.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zh{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Jh(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class td{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ed{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.R=n.token,new td(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=nd(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function D(e,t){return e<t?-1:e>t?1:0}function le(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new q(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new q(0,0))}static max(){return new I(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n,r){n===void 0?n=0:n>t.length&&T(),r===void 0?r=t.length-n:r>t.length-n&&T(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ye.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ye?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class k extends Ye{construct(t,n,r){return new k(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new _(d.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new k(n)}static emptyPath(){return new k([])}}const rd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends Ye{construct(t,n,r){return new K(t,n,r)}static isValidIdentifier(t){return rd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new _(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new _(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new _(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new _(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(n)}static emptyPath(){return new K([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(k.fromString(t))}static fromName(t){return new E(k.fromString(t).popFirst(5))}static empty(){return new E(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return k.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new k(t.slice()))}}function sd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=I.fromTimestamp(r===1e9?new q(n+1,0):new q(n,r));return new bt(s,E.empty(),t)}function id(e){return new bt(e.readTime,e.key,-1)}class bt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new bt(I.min(),E.empty(),-1)}static max(){return new bt(I.max(),E.empty(),-1)}}function od(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ud{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==ad)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):m.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):m.reject(n)}static resolve(t){return new m((n,r)=>{n(t)})}static reject(t){return new m((n,r)=>{r(t)})}static waitFor(t){return new m((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=m.resolve(!1);for(const r of t)n=n.next(s=>s?m.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new m((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const l=u;n(t[l]).next(c=>{o[l]=c,++a,a===i&&r(o)},c=>s(c))}})}static doWhile(t,n){return new m((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function yn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Gs._e=-1;function pr(e){return e==null}function Hn(e){return e===0&&1/e==-1/0}function ld(e){return typeof e=="number"&&Number.isInteger(e)&&!Hn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ee(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Wa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new O(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cn(this.root,t,this.comparator,!0)}}class Cn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??G.RED,this.left=s??G.EMPTY,this.right=i??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new G(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return G.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,n,r,s,i){return this}insert(t,n,r){return new G(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yi(this.data.getIterator())}getIteratorFrom(t){return new Yi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Q)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Q(this.comparator);return n.data=t,n}}class Yi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.fields=t,t.sort(K.comparator)}static empty(){return new lt([])}unionWith(t){let n=new Q(K.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new lt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return le(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qa("Invalid base64 string: "+i):i}}(t);return new et(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new et(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}et.EMPTY_BYTE_STRING=new et("");const cd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(e){if(M(!!e),typeof e=="string"){let t=0;const n=cd.exec(e);if(M(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function zt(e){return typeof e=="string"?et.fromBase64String(e):et.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ks(e){const t=e.mapValue.fields.__previous_value__;return Hs(t)?Ks(t):t}function Xe(e){const t=Nt(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,n,r,s,i,o,a,u,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class Je{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Je("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Je&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Hs(e)?4:dd(e)?9007199254740991:10:T()}function _t(e,t){if(e===t)return!0;const n=Gt(e);if(n!==Gt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Xe(e).isEqual(Xe(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nt(s.timestampValue),a=Nt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return zt(s.bytesValue).isEqual(zt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return U(s.geoPointValue.latitude)===U(i.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return U(s.integerValue)===U(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=U(s.doubleValue),a=U(i.doubleValue);return o===a?Hn(o)===Hn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return le(e.arrayValue.values||[],t.arrayValue.values||[],_t);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Qi(o)!==Qi(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!_t(o[u],a[u])))return!1;return!0}(e,t);default:return T()}}function Ze(e,t){return(e.values||[]).find(n=>_t(n,t))!==void 0}function ce(e,t){if(e===t)return 0;const n=Gt(e),r=Gt(t);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=U(i.integerValue||i.doubleValue),u=U(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return Xi(e.timestampValue,t.timestampValue);case 4:return Xi(Xe(e),Xe(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(i,o){const a=zt(i),u=zt(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const c=D(a[l],u[l]);if(c!==0)return c}return D(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=D(U(i.latitude),U(o.latitude));return a!==0?a:D(U(i.longitude),U(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const c=ce(a[l],u[l]);if(c)return c}return D(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Vn.mapValue&&o===Vn.mapValue)return 0;if(i===Vn.mapValue)return 1;if(o===Vn.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let h=0;h<u.length&&h<c.length;++h){const f=D(u[h],c[h]);if(f!==0)return f;const p=ce(a[u[h]],l[c[h]]);if(p!==0)return p}return D(u.length,c.length)}(e.mapValue,t.mapValue);default:throw T()}}function Xi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=Nt(e),r=Nt(t),s=D(n.seconds,r.seconds);return s!==0?s:D(n.nanos,r.nanos)}function he(e){return as(e)}function as(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Nt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return zt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=as(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${as(n.fields[o])}`;return s+"}"}(e.mapValue):T()}function Ji(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function us(e){return!!e&&"integerValue"in e}function Ws(e){return!!e&&"arrayValue"in e}function Zi(e){return!!e&&"nullValue"in e}function to(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nn(e){return!!e&&"mapValue"in e}function Me(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ee(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Me(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Me(e.arrayValue.values[n]);return t}return Object.assign({},e)}function dd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.value=t}static empty(){return new ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Nn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Me(n)}setAll(t){let n=K.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Me(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Nn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return _t(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Nn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Ee(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ut(Me(this.value))}}function Ya(e){const t=[];return Ee(e.fields,(n,r)=>{const s=new K([n]);if(Nn(r)){const i=Ya(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new lt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new J(t,0,I.min(),I.min(),I.min(),ut.empty(),0)}static newFoundDocument(t,n,r,s){return new J(t,1,n,I.min(),r,s,0)}static newNoDocument(t,n){return new J(t,2,n,I.min(),I.min(),ut.empty(),0)}static newUnknownDocument(t,n){return new J(t,3,n,I.min(),I.min(),ut.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof J&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,n){this.position=t,this.inclusive=n}}function eo(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=ce(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function no(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!_t(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,n="asc"){this.field=t,this.dir=n}}function fd(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{}class B extends Xa{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new pd(t,n,r):n==="array-contains"?new yd(t,r):n==="in"?new Ed(t,r):n==="not-in"?new Td(t,r):n==="array-contains-any"?new vd(t,r):new B(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new gd(t,r):new _d(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ce(n,this.value)):n!==null&&Gt(this.value)===Gt(n)&&this.matchesComparison(ce(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Xa{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new ht(t,n)}matches(t){return Ja(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ja(e){return e.op==="and"}function Za(e){return md(e)&&Ja(e)}function md(e){for(const t of e.filters)if(t instanceof ht)return!1;return!0}function ls(e){if(e instanceof B)return e.field.canonicalString()+e.op.toString()+he(e.value);if(Za(e))return e.filters.map(t=>ls(t)).join(",");{const t=e.filters.map(n=>ls(n)).join(",");return`${e.op}(${t})`}}function tu(e,t){return e instanceof B?function(r,s){return s instanceof B&&r.op===s.op&&r.field.isEqual(s.field)&&_t(r.value,s.value)}(e,t):e instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&tu(o,s.filters[a]),!0):!1}(e,t):void T()}function eu(e){return e instanceof B?function(n){return`${n.field.canonicalString()} ${n.op} ${he(n.value)}`}(e):e instanceof ht?function(n){return n.op.toString()+" {"+n.getFilters().map(eu).join(" ,")+"}"}(e):"Filter"}class pd extends B{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class gd extends B{constructor(t,n){super(t,"in",n),this.keys=nu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class _d extends B{constructor(t,n){super(t,"not-in",n),this.keys=nu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function nu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class yd extends B{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ws(n)&&Ze(n.arrayValue,this.value)}}class Ed extends B{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ze(this.value.arrayValue,n)}}class Td extends B{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ze(this.value.arrayValue,n)}}class vd extends B{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ws(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ze(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function ro(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Id(e,t,n,r,s,i,o)}function Qs(e){const t=w(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ls(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>he(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>he(r)).join(",")),t.ce=n}return t.ce}function Ys(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!fd(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!tu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!no(e.startAt,t.startAt)&&no(e.endAt,t.endAt)}function cs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Ad(e,t,n,r,s,i,o,a){return new Te(e,t,n,r,s,i,o,a)}function ru(e){return new Te(e)}function so(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function su(e){return e.collectionGroup!==null}function Oe(e){const t=w(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Q(K.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new tn(i,r))}),n.has(K.keyField().canonicalString())||t.le.push(new tn(K.keyField(),r))}return t.le}function pt(e){const t=w(e);return t.he||(t.he=wd(t,Oe(e))),t.he}function wd(e,t){if(e.limitType==="F")return ro(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new tn(s.field,i)});const n=e.endAt?new Kn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Kn(e.startAt.position,e.startAt.inclusive):null;return ro(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function hs(e,t){const n=e.filters.concat([t]);return new Te(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Wn(e,t,n){return new Te(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function gr(e,t){return Ys(pt(e),pt(t))&&e.limitType===t.limitType}function iu(e){return`${Qs(pt(e))}|lt:${e.limitType}`}function Yt(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>eu(s)).join(", ")}]`),pr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>he(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>he(s)).join(",")),`Target(${r})`}(pt(e))}; limitType=${e.limitType})`}function _r(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):E.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Oe(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const l=eo(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,Oe(r),s)||r.endAt&&!function(o,a,u){const l=eo(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,Oe(r),s))}(e,t)}function Rd(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ou(e){return(t,n)=>{let r=!1;for(const s of Oe(e)){const i=Sd(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Sd(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,o,a){const u=o.data.field(i),l=a.data.field(i);return u!==null&&l!==null?ce(u,l):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Wa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new O(E.comparator);function At(){return Pd}const au=new O(E.comparator);function De(...e){let t=au;for(const n of e)t=t.insert(n.key,n);return t}function uu(e){let t=au;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Bt(){return xe()}function lu(){return xe()}function xe(){return new ve(e=>e.toString(),(e,t)=>e.isEqual(t))}const Cd=new O(E.comparator),Vd=new Q(E.comparator);function S(...e){let t=Vd;for(const n of e)t=t.add(n);return t}const Dd=new Q(D);function bd(){return Dd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hn(t)?"-0":t}}function hu(e){return{integerValue:""+e}}function Nd(e,t){return ld(t)?hu(t):cu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this._=void 0}}function kd(e,t,n){return e instanceof Qn?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hs(i)&&(i=Ks(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof en?fu(e,t):e instanceof nn?mu(e,t):function(s,i){const o=du(s,i),a=io(o)+io(s.Ie);return us(o)&&us(s.Ie)?hu(a):cu(s.serializer,a)}(e,t)}function Md(e,t,n){return e instanceof en?fu(e,t):e instanceof nn?mu(e,t):n}function du(e,t){return e instanceof Yn?function(r){return us(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Qn extends yr{}class en extends yr{constructor(t){super(),this.elements=t}}function fu(e,t){const n=pu(t);for(const r of e.elements)n.some(s=>_t(s,r))||n.push(r);return{arrayValue:{values:n}}}class nn extends yr{constructor(t){super(),this.elements=t}}function mu(e,t){let n=pu(t);for(const r of e.elements)n=n.filter(s=>!_t(s,r));return{arrayValue:{values:n}}}class Yn extends yr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function io(e){return U(e.integerValue||e.doubleValue)}function pu(e){return Ws(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Od(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof en&&s instanceof en||r instanceof nn&&s instanceof nn?le(r.elements,s.elements,_t):r instanceof Yn&&s instanceof Yn?_t(r.Ie,s.Ie):r instanceof Qn&&s instanceof Qn}(e.transform,t.transform)}class xd{constructor(t,n){this.version=t,this.transformResults=n}}class Tt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Tt}static exists(t){return new Tt(void 0,t)}static updateTime(t){return new Tt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Er{}function gu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new yu(e.key,Tt.none()):new En(e.key,e.data,Tt.none());{const n=e.data,r=ut.empty();let s=new Q(K.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Kt(e.key,r,new lt(s.toArray()),Tt.none())}}function Ld(e,t,n){e instanceof En?function(s,i,o){const a=s.value.clone(),u=ao(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Kt?function(s,i,o){if(!kn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=ao(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(_u(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Le(e,t,n,r){return e instanceof En?function(i,o,a,u){if(!kn(i.precondition,o))return a;const l=i.value.clone(),c=uo(i.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Kt?function(i,o,a,u){if(!kn(i.precondition,o))return a;const l=uo(i.fieldTransforms,u,o),c=o.data;return c.setAll(_u(i)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return kn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Fd(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=du(r.transform,s||null);i!=null&&(n===null&&(n=ut.empty()),n.set(r.field,i))}return n||null}function oo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&le(r,s,(i,o)=>Od(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class En extends Er{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kt extends Er{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _u(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ao(e,t,n){const r=new Map;M(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Md(o,a,n[s]))}return r}function uo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kd(i,o,t))}return r}class yu extends Er{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ud extends Er{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Ld(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Le(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Le(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=lu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=gu(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),S())}isEqual(t){return this.batchId===t.batchId&&le(this.mutations,t.mutations,(n,r)=>oo(n,r))&&le(this.baseMutations,t.baseMutations,(n,r)=>oo(n,r))}}class Xs{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){M(t.mutations.length===r.length);let s=function(){return Cd}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xs(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C;function jd(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Eu(e){if(e===void 0)return It("GRPC error has no .code"),d.UNKNOWN;switch(e){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new ne([4294967295,4294967295],0);function lo(e){const t=zd().encode(e),n=new Wh;return n.update(t),new Uint8Array(n.digest())}function co(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ne([n,r],0),new ne([s,i],0)]}class Js{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new be(`Invalid padding: ${n}`);if(r<0)throw new be(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new be(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new be(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=ne.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(ne.fromNumber(r)));return s.compare(Gd)===1&&(s=new ne([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=lo(t),[r,s]=co(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Js(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=lo(t),[r,s]=co(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class be extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Tn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Tr(I.min(),s,new O(D),At(),S())}}class Tn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Tn(r,n,S(),S(),S())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class Tu{constructor(t,n){this.targetId=t,this.fe=n}}class vu{constructor(t,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ho{constructor(){this.ge=0,this.pe=mo(),this.ye=et.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=S(),n=S(),r=S();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:T()}}),new Tn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=mo()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Hd{constructor(t){this.Le=t,this.ke=new Map,this.qe=At(),this.Qe=fo(),this.Ke=new O(D)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(cs(i))if(r===0){const o=new E(i.path);this.We(n,o,J.newNoDocument(o,I.min()))}else M(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=zt(r).toUint8Array()}catch(u){if(u instanceof Qa)return ue("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Js(o,s,i)}catch(u){return ue(u instanceof be?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&cs(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,J.newNoDocument(u,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=S();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ye(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Tr(t,n,this.Ke,this.qe,r);return this.qe=At(),this.Qe=fo(),this.Ke=new O(D),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new ho,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Q(D),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new ho),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function fo(){return new O(E.comparator)}function mo(){return new O(E.comparator)}const Kd={asc:"ASCENDING",desc:"DESCENDING"},Wd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qd={and:"AND",or:"OR"};class Yd{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ds(e,t){return e.useProto3Json||pr(t)?t:{value:t}}function Xn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Iu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Xd(e,t){return Xn(e,t.toTimestamp())}function gt(e){return M(!!e),I.fromTimestamp(function(n){const r=Nt(n);return new q(r.seconds,r.nanos)}(e))}function Zs(e,t){return function(r){return new k(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Au(e){const t=k.fromString(e);return M(Pu(t)),t}function fs(e,t){return Zs(e.databaseId,t.path)}function Ur(e,t){const n=Au(t);if(n.get(1)!==e.databaseId.projectId)throw new _(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new _(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(wu(n))}function ms(e,t){return Zs(e.databaseId,t)}function Jd(e){const t=Au(e);return t.length===4?k.emptyPath():wu(t)}function ps(e){return new k(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function wu(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function po(e,t,n){return{name:fs(e,t),fields:n.value.mapValue.fields}}function Zd(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(l,c){return l.useProto3Json?(M(c===void 0||typeof c=="string"),et.fromBase64String(c||"")):(M(c===void 0||c instanceof Uint8Array),et.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const c=l.code===void 0?d.UNKNOWN:Eu(l.code);return new _(c,l.message||"")}(o);n=new vu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ur(e,r.document.name),i=gt(r.document.updateTime),o=r.document.createTime?gt(r.document.createTime):I.min(),a=new ut({mapValue:{fields:r.document.fields}}),u=J.newFoundDocument(s,i,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new Mn(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ur(e,r.document),i=r.readTime?gt(r.readTime):I.min(),o=J.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Mn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ur(e,r.document),i=r.removedTargetIds||[];n=new Mn([],i,s,null)}else{if(!("filter"in t))return T();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new $d(s,i),a=r.targetId;n=new Tu(a,o)}}return n}function tf(e,t){let n;if(t instanceof En)n={update:po(e,t.key,t.value)};else if(t instanceof yu)n={delete:fs(e,t.key)};else if(t instanceof Kt)n={update:po(e,t.key,t.data),updateMask:cf(t.fieldMask)};else{if(!(t instanceof Ud))return T();n={verify:fs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Qn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof en)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof nn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw T()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Xd(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:T()}(e,t.precondition)),n}function ef(e,t){return e&&e.length>0?(M(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?gt(s.updateTime):gt(i);return o.isEqual(I.min())&&(o=gt(i)),new xd(o,s.transformResults||[])}(n,t))):[]}function nf(e,t){return{documents:[ms(e,t.path)]}}function rf(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=ms(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ms(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length!==0)return Su(ht.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(l=>function(h){return{field:Xt(h.field),direction:af(h.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ds(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function sf(e){let t=Jd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){M(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:t=t.child(c.collectionId)}let i=[];n.where&&(i=function(h){const f=Ru(h);return f instanceof ht&&Za(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(R){return new tn(Jt(R.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,pr(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(h){const f=!!h.before,p=h.values||[];return new Kn(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new Kn(p,f)}(n.endAt)),Ad(t,s,o,i,a,"F",u,l)}function of(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ru(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jt(n.unaryFilter.field);return B.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(n.unaryFilter.field);return B.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jt(n.unaryFilter.field);return B.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jt(n.unaryFilter.field);return B.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(n){return B.create(Jt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ht.create(n.compositeFilter.filters.map(r=>Ru(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return T()}}(n.compositeFilter.op))}(e):T()}function af(e){return Kd[e]}function uf(e){return Wd[e]}function lf(e){return Qd[e]}function Xt(e){return{fieldPath:e.canonicalString()}}function Jt(e){return K.fromServerFormat(e.fieldPath)}function Su(e){return e instanceof B?function(n){if(n.op==="=="){if(to(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NAN"}};if(Zi(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(to(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NAN"}};if(Zi(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(n.field),op:uf(n.op),value:n.value}}}(e):e instanceof ht?function(n){const r=n.getFilters().map(s=>Su(s));return r.length===1?r[0]:{compositeFilter:{op:lf(n.op),filters:r}}}(e):T()}function cf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Pu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,n,r,s,i=I.min(),o=I.min(),a=et.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Rt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.ut=t}}function df(e){const t=sf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Wn(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.on=new mf}addToCollectionParentIndex(t,n){return this.on.add(n),m.resolve()}getCollectionParents(t,n){return m.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return m.resolve()}deleteFieldIndex(t,n){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,n){return m.resolve()}getDocumentsMatchingTarget(t,n){return m.resolve(null)}getIndexType(t,n){return m.resolve(0)}getFieldIndexes(t,n){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,n){return m.resolve(bt.min())}getMinOffsetFromCollectionGroup(t,n){return m.resolve(bt.min())}updateCollectionGroup(t,n,r){return m.resolve()}updateIndexEntries(t,n){return m.resolve()}}class mf{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Q(k.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Q(k.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new de(0)}static Nn(){return new de(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.changes=new ve(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,J.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Le(r.mutation,s,lt.empty(),q.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,S()).next(()=>r))}getLocalViewOfDocuments(t,n,r=S()){const s=Bt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=De();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Bt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,S()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=At();const o=xe(),a=function(){return xe()}();return n.forEach((u,l)=>{const c=r.get(l.key);s.has(l.key)&&(c===void 0||c.mutation instanceof Kt)?i=i.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),Le(c.mutation,l,c.mutation.getFieldMask(),q.now())):o.set(l.key,lt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new gf(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=xe();let s=new O((o,a)=>o-a),i=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||lt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(s.get(a.batchId)||S()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=lu();c.forEach(f=>{if(!i.has(f)){const p=gu(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):su(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):m.resolve(Bt());let a=-1,u=i;return o.next(l=>m.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(c)?m.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{u=u.insert(c,f)}))).next(()=>this.populateOverlays(t,l,i)).next(()=>this.computeViews(t,u,l,S())).next(c=>({batchId:a,changes:uu(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let s=De();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=De();return this.indexManager.getCollectionParents(t,i).next(a=>m.forEach(a,u=>{const l=function(h,f){return new Te(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r,s).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((u,l)=>{const c=l.getKey();o.get(c)===null&&(o=o.insert(c,J.newInvalidDocument(c)))});let a=De();return o.forEach((u,l)=>{const c=i.get(u);c!==void 0&&Le(c.mutation,l,lt.empty(),q.now()),_r(n,l)&&(a=a.insert(u,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return m.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gt(s.createTime)}}(n)),m.resolve()}getNamedQuery(t,n){return m.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(s){return{name:s.name,query:df(s.bundledQuery),readTime:gt(s.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.overlays=new O(E.comparator),this.lr=new Map}getOverlay(t,n){return m.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Bt();return m.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.lt(t,n,i)}),m.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(t,n,r){const s=Bt(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return m.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new O((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=i.get(l.largestBatchId);c===null&&(c=Bt(),i=i.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Bt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=s)););return m.resolve(a)}lt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qd(n,r));let i=this.lr.get(n);i===void 0&&(i=S(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.hr=new Q($.Pr),this.Ir=new Q($.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new $(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new $(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new E(new k([])),r=new $(n,t),s=new $(n,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new E(new k([])),r=new $(n,t),s=new $(n,t+1);let i=S();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new $(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ${constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return E.comparator(t.key,n.key)||D(t.gr,n.gr)}static Tr(t,n){return D(t.gr,n.gr)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Q($.Pr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bd(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new $(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,n){return m.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new $(n,0),s=new $(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Q(D);return n.forEach(s=>{const i=new $(s,0),o=new $(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new $(new E(i),0);let a=new Q(D);return this.yr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(u.gr)),!0)},o),m.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){M(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(n.mutations,s=>{const i=new $(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new $(n,0),s=this.yr.firstAfterOrEqual(r);return m.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t){this.Cr=t,this.docs=function(){return new O(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return m.resolve(r?r.document.mutableCopy():J.newInvalidDocument(n))}getEntries(t,n){let r=At();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():J.newInvalidDocument(s))}),m.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=At();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||od(id(c),r)<=0||(s.has(c.key)||_r(n,c))&&(i=i.insert(c.key,c.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(t,n,r,s){T()}vr(t,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new If(this)}getSize(t){return m.resolve(this.size)}}class If extends pf{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),m.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){this.persistence=t,this.Fr=new ve(n=>Qs(n),Ys),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ti,this.targetCount=0,this.Nr=de.On()}forEachTarget(t,n){return this.Fr.forEach((r,s)=>n(s)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),m.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new de(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,m.resolve()}updateTargetData(t,n){return this.kn(n),m.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return m.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),m.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),m.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return m.resolve(r)}containsKey(t,n){return m.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,n){this.Br={},this.overlays={},this.Lr=new Gs(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Af(this),this.indexManager=new ff,this.remoteDocumentCache=function(s){return new vf(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new hf(n),this.Kr=new yf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Ef,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Tf(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){y("MemoryPersistence","Starting transaction:",t);const s=new Rf(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,n){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Rf extends ud{constructor(t){super(),this.currentSequenceNumber=t}}class ei{constructor(t){this.persistence=t,this.Gr=new ti,this.zr=null}static jr(t){return new ei(t)}get Hr(){if(this.zr)return this.zr;throw T()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),m.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),m.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const s=E.fromPath(r);return this.Jr(t,s).next(i=>{i||n.removeEntry(s,I.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return m.or([()=>m.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=s}static Qi(t,n){let r=S(),s=S();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ni(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.zi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Sf;return this.Hi(t,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>i.result)}Ji(t,n,r,s){return r.documentReadCount<this.Ui?(Pe()<=V.DEBUG&&y("QueryEngine","SDK will not create cache indexes for query:",Yt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(Pe()<=V.DEBUG&&y("QueryEngine","Query:",Yt(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Pe()<=V.DEBUG&&y("QueryEngine","The SDK decides to create cache indexes for query:",Yt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pt(n))):m.resolve())}zi(t,n){if(so(n))return m.resolve(null);let r=pt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Wn(n,null,"F"),r=pt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=S(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const l=this.Yi(n,a);return this.Zi(n,l,o,u.readTime)?this.zi(t,Wn(n,null,"F")):this.Xi(t,l,n,u)}))})))}ji(t,n,r,s){return so(n)||s.isEqual(I.min())?m.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?m.resolve(null):(Pe()<=V.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yt(n)),this.Xi(t,o,n,sd(s,-1)).next(a=>a))})}Yi(t,n){let r=new Q(ou(t));return n.forEach((s,i)=>{_r(t,i)&&(r=r.add(i))}),r}Zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,n,r){return Pe()<=V.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Yt(n)),this.Gi.getDocumentsMatchingQuery(t,n,bt.min(),r)}Xi(t,n,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,n,r,s){this.persistence=t,this.es=n,this.serializer=s,this.ts=new O(D),this.ns=new ve(i=>Qs(i),Ys),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _f(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function Vf(e,t,n,r){return new Cf(e,t,n,r)}async function Cu(e,t){const n=w(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=S();for(const l of s){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of i){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function Df(e,t){const n=w(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){const h=l.batch,f=h.keys();let p=m.resolve();return f.forEach(R=>{p=p.next(()=>c.getEntry(u,R)).next(P=>{const A=l.docVersions.get(R);M(A!==null),P.version.compareTo(A)<0&&(h.applyToRemoteDocument(P,l),P.isValidDocument()&&(P.setReadTime(l.commitVersion),c.addEntry(P)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=S();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Vu(e){const t=w(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function bf(e,t){const n=w(e),r=t.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];t.targetChanges.forEach((c,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,c.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(et.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),s=s.insert(h,p),function(P,A,L){return P.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(f,p,c)&&a.push(n.qr.updateTargetData(i,p))});let u=At(),l=S();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(Nf(i,o,t.documentUpdates).next(c=>{u=c.us,l=c.cs})),!r.isEqual(I.min())){const c=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,l)).next(()=>u)}).then(i=>(n.ts=s,i))}function Nf(e,t,n){let r=S(),s=S();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=At();return n.forEach((a,u)=>{const l=i.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{us:o,cs:s}})}function kf(e,t){const n=w(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Mf(e,t){const n=w(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,t).next(i=>i?(s=i,m.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Rt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function gs(e,t,n){const r=w(e),s=r.ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!yn(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function go(e,t,n){const r=w(e);let s=I.min(),i=S();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,c){const h=w(u),f=h.ns.get(c);return f!==void 0?m.resolve(h.ts.get(f)):h.qr.getTargetData(l,c)}(r,o,pt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?s:I.min(),n?i:S())).next(a=>(Of(r,Rd(t),a),{documents:a,ls:i})))}function Of(e,t,n){let r=e.rs.get(t)||I.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.rs.set(t,r)}class _o{constructor(){this.activeTargetIds=bd()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xf{constructor(){this.eo=new _o,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new _o,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn=null;function Br(){return Dn===null?Dn=function(){return 268435456+Math.round(2147483648*Math.random())}():Dn++,"0x"+Dn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="WebChannelConnection";class Bf extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Br(),u=this.So(n,r);y("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,u,l,s).then(c=>(y("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ue("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",s),c})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ye}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=Ff[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,s){const i=Br();return new Promise((o,a)=>{const u=new Kh;u.setWithCredentials(!0),u.listenOnce(zh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Fr.NO_ERROR:const c=u.getResponseJson();y(Y,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(c)),o(c);break;case Fr.TIMEOUT:y(Y,`RPC '${t}' ${i} timed out`),a(new _(d.DEADLINE_EXCEEDED,"Request time out"));break;case Fr.HTTP_ERROR:const h=u.getStatus();if(y(Y,`RPC '${t}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const R=function(A){const L=A.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(L)>=0?L:d.UNKNOWN}(p.status);a(new _(R,p.message))}else a(new _(d.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new _(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{y(Y,`RPC '${t}' ${i} completed.`)}});const l=JSON.stringify(s);y(Y,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",l,r,15)})}vo(t,n,r){const s=Br(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=$h(),a=jh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new Hh({})),this.bo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=i.join("");y(Y,`Creating RPC '${t}' stream ${s}: ${c}`,u);const h=o.createWebChannel(c,u);let f=!1,p=!1;const R=new Uf({co:A=>{p?y(Y,`Not sending because RPC '${t}' stream ${s} is closed:`,A):(f||(y(Y,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),y(Y,`RPC '${t}' stream ${s} sending:`,A),h.send(A))},lo:()=>h.close()}),P=(A,L,nt)=>{A.listen(L,st=>{try{nt(st)}catch(yt){setTimeout(()=>{throw yt},0)}})};return P(h,Pn.EventType.OPEN,()=>{p||y(Y,`RPC '${t}' stream ${s} transport opened.`)}),P(h,Pn.EventType.CLOSE,()=>{p||(p=!0,y(Y,`RPC '${t}' stream ${s} transport closed`),R.Ro())}),P(h,Pn.EventType.ERROR,A=>{p||(p=!0,ue(Y,`RPC '${t}' stream ${s} transport errored:`,A),R.Ro(new _(d.UNAVAILABLE,"The operation could not be completed")))}),P(h,Pn.EventType.MESSAGE,A=>{var L;if(!p){const nt=A.data[0];M(!!nt);const st=nt,yt=st.error||((L=st[0])===null||L===void 0?void 0:L.error);if(yt){y(Y,`RPC '${t}' stream ${s} received error:`,yt);const Ae=yt.status;let we=function(dl){const wi=F[dl];if(wi!==void 0)return Eu(wi)}(Ae),Ai=yt.message;we===void 0&&(we=d.INTERNAL,Ai="Unknown error status: "+Ae+" with message "+yt.message),p=!0,R.Ro(new _(we,Ai)),h.close()}else y(Y,`RPC '${t}' stream ${s} received:`,nt),R.Vo(nt)}}),P(a,Gh.STAT_EVENT,A=>{A.stat===Ki.PROXY?y(Y,`RPC '${t}' stream ${s} detected buffering proxy`):A.stat===Ki.NOPROXY&&y(Y,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.Ao()},0),R}}function qr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e){return new Yd(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,n,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,n,r,s,i,o,a,u){this.si=t,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Du(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{t(()=>{const s=new _(d.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qf extends bu{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=Zd(this.serializer,t),r=function(i){if(!("targetChange"in i))return I.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?gt(o.readTime):I.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=ps(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=cs(u)?{documents:nf(i,u)}:{query:rf(i,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Iu(i,o.resumeToken);const l=ds(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=Xn(i,o.snapshotVersion.toTimestamp());const l=ds(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=of(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=ps(this.serializer),n.removeTarget=t,this.e_(n)}}class $f extends bu{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(M(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=ef(t.writeResults,t.commitTime),r=gt(t.commitTime);return this.listener.I_(r,n)}return M(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=ps(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>tf(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(d.UNKNOWN,s.toString())})}Co(t,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(d.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class zf{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(It(n),this.f_=!1):y("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Wt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=w(u);l.C_.add(4),await vn(l),l.M_.set("Unknown"),l.C_.delete(4),await Ir(l)}(this))})}),this.M_=new zf(r,s)}}async function Ir(e){if(Wt(e))for(const t of e.v_)await t(!0)}async function vn(e){for(const t of e.v_)await t(!1)}function Nu(e,t){const n=w(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),ii(n)?si(n):Ie(n).Ho()&&ri(n,t))}function ku(e,t){const n=w(e),r=Ie(n);n.D_.delete(t),r.Ho()&&Mu(n,t),n.D_.size===0&&(r.Ho()?r.Zo():Wt(n)&&n.M_.set("Unknown"))}function ri(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ie(e).u_(t)}function Mu(e,t){e.x_.Oe(t),Ie(e).c_(t)}function si(e){e.x_=new Hd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ie(e).start(),e.M_.g_()}function ii(e){return Wt(e)&&!Ie(e).jo()&&e.D_.size>0}function Wt(e){return w(e).C_.size===0}function Ou(e){e.x_=void 0}async function Hf(e){e.D_.forEach((t,n)=>{ri(e,t)})}async function Kf(e,t){Ou(e),ii(e)?(e.M_.w_(t),si(e)):e.M_.set("Unknown")}async function Wf(e,t,n){if(e.M_.set("Online"),t instanceof vu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(e,t)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Jn(e,r)}else if(t instanceof Mn?e.x_.$e(t):t instanceof Tu?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(I.min()))try{const r=await Vu(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const c=i.D_.get(l);c&&i.D_.set(l,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const c=i.D_.get(u);if(!c)return;i.D_.set(u,c.withResumeToken(et.EMPTY_BYTE_STRING,c.snapshotVersion)),Mu(i,u);const h=new Rt(c.target,u,l,c.sequenceNumber);ri(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await Jn(e,r)}}async function Jn(e,t,n){if(!yn(t))throw t;e.C_.add(1),await vn(e),e.M_.set("Offline"),n||(n=()=>Vu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await Ir(e)})}function xu(e,t){return t().catch(n=>Jn(e,n,t))}async function Ar(e){const t=w(e),n=kt(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;Qf(t);)try{const s=await kf(t.localStore,r);if(s===null){t.b_.length===0&&n.Zo();break}r=s.batchId,Yf(t,s)}catch(s){await Jn(t,s)}Lu(t)&&Fu(t)}function Qf(e){return Wt(e)&&e.b_.length<10}function Yf(e,t){e.b_.push(t);const n=kt(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function Lu(e){return Wt(e)&&!kt(e).jo()&&e.b_.length>0}function Fu(e){kt(e).start()}async function Xf(e){kt(e).E_()}async function Jf(e){const t=kt(e);for(const n of e.b_)t.P_(n.mutations)}async function Zf(e,t,n){const r=e.b_.shift(),s=Xs.from(r,t,n);await xu(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Ar(e)}async function tm(e,t){t&&kt(e).h_&&await async function(r,s){if(function(o){return jd(o)&&o!==d.ABORTED}(s.code)){const i=r.b_.shift();kt(r).Yo(),await xu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ar(r)}}(e,t),Lu(e)&&Fu(e)}async function Eo(e,t){const n=w(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=Wt(n);n.C_.add(3),await vn(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await Ir(n)}async function em(e,t){const n=w(e);t?(n.C_.delete(2),await Ir(n)):t||(n.C_.add(2),await vn(n),n.M_.set("Unknown"))}function Ie(e){return e.O_||(e.O_=function(n,r,s){const i=w(n);return i.A_(),new qf(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:Hf.bind(null,e),Io:Kf.bind(null,e),a_:Wf.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),ii(e)?si(e):e.M_.set("Unknown")):(await e.O_.stop(),Ou(e))})),e.O_}function kt(e){return e.N_||(e.N_=function(n,r,s){const i=w(n);return i.A_(),new $f(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:Xf.bind(null,e),Io:tm.bind(null,e),T_:Jf.bind(null,e),I_:Zf.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Ar(e)):(await e.N_.stop(),e.b_.length>0&&(y("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new oi(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ai(e,t){if(It("AsyncQueue",`${t}: ${e}`),yn(e))return new _(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=De(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof re)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new re;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.B_=new O(E.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):T():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class fe{constructor(t,n,r,s,i,o,a,u,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new fe(t,n,re.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.k_=void 0,this.listeners=[]}}class rm{constructor(){this.queries=new ve(t=>iu(t),gr),this.onlineState="Unknown",this.q_=new Set}}async function sm(e,t){const n=w(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new nm),s)try{i.k_=await n.onListen(r)}catch(o){const a=ai(o,`Initialization of query '${Yt(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.Q_(n.onlineState),i.k_&&t.K_(i.k_)&&ui(n)}async function im(e,t){const n=w(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function om(e,t){const n=w(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&ui(n)}function am(e,t,n){const r=w(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function ui(e){e.q_.forEach(t=>{t.next()})}class um{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new fe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t){this.key=t}}class Bu{constructor(t){this.key=t}}class lm{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=S(),this.mutatedKeys=S(),this._a=ou(t),this.aa=new re(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new To,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((c,h)=>{const f=s.get(c),p=_r(this.query,h)?h:null,R=!!f&&this.mutatedKeys.has(f.key),P=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let A=!1;f&&p?f.data.isEqual(p.data)?R!==P&&(r.track({type:3,doc:p}),A=!0):this.ha(f,p)||(r.track({type:2,doc:p}),A=!0,(u&&this._a(p,u)>0||l&&this._a(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),A=!0):f&&!p&&(r.track({type:1,doc:f}),A=!0,(u||l)&&(a=!0)),A&&(p?(o=o.add(p),i=P?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const i=t.la.L_();i.sort((l,c)=>function(f,p){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return R(f)-R(p)}(l.type,c.type)||this._a(l.doc,c.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,i.length!==0||u?{snapshot:new fe(this.query,t.aa,s,i,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new To,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=S(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new Bu(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new Uu(r))}),n}da(t){this.ia=t.ls,this.oa=S();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return fe.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class cm{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class hm{constructor(t){this.key=t,this.Ra=!1}}class dm{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ve(a=>iu(a),gr),this.fa=new Map,this.ga=new Set,this.pa=new O(E.comparator),this.ya=new Map,this.wa=new ti,this.Sa={},this.ba=new Map,this.Da=de.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function fm(e,t){const n=Am(e);let r,s;const i=n.ma.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await Mf(n.localStore,pt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await mm(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Nu(n.remoteStore,o)}return s}async function mm(e,t,n,r,s){e.va=(h,f,p)=>async function(P,A,L,nt){let st=A.view.ca(L);st.Zi&&(st=await go(P.localStore,A.query,!1).then(({documents:we})=>A.view.ca(we,st)));const yt=nt&&nt.targetChanges.get(A.targetId),Ae=A.view.applyChanges(st,P.isPrimaryClient,yt);return Io(P,A.targetId,Ae.Ta),Ae.snapshot}(e,h,f,p);const i=await go(e.localStore,t,!0),o=new lm(t,i.ls),a=o.ca(i.documents),u=Tn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),l=o.applyChanges(a,e.isPrimaryClient,u);Io(e,n,l.Ta);const c=new cm(t,n,o);return e.ma.set(t,c),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),l.snapshot}async function pm(e,t){const n=w(e),r=n.ma.get(t),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!gr(i,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ku(n.remoteStore,r.targetId),_s(n,r.targetId)}).catch(_n)):(_s(n,r.targetId),await gs(n.localStore,r.targetId,!0))}async function gm(e,t,n){const r=wm(e);try{const s=await function(o,a){const u=w(o),l=q.now(),c=a.reduce((p,R)=>p.add(R.key),S());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",p=>{let R=At(),P=S();return u.ss.getEntries(p,c).next(A=>{R=A,R.forEach((L,nt)=>{nt.isValidDocument()||(P=P.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(p,R)).next(A=>{h=A;const L=[];for(const nt of a){const st=Fd(nt,h.get(nt.key).overlayedDocument);st!=null&&L.push(new Kt(nt.key,st,Ya(st.value.mapValue),Tt.exists(!0)))}return u.mutationQueue.addMutationBatch(p,l,L,a)}).next(A=>{f=A;const L=A.applyToLocalDocumentSet(h,P);return u.documentOverlayCache.saveOverlays(p,A.batchId,L)})}).then(()=>({batchId:f.batchId,changes:uu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let l=o.Sa[o.currentUser.toKey()];l||(l=new O(D)),l=l.insert(a,u),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await In(r,s.changes),await Ar(r.remoteStore)}catch(s){const i=ai(s,"Failed to persist write");n.reject(i)}}async function qu(e,t){const n=w(e);try{const r=await bf(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(M(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?M(o.Ra):s.removedDocuments.size>0&&(M(o.Ra),o.Ra=!1))}),await In(n,r,t)}catch(r){await _n(r)}}function vo(e,t,n){const r=w(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=w(o);u.onlineState=a;let l=!1;u.queries.forEach((c,h)=>{for(const f of h.listeners)f.Q_(a)&&(l=!0)}),l&&ui(u)}(r.eventManager,t),s.length&&r.Va.a_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function _m(e,t,n){const r=w(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ya.get(t),i=s&&s.key;if(i){let o=new O(E.comparator);o=o.insert(i,J.newNoDocument(i,I.min()));const a=S().add(i),u=new Tr(I.min(),new Map,new O(D),o,a);await qu(r,u),r.pa=r.pa.remove(i),r.ya.delete(t),li(r)}else await gs(r.localStore,t,!1).then(()=>_s(r,t,n)).catch(_n)}async function ym(e,t){const n=w(e),r=t.batch.batchId;try{const s=await Df(n.localStore,t);ju(n,r,null),$u(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await In(n,s)}catch(s){await _n(s)}}async function Em(e,t,n){const r=w(e);try{const s=await function(o,a){const u=w(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(h=>(M(h!==null),c=h.keys(),u.mutationQueue.removeMutationBatch(l,h))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,t);ju(r,t,n),$u(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await In(r,s)}catch(s){await _n(s)}}function $u(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function ju(e,t,n){const r=w(e);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Sa[r.currentUser.toKey()]=s}}function _s(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||zu(e,r)})}function zu(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(ku(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),li(e))}function Io(e,t,n){for(const r of n)r instanceof Uu?(e.wa.addReference(r.key,t),Tm(e,r)):r instanceof Bu?(y("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||zu(e,r.key)):T()}function Tm(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(y("SyncEngine","New document in limbo: "+n),e.ga.add(r),li(e))}function li(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new E(k.fromString(t)),r=e.Da.next();e.ya.set(r,new hm(n)),e.pa=e.pa.insert(n,r),Nu(e.remoteStore,new Rt(pt(ru(n.path)),r,"TargetPurposeLimboResolution",Gs._e))}}async function In(e,t,n){const r=w(e),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const c=ni.Qi(u.targetId,l);i.push(c)}}))}),await Promise.all(o),r.Va.a_(s),await async function(u,l){const c=w(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(l,f=>m.forEach(f.ki,p=>c.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>m.forEach(f.qi,p=>c.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!yn(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=c.ts.get(f),R=p.snapshotVersion,P=p.withLastLimboFreeSnapshotVersion(R);c.ts=c.ts.insert(f,P)}}}(r.localStore,i))}async function vm(e,t){const n=w(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const r=await Cu(n.localStore,t);n.currentUser=t,function(i,o){i.ba.forEach(a=>{a.forEach(u=>{u.reject(new _(d.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await In(n,r._s)}}function Im(e,t){const n=w(e),r=n.ya.get(t);if(r&&r.Ra)return S().add(r.key);{let s=S();const i=n.fa.get(t);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function Am(e){const t=w(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=qu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Im.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_m.bind(null,t),t.Va.a_=om.bind(null,t.eventManager),t.Va.Fa=am.bind(null,t.eventManager),t}function wm(e){const t=w(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ym.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Em.bind(null,t),t}class Ao{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=vr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Vf(this.persistence,new Pf,t.initialUser,this.serializer)}createPersistence(t){return new wf(ei.jr,this.serializer)}createSharedClientState(t){return new xf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vm.bind(null,this.syncEngine),await em(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new rm}()}createDatastore(t){const n=vr(t.databaseInfo.databaseId),r=function(i){return new Bf(i)}(t.databaseInfo);return function(i,o,a,u){return new jf(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Gf(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>vo(this.syncEngine,n,0),function(){return yo.D()?new yo:new Lf}())}createSyncEngine(t,n){return function(s,i,o,a,u,l,c){const h=new dm(s,i,o,a,u,l);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=w(n);y("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await vn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):It("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=X.UNAUTHENTICATED,this.clientId=Ka.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ai(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function $r(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Cu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function wo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Vm(e);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>Eo(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>Eo(t.remoteStore,i)),e._onlineComponents=t}function Cm(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Vm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await $r(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Cm(n))throw n;ue("Error using user provided cache. Falling back to memory cache: "+n),await $r(e,new Ao)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await $r(e,new Ao);return e._offlineComponents}async function Gu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await wo(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await wo(e,new Rm))),e._onlineComponents}function Dm(e){return Gu(e).then(t=>t.syncEngine)}async function bm(e){const t=await Gu(e),n=t.eventManager;return n.onListen=fm.bind(null,t.syncEngine),n.onUnlisten=pm.bind(null,t.syncEngine),n}function Nm(e,t,n={}){const r=new Ct;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,l){const c=new Sm({next:f=>{o.enqueueAndForget(()=>im(i,h)),f.fromCache&&u.source==="server"?l.reject(new _(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new um(a,c,{includeMetadataChanges:!0,J_:!0});return sm(i,h)}(await bm(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e,t,n){if(!n)throw new _(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function km(e,t,n,r){if(t===!0&&r===!0)throw new _(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function So(e){if(!E.isDocumentKey(e))throw new _(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Po(e){if(E.isDocumentKey(e))throw new _(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function rn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wr(e);throw new _(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Mm(e,t){if(t<=0)throw new _(d.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}km("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rr{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Co({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Co(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Qh;switch(r.type){case"firstParty":return new Zh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ro.get(n);r&&(y("ComponentProvider","Removing Datastore"),Ro.delete(n),r.terminate())}(this),Promise.resolve()}}function Om(e,t,n,r={}){var s;const i=(e=rn(e,Rr))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ue("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=X.MOCK_USER;else{a=Sl(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new _(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new X(l)}e._authCredentials=new Yh(new Ha(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new xt(this.firestore,t,this._query)}}class it{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new it(this.firestore,t,this._key)}}class Vt extends xt{constructor(t,n,r){super(t,n,ru(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new it(this.firestore,null,new E(t))}withConverter(t){return new Vt(this.firestore,t,this._path)}}function Wu(e,t,...n){if(e=oe(e),Ku("collection","path",t),e instanceof Rr){const r=k.fromString(t,...n);return Po(r),new Vt(e,null,r)}{if(!(e instanceof it||e instanceof Vt))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(k.fromString(t,...n));return Po(r),new Vt(e.firestore,null,r)}}function xm(e,t,...n){if(e=oe(e),arguments.length===1&&(t=Ka.newId()),Ku("doc","path",t),e instanceof Rr){const r=k.fromString(t,...n);return So(r),new it(e,null,new E(r))}{if(!(e instanceof it||e instanceof Vt))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(k.fromString(t,...n));return So(r),new it(e.firestore,e instanceof Vt?e.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Du(this,"async_queue_retry"),this.iu=()=>{const n=qr();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=qr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=qr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ct;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!yn(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw It("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const s=oi.createAndSchedule(this,t,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&T()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class ci extends Rr{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Lm}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yu(this),this._firestoreClient.terminate()}}function Fm(e,t){const n=typeof e=="object"?e:Dc(),r=typeof e=="string"?e:t||"(default)",s=Sc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wl("firestore");i&&Om(s,...i)}return s}function Qu(e){return e._firestoreClient||Yu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Yu(e){var t,n,r;const s=e._freezeSettings(),i=function(a,u,l,c){return new hd(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Hu(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Pm(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new me(et.fromBase64String(t))}catch(n){throw new _(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new me(et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=/^__.*__$/;class Bm{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Kt(t,this.data,this.fieldMask,n,this.fieldTransforms):new En(t,this.data,n,this.fieldTransforms)}}function Ju(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class fi{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new fi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Au(t),s}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Zn(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(Ju(this.Iu)&&Um.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class qm{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||vr(t)}pu(t,n,r,s=!1){return new fi({Iu:t,methodName:n,gu:r,path:K.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zu(e){const t=e._freezeSettings(),n=vr(e._databaseId);return new qm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function $m(e,t,n,r,s,i={}){const o=e.pu(i.merge||i.mergeFields?2:0,t,n,s);nl("Data must be an object, but it was:",o,r);const a=tl(r,o);let u,l;if(i.merge)u=new lt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const f=zm(t,h,n);if(!o.contains(f))throw new _(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Hm(c,f)||c.push(f)}u=new lt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Bm(new ut(a),u,l)}function jm(e,t,n,r=!1){return mi(n,e.pu(r?4:3,t))}function mi(e,t){if(el(e=oe(e)))return nl("Unsupported field value:",t,e),tl(e,t);if(e instanceof Xu)return function(r,s){if(!Ju(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=mi(a,s.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=q.fromDate(r);return{timestampValue:Xn(s.serializer,i)}}if(r instanceof q){const i=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xn(s.serializer,i)}}if(r instanceof di)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof me)return{bytesValue:Iu(s.serializer,r._byteString)};if(r instanceof it){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zs(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${wr(r)}`)}(e,t)}function tl(e,t){const n={};return Wa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(e,(r,s)=>{const i=mi(s,t.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function el(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof di||e instanceof me||e instanceof it||e instanceof Xu)}function nl(e,t,n){if(!el(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=wr(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function zm(e,t,n){if((t=oe(t))instanceof hi)return t._internalPath;if(typeof t=="string")return rl(e,t);throw Zn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Gm=new RegExp("[~\\*/\\[\\]]");function rl(e,t,n){if(t.search(Gm)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hi(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Zn(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new _(d.INVALID_ARGUMENT,a+e+u)}function Hm(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Km(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(pi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Km extends sl{data(){return super.data()}}function pi(e,t){return typeof t=="string"?rl(e,t):t instanceof hi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new _(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gi{}class _i extends gi{}function Qm(e,t,...n){let r=[];t instanceof gi&&r.push(t),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Ei).length,a=i.filter(u=>u instanceof yi).length;if(o>1||o>0&&a>0)throw new _(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class yi extends _i{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new yi(t,n,r)}_apply(t){const n=this._parse(t);return il(t._query,n),new xt(t.firestore,t.converter,hs(t._query,n))}_parse(t){const n=Zu(t.firestore);return function(i,o,a,u,l,c,h){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new _(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Do(h,c);const p=[];for(const R of h)p.push(Vo(u,i,R));f={arrayValue:{values:p}}}else f=Vo(u,i,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Do(h,c),f=jm(a,o,h,c==="in"||c==="not-in");return B.create(l,c,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Ei extends gi{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ei(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ht.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)il(o,u),o=hs(o,u)}(t._query,n),new xt(t.firestore,t.converter,hs(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ti extends _i{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Ti(t,n)}_apply(t){const n=function(s,i,o){if(s.startAt!==null)throw new _(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new _(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tn(i,o)}(t._query,this._field,this._direction);return new xt(t.firestore,t.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Te(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Ym(e,t="asc"){const n=t,r=pi("orderBy",e);return Ti._create(r,n)}class vi extends _i{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new vi(t,n,r)}_apply(t){return new xt(t.firestore,t.converter,Wn(t._query,this._limit,this._limitType))}}function Xm(e){return Mm("limit",e),vi._create("limit",e,"F")}function Vo(e,t,n){if(typeof(n=oe(n))=="string"){if(n==="")throw new _(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!su(t)&&n.indexOf("/")!==-1)throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(k.fromString(n));if(!E.isDocumentKey(r))throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ji(e,new E(r))}if(n instanceof it)return Ji(e,n._key);throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wr(n)}.`)}function Do(e,t){if(!Array.isArray(e)||e.length===0)throw new _(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function il(e,t){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new _(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Jm{convertValue(t,n="none"){switch(Gt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Ee(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new di(U(t.latitude),U(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ks(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xe(t));default:return null}}convertTimestamp(t){const n=Nt(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=k.fromString(t);M(Pu(r));const s=new Je(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(n)||It(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class tp extends sl{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new On(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(pi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class On extends tp{data(t={}){return super.data(t)}}class ep{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new bn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new On(this._firestore,this._userDataWriter,r.key,r,new bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new _(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new On(s._firestore,s._userDataWriter,a.doc.key,a.doc,new bn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new On(s._firestore,s._userDataWriter,a.doc.key,a.doc,new bn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:np(a.type),doc:u,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function np(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class rp extends Jm{constructor(t){super(),this.firestore=t}convertBytes(t){return new me(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new it(this.firestore,null,n)}}function sp(e){e=rn(e,xt);const t=rn(e.firestore,ci),n=Qu(t),r=new rp(t);return Wm(e._query),Nm(n,e._query).then(s=>new ep(t,r,e,s))}function ip(e,t,n){e=rn(e,it);const r=rn(e.firestore,ci),s=Zm(e.converter,t,n);return op(r,[$m(Zu(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Tt.none())])}function op(e,t){return function(r,s){const i=new Ct;return r.asyncQueue.enqueueAndForget(async()=>gm(await Dm(r),s,i)),i.promise}(Qu(e),t)}(function(t,n=!0){(function(s){ye=s})(Vc),Fn(new Be("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ci(new Xh(r.getProvider("auth-internal")),new ed(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new _(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Je(l.options.projectId,c)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),te(Wi,"4.3.2",t),te(Wi,"4.3.2","esm2017")})();const ap={apiKey:"AIzaSyDMMr4pNlvym9tNaDzMeLGkc_6z3cXQ4RI",authDomain:"shrek-s-maze-59835.firebaseapp.com",projectId:"shrek-s-maze-59835",storageBucket:"shrek-s-maze-59835.appspot.com",messagingSenderId:"830984947424",appId:"1:830984947424:web:b268b898f6b9e8c6503285",measurementId:"G-GQMS0WZT37"},up=qo(ap),ol=Fm(up);function lp(e,t){const n=xm(Wu(ol,"scores"));ip(n,{name:e,time:t}).then(()=>{}).catch(r=>{console.error("Error adding score: ",r)})}function al(){const e=Qm(Wu(ol,"scores"),Ym("time","asc"),Xm(5));sp(e).then(t=>{const n=document.querySelector(".scoreboard-modal__content div");n&&(n.innerHTML="",t.docs.forEach((r,s)=>{const i=r.data(),o=document.createElement("p");o.className="scoreboard-modal__player-score",o.textContent=`${s+1}. ${i.name} - ${i.time}`,n.appendChild(o)}))})}ml();let sn="start",Dt=1,Ne=0,wt=0,on;const Fe=document.querySelector(".maze"),Sr=document.querySelectorAll(".maze__wall"),Ii=document.querySelector(".modal"),bo=document.querySelector(".maze__audioplayer"),Ue=document.querySelector(".maze__start"),ys=document.querySelector(".maze__finish"),Es=document.querySelector(".maze__wall--2"),Ts=document.querySelector(".modal__title"),se=document.querySelector(".modal__button"),ie=document.getElementById("tens"),an=document.getElementById("seconds"),cp=document.querySelector(".info-button"),ul=document.querySelector(".instruction-modal"),hp=document.querySelector(".instruction-modal__close-button"),dp=document.querySelector(".modal__button--scoreboard"),fp=document.querySelector(".scoreboard-modal__close-button"),ll=document.querySelector(".scoreboard-modal");cl(1);al();se.addEventListener("click",()=>{Dt===1?Es.textContent="Click the Dragon to start the game":Es.textContent="",(se.textContent==="Play Again"||se.textContent==="Yeyy, play again")&&(clearInterval(on),wt=0,Ne=0,ie&&(ie.innerHTML="00"),an&&(an.innerHTML="00"),Dt=1),Ii.style.display="none",cl(Dt)});Fe.addEventListener("mouseleave",hl);Sr.forEach(e=>{e.addEventListener("mouseover",hl)});Ue.addEventListener("click",()=>{sn="go",Ue.textContent="GO!",setTimeout(()=>{Ue.textContent="",Es.textContent=""},1e3),clearInterval(on),on=setInterval(gp,10)});ys.addEventListener("mouseover",()=>{sn==="go"&&(sn="finished",bo.src=No[Dt].audioSource,bo.play(),pp(Dt),clearInterval(on),Ii.style.display="block")});dp.addEventListener("click",()=>{ll.style.display="block"});fp.addEventListener("click",()=>{ll.style.display="none"});cp.addEventListener("click",()=>{ul.style.display="block"});hp.addEventListener("click",()=>{ul.style.display="none"});function cl(e){const t=No[e];document.body.style.backgroundImage=t.background,Fe.style.backgroundColor=t.pathColor,Fe.style.gridTemplateColumns=t.gridColsRows,Fe.style.gridTemplateRows=t.gridColsRows,Sr.forEach(n=>{n.style.backgroundColor=t.wallsColor}),Ue.style.gridArea=t.startArea,Ue.style.backgroundImage=t.startIcon,ys.style.gridArea=t.finishArea,ys.style.backgroundImage=t.finishIcon,mp(e)}function mp(e){const t=fl[`level${e}`];Sr.forEach(n=>{n.style.display="none"}),Object.keys(t).forEach(n=>{const r=document.querySelector(`.maze__wall--${n}`);r&&(r.style.display="block",r.style.gridArea=t[n])})}function hl(){sn==="go"&&(Sr.forEach(e=>{e.style.backgroundColor="#bf0000"}),setTimeout(()=>{sn="start",Fe.classList.remove("dead"),Dt=1},500),Ii.style.display="block",Ts.textContent="Shrek's Maze",se.textContent="Play Again",Dt=1,clearInterval(on))}function pp(e){if(e<3)Ts.textContent="Good Job",se.textContent="Next Level",Dt++;else{Ts.textContent="You won",se.textContent="Yeyy, play again";let t=prompt("Congratulations! Enter your name (max 13 characters):");if(t){t=t.substring(0,13);const n=`${an.innerHTML}:${ie.innerHTML}`;lp(t,n),al()}}}function gp(){wt++,wt<=9&&(ie.innerHTML="0"+wt.toString()),wt>9&&(ie.innerHTML=wt.toString()),wt>99&&(Ne++,an.innerHTML="0"+Ne.toString(),wt=0,ie.innerHTML="00"),Ne>9&&(an.innerHTML=Ne.toString())}
