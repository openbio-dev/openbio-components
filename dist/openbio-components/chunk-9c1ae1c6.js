import{a as t}from"./chunk-d31d97be.js";const e=`http://${t.WS_HOST}`;function i(){return fetch(`${e}/db/api/config`,{method:"get",headers:{"Content-Type":"application/json"}}).then(t=>t.json())}function n(t,e,i,n,o){const a=t.getContext("2d");if(!e)return void a.clearRect(0,0,460,300);const h=new Image,c="data:image/charset=UTF-8;png;base64,"+e;a.drawVerticalLine=function(t,e,i,n){this.fillStyle=n,this.fillRect(t,e,1,i)},h.onload=function(){!function(t,e){const h=e.width/e.height,c=t.width/t.height;let r,d,s,g;h<c?(s=(t.width-(d=e.width*((r=t.height)/e.height)))/2,g=0):h>c?(s=0,g=(t.height-(r=e.height*((d=t.width)/e.width)))/2):(r=t.height,d=t.width,s=0,g=0);const f=a.createImageData(t.width,t.height);for(let t=f.data.length;--t>=0;)f.data[t]=0;a.putImageData(f,0,0),a.drawImage(e,s,g,d,r),n&&i&&a.drawVerticalLine(.575*n,s-60,r,i>1?"green":"red"),0===i&&a.drawVerticalLine(0,0,r,"white"),o&&o.eyes.length>0&&o.eyes.forEach(t=>{a.strokeStyle="red",a.beginPath(),a.arc(t.x,t.y,5,0,2*Math.PI),a.stroke()})}(t,h)},h.src=c}function o(t,e,i,n){t.shadowRoot.querySelector("div#notification-container").insertAdjacentHTML("beforeend",`<notification-component notification-type="${e}" text="${i}"/>`),setTimeout(()=>{const e=t.shadowRoot.querySelector("notification-component");e.parentNode.removeChild(e)},n||3e3)}export{i as a,o as b,n as c};