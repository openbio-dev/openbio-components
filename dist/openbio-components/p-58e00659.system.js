var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function c(e){try{u(r["throw"](e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,c)}u((r=r.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(e){return function(t){return u([e,t])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-577844e5.system.js"],function(e){"use strict";var t;return{setters:[function(e){t=e.c}],execute:function(){e({a:a,g:o,s:c});var n="http://"+t.WS_HOST;var r,i;o().then(function(e){r=e;i=r.serviceServerType+"://"+r.urls.apiService+":"+r.ports.apiService});function o(){return fetch(n+"/db/api/config",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}function a(){return fetch(n+"/db/api/camera-presets",{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}function c(e,t,n){return __awaiter(this,void 0,void 0,function(){var r,i;return __generator(this,function(a){switch(a.label){case 0:return[4,o()];case 1:r=a.sent();i=r.serviceServerType+"://"+r.urls.apiService+":"+r.ports.apiService;return[2,fetch(i+"/db/api/service-time",{method:"post",body:JSON.stringify({type:e,time:t,personId:n}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})]}})})}}}});