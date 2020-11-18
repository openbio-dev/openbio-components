"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_d31d97be_js_1 = require("./chunk-d31d97be.js");
var url = "http://" + chunk_d31d97be_js_1.a.WS_HOST;
function getAppConfig() { return fetch(url + "/db/api/config", { method: "get", headers: { "Content-Type": "application/json" } }).then(function (t) { return t.json(); }); }
exports.a = getAppConfig;
function showImage(t, e, i, n, a) { var o = t.getContext("2d"); if (e) {
    var h = new Image, r = "data:image/charset=UTF-8;png;base64," + e;
    o.drawVerticalLine = function (t, e, i, n) { this.fillStyle = n, this.fillRect(t, e, 1, i); }, h.onload = function () { !function (t, e) { var h, r, c, d, s = e.width / e.height, g = t.width / t.height; s < g ? (c = (t.width - (r = e.width * ((h = t.height) / e.height))) / 2, d = 0) : s > g ? (c = 0, d = (t.height - (h = e.height * ((r = t.width) / e.width))) / 2) : (h = t.height, r = t.width, c = 0, d = 0); for (var f = o.createImageData(t.width, t.height), l = f.data.length; --l >= 0;)
        f.data[l] = 0; o.putImageData(f, 0, 0), o.drawImage(e, c, d, r, h), n && i && o.drawVerticalLine(.575 * n, c - 60, h, i > 1 ? "green" : "red"), 0 === i && o.drawVerticalLine(0, 0, h, "white"), a && a.eyes.length > 0 && a.eyes.forEach(function (t) { o.strokeStyle = "red", o.beginPath(), o.arc(t.x, t.y, 5, 0, 2 * Math.PI), o.stroke(); }); }(t, h); }, h.src = r;
}
else
    o.clearRect(0, 0, 460, 300); }
exports.c = showImage;
function notify(t, e, i, n) { t.shadowRoot.querySelector("div#notification-container").insertAdjacentHTML("beforeend", '<notification-component notification-type="' + e + '" text="' + i + '"/>'), setTimeout(function () { var e = t.shadowRoot.querySelector("notification-component"); e.parentNode.removeChild(e); }, n || 3e3); }
exports.b = notify;
