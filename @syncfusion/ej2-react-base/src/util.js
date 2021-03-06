define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function applyMixins(derivedClass, baseClass) {
        baseClass.forEach(function (baseClass) {
            Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
                derivedClass.prototype[name] = baseClass.prototype[name];
            });
        });
    }
    exports.applyMixins = applyMixins;
});
