import{c as e}from"./p-df3525b2.js";function t(e,t,n){return(e||"")+(t?` ${t}`:"")+(n?` ${n}`:"")}async function n(){return new Promise(async t=>{await fetch(e.IPINFO_ADDRESS).then(e=>e.json()).then(e=>{delete e.hostname,delete e.org,delete e.postal,t(JSON.stringify(e))})})}export{t as f,n as g};