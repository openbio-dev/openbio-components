"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notify(o, t, e, n) { o.shadowRoot.querySelector("div#notification-container").insertAdjacentHTML("beforeend", '<notification-component notification-type="' + t + '" text="' + e + '"/>'), setTimeout(function () { var t = o.shadowRoot.querySelector("notification-component"); t.parentNode.removeChild(t); }, n || 3e3); }
exports.a = notify;
