"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_b9a2c549_js_1 = require("./chunk-b9a2c549.js");
var dist = chunk_b9a2c549_js_1.b(function (r, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.changeDpiBlob = function (r, e) { var n = r.slice(0, 33); return new Promise(function (t, a) { var i = new FileReader; i.onload = function () { var n = new Uint8Array(i.result), a = r.slice(33), o = A(n, e, r.type); t(new Blob([o, a], { type: r.type })); }, i.readAsArrayBuffer(n); }); }, e.changeDpiDataUrl = function (r, e) { var n, s, c = r.split(","), u = c[0], d = c[1], l = void 0, v = void 0, h = !1; if (-1 !== u.indexOf(t)) {
    l = t;
    var g = (-1 === (s = (n = d).indexOf(i)) && (s = n.indexOf(o)), -1 === s && (s = n.indexOf(f)), s);
    g >= 0 ? (v = 4 * Math.ceil((g + 28) / 3), h = !0) : v = 44;
} -1 !== u.indexOf(a) && (l = a, v = 24); for (var p = d.substring(0, v), y = d.substring(v), w = atob(p), m = new Uint8Array(w.length), b = 0; b < m.length; b++)
    m[b] = w.charCodeAt(b); var C = A(m, e, l, h); return [u, ",", btoa(String.fromCharCode.apply(String, function (r) { if (Array.isArray(r)) {
        for (var e = 0, n = Array(r.length); e < r.length; e++)
            n[e] = r[e];
        return n;
    } return Array.from(r); }(C))), y].join(""); }; var n = void 0, t = "image/png", a = "image/jpeg", i = "AAlwSFlz", o = "AAAJcEhZ", f = "AAAACXBI", s = "p".charCodeAt(0), c = "H".charCodeAt(0), u = "Y".charCodeAt(0), d = "s".charCodeAt(0); function A(r, e, i, o) { if (i === a)
    return r[13] = 1, r[14] = e >> 8, r[15] = 255 & e, r[16] = e >> 8, r[17] = 255 & e, r; if (i === t) {
    var f = new Uint8Array(13);
    e *= 39.3701, f[0] = s, f[1] = c, f[2] = u, f[3] = d, f[4] = e >>> 24, f[5] = e >>> 16, f[6] = e >>> 8, f[7] = 255 & e, f[8] = f[4], f[9] = f[5], f[10] = f[6], f[11] = f[7], f[12] = 1;
    var A = function (r) { var e = -1; n || (n = function () { for (var r = new Int32Array(256), e = 0; e < 256; e++) {
        for (var n = e, t = 0; t < 8; t++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
        r[e] = n;
    } return r; }()); for (var t = 0; t < r.length; t++)
        e = n[255 & (e ^ r[t])] ^ e >>> 8; return -1 ^ e; }(f), l = new Uint8Array(4);
    if (l[0] = A >>> 24, l[1] = A >>> 16, l[2] = A >>> 8, l[3] = 255 & A, o) {
        var v = function (r) { for (var e = r.length - 1; e >= 4; e--)
            if (9 === r[e - 4] && r[e - 3] === s && r[e - 2] === c && r[e - 1] === u && r[e] === d)
                return e - 3; }(r);
        return r.set(f, v), r.set(l, v + 13), r;
    }
    var h = new Uint8Array(4);
    h[0] = 0, h[1] = 0, h[2] = 0, h[3] = 9;
    var g = new Uint8Array(54);
    return g.set(r, 0), g.set(h, 33), g.set(f, 37), g.set(l, 50), g;
} } }), changeDPI = chunk_b9a2c549_js_1.c(dist), dist_1 = dist.changeDpiBlob, dist_2 = dist.changeDpiDataUrl;
exports.a = changeDPI;
