"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("../polyfills/tslib.js");
var openbio_components_core_js_1 = require("../openbio-components.core.js");
var chunk_7ee74381_js_1 = require("./chunk-7ee74381.js");
var GuideImageComponent = function () { function e() { this.isHelpModalActive = !1, this.locale = "pt"; } return e.prototype.listenLocale = function (e) { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (t) { return this.setI18nParameters(e), [2]; }); }); }, e.prototype.componentWillLoad = function () { return tslib_1.__awaiter(this, void 0, void 0, function () { return tslib_1.__generator(this, function (e) { return this.setI18nParameters(this.locale), [2]; }); }); }, e.prototype.setHelpModalStatus = function (e) { this.isHelpModalActive = e; }, e.prototype.setI18nParameters = function (e) { return tslib_1.__awaiter(this, void 0, void 0, function () { var t; return tslib_1.__generator(this, function (n) { switch (n.label) {
    case 0: return chunk_7ee74381_js_1.a.setLocale(e), t = this, [4, chunk_7ee74381_js_1.a.fetchTranslations()];
    case 1: return t.translations = n.sent(), this.componentContainer.forceUpdate(), [2];
exports.HelpComponent = GuideImageComponent;
exports.LoaderComponent = LoaderComponent;