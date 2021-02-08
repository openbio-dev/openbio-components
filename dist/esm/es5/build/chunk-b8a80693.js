import{a as constants}from"./chunk-e4627dab.js";import{a as getAppConfig}from"./chunk-ca6b607d.js";var config,url;function getFlowOptions(){return fetch(url+"/device/flow-options").then(function(e){return e.json()})}function getAnomalies(e,t){return fetch(url+"/db/api/settings/anomalies/"+e+"?detached="+t).then(function(e){return e.json()})}function saveFingers(e){return fetch(url+"/db/api/biometries/fingers",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}function getModalSettings(){return fetch(url+"/db/api/settings/"+constants.settingTypes.MODAL_SETTINGS,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}function getPeople(e,t){return fetch(url+"/db/api/people-details/"+e+"/"+t,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}function fingerAuthenticate(e){return fetch(url+"/db/api/biometries/finger/authenticate",{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}getAppConfig().then(function(e){url=(config=e).serviceServerType+"://"+config.urls.apiService+":"+config.ports.apiService});export{getModalSettings as a,fingerAuthenticate as b,getPeople as c,getAnomalies as d,getFlowOptions as e,saveFingers as f};