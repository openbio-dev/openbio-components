"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var openbio_components_core_js_1 = require("../openbio-components.core.js");
require("./chunk-d17f9802.js");
var chunk_d8965f19_js_1 = require("./chunk-d8965f19.js");
var MyComponent = function () { function e() { } return e.prototype.getText = function () { return chunk_d8965f19_js_1.a(this.first, this.middle, this.last); }, e.prototype.render = function () { return openbio_components_core_js_1.h("div", null, "Hello, World! I'm ", this.getText()); }, Object.defineProperty(e, "is", { get: function () { return "my-component"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "properties", { get: function () { return { first: { type: String, attr: "first" }, last: { type: String, attr: "last" }, middle: { type: String, attr: "middle" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "style", { get: function () { return ""; }, enumerable: !0, configurable: !0 }), e; }();
exports.MyComponent = MyComponent;
