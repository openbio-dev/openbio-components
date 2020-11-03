"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var constants = { SERVER_HOST: "localhost:4000", WS_HOST: "localhost:5000", IPINFO_ADDRESS: "http://ipinfo.io/json?token=61ed945b6baf67", anomalyTypes: { SIGNATURE_ANOMALY: 0, FACE_ANOMALY: 1, MODAL_ANOMALY: 2, DOCUMENT_ANOMALY: 3 }, settingTypes: { PERSON_REQUIRED_FIELD: 0, MODAL_SETTINGS: 1, FACE_SETTINGS: 2, SIGNATURE_SETTINGS: 3 }, device: { AKYSCAM: "AKYSCAM", WEBCAM: "WEBCAM", IB: "IB", MSP: "MSP", SECUGEN: "SECUGEN", WACOM: "WACOM", CANON: "CANON" }, processor: { AWPREFACE: "AWPREFACE", IDKIT: "IDKIT", AK_MATCHER: "AK_MATCHER" }, valueTypes: { INTEGER: 0, STRING: 1, BOOLEAN: 2 }, dpiValue: { 1: 300 } };
exports.b = constants;
function format(t, n, e) { return (t || "") + (n ? " " + n : "") + (e ? " " + e : ""); }
exports.a = format;
function getLocalization() { return tslib_1.__awaiter(this, void 0, void 0, function () { var t = this; return tslib_1.__generator(this, function (n) { return [2, new Promise(function (n, e) { return tslib_1.__awaiter(t, void 0, void 0, function () { return tslib_1.__generator(this, function (t) { switch (t.label) {
        case 0: return [4, fetch(constants.IPINFO_ADDRESS).then(function (t) { return t.json(); }).then(function (t) { delete t.hostname, delete t.org, delete t.postal, n(JSON.stringify(t)); })];
        case 1: return t.sent(), [2];
    } }); }); })]; }); }); }
exports.c = getLocalization;