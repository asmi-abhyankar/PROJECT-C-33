(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[62],{"+lzj":function(e,t,n){n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return m}));var r=n("fyR6"),a=n("vzKb");const i={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null,elementTimings:[]},o=()=>{i.longTaskDurations=[]},c=Object(r.a)(()=>i.elementTimings),s=()=>c.get(),u=e=>{e&&c.save(),i.elementTimings=[]},d=()=>i;let l=0;const p=()=>l,m=()=>{Object(a.a)({type:"element",buffered:!0},e=>{i.elementTimings=i.elementTimings.concat(e.getEntries().reduce((e,{identifier:t,loadTime:n,renderTime:r})=>e.concat("string"==typeof t&&"number"==typeof n&&"number"==typeof r?[{identifier:t,loadTime:n,renderTime:r}]:[]),[]))}),Object(a.a)({entryTypes:["longtask"]},e=>{e.getEntries().map(e=>i.longTaskDurations.push(e.duration))},()=>o()),Object(a.a)({type:"first-input",buffered:!0},(e,t)=>{const n=e.getEntries()[0];n&&n.startTime&&n.processingStart&&(i.firstInputDelay={startTime:n.startTime,endTime:n.processingStart}),t.disconnect()},()=>{i.firstInputDelay=null}),Object(a.a)({type:"largest-contentful-paint",buffered:!0},e=>{const t=e.getEntries(),n=t.length,r=t[n-1];r&&(l=n,i.largestContentfulPaint=r.renderTime||r.loadTime||null)}),Object(a.a)({type:"layout-shift",buffered:!0},e=>{e.getEntries().forEach(e=>{e.hadRecentInput||(i.cumulativeLayoutShiftScore+=e.value)})})}},"B/lV":function(e,t,n){const r=e=>{const t=e.replace(new RegExp("^"+(window.location.origin||"")),""),n=document&&document.querySelector(`head > script[src='${t}']`);return!!n&&n.hasAttribute("defer")},a=e=>["pinimg","pinterest","pinterdev"].every(t=>!e.includes(t+".com/"));t.a=(e,t)=>{const n=(({name:e,initiatorType:t})=>{switch(t){case"xmlhttprequest":return"xmlhttprequest";case"img":return"image";case"video":return"video";default:{const t=e.split("."),n=(t.length>1&&t.pop()||"").toLowerCase();return["js","mjs"].includes(n)?"script":"css"===n?"css":["mp4","m4v","mov"].includes(n)?"video":["bmp","gif","jpg","jpeg","png","tiff","webp","svg"].includes(n)?"image":"other"}}})(e),{name:i}=e;return{category:n,isDeferred:"script"===n&&r(i),isExternal:a(i),isVisuallyCompleteRequired:"image"===n&&t.includes(i),timing:e}}},EHyI:function(e,t,n){n.d(t,"a",(function(){return o}));var r=()=>{var e;return!(null===(e=window.performance)||void 0===e||!e.timing)},a=n("XtwW"),i=n("gg0E");function o(e){return!("desktop"===e&&!r())&&(!!a.a&&Object(i.a)())}},FylZ:function(e,t,n){function r(){let e="";for(let t=0;t<16;t+=1){e+="0123456789abcdef"[Math.floor(16*Math.random())]}return e}n.d(t,"a",(function(){return r}))},LvPn:function(e,t,n){n.d(t,"a",(function(){return c}));var r=n("FylZ"),a=n("pody"),i=n("nEAA");const o=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function c(e,t){const{category:n,timing:c,isDeferred:s,isExternal:u,isVisuallyCompleteRequired:d}=e;return c.responseEnd&&("image"!==n||d)?{name:o(e),id:Object(r.a)(),parentId:t,startTime:c.startTime,endTime:c.responseEnd,annotationMap:Object(a.a)(c),binaryAnnotationMap:{category:Object(i.d)(n),decodedBodySize:Object(i.b)(c.decodedBodySize||0),initiatorType:Object(i.d)(c.initiatorType),isDeferred:Object(i.a)(s),isExternal:Object(i.a)(u),name:Object(i.d)(c.name),nextHopProtocol:Object(i.d)(c.nextHopProtocol),transferSize:Object(i.b)(c.transferSize||0)}}:null}},ONNR:function(e,t,n){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return C}));var r,a,i,o,c=function(e,t){return{name:e,value:void 0===t?-1:0,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},s=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=!1,d=function(e,t){u||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),u=!0),addEventListener("visibilitychange",(function n(r){"hidden"===document.visibilityState&&(e(r),t&&removeEventListener("visibilitychange",n,!0))}),!0)},l=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},p=new WeakSet,m=function(e,t,n){var r;return function(){t.value>=0&&(n||p.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(r||0),(t.delta||void 0===r)&&(r=t.value,e(t)))}},f=function(e,t){var n,r=c("CLS",0),a=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),n())},i=s("layout-shift",a);i&&(n=m(e,r,t),d((function(){i.takeRecords().map(a),n()})),l((function(){r=c("CLS",0),n=m(e,r,t)})))},b=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},O=function(){d((function(e){var t=e.timeStamp;b=t}),!0)},g=function(){return b<0&&(b=v(),O(),l((function(){setTimeout((function(){b=v(),O()}),0)}))),{get timeStamp(){return b}}},j=function(e,t){var n,r=g(),a=c("FCP"),i=s("paint",(function(e){"first-contentful-paint"===e.name&&(i&&i.disconnect(),e.startTime<r.timeStamp&&(a.value=e.startTime,a.entries.push(e),p.add(a),n()))}));i&&(n=m(e,a,t),l((function(r){a=c("FCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-r.timeStamp,p.add(a),n()}))}))})))},y={passive:!0,capture:!0},h=new Date,w=function(e,t){r||(r=t,a=e,i=new Date,E(removeEventListener),T())},T=function(){if(a>=0&&a<i-h){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+a};o.map((function(t){t(e)})),o=[]}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){w(e,t),a()},r=function(){a()},a=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",r,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",r,y)}(t,e):w(t,e)}},E=function(e){["mousedown","keydown","touchstart","pointerdown"].map((function(t){return e(t,S,y)}))},_=function(e,t){var n,i=g(),u=c("FID"),f=function(e){e.startTime<i.timeStamp&&(u.value=e.processingStart-e.startTime,u.entries.push(e),p.add(u),n())},b=s("first-input",f);n=m(e,u,t),b&&d((function(){b.takeRecords().map(f),b.disconnect()}),!0),b&&l((function(){var i;u=c("FID"),n=m(e,u,t),o=[],a=-1,r=null,E(addEventListener),i=f,o.push(i),T()}))},C=function(e,t){var n,r=g(),a=c("LCP"),i=function(e){var t=e.startTime;t<r.timeStamp&&(a.value=t,a.entries.push(e)),n()},o=s("largest-contentful-paint",i);if(o){n=m(e,a,t);var u=function(){p.has(a)||(o.takeRecords().map(i),o.disconnect(),p.add(a),n())};["keydown","click"].map((function(e){addEventListener(e,u,{once:!0,capture:!0})})),d(u,!0),l((function(r){a=c("LCP"),n=m(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-r.timeStamp,p.add(a),n()}))}))}))}}},Og0o:function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));const r="closeupImage",a=()=>{if(!document.querySelector)return null;const e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}},fZG9:function(e,t,n){n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return g}));var r=n("bNC6"),a=n("HMdf"),i=n("+lzj"),o=n("SyXB"),c=n("nEAA");const s=(e,t)=>(e||[]).reduce((e,n)=>({...e,["experiment."+n]:Object(c.d)(t(n))}),{}),u=(e,t)=>"number"==typeof t?e(t):null,d=e=>e.reduce((e,t)=>e+t,0),l=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),p=e=>{if(!e.length)return{};const t=e.map(({startTime:e,requestStart:t,responseStart:n,responseEnd:r})=>{const a=t||e;return{startTime:e,requestStart:a,responseStart:n||a,responseEnd:r}}),n=d(t.map(e=>e.requestStart-e.startTime)),r=d(t.map(e=>e.responseStart-e.requestStart)),a=d(t.map(e=>e.responseEnd-e.responseStart)),i=n+r+a,o=d(e.map(e=>e.decodedBodySize||0));return{decodedBodySize:Object(c.b)((s=o,Number(Number(s/1024).toFixed(3)))),"duration.all":Object(c.b)(i),"duration.requestStartToResponseStart":Object(c.b)(r),"duration.responseStartToResponseEnd":Object(c.b)(a),"duration.startToRequestStart":Object(c.b)(n)};var s},m=e=>{const t=e.filter(e=>!!e.responseEnd);return{...e.length?{...p(t),"count.completed":Object(c.b)(t.length)}:{},"count.all":Object(c.b)(e.length)}},f=e=>{const t=e.reduce((e,t)=>(e[t.category]=(e[t.category]||[]).concat([t]),e),{}),n={script:t.script,script_deferred:e.filter(e=>e.isDeferred),external:e.filter(e=>e.isExternal),css:t.css,image:t.image,video:t.video,xmlhttprequest:t.xmlhttprequest,visually_complete:e.filter(e=>e.isVisuallyCompleteRequired)};return Object.keys(n).reduce((e,t)=>({...e,...l(`resource.${t}.`,m((n[t]||[]).map(e=>e.timing)))}),{})},b=(e,t)=>{const{devicePixelRatio:n,navigator:a,innerWidth:i,innerHeight:o}=window,{deviceMemory:s,hardwareConcurrency:u,platform:d,userAgent:l}=a,{appType:p,appVersion:m,browserName:f,browserVersion:b,deviceType:v,isAppShell:O,isAuthenticated:g,isBot:j,isSocialBot:y,locale:h,osName:w,stageName:T}=t,S="desktop"===v?p||5:p||6;let E;const{navigationType:_}=e;return E="initial_app_load"===_?1:4,{"app.type":Object(c.c)(S),"app.version":Object(c.d)(m),"browser.name":Object(c.d)(f),"browser.version":Object(c.d)(b),"cpu.speed":Object(c.c)(u),"device.memory":Object(c.c)(s),"device.type":Object(c.c)(0),"device.typeName":Object(c.d)(v),"device.version":Object(c.d)("unknown"),"pwt.cause":Object(c.c)(E),"pwt.result":Object(c.c)(1),"view.type":Object(c.b)(0),"viewport.height":Object(c.b)(o||0),"viewport.width":Object(c.b)(i||0),devicePixelRatio:Object(c.b)(n||0),isAppShell:Object(c.a)(O),isAuthenticated:Object(c.a)(g),isBot:Object(c.a)(j),isSocialBot:Object(c.a)(y),locale:Object(c.d)(h),osName:Object(c.d)(w),platform:Object(c.d)(d||null),profilerVersion:Object(c.d)("3"),pwtActionName:Object(c.c)(Object(r.a)(e)),stageName:Object(c.d)(T),userAgent:Object(c.d)(l)}},v=({annotateExperiments:e,metricId:t,pwtStaticContext:n,binaryAnnotations:r={},performanceResourceTimings:i=[]})=>{let o={};{const{connection:e,hardwareConcurrency:t,deviceMemory:n}=window.navigator;o={"net.effectiveType":Object(c.d)((null==e?void 0:e.effectiveType)||null),"net.rtt":Object(c.b)(u(e=>10*Math.round(e/10),null==e?void 0:e.rtt)),"net.speed":Object(c.b)(Object(a.b)(i,!1)),"cpu.threads":Object(c.c)(t),"memory.size":Object(c.b)(n)}}return{...s(e,n.getExperimentGroup),...b(t,n),...r,...o,stopwatchVersion:Object(c.c)(1)}},O=(e,t,n)=>{var r;const{navigator:s}=window,{connection:l,serviceWorker:p}=s,{surface:m,navigationType:f,isAuthenticated:b}=e,{cumulativeLayoutShiftScore:v,longTaskDurations:O}=Object(i.e)();return{...O.length?{"longTask.count":Object(c.b)(O.length),"longTask.maxDuration":Object(c.b)(Math.max(...O)),"longTask.totalDuration":Object(c.b)(d(O))}:{},cumulativeLayoutShiftScore:Object(c.b)(100*v),"masonry.paginationMarkCount":Object(c.b)(Object(o.e)(o.a,t)),"metricId.isAuthenticated":Object(c.a)(b),"metricId.navigationType":Object(c.d)(f),"metricId.surface":Object(c.d)(m),"net.effectiveType":Object(c.d)((null==l?void 0:l.effectiveType)||null),"net.rtt":Object(c.b)(u(e=>10*Math.round(e/10),null==l?void 0:l.rtt)),"net.speed":Object(c.b)(Object(a.b)(n)),resourceBufferClearedCount:Object(c.c)(Object(o.e)("resourceBufferCleared",t)),scrollDuringLayout:Object(c.a)(Object(o.f)("scrollDuringLayout",t)),serviceWorker:Object(c.a)(p?!!p.controller:null),serviceWorkerState:Object(c.d)((null==p||null===(r=p.controller)||void 0===r?void 0:r.state)||null)}},g=({annotateExperiments:e,binaryAnnotations:t={},entries:n,metricId:r,performanceResources:a,pwtEndTime:i,pwtStaticContext:o})=>({...t,...f(a),...s(e,o.getExperimentGroup),...b(r,o),...O(r,i,n)})},"gz6+":function(e,t,n){n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return s}));var r=n("pody"),a=n("+lzj");const i=e=>({...Object(r.a)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),o=()=>{const{firstInputDelay:e,largestContentfulPaint:t}=Object(a.e)();return{firstInputDelayStart:(null==e?void 0:e.startTime)||0,firstInputDelayEnd:(null==e?void 0:e.endTime)||0,largestContentfulPaint:t||0}},c=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),s=(e,t)=>Object.keys(e).reduce((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n,Object.freeze({}))},mRg4:function(e,t,n){n.d(t,"a",(function(){return g}));let r=null;var a=(e,t)=>(r=r||{results:[],context:t},r.results.push(e),r),i=n("FZ8N"),o=n("LrH5"),c=n("bNC6"),s=n("3/Bf"),u=n("o9su"),d=n("FylZ");const l=(e,t)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return a&&(n[r]={timestamp:t+a}),n},{}),p=({span:e,timeOrigin:t})=>{return{id:e.id,parent_id:e.parentId||null,result:1,name:e.name,timestamp:t+e.startTime,duration:e.endTime-e.startTime,annotations:l(e.annotationMap,t),binary_annotations:(n=e.binaryAnnotationMap,Object.keys(n).reduce((e,t)=>{const r=n[t];if(!r)return e;const{value:a,type:i}=r;return null==a?e:e.concat({name:t,value:a,annotation_type:i})},[]))};var n},m=(e,{startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:a,parentId:i,traceId:o})=>({name:"pwt/"+e,startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:a,parentId:i,id:o}),f=({annotations:e})=>e.reduce((e,{key:t,timestamp:n})=>({...e,["server_"+t]:{timestamp:n}}),{}),b=(e,t)=>({...e,annotations:{...f(t),...e.annotations},binary_annotations:[...t.binary_annotations,...e.binary_annotations]}),v=({traceId:e,actionName:t,result:n,timeOrigin:r,serverDataToJoin:a})=>{let i=p({span:m(t,n),timeOrigin:r}),o=null;return a&&(i=b(i,a),o=((e,t,n)=>{const r=Object(u.a)();return(null==r?void 0:r.responseEnd)?b(p({span:{name:"html",startTime:0,endTime:(null==r?void 0:r.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{},id:e.server_span_id||Object(d.a)(),parentId:t},timeOrigin:n}),e):null})(a,e,r)),{trace_id:e,spans:[i,...o?[o]:[],...n.spans.map(e=>p({span:e,timeOrigin:r}))]}},O=Object(o.a)("reportResult");function g({metricId:e,pwtStaticContext:t,result:n,isAuth:r}){const{ajax:o,serverData:u}=t,d=Object(c.b)(e),l=`${n.type}.${d}`,p=void 0!==r&&{tags:{isAuth:r}}||void 0;if(Object(s.c)(n.reason?l.concat("."+n.reason):l,p),"COMPLETE"!==n.type)return void O("Abort metric "+d,n);const m=null!==(f=window.performance)&&void 0!==f&&f.now?Date.now()-window.performance.now():"unknown";var f,b;if("unknown"===m)return O(`Unable to convert to absolute times for ${d} due to missing time origin`),void Object(s.c)("missingTimeOrigin."+d,p);if(i.c&&(window.PWT_LAB_DATA=a(n,t)),n.spans.length&&(n.spans=n.spans.map(e=>(e.parentId||e.id===n.traceId||"network_resources"===e.name||(e.parentId=n.traceId),e))),!i.c){const r=e.navigationType&&"initial_app_load"===e.navigationType,a=n.traceId,c=v({traceId:a,actionName:d,result:n,timeOrigin:m,serverDataToJoin:r&&u||null});o({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(c),report_context:JSON.stringify((b=t,{debugTrace:i.a,locale:b.locale,stageName:b.stageName,userId:b.isAuthenticated?b.userId:null}))}}),O(`PinTrace ${d} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${a}`,{duration:n.endTime-n.startTime,result:n,pwtStaticContext:t})}}},nEAA:function(e,t,n){n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c}));const r=e=>"number"==typeof e?Math.round(e):e,a=e=>({type:"I16",value:r(e)}),i=e=>({type:"I32",value:r(e)}),o=e=>({type:"STRING",value:e}),c=e=>({type:"BOOL",value:e})},o9su:function(e,t,n){var r=n("XtwW");t.a=()=>{const[e]=r.a?r.a.getEntriesByType("navigation"):[];return e}},pody:function(e,t,n){t.a=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},xfna:function(e,t,n){n.d(t,"a",(function(){return V})),n.d(t,"b",(function(){return H})),n.d(t,"c",(function(){return W}));var r=n("q1tI"),a=n("EHyI");var i=e=>{const{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${(r?"socialBot":n&&"bot")||"nonbot"}.${t}`},o=n("7w6Q"),c=n("LrH5"),s=n("ONNR");const u=Object(c.a)("LayoutShiftDebugger"),d=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&d(e.parentNode)||null;var l=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{let r=[];const a=i(e)+".CLS";let c=0;const l=()=>{var e;c=null!==(e=window.performance)&&void 0!==e&&e.now?window.performance.now():0};window.addEventListener("scroll",l),window.addEventListener("beforeunload",()=>window.removeEventListener("scroll",l)),Object(s.a)(({entries:e})=>{const a=t(),i=n(),o=e.slice(r.length);r=r.concat(o.map(e=>({shift:e,route:a,hadRecentNavigation:i>0&&i+500>e.startTime,hadRecentScroll:c>0&&c+500>e.startTime})))},!0);let p=0;const m=setInterval(()=>{if(r.length===p)return;const e=r.slice(p);p=r.length;let t=Object.freeze({});e.forEach(({shift:{value:e,sources:n},route:r,hadRecentNavigation:a,hadRecentScroll:i})=>{if(!n||!n.length)return;const o=e/n.length;n.forEach(({node:e})=>{const n=e?d(e)||"ROOT":"NODE_REMOVED",c={route:r,boundaryId:n,hadRecentNavigation:a,hadRecentScroll:i},s=JSON.stringify(c);t={...t,[s]:{score:((t[s]||{}).score||0)+o,tags:c}}})}),Object.keys(t).forEach(e=>{const{score:n,tags:r}=t[e];o.a.count(a+".shifts",(e=>Math.round(1e3*e))(n),1,{...r})});const n=e.reduce((e,{shift:{value:t}})=>e+t,0);u("Debug CLS boundaries",n,t,e)},1e3);window.addEventListener("beforeunload",()=>clearInterval(m))};var p=e=>{switch(e){case"/":return"homefeed";case"/pin/:id":return"pin_closeup";case"/pin/:id/visual-search":return"flashlight";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/search/:scope":return"search";case"/topics/:interest":return"topic";default:return null}},m=n("gg0E"),f=n("SyXB"),b=n("FZ8N"),v=n("3/Bf"),O=n("+lzj"),g=n("HMdf"),j=n("o9su");var y=()=>Object(O.c)().reduce((e,{identifier:t,loadTime:n,renderTime:r})=>e[t+"_loadTime"]?e[t+"_dupe_loadTime"]?{...e,[t+"_dupe_loadTime"]:n,[t+"_dupe_renderTime"]:r}:e:{...e,[t+"_loadTime"]:n,[t+"_renderTime"]:r},Object.freeze({})),h=n("pody"),w=n("gz6+"),T=n("Og0o");var S=e=>{switch(e){case"pin_closeup":{const e=Object(T.b)();return(e=>{const t=Object(g.d)();return e.reduce((e,{name:n,match:r})=>t.filter(e=>r(e)).slice(0,2).reduce((e,t,r)=>({...e,...Object(w.a)(`${n}${r?"_dupe1":""}_`,Object(h.a)(t))}),e),Object.freeze({}))})([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}default:return{}}},E=n("B/lV"),_=n("vzKb"),C=n("FylZ"),L=n("mRg4"),I=n("LvPn"),x=n("fZG9");var k=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:r,pwtStaticContext:a})=>{const i=(()=>{let e=[],t=null;if(window.PerformanceObserver){const n=1e3;t=Object(_.a)({entryTypes:["resource"]},t=>{e=e.concat(t.getEntries()),e.length>n&&(e=e.slice(-n))})}return{get:()=>e,disconnect:()=>{t&&t.disconnect()}}})();let o=!0;return Object(v.c)("TIMING."+r,{tags:{isAuth:a.isAuthenticated}}),{stop:c=>{if(!o)return;o=!1,i.disconnect();const s={type:"stopwatch",name:r,navigationType:"initial_app_load"},u=Object(C.a)(),d=Object(j.a)(),l=i.get(),p={type:"COMPLETE",traceId:Object(C.a)(),startTime:0,endTime:c,spans:[{name:"network_resources",id:u,startTime:0,endTime:c,annotationMap:{},binaryAnnotationMap:{},parentId:null},...l.map(e=>Object(I.a)(Object(E.a)(e,[]),u)).filter(Boolean)],annotationMap:{...Object(w.a)("resource_",n?S(n):{}),...Object(w.a)("element_",y()),...Object(w.a)("mark_",t&&t.length?Object(w.d)(Object(f.d)(),t):{}),...Object(w.a)("browser_",d?Object(w.b)(d):{})},binaryAnnotationMap:Object(x.a)({annotateExperiments:e,metricId:s,pwtStaticContext:a,performanceResourceTimings:l})};Object(L.a)({metricId:s,pwtStaticContext:a,result:p,isAuth:a.isAuthenticated})}}};const A=()=>({current:0,entries:[],firstTs:Number.NEGATIVE_INFINITY,id:`v1-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,max:0,prevTs:Number.NEGATIVE_INFINITY});var R=e=>{let t,n=A();const r=()=>{"hidden"===document.visibilityState&&(void 0===t||n.max>t)&&(t=n.max,e({name:"CLS",value:n.max,delta:0,id:n.id,entries:n.entries}))},a=e=>{e.hadRecentInput||((e.startTime-n.firstTs>5e3||e.startTime-n.prevTs>1e3)&&(n.firstTs=e.startTime,n.current=0),n.prevTs=e.startTime,n.current+=e.value,n.max=Math.max(n.max,n.current),n.entries.push(e),r())},i=((e,t)=>{try{if(window.PerformanceObserver.supportedEntryTypes.includes(e)){const n=new window.PerformanceObserver(e=>e.getEntries().map(t));return n.observe({type:e,buffered:!0}),n}}catch(n){}return null})("layout-shift",a);var o;i&&((e=>{const t=t=>{"pagehide"!==t.type&&"hidden"!==document.visibilityState||e()};window.addEventListener("visibilitychange",t,!0),window.addEventListener("pagehide",t,!0)})(()=>{i.takeRecords().map(a),r()}),o=()=>{n=A(),t=void 0},window.addEventListener("pageshow",e=>{e.persisted&&o()},!0))};const N=Object(c.a)("Vitals"),D={pin_closeup:{LCP:"pin_closeup_lcp",FID:"pin_closeup_fid"},board:{LCP:"board_lcp",FID:"board_fid"}},M=({surface:e,isAuthenticated:t})=>{if(t)return[];switch(e){case"pin_closeup":return["mweb_srcset_original_image","mweb_pin_page_ssr_lite"];case"board":return["mweb_unauth_ssr_board_page"];default:return[]}},P=({pwtStaticContext:e,surface:t})=>{const n="pin_closeup"===t||"board"===t?(({pwtStaticContext:e,surface:t})=>{const n=k({annotateExperiments:M({surface:t,isAuthenticated:e.isAuthenticated}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:D[t].LCP,pwtStaticContext:e}),r=k({name:D[t].FID,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"FID"===e&&r.stop(t)}})({pwtStaticContext:e,surface:t}):null,r={},a=(a,c)=>{if(!r[a]){r[a]=!0;const s=i(e);if("LCPCount"===a){const n="enabled"===e.getExperimentGroup("mweb_pin_page_ssr_lite"),r=`${s}.${t}.${n?"mweb_pin_page_ssr_lite.":""}${a}`;o.a.count(r+".sum",c,1),o.a.increment(r+".size",1)}else o.a.timing(`${s}.${t}.${a}`,c,1),n&&n(a,c)}};Object(s.c)(({value:e})=>a("FID",(e=>Number(e.toFixed(2)))(e))),Object(s.d)(({value:e})=>{a("LCPCount",Object(O.d)()),a("LCP",(e=>10*Math.round(e/10))(e))}),Object(s.b)(({value:e})=>a("FCP",e))},B=e=>{const{isAuthenticated:t}=e,n=i(e)+".CLS";let r=null;R(({id:e,value:a})=>{const i=(c=a)<=.1?"good":c<=.25?"adequate":"poor";var c,s;r&&e===r.id?a>r.value&&(r.invalidation||(r={...r,invalidation:"score"},o.a.increment(n+".firstReportScoreWasInvalid",1,{bucket:r.bucket,isAuthenticated:t}),N("First record score was invalid")),"scoreAndBucket"!==!r.invalidation&&i!==r.bucket&&(r={...r,invalidation:"scoreAndBucket"},o.a.increment(n+".firstReportBucketWasInvalid",1,{bucket:r.bucket,isAuthenticated:t}),N("First record bucket was invalid"))):(r={id:e,value:a,bucket:i},o.a.timing(n+".firstRecordScore",(s=a,Math.ceil(100*s)),1),o.a.increment(n+".firstRecord",1,{bucket:i,isAuthenticated:t}),N("CLS report",a))})};var z=n("EC67"),F=n("nKUr");const q=Object(r.createContext)(null),$=Object(r.createContext)(null);function V({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:i,staticContext:o}){const c=Object(r.useRef)(null),s=Object(r.useRef)(null),u=Object(r.useRef)(t),d=Object(r.useRef)(!0),{path:j}=Object(z.k)(),y=Object(r.useRef)(j),h=Object(a.a)(o.deviceType);if(Object(r.useEffect)(()=>{y.current=j},[j]),Object(r.useEffect)(()=>{if(Object(g.f)({size:n||1e3}),Object(O.f)(),Object(v.c)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach(e=>{window.performance[e]||Object(v.c)("not_supported.window.performance."+e)}):Object(v.c)("not_supported.window.performance"),window.PerformanceObserver||Object(v.c)("not_supported.window.PerformanceObserer"),Object(m.a)()||Object(v.c)("not_supported.grid_profiler"),d.current=!1,h&&"Chrome"===o.browserName&&!b.c){B(o),l({staticContext:o,getCurrentRoute:()=>y.current,getLastNavigationTime:()=>s.current||0});const e=p(j);e&&P({pwtStaticContext:o,surface:e})}},[]),u.current!==t){u.current=t,s.current=null!==(w=window.performance)&&void 0!==w&&w.now?window.performance.now():null;const{current:e}=s;if(!d.current){const t=!c.current;Object(v.c)("routeStart",{tags:{action:i}}),Object(g.a)(t),Object(O.a)(t),Object(O.b)(),Object(f.b)();const{customBufferSize:n,defaultBufferSize:r}=Object(g.e)();e&&(Object(v.c)("routeStart.customBufferSize",{count:n}),Object(v.c)("routeStart.defaultBufferSize",{count:r}),c.current={time:e,action:i})}}var w;return Object(F.jsx)(q.Provider,{value:h?o:null,children:Object(F.jsx)($.Provider,{value:c.current,children:e})})}const H=()=>Object(r.useContext)($),W=()=>Object(r.useContext)(q)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/62-5a9da66c29d3a6ef94fe.mjs.map