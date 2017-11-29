this["ej"] = this["ej"] || {}; this["ej"]["comboBoxModule"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(30);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Ajax", function() { return __WEBPACK_IMPORTED_MODULE_0__ajax__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__(31);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rippleEffect", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRippleEnabled", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableRipple", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return __WEBPACK_IMPORTED_MODULE_3__browser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_renderer__ = __webpack_require__(32);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderer", function() { return __WEBPACK_IMPORTED_MODULE_4__canvas_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component__ = __webpack_require__(33);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_5__component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__child_property__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ChildProperty", function() { return __WEBPACK_IMPORTED_MODULE_6__child_property__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__draggable__ = __webpack_require__(34);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return __WEBPACK_IMPORTED_MODULE_7__draggable__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return __WEBPACK_IMPORTED_MODULE_7__draggable__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__droppable__ = __webpack_require__(35);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Droppable", function() { return __WEBPACK_IMPORTED_MODULE_8__droppable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_handler__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return __WEBPACK_IMPORTED_MODULE_9__event_handler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__internationalization__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "onIntlChange", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rightToLeft", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cldrData", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultCulture", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaultCurrencyCode", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Internationalization", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setCulture", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setCurrencyCode", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "loadCldr", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableRtl", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getNumericObject", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getDefaultDateObject", function() { return __WEBPACK_IMPORTED_MODULE_10__internationalization__["l"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__keyboard__ = __webpack_require__(38);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "KeyboardEvents", function() { return __WEBPACK_IMPORTED_MODULE_11__keyboard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__l10n__ = __webpack_require__(39);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "L10n", function() { return __WEBPACK_IMPORTED_MODULE_12__l10n__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__module_loader__ = __webpack_require__(21);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ModuleLoader", function() { return __WEBPACK_IMPORTED_MODULE_13__module_loader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__notify_property_change__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Complex", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ComplexFactory", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CollectionFactory", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NotifyPropertyChanges", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CreateBuilder", function() { return __WEBPACK_IMPORTED_MODULE_14__notify_property_change__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__svg_renderer__ = __webpack_require__(40);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SvgRenderer", function() { return __WEBPACK_IMPORTED_MODULE_15__svg_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__touch__ = __webpack_require__(43);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SwipeSettings", function() { return __WEBPACK_IMPORTED_MODULE_16__touch__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return __WEBPACK_IMPORTED_MODULE_16__touch__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__template_engine__ = __webpack_require__(41);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return __WEBPACK_IMPORTED_MODULE_17__template_engine__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setTemplateEngine", function() { return __WEBPACK_IMPORTED_MODULE_17__template_engine__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getTemplateEngine", function() { return __WEBPACK_IMPORTED_MODULE_17__template_engine__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__util__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getEnumValue", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getUniqueID", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queryParams", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObjectArray", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compareElementParent", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "print", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatUnit", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addInstance", function() { return __WEBPACK_IMPORTED_MODULE_18__util__["u"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dom__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "append", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getAttributeOrDefault", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setStyleAttribute", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return __WEBPACK_IMPORTED_MODULE_19__dom__["q"]; });






















/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createInstance;
/* harmony export (immutable) */ __webpack_exports__["b"] = setImmediate;
/* harmony export (immutable) */ __webpack_exports__["c"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["d"] = setValue;
/* harmony export (immutable) */ __webpack_exports__["e"] = deleteObject;
/* harmony export (immutable) */ __webpack_exports__["f"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["g"] = getEnumValue;
/* harmony export (immutable) */ __webpack_exports__["h"] = merge;
/* harmony export (immutable) */ __webpack_exports__["i"] = extend;
/* harmony export (immutable) */ __webpack_exports__["j"] = isNullOrUndefined;
/* harmony export (immutable) */ __webpack_exports__["k"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["l"] = getUniqueID;
/* harmony export (immutable) */ __webpack_exports__["m"] = debounce;
/* harmony export (immutable) */ __webpack_exports__["n"] = queryParams;
/* harmony export (immutable) */ __webpack_exports__["o"] = isObjectArray;
/* harmony export (immutable) */ __webpack_exports__["p"] = compareElementParent;
/* harmony export (immutable) */ __webpack_exports__["q"] = throwError;
/* harmony export (immutable) */ __webpack_exports__["r"] = print;
/* harmony export (immutable) */ __webpack_exports__["s"] = formatUnit;
/* harmony export (immutable) */ __webpack_exports__["t"] = getInstance;
/* harmony export (immutable) */ __webpack_exports__["u"] = addInstance;
var instances = 'ej2_instances';
var uid = 0;
function createInstance(classFunction, params) {
    var arrayParam = params;
    arrayParam.unshift(undefined);
    return new (Function.prototype.bind.apply(classFunction, arrayParam));
}
function setImmediate(handler) {
    var unbind;
    var num = new Uint16Array(5);
    var intCrypto = window.msCrypto || window.crypto;
    intCrypto.getRandomValues(num);
    var secret = 'ej2' + combineArray(num);
    var messageHandler = function (event) {
        if (event.source === window && typeof event.data === 'string' && event.data.length <= 32 && event.data === secret) {
            handler();
            unbind();
        }
    };
    window.addEventListener('message', messageHandler, false);
    window.postMessage(secret, '*');
    return unbind = function () {
        window.removeEventListener('message', messageHandler);
    };
}
function getValue(nameSpace, obj) {
    var value = obj;
    var splits = nameSpace.split('.');
    for (var i = 0; i < splits.length && !isUndefined(value); i++) {
        value = value[splits[i]];
    }
    return value;
}
function setValue(nameSpace, value, obj) {
    var keys = nameSpace.split('.');
    var start = obj || {};
    var fromObj = start;
    var i;
    var length = keys.length;
    var key;
    for (i = 0; i < length; i++) {
        key = keys[i];
        if (i + 1 === length) {
            fromObj[key] = value === undefined ? {} : value;
        }
        else if (isNullOrUndefined(fromObj[key])) {
            fromObj[key] = {};
        }
        fromObj = fromObj[key];
    }
    return start;
}
function deleteObject(obj, key) {
    delete obj[key];
}
function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}
function getEnumValue(enumObject, enumValue) {
    return enumObject[enumValue];
}
function merge(source, destination) {
    if (!isNullOrUndefined(destination)) {
        var temrObj = source;
        var tempProp = destination;
        var keys = Object.keys(destination);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            temrObj[key] = tempProp[key];
        }
    }
}
function extend(copied, first, second, deep) {
    var result = copied || {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return "continue";
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            if (deep && isObject(copy)) {
                clone = isObject(src) ? src : {};
                result[key] = extend({}, clone, copy, true);
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
function isUndefined(value) {
    return ('undefined' === typeof value);
}
function getUniqueID(definedName) {
    return definedName + '_' + uid++;
}
function debounce(eventFunction, delay) {
    var out;
    return function () {
        var _this = this;
        var args = arguments;
        var later = function () {
            out = null;
            return eventFunction.apply(_this, args);
        };
        clearTimeout(out);
        out = setTimeout(later, delay);
    };
}
function queryParams(data) {
    var array = [];
    var keys = Object.keys(data);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data[key]));
    }
    return array.join('&');
}
function isObjectArray(value) {
    var parser = Object.prototype.toString;
    if (parser.call(value) === '[object Array]') {
        if (parser.call(value[0]) === '[object Object]') {
            return true;
        }
    }
    return false;
}
function compareElementParent(child, parent) {
    var node = child;
    if (node === parent) {
        return true;
    }
    else if (node === document || !node) {
        return false;
    }
    else {
        return compareElementParent(node.parentNode, parent);
    }
}
function throwError(message) {
    try {
        throw new Error(message);
    }
    catch (e) {
        throw e.message + '\n' + e.stack;
    }
}
function print(element, printWindow) {
    var div = document.createElement('div');
    var links = [].slice.call(document.getElementsByTagName('head')[0].querySelectorAll('link, style'));
    var reference = '';
    if (isNullOrUndefined(printWindow)) {
        printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
    }
    div.appendChild(element.cloneNode(true));
    for (var i = 0, len = links.length; i < len; i++) {
        reference += links[i].outerHTML;
    }
    printWindow.document.write('<!DOCTYPE html> <html><head>' + reference + '</head><body>' + div.innerHTML +
        '<script> (function() { window.ready = true; })(); </script>' + '</body></html>');
    printWindow.document.close();
    printWindow.focus();
    var interval = setInterval(function () {
        if (printWindow.ready) {
            printWindow.print();
            printWindow.close();
            clearInterval(interval);
        }
    }, 500);
    return printWindow;
}
function formatUnit(value) {
    var result = value + '';
    if (result === 'auto' || result.indexOf('%') !== -1 || result.indexOf('px') !== -1) {
        return result;
    }
    return result + 'px';
}
function getInstance(element, component) {
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        for (var _i = 0, _a = elem[instances]; _i < _a.length; _i++) {
            var inst = _a[_i];
            if (inst instanceof component) {
                return inst;
            }
        }
    }
    return null;
}
function addInstance(element, instance) {
    var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
    if (elem[instances]) {
        elem[instances].push(instance);
    }
    else {
        elem[instances] = [instance];
    }
}
function combineArray(num) {
    var ret = '';
    for (var i = 0; i < 5; i++) {
        ret += (i ? ',' : '') + num[i];
    }
    return ret;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observer__ = __webpack_require__(14);



var Base = (function () {
    function Base(options, element) {
        this.isProtectedOnChange = true;
        this.properties = {};
        this.changedProperties = {};
        this.oldProperties = {};
        this.refreshing = false;
        this.finalUpdate = function () { };
        this.childChangedProperties = {};
        this.modelObserver = new __WEBPACK_IMPORTED_MODULE_2__observer__["a" /* Observer */](this);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(element)) {
            if ('string' === typeof (element)) {
                this.element = document.querySelector(element);
            }
            else {
                this.element = element;
            }
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.element)) {
                this.isProtectedOnChange = false;
                this.addInstance();
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(options)) {
            this.setProperties(options, true);
        }
        this.isDestroyed = false;
    }
    Base.prototype.setProperties = function (prop, muteOnChange) {
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = !!muteOnChange;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, prop);
        if (muteOnChange !== true) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this.changedProperties, prop);
            this.dataBind();
        }
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.isProtectedOnChange = prevDetection;
    };
    ;
    Base.callChildDataBind = function (obj, parent) {
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (parent[key] instanceof Array) {
                for (var _a = 0, _b = parent[key]; _a < _b.length; _a++) {
                    var obj_1 = _b[_a];
                    if (obj_1.dataBind !== undefined) {
                        obj_1.dataBind();
                    }
                }
            }
            else {
                parent[key].dataBind();
            }
        }
    };
    Base.prototype.clearChanges = function () {
        this.finalUpdate();
        this.changedProperties = {};
        this.oldProperties = {};
        this.childChangedProperties = {};
    };
    Base.prototype.dataBind = function () {
        Base.callChildDataBind(this.childChangedProperties, this);
        if (Object.getOwnPropertyNames(this.changedProperties).length) {
            var prevDetection = this.isProtectedOnChange;
            var newChanges = this.changedProperties;
            var oldChanges = this.oldProperties;
            this.clearChanges();
            this.isProtectedOnChange = true;
            this.onPropertyChanged(newChanges, oldChanges);
            this.isProtectedOnChange = prevDetection;
        }
    };
    ;
    Base.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        this.finalUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* setImmediate */])(this.dataBind.bind(this));
    };
    ;
    Base.prototype.addEventListener = function (eventName, handler) {
        this.modelObserver.on(eventName, handler);
    };
    Base.prototype.removeEventListener = function (eventName, handler) {
        this.modelObserver.off(eventName, handler);
    };
    Base.prototype.trigger = function (eventName, eventProp) {
        if (this.isDestroyed !== true) {
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            this.modelObserver.notify(eventName, eventProp);
            this.isProtectedOnChange = prevDetection;
        }
    };
    Base.prototype.addInstance = function () {
        var moduleClass = 'e-' + this.getModuleName().toLowerCase();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["b" /* addClass */])([this.element], ['e-control', moduleClass]);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.element.ej2_instances)) {
            this.element.ej2_instances.push(this);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])('ej2_instances', [this], this.element);
        }
    };
    Base.prototype.destroy = function () {
        var _this = this;
        this.element.ej2_instances =
            this.element.ej2_instances.filter(function (i) { return i !== _this; });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["c" /* removeClass */])([this.element], ['e-' + this.getModuleName()]);
        if (this.element.ej2_instances.length === 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["c" /* removeClass */])([this.element], ['e-control']);
        }
        this.clearChanges();
        this.modelObserver.destroy();
        this.isDestroyed = true;
    };
    return Base;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElement;
/* harmony export (immutable) */ __webpack_exports__["b"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["d"] = isVisible;
/* harmony export (immutable) */ __webpack_exports__["e"] = prepend;
/* harmony export (immutable) */ __webpack_exports__["f"] = append;
/* harmony export (immutable) */ __webpack_exports__["g"] = detach;
/* harmony export (immutable) */ __webpack_exports__["h"] = remove;
/* harmony export (immutable) */ __webpack_exports__["i"] = attributes;
/* harmony export (immutable) */ __webpack_exports__["j"] = select;
/* harmony export (immutable) */ __webpack_exports__["k"] = selectAll;
/* harmony export (immutable) */ __webpack_exports__["l"] = closest;
/* harmony export (immutable) */ __webpack_exports__["m"] = siblings;
/* harmony export (immutable) */ __webpack_exports__["n"] = getAttributeOrDefault;
/* harmony export (immutable) */ __webpack_exports__["o"] = setStyleAttribute;
/* harmony export (immutable) */ __webpack_exports__["p"] = classList;
/* harmony export (immutable) */ __webpack_exports__["q"] = matches;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_handler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);


function createElement(tagName, properties) {
    var element = document.createElement(tagName);
    if (typeof (properties) === 'undefined') {
        return element;
    }
    element.innerHTML = (properties.innerHTML ? properties.innerHTML : '');
    if (properties.className !== undefined) {
        element.className = properties.className;
    }
    if (properties.id !== undefined) {
        element.id = properties.id;
    }
    if (properties.styles !== undefined) {
        element.setAttribute('style', properties.styles);
    }
    if (properties.attrs !== undefined) {
        attributes(element, properties.attrs);
    }
    return element;
}
function addClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        for (var _b = 0, classList_1 = classList; _b < classList_1.length; _b++) {
            var className = classList_1[_b];
            if (!ele.classList.contains(className)) {
                ele.classList.add(className);
            }
        }
    }
    return elements;
}
function removeClass(elements, classes) {
    var classList = getClassList(classes);
    for (var _i = 0, _a = elements; _i < _a.length; _i++) {
        var ele = _a[_i];
        if (ele.className !== '') {
            for (var _b = 0, classList_2 = classList; _b < classList_2.length; _b++) {
                var className = classList_2[_b];
                ele.classList.remove(className);
            }
        }
    }
    return elements;
}
function getClassList(classes) {
    var classList = [];
    if (typeof classes === 'string') {
        classList.push(classes);
    }
    else {
        classList = classes;
    }
    return classList;
}
function isVisible(element) {
    var ele = element;
    return (ele.style.visibility === '' && ele.offsetWidth > 0);
}
function prepend(fromElements, toElement) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.insertBefore(docFrag, toElement.firstElementChild);
    return fromElements;
}
function append(fromElements, toElement) {
    var docFrag = document.createDocumentFragment();
    for (var _i = 0, _a = fromElements; _i < _a.length; _i++) {
        var ele = _a[_i];
        docFrag.appendChild(ele);
    }
    toElement.appendChild(docFrag);
    return fromElements;
}
function detach(element) {
    var parentNode = element.parentNode;
    return parentNode.removeChild(element);
}
function remove(element) {
    var parentNode = element.parentNode;
    __WEBPACK_IMPORTED_MODULE_0__event_handler__["a" /* EventHandler */].clearEvents(element);
    parentNode.removeChild(element);
}
function attributes(element, attributes) {
    var keys = Object.keys(attributes);
    var ele = element;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        ele.setAttribute(key, attributes[key]);
    }
    return ele;
}
function select(selector, context) {
    if (context === void 0) { context = document; }
    return context.querySelector(selector);
}
function selectAll(selector, context) {
    if (context === void 0) { context = document; }
    var nodeList = context.querySelectorAll(selector);
    return nodeList;
}
function closest(element, selector) {
    var el = element;
    if (typeof el.closest === 'function') {
        return el.closest(selector);
    }
    while (el && el.nodeType === 1) {
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentNode;
    }
    return null;
}
function siblings(element) {
    var siblings = [];
    var childNodes = Array.prototype.slice.call(element.parentNode.childNodes);
    for (var _i = 0, childNodes_1 = childNodes; _i < childNodes_1.length; _i++) {
        var curNode = childNodes_1[_i];
        if (curNode.nodeType === Node.ELEMENT_NODE && element !== curNode) {
            siblings.push(curNode);
        }
    }
    return siblings;
}
function getAttributeOrDefault(element, property, value) {
    var attrVal = element.getAttribute(property);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["j" /* isNullOrUndefined */])(attrVal)) {
        element.setAttribute(property, value.toString());
        attrVal = value;
    }
    return attrVal;
}
function setStyleAttribute(element, attrs) {
    if (attrs !== undefined) {
        Object.keys(attrs).forEach(function (key) {
            element.style[key] = attrs[key];
        });
    }
}
function classList(element, addClasses, removeClasses) {
    addClass([element], addClasses);
    removeClass([element], removeClasses);
}
function matches(element, selector) {
    var matches = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;
    if (matches) {
        return matches.call(element, selector);
    }
    else {
        return [].indexOf.call(document.querySelectorAll(selector), element) !== -1;
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Property;
/* harmony export (immutable) */ __webpack_exports__["b"] = Complex;
/* harmony export (immutable) */ __webpack_exports__["c"] = ComplexFactory;
/* harmony export (immutable) */ __webpack_exports__["d"] = Collection;
/* harmony export (immutable) */ __webpack_exports__["e"] = CollectionFactory;
/* harmony export (immutable) */ __webpack_exports__["f"] = Event;
/* harmony export (immutable) */ __webpack_exports__["g"] = NotifyPropertyChanges;
/* harmony export (immutable) */ __webpack_exports__["h"] = CreateBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);

function getObject(instance, curKey, defaultValue, type) {
    if (!instance.properties.hasOwnProperty(curKey)) {
        instance.properties[curKey] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(type, [instance, curKey, defaultValue]);
    }
    return instance.properties[curKey];
}
function getObjectArray(instance, curKey, defaultValue, type, isSetter, isFactory) {
    var result = [];
    var len = defaultValue.length;
    for (var i = 0; i < len; i++) {
        var curType = type;
        if (isFactory) {
            curType = type(defaultValue[i]);
        }
        if (isSetter) {
            var inst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(curType, [instance, curKey, {}, true]);
            inst.setProperties(defaultValue[i], true);
            result.push(inst);
        }
        else {
            result.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(curType, [instance, curKey, defaultValue[i], true]));
        }
    }
    return result;
}
function propertyGetter(defaultValue, curKey) {
    return function () {
        if (!this.properties.hasOwnProperty(curKey)) {
            this.properties[curKey] = defaultValue;
        }
        return this.properties[curKey];
    };
}
function propertySetter(defaultValue, curKey) {
    return function (newValue) {
        if (this.properties[curKey] !== newValue) {
            var oldVal = this.properties.hasOwnProperty(curKey) ? this.properties[curKey] : defaultValue;
            this.saveChanges(curKey, newValue, oldVal);
            this.properties[curKey] = newValue;
        }
    };
}
function complexGetter(defaultValue, curKey, type) {
    return function () {
        return getObject(this, curKey, defaultValue, type);
    };
}
function complexSetter(defaultValue, curKey, type) {
    return function (newValue) {
        getObject(this, curKey, defaultValue, type).setProperties(newValue);
    };
}
function complexFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        return getObject(this, curKey, defaultValue, curType);
    };
}
function complexFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var curType = type(newValue);
        getObject(this, curKey, defaultValue, curType).setProperties(newValue);
    };
}
function complexArrayGetter(defaultValue, curKey, type) {
    return function () {
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, type, false);
            this.properties[curKey] = defCollection;
        }
        return this.properties[curKey];
    };
}
function complexArraySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactorySetter(defaultValue, curKey, type) {
    return function (newValue) {
        var oldValueCollection = getObjectArray(this, curKey, defaultValue, type, false, true);
        var newValCollection = getObjectArray(this, curKey, newValue, type, true, true);
        this.saveChanges(curKey, newValCollection, oldValueCollection);
        this.properties[curKey] = newValCollection;
    };
}
function complexArrayFactoryGetter(defaultValue, curKey, type) {
    return function () {
        var curType = type({});
        if (!this.properties.hasOwnProperty(curKey)) {
            var defCollection = getObjectArray(this, curKey, defaultValue, curType, false);
            this.properties[curKey] = defCollection;
        }
        return this.properties[curKey];
    };
}
function Property(defaultValue) {
    return function (target, key) {
        var propertyDescriptor = {
            set: propertySetter(defaultValue, key),
            get: propertyGetter(defaultValue, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'prop', defaultValue);
    };
}
function Complex(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexSetter(defaultValue, key, type),
            get: complexGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', defaultValue, type);
    };
}
function ComplexFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexFactorySetter({}, key, type),
            get: complexFactoryGetter({}, key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'complexProp', {}, type);
    };
}
function Collection(defaultValue, type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArraySetter(defaultValue, key, type),
            get: complexArrayGetter(defaultValue, key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', defaultValue, type);
    };
}
function CollectionFactory(type) {
    return function (target, key) {
        var propertyDescriptor = {
            set: complexArrayFactorySetter([], key, type),
            get: complexArrayFactoryGetter([], key, type),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, propertyDescriptor);
        addPropertyCollection(target, key, 'colProp', {}, type);
    };
}
function Event() {
    return function (target, key) {
        var eventDescriptor = {
            set: function (newValue) {
                var oldValue = this.properties[key];
                if (oldValue !== newValue) {
                    var finalContext = getParentContext(this, key);
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(oldValue) === false) {
                        finalContext.context.removeEventListener(finalContext.prefix, oldValue);
                    }
                    finalContext.context.addEventListener(finalContext.prefix, newValue);
                    this.properties[key] = newValue;
                }
            },
            get: propertyGetter(undefined, key),
            enumerable: true,
            configurable: true
        };
        Object.defineProperty(target, key, eventDescriptor);
        addPropertyCollection(target, key, 'event');
    };
}
function NotifyPropertyChanges(classConstructor) {
}
function addPropertyCollection(target, key, propertyType, defaultValue, type) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(target.propList)) {
        target.propList = {
            props: [],
            complexProps: [],
            colProps: [],
            events: [],
            propNames: [],
            complexPropNames: [],
            colPropNames: [],
            eventNames: []
        };
    }
    target.propList[propertyType + 's'].push({
        propertyName: key,
        defaultValue: defaultValue,
        type: type
    });
    target.propList[propertyType + 'Names'].push(key);
}
function getBuilderProperties(component) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(component.prototype.builderObject)) {
        component.prototype.builderObject = {
            properties: {}, propCollections: [], add: function () {
                this.isPropertyArray = true;
                this.propCollections.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, this.properties, {}));
            }
        };
        var rex = /complex/;
        for (var _i = 0, _a = Object.keys(component.prototype.propList); _i < _a.length; _i++) {
            var key = _a[_i];
            var _loop_1 = function (prop) {
                if (rex.test(key)) {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        var childType = {};
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(childType, getBuilderProperties(prop.type));
                        value(childType);
                        var tempValue;
                        if (!childType.isPropertyArray) {
                            tempValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, childType.properties, {});
                        }
                        else {
                            tempValue = childType.propCollections;
                        }
                        this.properties[prop.propertyName] = tempValue;
                        childType.properties = {};
                        childType.propCollections = [];
                        childType.isPropertyArray = false;
                        return this;
                    };
                }
                else {
                    component.prototype.builderObject[prop.propertyName] = function (value) {
                        this.properties[prop.propertyName] = value;
                        return this;
                    };
                }
            };
            for (var _b = 0, _c = component.prototype.propList[key]; _b < _c.length; _b++) {
                var prop = _c[_b];
                _loop_1(prop);
            }
        }
    }
    return component.prototype.builderObject;
}
function CreateBuilder(component) {
    var builderFunction = function (element) {
        this.element = element;
        return this;
    };
    var instanceFunction = function (element) {
        if (!builderFunction.prototype.hasOwnProperty('create')) {
            builderFunction.prototype = getBuilderProperties(component);
            builderFunction.prototype.create = function () {
                var temp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, {}, this.properties);
                this.properties = {};
                return new component(temp, this.element);
            };
        }
        return new builderFunction(element);
    };
    return instanceFunction;
}
function getParentContext(context, prefix) {
    if (context.hasOwnProperty('parentObj') === false) {
        return { context: context, prefix: prefix };
    }
    else {
        var curText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('propName', context);
        if (curText) {
            prefix = curText + '-' + prefix;
        }
        return getParentContext(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('parentObj', context), prefix);
    }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);

var EventHandler = (function () {
    function EventHandler() {
    }
    EventHandler.addOrGetEventData = function (element) {
        if ('__eventList' in element) {
            return element.__eventList.events;
        }
        else {
            element.__eventList = {};
            return element.__eventList.events = [];
        }
    };
    EventHandler.add = function (element, eventName, listener, bindTo, intDebounce) {
        var eventData = EventHandler.addOrGetEventData(element);
        var debounceListener;
        if (intDebounce) {
            debounceListener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["m" /* debounce */])(listener, intDebounce);
        }
        else {
            debounceListener = listener;
        }
        if (bindTo) {
            debounceListener = debounceListener.bind(bindTo);
        }
        var event = eventName.split(' ');
        for (var i = 0; i < event.length; i++) {
            eventData.push({
                name: event[i],
                listener: listener,
                debounce: debounceListener
            });
            element.addEventListener(event[i], debounceListener);
        }
        return debounceListener;
    };
    EventHandler.remove = function (element, eventName, listener) {
        var eventData = EventHandler.addOrGetEventData(element);
        var event = eventName.split(' ');
        var _loop_1 = function (j) {
            var index = -1;
            var debounceListener;
            if (eventData && eventData.length !== 0) {
                eventData.some(function (x, i) {
                    return x.name === event[j] && x.listener === listener ?
                        (index = i, debounceListener = x.debounce, true) : false;
                });
            }
            if (index !== -1) {
                eventData.splice(index, 1);
            }
            element.removeEventListener(event[j], debounceListener);
        };
        for (var j = 0; j < event.length; j++) {
            _loop_1(j);
        }
    };
    EventHandler.clearEvents = function (element) {
        var eventData;
        var copyData;
        eventData = EventHandler.addOrGetEventData(element);
        copyData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])([], copyData, eventData);
        for (var i = 0; i < copyData.length; i++) {
            element.removeEventListener(copyData[i].name, copyData[i].debounce);
            eventData.shift();
        }
    };
    EventHandler.trigger = function (element, eventName, eventProp) {
        var eventData = EventHandler.addOrGetEventData(element);
        var fn = null;
        for (var _i = 0, eventData_1 = eventData; _i < eventData_1.length; _i++) {
            var event_1 = eventData_1[_i];
            if (event_1.name === eventName) {
                event_1.debounce.call(this, eventProp);
            }
        }
    };
    return EventHandler;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Browser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);

var REGX_MOBILE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
var REGX_IE = /msie|trident/i;
var REGX_IE11 = /Trident\/7\./;
var REGX_IOS = /(ipad|iphone|ipod touch)/i;
var REGX_IOS7 = /(ipad|iphone|ipod touch);.*os 7_\d|(ipad|iphone|ipod touch);.*os 8_\d/i;
var REGX_ANDROID = /android/i;
var REGX_WINDOWS = /trident|windows phone|edge/i;
var REGX_VERSION = /(version)[ \/]([\w.]+)/i;
var REGX_BROWSER = {
    OPERA: /(opera|opr)(?:.*version|)[ \/]([\w.]+)/i,
    EDGE: /(edge)(?:.*version|)[ \/]([\w.]+)/i,
    CHROME: /(chrome|crios)[ \/]([\w.]+)/i,
    PANTHOMEJS: /(phantomjs)[ \/]([\w.]+)/i,
    SAFARI: /(safari)[ \/]([\w.]+)/i,
    WEBKIT: /(webkit)[ \/]([\w.]+)/i,
    MSIE: /(msie|trident) ([\w.]+)/i,
    MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/i
};
window.browserDetails = window.browserDetails || {};
var Browser = (function () {
    function Browser() {
    }
    Browser.extractBrowserDetail = function () {
        var browserInfo = { culture: {} };
        var keys = Object.keys(REGX_BROWSER);
        var clientInfo = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            clientInfo = Browser.userAgent.match(REGX_BROWSER[key]);
            if (clientInfo) {
                browserInfo.name = (clientInfo[1].toLowerCase() === 'opr' ? 'opera' : clientInfo[1].toLowerCase());
                browserInfo.name = (clientInfo[1].toLowerCase() === 'crios' ? 'chrome' : browserInfo.name);
                browserInfo.version = clientInfo[2];
                browserInfo.culture.name = browserInfo.culture.language = navigator.language;
                if (!!Browser.userAgent.match(REGX_IE11)) {
                    browserInfo.name = 'msie';
                    break;
                }
                var version = Browser.userAgent.match(REGX_VERSION);
                if (browserInfo.name === 'safari' && version) {
                    browserInfo.version = version[2];
                }
                break;
            }
        }
        return browserInfo;
    };
    Browser.getEvent = function (event) {
        var events = {
            start: {
                isPointer: 'pointerdown', isTouch: 'touchstart', isDevice: 'mousedown'
            },
            move: {
                isPointer: 'pointermove', isTouch: 'touchmove', isDevice: 'mousemove'
            },
            end: {
                isPointer: 'pointerup', isTouch: 'touchend', isDevice: 'mouseup'
            }
        };
        return (Browser.isPointer ? events[event].isPointer :
            (Browser.isTouch ? events[event].isTouch + (!Browser.isDevice ? ' ' + events[event].isDevice : '')
                : events[event].isDevice));
    };
    Browser.getTouchStartEvent = function () {
        return Browser.getEvent('start');
    };
    Browser.getTouchEndEvent = function () {
        return Browser.getEvent('end');
    };
    Browser.getTouchMoveEvent = function () {
        return Browser.getEvent('move');
    };
    Browser.getValue = function (key, regX) {
        var browserDetails = window.browserDetails;
        if ('undefined' === typeof browserDetails[key]) {
            return browserDetails[key] = regX.test(Browser.userAgent);
        }
        return browserDetails[key];
    };
    Object.defineProperty(Browser, "userAgent", {
        get: function () {
            return Browser.uA;
        },
        set: function (uA) {
            Browser.uA = uA;
            window.browserDetails = {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "info", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.info)) {
                return window.browserDetails.info = Browser.extractBrowserDetail();
            }
            return window.browserDetails.info;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIE", {
        get: function () {
            return Browser.getValue('isIE', REGX_IE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isTouch", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isTouch)) {
                return window.browserDetails.isTouch = ('ontouchstart' in window);
            }
            return window.browserDetails.isTouch;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isPointer", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isPointer)) {
                return window.browserDetails.isPointer = ('pointerEnabled' in window.navigator);
            }
            return window.browserDetails.isPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isMSPointer", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isMSPointer)) {
                return window.browserDetails.isMSPointer = ('msPointerEnabled' in window.navigator);
            }
            return window.browserDetails.isMSPointer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isDevice", {
        get: function () {
            return Browser.getValue('isDevice', REGX_MOBILE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos", {
        get: function () {
            return Browser.getValue('isIos', REGX_IOS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isIos7", {
        get: function () {
            return Browser.getValue('isIos7', REGX_IOS7);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isAndroid", {
        get: function () {
            return Browser.getValue('isAndroid', REGX_ANDROID);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWebView", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.isWebView)) {
                window.browserDetails.isWebView = !(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.cordova) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.PhoneGap)
                    && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.phonegap) && window.forge !== 'object');
                return window.browserDetails.isWebView;
            }
            return window.browserDetails.isWebView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "isWindows", {
        get: function () {
            return Browser.getValue('isWindows', REGX_WINDOWS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchStartEvent", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.touchStartEvent)) {
                return window.browserDetails.touchStartEvent = Browser.getTouchStartEvent();
            }
            return window.browserDetails.touchStartEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchMoveEvent", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.touchMoveEvent)) {
                return window.browserDetails.touchMoveEvent = Browser.getTouchMoveEvent();
            }
            return window.browserDetails.touchMoveEvent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Browser, "touchEndEvent", {
        get: function () {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(window.browserDetails.touchEndEvent)) {
                return window.browserDetails.touchEndEvent = Browser.getTouchEndEvent();
            }
            return window.browserDetails.touchEndEvent;
        },
        enumerable: true,
        configurable: true
    });
    return Browser;
}());

Browser.uA = navigator.userAgent;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntlBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_base__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_formatter__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__number_formatter__ = __webpack_require__(20);




var IntlBase;
(function (IntlBase) {
    IntlBase.negativeDataRegex = /^(('[^']+'|''|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.customRegex = /^(('[^']+'|''|[^*#@0,.])*)(\*.)?((([0#,]*[0,]*[0#]*)(\.[0#]*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/;
    IntlBase.latnParseRegex = /0|1|2|3|4|5|6|7|8|9/g;
    var fractionRegex = /[0-9]/g;
    IntlBase.defaultCurrency = '$';
    var mapper = ['infinity', 'nan', 'group', 'decimal'];
    var patternRegex = /G|M|L|H|c|'| a|yy|y|EEEE|E/g;
    var patternMatch = {
        'G': '',
        'M': 'm',
        'L': 'm',
        'H': 'h',
        'c': 'd',
        '\'': '"',
        ' a': ' AM/PM',
        'yy': 'yy',
        'y': 'yyyy',
        'EEEE': 'dddd',
        'E': 'ddd'
    };
    IntlBase.formatRegex = /(^[ncpa]{1})([0-1]?[0-9]|20)?$/i;
    var typeMapper = {
        '$': 'isCurrency',
        '%': 'isPercent',
        '-': 'isNegative',
        0: 'nlead',
        1: 'nend'
    };
    IntlBase.dateParseRegex = /([a-z])\1*|'([^']|'')+'|''|./gi;
    IntlBase.basicPatterns = ['short', 'medium', 'long', 'full'];
    IntlBase.defaultObject = {
        'dates': {
            'calendars': {
                'gregorian': {
                    'months': {
                        'stand-alone': {
                            'abbreviated': {
                                '1': 'Jan',
                                '2': 'Feb',
                                '3': 'Mar',
                                '4': 'Apr',
                                '5': 'May',
                                '6': 'Jun',
                                '7': 'Jul',
                                '8': 'Aug',
                                '9': 'Sep',
                                '10': 'Oct',
                                '11': 'Nov',
                                '12': 'Dec'
                            },
                            'narrow': {
                                '1': 'J',
                                '2': 'F',
                                '3': 'M',
                                '4': 'A',
                                '5': 'M',
                                '6': 'J',
                                '7': 'J',
                                '8': 'A',
                                '9': 'S',
                                '10': 'O',
                                '11': 'N',
                                '12': 'D'
                            },
                            'wide': {
                                '1': 'January',
                                '2': 'February',
                                '3': 'March',
                                '4': 'April',
                                '5': 'May',
                                '6': 'June',
                                '7': 'July',
                                '8': 'August',
                                '9': 'September',
                                '10': 'October',
                                '11': 'November',
                                '12': 'December'
                            }
                        }
                    },
                    "days": {
                        "stand-alone": {
                            "abbreviated": {
                                "sun": "Sun",
                                "mon": "Mon",
                                "tue": "Tue",
                                "wed": "Wed",
                                "thu": "Thu",
                                "fri": "Fri",
                                "sat": "Sat"
                            },
                            "narrow": {
                                "sun": "S",
                                "mon": "M",
                                "tue": "T",
                                "wed": "W",
                                "thu": "T",
                                "fri": "F",
                                "sat": "S"
                            },
                            "short": {
                                "sun": "Su",
                                "mon": "Mo",
                                "tue": "Tu",
                                "wed": "We",
                                "thu": "Th",
                                "fri": "Fr",
                                "sat": "Sa"
                            },
                            "wide": {
                                "sun": "Sunday",
                                "mon": "Monday",
                                "tue": "Tuesday",
                                "wed": "Wednesday",
                                "thu": "Thursday",
                                "fri": "Friday",
                                "sat": "Saturday"
                            }
                        }
                    },
                    "dayPeriods": {
                        "format": {
                            "wide": {
                                "am": "AM",
                                "pm": "PM"
                            }
                        }
                    },
                    'eras': {
                        'eraNames': {
                            '0': 'Before Christ',
                            '0-alt-variant': 'Before Common Era',
                            '1': 'Anno Domini',
                            "1-alt-variant": "Common Era"
                        },
                        'eraAbbr': {
                            '0': 'BC',
                            '0-alt-variant': 'BCE',
                            '1': 'AD',
                            '1-alt-variant': 'CE'
                        },
                        'eraNarrow': {
                            '0': 'B',
                            '0-alt-variant': 'BCE',
                            '1': 'A',
                            '1-alt-variant': 'CE'
                        }
                    },
                    'dateFormats': {
                        'full': 'EEEE, MMMM d, y',
                        'long': 'MMMM d, y',
                        'medium': 'MMM d, y',
                        'short': 'M/d/yy'
                    },
                    'timeFormats': {
                        'full': 'h:mm:ss a zzzz',
                        'long': 'h:mm:ss a z',
                        'medium': 'h:mm:ss a',
                        'short': 'h:mm a'
                    },
                    'dateTimeFormats': {
                        'full': "{1} 'at' {0}",
                        'long': "{1} 'at' {0}",
                        'medium': '{1}, {0}',
                        'short': '{1}, {0}',
                        'availableFormats': {
                            'd': 'd',
                            'E': 'ccc',
                            'Ed': 'd E',
                            'Ehm': 'E h:mm a',
                            'EHm': 'E HH:mm',
                            'Ehms': 'E h:mm:ss a',
                            'EHms': 'E HH:mm:ss',
                            'Gy': 'y G',
                            'GyMMM': 'MMM y G',
                            'GyMMMd': 'MMM d, y G',
                            'GyMMMEd': 'E, MMM d, y G',
                            'h': 'h a',
                            'H': 'HH',
                            'hm': 'h:mm a',
                            'Hm': 'HH:mm',
                            'hms': 'h:mm:ss a',
                            'Hms': 'HH:mm:ss',
                            'hmsv': 'h:mm:ss a v',
                            'Hmsv': 'HH:mm:ss v',
                            'hmv': 'h:mm a v',
                            'Hmv': 'HH:mm v',
                            'M': 'L',
                            'Md': 'M/d',
                            'MEd': 'E, M/d',
                            'MMM': 'LLL',
                            'MMMd': 'MMM d',
                            'MMMEd': 'E, MMM d',
                            'MMMMd': 'MMMM d',
                            'ms': 'mm:ss',
                            'y': 'y',
                            'yM': 'M/y',
                            'yMd': 'M/d/y',
                            'yMEd': 'E, M/d/y',
                            'yMMM': 'MMM y',
                            'yMMMd': 'MMM d, y',
                            'yMMMEd': 'E, MMM d, y',
                            'yMMMM': 'MMMM y',
                        },
                    }
                }
            },
            'timeZoneNames': {
                "hourFormat": "+HH:mm;-HH:mm",
                "gmtFormat": "GMT{0}",
                "gmtZeroFormat": "GMT",
            }
        },
        'numbers': {
            'currencies': {
                'USD': {
                    'displayName': 'US Dollar',
                    'symbol': '$',
                    'symbol-alt-narrow': '$'
                },
                'EUR': {
                    'displayName': 'Euro',
                    'symbol': '€',
                    'symbol-alt-narrow': '€'
                },
                'GBP': {
                    'displayName': 'British Pound',
                    'symbol-alt-narrow': '£'
                },
            },
            'defaultNumberingSystem': 'latn',
            'minimumGroupingDigits': '1',
            'symbols-numberSystem-latn': {
                'decimal': '.',
                'group': ',',
                'list': ';',
                'percentSign': '%',
                'plusSign': '+',
                'minusSign': '-',
                'exponential': 'E',
                'superscriptingExponent': '×',
                'perMille': '‰',
                'infinity': '∞',
                'nan': 'NaN',
                'timeSeparator': ':'
            },
            'decimalFormats-numberSystem-latn': {
                'standard': '#,##0.###',
            },
            'percentFormats-numberSystem-latn': {
                'standard': '#,##0%'
            },
            'currencyFormats-numberSystem-latn': {
                'standard': '¤#,##0.00',
                'accounting': '¤#,##0.00;(¤#,##0.00)'
            }
        }
    };
    IntlBase.monthIndex = {
        3: 'abbreviated',
        4: 'wide',
        5: 'narrow',
        1: 'abbreviated'
    };
    IntlBase.month = 'months';
    IntlBase.days = 'days';
    IntlBase.patternMatcher = {
        C: 'currency',
        P: 'percent',
        N: 'decimal',
        A: 'currency'
    };
    function getResultantPattern(skeleton, dateObject, type) {
        var resPattern;
        var iType = type || 'date';
        if (IntlBase.basicPatterns.indexOf(skeleton) !== -1) {
            resPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(iType + 'Formats.' + skeleton, dateObject);
            if (iType === 'dateTime') {
                var dPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dateFormats.' + skeleton, dateObject);
                var tPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('timeFormats.' + skeleton, dateObject);
                resPattern = resPattern.replace('{1}', dPattern).replace('{0}', tPattern);
            }
        }
        else {
            resPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dateTimeFormats.availableFormats.' + skeleton, dateObject);
        }
        return resPattern;
    }
    IntlBase.getResultantPattern = getResultantPattern;
    function getDependables(cldr, culture, isNumber) {
        var ret = {};
        ret.parserObject = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getMainObject(cldr, culture) || IntlBase.defaultObject;
        if (isNumber) {
            ret.numericObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('numbers', ret.parserObject);
        }
        else {
            ret.dateObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dates.calendars.gregorian', ret.parserObject);
        }
        return ret;
    }
    IntlBase.getDependables = getDependables;
    function getSymbolPattern(type, numSystem, obj, isAccount) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(type + 'Formats-numberSystem-' +
            numSystem + (isAccount ? '.accounting' : '.standard'), obj) || (isAccount ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(type + 'Formats-numberSystem-' +
            numSystem + '.standard', obj) : '');
    }
    IntlBase.getSymbolPattern = getSymbolPattern;
    function getProperNumericSkeleton(skeleton) {
        var matches = skeleton.match(IntlBase.formatRegex);
        var ret = {};
        var pattern = matches[1].toUpperCase();
        ret.isAccount = (pattern === 'A');
        ret.type = IntlBase.patternMatcher[pattern];
        if (skeleton.length > 1) {
            ret.fractionDigits = parseInt(matches[2], 10);
        }
        return ret;
    }
    IntlBase.getProperNumericSkeleton = getProperNumericSkeleton;
    function getFormatData(pattern, needFraction, cSymbol, fractionOnly) {
        var nData = fractionOnly ? {} : { nlead: '', nend: '' };
        var match = pattern.match(IntlBase.customRegex);
        if (match) {
            if (!fractionOnly) {
                nData.nlead = changeCurrencySymbol(match[1], cSymbol);
                nData.nend = changeCurrencySymbol(match[10], cSymbol);
                nData.groupPattern = match[4];
            }
            var fraction = match[7];
            if (fraction && needFraction) {
                var fmatch = fraction.match(fractionRegex);
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(fmatch)) {
                    nData.minimumFraction = fmatch.length;
                }
                else {
                    nData.minimumFraction = 0;
                }
                nData.maximumFraction = fraction.length - 1;
            }
        }
        return nData;
    }
    IntlBase.getFormatData = getFormatData;
    function changeCurrencySymbol(val, sym) {
        if (val) {
            return val.replace(IntlBase.defaultCurrency, sym);
        }
        return '';
    }
    function getCurrencySymbol(numericObject, currencyCode) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('currencies.' + currencyCode + '.symbol', numericObject) || '$';
    }
    IntlBase.getCurrencySymbol = getCurrencySymbol;
    function customFormat(format, dOptions, obj) {
        var options = {};
        var formatSplit = format.split(';');
        var data = ['pData', 'nData', 'zeroData'];
        for (var i = 0; i < formatSplit.length; i++) {
            options[data[i]] = customNumberFormat(formatSplit[i], dOptions, obj);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.nData)) {
            options.nData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, options.pData);
            options.nData.nlead = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(dOptions) ? '-' + options.nData.nlead : dOptions.minusSymbol + options.nData.nlead;
        }
        return options;
    }
    IntlBase.customFormat = customFormat;
    function customNumberFormat(format, dOptions, numObject) {
        var cOptions = { type: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 };
        var pattern = format.match(IntlBase.customRegex);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(pattern) || pattern[5] === '') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])('Given Format is not valid or Cldr data not loaded');
        }
        cOptions.nlead = pattern[1];
        cOptions.nend = pattern[10];
        var integerPart = pattern[6];
        cOptions.useGrouping = integerPart.indexOf(',') !== -1;
        integerPart = integerPart.replace(/,/g, '');
        var fractionPart = pattern[7];
        if (integerPart.indexOf('0') !== -1) {
            cOptions.minimumIntegerDigits = integerPart.length - integerPart.indexOf('0');
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(fractionPart)) {
            cOptions.minimumFractionDigits = fractionPart.lastIndexOf('0');
            cOptions.maximumFractionDigits = fractionPart.lastIndexOf('#');
            if (cOptions.minimumFractionDigits === -1) {
                cOptions.minimumFractionDigits = 0;
            }
            if (cOptions.maximumFractionDigits === -1 || cOptions.maximumFractionDigits < cOptions.minimumFractionDigits) {
                cOptions.maximumFractionDigits = cOptions.minimumFractionDigits;
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(dOptions)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '$', dOptions.currencySymbol));
            if (!cOptions.isCurrency) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', dOptions.percentSymbol));
            }
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions, isCurrencyPercent([cOptions.nlead, cOptions.nend], '%', '%'));
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(numObject)) {
            var symbolPattern = getSymbolPattern(cOptions.type, dOptions.numberMapper.numberSystem, numObject, false);
            if (cOptions.useGrouping) {
                cOptions.groupSeparator = dOptions.numberMapper.numberSymbols[mapper[2]];
                cOptions.groupData = __WEBPACK_IMPORTED_MODULE_3__number_formatter__["a" /* NumberFormat */].getGroupingDetails(symbolPattern.split(';')[0]);
            }
            cOptions.nlead = cOptions.nlead.replace(/\'/g, '');
            cOptions.nend = cOptions.nend.replace(/\'/g, '');
        }
        return cOptions;
    }
    function isCurrencyPercent(parts, actual, symbol) {
        var options = { nlead: parts[0], nend: parts[1] };
        for (var i = 0; i < 2; i++) {
            var part = parts[i];
            var loc = part.indexOf(actual);
            if ((loc !== -1) && ((loc < part.indexOf('\'')) || (loc > part.lastIndexOf('\'')))) {
                options[typeMapper[i]] = part.substr(0, loc) + symbol + part.substr(loc + 1);
                options[typeMapper[actual]] = true;
                options.type = options.isCurrency ? 'currency' : 'percent';
                break;
            }
        }
        return options;
    }
    IntlBase.isCurrencyPercent = isCurrencyPercent;
    function getDateSeparator(dateObj) {
        var value = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dateFormats.short', dateObj) || '').match(/[d‏M‏]([^d‏M])[d‏M‏]/i);
        return value ? value[1] : '/';
    }
    IntlBase.getDateSeparator = getDateSeparator;
    function getActualDateTimeFormat(culture, options, cldr, isExcelFormat) {
        var dependable = getDependables(cldr, culture);
        var actualPattern = options.format || getResultantPattern(options.skeleton, dependable.dateObject, options.type);
        if (isExcelFormat) {
            actualPattern = actualPattern.replace(patternRegex, function (pattern) {
                return patternMatch[pattern];
            });
            if (actualPattern.indexOf('z') !== -1) {
                var tLength = actualPattern.match(/z/g).length;
                var timeZonePattern = void 0;
                var options_1 = { 'timeZone': {} };
                options_1.numMapper = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr));
                options_1.timeZone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('dates.timeZoneNames', dependable.parserObject);
                var value = new Date();
                var timezone = value.getTimezoneOffset();
                var pattern = (tLength < 4) ? '+H;-H' : options_1.timeZone.hourFormat;
                pattern = pattern.replace(/:/g, options_1.numMapper.timeSeparator);
                if (timezone === 0) {
                    timeZonePattern = options_1.timeZone.gmtZeroFormat;
                }
                else {
                    timeZonePattern = __WEBPACK_IMPORTED_MODULE_2__date_formatter__["a" /* DateFormat */].getTimeZoneValue(timezone, pattern);
                    timeZonePattern = options_1.timeZone.gmtFormat.replace(/\{0\}/, timeZonePattern);
                }
                actualPattern = actualPattern.replace(/[z]+/, '"' + timeZonePattern + '"');
            }
            actualPattern = actualPattern.replace(/ $/, '');
        }
        return actualPattern;
    }
    IntlBase.getActualDateTimeFormat = getActualDateTimeFormat;
    function getActualNumberFormat(culture, options, cldr) {
        var dependable = getDependables(cldr, culture, true);
        var parseOptions = { custom: true };
        var minFrac;
        if ((/(c|a)$/ig).test(options.format) && !options.minimumFractionDigits && !options.maximumFractionDigits) {
            var dOptions = {};
            dOptions.numberMapper = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr), true);
            var symbolPattern = getSymbolPattern('currency', dOptions.numberMapper.numberSystem, dependable.numericObject, (/a/i).test(options.format));
            minFrac = getFormatData(symbolPattern.split(';')[0], true, '', true).minimumFraction;
        }
        var actualPattern;
        if ((IntlBase.formatRegex.test(options.format)) || !(options.format)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(parseOptions, getProperNumericSkeleton(options.format || 'N'));
            parseOptions.custom = false;
            actualPattern = '###0';
            if (parseOptions.fractionDigits || options.minimumFractionDigits || options.maximumFractionDigits || minFrac) {
                var defaultMinimum = 0;
                if (parseOptions.fractionDigits) {
                    options.minimumFractionDigits = options.maximumFractionDigits = parseOptions.fractionDigits;
                }
                actualPattern = fractionDigitsPattern(actualPattern, minFrac || parseOptions.fractionDigits ||
                    options.minimumFractionDigits || defaultMinimum, options.maximumFractionDigits || defaultMinimum);
            }
            if (options.minimumIntegerDigits) {
                actualPattern = minimumIntegerPattern(actualPattern, options.minimumIntegerDigits);
            }
            if (options.useGrouping) {
                actualPattern = groupingPattern(actualPattern);
            }
            if (parseOptions.type === 'currency' && !parseOptions.isAccount) {
                actualPattern = '$ ' + actualPattern;
            }
            else if (parseOptions.type === 'currency' && parseOptions.isAccount) {
                actualPattern = '$ ' + actualPattern + ';($ ' + actualPattern + ')';
            }
            if (parseOptions.type === 'percent') {
                actualPattern += ' %';
            }
        }
        else {
            actualPattern = options.format.replace(/\'/g, '"');
        }
        return actualPattern;
    }
    IntlBase.getActualNumberFormat = getActualNumberFormat;
    function fractionDigitsPattern(pattern, minDigits, maxDigits) {
        pattern += '.';
        for (var a = 0; a < minDigits; a++) {
            pattern += '0';
        }
        if (minDigits < maxDigits) {
            var diff = maxDigits - minDigits;
            for (var b = 0; b < diff; b++) {
                pattern += '#';
            }
        }
        return pattern;
    }
    function minimumIntegerPattern(pattern, digits) {
        var temp = pattern.split('.');
        var integer = '';
        for (var x = 0; x < digits; x++) {
            integer += '0';
        }
        return temp[1] ? (integer + '.' + temp[1]) : integer;
    }
    function groupingPattern(pattern) {
        var temp = pattern.split('.');
        var integer = temp[0];
        var no = 3 - integer.length % 3;
        var hash = (no && no === 1) ? '#' : (no === 2 ? '##' : '');
        integer = hash + integer;
        pattern = '';
        for (var x = integer.length - 1; x > 0; x = x - 3) {
            pattern = ',' + integer[x - 2] + integer[x - 1] + integer[x] + pattern;
        }
        pattern = pattern.slice(1);
        return temp[1] ? (pattern + '.' + temp[1]) : pattern;
    }
})(IntlBase || (IntlBase = {}));


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParserBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
var defaultNumberingSystem = {
    'latn': {
        '_digits': '0123456789',
        '_type': 'numeric'
    }
};

var latnRegex = /^[0-9]*$/;
var defaultNumberSymbols = {
    'decimal': '.',
    'group': ',',
    'percentSign': '%',
    'plusSign': '+',
    'minusSign': '-',
    'infinity': '∞',
    'nan': 'NaN',
    'exponential': 'E'
};
var latnNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var ParserBase = (function () {
    function ParserBase() {
    }
    ParserBase.getMainObject = function (obj, cName) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('main.' + cName, obj);
    };
    ParserBase.getNumberingSystem = function (obj) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('supplemental.numberingSystems', obj) || this.numberingSystems;
    };
    ParserBase.reverseObject = function (prop, keys) {
        var propKeys = keys || Object.keys(prop);
        var res = {};
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var key = propKeys_1[_i];
            if (!res.hasOwnProperty(prop[key])) {
                res[prop[key]] = key;
            }
        }
        return res;
    };
    ParserBase.getSymbolRegex = function (props) {
        var regexStr = props.map(function (str) {
            return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
        }).join('|');
        return new RegExp(regexStr, 'g');
    };
    ParserBase.getSymbolMatch = function (prop) {
        var matchKeys = Object.keys(defaultNumberSymbols);
        var ret = {};
        for (var _i = 0, matchKeys_1 = matchKeys; _i < matchKeys_1.length; _i++) {
            var key = matchKeys_1[_i];
            ret[prop[key]] = defaultNumberSymbols[key];
        }
        return ret;
    };
    ParserBase.constructRegex = function (val) {
        var len = val.length;
        var ret = '';
        for (var i = 0; i < len; i++) {
            if (i !== len - 1) {
                ret += val[i] + '|';
            }
            else {
                ret += val[i];
            }
        }
        return ret;
    };
    ParserBase.convertValueParts = function (value, regex, obj) {
        return value.replace(regex, function (str) {
            return obj[str];
        });
    };
    ParserBase.getDefaultNumberingSystem = function (obj) {
        var ret = {};
        ret.obj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('numbers', obj);
        ret.nSystem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('defaultNumberingSystem', ret.obj);
        return ret;
    };
    ParserBase.getCurrentNumericOptions = function (curObj, numberSystem, needSymbols) {
        var ret = {};
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(cur.nSystem)) {
            var digits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(cur.nSystem + '._digits', numberSystem);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(digits)) {
                ret.numericPair = this.reverseObject(digits, latnNumberSystem);
                ret.numberParseRegex = new RegExp(this.constructRegex(digits), 'g');
                ret.numericRegex = '[' + digits[0] + '-' + digits[9] + ']';
                if (needSymbols) {
                    ret.numericRegex = digits[0] + '-' + digits[9];
                    ret.symbolNumberSystem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('symbols-numberSystem-' + cur.nSystem, cur.obj);
                    ret.symbolMatch = this.getSymbolMatch(ret.symbolNumberSystem);
                    ret.numberSystem = cur.nSystem;
                }
            }
        }
        return ret;
    };
    ParserBase.getNumberMapper = function (curObj, numberSystem, isNumber) {
        var ret = { mapper: {} };
        var cur = this.getDefaultNumberingSystem(curObj);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(cur.nSystem)) {
            ret.numberSystem = cur.nSystem;
            ret.numberSymbols = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('symbols-numberSystem-' + cur.nSystem, cur.obj);
            ret.timeSeparator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('timeSeparator', ret.numberSymbols);
            var digits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(cur.nSystem + '._digits', numberSystem);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(digits)) {
                for (var _i = 0, latnNumberSystem_1 = latnNumberSystem; _i < latnNumberSystem_1.length; _i++) {
                    var i = latnNumberSystem_1[_i];
                    ret.mapper[i] = digits[i];
                }
            }
        }
        return ret;
    };
    return ParserBase;
}());

ParserBase.nPair = 'numericPair';
ParserBase.nRegex = 'numericRegex';
ParserBase.numberingSystems = defaultNumberingSystem;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(2);


var ChildProperty = (function () {
    function ChildProperty(parent, propName, defaultValue, isArray) {
        this.properties = {};
        this.changedProperties = {};
        this.childChangedProperties = {};
        this.oldProperties = {};
        this.finalUpdate = function () { };
        this.callChildDataBind = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('callChildDataBind', __WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]);
        this.parentObj = parent;
        this.controlParent = this.parentObj.controlParent || this.parentObj;
        this.propName = propName;
        this.setProperties(defaultValue, true);
        this.isParentArray = isArray;
    }
    ChildProperty.prototype.updateChange = function (val, propName) {
        if (val === true) {
            this.parentObj.childChangedProperties[propName] = val;
        }
        else {
            delete this.parentObj.childChangedProperties[propName];
        }
        if (this.parentObj.updateChange) {
            this.parentObj.updateChange(val, this.parentObj.propName);
        }
    };
    ChildProperty.prototype.updateTimeOut = function () {
        if (this.parentObj.updateTimeOut) {
            this.parentObj.finalUpdate();
            this.parentObj.updateTimeOut();
        }
        else {
            this.parentObj.finalUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* setImmediate */])(this.parentObj.dataBind.bind(this.parentObj));
        }
    };
    ChildProperty.prototype.clearChanges = function () {
        this.finalUpdate();
        this.updateChange(false, this.propName);
        this.oldProperties = {};
        this.changedProperties = {};
    };
    ChildProperty.prototype.setProperties = function (prop, muteOnChange) {
        if (muteOnChange === true) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, prop);
            this.updateChange(false, this.propName);
            this.clearChanges();
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, prop);
        }
    };
    ChildProperty.prototype.dataBind = function () {
        this.callChildDataBind(this.childChangedProperties, this);
        if (this.isParentArray) {
            var curIndex = this.parentObj[this.propName].indexOf(this);
            if (Object.keys(this.changedProperties).length) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(this.propName + '.' + curIndex, this.changedProperties, this.parentObj.changedProperties);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(this.propName + '.' + curIndex, this.oldProperties, this.parentObj.oldProperties);
            }
        }
        else {
            this.parentObj.changedProperties[this.propName] = this.changedProperties;
            this.parentObj.oldProperties[this.propName] = this.oldProperties;
        }
        this.clearChanges();
    };
    ChildProperty.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.controlParent.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.updateChange(true, this.propName);
        this.finalUpdate();
        this.updateTimeOut();
    };
    return ChildProperty;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onIntlChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rightToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cldrData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultCulture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultCurrencyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Internationalization; });
/* harmony export (immutable) */ __webpack_exports__["g"] = setCulture;
/* harmony export (immutable) */ __webpack_exports__["h"] = setCurrencyCode;
/* harmony export (immutable) */ __webpack_exports__["i"] = loadCldr;
/* harmony export (immutable) */ __webpack_exports__["j"] = enableRtl;
/* harmony export (immutable) */ __webpack_exports__["k"] = getNumericObject;
/* harmony export (immutable) */ __webpack_exports__["l"] = getDefaultDateObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intl_date_formatter__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intl_number_formatter__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intl_date_parser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intl_number_parser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__observer__ = __webpack_require__(14);







var onIntlChange = new __WEBPACK_IMPORTED_MODULE_6__observer__["a" /* Observer */]();
var rightToLeft = false;
var cldrData = {};
var defaultCulture = 'en-US';
var defaultCurrencyCode = 'USD';
var mapper = ['numericObject', 'dateObject'];
var Internationalization = (function () {
    function Internationalization(cultureName) {
        if (cultureName) {
            this.culture = cultureName;
        }
    }
    Internationalization.prototype.getDateFormat = function (options) {
        return __WEBPACK_IMPORTED_MODULE_0__intl_date_formatter__["a" /* DateFormat */].dateFormat(this.getCulture(), options || { type: 'date', skeleton: 'short' }, cldrData);
    };
    Internationalization.prototype.getNumberFormat = function (options) {
        if (options && !options.currency) {
            options.currency = defaultCurrencyCode;
        }
        return __WEBPACK_IMPORTED_MODULE_1__intl_number_formatter__["a" /* NumberFormat */].numberFormatter(this.getCulture(), options || {}, cldrData);
    };
    Internationalization.prototype.getDateParser = function (options) {
        return __WEBPACK_IMPORTED_MODULE_2__intl_date_parser__["a" /* DateParser */].dateParser(this.getCulture(), options || { skeleton: 'short', type: 'date' }, cldrData);
    };
    Internationalization.prototype.getNumberParser = function (options) {
        return __WEBPACK_IMPORTED_MODULE_3__intl_number_parser__["a" /* NumberParser */].numberParser(this.getCulture(), options || { format: 'N' }, cldrData);
    };
    Internationalization.prototype.formatNumber = function (value, option) {
        return this.getNumberFormat(option)(value);
    };
    Internationalization.prototype.formatDate = function (value, option) {
        return this.getDateFormat(option)(value);
    };
    Internationalization.prototype.parseDate = function (value, option) {
        return this.getDateParser(option)(value);
    };
    Internationalization.prototype.parseNumber = function (value, option) {
        return this.getNumberParser(option)(value);
    };
    Internationalization.prototype.getDatePattern = function (option, isExcelFormat) {
        return __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getActualDateTimeFormat(this.getCulture(), option, cldrData, isExcelFormat);
    };
    Internationalization.prototype.getNumberPattern = function (option) {
        return __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getActualNumberFormat(this.getCulture(), option, cldrData);
    };
    Internationalization.prototype.getCulture = function () {
        return this.culture || defaultCulture;
    };
    return Internationalization;
}());

function setCulture(cultureName) {
    defaultCulture = cultureName;
    onIntlChange.notify('notifyExternalChange', { 'locale': defaultCulture });
}
function setCurrencyCode(currencyCode) {
    defaultCurrencyCode = currencyCode;
}
function loadCldr() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
        var obj = data_1[_a];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["i" /* extend */])(cldrData, obj, {}, true);
    }
}
function enableRtl(status) {
    if (status === void 0) { status = true; }
    rightToLeft = status;
    onIntlChange.notify('notifyExternalChange', { enableRtl: rightToLeft });
}
function getNumericObject(locale, type) {
    var numObject = __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDependables(cldrData, locale, true)[mapper[0]];
    var dateObject = __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDependables(cldrData, locale)[mapper[1]];
    var numSystem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["c" /* getValue */])('defaultNumberingSystem', numObject);
    var symbPattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["c" /* getValue */])('symbols-numberSystem-' + numSystem, numObject);
    var pattern = __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getSymbolPattern(type || 'decimal', numSystem, numObject, false);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["i" /* extend */])(symbPattern, __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getFormatData(pattern, true, '', true), { 'dateSeparator': __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDateSeparator(dateObject) });
}
function getDefaultDateObject() {
    return __WEBPACK_IMPORTED_MODULE_4__intl_intl_base__["a" /* IntlBase */].getDependables(cldrData, '', false)[mapper[1]];
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manager__ = __webpack_require__(23);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataManager", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return __WEBPACK_IMPORTED_MODULE_0__manager__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query__ = __webpack_require__(12);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return __WEBPACK_IMPORTED_MODULE_1__query__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Predicate", function() { return __WEBPACK_IMPORTED_MODULE_1__query__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adaptors__ = __webpack_require__(22);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Adaptor", function() { return __WEBPACK_IMPORTED_MODULE_2__adaptors__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonAdaptor", function() { return __WEBPACK_IMPORTED_MODULE_2__adaptors__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UrlAdaptor", function() { return __WEBPACK_IMPORTED_MODULE_2__adaptors__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ODataAdaptor", function() { return __WEBPACK_IMPORTED_MODULE_2__adaptors__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ODataV4Adaptor", function() { return __WEBPACK_IMPORTED_MODULE_2__adaptors__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WebApiAdaptor", function() { return __WEBPACK_IMPORTED_MODULE_2__adaptors__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WebMethodAdaptor", function() { return __WEBPACK_IMPORTED_MODULE_2__adaptors__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RemoteSaveAdaptor", function() { return __WEBPACK_IMPORTED_MODULE_2__adaptors__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CacheAdaptor", function() { return __WEBPACK_IMPORTED_MODULE_2__adaptors__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataUtil", function() { return __WEBPACK_IMPORTED_MODULE_3__util__["a"]; });






/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Predicate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(13);

var Query = (function () {
    function Query(from) {
        this.subQuery = null;
        this.isChild = false;
        this.queries = [];
        this.key = '';
        this.fKey = '';
        if (typeof from === 'string') {
            this.fromTable = from;
        }
        else if (from && from instanceof Array) {
            this.lookups = from;
        }
        this.expands = [];
        this.sortedColumns = [];
        this.groupedColumns = [];
        this.subQuery = null;
        this.isChild = false;
        this.params = [];
        return this;
    }
    Query.prototype.setKey = function (field) {
        this.key = field;
        return this;
    };
    Query.prototype.using = function (dataManager) {
        this.dataManager = dataManager;
        return this;
    };
    Query.prototype.execute = function (dataManager, done, fail, always) {
        dataManager = dataManager || this.dataManager;
        if (dataManager) {
            return dataManager.executeQuery(this, done, fail, always);
        }
        return __WEBPACK_IMPORTED_MODULE_0__util__["a" /* DataUtil */].throwError('Query - execute() : dataManager needs to be is set using "using" function or should be passed as argument');
    };
    Query.prototype.executeLocal = function (dataManager) {
        dataManager = dataManager || this.dataManager;
        if (dataManager) {
            return dataManager.executeLocal(this);
        }
        return __WEBPACK_IMPORTED_MODULE_0__util__["a" /* DataUtil */].throwError('Query - executeLocal() : dataManager needs to be is set using "using" function or should be passed as argument');
    };
    Query.prototype.clone = function () {
        var cloned = new Query();
        cloned.queries = this.queries.slice(0);
        cloned.key = this.key;
        cloned.isChild = this.isChild;
        cloned.dataManager = this.dataManager;
        cloned.fromTable = this.fromTable;
        cloned.params = this.params.slice(0);
        cloned.expands = this.expands.slice(0);
        cloned.sortedColumns = this.sortedColumns.slice(0);
        cloned.groupedColumns = this.groupedColumns.slice(0);
        cloned.subQuerySelector = this.subQuerySelector;
        cloned.subQuery = this.subQuery;
        cloned.fKey = this.fKey;
        cloned.requiresCounts = this.requiresCounts;
        return cloned;
    };
    Query.prototype.from = function (tableName) {
        this.fromTable = tableName;
        return this;
    };
    Query.prototype.addParams = function (key, value) {
        if (typeof value === 'function') {
            this.params.push({ key: key, fn: value });
        }
        else {
            this.params.push({ key: key, value: value });
        }
        return this;
    };
    Query.prototype.expand = function (tables) {
        if (typeof tables === 'string') {
            this.expands = [].slice.call([tables], 0);
        }
        else {
            this.expands = tables.slice(0);
        }
        return this;
    };
    Query.prototype.where = function (fieldName, operator, value, ignoreCase) {
        operator = operator ? (operator).toLowerCase() : null;
        var predicate = null;
        if (typeof fieldName === 'string') {
            predicate = new Predicate(fieldName, operator, value, ignoreCase);
        }
        else if (fieldName instanceof Predicate) {
            predicate = fieldName;
        }
        this.queries.push({
            fn: 'onWhere',
            e: predicate
        });
        return this;
    };
    Query.prototype.search = function (searchKey, fieldNames, operator, ignoreCase) {
        if (typeof fieldNames === 'string') {
            fieldNames = [fieldNames];
        }
        operator = operator || 'contains';
        var comparer = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* DataUtil */].fnOperators[operator];
        this.queries.push({
            fn: 'onSearch',
            e: {
                fieldNames: fieldNames,
                operator: operator,
                searchKey: searchKey,
                ignoreCase: ignoreCase,
                comparer: comparer
            }
        });
        return this;
    };
    Query.prototype.sortBy = function (fieldName, comparer, isFromGroup) {
        var order = 'ascending';
        var sorts;
        var temp;
        if (typeof fieldName === 'string' && __WEBPACK_IMPORTED_MODULE_0__util__["a" /* DataUtil */].endsWith(fieldName.toLowerCase(), ' desc')) {
            fieldName = fieldName.replace(/ desc$/i, '');
            comparer = 'descending';
        }
        if (!comparer || typeof comparer === 'string') {
            order = comparer ? comparer.toLowerCase() : 'ascending';
            comparer = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* DataUtil */].fnSort(comparer);
        }
        if (isFromGroup) {
            sorts = Query.filterQueries(this.queries, 'onSortBy');
            for (var i = 0; i < sorts.length; i++) {
                temp = sorts[i].e.fieldName;
                if (typeof temp === 'string') {
                    if (temp === fieldName) {
                        return this;
                    }
                }
                else if (temp instanceof Array) {
                    for (var j = 0; j < temp.length; j++) {
                        if (temp[j] === fieldName || fieldName.toLowerCase() === temp[j] + ' desc') {
                            return this;
                        }
                    }
                }
            }
        }
        this.queries.push({
            fn: 'onSortBy',
            e: {
                fieldName: fieldName,
                comparer: comparer,
                direction: order
            }
        });
        return this;
    };
    Query.prototype.sortByDesc = function (fieldName) {
        return this.sortBy(fieldName, 'descending');
    };
    Query.prototype.group = function (fieldName, fn, format) {
        this.sortBy(fieldName, null, true);
        this.queries.push({
            fn: 'onGroup',
            e: {
                fieldName: fieldName,
                comparer: fn ? fn : null,
                format: format ? format : null
            }
        });
        return this;
    };
    Query.prototype.page = function (pageIndex, pageSize) {
        this.queries.push({
            fn: 'onPage',
            e: {
                pageIndex: pageIndex,
                pageSize: pageSize
            }
        });
        return this;
    };
    Query.prototype.range = function (start, end) {
        this.queries.push({
            fn: 'onRange',
            e: {
                start: start,
                end: end
            }
        });
        return this;
    };
    Query.prototype.take = function (nos) {
        this.queries.push({
            fn: 'onTake',
            e: {
                nos: nos
            }
        });
        return this;
    };
    Query.prototype.skip = function (nos) {
        this.queries.push({
            fn: 'onSkip',
            e: { nos: nos }
        });
        return this;
    };
    Query.prototype.select = function (fieldNames) {
        if (typeof fieldNames === 'string') {
            fieldNames = [].slice.call([fieldNames], 0);
        }
        this.queries.push({
            fn: 'onSelect',
            e: { fieldNames: fieldNames }
        });
        return this;
    };
    Query.prototype.hierarchy = function (query, selectorFn) {
        this.subQuerySelector = selectorFn;
        this.subQuery = query;
        return this;
    };
    Query.prototype.foreignKey = function (key) {
        this.fKey = key;
        return this;
    };
    Query.prototype.requiresCount = function () {
        this.requiresCounts = true;
        return this;
    };
    Query.prototype.aggregate = function (type, field) {
        this.queries.push({
            fn: 'onAggregates',
            e: { field: field, type: type }
        });
        return this;
    };
    Query.filterQueries = function (queries, name) {
        return queries.filter(function (q) {
            return q.fn === name;
        });
    };
    Query.filterQueryLists = function (queries, singles) {
        var filtered = queries.filter(function (q) {
            return singles.indexOf(q.fn) !== -1;
        });
        var res = {};
        for (var i = 0; i < filtered.length; i++) {
            if (!res[filtered[i].fn]) {
                res[filtered[i].fn] = filtered[i].e;
            }
        }
        return res;
    };
    return Query;
}());

var Predicate = (function () {
    function Predicate(field, operator, value, ignoreCase) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        this.isComplex = false;
        if (typeof field === 'string') {
            this.field = field;
            this.operator = operator.toLowerCase();
            this.value = value;
            this.ignoreCase = ignoreCase;
            this.isComplex = false;
            this.comparer = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* DataUtil */].fnOperators.processOperator(this.operator);
        }
        else if (field instanceof Predicate && value instanceof Predicate || value instanceof Array) {
            this.isComplex = true;
            this.condition = operator.toLowerCase();
            this.predicates = [field];
            if (value instanceof Array) {
                [].push.apply(this.predicates, value);
            }
            else {
                this.predicates.push(value);
            }
        }
        return this;
    }
    Predicate.and = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Predicate.combinePredicates([].slice.call(args, 0), 'and');
    };
    Predicate.prototype.and = function (field, operator, value, ignoreCase) {
        return Predicate.combine(this, field, operator, value, 'and', ignoreCase);
    };
    Predicate.or = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Predicate.combinePredicates([].slice.call(args, 0), 'or');
    };
    Predicate.prototype.or = function (field, operator, value, ignoreCase) {
        return Predicate.combine(this, field, operator, value, 'or', ignoreCase);
    };
    Predicate.fromJson = function (json) {
        if (json instanceof Array) {
            var res = [];
            for (var i = 0, len = json.length; i < len; i++) {
                res.push(this.fromJSONData(json[i]));
            }
            return res;
        }
        var pred = json;
        return this.fromJSONData(pred);
    };
    Predicate.prototype.validate = function (record) {
        var predicate = this.predicates ? this.predicates : [];
        var isAnd;
        var ret;
        if (!this.isComplex && this.comparer) {
            return this.comparer.call(this, __WEBPACK_IMPORTED_MODULE_0__util__["a" /* DataUtil */].getObject(this.field, record), this.value, this.ignoreCase);
        }
        isAnd = this.condition === 'and';
        for (var i = 0; i < predicate.length; i++) {
            ret = predicate[i].validate(record);
            if (isAnd) {
                if (!ret) {
                    return false;
                }
            }
            else {
                if (ret) {
                    return true;
                }
            }
        }
        return isAnd;
    };
    Predicate.prototype.toJson = function () {
        var predicates;
        var p;
        if (this.isComplex) {
            predicates = [];
            p = this.predicates;
            for (var i = 0; i < p.length; i++) {
                predicates.push(p[i].toJson());
            }
        }
        return {
            isComplex: this.isComplex,
            field: this.field,
            operator: this.operator,
            value: this.value,
            ignoreCase: this.ignoreCase,
            condition: this.condition,
            predicates: predicates
        };
    };
    Predicate.combinePredicates = function (predicates, operator) {
        if (predicates.length === 1) {
            if (!(predicates[0] instanceof Array)) {
                return predicates[0];
            }
            predicates = predicates[0];
        }
        return new Predicate(predicates[0], operator, predicates.slice(1));
    };
    Predicate.combine = function (pred, field, operator, value, condition, ignoreCase) {
        if (field instanceof Predicate) {
            return Predicate[condition](pred, field);
        }
        if (typeof field === 'string') {
            return Predicate[condition](pred, new Predicate(field, operator, value, ignoreCase));
        }
        return __WEBPACK_IMPORTED_MODULE_0__util__["a" /* DataUtil */].throwError('Predicate - ' + condition + ' : invalid arguments');
    };
    Predicate.fromJSONData = function (json) {
        var preds = json.predicates || [];
        var len = preds.length;
        var predicates = [];
        var result;
        for (var i = 0; i < len; i++) {
            predicates.push(this.fromJSONData(preds[i]));
        }
        if (!json.isComplex) {
            result = new Predicate(json.field, json.operator, json.value, json.ignoreCase);
        }
        else {
            result = new Predicate(predicates[0], json.condition, predicates.slice(1));
        }
        return result;
    };
    return Predicate;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__query__ = __webpack_require__(12);



var consts = { GroupGuid: '{271bbba0-1ee7}' };
var DataUtil = (function () {
    function DataUtil() {
    }
    DataUtil.getValue = function (value, inst) {
        if (typeof value === 'function') {
            return value.call(inst || {});
        }
        return value;
    };
    DataUtil.endsWith = function (input, substr) {
        return input.slice(-substr.length) === substr;
    };
    DataUtil.startsWith = function (input, start) {
        return input.slice(0, start.length) === start;
    };
    DataUtil.fnSort = function (order) {
        order = order ? order.toLowerCase() : 'ascending';
        if (order === 'ascending') {
            return this.fnAscending;
        }
        return this.fnDescending;
    };
    DataUtil.fnAscending = function (x, y) {
        if (y === null || y === undefined) {
            return -1;
        }
        if (typeof x === 'string') {
            return x.localeCompare(y);
        }
        if (x === null || x === undefined) {
            return 1;
        }
        return x - y;
    };
    DataUtil.fnDescending = function (x, y) {
        if (y === null || y === undefined) {
            return 1;
        }
        if (typeof x === 'string') {
            return x.localeCompare(y) * -1;
        }
        if (x === null || x === undefined) {
            return -1;
        }
        return y - x;
    };
    DataUtil.extractFields = function (obj, fields) {
        var newObj = {};
        if (fields.length === 1) {
            return this.getObject(fields[0], obj);
        }
        for (var i = 0; i < fields.length; i++) {
            newObj[fields[i].replace('.', '_')] = this.getObject(fields[i], obj);
        }
        return newObj;
    };
    DataUtil.select = function (jsonArray, fields) {
        var newData = [];
        for (var i = 0; i < jsonArray.length; i++) {
            newData.push(this.extractFields(jsonArray[i], fields));
        }
        return newData;
    };
    DataUtil.group = function (jsonArray, field, aggregates, level, groupDs, format) {
        level = level || 1;
        var jsonData = jsonArray;
        var guid = 'GroupGuid';
        if (jsonData.GroupGuid === consts[guid]) {
            var _loop_1 = function (j) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(groupDs)) {
                    var indx = -1;
                    var temp = groupDs.filter(function (e) { return e.key === jsonData[j].key; });
                    indx = groupDs.indexOf(temp[0]);
                    jsonData[j].items = this_1.group(jsonData[j].items, field, aggregates, jsonData.level + 1, groupDs[indx].items, format);
                    jsonData[j].count = groupDs[indx].count;
                }
                else {
                    jsonData[j].items = this_1.group(jsonData[j].items, field, aggregates, jsonData.level + 1, null, format);
                    jsonData[j].count = jsonData[j].items.length;
                }
            };
            var this_1 = this;
            for (var j = 0; j < jsonData.length; j++) {
                _loop_1(j);
            }
            jsonData.childLevels += 1;
            return jsonData;
        }
        var grouped = {};
        var groupedArray = [];
        groupedArray.GroupGuid = consts[guid];
        groupedArray.level = level;
        groupedArray.childLevels = 0;
        groupedArray.records = jsonData;
        var _loop_2 = function (i) {
            var val = this_2.getVal(jsonData, i, field);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(format)) {
                val = format(val, field);
            }
            if (!grouped[val]) {
                grouped[val] = {
                    key: val,
                    count: 0,
                    items: [],
                    aggregates: {},
                    field: field
                };
                groupedArray.push(grouped[val]);
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(groupDs)) {
                    var tempObj = groupDs.filter(function (e) { return e.key === grouped[val].key; });
                    grouped[val].count = tempObj[0].count;
                }
            }
            grouped[val].count = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(groupDs) ? grouped[val].count : grouped[val].count += 1;
            grouped[val].items.push(jsonData[i]);
        };
        var this_2 = this;
        for (var i = 0; i < jsonData.length; i++) {
            _loop_2(i);
        }
        if (aggregates && aggregates.length) {
            var _loop_3 = function (i) {
                var res = {};
                var fn = void 0;
                var aggs = aggregates;
                for (var j = 0; j < aggregates.length; j++) {
                    fn = DataUtil.aggregates[aggregates[j].type];
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(groupDs)) {
                        var temp = groupDs.filter(function (e) { return e.key === groupedArray[i].key; });
                        if (fn) {
                            res[aggs[j].field + ' - ' + aggs[j].type] = fn(temp[0].items, aggs[j].field);
                        }
                    }
                    else {
                        if (fn) {
                            res[aggs[j].field + ' - ' + aggs[j].type] = fn(groupedArray[i].items, aggs[j].field);
                        }
                    }
                }
                groupedArray[i].aggregates = res;
            };
            for (var i = 0; i < groupedArray.length; i++) {
                _loop_3(i);
            }
        }
        return groupedArray;
    };
    DataUtil.buildHierarchy = function (fKey, from, source, lookup, pKey) {
        var i;
        var grp = {};
        var temp;
        if (lookup.result) {
            lookup = lookup.result;
        }
        if (lookup.GroupGuid) {
            this.throwError('DataManager: Do not have support Grouping in hierarchy');
        }
        for (i = 0; i < lookup.length; i++) {
            var fKeyData = this.getObject(fKey, lookup[i]);
            temp = grp[fKeyData] || (grp[fKeyData] = []);
            temp.push(lookup[i]);
        }
        for (i = 0; i < source.length; i++) {
            var fKeyData = this.getObject(pKey || fKey, source[i]);
            source[i][from] = grp[fKeyData];
        }
    };
    DataUtil.getFieldList = function (obj, fields, prefix) {
        if (prefix === undefined) {
            prefix = '';
        }
        if (fields === undefined || fields === null) {
            return this.getFieldList(obj, [], prefix);
        }
        var copyObj = obj;
        var keys = Object.keys(obj);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var prop = keys_1[_i];
            if (typeof copyObj[prop] === 'object' && !(copyObj[prop] instanceof Array)) {
                this.getFieldList(copyObj[prop], fields, prefix + prop + '.');
            }
            else {
                fields.push(prefix + prop);
            }
        }
        return fields;
    };
    DataUtil.getObject = function (nameSpace, from) {
        if (!nameSpace) {
            return from;
        }
        if (nameSpace.indexOf('.') === -1) {
            return from[nameSpace];
        }
        var value = from;
        var splits = nameSpace.split('.');
        for (var i = 0; i < splits.length; i++) {
            if (value == null) {
                break;
            }
            value = value[splits[i]];
        }
        return value;
    };
    DataUtil.sort = function (ds, field, comparer) {
        if (ds.length <= 1) {
            return ds;
        }
        var middle = parseInt((ds.length / 2).toString(), 10);
        var left = ds.slice(0, middle);
        var right = ds.slice(middle);
        left = this.sort(left, field, comparer);
        right = this.sort(right, field, comparer);
        return this.merge(left, right, field, comparer);
    };
    DataUtil.merge = function (left, right, fieldName, comparer) {
        var result = [];
        var current;
        while (left.length > 0 || right.length > 0) {
            if (left.length > 0 && right.length > 0) {
                if (comparer) {
                    current = comparer(this.getVal(left, 0, fieldName), this.getVal(right, 0, fieldName)) <= 0 ? left : right;
                }
                else {
                    current = left[0][fieldName] < left[0][fieldName] ? left : right;
                }
            }
            else {
                current = left.length > 0 ? left : right;
            }
            result.push(current.shift());
        }
        return result;
    };
    DataUtil.getVal = function (array, index, field) {
        return field ? this.getObject(field, array[index]) : array[index];
    };
    DataUtil.toLowerCase = function (val) {
        return val ? typeof val === 'string' ? val.toLowerCase() : val.toString() : (val === 0 || val === false) ? val.toString() : '';
    };
    DataUtil.callAdaptorFunction = function (adaptor, fnName, param1, param2) {
        if (fnName in adaptor) {
            var res = adaptor[fnName](param1, param2);
            if (!this.fnOperators.isnull(res)) {
                param1 = res;
            }
        }
        return param1;
    };
    DataUtil.isPlainObject = function (obj) {
        return (!!obj) && (obj.constructor === Object);
    };
    DataUtil.isCors = function () {
        var xhr = null;
        var request = 'XMLHttpRequest';
        try {
            xhr = new window[request]();
        }
        catch (e) {
        }
        return !!xhr && ('withCredentials' in xhr);
    };
    DataUtil.getGuid = function (prefix) {
        var hexs = '0123456789abcdef';
        var rand;
        return (prefix || '') + '00000000-0000-4000-0000-000000000000'.replace(/0/g, function (val, i) {
            if ('crypto' in window && 'getRandomValues' in crypto) {
                var arr = new Uint8Array(1);
                window.crypto.getRandomValues(arr);
                rand = arr[0] % 16 | 0;
            }
            else {
                rand = Math.random() * 16 | 0;
            }
            return hexs[i === 19 ? rand & 0x3 | 0x8 : rand];
        });
    };
    DataUtil.isNull = function (val) {
        return val === undefined || val === null;
    };
    DataUtil.getItemFromComparer = function (array, field, comparer) {
        var keyVal;
        var current;
        var key;
        var i = 0;
        var castRequired = typeof DataUtil.getVal(array, 0, field) === 'string';
        if (array.length) {
            while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(keyVal) && i < array.length) {
                keyVal = DataUtil.getVal(array, i, field);
                key = array[i++];
            }
        }
        for (; i < array.length; i++) {
            current = DataUtil.getVal(array, i, field);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(current)) {
                continue;
            }
            if (castRequired) {
                keyVal = +keyVal;
                current = +current;
            }
            if (comparer(keyVal, current) > 0) {
                keyVal = current;
                key = array[i];
            }
        }
        return key;
    };
    DataUtil.distinct = function (json, fieldName, requiresCompleteRecord) {
        requiresCompleteRecord = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(requiresCompleteRecord) ? false : requiresCompleteRecord;
        var result = [];
        var val;
        var tmp = {};
        json.forEach(function (data, index) {
            val = DataUtil.getVal(json, index, fieldName);
            if (!(val in tmp)) {
                result.push(!requiresCompleteRecord ? val : json[index]);
                tmp[val] = 1;
            }
        });
        return result;
    };
    return DataUtil;
}());

DataUtil.serverTimezoneOffset = 0;
DataUtil.throwError = function (error) {
    try {
        throw new Error(error);
    }
    catch (e) {
        throw e.message + '\n' + e.stack;
    }
};
DataUtil.aggregates = {
    sum: function (ds, field) {
        var result = 0;
        var val;
        var castRequired = typeof DataUtil.getVal(ds, 0, field) !== 'number';
        for (var i = 0; i < ds.length; i++) {
            val = DataUtil.getVal(ds, i, field);
            if (!isNaN(val) && val !== null) {
                if (castRequired) {
                    val = +val;
                }
                result += val;
            }
        }
        return result;
    },
    average: function (ds, field) {
        return DataUtil.aggregates.sum(ds, field) / ds.length;
    },
    min: function (ds, field) {
        var comparer;
        if (typeof field === 'function') {
            comparer = field;
            field = null;
        }
        return DataUtil.getObject(field, DataUtil.getItemFromComparer(ds, field, comparer || DataUtil.fnAscending));
    },
    max: function (ds, field) {
        var comparer;
        if (typeof field === 'function') {
            comparer = field;
            field = null;
        }
        return DataUtil.getObject(field, DataUtil.getItemFromComparer(ds, field, comparer || DataUtil.fnDescending));
    },
    truecount: function (ds, field) {
        return new __WEBPACK_IMPORTED_MODULE_1__manager__["a" /* DataManager */](ds).executeLocal(new __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */]().where(field, 'equal', true, true)).length;
    },
    falsecount: function (ds, field) {
        return new __WEBPACK_IMPORTED_MODULE_1__manager__["a" /* DataManager */](ds).executeLocal(new __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */]().where(field, 'equal', false, true)).length;
    },
    count: function (ds, field) {
        return ds.length;
    }
};
DataUtil.operatorSymbols = {
    '<': 'lessthan',
    '>': 'greaterthan',
    '<=': 'lessthanorequal',
    '>=': 'greaterthanorequal',
    '==': 'equal',
    '!=': 'notequal',
    '*=': 'contains',
    '$=': 'endswith',
    '^=': 'startswith'
};
DataUtil.odBiOperator = {
    '<': ' lt ',
    '>': ' gt ',
    '<=': ' le ',
    '>=': ' ge ',
    '==': ' eq ',
    '!=': ' ne ',
    'lessthan': ' lt ',
    'lessthanorequal': ' le ',
    'greaterthan': ' gt ',
    'greaterthanorequal': ' ge ',
    'equal': ' eq ',
    'notequal': ' ne '
};
DataUtil.odUniOperator = {
    '$=': 'endswith',
    '^=': 'startswith',
    '*=': 'substringof',
    'endswith': 'endswith',
    'startswith': 'startswith',
    'contains': 'substringof'
};
DataUtil.odv4UniOperator = {
    '$=': 'endswith',
    '^=': 'startswith',
    '*=': 'contains',
    'endswith': 'endswith',
    'startswith': 'startswith',
    'contains': 'contains'
};
DataUtil.fnOperators = {
    equal: function (actual, expected, ignoreCase) {
        if (ignoreCase) {
            return DataUtil.toLowerCase(actual) === DataUtil.toLowerCase(expected);
        }
        return actual === expected;
    },
    notequal: function (actual, expected, ignoreCase) {
        return !DataUtil.fnOperators.equal(actual, expected, ignoreCase);
    },
    lessthan: function (actual, expected, ignoreCase) {
        if (ignoreCase) {
            return DataUtil.toLowerCase(actual) < DataUtil.toLowerCase(expected);
        }
        return actual < expected;
    },
    greaterthan: function (actual, expected, ignoreCase) {
        if (ignoreCase) {
            return DataUtil.toLowerCase(actual) > DataUtil.toLowerCase(expected);
        }
        return actual > expected;
    },
    lessthanorequal: function (actual, expected, ignoreCase) {
        if (ignoreCase) {
            return DataUtil.toLowerCase(actual) <= DataUtil.toLowerCase(expected);
        }
        return actual <= expected;
    },
    greaterthanorequal: function (actual, expected, ignoreCase) {
        if (ignoreCase) {
            return DataUtil.toLowerCase(actual) >= DataUtil.toLowerCase(expected);
        }
        return actual >= expected;
    },
    contains: function (actual, expected, ignoreCase) {
        if (ignoreCase) {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(actual) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(expected) &&
                DataUtil.toLowerCase(actual).indexOf(DataUtil.toLowerCase(expected)) !== -1;
        }
        return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(actual) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(expected) &&
            actual.toString().indexOf(expected) !== -1;
    },
    notnull: function (actual) {
        return actual !== null;
    },
    isnull: function (actual) {
        return actual === null;
    },
    startswith: function (actual, expected, ignoreCase) {
        if (ignoreCase) {
            return actual && expected && DataUtil.startsWith(actual.toLowerCase(), expected.toLowerCase());
        }
        return actual && expected && DataUtil.startsWith(actual, expected);
    },
    endswith: function (actual, expected, ignoreCase) {
        if (ignoreCase) {
            return actual && expected && DataUtil.endsWith(actual.toLowerCase(), expected.toLowerCase());
        }
        return actual && expected && DataUtil.endsWith(actual, expected);
    },
    processSymbols: function (operator) {
        var fnName = DataUtil.operatorSymbols[operator];
        if (fnName) {
            var fn = DataUtil.fnOperators[fnName];
            return fn;
        }
        return DataUtil.throwError('Query - Process Operator : Invalid operator');
    },
    processOperator: function (operator) {
        var fn = DataUtil.fnOperators[operator];
        if (fn) {
            return fn;
        }
        return DataUtil.fnOperators.processSymbols(operator);
    }
};
DataUtil.parse = {
    parseJson: function (jsonText) {
        if (typeof jsonText === 'string') {
            jsonText = JSON.parse(jsonText, DataUtil.parse.jsonReviver);
        }
        else if (jsonText instanceof Array) {
            DataUtil.parse.iterateAndReviveArray(jsonText);
        }
        else if (typeof jsonText === 'object') {
            DataUtil.parse.iterateAndReviveJson(jsonText);
        }
        return jsonText;
    },
    iterateAndReviveArray: function (array) {
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] === 'object') {
                DataUtil.parse.iterateAndReviveJson(array[i]);
            }
            else if (typeof array[i] === 'string' && !/^[\s]*\[|^[\s]*\{|\"/g.test(array[i])) {
                array[i] = DataUtil.parse.jsonReviver('', array[i]);
            }
            else {
                array[i] = DataUtil.parse.parseJson(array[i]);
            }
        }
    },
    iterateAndReviveJson: function (json) {
        var value;
        var keys = Object.keys(json);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var prop = keys_2[_i];
            if (DataUtil.startsWith(prop, '__')) {
                continue;
            }
            value = json[prop];
            if (typeof value === 'object') {
                if (value instanceof Array) {
                    DataUtil.parse.iterateAndReviveArray(value);
                }
                else if (value) {
                    DataUtil.parse.iterateAndReviveJson(value);
                }
            }
            else {
                json[prop] = DataUtil.parse.jsonReviver(json[prop], value);
            }
        }
    },
    jsonReviver: function (field, value) {
        var dupValue = value;
        if (typeof value === 'string') {
            var ms = /^\/Date\(([+-]?[0-9]+)([+-][0-9]{4})?\)\/$/.exec(value);
            if (ms) {
                return DataUtil.parse.jsonReplacer({ value: new Date(parseInt(ms[1], 10)) }, false).value;
            }
            else if (/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*){1})([zZ]|([+\-])(\d\d):?(\d\d))?$/.test(value)) {
                var arr = dupValue.split(/[^0-9]/);
                value = DataUtil.parse.jsonReplacer({
                    value: new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) - 1, parseInt(arr[2], 10), parseInt(arr[3], 10), parseInt(arr[4], 10), parseInt(arr[5], 10))
                }, false).value;
            }
        }
        return value;
    },
    isJson: function (jsonData) {
        if (typeof jsonData[0] === 'string') {
            return jsonData;
        }
        return DataUtil.parse.parseJson(jsonData);
    },
    isGuid: function (value) {
        var regex = /[A-Fa-f0-9]{8}(?:-[A-Fa-f0-9]{4}){3}-[A-Fa-f0-9]{12}/i;
        var match = regex.exec(value);
        return match != null;
    },
    replacer: function (value, stringify) {
        if (DataUtil.isPlainObject(value)) {
            return DataUtil.parse.jsonReplacer(value, stringify);
        }
        if (value instanceof Array) {
            return DataUtil.parse.arrayReplacer(value);
        }
        if (value instanceof Date) {
            return DataUtil.parse.jsonReplacer({ val: value }, stringify).val;
        }
        return value;
    },
    jsonReplacer: function (val, stringify) {
        if (stringify === void 0) { stringify = true; }
        var value;
        var keys = Object.keys(val);
        for (var _i = 0, keys_3 = keys; _i < keys_3.length; _i++) {
            var prop = keys_3[_i];
            value = val[prop];
            if (!(value instanceof Date)) {
                continue;
            }
            var d = value;
            var unixstamp = +d - (d.getTimezoneOffset() * 60000);
            val[prop] = new Date(unixstamp - (DataUtil.serverTimezoneOffset * 3600000));
            if (stringify) {
                val[prop] = val[prop].toJSON();
            }
        }
        return val;
    },
    arrayReplacer: function (val) {
        for (var i = 0; i < val.length; i++) {
            if (DataUtil.isPlainObject(val[i])) {
                val[i] = DataUtil.parse.jsonReplacer(val[i]);
            }
            else if (val[i] instanceof Date) {
                val[i] = DataUtil.parse.jsonReplacer({ date: val[i] }).date;
            }
        }
        return val;
    }
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);

var Observer = (function () {
    function Observer(context) {
        this.boundedEvents = {};
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(context)) {
            return;
        }
        this.context = context;
    }
    ;
    Observer.prototype.on = function (property, handler, context) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(handler)) {
            return;
        }
        var cntxt = context || this.context;
        if (this.notExist(property)) {
            this.boundedEvents[property] = [{ handler: handler, context: cntxt }];
            return;
        }
        if (!this.isHandlerPresent(this.boundedEvents[property], handler)) {
            this.boundedEvents[property].push({ handler: handler, context: cntxt });
        }
    };
    Observer.prototype.off = function (property, handler) {
        if (this.notExist(property)) {
            return;
        }
        var curObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(property, this.boundedEvents);
        if (handler) {
            for (var i = 0; i < curObject.length; i++) {
                if (handler === curObject[i].handler) {
                    curObject.splice(i, 1);
                    break;
                }
            }
        }
        else {
            delete this.boundedEvents[property];
        }
    };
    Observer.prototype.notify = function (property, argument) {
        if (this.notExist(property)) {
            return;
        }
        if (argument) {
            argument.name = property;
        }
        var curObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(property, this.boundedEvents).slice(0);
        for (var _i = 0, curObject_1 = curObject; _i < curObject_1.length; _i++) {
            var cur = curObject_1[_i];
            cur.handler.call(cur.context, argument);
        }
    };
    Observer.prototype.destroy = function () {
        this.boundedEvents = this.context = undefined;
    };
    Observer.prototype.notExist = function (prop) {
        return this.boundedEvents.hasOwnProperty(prop) === false;
    };
    Observer.prototype.isHandlerPresent = function (boundedEvents, handler) {
        for (var _i = 0, boundedEvents_1 = boundedEvents; _i < boundedEvents_1.length; _i++) {
            var cur = boundedEvents_1[_i];
            if (cur.handler === handler) {
                return true;
            }
        }
        return false;
    };
    return Observer;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = calculateRelativeBasedPosition;
/* harmony export (immutable) */ __webpack_exports__["a"] = calculatePosition;
var elementRect;
var element;
var parentDocument;
function calculateRelativeBasedPosition(anchor, element) {
    var anchorPos = { left: 0, top: 0 };
    var tempAnchor = anchor;
    if (!anchor || !element) {
        return anchorPos;
    }
    while (element.offsetParent && anchor && element.offsetParent !== anchor) {
        anchorPos.left += anchor.offsetLeft;
        anchorPos.top += anchor.offsetTop;
        anchor = anchor.offsetParent;
    }
    anchor = tempAnchor;
    while (element.offsetParent && anchor && element.offsetParent !== anchor) {
        anchorPos.left -= anchor.scrollLeft;
        anchorPos.top -= anchor.scrollTop;
        anchor = anchor.parentElement;
    }
    return anchorPos;
}
function calculatePosition(currentElement, positionX, positionY) {
    if (!currentElement) {
        return { left: 0, top: 0 };
    }
    if (!positionX) {
        positionX = 'left';
    }
    if (!positionY) {
        positionY = 'top';
    }
    parentDocument = currentElement.ownerDocument;
    element = currentElement;
    var pos = { left: 0, top: 0 };
    return updatePosition(positionX.toLowerCase(), positionY.toLowerCase(), pos);
}
function setPosx(value, pos) {
    pos.left = value;
}
function setPosy(value, pos) {
    pos.top = value;
}
function updatePosition(posX, posY, pos) {
    elementRect = element.getBoundingClientRect();
    switch (posY + posX) {
        case 'topcenter':
            setPosx(getElementHCenter(), pos);
            setPosy(getElementTop(), pos);
            break;
        case 'topright':
            setPosx(getElementRight(), pos);
            setPosy(getElementTop(), pos);
            break;
        case 'centercenter':
            setPosx(getElementHCenter(), pos);
            setPosy(getElementVCenter(), pos);
            break;
        case 'centerright':
            setPosx(getElementRight(), pos);
            setPosy(getElementVCenter(), pos);
            break;
        case 'centerleft':
            setPosx(getElementLeft(), pos);
            setPosy(getElementVCenter(), pos);
            break;
        case 'bottomcenter':
            setPosx(getElementHCenter(), pos);
            setPosy(getElementBottom(), pos);
            break;
        case 'bottomright':
            setPosx(getElementRight(), pos);
            setPosy(getElementBottom(), pos);
            break;
        case 'bottomleft':
            setPosx(getElementLeft(), pos);
            setPosy(getElementBottom(), pos);
            break;
        default:
        case 'topleft':
            setPosx(getElementLeft(), pos);
            setPosy(getElementTop(), pos);
            break;
    }
    return pos;
}
function getBodyScrollTop() {
    return parentDocument.documentElement.scrollTop || parentDocument.body.scrollTop;
}
function getBodyScrollLeft() {
    return parentDocument.documentElement.scrollLeft || parentDocument.body.scrollLeft;
}
function getElementBottom() {
    return elementRect.bottom + getBodyScrollTop();
}
function getElementVCenter() {
    return getElementTop() + (elementRect.height / 2);
}
function getElementTop() {
    return elementRect.top + getBodyScrollTop();
}
function getElementLeft() {
    return elementRect.left + getBodyScrollLeft();
}
function getElementRight() {
    return elementRect.right + getBodyScrollLeft();
}
function getElementHCenter() {
    return getElementLeft() + (elementRect.width / 2);
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapperInitialize;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTextNode;
/* unused harmony export createCheckBox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);


function wrapperInitialize(tag, type, element, WRAPPER) {
    if (element.tagName === tag) {
        var ejInstance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])('ej2_instances', element);
        var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('input', { attrs: { 'type': type } });
        var props = ['change', 'cssClass', 'label', 'labelPosition'];
        var wrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])(tag, {
            className: WRAPPER, attrs: { 'role': type, 'aria-checked': 'false' }
        });
        for (var index = 0, len = element.attributes.length; index < len; index++) {
            if (props.indexOf(element.attributes[index].nodeName) === -1) {
                input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
            }
        }
        element.parentNode.insertBefore(input, element);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(element);
        element = input;
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(element);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])('ej2_instances', ejInstance, element);
    }
    return element;
}
function getTextNode(element) {
    var node;
    var childnode = element.childNodes;
    for (var i = 0; i < childnode.length; i++) {
        node = childnode[i];
        if (node.nodeType === 3) {
            return node;
        }
    }
    return null;
}
function createCheckBox(enableRipple, options) {
    if (enableRipple === void 0) { enableRipple = false; }
    if (options === void 0) { options = {}; }
    var wrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: 'e-checkbox-wrapper' });
    if (options.enableRtl) {
        wrapper.classList.add('e-rtl');
    }
    if (enableRipple) {
        var rippleSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: 'e-ripple-container' });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["rippleEffect"])(rippleSpan, { isCenterRipple: true, duration: 400 });
        wrapper.appendChild(rippleSpan);
    }
    var frameSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: 'e-frame e-icons' });
    if (options.checked) {
        frameSpan.classList.add('e-check');
    }
    wrapper.appendChild(frameSpan);
    if (options.label) {
        var labelSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: 'e-label', innerHTML: options.label });
        wrapper.appendChild(labelSpan);
    }
    return wrapper;
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = fit;
/* harmony export (immutable) */ __webpack_exports__["a"] = isCollide;
/* harmony export (immutable) */ __webpack_exports__["c"] = flip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position__ = __webpack_require__(15);

var parentDocument;
var targetContainer;
function fit(element, viewPortElement, axis, position) {
    if (viewPortElement === void 0) { viewPortElement = null; }
    if (axis === void 0) { axis = { X: false, Y: false }; }
    if (!axis.Y && !axis.X) {
        return { left: 0, top: 0 };
    }
    var elemData = element.getBoundingClientRect();
    targetContainer = viewPortElement;
    parentDocument = element.ownerDocument;
    if (!position) {
        position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(element, 'left', 'top');
    }
    if (axis.X) {
        var containerWidth = targetContainer ? getTargetContainerWidth() : getViewPortWidth();
        var containerLeft = ContainerLeft();
        var containerRight = ContainerRight();
        var overLeft = containerLeft - position.left;
        var overRight = position.left + elemData.width - containerRight;
        if (elemData.width > containerWidth) {
            if (overLeft > 0 && overRight <= 0) {
                position.left = containerRight - elemData.width;
            }
            else if (overRight > 0 && overLeft <= 0) {
                position.left = containerLeft;
            }
            else {
                position.left = overLeft > overRight ? (containerRight - elemData.width) : containerLeft;
            }
        }
        else if (overLeft > 0) {
            position.left += overLeft;
        }
        else if (overRight > 0) {
            position.left -= overRight;
        }
    }
    if (axis.Y) {
        var containerHeight = targetContainer ? getTargetContainerHeight() : getViewPortHeight();
        var containerTop = ContainerTop();
        var containerBottom = ContainerBottom();
        var overTop = containerTop - position.top;
        var overBottom = position.top + elemData.height - containerBottom;
        if (elemData.height > containerHeight) {
            if (overTop > 0 && overBottom <= 0) {
                position.top = containerBottom - elemData.height;
            }
            else if (overBottom > 0 && overTop <= 0) {
                position.top = containerTop;
            }
            else {
                position.top = overTop > overBottom ? (containerBottom - elemData.height) : containerTop;
            }
        }
        else if (overTop > 0) {
            position.top += overTop;
        }
        else if (overBottom > 0) {
            position.top -= overBottom;
        }
    }
    return position;
}
function isCollide(element, viewPortElement, x, y) {
    if (viewPortElement === void 0) { viewPortElement = null; }
    var elemOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(element, 'left', 'top');
    if (x) {
        elemOffset.left = x;
    }
    if (y) {
        elemOffset.top = y;
    }
    var data = [];
    targetContainer = viewPortElement;
    parentDocument = element.ownerDocument;
    var elementRect = element.getBoundingClientRect();
    var top = elemOffset.top;
    var left = elemOffset.left;
    var right = elemOffset.left + elementRect.width;
    var bottom = elemOffset.top + elementRect.height;
    var topData = '';
    var leftData = '';
    var yAxis = topCollideCheck(top, bottom);
    var xAxis = leftCollideCheck(left, right);
    if (yAxis.topSide) {
        data.push('top');
    }
    if (xAxis.rightSide) {
        data.push('right');
    }
    if (xAxis.leftSide) {
        data.push('left');
    }
    if (yAxis.bottomSide) {
        data.push('bottom');
    }
    return data;
}
function flip(element, target, offsetX, offsetY, positionX, positionY, viewPortElement, axis) {
    if (viewPortElement === void 0) { viewPortElement = null; }
    if (axis === void 0) { axis = { X: true, Y: true }; }
    if (!target || !element || !positionX || !positionY || (!axis.X && !axis.Y)) {
        return;
    }
    var tEdge = { TL: null,
        TR: null,
        BL: null,
        BR: null };
    var eEdge = {
        TL: null,
        TR: null,
        BL: null,
        BR: null
    };
    var elementRect = element.getBoundingClientRect();
    var pos = {
        posX: positionX, posY: positionY, offsetX: offsetX, offsetY: offsetY, position: { left: 0, top: 0 }
    };
    targetContainer = viewPortElement;
    parentDocument = target.ownerDocument;
    updateElementData(target, tEdge, pos);
    setPosition(eEdge, pos, elementRect);
    if (axis.X) {
        leftFlip(target, eEdge, tEdge, pos, elementRect, true);
    }
    if (axis.Y && tEdge.TL.top > -1) {
        topFlip(target, eEdge, tEdge, pos, elementRect, true);
    }
    setPopup(element, pos);
}
function setPopup(element, pos) {
    var left = 0;
    var top = 0;
    if (element.offsetParent != null
        && (getComputedStyle(element.offsetParent).position === 'absolute' ||
            getComputedStyle(element.offsetParent).position === 'relative')) {
        var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(element.offsetParent, 'left', 'top');
        left = data.left;
        top = data.top;
    }
    element.style.top = (pos.position.top + pos.offsetY - (top)) + 'px';
    element.style.left = (pos.position.left + pos.offsetX - (left)) + 'px';
}
function updateElementData(target, edge, pos) {
    pos.position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(target, pos.posX, pos.posY);
    edge.TL = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(target, 'left', 'top');
    edge.TR = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(target, 'right', 'top');
    edge.BR = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(target, 'left', 'bottom');
    edge.BL = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(target, 'right', 'bottom');
}
function setPosition(eStatus, pos, elementRect) {
    eStatus.TL = { top: pos.position.top + pos.offsetY, left: pos.position.left + pos.offsetX };
    eStatus.TR = { top: eStatus.TL.top, left: eStatus.TL.left + elementRect.width };
    eStatus.BL = { top: eStatus.TL.top + elementRect.height,
        left: eStatus.TL.left };
    eStatus.BR = { top: eStatus.TL.top + elementRect.height,
        left: eStatus.TL.left + elementRect.width };
}
function leftCollideCheck(left, right) {
    var leftSide = false;
    var rightSide = false;
    if (((left - getBodyScrollLeft()) < ContainerLeft())) {
        leftSide = true;
    }
    if (right > ContainerRight()) {
        rightSide = true;
    }
    return { leftSide: leftSide, rightSide: rightSide };
}
function leftFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
    var collideSide = leftCollideCheck(edge.TL.left, edge.TR.left);
    if ((tEdge.TL.left - getBodyScrollLeft()) <= ContainerLeft()) {
        collideSide.leftSide = false;
    }
    if (tEdge.TR.left >= ContainerRight()) {
        collideSide.rightSide = false;
    }
    if ((collideSide.leftSide && !collideSide.rightSide) || (!collideSide.leftSide && collideSide.rightSide)) {
        if (pos.posX === 'right') {
            pos.posX = 'left';
        }
        else {
            pos.posX = 'right';
        }
        pos.offsetX = pos.offsetX + elementRect.width;
        pos.offsetX = -1 * pos.offsetX;
        pos.position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(target, pos.posX, pos.posY);
        setPosition(edge, pos, elementRect);
        if (deepCheck) {
            leftFlip(target, edge, tEdge, pos, elementRect, false);
        }
    }
}
function topFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
    var collideSide = topCollideCheck(edge.TL.top, edge.BL.top);
    if ((tEdge.TL.top - getBodyScrollTop()) <= ContainerTop()) {
        collideSide.topSide = false;
    }
    if (tEdge.BL.top >= ContainerBottom()) {
        collideSide.bottomSide = false;
    }
    if ((collideSide.topSide && !collideSide.bottomSide) || (!collideSide.topSide && collideSide.bottomSide)) {
        if (pos.posY === 'top') {
            pos.posY = 'bottom';
        }
        else {
            pos.posY = 'top';
        }
        pos.offsetY = pos.offsetY + elementRect.height;
        pos.offsetY = -1 * pos.offsetY;
        pos.position = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__position__["a" /* calculatePosition */])(target, pos.posX, pos.posY);
        setPosition(edge, pos, elementRect);
        if (deepCheck) {
            topFlip(target, edge, tEdge, pos, elementRect, false);
        }
    }
}
function topCollideCheck(top, bottom) {
    var topSide = false;
    var bottomSide = false;
    if ((top - getBodyScrollTop()) < ContainerTop()) {
        topSide = true;
    }
    if (bottom > ContainerBottom()) {
        bottomSide = true;
    }
    return { topSide: topSide, bottomSide: bottomSide };
}
function getTargetContainerWidth() {
    return targetContainer.getBoundingClientRect().width;
}
function getTargetContainerHeight() {
    return targetContainer.getBoundingClientRect().height;
}
function getTargetContainerLeft() {
    return targetContainer.getBoundingClientRect().left;
}
function getTargetContainerTop() {
    return targetContainer.getBoundingClientRect().top;
}
function ContainerTop() {
    if (targetContainer) {
        return getTargetContainerTop();
    }
    return 0;
}
function ContainerLeft() {
    if (targetContainer) {
        return getTargetContainerLeft();
    }
    return 0;
}
function ContainerRight() {
    if (targetContainer) {
        return (getBodyScrollLeft() + getTargetContainerLeft() + getTargetContainerWidth());
    }
    return (getBodyScrollLeft() + getViewPortWidth());
}
function ContainerBottom() {
    if (targetContainer) {
        return (getBodyScrollTop() + getTargetContainerTop() + getTargetContainerHeight());
    }
    return (getBodyScrollTop() + getViewPortHeight());
}
function getBodyScrollTop() {
    return parentDocument.documentElement.scrollTop || parentDocument.body.scrollTop;
}
function getBodyScrollLeft() {
    return parentDocument.documentElement.scrollLeft || parentDocument.body.scrollLeft;
}
function getViewPortHeight() {
    return window.innerHeight;
}
function getViewPortWidth() {
    return window.innerWidth;
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_position__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_collision__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CLASSNAMES = {
    ROOT: 'e-popup',
    RTL: 'e-rtl',
    OPEN: 'e-popup-open',
    CLOSE: 'e-popup-close'
};
var Popup = (function (_super) {
    __extends(Popup, _super);
    function Popup(element, options) {
        return _super.call(this, options, element) || this;
    }
    Popup.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setStyleAttribute"])(this.element, { 'width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(newProp.width) });
                    break;
                case 'height':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setStyleAttribute"])(this.element, { 'height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(newProp.height) });
                    break;
                case 'zIndex':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setStyleAttribute"])(this.element, { 'zIndex': newProp.zIndex });
                    break;
                case 'enableRtl':
                    this.setEnableRtl();
                    break;
                case 'position':
                case 'relateTo':
                    this.refreshPosition();
                    break;
                case 'offsetX':
                    var x = newProp.offsetX - oldProp.offsetX;
                    this.element.style.left = (parseInt(this.element.style.left, 10) + (x)).toString() + 'px';
                    break;
                case 'offsetY':
                    var y = newProp.offsetY - oldProp.offsetY;
                    this.element.style.top = (parseInt(this.element.style.top, 10) + (y)).toString() + 'px';
                    break;
                case 'content':
                    this.setContent();
                    break;
                case 'actionOnScroll':
                    if (newProp.actionOnScroll !== 'none') {
                        this.wireScrollEvents();
                    }
                    else {
                        this.unwireScrollEvents();
                    }
                    break;
            }
        }
    };
    Popup.prototype.getModuleName = function () {
        return 'popup';
    };
    Popup.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    Popup.prototype.destroy = function () {
        this.element.classList.remove(CLASSNAMES.ROOT, CLASSNAMES.RTL);
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    Popup.prototype.render = function () {
        this.element.classList.add(CLASSNAMES.ROOT);
        var styles = {};
        if (this.zIndex !== 1000) {
            styles.zIndex = this.zIndex;
        }
        if (this.width !== 'auto') {
            styles.width = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(this.width);
        }
        if (this.height !== 'auto') {
            styles.height = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(this.height);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setStyleAttribute"])(this.element, styles);
        this.setEnableRtl();
        this.setContent();
        this.wireEvents();
    };
    Popup.prototype.wireEvents = function () {
        if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(window, 'orientationchange', this.orientationOnChange, this);
        }
        if (this.actionOnScroll !== 'none') {
            this.wireScrollEvents();
        }
    };
    Popup.prototype.wireScrollEvents = function () {
        if (this.getRelateToElement()) {
            for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
                var parent_1 = _a[_i];
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(parent_1, 'scroll', this.scrollRefresh, this);
            }
        }
    };
    Popup.prototype.unwireEvents = function () {
        if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(window, 'orientationchange', this.orientationOnChange);
        }
        if (this.actionOnScroll !== 'none') {
            this.unwireScrollEvents();
        }
    };
    Popup.prototype.unwireScrollEvents = function () {
        if (this.getRelateToElement()) {
            for (var _i = 0, _a = this.getScrollableParent(this.getRelateToElement()); _i < _a.length; _i++) {
                var parent_2 = _a[_i];
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(parent_2, 'scroll', this.scrollRefresh);
            }
        }
    };
    Popup.prototype.getRelateToElement = function () {
        return ((typeof this.relateTo) === 'string') ?
            document.querySelector(this.relateTo) : this.relateTo;
    };
    Popup.prototype.scrollRefresh = function (e) {
        if (this.actionOnScroll === 'reposition') {
            if (!(this.element.offsetParent === e.target ||
                (this.element.offsetParent && this.element.offsetParent.tagName === 'BODY' &&
                    e.target.parentElement == null))) {
                this.refreshPosition();
            }
        }
        else if (this.actionOnScroll === 'hide') {
            this.hide();
        }
        if (this.actionOnScroll !== 'none') {
            if (this.getRelateToElement()) {
                var targetVisible = this.isElementOnViewport(this.getRelateToElement(), e.target);
                if (!targetVisible && !this.targetInvisibleStatus) {
                    this.trigger('targetExitViewport');
                    this.targetInvisibleStatus = true;
                }
                else if (targetVisible) {
                    this.targetInvisibleStatus = false;
                }
            }
        }
    };
    Popup.prototype.isElementOnViewport = function (relateToElement, scrollElement) {
        var scrollParents = this.getScrollableParent(relateToElement);
        for (var parent_3 = 0; parent_3 < scrollParents.length; parent_3++) {
            if (this.isElementVisible(relateToElement, scrollParents[parent_3])) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    };
    Popup.prototype.isElementVisible = function (relateToElement, scrollElement) {
        var rect = relateToElement.getBoundingClientRect();
        if (!rect.height || !rect.width) {
            return false;
        }
        if (scrollElement.getBoundingClientRect) {
            var parent_4 = scrollElement.getBoundingClientRect();
            return !(rect.bottom < parent_4.top) &&
                (!(rect.bottom > parent_4.bottom) &&
                    (!(rect.right > parent_4.right) &&
                        !(rect.left < parent_4.left)));
        }
        else {
            var win = window;
            var windowView = {
                top: win.scrollY,
                left: win.scrollX,
                right: win.scrollX + win.outerWidth,
                bottom: win.scrollY + win.outerHeight
            };
            var off = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_position__["a" /* calculatePosition */])(relateToElement);
            var ele = {
                top: off.top,
                left: off.left,
                right: off.left + rect.width,
                bottom: off.top + rect.height
            };
            var elementView = {
                top: windowView.bottom - ele.top,
                left: windowView.right - ele.left,
                bottom: ele.bottom - windowView.top,
                right: ele.right - windowView.left
            };
            return elementView.top > 0
                && elementView.left > 0
                && elementView.right > 0
                && elementView.bottom > 0;
        }
    };
    Popup.prototype.preRender = function () {
    };
    Popup.prototype.setEnableRtl = function () {
        this.reposition();
        this.enableRtl ? this.element.classList.add(CLASSNAMES.RTL) : this.element.classList.remove(CLASSNAMES.RTL);
    };
    Popup.prototype.setContent = function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.content)) {
            this.element.innerHTML = '';
            if (typeof (this.content) === 'string') {
                this.element.textContent = this.content;
            }
            else {
                this.element.appendChild(this.content);
            }
        }
    };
    Popup.prototype.orientationOnChange = function () {
        var _this = this;
        setTimeout(function () {
            _this.refreshPosition();
        }, 200);
    };
    Popup.prototype.refreshPosition = function () {
        this.reposition();
        this.checkCollision();
    };
    Popup.prototype.reposition = function () {
        var pos;
        var relateToElement = this.getRelateToElement();
        if (typeof this.position.X === 'number' && typeof this.position.Y === 'number') {
            pos = { left: this.position.X, top: this.position.Y };
        }
        else if (relateToElement) {
            var display = this.element.style.display;
            this.element.style.display = 'block';
            pos = this.getAnchorPosition(relateToElement, this.element, this.position, this.offsetX, this.offsetY);
            this.element.style.display = display;
        }
        else {
            pos = { left: 0, top: 0 };
        }
        this.element.style.left = pos.left + 'px';
        this.element.style.top = pos.top + 'px';
    };
    Popup.prototype.getAnchorPosition = function (anchorEle, ele, position, offsetX, offsetY) {
        var eleRect = ele.getBoundingClientRect();
        var anchorRect = anchorEle.getBoundingClientRect();
        var anchor = anchorEle;
        var anchorPos = { left: 0, top: 0 };
        if (ele.offsetParent && ele.offsetParent.tagName === 'BODY' && anchorEle.tagName === 'BODY') {
            anchorPos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_position__["a" /* calculatePosition */])(anchorEle);
        }
        else {
            anchorPos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_position__["b" /* calculateRelativeBasedPosition */])(anchor, ele);
        }
        switch (position.X) {
            default:
            case 'left':
                break;
            case 'center':
                if (this.targetType === 'container') {
                    anchorPos.left += (anchorRect.width / 2 - eleRect.width / 2);
                }
                else {
                    anchorPos.left += (anchorRect.width / 2);
                }
                break;
            case 'right':
                if (this.targetType === 'container') {
                    anchorPos.left += (anchorRect.width - eleRect.width);
                }
                else {
                    anchorPos.left += (anchorRect.width);
                }
                break;
        }
        switch (position.Y) {
            default:
            case 'top':
                break;
            case 'center':
                if (this.targetType === 'container') {
                    anchorPos.top += (anchorRect.height / 2 - eleRect.height / 2);
                }
                else {
                    anchorPos.top += (anchorRect.height / 2);
                }
                break;
            case 'bottom':
                if (this.targetType === 'container') {
                    anchorPos.top += (anchorRect.height - eleRect.height);
                }
                else {
                    anchorPos.top += (anchorRect.height);
                }
                break;
        }
        anchorPos.left += offsetX;
        anchorPos.top += offsetY;
        return anchorPos;
    };
    Popup.prototype.callFlip = function (param) {
        var relateToElement = this.getRelateToElement();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_collision__["c" /* flip */])(this.element, relateToElement, this.offsetX, this.offsetY, this.position.X, this.position.Y, this.viewPortElement, param);
    };
    Popup.prototype.callFit = function (param) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_collision__["a" /* isCollide */])(this.element, this.viewPortElement).length !== 0) {
            var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_collision__["b" /* fit */])(this.element, this.viewPortElement, param);
            this.element.style.left = data.left + 'px';
            this.element.style.top = data.top + 'px';
        }
    };
    Popup.prototype.checkCollision = function () {
        var horz = this.collision.X;
        var vert = this.collision.Y;
        if (horz === 'none' && vert === 'none') {
            return;
        }
        if (horz === 'flip' && vert === 'flip') {
            this.callFlip({ X: true, Y: true });
        }
        else if (horz === 'fit' && vert === 'fit') {
            this.callFit({ X: true, Y: true });
        }
        else {
            if (horz === 'fit') {
                this.callFit({ X: true, Y: false });
            }
            else if (vert === 'fit') {
                this.callFit({ X: false, Y: true });
            }
            if (horz === 'flip') {
                this.callFlip({ X: true, Y: false });
            }
            else if (vert === 'flip') {
                this.callFlip({ Y: true, X: false });
            }
        }
    };
    Popup.prototype.show = function (animationOptions) {
        var _this = this;
        animationOptions = (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(animationOptions) && typeof animationOptions === 'object') ?
            animationOptions : this.showAnimation;
        if (this.collision.X !== 'none' || this.collision.Y !== 'none') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], CLASSNAMES.CLOSE);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], CLASSNAMES.OPEN);
            this.checkCollision();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], CLASSNAMES.OPEN);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], CLASSNAMES.CLOSE);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(animationOptions)) {
            animationOptions.begin = function () {
                if (!_this.isDestroyed) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([_this.element], CLASSNAMES.CLOSE);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([_this.element], CLASSNAMES.OPEN);
                }
            };
            animationOptions.end = function () {
                if (!_this.isDestroyed) {
                    _this.trigger('open');
                }
            };
            new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Animation"](animationOptions).animate(this.element);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], CLASSNAMES.CLOSE);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], CLASSNAMES.OPEN);
            this.trigger('open');
        }
    };
    Popup.prototype.hide = function (animationOptions) {
        var _this = this;
        animationOptions = (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(animationOptions) && typeof animationOptions === 'object') ?
            animationOptions : this.hideAnimation;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(animationOptions)) {
            animationOptions.end = function () {
                if (!_this.isDestroyed) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([_this.element], CLASSNAMES.OPEN);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([_this.element], CLASSNAMES.CLOSE);
                    _this.trigger('close');
                }
            };
            new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Animation"](animationOptions).animate(this.element);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], CLASSNAMES.OPEN);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], CLASSNAMES.CLOSE);
            this.trigger('close');
        }
    };
    Popup.prototype.getScrollableParent = function (element) {
        var eleStyle = getComputedStyle(element);
        var scrollParents = [];
        var overflowRegex = /(auto|scroll)/;
        var parent = element.parentElement;
        while (parent && parent.tagName !== 'HTML') {
            var parentStyle = getComputedStyle(parent);
            if (!(eleStyle.position === 'absolute' && parentStyle.position === 'static')
                && overflowRegex.test(parentStyle.overflow + parentStyle.overflowY + parentStyle.overflowX)) {
                scrollParents.push(parent);
            }
            parent = parent.parentElement;
        }
        scrollParents.push(document);
        return scrollParents;
    };
    return Popup;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Component"]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('auto')
], Popup.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('auto')
], Popup.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], Popup.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('container')
], Popup.prototype, "targetType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], Popup.prototype, "viewPortElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])({ X: 'none', Y: 'none' })
], Popup.prototype, "collision", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(document.body)
], Popup.prototype, "relateTo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])({ X: 'left', Y: 'top' })
], Popup.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(0)
], Popup.prototype, "offsetX", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(0)
], Popup.prototype, "offsetY", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(1000)
], Popup.prototype, "zIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Popup.prototype, "enableRtl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('reposition')
], Popup.prototype, "actionOnScroll", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], Popup.prototype, "showAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], Popup.prototype, "hideAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Popup.prototype, "open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Popup.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Popup.prototype, "targetExitViewport", void 0);
Popup = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], Popup);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export basicPatterns */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parser_base__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intl_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(1);



var abbreviateRegexGlobal = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|K|ccc|G+|z+/gi;
var standalone = 'stand-alone';
var weekdayKey = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var basicPatterns = ['short', 'medium', 'long', 'full'];
var timeSetter = {
    m: 'getMinutes',
    h: 'getHours',
    H: 'getHours',
    s: 'getSeconds',
    d: 'getDate',
};
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era'
};
var timeSeparator = 'timeSeparator';
var DateFormat = (function () {
    function DateFormat() {
    }
    DateFormat.dateFormat = function (culture, option, cldr) {
        var _this = this;
        var dependable = __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].getDependables(cldr, culture);
        var formatOptions = {};
        var resPattern = option.format || __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].getResultantPattern(option.skeleton, dependable.dateObject, option.type);
        formatOptions.dateSeperator = __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].getDateSeparator(dependable.dateObject);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(resPattern)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* throwError */])('Format options or type given must be invalid');
        }
        else {
            formatOptions.pattern = resPattern;
            formatOptions.numMapper = __WEBPACK_IMPORTED_MODULE_0__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_0__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr));
            var patternMatch = resPattern.match(abbreviateRegexGlobal) || [];
            for (var _i = 0, patternMatch_1 = patternMatch; _i < patternMatch_1.length; _i++) {
                var str = patternMatch_1[_i];
                var len = str.length;
                var char = str[0];
                if (char === 'K') {
                    char = 'h';
                }
                var charKey = datePartMatcher[char];
                switch (char) {
                    case 'E':
                    case 'c':
                        formatOptions.weekday = dependable.dateObject[__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].days][standalone][__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].monthIndex[len]];
                        break;
                    case 'M':
                    case 'L':
                        formatOptions.month = dependable.dateObject[__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].month][standalone][__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].monthIndex[len]];
                        break;
                    case 'a':
                        formatOptions.designator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dayPeriods.format.wide', dependable.dateObject);
                        break;
                    case 'G':
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        formatOptions.era = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('eras.' + eText, dependable.dateObject);
                        break;
                    case 'z':
                        formatOptions.timeZone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dates.timeZoneNames', dependable.parserObject);
                        break;
                }
            }
        }
        return function (value) {
            if (isNaN(value.getDate())) {
                return null;
            }
            return _this.intDateFormatter(value, formatOptions);
        };
    };
    DateFormat.intDateFormatter = function (value, options) {
        var pattern = options.pattern;
        var ret = '';
        var matches = pattern.match(__WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].dateParseRegex);
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var length_1 = match.length;
            var char = match[0];
            if (char === 'K') {
                char = 'h';
            }
            var curval = void 0;
            var isNumber = void 0;
            var processNumber = void 0;
            var curstr = '';
            switch (char) {
                case 'M':
                case 'L':
                    curval = value.getMonth() + 1;
                    if (length_1 > 2) {
                        ret += options.month[curval];
                    }
                    else {
                        isNumber = true;
                    }
                    break;
                case 'E':
                case 'c':
                    ret += options.weekday[weekdayKey[value.getDay()]];
                    break;
                case 'H':
                case 'h':
                case 'm':
                case 's':
                case 'd':
                    isNumber = true;
                    curval = value[timeSetter[char]]();
                    if (char === 'h') {
                        curval = curval % 12 || 12;
                    }
                    break;
                case 'y':
                    processNumber = true;
                    curstr += value.getFullYear();
                    if (length_1 === 2) {
                        curstr = curstr.substr(curstr.length - 2);
                    }
                    break;
                case 'a':
                    var desig = value.getHours() < 12 ? 'am' : 'pm';
                    ret += options.designator[desig];
                    break;
                case 'G':
                    var dec = value.getFullYear() < 0 ? 0 : 1;
                    ret += options.era[dec];
                    break;
                case '\'':
                    ret += (match === '\'\'') ? '\'' : match.replace(/\'/g, '');
                    break;
                case 'z':
                    var timezone = value.getTimezoneOffset();
                    var pattern_1 = (length_1 < 4) ? '+H;-H' : options.timeZone.hourFormat;
                    pattern_1 = pattern_1.replace(/:/g, options.numMapper.timeSeparator);
                    if (timezone === 0) {
                        ret += options.timeZone.gmtZeroFormat;
                    }
                    else {
                        processNumber = true;
                        curstr = this.getTimeZoneValue(timezone, pattern_1);
                    }
                    curstr = options.timeZone.gmtFormat.replace(/\{0\}/, curstr);
                    break;
                case ':':
                    ret += options.numMapper.numberSymbols[timeSeparator];
                    break;
                case '/':
                    ret += options.dateSeperator;
                    break;
                default:
                    ret += match;
            }
            if (isNumber) {
                processNumber = true;
                curstr = this.checkTwodigitNumber(curval, length_1);
            }
            if (processNumber) {
                ret += __WEBPACK_IMPORTED_MODULE_0__parser_base__["a" /* ParserBase */].convertValueParts(curstr, __WEBPACK_IMPORTED_MODULE_1__intl_base__["a" /* IntlBase */].latnParseRegex, options.numMapper.mapper);
            }
        }
        return ret;
    };
    DateFormat.checkTwodigitNumber = function (val, len) {
        var ret = val + '';
        if (len === 2 && ret.length !== 2) {
            return '0' + ret;
        }
        return ret;
    };
    DateFormat.getTimeZoneValue = function (tVal, pattern) {
        var _this = this;
        var splt = pattern.split(';');
        var curPattern = splt[tVal > 0 ? 1 : 0];
        var no = Math.abs(tVal);
        return curPattern = curPattern.replace(/HH?|mm/g, function (str) {
            var len = str.length;
            var ishour = str.indexOf('H') !== -1;
            return _this.checkTwodigitNumber(Math.floor(ishour ? (no / 60) : (no % 60)), len);
        });
    };
    return DateFormat;
}());



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internationalization__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intl_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parser_base__ = __webpack_require__(8);




var errorText = {
    'ms': 'minimumSignificantDigits',
    'ls': 'maximumSignificantDigits',
    'mf': 'minimumFractionDigits',
    'lf': 'maximumFractionDigits',
};
var integerError = 'minimumIntegerDigits';
var percentSign = 'percentSign';
var minusSign = 'minusSign';
var spaceRegex = /\s/;
var mapper = ['infinity', 'nan', 'group', 'decimal'];
var infinity = 'infinity';
var nan = 'nan';
var NumberFormat = (function () {
    function NumberFormat() {
    }
    NumberFormat.numberFormatter = function (culture, option, cldr) {
        var _this = this;
        var fOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])({}, option);
        var cOptions = {};
        var dOptions = {};
        var symbolPattern;
        var dependable = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getDependables(cldr, culture, true);
        dOptions.numberMapper = __WEBPACK_IMPORTED_MODULE_3__parser_base__["a" /* ParserBase */].getNumberMapper(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_3__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr), true);
        dOptions.currencySymbol = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getCurrencySymbol(dependable.numericObject, fOptions.currency || __WEBPACK_IMPORTED_MODULE_1__internationalization__["e" /* defaultCurrencyCode */]);
        dOptions.percentSymbol = dOptions.numberMapper.numberSymbols[percentSign];
        dOptions.minusSymbol = dOptions.numberMapper.numberSymbols[minusSign];
        var symbols = dOptions.numberMapper.numberSymbols;
        if ((option.format) && !(__WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].formatRegex.test(option.format))) {
            cOptions = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].customFormat(option.format, dOptions, dependable.numericObject);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(fOptions, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getProperNumericSkeleton(option.format || 'N'));
            fOptions.isCurrency = fOptions.type === 'currency';
            fOptions.isPercent = fOptions.type === 'percent';
            symbolPattern = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getSymbolPattern(fOptions.type, dOptions.numberMapper.numberSystem, dependable.numericObject, fOptions.isAccount);
            fOptions.groupOne = this.checkValueRange(fOptions.maximumSignificantDigits, fOptions.minimumSignificantDigits, true);
            this.checkValueRange(fOptions.maximumFractionDigits, fOptions.minimumFractionDigits, false, true);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.fractionDigits)) {
                fOptions.minimumFractionDigits = fOptions.maximumFractionDigits = fOptions.fractionDigits;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.useGrouping)) {
                fOptions.useGrouping = true;
            }
            if (fOptions.isCurrency) {
                symbolPattern = symbolPattern.replace(/\u00A4/g, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].defaultCurrency);
            }
            var split = symbolPattern.split(';');
            cOptions.nData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[1] || '-' + split[0], true, dOptions.currencySymbol);
            cOptions.pData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[0], false, dOptions.currencySymbol);
            if (fOptions.useGrouping) {
                fOptions.groupSeparator = symbols[mapper[2]];
                fOptions.groupData = this.getGroupingDetails(split[0]);
            }
            var minFrac = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.minimumFractionDigits);
            if (minFrac) {
                fOptions.minimumFractionDigits = cOptions.nData.minimumFraction;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(fOptions.maximumFractionDigits)) {
                var mval = cOptions.nData.maximumFraction;
                fOptions.maximumFractionDigits = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(mval) && fOptions.isPercent ? 0 : mval;
            }
            var mfrac = fOptions.minimumFractionDigits;
            var lfrac = fOptions.maximumFractionDigits;
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(mfrac) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(lfrac)) {
                if (mfrac > lfrac) {
                    fOptions.maximumFractionDigits = mfrac;
                }
            }
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions.nData, fOptions);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(cOptions.pData, fOptions);
        return function (value) {
            if (isNaN(value)) {
                return symbols[mapper[1]];
            }
            else if (!isFinite(value)) {
                return symbols[mapper[0]];
            }
            return _this.intNumberFormatter(value, cOptions, dOptions);
        };
    };
    NumberFormat.getGroupingDetails = function (pattern) {
        var ret = {};
        var match = pattern.match(__WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].negativeDataRegex);
        if (match && match[4]) {
            var pattern_1 = match[4];
            var p = pattern_1.lastIndexOf(',');
            if (p !== -1) {
                var temp = pattern_1.split('.')[0];
                ret.primary = (temp.length - p) - 1;
                var s = pattern_1.lastIndexOf(',', p - 1);
                if (s !== -1) {
                    ret.secondary = p - 1 - s;
                }
            }
        }
        return ret;
    };
    NumberFormat.checkValueRange = function (val1, val2, checkbothExist, isFraction) {
        var decide = isFraction ? 'f' : 's';
        var dint = 0;
        var str1 = errorText['l' + decide];
        var str2 = errorText['m' + decide];
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(val1)) {
            this.checkRange(val1, str1, isFraction);
            dint++;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(val2)) {
            this.checkRange(val2, str2, isFraction);
            dint++;
        }
        if (dint === 2) {
            if (val1 < val2) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])(str2 + 'specified must be less than the' + str1);
            }
            else {
                return true;
            }
        }
        else if (checkbothExist && dint === 1) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])('Both' + str2 + 'and' + str2 + 'must be present');
        }
        return false;
    };
    NumberFormat.checkRange = function (val, text, isFraction) {
        var range = isFraction ? [0, 20] : [1, 21];
        if (val < range[0] || val > range[1]) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])(text + 'value must be within the range' + range[0] + 'to' + range[1]);
        }
    };
    NumberFormat.intNumberFormatter = function (value, fOptions, dOptions) {
        var curData;
        if (value < 0) {
            value = value * -1;
            curData = fOptions.nData;
        }
        else if (value === 0) {
            curData = fOptions.zeroData || fOptions.pData;
        }
        else {
            curData = fOptions.pData;
        }
        var fValue = '';
        if (curData.isPercent) {
            value = value * 100;
        }
        if (curData.groupOne) {
            fValue = this.processSignificantDigits(value, curData.minimumSignificantDigits, curData.maximumSignificantDigits);
        }
        else {
            fValue = this.processFraction(value, curData.minimumFractionDigits, curData.maximumFractionDigits);
            if (curData.minimumIntegerDigits) {
                fValue = this.processMinimumIntegers(fValue, curData.minimumIntegerDigits);
            }
        }
        fValue = fValue.replace('.', dOptions.numberMapper.numberSymbols[mapper[3]]);
        if (curData.useGrouping) {
            fValue = this.groupNumbers(fValue, curData.groupData.primary, curData.groupSeparator || ',', dOptions.numberMapper.numberSymbols[mapper[3]] || '.', curData.groupData.secondary);
        }
        fValue = __WEBPACK_IMPORTED_MODULE_3__parser_base__["a" /* ParserBase */].convertValueParts(fValue, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].latnParseRegex, dOptions.numberMapper.mapper);
        return curData.nlead + fValue + curData.nend;
    };
    NumberFormat.processSignificantDigits = function (value, min, max) {
        var temp = value + '';
        var tn;
        var length = temp.length;
        if (length < min) {
            return value.toPrecision(min);
        }
        else {
            temp = value.toPrecision(max);
            tn = +temp;
            return tn + '';
        }
    };
    NumberFormat.groupNumbers = function (val, level1, sep, decimalSymbol, level2) {
        var flag = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(level2) && level2 !== 0;
        var split = val.split(decimalSymbol);
        var prefix = split[0];
        var length = prefix.length;
        var str = '';
        while (length > level1) {
            str = prefix.slice(length - level1, length) + (str.length ?
                (sep + str) : '');
            length -= level1;
            if (flag) {
                level1 = level2;
                flag = false;
            }
        }
        split[0] = prefix.slice(0, length) + (str.length ? sep : '') + str;
        return split.join(decimalSymbol);
    };
    NumberFormat.processFraction = function (value, min, max) {
        var temp = (value + '').split('.')[1];
        var length = temp ? temp.length : 0;
        if (min && length < min) {
            var ret = '';
            if (length === 0) {
                ret = value.toFixed(min);
            }
            else {
                ret += value;
                for (var j = 0; j < min - length; j++) {
                    ret += '0';
                }
                return ret;
            }
            return value.toFixed(min);
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(max) && (length > max || max === 0)) {
            return value.toFixed(max);
        }
        return value + '';
    };
    NumberFormat.processMinimumIntegers = function (value, min) {
        var temp = value.split('.');
        var lead = temp[0];
        var len = lead.length;
        if (len < min) {
            for (var i = 0; i < min - len; i++) {
                lead = '0' + lead;
            }
            temp[0] = lead;
        }
        return temp.join('.');
    };
    return NumberFormat;
}());



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);

var MODULE_SUFFIX = 'Module';
var ModuleLoader = (function () {
    function ModuleLoader(parent) {
        this.loadedModules = [];
        this.parent = parent;
    }
    ;
    ModuleLoader.prototype.inject = function (requiredModules, moduleList) {
        var reqLength = requiredModules.length;
        if (reqLength === 0) {
            this.clean();
            return;
        }
        if (this.loadedModules.length) {
            this.clearUnusedModule(requiredModules);
        }
        for (var i = 0; i < reqLength; i++) {
            var modl = requiredModules[i];
            for (var _i = 0, moduleList_1 = moduleList; _i < moduleList_1.length; _i++) {
                var module = moduleList_1[_i];
                var modName = modl.member;
                if (module.prototype.getModuleName() === modl.member && !this.isModuleLoaded(modName)) {
                    var moduleObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* createInstance */])(module, modl.args);
                    var memberName = this.getMemberName(modName);
                    if (modl.isProperty) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(memberName, module, this.parent);
                    }
                    else {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(memberName, moduleObject, this.parent);
                    }
                    var loadedModule = modl;
                    loadedModule.member = memberName;
                    this.loadedModules.push(loadedModule);
                }
            }
        }
    };
    ModuleLoader.prototype.clean = function () {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var modules = _a[_i];
            if (!modules.isProperty) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(modules.member, this.parent).destroy();
            }
        }
        this.loadedModules = [];
    };
    ModuleLoader.prototype.clearUnusedModule = function (moduleList) {
        var _this = this;
        var usedModules = moduleList.map(function (arg) { return _this.getMemberName(arg.member); });
        var removableModule = this.loadedModules.filter(function (module) {
            return usedModules.indexOf(module.member) === -1;
        });
        for (var _i = 0, removableModule_1 = removableModule; _i < removableModule_1.length; _i++) {
            var mod = removableModule_1[_i];
            if (!mod.isProperty) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(mod.member, this.parent).destroy();
            }
            this.loadedModules.splice(this.loadedModules.indexOf(mod), 1);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* deleteObject */])(this.parent, mod.member);
        }
    };
    ModuleLoader.prototype.getMemberName = function (name) {
        return name[0].toLowerCase() + name.substring(1) + MODULE_SUFFIX;
    };
    ModuleLoader.prototype.isModuleLoaded = function (modName) {
        for (var _i = 0, _a = this.loadedModules; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.member === this.getMemberName(modName)) {
                return true;
            }
        }
        return false;
    };
    return ModuleLoader;
}());



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Adaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JsonAdaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UrlAdaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ODataAdaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ODataV4Adaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return WebApiAdaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return WebMethodAdaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RemoteSaveAdaptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CacheAdaptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__query__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Adaptor = (function () {
    function Adaptor(ds) {
        this.options = {
            from: 'table',
            requestType: 'json',
            sortBy: 'sorted',
            select: 'select',
            skip: 'skip',
            group: 'group',
            take: 'take',
            search: 'search',
            count: 'requiresCounts',
            where: 'where',
            aggregates: 'aggregates'
        };
        this.type = Adaptor;
        this.dataSource = ds;
        this.pvt = {};
    }
    Adaptor.prototype.processResponse = function (data, ds, query, xhr) {
        return data;
    };
    return Adaptor;
}());

var JsonAdaptor = (function (_super) {
    __extends(JsonAdaptor, _super);
    function JsonAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JsonAdaptor.prototype.processQuery = function (dataManager, query) {
        var result = dataManager.dataSource.json.slice(0);
        var count = result.length;
        var countFlg = true;
        var ret;
        var key;
        var agg = {};
        for (var i = 0; i < query.queries.length; i++) {
            key = query.queries[i];
            ret = this[key.fn].call(this, result, key.e, query);
            if (key.fn === 'onAggregates') {
                agg[key.e.field + ' - ' + key.e.type] = ret;
            }
            else {
                result = ret !== undefined ? ret : result;
            }
            if (key.fn === 'onPage' || key.fn === 'onSkip' || key.fn === 'onTake' || key.fn === 'onRange') {
                countFlg = false;
            }
            if (countFlg) {
                count = result.length;
            }
        }
        if (query.requiresCounts) {
            result = {
                result: result,
                count: count,
                aggregates: agg
            };
        }
        return result;
    };
    JsonAdaptor.prototype.batchRequest = function (dm, changes, e) {
        var i;
        for (i = 0; i < changes.addedRecords.length; i++) {
            this.insert(dm, changes.addedRecords[i]);
        }
        for (i = 0; i < changes.changedRecords.length; i++) {
            this.update(dm, e.key, changes.changedRecords[i]);
        }
        for (i = 0; i < changes.deletedRecords.length; i++) {
            this.remove(dm, e.key, changes.deletedRecords[i]);
        }
        return changes;
    };
    JsonAdaptor.prototype.onWhere = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.filter(function (obj) {
            if (e) {
                return e.validate(obj);
            }
        });
    };
    JsonAdaptor.prototype.onAggregates = function (ds, e) {
        var fn = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].aggregates[e.type];
        if (!ds || !fn || ds.length === 0) {
            return null;
        }
        return fn(ds, e.field);
    };
    JsonAdaptor.prototype.onSearch = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        if (e.fieldNames.length === 0) {
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getFieldList(ds[0], e.fieldNames);
        }
        return ds.filter(function (obj) {
            for (var j = 0; j < e.fieldNames.length; j++) {
                if (e.comparer.call(obj, __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getObject(e.fieldNames[j], obj), e.searchKey, e.ignoreCase)) {
                    return true;
                }
            }
            return false;
        });
    };
    JsonAdaptor.prototype.onSortBy = function (ds, e, query) {
        if (!ds || !ds.length) {
            return ds;
        }
        var fnCompare;
        var field = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(e.fieldName, query);
        if (!field) {
            return ds.sort(e.comparer);
        }
        if (field instanceof Array) {
            field = field.slice(0);
            for (var i = field.length - 1; i >= 0; i--) {
                if (!field[i]) {
                    continue;
                }
                fnCompare = e.comparer;
                if (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].endsWith(field[i], ' desc')) {
                    fnCompare = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].fnSort('descending');
                    field[i] = field[i].replace(' desc', '');
                }
                ds = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].sort(ds, field[i], fnCompare);
            }
            return ds;
        }
        return __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].sort(ds, field, e.comparer);
    };
    JsonAdaptor.prototype.onGroup = function (ds, e, query) {
        if (!ds || !ds.length) {
            return ds;
        }
        var aggQuery = __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */].filterQueries(query.queries, 'onAggregates');
        var agg = [];
        if (aggQuery.length) {
            var tmp = void 0;
            for (var i = 0; i < aggQuery.length; i++) {
                tmp = aggQuery[i].e;
                agg.push({ type: tmp.type, field: __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(tmp.field, query) });
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].group(ds, __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(e.fieldName, query), agg, null, null, e.comparer);
    };
    JsonAdaptor.prototype.onPage = function (ds, e, query) {
        var size = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(e.pageSize, query);
        var start = (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(e.pageIndex, query) - 1) * size;
        var end = start + size;
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.slice(start, end);
    };
    JsonAdaptor.prototype.onRange = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.slice(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(e.start), __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(e.end));
    };
    JsonAdaptor.prototype.onTake = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.slice(0, __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(e.nos));
    };
    JsonAdaptor.prototype.onSkip = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return ds.slice(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(e.nos));
    };
    JsonAdaptor.prototype.onSelect = function (ds, e) {
        if (!ds || !ds.length) {
            return ds;
        }
        return __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].select(ds, __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(e.fieldNames));
    };
    JsonAdaptor.prototype.insert = function (dm, data, tableName, query, position) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(position)) {
            return dm.dataSource.json.push(data);
        }
        else {
            return dm.dataSource.json.splice(position, 0, data);
        }
    };
    JsonAdaptor.prototype.remove = function (dm, keyField, value, tableName) {
        var ds = dm.dataSource.json;
        var i;
        if (typeof value === 'object') {
            value = value[keyField];
        }
        for (i = 0; i < ds.length; i++) {
            if (ds[i][keyField] === value) {
                break;
            }
        }
        return i !== ds.length ? ds.splice(i, 1) : null;
    };
    JsonAdaptor.prototype.update = function (dm, keyField, value, tableName) {
        var ds = dm.dataSource.json;
        var i;
        var key = value[keyField];
        for (i = 0; i < ds.length; i++) {
            if (ds[i][keyField] === key) {
                break;
            }
        }
        return i < ds.length ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["merge"])(ds[i], value) : null;
    };
    return JsonAdaptor;
}(Adaptor));

var UrlAdaptor = (function (_super) {
    __extends(UrlAdaptor, _super);
    function UrlAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UrlAdaptor.prototype.processQuery = function (dm, query, hierarchyFilters) {
        var queries = this.getQueryRequest(query);
        var singles = __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */].filterQueryLists(query.queries, ['onSelect', 'onPage', 'onSkip', 'onTake', 'onRange']);
        var params = query.params;
        var url = dm.dataSource.url;
        var temp;
        var skip;
        var take = null;
        var options = this.options;
        var request = { sorts: [], groups: [], filters: [], searches: [], aggregates: [] };
        if ('onPage' in singles) {
            temp = singles.onPage;
            skip = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(temp.pageIndex, query);
            take = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(temp.pageSize, query);
            skip = (skip - 1) * take;
        }
        else if ('onRange' in singles) {
            temp = singles.onRange;
            skip = temp.start;
            take = temp.end - temp.start;
        }
        for (var i = 0; i < queries.sorts.length; i++) {
            temp = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(queries.sorts[i].e.fieldName, query);
            request.sorts.push(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onEachSort', { name: temp, direction: queries.sorts[i].e.direction }, query));
        }
        if (hierarchyFilters) {
            temp = this.getFiltersFrom(hierarchyFilters, query);
            if (temp) {
                request.filters.push(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onEachWhere', temp.toJson(), query));
            }
        }
        for (var i = 0; i < queries.filters.length; i++) {
            request.filters.push(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onEachWhere', queries.filters[i].e.toJson(), query));
            var keys_1 = typeof request.filters[i] === 'object' ? Object.keys(request.filters[i]) : [];
            for (var _i = 0, keys_2 = keys_1; _i < keys_2.length; _i++) {
                var prop = keys_2[_i];
                if (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].isNull((request)[prop])) {
                    delete request[prop];
                }
            }
        }
        for (var i = 0; i < queries.searches.length; i++) {
            temp = queries.searches[i].e;
            request.searches.push(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onEachSearch', {
                fields: temp.fieldNames,
                operator: temp.operator,
                key: temp.searchKey,
                ignoreCase: temp.ignoreCase
            }, query));
        }
        for (var i = 0; i < queries.groups.length; i++) {
            request.groups.push(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(queries.groups[i].e.fieldName, query));
        }
        for (var i = 0; i < queries.aggregates.length; i++) {
            temp = queries.aggregates[i].e;
            request.aggregates.push({ type: temp.type, field: __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(temp.field, query) });
        }
        var req = {};
        this.getRequestQuery(options, query, singles, request, req);
        __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'addParams', { dm: dm, query: query, params: params, reqParams: req });
        var keys = Object.keys(req);
        for (var _a = 0, keys_3 = keys; _a < keys_3.length; _a++) {
            var prop = keys_3[_a];
            if (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].isNull(req[prop]) || req[prop] === '' || req[prop].length === 0) {
                delete req[prop];
            }
        }
        if (!(options.skip in req && options.take in req) && take !== null) {
            req[options.skip] = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onSkip', skip, query);
            req[options.take] = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onTake', take, query);
        }
        var p = this.pvt;
        this.pvt = {};
        if (this.options.requestType === 'json') {
            return {
                data: JSON.stringify(req),
                url: url,
                pvtData: p,
                type: 'POST',
                contentType: 'application/json; charset=utf-8'
            };
        }
        temp = this.convertToQueryString(req, query, dm);
        temp = (dm.dataSource.url.indexOf('?') !== -1 ? '&' : '/') + temp;
        return {
            type: 'GET', url: temp.length ? url.replace(/\/*$/, temp) : url, pvtData: p
        };
    };
    UrlAdaptor.prototype.getRequestQuery = function (options, query, singles, request, request1) {
        var param = 'param';
        var req = request1;
        req[options.from] = query.fromTable;
        if (options.expand) {
            req[options.expand] = query.expands;
        }
        req[options.select] = 'onSelect' in singles ?
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onSelect', __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(singles.onSelect.fieldNames, query), query) : '';
        req[options.count] = query.requiresCounts ? __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onCount', query.requiresCounts, query) : '';
        req[options.search] = request.searches.length ? __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onSearch', request.searches, query) : '';
        req[options.skip] = 'onSkip' in singles ?
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onSkip', __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(singles.onSkip.nos, query), query) : '';
        req[options.take] = 'onTake' in singles ?
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onTake', __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getValue(singles.onTake.nos, query), query) : '';
        req[options.where] = request.filters.length || request.searches.length ?
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onWhere', request.filters, query) : '';
        req[options.sortBy] = request.sorts.length ? __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onSortBy', request.sorts, query) : '';
        req[options.group] = request.groups.length ? __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onGroup', request.groups, query) : '';
        req[options.aggregates] = request.aggregates.length ?
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].callAdaptorFunction(this, 'onAggregates', request.aggregates, query) : '';
        req[param] = [];
    };
    UrlAdaptor.prototype.convertToQueryString = function (request, query, dm) {
        return '';
    };
    UrlAdaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        var requests = request;
        var pvt = requests.pvtData || {};
        var groupDs = data.groupDs;
        if (xhr && xhr.getResponseHeader('Content-Type') &&
            xhr.getResponseHeader('Content-Type').indexOf('xml') !== -1) {
            return (query.requiresCounts ? { result: [], count: 0 } : []);
        }
        var d = JSON.parse(requests.data);
        if (d && d.action === 'batch' && data.addedRecords) {
            changes.addedRecords = data.addedRecords;
            return changes;
        }
        if (data.d) {
            data = data.d;
        }
        var args = {};
        if ('count' in data) {
            args.count = data.count;
        }
        args.result = data.result ? data.result : data;
        this.getAggregateResult(pvt, data, args, groupDs);
        return __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].isNull(args.count) ? args.result : { result: args.result, count: args.count, aggregates: args.aggregates };
    };
    UrlAdaptor.prototype.onGroup = function (e) {
        this.pvt.groups = e;
        return e;
    };
    UrlAdaptor.prototype.onAggregates = function (e) {
        this.pvt.aggregates = e;
    };
    UrlAdaptor.prototype.batchRequest = function (dm, changes, e) {
        var url;
        var key;
        return {
            type: 'POST',
            url: dm.dataSource.batchUrl || dm.dataSource.crudUrl || dm.dataSource.removeUrl || dm.dataSource.url,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify({
                changed: changes.changedRecords,
                added: changes.addedRecords,
                deleted: changes.deletedRecords,
                action: 'batch',
                table: e[url],
                key: e[key]
            })
        };
    };
    UrlAdaptor.prototype.beforeSend = function (dm, request) {
    };
    UrlAdaptor.prototype.insert = function (dm, data, tableName) {
        return {
            url: dm.dataSource.insertUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify({
                value: data,
                table: tableName,
                action: 'insert'
            })
        };
    };
    UrlAdaptor.prototype.remove = function (dm, keyField, value, tableName) {
        return {
            type: 'POST',
            url: dm.dataSource.removeUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify({
                key: value,
                keyColumn: keyField,
                table: tableName,
                action: 'remove'
            })
        };
    };
    UrlAdaptor.prototype.update = function (dm, keyField, value, tableName) {
        return {
            type: 'POST',
            url: dm.dataSource.updateUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            data: JSON.stringify({
                value: value,
                action: 'update',
                keyColumn: keyField,
                key: value[keyField],
                table: tableName
            })
        };
    };
    UrlAdaptor.prototype.getFiltersFrom = function (data, query) {
        var key = query.fKey;
        var value;
        var prop = key;
        var pKey = query.key;
        var predicats = [];
        if (typeof data[0] !== 'object') {
            prop = null;
        }
        for (var i = 0; i < data.length; i++) {
            if (typeof data[0] === 'object') {
                value = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getObject(pKey || prop, data[i]);
            }
            else {
                value = data[i];
            }
            predicats.push(new __WEBPACK_IMPORTED_MODULE_2__query__["b" /* Predicate */](key, 'equal', value));
        }
        return __WEBPACK_IMPORTED_MODULE_2__query__["b" /* Predicate */].or(predicats);
    };
    UrlAdaptor.prototype.getAggregateResult = function (pvt, data, args, groupDs) {
        var pData = data;
        if (data && data.result) {
            pData = data.result;
        }
        if (pvt && pvt.aggregates && pvt.aggregates.length) {
            var agg = pvt.aggregates;
            var fn = void 0;
            var aggregateData = pData;
            var res = {};
            if (data.aggregate) {
                aggregateData = data.aggregate;
            }
            for (var i = 0; i < agg.length; i++) {
                fn = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].aggregates[agg[i].type];
                if (fn) {
                    res[agg[i].field + ' - ' + agg[i].type] = fn(aggregateData, agg[i].field);
                }
            }
            args.aggregates = res;
        }
        if (pvt && pvt.groups && pvt.groups.length) {
            var groups = pvt.groups;
            for (var i = 0; i < groups.length; i++) {
                var level = null;
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(groupDs)) {
                    groupDs = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].group(groupDs, groups[i]);
                }
                pData = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].group(pData, groups[i], pvt.aggregates, level, groupDs);
            }
            args.result = pData;
        }
        return args;
    };
    UrlAdaptor.prototype.getQueryRequest = function (query) {
        var req = { sorts: [], groups: [], filters: [], searches: [], aggregates: [] };
        req.sorts = __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */].filterQueries(query.queries, 'onSortBy');
        req.groups = __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */].filterQueries(query.queries, 'onGroup');
        req.filters = __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */].filterQueries(query.queries, 'onWhere');
        req.searches = __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */].filterQueries(query.queries, 'onSearch');
        req.aggregates = __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */].filterQueries(query.queries, 'onAggregates');
        return req;
    };
    UrlAdaptor.prototype.addParams = function (options) {
        var req = options.reqParams;
        if (options.params.length) {
            req.params = {};
        }
        for (var _i = 0, _a = options.params; _i < _a.length; _i++) {
            var tmp = _a[_i];
            if (req[tmp.key]) {
                throw new Error('Query() - addParams: Custom Param is conflicting other request arguments');
            }
            req[tmp.key] = tmp.value;
            if (tmp.fn) {
                req[tmp.key] = tmp.fn.call(options.query, tmp.key, options.query, options.dm);
            }
            req.params[tmp.key] = req[tmp.key];
        }
    };
    return UrlAdaptor;
}(Adaptor));

var ODataAdaptor = (function (_super) {
    __extends(ODataAdaptor, _super);
    function ODataAdaptor() {
        var _this = _super.call(this) || this;
        _this.options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, _this.options, {
            requestType: 'get',
            accept: 'application/json;odata=light;q=1,application/json;odata=verbose;q=0.5',
            multipartAccept: 'multipart/mixed',
            sortBy: '$orderby',
            select: '$select',
            skip: '$skip',
            take: '$top',
            count: '$inlinecount',
            where: '$filter',
            expand: '$expand',
            batch: '$batch',
            changeSet: '--changeset_',
            batchPre: 'batch_',
            contentId: 'Content-Id: ',
            batchContent: 'Content-Type: multipart/mixed; boundary=',
            changeSetContent: 'Content-Type: application/http\nContent-Transfer-Encoding: binary ',
            batchChangeSetContentType: 'Content-Type: application/json; charset=utf-8 '
        });
        _this.getModuleName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])('getModulename', _this);
        return _this;
    }
    ODataAdaptor.prototype.onPredicate = function (predicate, query, requiresCast) {
        var returnValue = '';
        var operator;
        var guid;
        var val = predicate.value;
        var type = typeof val;
        var field = predicate.field ? ODataAdaptor.getField(predicate.field) : null;
        if (val instanceof Date) {
            val = 'datetime\'' + __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.replacer(val) + '\'';
        }
        if (type === 'string') {
            val = '\'' + val + '\'';
            if (requiresCast) {
                field = 'cast(' + field + ', \'Edm.String\')';
            }
            if (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.isGuid(val)) {
                guid = 'guid';
            }
            if (predicate.ignoreCase) {
                if (!guid) {
                    field = 'tolower(' + field + ')';
                }
                val = val.toLowerCase();
            }
        }
        operator = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].odBiOperator[predicate.operator];
        if (operator) {
            returnValue += field;
            returnValue += operator;
            if (guid) {
                returnValue += guid;
            }
            return returnValue + val;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.getModuleName)) {
            if (this.getModuleName() === 'ODataV4Adaptor') {
                operator = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].odv4UniOperator[predicate.operator];
            }
        }
        else {
            operator = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].odUniOperator[predicate.operator];
        }
        if (operator === 'substringof') {
            var temp = val;
            val = field;
            field = temp;
        }
        returnValue += operator + '(';
        returnValue += field + ',';
        if (guid) {
            returnValue += guid;
        }
        returnValue += val + ')';
        return returnValue;
    };
    ODataAdaptor.prototype.onComplexPredicate = function (predicate, query, requiresCast) {
        var res = [];
        for (var i = 0; i < predicate.predicates.length; i++) {
            res.push('(' + this.onEachWhere(predicate.predicates[i], query, requiresCast) + ')');
        }
        return res.join(' ' + predicate.condition + ' ');
    };
    ODataAdaptor.prototype.onEachWhere = function (filter, query, requiresCast) {
        return filter.isComplex ? this.onComplexPredicate(filter, query, requiresCast) : this.onPredicate(filter, query, requiresCast);
    };
    ODataAdaptor.prototype.onWhere = function (filters) {
        if (this.pvt.search) {
            filters.push(this.onEachWhere(this.pvt.search, null, true));
        }
        return filters.join(' and ');
    };
    ODataAdaptor.prototype.onEachSearch = function (e) {
        if (e.fields && e.fields.length === 0) {
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].throwError('Query() - Search : oData search requires list of field names to search');
        }
        var filter = this.pvt.search || [];
        for (var i = 0; i < e.fields.length; i++) {
            filter.push(new __WEBPACK_IMPORTED_MODULE_2__query__["b" /* Predicate */](e.fields[i], e.operator, e.key, e.ignoreCase));
        }
        this.pvt.search = filter;
    };
    ODataAdaptor.prototype.onSearch = function (e) {
        this.pvt.search = __WEBPACK_IMPORTED_MODULE_2__query__["b" /* Predicate */].or(this.pvt.search);
        return '';
    };
    ODataAdaptor.prototype.onEachSort = function (e) {
        var res = [];
        if (e.name instanceof Array) {
            for (var i = 0; i < e.name.length; i++) {
                res.push(ODataAdaptor.getField(e.name[i]) + (e.direction === 'descending' ? ' desc' : ''));
            }
        }
        else {
            res.push(ODataAdaptor.getField(e.name) + (e.direction === 'descending' ? ' desc' : ''));
        }
        return res.join(',');
    };
    ODataAdaptor.prototype.onSortBy = function (e) {
        return e.reverse().join(',');
    };
    ODataAdaptor.prototype.onGroup = function (e) {
        this.pvt.groups = e;
        return [];
    };
    ODataAdaptor.prototype.onSelect = function (e) {
        for (var i = 0; i < e.length; i++) {
            e[i] = ODataAdaptor.getField(e[i]);
        }
        return e.join(',');
    };
    ODataAdaptor.prototype.onAggregates = function (e) {
        this.pvt.aggregates = e;
        return '';
    };
    ODataAdaptor.prototype.onCount = function (e) {
        return e === true ? 'allpages' : '';
    };
    ODataAdaptor.prototype.beforeSend = function (dm, request, settings) {
        if (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].endsWith(settings.url, this.options.batch) && settings.type.toLowerCase() === 'post') {
            request.setRequestHeader('Accept', this.options.multipartAccept);
            request.setRequestHeader('DataServiceVersion', '2.0');
            request.overrideMimeType('text/plain; charset=x-user-defined');
        }
        else {
            request.setRequestHeader('Accept', this.options.accept);
        }
        request.setRequestHeader('DataServiceVersion', '2.0');
        request.setRequestHeader('MaxDataServiceVersion', '2.0');
    };
    ODataAdaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        var pvtData = 'pvtData';
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(data.d)) {
            var dataCopy = (query && query.requiresCounts) ? data.d.results : data.d;
            var metaData = '__metadata';
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(dataCopy)) {
                for (var i = 0; i < dataCopy.length; i++) {
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(dataCopy[i][metaData])) {
                        delete dataCopy[i][metaData];
                    }
                }
            }
        }
        var pvt = request && request[pvtData];
        var emptyAndBatch = this.processBatchResponse(data, query, xhr, request, changes);
        if (emptyAndBatch) {
            return emptyAndBatch;
        }
        var versionCheck = xhr && request.getResponseHeader('DataServiceVersion');
        var count = null;
        var version = (versionCheck && parseInt(versionCheck, 10)) || 2;
        if (query && query.requiresCounts) {
            var oDataCount = '__count';
            if (data[oDataCount] || data['odata.count']) {
                count = data[oDataCount] || data['odata.count'];
            }
            if (data.d) {
                data = data.d;
            }
            if (data[oDataCount] || data['odata.count']) {
                count = data[oDataCount] || data['odata.count'];
            }
        }
        if (version === 3 && data.value) {
            data = data.value;
        }
        if (data.d) {
            data = data.d;
        }
        if (version < 3 && data.results) {
            data = data.results;
        }
        var args = {};
        args.count = count;
        args.result = data;
        this.getAggregateResult(pvt, data, args);
        return __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].isNull(count) ? args.result : { result: args.result, count: args.count, aggregates: args.aggregates };
    };
    ODataAdaptor.prototype.convertToQueryString = function (request, query, dm) {
        var res = [];
        var table = 'table';
        var tableName = request[table] || '';
        var format = '$format';
        delete request[table];
        if (dm.dataSource.requiresFormat) {
            request[format] = 'json';
        }
        var keys = Object.keys(request);
        for (var _i = 0, keys_4 = keys; _i < keys_4.length; _i++) {
            var prop = keys_4[_i];
            res.push(prop + '=' + request[prop]);
        }
        res = res.join('&');
        if (dm.dataSource.url && dm.dataSource.url.indexOf('?') !== -1 && !tableName) {
            return res;
        }
        return res.length ? tableName + '?' + res : tableName || '';
    };
    ODataAdaptor.prototype.insert = function (dm, data, tableName) {
        return {
            url: dm.dataSource.url.replace(/\/*$/, tableName ? '/' + tableName : ''),
            data: JSON.stringify(data)
        };
    };
    ODataAdaptor.prototype.remove = function (dm, keyField, value, tableName) {
        return {
            type: 'DELETE',
            url: dm.dataSource.url.replace(/\/*$/, tableName ? '/' + tableName : '') + '(' + value + ')'
        };
    };
    ODataAdaptor.prototype.update = function (dm, keyField, value, tableName) {
        return {
            type: 'PUT',
            url: dm.dataSource.url.replace(/\/*$/, tableName ? '/' + tableName : '') + '(' + value[keyField] + ')',
            data: JSON.stringify(value),
            accept: this.options.accept
        };
    };
    ODataAdaptor.prototype.batchRequest = function (dm, changes, e) {
        var initialGuid = e.guid = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getGuid(this.options.batchPre);
        var url = dm.dataSource.url.replace(/\/*$/, '/' + this.options.batch);
        var args = {
            url: e.url,
            key: e.key,
            cid: 1,
            cSet: __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getGuid(this.options.changeSet)
        };
        var req = '--' + initialGuid + '\n';
        req += 'Content-Type: multipart/mixed; boundary=' + args.cSet.replace('--', '') + '\n';
        this.pvt.changeSet = 0;
        req += this.generateInsertRequest(changes.addedRecords, args);
        req += this.generateUpdateRequest(changes.changedRecords, args);
        req += this.generateDeleteRequest(changes.deletedRecords, args);
        req += args.cSet + '--\n';
        req += '--' + initialGuid + '--';
        return {
            type: 'POST',
            url: url,
            dataType: 'json',
            contentType: 'multipart/mixed; charset=UTF-8;boundary=' + initialGuid,
            data: req
        };
    };
    ODataAdaptor.prototype.generateDeleteRequest = function (arr, e) {
        if (!arr) {
            return '';
        }
        var req = '';
        var stat = {
            'method': 'DELETE ',
            'url': function (data, i, key) { return '(' + data[i][key] + ')'; },
            'data': function (data, i) { return ''; }
        };
        req = this.generateBodyContent(arr, e, stat);
        return req + '\n';
    };
    ODataAdaptor.prototype.generateInsertRequest = function (arr, e) {
        if (!arr) {
            return '';
        }
        var req = '';
        var stat = {
            'method': 'POST ',
            'url': function (data, i, key) { return ''; },
            'data': function (data, i) { return JSON.stringify(data[i]) + '\n\n'; }
        };
        req = this.generateBodyContent(arr, e, stat);
        return req;
    };
    ODataAdaptor.prototype.generateUpdateRequest = function (arr, e) {
        if (!arr) {
            return '';
        }
        var req = '';
        var stat = {
            'method': 'PUT ',
            'url': function (data, i, key) { return '(' + data[i][key] + ')'; },
            'data': function (data, i) { return JSON.stringify(data[i]) + '\n\n'; }
        };
        req = this.generateBodyContent(arr, e, stat);
        return req;
    };
    ODataAdaptor.getField = function (prop) {
        return prop.replace(/\./g, '/');
    };
    ODataAdaptor.prototype.generateBodyContent = function (arr, e, stat) {
        var req = '';
        for (var i = 0; i < arr.length; i++) {
            req += '\n' + e.cSet + '\n';
            req += this.options.changeSetContent + '\n\n';
            req += stat.method;
            req += e.url + stat.url(arr, i, e.key) + ' HTTP/1.1\n';
            req += 'Accept: ' + this.options.accept + '\n';
            req += 'Content-Id: ' + this.pvt.changeSet++ + '\n';
            req += this.options.batchChangeSetContentType + '\n\n';
            req += stat.data(arr, i);
        }
        return req;
    };
    ODataAdaptor.prototype.processBatchResponse = function (data, query, xhr, request, changes) {
        if (xhr && xhr.getResponseHeader('Content-Type') && xhr.getResponseHeader('Content-Type').indexOf('xml') !== -1) {
            return (query.requiresCounts ? { result: [], count: 0 } : []);
        }
        if (request && this.options.batch && __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].endsWith(request.url, this.options.batch) && request.type.toLowerCase() === 'post') {
            var guid = xhr.getResponseHeader('Content-Type');
            var cIdx = void 0;
            var jsonObj = void 0;
            guid = guid.substring(guid.indexOf('=batchresponse') + 1);
            data = data.split(guid);
            if (data.length < 2) {
                return {};
            }
            data = data[1];
            var exVal = /(?:\bContent-Type.+boundary=)(changesetresponse.+)/i.exec(data);
            if (exVal) {
                data.replace(exVal[0], '');
            }
            var changeGuid = exVal ? exVal[1] : '';
            data = data.split(changeGuid);
            for (var i = data.length; i > -1; i--) {
                if (!/\bContent-ID:/i.test(data[i]) || !/\bHTTP.+201/.test(data[i])) {
                    continue;
                }
                cIdx = parseInt(/\bContent-ID: (\d+)/i.exec(data[i])[1], 10);
                if (changes.addedRecords[cIdx]) {
                    jsonObj = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.parseJson(/^\{.+\}/m.exec(data[i])[0]);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, changes.addedRecords[cIdx], this.processResponse(jsonObj));
                }
            }
            return changes;
        }
        return null;
    };
    return ODataAdaptor;
}(UrlAdaptor));

var ODataV4Adaptor = (function (_super) {
    __extends(ODataV4Adaptor, _super);
    function ODataV4Adaptor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, _this.options, {
            requestType: 'get',
            accept: 'application/json, text/javascript, */*; q=0.01',
            multipartAccept: 'multipart/mixed',
            sortBy: '$orderby',
            select: '$select',
            skip: '$skip',
            take: '$top',
            count: '$count',
            search: '$search',
            where: '$filter',
            expand: '$expand',
            batch: '$batch',
            changeSet: '--changeset_',
            batchPre: 'batch_',
            contentId: 'Content-Id: ',
            batchContent: 'Content-Type: multipart/mixed; boundary=',
            changeSetContent: 'Content-Type: application/http\nContent-Transfer-Encoding: binary ',
            batchChangeSetContentType: 'Content-Type: application/json; charset=utf-8 '
        });
        return _this;
    }
    ODataV4Adaptor.prototype.getModulename = function () {
        return 'ODataV4Adaptor';
    };
    ;
    ODataV4Adaptor.prototype.onCount = function (e) {
        return e === true ? 'true' : '';
    };
    ODataV4Adaptor.prototype.onPredicate = function (predicate, query, requiresCast) {
        var returnValue = '';
        var val = predicate.value;
        var isDate = val instanceof Date;
        returnValue = _super.prototype.onPredicate.call(this, predicate, query, requiresCast);
        if (isDate) {
            returnValue = returnValue.replace(/datetime'(.*)'$/, '$1');
        }
        return returnValue;
    };
    ODataV4Adaptor.prototype.onEachSearch = function (e) {
        var search = this.pvt.searches || [];
        search.push(e.key);
        this.pvt.searches = search;
    };
    ODataV4Adaptor.prototype.onSearch = function (e) {
        return this.pvt.searches.join(' OR ');
    };
    ODataV4Adaptor.prototype.beforeSend = function (dm, request, settings) {
        request.setRequestHeader('Accept', this.options.accept);
    };
    ODataV4Adaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        var pvtData = 'pvtData';
        var pvt = request && request[pvtData];
        var emptyAndBatch = _super.prototype.processBatchResponse.call(this, data, query, xhr, request, changes);
        if (emptyAndBatch) {
            return emptyAndBatch;
        }
        var count = null;
        var dataCount = '@odata.count';
        if (query && query.requiresCounts) {
            if (dataCount in data) {
                count = data[dataCount];
            }
        }
        data = data.value;
        var args = {};
        args.count = count;
        args.result = data;
        this.getAggregateResult(pvt, data, args);
        return __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].isNull(count) ? args.result : { result: args.result, count: count, aggregates: args.aggregates };
    };
    return ODataV4Adaptor;
}(ODataAdaptor));

var WebApiAdaptor = (function (_super) {
    __extends(WebApiAdaptor, _super);
    function WebApiAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebApiAdaptor.prototype.insert = function (dm, data, tableName) {
        return {
            type: 'POST',
            url: dm.dataSource.url,
            data: JSON.stringify(data)
        };
    };
    WebApiAdaptor.prototype.remove = function (dm, keyField, value, tableName) {
        return {
            type: 'DELETE',
            url: dm.dataSource.url + '/' + value,
            data: JSON.stringify(value)
        };
    };
    WebApiAdaptor.prototype.update = function (dm, keyField, value, tableName) {
        return {
            type: 'PUT',
            url: dm.dataSource.url,
            data: JSON.stringify(value)
        };
    };
    WebApiAdaptor.prototype.beforeSend = function (dm, request, settings) {
        request.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
    };
    WebApiAdaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        var pvtData = 'pvtData';
        var pvt = request && request[pvtData];
        var count = null;
        var args = {};
        if (request && request.type.toLowerCase() !== 'post') {
            var versionCheck = xhr && request.getResponseHeader('DataServiceVersion');
            var version = (versionCheck && parseInt(versionCheck, 10)) || 2;
            if (query && query.requiresCounts) {
                if (!__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].isNull(data.Count)) {
                    count = data.Count;
                }
            }
            if (version < 3 && data.Items) {
                data = data.Items;
            }
            args.count = count;
            args.result = data;
            this.getAggregateResult(pvt, data, args);
        }
        args.result = args.result || data;
        return __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].isNull(count) ? args.result : { result: args.result, count: args.count, aggregates: args.aggregates };
    };
    return WebApiAdaptor;
}(ODataAdaptor));

var WebMethodAdaptor = (function (_super) {
    __extends(WebMethodAdaptor, _super);
    function WebMethodAdaptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebMethodAdaptor.prototype.processQuery = function (dm, query, hierarchyFilters) {
        var obj = new UrlAdaptor().processQuery(dm, query, hierarchyFilters);
        var getData = 'data';
        var data = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.parseJson(obj[getData]);
        var result = {};
        var value = 'value';
        if (data.param) {
            for (var i = 0; i < data.param.length; i++) {
                var param = data.param[i];
                var key = Object.keys(param)[0];
                result[key] = param[key];
            }
        }
        result[value] = data;
        var pvtData = 'pvtData';
        var url = 'url';
        return {
            data: JSON.stringify(result),
            url: obj[url],
            pvtData: obj[pvtData],
            type: 'POST',
            contentType: 'application/json; charset=utf-8'
        };
    };
    return WebMethodAdaptor;
}(UrlAdaptor));

var RemoteSaveAdaptor = (function (_super) {
    __extends(RemoteSaveAdaptor, _super);
    function RemoteSaveAdaptor() {
        var _this = _super.call(this) || this;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])('beforeSend', UrlAdaptor.prototype.beforeSend, _this);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])('insert', UrlAdaptor.prototype.insert, _this);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])('update', UrlAdaptor.prototype.update, _this);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])('remove', UrlAdaptor.prototype.remove, _this);
        return _this;
    }
    RemoteSaveAdaptor.prototype.batchRequest = function (dm, changes, e) {
        var i;
        for (i = 0; i < changes.addedRecords.length; i++) {
            JsonAdaptor.prototype.insert(dm, changes.addedRecords[i]);
        }
        for (i = 0; i < changes.changedRecords.length; i++) {
            JsonAdaptor.prototype.update(dm, e.key, changes.changedRecords[i]);
        }
        for (i = 0; i < changes.deletedRecords.length; i++) {
            JsonAdaptor.prototype.remove(dm, e.key, changes.deletedRecords[i]);
        }
        return {
            type: 'POST',
            url: dm.dataSource.batchUrl || dm.dataSource.crudUrl || dm.dataSource.url,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify({
                changed: changes.changedRecords,
                added: changes.addedRecords,
                deleted: changes.deletedRecords,
                action: 'batch',
                table: e.url,
                key: e.key
            })
        };
    };
    return RemoteSaveAdaptor;
}(JsonAdaptor));

var CacheAdaptor = (function (_super) {
    __extends(CacheAdaptor, _super);
    function CacheAdaptor(adaptor, timeStamp, pageSize) {
        var _this = _super.call(this) || this;
        _this.isCrudAction = false;
        _this.isInsertAction = false;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(adaptor)) {
            _this.cacheAdaptor = adaptor;
        }
        _this.pageSize = pageSize;
        _this.guidId = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].getGuid('cacheAdaptor');
        var obj = { keys: [], results: [] };
        window.localStorage.setItem(_this.guidId, JSON.stringify(obj));
        var guid = _this.guidId;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(timeStamp)) {
            setInterval(function () {
                var data;
                data = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.parseJson(window.localStorage.getItem(guid));
                var forDel = [];
                for (var i = 0; i < data.results.length; i++) {
                    var currentTime = +new Date();
                    var requestTime = +new Date(data.results[i].timeStamp);
                    data.results[i].timeStamp = currentTime - requestTime;
                    if (currentTime - requestTime > timeStamp) {
                        forDel.push(i);
                    }
                }
                for (var i = 0; i < forDel.length; i++) {
                    data.results.splice(forDel[i], 1);
                    data.keys.splice(forDel[i], 1);
                }
                window.localStorage.removeItem(guid);
                window.localStorage.setItem(guid, JSON.stringify(data));
            }, timeStamp);
        }
        return _this;
    }
    CacheAdaptor.prototype.generateKey = function (url, query) {
        var queries = this.getQueryRequest(query);
        var singles = __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */].filterQueryLists(query.queries, ['onSelect', 'onPage', 'onSkip', 'onTake', 'onRange']);
        var key = url;
        var page = 'onPage';
        if (page in singles) {
            key += singles[page].pageIndex;
        }
        queries.sorts.forEach(function (obj) {
            key += obj.e.direction + obj.e.fieldName;
        });
        queries.groups.forEach(function (obj) {
            key += obj.e.fieldName;
        });
        queries.searches.forEach(function (obj) {
            key += obj.e.searchKey;
        });
        for (var filter = 0; filter < queries.filters.length; filter++) {
            var currentFilter = queries.filters[filter];
            if (currentFilter.e.isComplex) {
                var newQuery = query.clone();
                newQuery.queries = [];
                for (var i = 0; i < currentFilter.e.predicates.length; i++) {
                    newQuery.queries.push({ fn: 'onWhere', e: currentFilter.e.predicates[i], filter: query.queries.filter });
                }
                key += currentFilter.e.condition + this.generateKey(url, newQuery);
            }
            else {
                key += currentFilter.e.field + currentFilter.e.operator + currentFilter.e.value;
            }
        }
        return key;
    };
    CacheAdaptor.prototype.processQuery = function (dm, query, hierarchyFilters) {
        var key = this.generateKey(dm.dataSource.url, query);
        var cachedItems;
        cachedItems = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.parseJson(window.localStorage.getItem(this.guidId));
        var data = cachedItems ? cachedItems.results[cachedItems.keys.indexOf(key)] : null;
        if (data != null && !this.isCrudAction && !this.isInsertAction) {
            return data;
        }
        this.isCrudAction = null;
        this.isInsertAction = null;
        return this.cacheAdaptor.processQuery.apply(this.cacheAdaptor, [].slice.call(arguments, 0));
    };
    CacheAdaptor.prototype.processResponse = function (data, ds, query, xhr, request, changes) {
        if (this.isInsertAction || (request && this.cacheAdaptor.options.batch &&
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].endsWith(request.url, this.cacheAdaptor.options.batch) && request.type.toLowerCase() === 'post')) {
            return this.cacheAdaptor.processResponse(data, ds, query, xhr, request, changes);
        }
        data = this.cacheAdaptor.processResponse.apply(this.cacheAdaptor, [].slice.call(arguments, 0));
        var key = query ? this.generateKey(ds.dataSource.url, query) : ds.dataSource.url;
        var obj = {};
        obj = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.parseJson(window.localStorage.getItem(this.guidId));
        var index = obj.keys.indexOf(key);
        if (index !== -1) {
            obj.results.splice(index, 1);
            obj.keys.splice(index, 1);
        }
        obj.results[obj.keys.push(key) - 1] = { keys: key, result: data.result, timeStamp: new Date(), count: data.count };
        while (obj.results.length > this.pageSize) {
            obj.results.splice(0, 1);
            obj.keys.splice(0, 1);
        }
        window.localStorage.setItem(this.guidId, JSON.stringify(obj));
        return data;
    };
    CacheAdaptor.prototype.beforeSend = function (dm, request, settings) {
        if (__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].endsWith(settings.url, this.cacheAdaptor.options.batch) && settings.type.toLowerCase() === 'post') {
            request.setRequestHeader('Accept', this.cacheAdaptor.options.multipartAccept);
        }
        if (!dm.dataSource.crossDomain) {
            request.setRequestHeader('Accept', this.cacheAdaptor.options.accept);
        }
    };
    CacheAdaptor.prototype.update = function (dm, keyField, value, tableName) {
        this.isCrudAction = true;
        return this.cacheAdaptor.update(dm, keyField, value, tableName);
    };
    CacheAdaptor.prototype.insert = function (dm, data, tableName) {
        this.isInsertAction = true;
        return this.cacheAdaptor.insert(dm, data, tableName);
    };
    CacheAdaptor.prototype.remove = function (dm, keyField, value, tableName) {
        this.isCrudAction = true;
        return this.cacheAdaptor.remove(dm, keyField, value, tableName);
    };
    CacheAdaptor.prototype.batchRequest = function (dm, changes, e) {
        return this.cacheAdaptor.batchRequest(dm, changes, e);
    };
    return CacheAdaptor;
}(UrlAdaptor));



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Deferred; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__query__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adaptors__ = __webpack_require__(22);





var DataManager = (function () {
    function DataManager(dataSource, query, adaptor) {
        var _this = this;
        this.dateParse = true;
        this.requests = [];
        if (!dataSource && !this.dataSource) {
            dataSource = [];
        }
        adaptor = adaptor || dataSource.adaptor;
        var data;
        if (dataSource instanceof Array) {
            data = {
                json: dataSource,
                offline: true
            };
        }
        else if (typeof dataSource === 'object') {
            if (!dataSource.json) {
                dataSource.json = [];
            }
            data = {
                url: dataSource.url,
                insertUrl: dataSource.insertUrl,
                removeUrl: dataSource.removeUrl,
                updateUrl: dataSource.updateUrl,
                crudUrl: dataSource.crudUrl,
                batchUrl: dataSource.batchUrl,
                json: dataSource.json,
                headers: dataSource.headers,
                accept: dataSource.accept,
                data: dataSource.data,
                timeTillExpiration: dataSource.timeTillExpiration,
                cachingPageSize: dataSource.cachingPageSize,
                enableCaching: dataSource.enableCaching,
                requestType: dataSource.requestType,
                key: dataSource.key,
                crossDomain: dataSource.crossDomain,
                jsonp: dataSource.jsonp,
                dataType: dataSource.dataType,
                offline: dataSource.offline !== undefined ? dataSource.offline
                    : dataSource.adaptor instanceof __WEBPACK_IMPORTED_MODULE_3__adaptors__["h" /* RemoteSaveAdaptor */] ? false : dataSource.url ? false : true,
                requiresFormat: dataSource.requiresFormat
            };
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].throwError('DataManager: Invalid arguments');
        }
        if (data.requiresFormat === undefined && !__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].isCors()) {
            data.requiresFormat = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(data.crossDomain) ? true : data.crossDomain;
        }
        if (data.dataType === undefined) {
            data.dataType = 'json';
        }
        this.dataSource = data;
        this.defaultQuery = query;
        if (data.url && data.offline && !data.json.length) {
            this.isDataAvailable = false;
            this.adaptor = adaptor || new __WEBPACK_IMPORTED_MODULE_3__adaptors__["d" /* ODataAdaptor */]();
            this.dataSource.offline = false;
            this.ready = this.executeQuery(query || new __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */]());
            this.ready.then(function (e) {
                _this.dataSource.offline = true;
                _this.isDataAvailable = true;
                data.json = e.result;
                _this.adaptor = new __WEBPACK_IMPORTED_MODULE_3__adaptors__["b" /* JsonAdaptor */]();
            });
        }
        else {
            this.adaptor = data.offline ? new __WEBPACK_IMPORTED_MODULE_3__adaptors__["b" /* JsonAdaptor */]() : new __WEBPACK_IMPORTED_MODULE_3__adaptors__["d" /* ODataAdaptor */]();
        }
        if (!data.jsonp && this.adaptor instanceof __WEBPACK_IMPORTED_MODULE_3__adaptors__["d" /* ODataAdaptor */]) {
            data.jsonp = 'callback';
        }
        this.adaptor = adaptor || this.adaptor;
        if (data.enableCaching) {
            this.adaptor = new __WEBPACK_IMPORTED_MODULE_3__adaptors__["i" /* CacheAdaptor */](this.adaptor, data.timeTillExpiration, data.cachingPageSize);
        }
        return this;
    }
    DataManager.prototype.setDefaultQuery = function (query) {
        this.defaultQuery = query;
        return this;
    };
    DataManager.prototype.executeLocal = function (query) {
        if (!this.defaultQuery && !(query instanceof __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */])) {
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].throwError('DataManager - executeLocal() : A query is required to execute');
        }
        if (!this.dataSource.json) {
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].throwError('DataManager - executeLocal() : Json data is required to execute');
        }
        query = query || this.defaultQuery;
        var result = this.adaptor.processQuery(this, query);
        if (query.subQuery) {
            var from = query.subQuery.fromTable;
            var lookup = query.subQuery.lookups;
            var res = query.requiresCounts ? result.result :
                result;
            if (lookup && lookup instanceof Array) {
                __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].buildHierarchy(query.subQuery.fKey, from, res, lookup, query.subQuery.key);
            }
            for (var j = 0; j < res.length; j++) {
                if (res[j][from] instanceof Array) {
                    res[j] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, {}, res[j]);
                    res[j][from] = this.adaptor.processResponse(query.subQuery.using(new DataManager(res[j][from].slice(0))).executeLocal(), this, query);
                }
            }
        }
        return this.adaptor.processResponse(result, this, query);
    };
    DataManager.prototype.executeQuery = function (query, done, fail, always) {
        var _this = this;
        if (typeof query === 'function') {
            always = fail;
            fail = done;
            done = query;
            query = null;
        }
        if (!query) {
            query = this.defaultQuery;
        }
        if (!(query instanceof __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */])) {
            __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].throwError('DataManager - executeQuery() : A query is required to execute');
        }
        var deffered = new Deferred();
        var args = { query: query };
        if (!this.dataSource.offline && this.dataSource.url !== undefined) {
            var result = this.adaptor.processQuery(this, query);
            this.makeRequest(result, deffered, args, query);
        }
        else {
            DataManager.nextTick(function () {
                var res = _this.executeLocal(query);
                args = DataManager.getDeferedArgs(query, res, args);
                deffered.resolve(args);
            });
        }
        return deffered.promise;
    };
    DataManager.getDeferedArgs = function (query, result, args) {
        if (query.requiresCounts) {
            args.result = result.result;
            args.count = result.count;
            args.aggregates = result.aggregates;
        }
        else {
            args.result = result;
        }
        return args;
    };
    DataManager.nextTick = function (fn) {
        (window.setImmediate || window.setTimeout)(fn, 0);
    };
    DataManager.prototype.extendRequest = function (url, fnSuccess, fnFail) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, {
            type: 'GET',
            dataType: this.dataSource.dataType,
            crossDomain: this.dataSource.crossDomain,
            jsonp: this.dataSource.jsonp,
            cache: true,
            processData: false,
            onSuccess: fnSuccess,
            onFailure: fnFail
        }, url);
    };
    DataManager.prototype.makeRequest = function (url, deffered, args, query) {
        var _this = this;
        var isSelector = !!query.subQuerySelector;
        var fnFail = function (e) {
            args.error = e;
            deffered.reject(args);
        };
        var process = function (data, count, xhr, request, actual, aggregates, virtualSelectRecords) {
            args.xhr = xhr;
            args.count = count ? parseInt(count.toString(), 10) : 0;
            args.result = data;
            args.request = request;
            args.aggregates = aggregates;
            args.actual = actual;
            args.virtualSelectRecords = virtualSelectRecords;
            deffered.resolve(args);
        };
        var fnQueryChild = function (data, selector) {
            var subDeffer = new Deferred();
            var childArgs = { parent: args };
            query.subQuery.isChild = true;
            var subUrl = _this.adaptor.processQuery(_this, query.subQuery, data ? _this.adaptor.processResponse(data) : selector);
            var childReq = _this.makeRequest(subUrl, subDeffer, childArgs, query.subQuery);
            if (!isSelector) {
                subDeffer.then(function (subData) {
                    if (data) {
                        __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].buildHierarchy(query.subQuery.fKey, query.subQuery.fromTable, data, subData, query.subQuery.key);
                        process(data, subData.count, subData.xhr);
                    }
                }, fnFail);
            }
            return childReq;
        };
        var fnSuccess = function (data, request) {
            if (request.httpRequest.getResponseHeader('Content-Type').indexOf('xml') === -1 && _this.dateParse) {
                data = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.parseJson(data);
            }
            var result = _this.adaptor.processResponse(data, _this, query, request.httpRequest, request);
            var count = 0;
            var aggregates = null;
            var virtualSelectRecords = 'virtualSelectRecords';
            var virtualRecords = data[virtualSelectRecords];
            if (query.requiresCounts) {
                count = result.count;
                aggregates = result.aggregates;
                result = result.result;
            }
            if (!query.subQuery) {
                process(result, count, request.httpRequest, request.type, data, aggregates, virtualRecords);
                return;
            }
            if (!isSelector) {
                fnQueryChild(result, request);
            }
        };
        var req = this.extendRequest(url, fnSuccess, fnFail);
        var ajax = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Ajax"](req);
        ajax.beforeSend = function () {
            _this.beforeSend(ajax.httpRequest, ajax);
        };
        req = ajax.send();
        this.requests.push(ajax);
        if (isSelector) {
            var promise = void 0;
            var res = query.subQuerySelector.call(this, { query: query.subQuery, parent: query });
            if (res && res.length) {
                promise = Promise.all([req, fnQueryChild(null, res)]);
                promise.then(function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result = args[0];
                    var pResult = _this.adaptor.processResponse(result[0], _this, query, _this.requests[0].httpRequest, _this.requests[0]);
                    var count = 0;
                    if (query.requiresCounts) {
                        count = pResult.count;
                        pResult = pResult.result;
                    }
                    var cResult = _this.adaptor.processResponse(result[1], _this, query.subQuery, _this.requests[1].httpRequest, _this.requests[1]);
                    count = 0;
                    if (query.subQuery.requiresCounts) {
                        count = cResult.count;
                        cResult = cResult.result;
                    }
                    __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].buildHierarchy(query.subQuery.fKey, query.subQuery.fromTable, pResult, cResult, query.subQuery.key);
                    isSelector = false;
                    process(pResult, count, _this.requests[0].httpRequest);
                });
            }
            else {
                isSelector = false;
            }
        }
        return req;
    };
    DataManager.prototype.beforeSend = function (request, settings) {
        this.adaptor.beforeSend(this, request, settings);
        var headers = this.dataSource.headers;
        var props;
        for (var i = 0; headers && i < headers.length; i++) {
            props = [];
            var keys = Object.keys(headers[i]);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var prop = keys_1[_i];
                props.push(prop);
                request.setRequestHeader(prop, headers[i][prop]);
            }
        }
    };
    DataManager.prototype.saveChanges = function (changes, key, tableName, query) {
        var _this = this;
        if (tableName instanceof __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */]) {
            query = tableName;
            tableName = null;
        }
        var args = {
            url: tableName,
            key: key || this.dataSource.key
        };
        var req = this.adaptor.batchRequest(this, changes, args, query);
        if (this.dataSource.offline) {
            return req;
        }
        var deff = new Deferred();
        var ajax = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Ajax"](req);
        ajax.beforeSend = function () {
            _this.beforeSend(ajax.httpRequest, ajax);
        };
        ajax.onSuccess = function (data, request) {
            deff.resolve(_this, [_this.adaptor.processResponse(data, _this, null, request.httpRequest, request, changes)]);
        };
        ajax.onFailure = function (e) {
            deff.reject([{ error: e }]);
        };
        ajax.send();
        return deff.promise;
    };
    DataManager.prototype.insert = function (data, tableName, query, position) {
        data = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.replacer(data);
        if (tableName instanceof __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */]) {
            query = tableName;
            tableName = null;
        }
        var req = this.adaptor.insert(this, data, tableName, query, position);
        if (this.dataSource.offline) {
            return req;
        }
        return this.doAjaxRequest(req);
    };
    DataManager.prototype.remove = function (keyField, value, tableName, query) {
        if (typeof value === 'object') {
            value = value[keyField];
        }
        if (tableName instanceof __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */]) {
            query = tableName;
            tableName = null;
        }
        var res = this.adaptor.remove(this, keyField, value, tableName, query);
        if (this.dataSource.offline) {
            return res;
        }
        return this.doAjaxRequest(res);
    };
    DataManager.prototype.update = function (keyField, value, tableName, query) {
        value = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.replacer(value, !this.dataSource.offline);
        if (tableName instanceof __WEBPACK_IMPORTED_MODULE_2__query__["a" /* Query */]) {
            query = tableName;
            tableName = null;
        }
        var res = this.adaptor.update(this, keyField, value, tableName, query);
        if (this.dataSource.offline) {
            return res;
        }
        return this.doAjaxRequest(res);
    };
    DataManager.prototype.doAjaxRequest = function (res) {
        var _this = this;
        var defer = new Deferred();
        res = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, {
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            processData: false
        }, res);
        var ajax = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Ajax"](res);
        ajax.beforeSend = function () {
            _this.beforeSend(ajax.httpRequest, ajax);
        };
        ajax.onSuccess = function (record, request) {
            try {
                __WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.parseJson(record);
            }
            catch (e) {
                record = [];
            }
            record = _this.adaptor.processResponse(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* DataUtil */].parse.parseJson(record), _this, null, request.httpRequest, request);
            defer.resolve(_this, [{ record: record, dataManager: _this }]);
        };
        ajax.onFailure = function (e) {
            defer.reject([{ error: e }]);
        };
        ajax.send();
        return defer.promise;
    };
    return DataManager;
}());

var Deferred = (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        this.then = this.promise.then.bind(this.promise);
        this.catch = this.promise.catch.bind(this.promise);
    }
    return Deferred;
}());



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);

var CLASSNAMES = {
    RTL: 'e-rtl',
    DISABLE: 'e-disabled',
    INPUT: 'e-input',
    INPUTGROUP: 'e-input-group',
    FLOATINPUT: 'e-float-input',
    FLOATLINE: 'e-float-line',
    FLOATTEXT: 'e-float-text',
    CLEARICON: 'e-clear-icon',
    CLEARICONHIDE: 'e-clear-icon-hide',
    LABELTOP: 'e-label-top',
    LABELBOTTOM: 'e-label-bottom',
    NOFLOATLABEL: 'e-no-float-label',
    INPUTCUSTOMTAG: 'e-input-custom-tag',
    FLOATCUSTOMTAG: 'e-float-custom-tag'
};
var Input;
(function (Input) {
    var privateInputObj = {
        container: null,
        buttons: [],
        clearButton: null
    };
    function createInput(args) {
        var inputObject = { container: null, buttons: [], clearButton: null };
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.floatLabelType) || args.floatLabelType === 'Never') {
            inputObject.container = createInputContainer(args, CLASSNAMES.INPUTGROUP, CLASSNAMES.INPUTCUSTOMTAG, 'span');
            args.element.parentNode.insertBefore(inputObject.container, args.element);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([args.element], CLASSNAMES.INPUT);
            inputObject.container.appendChild(args.element);
        }
        else {
            createFloatingInput(args, inputObject);
        }
        args.element.addEventListener('focus', function () {
            var parent = getParentNode(this);
            if (parent.classList.contains('e-input-group')) {
                parent.classList.add('e-input-focus');
            }
        });
        args.element.addEventListener('blur', function () {
            var parent = getParentNode(this);
            if (parent.classList.contains('e-input-group')) {
                parent.classList.remove('e-input-focus');
            }
        });
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.properties) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.properties.showClearButton) && args.properties.showClearButton) {
            inputObject.clearButton = createClearButton(args.element, inputObject.container);
            if (inputObject.container.classList.contains(CLASSNAMES.FLOATINPUT)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([inputObject.container], CLASSNAMES.INPUTGROUP);
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.buttons)) {
            for (var i = 0; i < args.buttons.length; i++) {
                inputObject.buttons.push(appendSpan(args.buttons[i], inputObject.container));
            }
        }
        inputObject = setPropertyValue(args, inputObject);
        privateInputObj = inputObject;
        return inputObject;
    }
    Input.createInput = createInput;
    function _focusFn() {
        var label = getParentNode(this).getElementsByClassName('e-float-text')[0];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([label], CLASSNAMES.LABELTOP);
        if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([label], CLASSNAMES.LABELBOTTOM);
        }
    }
    function _blurFn() {
        var parent = getParentNode(this);
        if (parent.getElementsByTagName('input')[0].value === '') {
            var label = parent.getElementsByClassName('e-float-text')[0];
            if (label.classList.contains(CLASSNAMES.LABELTOP)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([label], CLASSNAMES.LABELTOP);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([label], CLASSNAMES.LABELBOTTOM);
        }
    }
    function wireFloatingEvents(element) {
        element.addEventListener('focus', _focusFn);
        element.addEventListener('blur', _blurFn);
    }
    function unwireFloatingEvents(element) {
        element.removeEventListener('focus', _focusFn);
        element.removeEventListener('blur', _blurFn);
    }
    function createFloatingInput(args, inputObject) {
        var inputElement;
        var floatLinelement;
        var floatLabelElement;
        if (args.floatLabelType === 'Auto') {
            wireFloatingEvents(args.element);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(inputObject.container)) {
            inputObject.container = createInputContainer(args, CLASSNAMES.FLOATINPUT, CLASSNAMES.FLOATCUSTOMTAG, 'div');
            args.element.parentNode.insertBefore(inputObject.container, args.element);
        }
        else {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.customTag)) {
                inputObject.container.classList.add(CLASSNAMES.FLOATCUSTOMTAG);
            }
            inputObject.container.classList.add(CLASSNAMES.FLOATINPUT);
        }
        floatLinelement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: CLASSNAMES.FLOATLINE });
        floatLabelElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('label', { className: CLASSNAMES.FLOATTEXT });
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.element.id) && args.element.id !== '') {
            floatLabelElement.id = 'label_' + args.element.id.replace(/ /g, '_');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(args.element, { 'aria-labelledby': floatLabelElement.id });
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.element.placeholder) && args.element.placeholder !== '') {
            floatLabelElement.innerHTML = args.element.placeholder;
            args.element.removeAttribute('placeholder');
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.properties) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.properties.placeholder) &&
            args.properties.placeholder !== '') {
            floatLabelElement.innerHTML = args.properties.placeholder;
        }
        if (!floatLabelElement.innerHTML) {
            inputObject.container.classList.add(CLASSNAMES.NOFLOATLABEL);
        }
        inputObject.container.appendChild(args.element);
        inputObject.container.appendChild(floatLinelement);
        inputObject.container.appendChild(floatLabelElement);
        updateLabelState(args.element.value, floatLabelElement);
        if (args.floatLabelType === 'Always') {
            if (floatLabelElement.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([floatLabelElement], CLASSNAMES.LABELBOTTOM);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([floatLabelElement], CLASSNAMES.LABELTOP);
        }
        if (args.floatLabelType === 'Auto') {
            args.element.addEventListener('input', function (event) {
                updateLabelState(args.element.value, floatLabelElement);
            });
            args.element.addEventListener('blur', function (event) {
                updateLabelState(args.element.value, floatLabelElement);
            });
        }
    }
    function setPropertyValue(args, inputObject) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.properties)) {
            for (var _i = 0, _a = Object.keys(args.properties); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'cssClass':
                        setCssClass(args.properties.cssClass, [inputObject.container]);
                        break;
                    case 'enabled':
                        setEnabled(args.properties.enabled, args.element);
                        break;
                    case 'enableRtl':
                        setEnableRtl(args.properties.enableRtl, [inputObject.container]);
                        break;
                    case 'placeholder':
                        setPlaceholder(args.properties.placeholder, args.element);
                        break;
                    case 'readonly':
                        setReadonly(args.properties.readonly, args.element);
                        break;
                }
            }
        }
        return inputObject;
    }
    function updateIconState(value, button) {
        if (value) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([button], CLASSNAMES.CLEARICONHIDE);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([button], CLASSNAMES.CLEARICONHIDE);
        }
    }
    function updateLabelState(value, label) {
        if (value) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([label], CLASSNAMES.LABELTOP);
            if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([label], CLASSNAMES.LABELBOTTOM);
            }
        }
        else {
            if (label.classList.contains(CLASSNAMES.LABELTOP)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([label], CLASSNAMES.LABELTOP);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([label], CLASSNAMES.LABELBOTTOM);
        }
    }
    function getParentNode(element) {
        var parentNode = element.parentNode;
        return parentNode;
    }
    function createClearButton(element, container) {
        var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: CLASSNAMES.CLEARICON });
        container.appendChild(button);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(privateInputObj.container) &&
            privateInputObj.container.classList.contains(CLASSNAMES.FLOATINPUT)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([privateInputObj.container], CLASSNAMES.INPUTGROUP);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([button], CLASSNAMES.CLEARICONHIDE);
        wireClearBtnEvents(element, button);
        return button;
    }
    function wireClearBtnEvents(element, button) {
        button.addEventListener('click', function (event) {
            if (!(element.classList.contains(CLASSNAMES.DISABLE) || element.readOnly)) {
                event.preventDefault();
                if (element !== document.activeElement) {
                    element.focus();
                }
                element.value = '';
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([button], CLASSNAMES.CLEARICONHIDE);
            }
        });
        element.addEventListener('input', function (event) {
            updateIconState(element.value, button);
        });
        element.addEventListener('focus', function (event) {
            updateIconState(element.value, button);
        });
        element.addEventListener('blur', function (event) {
            setTimeout(function () { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([button], CLASSNAMES.CLEARICONHIDE); }, 200);
        });
    }
    function validateLabel(element, floatLabelType) {
        var parent = getParentNode(element);
        if (parent.classList.contains(CLASSNAMES.FLOATINPUT) && floatLabelType === 'Auto') {
            var label = getParentNode(element).getElementsByClassName('e-float-text')[0];
            updateLabelState(element.value, label);
        }
    }
    function createInputContainer(args, className, tagClass, tag) {
        var container;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.customTag)) {
            container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])(args.customTag, { className: className });
            container.classList.add(tagClass);
        }
        else {
            container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])(tag, { className: className });
        }
        return container;
    }
    function setValue(value, element, floatLabelType, clearButton) {
        element.value = value;
        if ((!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(floatLabelType)) && floatLabelType === 'Auto') {
            validateLabel(element, floatLabelType);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(clearButton) && clearButton) {
            var parentElement = getParentNode(element);
            var button = parentElement.getElementsByClassName(CLASSNAMES.CLEARICON)[0];
            if (element.value && parentElement.classList.contains('e-input-focus')) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([button], CLASSNAMES.CLEARICONHIDE);
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([button], CLASSNAMES.CLEARICONHIDE);
            }
        }
    }
    Input.setValue = setValue;
    function setCssClass(cssClass, elements, oldClass) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(oldClass) && oldClass !== '') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])(elements, oldClass);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(cssClass) && cssClass !== '') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])(elements, cssClass);
        }
    }
    Input.setCssClass = setCssClass;
    function setPlaceholder(placeholder, element) {
        var parentElement;
        parentElement = getParentNode(element);
        if (parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(placeholder) && placeholder !== '') {
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = placeholder;
                parentElement.classList.remove(CLASSNAMES.NOFLOATLABEL);
            }
            else {
                parentElement.classList.add(CLASSNAMES.NOFLOATLABEL);
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
            }
        }
        else {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(placeholder) && placeholder !== '') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(element, { 'placeholder': placeholder, 'aria-placeholder': placeholder });
            }
            else {
                element.removeAttribute('placeholder');
                element.removeAttribute('aria-placeholder');
            }
        }
    }
    Input.setPlaceholder = setPlaceholder;
    function setReadonly(isReadonly, element, floatLabelType) {
        if (isReadonly) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(element, { readonly: '' });
        }
        else {
            element.removeAttribute('readonly');
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(floatLabelType)) {
            validateLabel(element, floatLabelType);
        }
    }
    Input.setReadonly = setReadonly;
    function setEnableRtl(isRtl, elements) {
        if (isRtl) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])(elements, CLASSNAMES.RTL);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])(elements, CLASSNAMES.RTL);
        }
    }
    Input.setEnableRtl = setEnableRtl;
    function setEnabled(isEnable, element, floatLabelType) {
        var disabledAttrs = { 'disabled': 'disabled', 'aria-disabled': 'true' };
        if (isEnable) {
            element.classList.remove(CLASSNAMES.DISABLE);
            removeAttributes(disabledAttrs, element);
        }
        else {
            element.classList.add(CLASSNAMES.DISABLE);
            addAttributes(disabledAttrs, element);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(floatLabelType)) {
            validateLabel(element, floatLabelType);
        }
    }
    Input.setEnabled = setEnabled;
    function removeAttributes(attrs, element) {
        for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
            var key = _a[_i];
            var parentElement = void 0;
            parentElement = getParentNode(element);
            if (key === 'disabled') {
                element.classList.remove(CLASSNAMES.DISABLE);
            }
            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
                parentElement.classList.remove(CLASSNAMES.DISABLE);
            }
            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
            }
            else {
                element.removeAttribute(key);
            }
        }
    }
    Input.removeAttributes = removeAttributes;
    function addAttributes(attrs, element) {
        for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
            var key = _a[_i];
            var parentElement = void 0;
            parentElement = getParentNode(element);
            if (key === 'disabled') {
                element.classList.add(CLASSNAMES.DISABLE);
            }
            if (key === 'disabled' && parentElement.classList.contains(CLASSNAMES.INPUTGROUP)) {
                parentElement.classList.add(CLASSNAMES.DISABLE);
            }
            if (key === 'placeholder' && parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = attrs[key];
            }
            else {
                element.setAttribute(key, attrs[key]);
            }
        }
    }
    Input.addAttributes = addAttributes;
    function removeFloating(input) {
        var container = input.container;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(container) && container.classList.contains(CLASSNAMES.FLOATINPUT)) {
            var inputEle = container.querySelector('input');
            var placeholder = container.querySelector('.' + CLASSNAMES.FLOATTEXT).textContent;
            var clearButton = container.querySelector('.e-clear-icon') !== null;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(container.querySelector('.' + CLASSNAMES.FLOATLINE));
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(container.querySelector('.' + CLASSNAMES.FLOATTEXT));
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["classList"])(container, [CLASSNAMES.INPUTGROUP], [CLASSNAMES.FLOATINPUT]);
            unwireFloatingEvents(inputEle);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(inputEle, { 'placeholder': placeholder });
            inputEle.classList.add(CLASSNAMES.INPUT);
            if (!clearButton) {
                inputEle.removeAttribute('required');
            }
        }
    }
    Input.removeFloating = removeFloating;
    function addFloating(input, type, placeholder) {
        var container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["closest"])(input, '.' + CLASSNAMES.INPUTGROUP);
        if (type !== 'Never') {
            var customTag = container.tagName;
            customTag = customTag !== 'DIV' && customTag !== 'SPAN' ? customTag : null;
            var args = { element: input, floatLabelType: type, customTag: customTag, properties: { placeholder: placeholder } };
            var iconEle = container.querySelector('.e-clear-icon');
            var inputObj = { container: container };
            input.classList.remove(CLASSNAMES.INPUT);
            createFloatingInput(args, inputObj);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(iconEle)) {
                iconEle = container.querySelector('.e-input-group-icon');
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(iconEle)) {
                container.classList.remove(CLASSNAMES.INPUTGROUP);
            }
            else {
                var floatLine = container.querySelector('.' + CLASSNAMES.FLOATLINE);
                var floatText = container.querySelector('.' + CLASSNAMES.FLOATTEXT);
                container.insertBefore(input, iconEle);
                container.insertBefore(floatLine, iconEle);
                container.insertBefore(floatText, iconEle);
            }
        }
    }
    Input.addFloating = addFloating;
    function appendSpan(iconClass, container) {
        var button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: iconClass });
        container.appendChild(button);
        if (!container.classList.contains(CLASSNAMES.INPUTGROUP)) {
            container.classList.add(CLASSNAMES.INPUTGROUP);
        }
        button.addEventListener('mousedown', function () {
            if (!container.classList.contains('e-disabled') && !container.querySelector('input').readOnly) {
                this.classList.add('e-input-btn-ripple');
            }
        });
        button.addEventListener('mouseup', function () {
            var ele = this;
            setTimeout(function () { ele.classList.remove('e-input-btn-ripple'); }, 500);
        });
        return button;
    }
    Input.appendSpan = appendSpan;
})(Input || (Input = {}));


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__syncfusion_ej2_data__ = __webpack_require__(11);




var cssClass = {
    li: 'e-list-item',
    ul: 'e-list-parent e-ul',
    group: 'e-list-group-item',
    icon: 'e-list-icon',
    text: 'e-list-text',
    check: 'e-list-check',
    checked: 'e-checked',
    selected: 'e-selected',
    expanded: 'e-expanded',
    textContent: 'e-text-content',
    hasChild: 'e-has-child',
    level: 'e-level',
    url: 'e-list-url',
    collapsible: 'e-icon-collapsible',
    disabled: 'e-disabled',
    image: 'e-list-img',
    iconWrapper: 'e-icon-wrapper'
};
var ListBase;
(function (ListBase) {
    ListBase.defaultMappedFields = {
        id: 'id',
        text: 'text',
        url: 'url',
        value: 'value',
        isChecked: 'isChecked',
        enabled: 'enabled',
        expanded: 'expanded',
        selected: 'selected',
        iconCss: 'iconCss',
        child: 'child',
        isVisible: 'isVisible',
        hasChildren: 'hasChildren',
        tooltip: 'tooltip',
        htmlAttributes: 'htmlAttributes',
        urlAttributes: 'urlAttributes',
        imageAttributes: 'imageAttributes',
        imageUrl: 'imageUrl',
        groupBy: null
    };
    var defaultAriaAttributes = {
        level: 1,
        listRole: 'presentation',
        itemRole: 'presentation',
        groupItemRole: 'group',
        itemText: 'list-item',
        wrapperRole: 'presentation'
    };
    var defaultListBaseOptions = {
        showCheckBox: false,
        showIcon: false,
        expandCollapse: false,
        fields: ListBase.defaultMappedFields,
        ariaAttributes: defaultAriaAttributes,
        listClass: '',
        itemClass: '',
        processSubChild: false,
        sortOrder: 'None',
        template: null,
        groupTemplate: null,
        expandIconClass: 'e-icon-collapsible',
        moduleName: 'list',
        expandIconPosition: 'right'
    };
    function createList(dataSource, options, isSingleLevel) {
        var curOpt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultListBaseOptions, options);
        var ariaAttributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultAriaAttributes, curOpt.ariaAttributes);
        var type = typeofData(dataSource).typeof;
        if (type === 'string' || type === 'number') {
            return createListFromArray(dataSource, isSingleLevel, options);
        }
        else {
            return createListFromJson(dataSource, options, ariaAttributes.level, isSingleLevel);
        }
    }
    ListBase.createList = createList;
    function createListFromArray(dataSource, isSingleLevel, options) {
        var subChild = createListItemFromArray(dataSource, isSingleLevel, options);
        return generateUL(subChild, null, options);
    }
    ListBase.createListFromArray = createListFromArray;
    function createListItemFromArray(dataSource, isSingleLevel, options) {
        var subChild = [];
        var curOpt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultListBaseOptions, options);
        cssClass = getModuleClass(curOpt.moduleName);
        var id = genUID();
        for (var i = 0; i < dataSource.length; i++) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(dataSource[i])) {
                continue;
            }
            var li = void 0;
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                var curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: dataSource[i],
                    options: curOpt
                };
                curOpt.itemCreating(curData);
            }
            if (isSingleLevel) {
                li = generateSingleLevelLI(dataSource[i], null, null, [], null, id, i, options);
            }
            else {
                li = generateLI(dataSource[i], null, null, options);
            }
            if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                var curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: dataSource[i],
                    item: li,
                    options: curOpt
                };
                curOpt.itemCreated(curData);
            }
            subChild.push(li);
        }
        return subChild;
    }
    ListBase.createListItemFromArray = createListItemFromArray;
    function createListItemFromJson(dataSource, options, level, isSingleLevel) {
        var curOpt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultListBaseOptions, options);
        cssClass = getModuleClass(curOpt.moduleName);
        var fields = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, ListBase.defaultMappedFields, curOpt.fields);
        var ariaAttributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultAriaAttributes, curOpt.ariaAttributes);
        var id;
        if (level) {
            ariaAttributes.level = level;
        }
        var child = [];
        var li;
        if (Object.keys(dataSource).length && !typeofData(dataSource).item.hasOwnProperty(fields.id)) {
            id = genUID();
        }
        for (var i = 0; i < dataSource.length; i++) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(dataSource[i])) {
                continue;
            }
            if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                var curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: dataSource[i][fields.text],
                    options: curOpt,
                    fields: fields
                };
                curOpt.itemCreating(curData);
            }
            var curItem = dataSource[i];
            if (Object.keys(dataSource).length && dataSource[i].hasOwnProperty(fields.id)
                && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(dataSource[i][fields.id])) {
                id = dataSource[i].id;
            }
            var innerEle = [];
            if (curOpt.showCheckBox) {
                innerEle.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('input', { className: cssClass.check, attrs: { type: 'checkbox' } }));
            }
            if (isSingleLevel === true) {
                if (curOpt.showIcon && curItem.hasOwnProperty(fields.iconCss)) {
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(curItem[fields.iconCss])) {
                        innerEle.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: cssClass.icon + ' ' + curItem[fields.iconCss] }));
                    }
                }
                li = generateSingleLevelLI(curItem, fields, curOpt.itemClass, innerEle, (curItem.hasOwnProperty('isHeader') &&
                    curItem.isHeader) ? true : false, id, i, options);
            }
            else {
                li = generateLI(curItem, fields, curOpt.itemClass, options);
                li.classList.add(cssClass.level + '-' + ariaAttributes.level);
                li.setAttribute('aria-level', ariaAttributes.level.toString());
                if (curItem.hasOwnProperty(fields.tooltip)) {
                    li.setAttribute('title', curItem[fields.tooltip]);
                }
                if (curItem.hasOwnProperty(fields.htmlAttributes) && curItem[fields.htmlAttributes]) {
                    setAttribute(li, curItem[fields.htmlAttributes]);
                }
                if (curItem.hasOwnProperty(fields.enabled) && curItem[fields.enabled] === false) {
                    li.classList.add(cssClass.disabled);
                }
                if (curItem.hasOwnProperty(fields.isVisible) && curItem[fields.isVisible] === false) {
                    li.style.display = 'none';
                }
                if (curItem.hasOwnProperty(fields.imageUrl) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(curItem[fields.imageUrl])) {
                    var attr = { src: curItem[fields.imageUrl] };
                    if (curItem.hasOwnProperty(fields.imageUrl)) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["merge"])(attr, curItem[fields.imageAttributes]);
                    }
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["prepend"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('img', { className: cssClass.image, attrs: attr })], li.firstElementChild);
                }
                if (curOpt.showIcon && curItem.hasOwnProperty(fields.iconCss) && !curOpt.template) {
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(curItem[fields.iconCss])) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["prepend"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: cssClass.icon + ' ' + curItem[fields.iconCss] })], li.firstElementChild);
                    }
                }
                if (innerEle.length) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["prepend"])(innerEle, li.firstElementChild);
                }
                processSubChild(curItem, fields, dataSource, curOpt, li, ariaAttributes.level);
            }
            if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                var curData = {
                    dataSource: dataSource,
                    curData: dataSource[i],
                    text: dataSource[i][fields.text],
                    item: li,
                    options: curOpt,
                    fields: fields
                };
                curOpt.itemCreated(curData);
            }
            child.push(li);
        }
        return child;
    }
    ListBase.createListItemFromJson = createListItemFromJson;
    function createListFromJson(dataSource, options, level, isSingleLevel) {
        var curOpt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultListBaseOptions, options);
        var li = createListItemFromJson(dataSource, options, level, isSingleLevel);
        return generateUL(li, curOpt.listClass, options);
    }
    ListBase.createListFromJson = createListFromJson;
    function getSiblingLI(elementArray, element, isPrevious) {
        cssClass = getModuleClass(defaultListBaseOptions.moduleName);
        if (!elementArray || !elementArray.length) {
            return void 0;
        }
        var siblingLI;
        var liIndex;
        var liCollections = Array.prototype.slice.call(elementArray);
        if (element) {
            liIndex = indexOf(element, liCollections);
        }
        else {
            liIndex = (isPrevious === true ? liCollections.length : -1);
        }
        siblingLI = liCollections[liIndex + (isPrevious === true ? -1 : 1)];
        while (siblingLI && (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isVisible"])(siblingLI) || siblingLI.classList.contains(cssClass.disabled))) {
            liIndex = liIndex + (isPrevious === true ? -1 : 1);
            siblingLI = liCollections[liIndex];
        }
        return siblingLI;
    }
    ListBase.getSiblingLI = getSiblingLI;
    function indexOf(item, elementArray) {
        if (!elementArray || !item) {
            return void 0;
        }
        else {
            var liCollections = elementArray;
            liCollections = Array.prototype.slice.call(elementArray);
            return liCollections.indexOf(item);
        }
    }
    ListBase.indexOf = indexOf;
    function groupDataSource(dataSource, fields, sortOrder) {
        if (sortOrder === void 0) { sortOrder = 'None'; }
        var cusQuery = new __WEBPACK_IMPORTED_MODULE_1__syncfusion_ej2_data__["Query"]().group(fields.groupBy);
        cusQuery = addSorting(sortOrder, 'key', cusQuery);
        var ds = getDataSource(dataSource, cusQuery);
        dataSource = [];
        for (var j = 0; j < ds.length; j++) {
            var itemObj = ds[j].items;
            var grpItem = {};
            var hdr = 'isHeader';
            grpItem[fields.text] = ds[j].key;
            grpItem[hdr] = true;
            grpItem.items = itemObj;
            dataSource.push(grpItem);
            for (var k = 0; k < itemObj.length; k++) {
                dataSource.push(itemObj[k]);
            }
        }
        return dataSource;
    }
    ListBase.groupDataSource = groupDataSource;
    function addSorting(sortOrder, sortBy, query) {
        if (query === void 0) { query = new __WEBPACK_IMPORTED_MODULE_1__syncfusion_ej2_data__["Query"](); }
        if (sortOrder === 'Ascending') {
            query.sortBy(sortBy, 'ascending', true);
        }
        else if (sortOrder === 'Descending') {
            query.sortBy(sortBy, 'descending', true);
        }
        return query;
    }
    ListBase.addSorting = addSorting;
    function getDataSource(dataSource, query) {
        return new __WEBPACK_IMPORTED_MODULE_1__syncfusion_ej2_data__["DataManager"](dataSource)
            .executeLocal(query);
    }
    ListBase.getDataSource = getDataSource;
    function createJsonFromElement(element, options) {
        var curOpt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultListBaseOptions, options);
        var fields = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, ListBase.defaultMappedFields, curOpt.fields);
        var curEle = element.cloneNode(true);
        var jsonAr = [];
        curEle.classList.add('json-parent');
        var childs = curEle.querySelectorAll('.json-parent>li');
        curEle.classList.remove('json-parent');
        var _loop_1 = function (i) {
            var li = childs[i];
            var anchor = li.querySelector('a');
            var ul = li.querySelector('ul');
            var json = {};
            var childNodes = anchor ? anchor.childNodes : li.childNodes;
            Object.keys(childNodes).forEach(function (key) {
                if (!(childNodes[Number(key)]).hasChildNodes()) {
                    json[fields.text] = childNodes[Number(key)].textContent;
                }
            });
            json[fields.id] = genUID();
            var attributes_1 = getAllAttributes(li);
            if (Object.keys(attributes_1).length) {
                json[fields.htmlAttributes] = attributes_1;
            }
            if (anchor) {
                attributes_1 = getAllAttributes(anchor);
                if (Object.keys(attributes_1).length) {
                    json[fields.urlAttributes] = attributes_1;
                }
            }
            if (ul) {
                json[fields.child] = createJsonFromElement(ul, options);
            }
            jsonAr.push(json);
        };
        for (var i = 0; i < childs.length; i++) {
            _loop_1(i);
        }
        return jsonAr;
    }
    ListBase.createJsonFromElement = createJsonFromElement;
    function typeofData(data) {
        var match = { typeof: null, item: null };
        for (var i = 0; i < data.length; i++) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(data[i])) {
                return match = { typeof: typeof data[i], item: data[i] };
            }
        }
        return match;
    }
    function setAttribute(element, elementAttributes) {
        var attr = {};
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["merge"])(attr, elementAttributes);
        if (attr.class) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([element], attr.class.split(' '));
            delete attr.class;
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(element, attr);
    }
    function getAllAttributes(element) {
        var attributes = {};
        var attr = element.attributes;
        for (var index = 0; index < attr.length; index++) {
            attributes[attr[index].nodeName] = attr[index].nodeValue;
        }
        return attributes;
    }
    function renderContentTemplate(template, dataSource, fields) {
        cssClass = getModuleClass(defaultListBaseOptions.moduleName);
        var ulElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('ul', { className: cssClass.ul, attrs: { role: 'presentation' } });
        var compiledString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["compile"])(template);
        var liCollection = [];
        var id = genUID();
        for (var i = 0; i < dataSource.length; i++) {
            var item = dataSource[i];
            var isHeader = item.isHeader;
            var li = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('li', {
                id: id + '-' + i,
                className: isHeader ? cssClass.group : cssClass.li, attrs: { role: 'presentation' }
            });
            if (isHeader) {
                li.innerText = item[fields.text];
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["append"])(compiledString(item), li);
                var value = item[fields.value];
                li.setAttribute('data-value', value);
                li.setAttribute('role', 'option');
            }
            liCollection.push(li);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["append"])(liCollection, ulElement);
        return ulElement;
    }
    ListBase.renderContentTemplate = renderContentTemplate;
    function renderGroupTemplate(groupTemplate, groupDataSource, fields, headerItems) {
        var compiledString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["compile"])(groupTemplate);
        var category = fields.groupBy;
        var headerData = {};
        for (var _i = 0, headerItems_1 = headerItems; _i < headerItems_1.length; _i++) {
            var header = headerItems_1[_i];
            headerData[category] = header.textContent;
            header.innerHTML = '';
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["append"])(compiledString(headerData), header);
        }
        return headerItems;
    }
    ListBase.renderGroupTemplate = renderGroupTemplate;
    function genUID() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    function processSubChild(curItem, fields, ds, options, element, level) {
        var subDS = curItem[fields.child] || [];
        var hasChildren = curItem[fields.hasChildren];
        if (subDS.length) {
            hasChildren = true;
            element.classList.add(cssClass.hasChild);
            if (options.processSubChild) {
                var subLi = createListFromJson(subDS, options, ++level);
                element.appendChild(subLi);
            }
        }
        if (!!options.expandCollapse && hasChildren && !options.template) {
            if (element.firstElementChild.classList.contains(cssClass.textContent)) {
                element.firstElementChild.classList.add(cssClass.iconWrapper);
            }
            var expandElement = options.expandIconPosition === 'left' ? __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["prepend"] : __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["append"];
            expandElement([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: 'e-icons ' + options.expandIconClass })], element.querySelector('.' + cssClass.textContent));
        }
    }
    function generateSingleLevelLI(item, fields, className, innerElements, grpLI, id, index, options) {
        var curOpt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultListBaseOptions, options);
        var ariaAttributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultAriaAttributes, curOpt.ariaAttributes);
        var text = item;
        var value = item;
        var dataSource;
        if (typeof item !== 'string' && typeof item !== 'number') {
            dataSource = item;
            text = item[fields.text] || '';
            value = item[fields.value];
        }
        var elementID;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(dataSource) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(dataSource[fields.id])
            && dataSource[fields.id] !== '') {
            elementID = id;
        }
        else {
            elementID = id + '-' + index;
        }
        var li = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('li', {
            className: (grpLI === true ? cssClass.group : cssClass.li) + ' ' + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(className) ? '' : className),
            id: elementID, attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
        });
        if (dataSource && dataSource.hasOwnProperty(fields.enabled) && dataSource[fields.enabled].toString() === 'false') {
            li.classList.add(cssClass.disabled);
        }
        if (grpLI) {
            li.innerText = text;
        }
        else {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(value)) {
                li.setAttribute('data-value', value);
            }
            li.setAttribute('role', 'option');
            if (dataSource && dataSource.hasOwnProperty(fields.htmlAttributes) && dataSource[fields.htmlAttributes]) {
                setAttribute(li, dataSource[fields.htmlAttributes]);
            }
            if (innerElements.length) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["append"])(innerElements, li);
            }
            if (dataSource && dataSource.hasOwnProperty(fields.url) && dataSource[fields.url]) {
                li.appendChild(anchorTag(dataSource, fields, text));
            }
            else {
                li.appendChild(document.createTextNode(text));
            }
        }
        return li;
    }
    function getModuleClass(moduleName) {
        var moduleClass;
        return moduleClass = {
            li: "e-" + moduleName + "-item",
            ul: "e-" + moduleName + "-parent e-ul",
            group: "e-" + moduleName + "-group-item",
            icon: "e-" + moduleName + "-icon",
            text: "e-" + moduleName + "-text",
            check: "e-" + moduleName + "-check",
            checked: 'e-checked',
            selected: 'e-selected',
            expanded: 'e-expanded',
            textContent: 'e-text-content',
            hasChild: 'e-has-child',
            level: 'e-level',
            url: "e-" + moduleName + "-url",
            collapsible: 'e-icon-collapsible',
            disabled: 'e-disabled',
            image: "e-" + moduleName + "-img",
            iconWrapper: 'e-icon-wrapper'
        };
    }
    function anchorTag(dataSource, fields, text) {
        var attr = { href: dataSource[fields.url] };
        if (dataSource.hasOwnProperty(fields.urlAttributes) && dataSource[fields.urlAttributes]) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["merge"])(attr, dataSource[fields.urlAttributes]);
        }
        var anchorTag = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('a', { className: cssClass.text + ' ' + cssClass.url, innerHTML: text });
        setAttribute(anchorTag, attr);
        return anchorTag;
    }
    function generateLI(item, fields, className, options) {
        var curOpt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultListBaseOptions, options);
        var ariaAttributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultAriaAttributes, curOpt.ariaAttributes);
        var text = item;
        var uID;
        var grpLI;
        var dataSource;
        if (typeof item !== 'string') {
            dataSource = item;
            text = item[fields.text] || '';
            uID = item[fields.id];
            grpLI = (item.hasOwnProperty('isHeader') && item.isHeader)
                ? true : false;
        }
        var li = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('li', {
            className: (grpLI === true ? cssClass.group : cssClass.li) + ' ' + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(className) ? '' : className),
            attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
        });
        if (uID) {
            li.setAttribute('data-uid', uID);
        }
        if (grpLI && options && options.groupTemplate) {
            var compiledString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["compile"])(options.groupTemplate);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["append"])(compiledString(item), li);
        }
        else if (!grpLI && options && options.template) {
            var compiledString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["compile"])(options.template);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["append"])(compiledString(item), li);
        }
        else {
            var innerDiv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: cssClass.textContent,
                attrs: (ariaAttributes.wrapperRole !== '' ? { role: ariaAttributes.wrapperRole } : {}) });
            if (dataSource && dataSource.hasOwnProperty(fields.url) && dataSource[fields.url]) {
                innerDiv.appendChild(anchorTag(dataSource, fields, text));
            }
            else {
                innerDiv.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: cssClass.text, innerHTML: text,
                    attrs: (ariaAttributes.itemText !== '' ? { role: ariaAttributes.itemText } : {}) }));
            }
            li.appendChild(innerDiv);
        }
        return li;
    }
    function generateUL(liElement, className, options) {
        var curOpt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultListBaseOptions, options);
        var ariaAttributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultAriaAttributes, curOpt.ariaAttributes);
        cssClass = getModuleClass(curOpt.moduleName);
        var ulElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('ul', {
            className: cssClass.ul + ' ' + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(className) ? '' : className),
            attrs: (ariaAttributes.listRole !== '' ? { role: ariaAttributes.listRole } : {})
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["append"])(liElement, ulElement);
        return ulElement;
    }
    ListBase.generateUL = generateUL;
    function generateIcon(liElement, className, options) {
        var curOpt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultListBaseOptions, options);
        var ariaAttributes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])({}, defaultAriaAttributes, curOpt.ariaAttributes);
        cssClass = getModuleClass(curOpt.moduleName);
        var expandElement = curOpt.expandIconPosition === 'left' ? __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["prepend"] : __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["append"];
        expandElement([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: 'e-icons ' + curOpt.expandIconClass + ' ' +
                    (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(className) ? '' : className) })], liElement.querySelector('.' + cssClass.textContent));
        return liElement;
    }
    ListBase.generateIcon = generateIcon;
})(ListBase || (ListBase = {}));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(0), __webpack_require__(0), __webpack_require__(11), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_data_1, ej2_lists_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SPINNER_SIZE = ej2_base_2.Browser.isDevice ? '16px' : '14px';
    exports.dropDownBaseClasses = {
        root: 'e-dropdownbase',
        rtl: 'e-rtl',
        content: 'e-content',
        selected: 'e-active',
        hover: 'e-hover',
        noData: 'e-nodata',
        fixedHead: 'e-fixed-head',
        focus: 'e-item-focus',
        li: ej2_lists_1.cssClass.li,
        group: ej2_lists_1.cssClass.group,
        disabled: ej2_lists_1.cssClass.disabled,
        grouping: 'e-dd-group'
    };
    var DropDownBase = (function (_super) {
        __extends(DropDownBase, _super);
        function DropDownBase(options, element) {
            var _this = _super.call(this, options, element) || this;
            _this.scrollTimer = -1;
            _this.enableRtlElements = [];
            _this.isRequested = false;
            return _this;
        }
        ;
        DropDownBase.prototype.getPropObject = function (prop, newProp, oldProp) {
            var newProperty = new Object();
            var oldProperty = new Object();
            var propName = new Function('prop', 'return prop');
            newProperty[propName(prop)] = newProp[propName(prop)];
            oldProperty[propName(prop)] = oldProp[propName(prop)];
            var data = new Object();
            data.newProperty = newProperty;
            data.oldProperty = oldProperty;
            return data;
        };
        DropDownBase.prototype.getValueByText = function (text, ignoreCase) {
            var value = null;
            var dataSource = this.listData;
            var fields = this.fields;
            var type = this.typeOfData(dataSource).typeof;
            if (ignoreCase) {
                if (type === 'string' || type === 'number') {
                    for (var _i = 0, dataSource_1 = dataSource; _i < dataSource_1.length; _i++) {
                        var item = dataSource_1[_i];
                        if (!ej2_base_2.isNullOrUndefined(item) && String(item).toLowerCase() === text.toString().toLowerCase()) {
                            value = type === 'string' ? String(item) : this.getFormattedValue(String(item));
                            break;
                        }
                    }
                }
                else {
                    dataSource.filter(function (item) {
                        var itemText = item[fields.text].toString();
                        if (itemText.toLowerCase() === text.toLowerCase()) {
                            value = item[fields.value];
                        }
                    });
                }
            }
            else {
                if (type === 'string' || type === 'number') {
                    for (var _a = 0, dataSource_2 = dataSource; _a < dataSource_2.length; _a++) {
                        var item = dataSource_2[_a];
                        if (!ej2_base_2.isNullOrUndefined(item) && String(item) === text.toString()) {
                            value = type === 'string' ? text : this.getFormattedValue(text);
                            break;
                        }
                    }
                }
                else {
                    dataSource.filter(function (item) {
                        if (item[fields.text] === text) {
                            value = item[fields.value];
                        }
                    });
                }
            }
            return value;
        };
        ;
        DropDownBase.prototype.l10nUpdate = function (actionFailure) {
            if (this.noRecordsTemplate !== 'No Records Found' || this.actionFailureTemplate !== 'The Request Failed') {
                var template = actionFailure ? this.actionFailureTemplate : this.noRecordsTemplate;
                var compiledString = void 0;
                this.list.innerHTML = '';
                compiledString = ej2_base_1.compile(template);
                for (var _i = 0, _a = compiledString({}); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.list.appendChild(item);
                }
            }
            else {
                var l10nLocale = { noRecordsTemplate: 'No Records Found', actionFailureTemplate: 'The Request Failed' };
                this.l10n = new ej2_base_1.L10n('dropdownlist', l10nLocale, this.locale);
                this.list.innerHTML = actionFailure ?
                    this.l10n.getConstant('actionFailureTemplate') : this.l10n.getConstant('noRecordsTemplate');
            }
        };
        DropDownBase.prototype.getTextByValue = function (value) {
            var text;
            var dataSource = this.listData;
            var fields = this.fields;
            var type = this.typeOfData(dataSource).typeof;
            if (type === 'string' || type === 'number') {
                for (var _i = 0, dataSource_3 = dataSource; _i < dataSource_3.length; _i++) {
                    var item = dataSource_3[_i];
                    if (!ej2_base_2.isNullOrUndefined(item) && item.toString() === value.toString()) {
                        text = item.toString();
                        break;
                    }
                }
            }
            else {
                dataSource.filter(function (item) {
                    if (!ej2_base_2.isNullOrUndefined(item[fields.value]) && item[fields.value].toString() === value.toString()) {
                        text = item[fields.text];
                    }
                });
            }
            return text;
        };
        DropDownBase.prototype.getFormattedValue = function (value) {
            if (this.listData && this.listData.length) {
                var item = this.typeOfData(this.listData);
                if (typeof item.item[this.fields.value ? this.fields.value : 'value'] === 'number'
                    || item.typeof === 'number') {
                    return parseInt(value, 10);
                }
            }
            return value;
        };
        DropDownBase.prototype.setEnableRtl = function () {
            if (this.list) {
                this.enableRtlElements.push(this.list);
            }
            this.enableRtl ? ej2_base_1.addClass(this.enableRtlElements, exports.dropDownBaseClasses.rtl) :
                ej2_base_2.removeClass(this.enableRtlElements, exports.dropDownBaseClasses.rtl);
        };
        ;
        DropDownBase.prototype.initialize = function () {
            this.bindEvent = true;
            if (this.element.tagName === 'UL') {
                var jsonElement = ej2_lists_1.ListBase.createJsonFromElement(this.element);
                this.setProperties({ fields: { text: 'text', value: 'text' } }, true);
                this.resetList(jsonElement, this.fields);
            }
            else if (this.element.tagName === 'SELECT') {
                var dataSource = this.dataSource instanceof Array ? (this.dataSource.length > 0 ? true : false)
                    : !ej2_base_2.isNullOrUndefined(this.dataSource) ? true : false;
                if (!dataSource) {
                    this.renderItemsBySelect();
                }
            }
            else {
                this.setListData(this.dataSource, this.fields, this.query);
            }
        };
        ;
        DropDownBase.prototype.getPersistData = function () {
            return this.addOnPersist([]);
        };
        ;
        DropDownBase.prototype.setEnabled = function () {
            if (this.enabled) {
                this.element.setAttribute('aria-disabled', 'false');
            }
            else {
                this.element.setAttribute('aria-disabled', 'true');
            }
        };
        ;
        DropDownBase.prototype.renderItemsBySelect = function () {
            var element = this.element;
            var fields = { value: 'value', text: 'text' };
            var jsonElement = [];
            var group = element.querySelectorAll('select>optgroup');
            var option = element.querySelectorAll('select>option');
            this.getJSONfromOption(jsonElement, option, fields);
            if (group.length) {
                for (var i = 0; i < group.length; i++) {
                    var item = group[i];
                    var optionGroup = {};
                    optionGroup[fields.text] = item.label;
                    optionGroup.isHeader = true;
                    var child = item.querySelectorAll('option');
                    jsonElement.push(optionGroup);
                    this.getJSONfromOption(jsonElement, child, fields);
                }
                var items = element.querySelectorAll('select>option');
            }
            this.fields.text = fields.text;
            this.fields.value = fields.value;
            this.resetList(jsonElement, fields);
        };
        DropDownBase.prototype.getJSONfromOption = function (items, options, fields) {
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                var json = {};
                json[fields.text] = option.innerText;
                json[fields.value] = option.getAttribute(fields.value) ? option.getAttribute(fields.value) : option.innerText;
                items.push(json);
            }
        };
        DropDownBase.prototype.preRender = function () {
        };
        DropDownBase.prototype.setListData = function (dataSource, fields, query) {
            var _this = this;
            fields = fields ? fields : this.fields;
            var ulElement;
            this.isActive = true;
            this.showSpinner();
            if (dataSource instanceof ej2_data_1.DataManager) {
                this.isRequested = true;
                this.trigger('actionBegin');
                dataSource.executeQuery(this.getQuery(query)).then(function (e) {
                    _this.trigger('actionComplete', e);
                    var listItems = e.result;
                    ulElement = _this.renderItems(listItems, fields);
                    _this.onActionComplete(ulElement, listItems, e);
                    _this.isRequested = false;
                    _this.hideSpinner();
                }).catch(function (e) {
                    _this.isRequested = false;
                    _this.onActionFailure(e);
                    _this.hideSpinner();
                });
            }
            else {
                var dataManager = new ej2_data_1.DataManager(dataSource);
                var listItems = (this.getQuery(query)).executeLocal(dataManager);
                ulElement = this.renderItems(listItems, fields);
                this.onActionComplete(ulElement, listItems);
                this.hideSpinner();
            }
        };
        DropDownBase.prototype.showSpinner = function () {
        };
        DropDownBase.prototype.hideSpinner = function () {
        };
        DropDownBase.prototype.onActionFailure = function (e) {
            this.liCollections = [];
            this.trigger('actionFailure', e);
            this.l10nUpdate(true);
            ej2_base_1.addClass([this.list], exports.dropDownBaseClasses.noData);
        };
        DropDownBase.prototype.onActionComplete = function (ulElement, list, e) {
            this.listData = list;
            this.list.innerHTML = '';
            this.list.appendChild(ulElement);
            this.liCollections = this.list.querySelectorAll('.' + exports.dropDownBaseClasses.li);
            this.ulElement = this.list.querySelector('ul');
            this.postRender(this.list, list, this.bindEvent);
        };
        DropDownBase.prototype.postRender = function (listElement, list, bindEvent) {
            var focusItem = listElement.querySelector('.' + exports.dropDownBaseClasses.li);
            var selectedItem = listElement.querySelector('.' + exports.dropDownBaseClasses.selected);
            if (focusItem && !selectedItem) {
                ej2_base_1.addClass([focusItem], exports.dropDownBaseClasses.focus);
            }
            if (list.length <= 0) {
                this.l10nUpdate();
                ej2_base_1.addClass([listElement], exports.dropDownBaseClasses.noData);
            }
            else {
                listElement.classList.remove(exports.dropDownBaseClasses.noData);
            }
            if (this.groupTemplate) {
                this.renderGroupTemplate(listElement);
            }
        };
        DropDownBase.prototype.getQuery = function (query) {
            return query ? query : this.query ? this.query : new ej2_data_1.Query();
        };
        DropDownBase.prototype.renderGroupTemplate = function (listEle) {
            if (this.fields.groupBy !== null && this.dataSource || this.element.querySelector('.' + exports.dropDownBaseClasses.group)) {
                var dataSource = this.dataSource;
                var headerItems = listEle.querySelectorAll('.' + exports.dropDownBaseClasses.group);
                var tempHeaders = ej2_lists_1.ListBase.renderGroupTemplate(this.groupTemplate, dataSource, this.fields, headerItems);
            }
        };
        DropDownBase.prototype.createListItems = function (dataSource, fields) {
            if (dataSource && fields.groupBy || this.element.querySelector('optgroup')) {
                if (fields.groupBy) {
                    dataSource = ej2_lists_1.ListBase.groupDataSource(dataSource, fields);
                }
                ej2_base_1.addClass([this.list], exports.dropDownBaseClasses.grouping);
            }
            else {
                dataSource = this.getSortedDataSource(dataSource);
            }
            var iconCss = ej2_base_2.isNullOrUndefined(fields.iconCss) ? false : true;
            var options = (fields.text !== null || fields.value !== null) ? {
                fields: fields, showIcon: iconCss, ariaAttributes: { groupItemRole: 'presentation' }
            } : { fields: { value: 'text' } };
            return ej2_lists_1.ListBase.createList(dataSource, options, true);
        };
        ;
        DropDownBase.prototype.setFloatingHeader = function (e) {
            if (ej2_base_2.isNullOrUndefined(this.fixedHeaderElement)) {
                this.fixedHeaderElement = ej2_base_2.createElement('div', { className: exports.dropDownBaseClasses.fixedHead });
                if (!this.list.querySelector('li').classList.contains(exports.dropDownBaseClasses.group)) {
                    this.fixedHeaderElement.style.display = 'none';
                }
                ej2_base_2.prepend([this.fixedHeaderElement], this.list);
                this.setFixedHeader();
            }
            this.scrollStop(e);
        };
        DropDownBase.prototype.scrollStop = function (e) {
            var target = e.target;
            var liHeight = parseInt(getComputedStyle(this.liCollections[0], null).getPropertyValue('height'), 10);
            var topIndex = Math.round(target.scrollTop / liHeight);
            var liCollections = this.ulElement.querySelectorAll('li');
            for (var i = topIndex; i > -1; i--) {
                if (!ej2_base_2.isNullOrUndefined(liCollections[i]) && liCollections[i].classList.contains(exports.dropDownBaseClasses.group)) {
                    var currentLi = liCollections[i];
                    this.fixedHeaderElement.innerHTML = currentLi.innerHTML;
                    this.fixedHeaderElement.style.display = 'block';
                    break;
                }
                else {
                    this.fixedHeaderElement.style.display = 'none';
                }
            }
        };
        DropDownBase.prototype.renderItems = function (listData, fields) {
            var ulElement;
            if (this.itemTemplate && listData) {
                var dataSource = listData;
                if (dataSource && fields.groupBy) {
                    dataSource = ej2_lists_1.ListBase.groupDataSource(dataSource, fields, this.sortOrder);
                }
                else {
                    dataSource = this.getSortedDataSource(dataSource);
                }
                ulElement = ej2_lists_1.ListBase.renderContentTemplate(this.itemTemplate, dataSource, fields);
            }
            else {
                ulElement = this.createListItems(listData, fields);
            }
            return ulElement;
        };
        ;
        DropDownBase.prototype.typeOfData = function (items) {
            var item = { typeof: null, item: null };
            for (var i = 0; i < items.length; i++) {
                if (!ej2_base_2.isNullOrUndefined(items[i])) {
                    return item = { typeof: typeof items[i], item: items[i] };
                }
            }
            return item;
        };
        DropDownBase.prototype.setFixedHeader = function () {
            this.list.parentElement.style.display = 'block';
            var liWidth = this.liCollections[0].offsetWidth;
            this.fixedHeaderElement.style.width = liWidth.toString() + 'px';
            ej2_base_2.setStyleAttribute(this.fixedHeaderElement, { zIndex: 10 });
            var firstLi = this.ulElement.querySelector('.' + exports.dropDownBaseClasses.group);
            this.fixedHeaderElement.innerHTML = firstLi.innerHTML;
        };
        DropDownBase.prototype.getSortedDataSource = function (dataSource) {
            if (dataSource && this.sortOrder !== 'None') {
                var textField = this.fields.text ? this.fields.text : 'text';
                dataSource = ej2_lists_1.ListBase.getDataSource(dataSource, ej2_lists_1.ListBase.addSorting(this.sortOrder, textField));
            }
            return dataSource;
        };
        DropDownBase.prototype.getIndexByValue = function (value) {
            var index;
            var listItems = this.getItems();
            for (var i = 0; i < listItems.length; i++) {
                if (listItems[i].getAttribute('data-value') === value.toString()) {
                    index = i;
                    break;
                }
            }
            return index;
        };
        ;
        DropDownBase.prototype.dispatchEvent = function (element, type) {
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent(type, false, true);
            element.dispatchEvent(evt);
        };
        DropDownBase.prototype.setFields = function () {
            var fields = this.fields;
            if (this.fields.value && !this.fields.text) {
                this.fields.text = this.fields.value;
            }
            else if (!fields.value && fields.text) {
                this.fields.value = this.fields.text;
            }
            else if (!this.fields.value && !this.fields.text) {
                this.fields.value = this.fields.text = 'text';
            }
        };
        DropDownBase.prototype.resetList = function (dataSource, fields, query) {
            if (this.list) {
                this.setListData(dataSource, fields, query);
            }
        };
        DropDownBase.prototype.updateSelection = function () {
        };
        DropDownBase.prototype.renderList = function () {
            this.render();
        };
        DropDownBase.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'enableRtl':
                        this.setEnableRtl();
                        break;
                    case 'enabled':
                        this.setEnabled();
                        break;
                    case 'query':
                    case 'sortOrder':
                    case 'dataSource':
                    case 'itemTemplate':
                        this.resetList(this.dataSource);
                        break;
                    case 'groupTemplate':
                        this.renderGroupTemplate(this.list);
                        break;
                    case 'locale':
                        if (this.list) {
                            this.l10nUpdate();
                        }
                        break;
                }
            }
        };
        ;
        DropDownBase.prototype.render = function (isEmptyData) {
            this.list = ej2_base_2.createElement('div', { className: exports.dropDownBaseClasses.content, attrs: { 'tabindex': '0' } });
            this.list.classList.add(exports.dropDownBaseClasses.root);
            this.setFields();
            var rippleModel = { duration: 300, selector: '.' + exports.dropDownBaseClasses.li };
            this.rippleFun = ej2_base_3.rippleEffect(this.list, rippleModel);
            var group = this.element.querySelector('select>optgroup');
            if (this.fields.groupBy || !ej2_base_2.isNullOrUndefined(group)) {
                ej2_base_1.EventHandler.add(this.list, 'scroll', this.setFloatingHeader, this);
            }
            if (this.getModuleName() === 'dropdownbase') {
                if (this.element.getAttribute('tabindex')) {
                    this.list.setAttribute('tabindex', this.element.getAttribute('tabindex'));
                }
                ej2_base_2.removeClass([this.element], exports.dropDownBaseClasses.root);
                this.element.style.display = 'none';
                var wrapperElement = document.createElement('div');
                this.element.parentElement.insertBefore(wrapperElement, this.element);
                wrapperElement.appendChild(this.element);
                wrapperElement.appendChild(this.list);
            }
            this.setEnableRtl();
            this.setEnabled();
            if (!isEmptyData) {
                this.initialize();
            }
        };
        ;
        DropDownBase.prototype.getModuleName = function () {
            return 'dropdownbase';
        };
        ;
        DropDownBase.prototype.getItems = function () {
            return this.ulElement.querySelectorAll('.' + exports.dropDownBaseClasses.li);
        };
        ;
        DropDownBase.prototype.addItem = function (items, itemIndex) {
            if (!this.list || this.list.textContent === this.noRecordsTemplate) {
                this.renderList();
            }
            var itemsCount = this.getItems().length;
            var selectedItemValue = this.list.querySelector('.' + exports.dropDownBaseClasses.selected);
            items = items instanceof Array ? items : [items];
            var index;
            index = (ej2_base_2.isNullOrUndefined(itemIndex) || itemIndex < 0 || itemIndex > itemsCount - 1) ? itemsCount : itemIndex;
            var fields = this.fields;
            var liCollections = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var li = ej2_base_2.createElement('li', { className: exports.dropDownBaseClasses.li, id: 'option-add-' + i });
                li.setAttribute('data-value', item[fields.value]);
                li.setAttribute('role', 'option');
                li.appendChild(document.createTextNode(item[fields.text]));
                liCollections.push(li);
                this.listData.push(item);
                this.updateActionCompleteData(li, item);
            }
            if (itemsCount === 0 && ej2_base_2.isNullOrUndefined(this.list.querySelector('ul'))) {
                this.list.innerHTML = '';
                this.list.appendChild(this.ulElement);
                ej2_base_1.append(liCollections, this.ulElement);
            }
            else {
                for (var i = 0; i < items.length; i++) {
                    if (this.liCollections[index]) {
                        this.liCollections[index].parentNode.insertBefore(liCollections[i], this.liCollections[index]);
                    }
                    else {
                        this.ulElement.appendChild(liCollections[i]);
                    }
                    var tempLi = [].slice.call(this.liCollections);
                    tempLi.splice(index, 0, liCollections[i]);
                    this.liCollections = tempLi;
                    index += 1;
                }
            }
            if (selectedItemValue || itemIndex === 0) {
                this.updateSelection();
            }
        };
        DropDownBase.prototype.updateActionCompleteData = function (li, item) {
        };
        DropDownBase.prototype.getDataByValue = function (value) {
            var type = this.typeOfData(this.listData).typeof;
            if (type === 'string' || type === 'number') {
                for (var _i = 0, _a = this.listData; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (!ej2_base_2.isNullOrUndefined(item) && item === value) {
                        return item;
                    }
                }
            }
            else {
                for (var _b = 0, _c = this.listData; _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (!ej2_base_2.isNullOrUndefined(item) && item[this.fields.value ? this.fields.value : 'value'] === value) {
                        return item;
                    }
                }
            }
            return null;
        };
        DropDownBase.prototype.destroy = function () {
            if (document.body.contains(this.list)) {
                ej2_base_1.EventHandler.remove(this.list, 'scroll', this.setFloatingHeader);
                if (!ej2_base_2.isNullOrUndefined(this.rippleFun)) {
                    this.rippleFun();
                }
                ej2_base_2.detach(this.list);
            }
            _super.prototype.destroy.call(this);
        };
        ;
        return DropDownBase;
    }(ej2_base_1.Component));
    __decorate([
        ej2_base_1.Property({ text: null, value: null, iconCss: null, groupBy: null })
    ], DropDownBase.prototype, "fields", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], DropDownBase.prototype, "enableRtl", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], DropDownBase.prototype, "enablePersistence", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownBase.prototype, "itemTemplate", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownBase.prototype, "groupTemplate", void 0);
    __decorate([
        ej2_base_1.Property('No Records Found')
    ], DropDownBase.prototype, "noRecordsTemplate", void 0);
    __decorate([
        ej2_base_1.Property('The Request Failed')
    ], DropDownBase.prototype, "actionFailureTemplate", void 0);
    __decorate([
        ej2_base_1.Property('None')
    ], DropDownBase.prototype, "sortOrder", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], DropDownBase.prototype, "enabled", void 0);
    __decorate([
        ej2_base_1.Property([])
    ], DropDownBase.prototype, "dataSource", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownBase.prototype, "query", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownBase.prototype, "actionBegin", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownBase.prototype, "actionComplete", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownBase.prototype, "actionFailure", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownBase.prototype, "select", void 0);
    DropDownBase = __decorate([
        ej2_base_3.NotifyPropertyChanges
    ], DropDownBase);
    exports.DropDownBase = DropDownBase;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mask_base__ = __webpack_require__(69);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__mask_base__["q"]; });



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_index__ = __webpack_require__(60);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return __WEBPACK_IMPORTED_MODULE_0__popup_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(57);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "calculateRelativeBasedPosition", function() { return __WEBPACK_IMPORTED_MODULE_1__common_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "calculatePosition", function() { return __WEBPACK_IMPORTED_MODULE_1__common_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fit", function() { return __WEBPACK_IMPORTED_MODULE_1__common_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isCollide", function() { return __WEBPACK_IMPORTED_MODULE_1__common_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return __WEBPACK_IMPORTED_MODULE_1__common_index__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_index__ = __webpack_require__(59);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ButtonProps", function() { return __WEBPACK_IMPORTED_MODULE_2__dialog_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return __WEBPACK_IMPORTED_MODULE_2__dialog_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dialogBuilder", function() { return __WEBPACK_IMPORTED_MODULE_2__dialog_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_index__ = __webpack_require__(63);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return __WEBPACK_IMPORTED_MODULE_3__tooltip_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_3__tooltip_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tooltipBuilder", function() { return __WEBPACK_IMPORTED_MODULE_3__tooltip_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_index__ = __webpack_require__(61);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createSpinner", function() { return __WEBPACK_IMPORTED_MODULE_4__spinner_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "showSpinner", function() { return __WEBPACK_IMPORTED_MODULE_4__spinner_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hideSpinner", function() { return __WEBPACK_IMPORTED_MODULE_4__spinner_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setSpinner", function() { return __WEBPACK_IMPORTED_MODULE_4__spinner_index__["d"]; });







/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var queryString = '';
    var prevString = '';
    var matches = [];
    var activeClass = 'e-active';
    function incrementalSearch(keyCode, items, selectedIndex, ignoreCase) {
        queryString += String.fromCharCode(keyCode);
        setTimeout(function () { queryString = ''; }, 1000);
        var index;
        queryString = ignoreCase ? queryString.toLowerCase() : queryString;
        if (prevString === queryString) {
            for (var i = 0; i < matches.length; i++) {
                if (matches[i].classList.contains(activeClass)) {
                    index = i;
                    break;
                }
            }
            index = index + 1;
            return matches[index];
        }
        else {
            var listItems = items;
            var strLength = queryString.length;
            var text = void 0;
            var item = void 0;
            selectedIndex = selectedIndex ? selectedIndex + 1 : 0;
            var i = selectedIndex;
            matches = [];
            do {
                if (i === listItems.length) {
                    i = -1;
                }
                i === -1 ? index = 0 : index = i;
                item = listItems[index];
                text = ignoreCase ? item.innerText.toLowerCase() : item.innerText;
                if (text.substr(0, strLength) === queryString) {
                    matches.push(listItems[index]);
                }
                i++;
            } while (i !== selectedIndex);
            prevString = queryString;
            return matches[0];
        }
    }
    exports.incrementalSearch = incrementalSearch;
    function Search(inputVal, items, searchType, ignoreCase) {
        var listItems = items;
        ignoreCase = ignoreCase !== undefined && ignoreCase !== null ? ignoreCase : true;
        var itemData = { item: null, index: null };
        if (inputVal.length) {
            var strLength = inputVal.length;
            var queryStr = ignoreCase ? inputVal.toLocaleLowerCase() : inputVal;
            for (var i = 0, itemsData = listItems; i < itemsData.length; i++) {
                var item = itemsData[i];
                var text = (ignoreCase ? item.textContent.toLocaleLowerCase() : item.textContent).replace(/^\s+|\s+$/g, '');
                if ((searchType === 'Equal' && text === queryStr) || (searchType === 'StartsWith' && text.substr(0, strLength) === queryStr)) {
                    itemData.item = item;
                    itemData.index = i;
                    return { item: item, index: i };
                }
            }
            return itemData;
        }
        return itemData;
    }
    exports.Search = Search;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ajax; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);

var headerRegex = /^(.*?):[ \t]*([^\r\n]*)$/gm;
var defaultType = 'GET';
var Ajax = (function () {
    function Ajax(options, type, async) {
        this.mode = true;
        this.options = {};
        if (typeof options === 'string') {
            this.url = options;
            this.type = type ? type.toUpperCase() : defaultType;
            this.mode = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(async) ? async : true;
        }
        else if (typeof options === 'object') {
            this.options = options;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["h" /* merge */])(this, this.options);
        }
        this.type = this.type ? this.type.toUpperCase() : defaultType;
    }
    Ajax.prototype.send = function (data) {
        var _this = this;
        this.data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(data) ? this.data : data;
        var promise = new Promise(function (resolve, reject) {
            _this.httpRequest = new XMLHttpRequest();
            _this.httpRequest.onreadystatechange = function () { _this.stateChange(resolve, reject); };
            _this.httpRequest.open(_this.type, _this.url, _this.mode);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.data)) {
                _this.httpRequest.setRequestHeader('Content-Type', _this.contentType || 'application/json; charset=utf-8');
            }
            if (_this.beforeSend) {
                _this.beforeSend();
            }
            _this.httpRequest.send(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.data) ? _this.data : null);
        });
        return promise;
    };
    Ajax.prototype.successHandler = function (data) {
        if (this.onSuccess) {
            this.onSuccess(data, this);
        }
        return data;
    };
    Ajax.prototype.failureHandler = function (reason) {
        if (this.onFailure) {
            this.onFailure(this.httpRequest);
        }
        return reason;
    };
    Ajax.prototype.stateChange = function (resolve, reject) {
        var data = this.httpRequest.responseText;
        if (this.dataType && this.dataType.toLowerCase() === 'json') {
            if (data === '') {
                data = undefined;
            }
            else {
                try {
                    data = JSON.parse(data);
                }
                catch (error) {
                }
            }
        }
        if (this.httpRequest.readyState === 4) {
            if (this.httpRequest.status === 200 || this.httpRequest.status === 304) {
                resolve(this.successHandler(data));
            }
            else {
                reject(new Error(this.failureHandler(this.httpRequest.statusText)));
            }
        }
    };
    Ajax.prototype.getResponseHeader = function (key) {
        var responseHeaders;
        var header;
        responseHeaders = {};
        var headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        while (headers) {
            responseHeaders[headers[1].toLowerCase()] = headers[2];
            headers = headerRegex.exec(this.httpRequest.getAllResponseHeaders());
        }
        header = responseHeaders[key.toLowerCase()];
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(header) ? null : header;
    };
    return Ajax;
}());



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony export (immutable) */ __webpack_exports__["b"] = rippleEffect;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isRippleEnabled; });
/* harmony export (immutable) */ __webpack_exports__["d"] = enableRipple;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_handler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notify_property_change__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Animation = Animation_1 = (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["k" /* selectAll */])(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    Animation.delayAnimation = function (model) {
        if (model.delay) {
            setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
        }
        else {
            Animation_1.applyAnimation(model);
        }
    };
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var startTime = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    startTime = performance.now();
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    Animation.prototype.destroy = function () {
    };
    return Animation;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])('FadeIn')
], Animation.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])(400)
], Animation.prototype, "duration", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])('ease')
], Animation.prototype, "timingFunction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["a" /* Property */])(0)
], Animation.prototype, "delay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "progress", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "begin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "end", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__notify_property_change__["f" /* Event */])()
], Animation.prototype, "fail", void 0);
Animation = Animation_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_4__notify_property_change__["g" /* NotifyPropertyChanges */]
], Animation);

function rippleEffect(element, rippleOptions, done) {
    var rippleModel = getRippleModel(rippleOptions);
    if (rippleModel.rippleFlag === false || (rippleModel.rippleFlag === undefined && !isRippleEnabled)) {
        return Function;
    }
    element.setAttribute('data-ripple', 'true');
    __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
    __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
    __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    if (__WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].isPointer) {
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    }
    return (function () {
        element.removeAttribute('data-ripple');
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mousedown', rippleHandler);
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mouseup', rippleUpHandler);
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mouseleave', rippleLeaveHandler);
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'transitionend', rippleLeaveHandler);
    });
}
function getRippleModel(rippleOptions) {
    var rippleModel = {
        selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
        ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
        rippleFlag: rippleOptions && rippleOptions.rippleFlag,
        isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
        duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
    };
    return rippleModel;
}
function rippleHandler(e) {
    var target = (e.target);
    var selector = this.rippleOptions.selector;
    var element = selector ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* closest */])(target, selector) : target;
    if (!element || (this.rippleOptions && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* closest */])(target, this.rippleOptions.ignore))) {
        return;
    }
    var offset = element.getBoundingClientRect();
    var offsetX = e.pageX - document.body.scrollLeft;
    var offsetY = e.pageY - document.body.scrollTop;
    var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
    var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
    var radius = Math.sqrt(pageX * pageX + pageY * pageY);
    var diameter = radius * 2 + 'px';
    var x = offsetX - offset.left - radius;
    var y = offsetY - offset.top - radius;
    if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
        x = 0;
        y = 0;
        diameter = '100%';
    }
    element.classList.add('e-ripple');
    var duration = this.rippleOptions.duration.toString();
    var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' +
        'transition-duration: ' + duration + 'ms;';
    var rippleElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["a" /* createElement */])('div', { className: 'e-ripple-element', styles: styles });
    element.appendChild(rippleElement);
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');
    rippleElement.style.transform = 'scale(1)';
    if (element !== this.parent) {
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
    }
}
function rippleUpHandler(e) {
    removeRipple(e, this);
}
function rippleLeaveHandler(e) {
    removeRipple(e, this);
}
function removeRipple(e, eventArgs) {
    var duration = eventArgs.rippleOptions.duration;
    var target = (e.target);
    var selector = eventArgs.rippleOptions.selector;
    var element = selector ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* closest */])(target, selector) : target;
    if (!element || (element && element.className.indexOf('e-ripple') === -1)) {
        return;
    }
    var rippleElements = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom__["k" /* selectAll */])('.e-ripple-element', element);
    var rippleElement = rippleElements[rippleElements.length - 1];
    if (rippleElement) {
        rippleElement.style.opacity = '0.5';
    }
    if (eventArgs.parent !== element) {
        __WEBPACK_IMPORTED_MODULE_3__event_handler__["a" /* EventHandler */].remove(element, 'mouseleave', rippleLeaveHandler);
    }
    setTimeout(function () {
        if (rippleElement && rippleElement.parentNode) {
            rippleElement.parentNode.removeChild(rippleElement);
        }
        if (!element.getElementsByClassName('e-ripple-element').length) {
            element.classList.remove('e-ripple');
        }
        if (eventArgs.done) {
            eventArgs.done(e);
        }
    }, duration);
}
var isRippleEnabled = false;
function enableRipple(isRipple) {
    isRippleEnabled = isRipple;
    return isRippleEnabled;
}
var Animation_1;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);

var CanvasRenderer = (function () {
    function CanvasRenderer(rootID) {
        this.rootId = rootID;
    }
    CanvasRenderer.prototype.getOptionValue = function (options, key) {
        return options[key];
    };
    CanvasRenderer.prototype.createCanvas = function (options) {
        var canvasObj = document.createElement('canvas');
        canvasObj.setAttribute('id', this.rootId + '_canvas');
        this.ctx = canvasObj.getContext('2d');
        this.canvasObj = canvasObj;
        this.setCanvasSize(options.width, options.height);
        return this.canvasObj;
    };
    CanvasRenderer.prototype.setCanvasSize = function (width, height) {
        var element = document.getElementById(this.rootId);
        var size = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(element) ? element.getBoundingClientRect() : null;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.width)) {
            this.canvasObj.setAttribute('width', width ? width.toString() : size.width.toString());
        }
        else {
            this.canvasObj.setAttribute('width', this.width.toString());
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.height)) {
            this.canvasObj.setAttribute('height', height ? height.toString() : '450');
        }
        else {
            this.canvasObj.setAttribute('height', this.height.toString());
        }
    };
    CanvasRenderer.prototype.setAttributes = function (options) {
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        var dashArray = this.getOptionValue(options, 'stroke-dasharray');
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(dashArray)) {
            var dashArrayString = dashArray.split(',');
            this.ctx.setLineDash([parseInt(dashArrayString[0], 10), parseInt(dashArrayString[1], 10)]);
        }
        this.ctx.strokeStyle = this.getOptionValue(options, 'stroke');
    };
    CanvasRenderer.prototype.drawLine = function (options) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.moveTo(options.x1, options.y1);
        this.ctx.lineTo(options.x2, options.y2);
        this.ctx.stroke();
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawRectangle = function (options) {
        var canvasCtx = this.ctx;
        var cornerRadius = options.rx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.globalAlpha = this.getOptionValue(options, 'opacity');
        this.setAttributes(options);
        this.ctx.rect(options.x, options.y, options.width, options.height);
        if (cornerRadius !== null && cornerRadius >= 0) {
            this.drawCornerRadius(options);
        }
        else {
            if (options.fill === 'none') {
                options.fill = 'transparent';
            }
            this.ctx.fillStyle = options.fill;
            this.ctx.fillRect(options.x, options.y, options.width, options.height);
            this.ctx.stroke();
        }
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawCornerRadius = function (options) {
        var cornerRadius = options.rx;
        var x = options.x;
        var y = options.y;
        var width = options.width;
        var height = options.height;
        if (options.fill === 'none') {
            options.fill = 'transparent';
        }
        this.ctx.fillStyle = options.fill;
        if (width < 2 * cornerRadius) {
            cornerRadius = width / 2;
        }
        if (height < 2 * cornerRadius) {
            cornerRadius = height / 2;
        }
        this.ctx.beginPath();
        this.ctx.moveTo(x + width - cornerRadius, y);
        this.ctx.arcTo(x + width, y, x + width, y + height, cornerRadius);
        this.ctx.arcTo(x + width, y + height, x, y + height, cornerRadius);
        this.ctx.arcTo(x, y + height, x, y, cornerRadius);
        this.ctx.arcTo(x, y, x + width, y, cornerRadius);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawPath = function (options, canvasTranslate) {
        var path = options.d;
        var dataSplit = path.split(' ');
        var borderWidth = this.getOptionValue(options, 'stroke-width');
        var canvasCtx = this.ctx;
        var flag = true;
        this.ctx.save();
        this.ctx.beginPath();
        if (canvasTranslate) {
            this.ctx.translate(canvasTranslate[0], canvasTranslate[1]);
        }
        this.ctx.globalAlpha = options.opacity ? options.opacity : this.getOptionValue(options, 'fill-opacity');
        this.setAttributes(options);
        for (var i = 0; i < dataSplit.length; i = i + 3) {
            var x1 = parseFloat(dataSplit[i + 1]);
            var y1 = parseFloat(dataSplit[i + 2]);
            switch (dataSplit[i]) {
                case 'M':
                    if (!options.innerR && !options.cx) {
                        this.ctx.moveTo(x1, y1);
                    }
                    break;
                case 'L':
                    if (!options.innerR) {
                        this.ctx.lineTo(x1, y1);
                    }
                    break;
                case 'C':
                    var c1 = parseFloat(dataSplit[i + 3]);
                    var c2 = parseFloat(dataSplit[i + 4]);
                    var c3 = parseFloat(dataSplit[i + 5]);
                    var c4 = parseFloat(dataSplit[i + 6]);
                    this.ctx.bezierCurveTo(x1, y1, c1, c2, c3, c4);
                    i = i + 4;
                    break;
                case 'A':
                    if (!options.innerR) {
                        if (options.cx) {
                            this.ctx.arc(options.cx, options.cy, options.radius, 0, 2 * Math.PI, options.counterClockWise);
                        }
                        else {
                            this.ctx.moveTo(options.x, options.y);
                            this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                            this.ctx.lineTo(options.x, options.y);
                        }
                    }
                    else if (flag) {
                        this.ctx.arc(options.x, options.y, options.radius, options.start, options.end, options.counterClockWise);
                        this.ctx.arc(options.x, options.y, options.innerR, options.end, options.start, !options.counterClockWise);
                        flag = false;
                    }
                    i = i + 5;
                    break;
                case 'z':
                    this.ctx.closePath();
                    break;
            }
        }
        if (options.fill !== 'none' && options.fill !== undefined) {
            this.ctx.fillStyle = options.fill;
            this.ctx.fill();
        }
        if (borderWidth > 0) {
            this.ctx.stroke();
        }
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawText = function (options, label) {
        var fontWeight = this.getOptionValue(options, 'font-weight');
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(fontWeight) && fontWeight.toLowerCase() === 'regular') {
            fontWeight = 'normal';
        }
        var fontSize = this.getOptionValue(options, 'font-size');
        var fontFamily = this.getOptionValue(options, 'font-family');
        var fontStyle = this.getOptionValue(options, 'font-style').toLowerCase();
        var font = (fontStyle + ' ' + fontWeight + ' ' + fontSize + ' ' + fontFamily);
        var anchor = this.getOptionValue(options, 'text-anchor');
        var opacity = options.opacity !== undefined ? options.opacity : 1;
        if (anchor === 'middle') {
            anchor = 'center';
        }
        this.ctx.save();
        this.ctx.fillStyle = options.fill;
        this.ctx.font = font;
        this.ctx.textAlign = anchor;
        this.ctx.globalAlpha = opacity;
        if (options.baseline) {
            this.ctx.textBaseline = options.baseline;
        }
        var txtlngth = 0;
        this.ctx.translate(options.x + (txtlngth / 2), options.y);
        this.ctx.rotate(options.labelRotation * Math.PI / 180);
        this.ctx.fillText(label, 0, 0);
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawCircle = function (options) {
        var canvasCtx = this.ctx;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(options.cx, options.cy, options.r, 0, 2 * Math.PI);
        this.ctx.fillStyle = options.fill;
        this.ctx.globalAlpha = options.opacity;
        this.ctx.fill();
        this.setAttributes(options);
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawPolyline = function (options) {
        this.ctx.save();
        this.ctx.beginPath();
        var points = options.points.split(' ');
        for (var i = 0; i < points.length - 1; i++) {
            var point = points[i].split(',');
            var x = parseFloat(point[0]);
            var y = parseFloat(point[1]);
            if (i === 0) {
                this.ctx.moveTo(x, y);
            }
            else {
                this.ctx.lineTo(x, y);
            }
        }
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.stroke();
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawEllipse = function (options) {
        var canvasCtx = this.ctx;
        var circumference = Math.max(options.rx, options.ry);
        var scaleX = options.rx / circumference;
        var scaleY = options.ry / circumference;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(options.cx, options.cy);
        this.ctx.save();
        this.ctx.scale(scaleX, scaleY);
        this.ctx.arc(0, 0, circumference, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = options.fill;
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.lineWidth = this.getOptionValue(options, 'stroke-width');
        this.ctx.strokeStyle = options.stroke;
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx = canvasCtx;
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.drawImage = function (options) {
        this.ctx.save();
        var imageObj = new Image();
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.href)) {
            imageObj.src = options.href;
            this.ctx.drawImage(imageObj, options.x, options.y, options.width, options.height);
        }
        this.ctx.restore();
        this.dataUrl = this.canvasObj.toDataURL();
    };
    CanvasRenderer.prototype.createLinearGradient = function (colors) {
        var myGradient;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            myGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasObj.height);
        }
        var color = this.setGradientValues(colors, myGradient);
        return color;
    };
    CanvasRenderer.prototype.createRadialGradient = function (colors) {
        var myGradient;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            myGradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, this.canvasObj.height);
        }
        var colorName = this.setGradientValues(colors, myGradient);
        return colorName;
    };
    CanvasRenderer.prototype.setGradientValues = function (colors, myGradient) {
        var colorName;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            for (var i = 0; i <= colors.length - 1; i++) {
                var color = colors[i].color;
                var newColorStop = (colors[i].colorStop).slice(0, -1);
                var stopColor = parseInt(newColorStop, 10) / 100;
                myGradient.addColorStop(stopColor, color);
            }
            colorName = myGradient.toString();
        }
        else {
            colorName = colors[0].color.toString();
        }
        this.dataUrl = this.canvasObj.toDataURL();
        return colorName;
    };
    CanvasRenderer.prototype.setElementAttributes = function (options, element) {
        var keys = Object.keys(options);
        var values = Object.keys(options).map(function (key) { return options[key]; });
        for (var i = 0; i < keys.length; i++) {
            element.setAttribute(keys[i], values[i]);
        }
        return element;
    };
    CanvasRenderer.prototype.updateCanvasAttributes = function (options) {
        this.setElementAttributes(options, this.canvasObj);
        var ctx = this.ctx;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.dataUrl)) {
            var img_1 = new Image;
            img_1.onload = function () {
                ctx.drawImage(img_1, 0, 0);
            };
            img_1.src = this.dataUrl;
        }
    };
    return CanvasRenderer;
}());



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_loader__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observer__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_property__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notify_property_change__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__internationalization__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Component = (function (_super) {
    __extends(Component, _super);
    function Component(options, selector) {
        var _this = _super.call(this, options, selector) || this;
        _this.needsID = false;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.enableRtl)) {
            _this.setProperties({ 'enableRtl': __WEBPACK_IMPORTED_MODULE_6__internationalization__["b" /* rightToLeft */] }, true);
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.locale)) {
            _this.setProperties({ 'locale': __WEBPACK_IMPORTED_MODULE_6__internationalization__["d" /* defaultCulture */] }, true);
        }
        _this.moduleLoader = new __WEBPACK_IMPORTED_MODULE_1__module_loader__["a" /* ModuleLoader */](_this);
        _this.localObserver = new __WEBPACK_IMPORTED_MODULE_3__observer__["a" /* Observer */](_this);
        _this.detectFunction = new Function('args', 'var prop = Object.keys(args); if(prop.length){this[prop[0]] = args[prop[0]];}');
        __WEBPACK_IMPORTED_MODULE_6__internationalization__["a" /* onIntlChange */].on('notifyExternalChange', _this.detectFunction, _this);
        if (_this.enablePersistence) {
            window.addEventListener('unload', _this.setPersistData.bind(_this));
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(selector)) {
            _this.appendTo();
        }
        return _this;
    }
    Component.prototype.requiredModules = function () {
        return [];
    };
    ;
    Component.prototype.destroy = function () {
        if (this.isDestroyed) {
            return;
        }
        this.localObserver.destroy();
        if (this.refreshing) {
            return;
        }
        this.trigger('destroyed', { cancel: false });
        _super.prototype.destroy.call(this);
        this.moduleLoader.clean();
        __WEBPACK_IMPORTED_MODULE_6__internationalization__["a" /* onIntlChange */].off('notifyExternalChange', this.detectFunction);
        if (this.enablePersistence) {
            this.setPersistData();
        }
    };
    Component.prototype.refresh = function () {
        this.refreshing = true;
        this.moduleLoader.clean();
        this.destroy();
        this.clearChanges();
        this.localObserver = new __WEBPACK_IMPORTED_MODULE_3__observer__["a" /* Observer */](this);
        this.preRender();
        this.injectModules();
        this.render();
        this.refreshing = false;
    };
    Component.prototype.appendTo = function (selector) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(selector) && typeof (selector) === 'string') {
            this.element = document.querySelector(selector);
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(selector)) {
            this.element = selector;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.element)) {
            if (this.needsID && !this.element.id) {
                this.element.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["l" /* getUniqueID */])(this.getModuleName());
            }
            this.isProtectedOnChange = false;
            var inst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('ej2_instances', this.element);
            if (!inst || inst.indexOf(this) === -1) {
                _super.prototype.addInstance.call(this);
            }
            this.preRender();
            if (this.enablePersistence) {
                this.mergePersistData();
            }
            this.injectModules();
            this.render();
            this.trigger('created');
        }
    };
    Component.prototype.dataBind = function () {
        this.injectModules();
        _super.prototype.dataBind.call(this);
    };
    ;
    Component.prototype.on = function (event, handler, context) {
        if (typeof event === 'string') {
            this.localObserver.on(event, handler, context);
        }
        else {
            for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                var arg = event_1[_i];
                this.localObserver.on(arg.event, arg.handler, arg.context);
            }
        }
    };
    Component.prototype.off = function (event, handler) {
        if (typeof event === 'string') {
            this.localObserver.off(event, handler);
        }
        else {
            for (var _i = 0, event_2 = event; _i < event_2.length; _i++) {
                var arg = event_2[_i];
                this.localObserver.off(arg.event, arg.handler);
            }
        }
    };
    Component.prototype.notify = function (property, argument) {
        if (this.isDestroyed !== true) {
            this.localObserver.notify(property, argument);
        }
    };
    Component.prototype.getInjectedModules = function () {
        return this.injectedModules;
    };
    ;
    Component.Inject = function () {
        var moduleList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            moduleList[_i] = arguments[_i];
        }
        if (!this.prototype.injectedModules) {
            this.prototype.injectedModules = [];
        }
        for (var i = 0; i < moduleList.length; i++) {
            if (this.prototype.injectedModules.indexOf(moduleList[i]) === -1) {
                this.prototype.injectedModules.push(moduleList[i]);
            }
        }
    };
    Component.prototype.injectModules = function () {
        if (this.injectedModules && this.injectedModules.length) {
            this.moduleLoader.inject(this.requiredModules(), this.injectedModules);
        }
    };
    Component.prototype.mergePersistData = function () {
        var data = window.localStorage.getItem(this.getModuleName() + this.element.id);
        if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(data) || (data === ''))) {
            this.setProperties(JSON.parse(data), true);
        }
    };
    Component.prototype.setPersistData = function () {
        window.localStorage.setItem(this.getModuleName() + this.element.id, this.getPersistData());
    };
    Component.prototype.clearTemplate = function (templateName) {
    };
    Component.prototype.addOnPersist = function (options) {
        var _this = this;
        var persistObj = {};
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var key = options_1[_i];
            var objValue = void 0;
            objValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])(key, this);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["k" /* isUndefined */])(objValue)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* setValue */])(key, this.getActualProperties(objValue), persistObj);
            }
        }
        return JSON.stringify(persistObj, function (key, value) {
            return _this.getActualProperties(value);
        });
    };
    Component.prototype.getActualProperties = function (obj) {
        if (obj instanceof __WEBPACK_IMPORTED_MODULE_4__child_property__["a" /* ChildProperty */]) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* getValue */])('properties', obj);
        }
        else {
            return obj;
        }
    };
    Component.prototype.ignoreOnPersist = function (options) {
        return JSON.stringify(this.iterateJsonProperties(this.properties, options));
    };
    Component.prototype.iterateJsonProperties = function (obj, ignoreList) {
        var newObj = {};
        var _loop_1 = function (key) {
            if (ignoreList.indexOf(key) === -1) {
                var value = obj[key];
                if (typeof value === 'object' && !(value instanceof Array)) {
                    var newList = ignoreList.filter(function (str) {
                        return new RegExp(key + '.').test(str);
                    }).map(function (str) {
                        return str.replace(key + '.', '');
                    });
                    newObj[key] = this_1.iterateJsonProperties(this_1.getActualProperties(value), newList);
                }
                else {
                    newObj[key] = value;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newObj;
    };
    return Component;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__notify_property_change__["a" /* Property */])(false)
], Component.prototype, "enablePersistence", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__notify_property_change__["a" /* Property */])()
], Component.prototype, "enableRtl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__notify_property_change__["a" /* Property */])()
], Component.prototype, "locale", void 0);
Component = __decorate([
    __WEBPACK_IMPORTED_MODULE_5__notify_property_change__["g" /* NotifyPropertyChanges */]
], Component);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Draggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_property_change__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_handler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__child_property__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };
var positionProp = ['offsetLeft', 'offsetTop'];
var axisMapper = ['x', 'y'];
var axisValueMapper = ['left', 'top'];
var Position = (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Position;
}(__WEBPACK_IMPORTED_MODULE_5__child_property__["a" /* ChildProperty */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(0)
], Position.prototype, "left", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(0)
], Position.prototype, "top", void 0);
var Draggable = Draggable_1 = (function (_super) {
    __extends(Draggable, _super);
    function Draggable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.dragLimit = Draggable_1.getDefaultPosition();
        _this.borderWidth = Draggable_1.getDefaultPosition();
        _this.padding = Draggable_1.getDefaultPosition();
        _this.diffX = 0;
        _this.diffY = 0;
        _this.droppables = {};
        _this.bind();
        return _this;
    }
    Draggable.prototype.bind = function () {
        this.toggleEvents();
        if (__WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].isIE) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["b" /* addClass */])([this.element], 'e-block-touch');
        }
        this.droppables[this.scope] = {};
    };
    Draggable.getDefaultPosition = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["i" /* extend */])({}, defaultPosition);
    };
    Draggable.prototype.toggleEvents = function (isUnWire) {
        var ele;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(this.handle)) {
            ele = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["j" /* select */])(this.handle, this.element);
        }
        if (isUnWire) {
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(ele || this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchStartEvent, this.initialize);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(ele || this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchStartEvent, this.initialize, this);
        }
    };
    Draggable.prototype.initialize = function (evt) {
        this.target = evt.currentTarget;
        if (this.preventDefault && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches)) {
            evt.preventDefault();
        }
        if (this.abort) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["l" /* closest */])(evt.target, this.abort))) {
                return;
            }
        }
        this.element.setAttribute('aria-grabbed', 'true');
        var intCoord = this.getCoordinates(evt);
        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
        if (!this.clone) {
            var pos = this.element.getBoundingClientRect();
            this.relativeXPosition = intCoord.pageX - pos.left;
            this.relativeYPosition = intCoord.pageY - pos.top;
        }
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDragStart, this);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDestroy, this);
        this.toggleEvents(true);
        document.body.classList.add('e-prevent-select');
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].trigger(document.documentElement, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchStartEvent, evt);
    };
    Draggable.prototype.intDragStart = function (evt) {
        var isChangeTouch = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches);
        if (isChangeTouch && (evt.changedTouches.length !== 1)) {
            return;
        }
        var intCordinate = this.getCoordinates(evt);
        var pos;
        var styleProp = getComputedStyle(this.element);
        this.margin = {
            left: parseInt(styleProp.marginLeft, 10),
            top: parseInt(styleProp.marginTop, 10),
            right: parseInt(styleProp.marginRight, 10),
            bottom: parseInt(styleProp.marginBottom, 10),
        };
        var element = this.element;
        if (this.clone && this.dragTarget) {
            var intClosest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["l" /* closest */])(evt.target, this.dragTarget);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(intClosest)) {
                element = intClosest;
            }
        }
        this.offset = this.calculateParentPosition(element);
        this.position = this.getMousePosition(evt);
        var x = this.initialPosition.x - intCordinate.pageX;
        var y = this.initialPosition.y - intCordinate.pageY;
        var distance = Math.sqrt((x * x) + (y * y));
        if (distance >= this.distance) {
            var ele = this.getHelperElement(evt);
            if (!ele || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(ele)) {
                return;
            }
            var dragTargetElement = this.helperElement = ele;
            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
            if (this.dragStart) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStart', { event: evt, element: element, target: curTarget });
            }
            if (this.dragArea) {
                this.setDragArea();
            }
            else {
                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                this.borderWidth = { top: 0, left: 0 };
            }
            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
            if (this.clone && !this.enableTailMode) {
                this.diffX = this.position.left - this.offset.left;
                this.diffY = this.position.top - this.offset.top;
            }
            var posValue = this.getProcessedPositionValue({ top: (pos.top - this.diffY) + 'px',
                left: (pos.left - this.diffX) + 'px' });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["o" /* setStyleAttribute */])(dragTargetElement, {
                position: 'absolute', top: posValue.top, left: posValue.left
            });
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDragStart);
            __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDestroy);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["d" /* isVisible */])(dragTargetElement)) {
                __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDrag, this);
                __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDragStop, this);
                this.setGlobalDroppables(false, this.element, dragTargetElement);
            }
            else {
                document.body.classList.remove('e-prevent-select');
            }
        }
    };
    Draggable.prototype.getProcessedPositionValue = function (value) {
        if (this.axis) {
            if (this.axis === 'x') {
                value.top = '0px';
            }
            else if (this.axis === 'y') {
                value.left = '0px';
            }
        }
        if (this.queryPositionInfo) {
            return this.queryPositionInfo(value);
        }
        return value;
    };
    Draggable.prototype.calculateParentPosition = function (ele) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(ele)) {
            return { left: 0, top: 0 };
        }
        var rect = ele.getBoundingClientRect();
        var style = getComputedStyle(ele);
        return {
            left: (rect.left + window.pageXOffset) - parseInt(style.marginLeft, 10),
            top: (rect.top + window.pageYOffset) - parseInt(style.marginTop, 10)
        };
    };
    Draggable.prototype.intDrag = function (evt) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var left;
        var top;
        this.position = this.getMousePosition(evt);
        var docHeight = this.getDocumentWidthHeight('Height');
        if (docHeight < this.position.top) {
            this.position.top = docHeight;
        }
        var docWidth = this.getDocumentWidthHeight('Width');
        if (docWidth < this.position.left) {
            this.position.left = docWidth;
        }
        if (this.drag) {
            var curTarget = this.getProperTargetElement(evt);
            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.intOver(evt, eleObj.target);
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            this.hoverObject = eleObj;
        }
        else if (this.hoverObject) {
            this.hoverObject.instance.intOut(evt, eleObj.target);
            this.hoverObject.instance.dragData[this.scope] = null;
            this.hoverObject = null;
        }
        var helperElement = this.droppables[this.scope].helper;
        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
        var tLeft = this.parentClientRect.left;
        var tTop = this.parentClientRect.top;
        var intCoord = this.getCoordinates(evt);
        var pagex = intCoord.pageX;
        var pagey = intCoord.pageY;
        var dLeft = this.position.left - this.diffX;
        var dTop = this.position.top - this.diffY;
        if (this.dragArea) {
            var styles = getComputedStyle(helperElement);
            if (this.pageX !== pagex || this.skipDistanceCheck) {
                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft)
                    + parseFloat(styles.marginRight));
                if (this.dragLimit.left > dLeft) {
                    left = this.dragLimit.left;
                }
                else if (this.dragLimit.right < dLeft + helperWidth) {
                    left = this.dragLimit.right - helperWidth;
                }
                else {
                    left = dLeft;
                }
            }
            if (this.pageY !== pagey || this.skipDistanceCheck) {
                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                    + parseFloat(styles.marginBottom));
                if (this.dragLimit.top > dTop) {
                    top = this.dragLimit.top;
                }
                else if (this.dragLimit.bottom < dTop + helperHeight) {
                    top = this.dragLimit.bottom - helperHeight;
                }
                else {
                    top = dTop;
                }
            }
        }
        else {
            left = dLeft;
            top = dTop;
        }
        var iTop = tTop + this.borderWidth.top;
        var iLeft = tLeft + this.borderWidth.left;
        var dragValue = this.getProcessedPositionValue({ top: (top - iTop) + 'px', left: (left - iLeft) + 'px' });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["o" /* setStyleAttribute */])(helperElement, { left: dragValue.left, top: dragValue.top });
        this.position.left = left;
        this.position.top = top;
        this.pageX = pagex;
        this.pageY = pagey;
    };
    Draggable.prototype.getDocumentWidthHeight = function (str) {
        var docBody = document.body;
        var docEle = document.documentElement;
        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
        return returnValue;
    };
    Draggable.prototype.intDragStop = function (evt) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["k" /* isUndefined */])(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var type = ['touchend', 'pointerup', 'mouseup'];
        if (type.indexOf(evt.type) !== -1) {
            if (this.dragStop) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
            }
            this.intDestroy(evt);
        }
        else {
            this.element.setAttribute('aria-grabbed', 'false');
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.dragStopCalled = true;
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intDrop(evt, eleObj.target);
        }
        this.setGlobalDroppables(true);
        document.body.classList.remove('e-prevent-select');
    };
    Draggable.prototype.intDestroy = function (evt) {
        this.toggleEvents();
        document.body.classList.remove('e-prevent-select');
        this.element.setAttribute('aria-grabbed', 'false');
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDragStart);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDragStop);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDestroy);
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(document, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchMoveEvent, this.intDrag);
    };
    Draggable.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Draggable.prototype.getModuleName = function () {
        return 'draggable';
    };
    Draggable.prototype.setDragArea = function () {
        var eleWidthBound;
        var eleHeightBound;
        var top = 0;
        var left = 0;
        var ele;
        var type = typeof this.dragArea;
        if (type === 'string') {
            ele = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["j" /* select */])(this.dragArea);
        }
        else {
            ele = this.dragArea;
        }
        if (ele) {
            var elementArea = ele.getBoundingClientRect();
            eleWidthBound = elementArea.width ? elementArea.width : elementArea.right - elementArea.left;
            eleHeightBound = elementArea.height ? elementArea.height : elementArea.bottom - elementArea.top;
            var keys = ['Top', 'Left', 'Bottom', 'Right'];
            var styles = getComputedStyle(ele);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var tborder = styles['border' + key + 'Width'];
                var tpadding = styles['padding' + key];
                var lowerKey = key.toLowerCase();
                this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
            }
            top = elementArea.top;
            left = elementArea.left;
            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
            this.dragLimit.top = top + this.borderWidth.top + this.padding.top;
            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
        }
    };
    Draggable.prototype.getProperTargetElement = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var ele;
        var prevStyle = this.helperElement.style.display || '';
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["p" /* compareElementParent */])(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1) {
            this.helperElement.style.display = 'none';
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
            this.helperElement.style.display = prevStyle;
        }
        else {
            ele = evt.target;
        }
        return ele;
    };
    Draggable.prototype.getMousePosition = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var pageX = this.clone ? intCoord.pageX : intCoord.pageX - this.relativeXPosition;
        var pageY = this.clone ? intCoord.pageY : intCoord.pageY - this.relativeYPosition;
        return {
            left: pageX - (this.margin.left + this.cursorAt.left),
            top: pageY - (this.margin.top + this.cursorAt.top)
        };
    };
    Draggable.prototype.getCoordinates = function (evt) {
        if (evt.type.indexOf('touch') > -1) {
            return evt.changedTouches[0];
        }
        return evt;
    };
    Draggable.prototype.getHelperElement = function (evt) {
        var element;
        if (this.clone) {
            if (this.helper) {
                element = this.helper({ sender: evt, element: this.target });
            }
            else {
                element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["a" /* createElement */])('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                document.body.appendChild(element);
            }
        }
        else {
            element = this.element;
        }
        return element;
    };
    Draggable.prototype.setGlobalDroppables = function (reset, drag, helper) {
        this.droppables[this.scope] = reset ? null : {
            draggable: drag,
            helper: helper,
            draggedElement: this.element
        };
    };
    Draggable.prototype.checkTargetElement = function (evt) {
        var target = this.getProperTargetElement(evt);
        var dropIns = this.getDropInstance(target);
        if (!dropIns && target && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["j" /* isNullOrUndefined */])(target.parentNode)) {
            var parent_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["l" /* closest */])(target.parentNode, '.e-droppable') || target.parentElement;
            if (parent_1) {
                dropIns = this.getDropInstance(parent_1);
            }
        }
        return { target: target, instance: dropIns };
    };
    Draggable.prototype.getDropInstance = function (ele) {
        var name = 'getModuleName';
        var drop;
        var eleInst = ele && ele.ej2_instances;
        if (eleInst) {
            for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if (inst[name]() === 'droppable') {
                    drop = inst;
                    break;
                }
            }
        }
        return drop;
    };
    Draggable.prototype.destroy = function () {
        this.toggleEvents(true);
        _super.prototype.destroy.call(this);
    };
    return Draggable;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["b" /* Complex */])({}, Position)
], Draggable.prototype, "cursorAt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(true)
], Draggable.prototype, "clone", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "dragArea", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Draggable.prototype, "drag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Draggable.prototype, "dragStart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Draggable.prototype, "dragStop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(1)
], Draggable.prototype, "distance", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "handle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "abort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "helper", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])('default')
], Draggable.prototype, "scope", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])('')
], Draggable.prototype, "dragTarget", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "axis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Draggable.prototype, "queryPositionInfo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(false)
], Draggable.prototype, "enableTailMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(false)
], Draggable.prototype, "skipDistanceCheck", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])(true)
], Draggable.prototype, "preventDefault", void 0);
Draggable = Draggable_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_3__notify_property_change__["g" /* NotifyPropertyChanges */]
], Draggable);

var Draggable_1;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Droppable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_property_change__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_handler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util__ = __webpack_require__(1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Droppable = (function (_super) {
    __extends(Droppable, _super);
    function Droppable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.mouseOver = false;
        _this.dragData = {};
        _this.dragStopCalled = false;
        _this.bind();
        return _this;
    }
    Droppable.prototype.bind = function () {
        this.wireEvents();
    };
    Droppable.prototype.wireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].add(this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDrop, this);
    };
    Droppable.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Droppable.prototype.getModuleName = function () {
        return 'droppable';
    };
    Droppable.prototype.intOver = function (event, element) {
        if (!this.mouseOver) {
            this.trigger('over', { event: event, target: element });
            this.mouseOver = true;
        }
    };
    Droppable.prototype.intOut = function (event, element) {
        if (this.mouseOver) {
            this.trigger('out', { evt: event, target: element });
            this.mouseOver = false;
        }
    };
    Droppable.prototype.intDrop = function (evt, element) {
        if (!this.dragStopCalled) {
            return;
        }
        else {
            this.dragStopCalled = false;
        }
        var accept = true;
        var drag = this.dragData[this.scope];
        var isDrag = drag ? (drag.helper && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["d" /* isVisible */])(drag.helper)) : false;
        var area;
        if (isDrag) {
            area = this.isDropArea(evt, drag.helper, element);
            if (this.accept) {
                accept = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom__["q" /* matches */])(drag.helper, this.accept);
            }
        }
        if (isDrag && this.drop && area.canDrop && accept) {
            this.trigger('drop', { event: evt, target: area.target, droppedElement: drag.helper, dragData: drag });
        }
    };
    Droppable.prototype.isDropArea = function (evt, helper, element) {
        var area = { canDrop: true, target: element || evt.target };
        var isTouch = evt.type === 'touchend';
        if (isTouch || area.target === helper) {
            helper.style.display = 'none';
            var coord = isTouch ? (evt.changedTouches[0]) : evt;
            var ele = document.elementFromPoint(coord.clientX, coord.clientY);
            area.canDrop = false;
            area.canDrop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__util__["p" /* compareElementParent */])(ele, this.element);
            if (area.canDrop) {
                area.target = ele;
            }
            helper.style.display = '';
        }
        return area;
    };
    Droppable.prototype.destroy = function () {
        __WEBPACK_IMPORTED_MODULE_4__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* Browser */].touchEndEvent, this.intDrop);
        _super.prototype.destroy.call(this);
    };
    return Droppable;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])()
], Droppable.prototype, "accept", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["a" /* Property */])('default')
], Droppable.prototype, "scope", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Droppable.prototype, "drop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Droppable.prototype, "over", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__notify_property_change__["f" /* Event */])()
], Droppable.prototype, "out", void 0);
Droppable = __decorate([
    __WEBPACK_IMPORTED_MODULE_3__notify_property_change__["g" /* NotifyPropertyChanges */]
], Droppable);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intl_base__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_base__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(1);



var number = 'numbers';
var defNoSystem = 'defaultNumberingSystem';
var noSystem = 'numberingSystem';
var standalone = 'stand-alone';
var curWeekDay = 'curWeekDay';
var latnRegex = /^[0-9]*$/;
var abbreviateRegex = /\/MMMMM|MMMM|MMM|a|LLL|EEEEE|EEEE|E|ccc/;
var timeSetter = {
    minute: 'setMinutes',
    hour: 'setHours',
    second: 'setSeconds',
    day: 'setDate',
    month: 'setMonth'
};
var month = 'months';
var datePartMatcher = {
    'M': 'month',
    'd': 'day',
    'E': 'weekday',
    'c': 'weekday',
    'y': 'year',
    'm': 'minute',
    'h': 'hour',
    'H': 'hour',
    's': 'second',
    'L': 'month',
    'a': 'designator',
    'z': 'timeZone',
    'Z': 'timeZone',
    'G': 'era'
};
var DateParser = (function () {
    function DateParser() {
    }
    DateParser.dateParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = __WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].getDependables(cldr, culture);
        var numOptions = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getCurrentNumericOptions(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr));
        var parseOptions = {};
        var resPattern = option.format || __WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].getResultantPattern(option.skeleton, dependable.dateObject, option.type);
        var regexString = '';
        var hourOnly;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(resPattern)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["q" /* throwError */])('Format options or type given must be invalid');
        }
        else {
            parseOptions = { pattern: resPattern, evalposition: {} };
            var patternMatch = resPattern.match(__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].dateParseRegex) || [];
            var length_1 = patternMatch.length;
            var nRegx = numOptions.numericRegex;
            for (var i = 0; i < length_1; i++) {
                var str = patternMatch[i];
                var len = str.length;
                var char = (str[0] === 'K') ? 'h' : str[0];
                var isNumber = void 0;
                var canUpdate = void 0;
                var charKey = datePartMatcher[char];
                var optional = (len === 2) ? '' : '?';
                switch (char) {
                    case 'E':
                    case 'c':
                        var weekObject = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(dependable.dateObject[__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].days][standalone][__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].monthIndex[len]]);
                        regexString += '(' + Object.keys(weekObject).join('|') + ')';
                        break;
                    case 'M':
                    case 'L':
                    case 'd':
                    case 'm':
                    case 's':
                    case 'h':
                    case 'H':
                        canUpdate = true;
                        if ((char === 'M' || char === 'L') && len > 2) {
                            parseOptions[charKey] = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(dependable.dateObject[month][standalone][__WEBPACK_IMPORTED_MODULE_0__intl_base__["a" /* IntlBase */].monthIndex[len]]);
                            regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        }
                        else {
                            isNumber = true;
                            regexString += '(' + nRegx + nRegx + optional + ')';
                        }
                        if (char === 'h') {
                            parseOptions.hour12 = true;
                        }
                        break;
                    case 'y':
                        canUpdate = isNumber = true;
                        if (len === 2) {
                            regexString += '(' + nRegx + nRegx + ')';
                        }
                        else {
                            regexString += '(' + nRegx + '{' + len + ',})';
                        }
                        break;
                    case 'a':
                        canUpdate = true;
                        parseOptions[charKey] = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dayPeriods.format.wide', dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + ')';
                        break;
                    case 'G':
                        canUpdate = true;
                        var eText = (len <= 3) ? 'eraAbbr' : (len === 4) ? 'eraNames' : 'eraNarrow';
                        parseOptions[charKey] = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].reverseObject(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('eras.' + eText, dependable.dateObject));
                        regexString += '(' + Object.keys(parseOptions[charKey]).join('|') + '?)';
                        break;
                    case 'z':
                        var tval = new Date().getTimezoneOffset();
                        canUpdate = (tval !== 0);
                        parseOptions[charKey] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getValue */])('dates.timeZoneNames', dependable.parserObject);
                        var tzone = parseOptions[charKey];
                        hourOnly = (len < 4);
                        var hpattern = hourOnly ? '+H;-H' : tzone.hourFormat;
                        regexString += '(' + this.parseTimeZoneRegx(hpattern, tzone, nRegx) + ')?';
                        break;
                    case '\'':
                        var iString = str.replace(/\'/g, '');
                        regexString += '(' + iString + ')?';
                        break;
                    default:
                        regexString += '(.)?';
                        break;
                }
                if (canUpdate) {
                    parseOptions.evalposition[charKey] = { isNumber: isNumber, pos: i + 1, hourOnly: hourOnly };
                }
                if (i === length_1 - 1 && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(regexString)) {
                    parseOptions.parserRegex = new RegExp('^' + regexString + '$');
                }
            }
        }
        return function (value) {
            var parsedDateParts = _this.internalDateParse(value, parseOptions, numOptions);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(parsedDateParts) || !Object.keys(parsedDateParts).length) {
                return null;
            }
            return _this.getDateObject(parsedDateParts);
        };
    };
    DateParser.getDateObject = function (options, value) {
        var res = value || new Date();
        res.setMilliseconds(0);
        var tKeys = ['hour', 'minute', 'second', 'month', 'day'];
        var y = options.year;
        var desig = options.designator;
        var tzone = options.timeZone;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(y)) {
            var len = (y + '').length;
            if (len <= 2) {
                var century = Math.floor(res.getFullYear() / 100) * 100;
                y += century;
            }
            res.setFullYear(y);
        }
        for (var _i = 0, tKeys_1 = tKeys; _i < tKeys_1.length; _i++) {
            var key = tKeys_1[_i];
            var tValue = options[key];
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(tValue)) {
                if (key === 'month') {
                    tValue -= 1;
                    if (tValue < 0 || tValue > 11) {
                        return new Date('invalid');
                    }
                    var pDate = res.getDate();
                    res.setDate(1);
                    res[timeSetter[key]](tValue);
                    var lDate = new Date(res.getFullYear(), tValue + 1, 0).getDate();
                    res.setDate(pDate < lDate ? pDate : lDate);
                }
                else {
                    if (key === 'day') {
                        var lastDay = new Date(res.getFullYear(), res.getMonth() + 1, 0).getDate();
                        if ((tValue < 1 || tValue > lastDay)) {
                            return null;
                        }
                    }
                    res[timeSetter[key]](tValue);
                }
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(desig)) {
            var hour = res.getHours();
            if (desig === 'pm') {
                res.setHours(hour + (hour === 12 ? 0 : 12));
            }
            else if (hour === 12) {
                res.setHours(0);
            }
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(tzone)) {
            var tzValue = tzone - res.getTimezoneOffset();
            if (tzValue !== 0) {
                res.setMinutes(res.getMinutes() + tzValue);
            }
        }
        return res;
    };
    DateParser.internalDateParse = function (value, parseOptions, num) {
        var matches = value.match(parseOptions.parserRegex);
        var retOptions = { 'hour': 0, 'minute': 0, 'second': 0 };
        var nRegx = num.numericRegex;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(matches)) {
            return null;
        }
        else {
            var props = Object.keys(parseOptions.evalposition);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                var curObject = parseOptions.evalposition[prop];
                var matchString = matches[curObject.pos];
                if (curObject.isNumber) {
                    retOptions[prop] = this.internalNumberParser(matchString, num);
                }
                else {
                    if (prop === 'timeZone' && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(matchString)) {
                        var pos = curObject.pos;
                        var val = void 0;
                        var tmatch = matches[pos + 1];
                        var flag = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["k" /* isUndefined */])(tmatch);
                        if (curObject.hourOnly) {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 4], num) * 60;
                        }
                        else {
                            val = this.getZoneValue(flag, tmatch, matches[pos + 7], num) * 60;
                            val += this.getZoneValue(flag, matches[pos + 4], matches[pos + 10], num);
                        }
                        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["j" /* isNullOrUndefined */])(val)) {
                            retOptions[prop] = val;
                        }
                    }
                    else {
                        retOptions[prop] = parseOptions[prop][matchString];
                    }
                }
            }
            if (parseOptions.hour12) {
                retOptions.hour12 = true;
            }
        }
        return retOptions;
    };
    DateParser.internalNumberParser = function (value, option) {
        value = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].convertValueParts(value, option.numberParseRegex, option.numericPair);
        if (latnRegex.test(value)) {
            return +value;
        }
        return null;
    };
    DateParser.parseTimeZoneRegx = function (hourFormat, tZone, nRegex) {
        var pattern = tZone.gmtFormat;
        var ret;
        var result;
        var cRegex = '(' + nRegex + ')' + '(' + nRegex + ')';
        var splitStr;
        ret = hourFormat.replace('+', '\\+');
        if (hourFormat.indexOf('HH') !== -1) {
            ret = ret.replace(/HH|mm/g, '(' + cRegex + ')');
        }
        else {
            ret = ret.replace(/H|m/g, '(' + cRegex + '?)');
        }
        splitStr = (ret.split(';').map(function (str) {
            return pattern.replace('{0}', str);
        }));
        ret = splitStr.join('|') + '|' + tZone.gmtZeroFormat;
        return ret;
    };
    DateParser.getZoneValue = function (flag, val1, val2, num) {
        var value = this.internalNumberParser(flag ? val1 : val2, num);
        if (flag) {
            return -value;
        }
        return value;
    };
    return DateParser;
}());



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parser_base__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intl_base__ = __webpack_require__(7);



var formatRegex = /(^[ncpa]{1})([0-1]?[0-9]|20)?$/i;
var parseRegex = /^([^0-9]*)(([0-9,]*[0-9]+)(\.[0-9]+)?)([Ee][+-]?[0-9]+)?([^0-9]*)$/;
var groupRegex = /,/g;
var latnDecimalRegex = /^[0-9]*(\.[0-9]+)?$/;
var keys = ['minusSign', 'infinity'];
var NumberParser = (function () {
    function NumberParser() {
    }
    NumberParser.numberParser = function (culture, option, cldr) {
        var _this = this;
        var dependable = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getDependables(cldr, culture, true);
        var parseOptions = { custom: true };
        var numOptions;
        if ((__WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].formatRegex.test(option.format)) || !(option.format)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(parseOptions, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getProperNumericSkeleton(option.format || 'N'));
            parseOptions.custom = false;
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(parseOptions, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].customFormat(option.format, null, null));
        }
        numOptions = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getCurrentNumericOptions(dependable.parserObject, __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getNumberingSystem(cldr), true);
        parseOptions.symbolRegex = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].getSymbolRegex(Object.keys(numOptions.symbolMatch));
        parseOptions.infinity = numOptions.symbolNumberSystem[keys[1]];
        var symbolpattern = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getSymbolPattern(parseOptions.type, numOptions.numberSystem, dependable.numericObject, parseOptions.isAccount);
        if (symbolpattern) {
            symbolpattern = symbolpattern.replace(/\u00A4/g, __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].defaultCurrency);
            var split = symbolpattern.split(';');
            parseOptions.nData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[1] || '-' + split[0], true, '');
            parseOptions.pData = __WEBPACK_IMPORTED_MODULE_2__intl_base__["a" /* IntlBase */].getFormatData(split[0], true, '');
        }
        return function (value) {
            return _this.getParsedNumber(value, parseOptions, numOptions);
        };
    };
    NumberParser.getParsedNumber = function (value, options, numOptions) {
        var isNegative;
        var isPercent;
        var tempValue;
        var lead;
        var end;
        var ret;
        if (value.indexOf(options.infinity) !== -1) {
            return Infinity;
        }
        else {
            value = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].convertValueParts(value, options.symbolRegex, numOptions.symbolMatch);
            value = __WEBPACK_IMPORTED_MODULE_1__parser_base__["a" /* ParserBase */].convertValueParts(value, numOptions.numberParseRegex, numOptions.numericPair);
            if (value.indexOf('.') === 0) {
                value = '0' + value;
            }
            var matches = value.match(parseRegex);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(matches)) {
                return NaN;
            }
            lead = matches[1];
            tempValue = matches[2];
            var exponent = matches[5];
            end = matches[6];
            isNegative = options.custom ? ((lead === options.nData.nlead) && (end === options.nData.nend)) :
                ((lead.indexOf(options.nData.nlead) !== -1) && (end.indexOf(options.nData.nend) !== -1));
            isPercent = isNegative ?
                options.nData.isPercent :
                options.pData.isPercent;
            tempValue = tempValue.replace(groupRegex, '');
            if (exponent) {
                tempValue += exponent;
            }
            ret = +tempValue;
            if (options.type === 'percent' || isPercent) {
                ret = ret / 100;
            }
            if (options.custom || options.fractionDigits) {
                ret = parseFloat(ret.toFixed(options.custom ?
                    (isNegative ? options.nData.maximumFractionDigits : options.pData.maximumFractionDigits) : options.fractionDigits));
            }
            if (isNegative) {
                ret *= -1;
            }
            return ret;
        }
    };
    return NumberParser;
}());



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notify_property_change__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var keyCode = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'control': 17,
    'alt': 18,
    'pause': 19,
    'capslock': 20,
    'space': 32,
    'escape': 27,
    'pageup': 33,
    'pagedown': 34,
    'end': 35,
    'home': 36,
    'leftarrow': 37,
    'uparrow': 38,
    'rightarrow': 39,
    'downarrow': 40,
    'insert': 45,
    'delete': 46,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'semicolon': 186,
    'plus': 187,
    'comma': 188,
    'minus': 189,
    'dot': 190,
    'forwardslash': 191,
    'graveaccent': 192,
    'openbracket': 219,
    'backslash': 220,
    'closebracket': 221,
    'singlequote': 222
};
var KeyboardEvents = KeyboardEvents_1 = (function (_super) {
    __extends(KeyboardEvents, _super);
    function KeyboardEvents(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.keyPressHandler = function (e) {
            var isAltKey = e.altKey;
            var isCtrlKey = e.ctrlKey;
            var isShiftKey = e.shiftKey;
            var curkeyCode = e.which;
            var keys = Object.keys(_this.keyConfigs);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var configCollection = _this.keyConfigs[key].split(',');
                for (var _a = 0, configCollection_1 = configCollection; _a < configCollection_1.length; _a++) {
                    var rconfig = configCollection_1[_a];
                    var rKeyObj = KeyboardEvents_1.getKeyConfigData(rconfig.trim());
                    if (isAltKey === rKeyObj.altKey && isCtrlKey === rKeyObj.ctrlKey &&
                        isShiftKey === rKeyObj.shiftKey && curkeyCode === rKeyObj.keyCode) {
                        e.action = key;
                        if (_this.keyAction) {
                            _this.keyAction(e);
                        }
                    }
                }
            }
        };
        _this.bind();
        return _this;
    }
    KeyboardEvents.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    KeyboardEvents.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    ;
    KeyboardEvents.prototype.bind = function () {
        this.wireEvents();
    };
    KeyboardEvents.prototype.getModuleName = function () {
        return 'keyboard';
    };
    KeyboardEvents.prototype.wireEvents = function () {
        this.element.addEventListener(this.eventName, this.keyPressHandler);
    };
    KeyboardEvents.prototype.unwireEvents = function () {
        this.element.removeEventListener(this.eventName, this.keyPressHandler);
    };
    KeyboardEvents.getKeyConfigData = function (config) {
        if (config in this.configCache) {
            return this.configCache[config];
        }
        var keys = config.toLowerCase().split('+');
        var keyData = {
            altKey: (keys.indexOf('alt') !== -1 ? true : false),
            ctrlKey: (keys.indexOf('ctrl') !== -1 ? true : false),
            shiftKey: (keys.indexOf('shift') !== -1 ? true : false),
            keyCode: null
        };
        if (keys[keys.length - 1].length > 1 && !!Number(keys[keys.length - 1])) {
            keyData.keyCode = Number(keys[keys.length - 1]);
        }
        else {
            keyData.keyCode = KeyboardEvents_1.getKeyCode(keys[keys.length - 1]);
        }
        KeyboardEvents_1.configCache[config] = keyData;
        return keyData;
    };
    KeyboardEvents.getKeyCode = function (keyVal) {
        return keyCode[keyVal] || keyVal.toUpperCase().charCodeAt(0);
    };
    return KeyboardEvents;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));
KeyboardEvents.configCache = {};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__notify_property_change__["a" /* Property */])({})
], KeyboardEvents.prototype, "keyConfigs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__notify_property_change__["a" /* Property */])('keyup')
], KeyboardEvents.prototype, "eventName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__notify_property_change__["f" /* Event */])()
], KeyboardEvents.prototype, "keyAction", void 0);
KeyboardEvents = KeyboardEvents_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__notify_property_change__["g" /* NotifyPropertyChanges */]
], KeyboardEvents);

var KeyboardEvents_1;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return L10n; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internationalization__ = __webpack_require__(10);


var L10n = (function () {
    function L10n(controlName, localeStrings, locale) {
        this.controlName = controlName;
        this.localeStrings = localeStrings;
        this.setLocale(locale || __WEBPACK_IMPORTED_MODULE_1__internationalization__["d" /* defaultCulture */]);
    }
    L10n.prototype.setLocale = function (locale) {
        var intLocale = this.intGetControlConstant(L10n.locale, locale);
        if (!intLocale) {
            if (locale !== 'en-US') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["q" /* throwError */])('The specified locale or controlname not found in the locale object');
            }
            else {
                this.currentLocale = this.localeStrings;
            }
        }
        else {
            this.currentLocale = intLocale;
        }
    };
    L10n.load = function (localeObject) {
        this.locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(this.locale, localeObject, {}, true);
    };
    L10n.prototype.getConstant = function (prop) {
        return this.currentLocale[prop] || this.localeStrings[prop] || '';
    };
    L10n.prototype.intGetControlConstant = function (curObject, locale) {
        if (curObject[locale]) {
            return curObject[locale][this.controlName];
        }
        return null;
    };
    return L10n;
}());

L10n.locale = {};


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);

var SvgRenderer = (function () {
    function SvgRenderer(rootID) {
        this.svgLink = 'http://www.w3.org/2000/svg';
        this.rootId = rootID;
    }
    SvgRenderer.prototype.getOptionValue = function (options, key) {
        return options[key];
    };
    SvgRenderer.prototype.createSvg = function (options) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.id)) {
            options.id = this.rootId + '_svg';
        }
        this.svgObj = document.getElementById(options.id);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(document.getElementById(options.id))) {
            this.svgObj = document.createElementNS(this.svgLink, 'svg');
        }
        this.svgObj = this.setElementAttributes(options, this.svgObj);
        this.setSVGSize(options.width, options.height);
        return this.svgObj;
    };
    SvgRenderer.prototype.setSVGSize = function (width, height) {
        var element = document.getElementById(this.rootId);
        var size = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(element) ? element.getBoundingClientRect() : null;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.width) || this.width <= 0) {
            this.svgObj.setAttribute('width', width ? width.toString() : size.width.toString());
        }
        else {
            this.svgObj.setAttribute('width', this.width.toString());
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.height) || this.height <= 0) {
            this.svgObj.setAttribute('height', height ? height.toString() : '450');
        }
        else {
            this.svgObj.setAttribute('height', this.height.toString());
        }
    };
    SvgRenderer.prototype.drawPath = function (options) {
        var path = document.getElementById(options.id);
        if (path === null) {
            path = document.createElementNS(this.svgLink, 'path');
        }
        path = this.setElementAttributes(options, path);
        return path;
    };
    SvgRenderer.prototype.drawLine = function (options) {
        var line = document.getElementById(options.id);
        if (line === null) {
            line = document.createElementNS(this.svgLink, 'line');
        }
        line = this.setElementAttributes(options, line);
        return line;
    };
    SvgRenderer.prototype.drawRectangle = function (options) {
        var rectangle = document.getElementById(options.id);
        if (rectangle === null) {
            rectangle = document.createElementNS(this.svgLink, 'rect');
        }
        rectangle = this.setElementAttributes(options, rectangle);
        return rectangle;
    };
    SvgRenderer.prototype.drawCircle = function (options) {
        var circle = document.getElementById(options.id);
        if (circle === null) {
            circle = document.createElementNS(this.svgLink, 'circle');
        }
        circle = this.setElementAttributes(options, circle);
        return circle;
    };
    SvgRenderer.prototype.drawPolyline = function (options) {
        var polyline = document.getElementById(options.id);
        if (polyline === null) {
            polyline = document.createElementNS(this.svgLink, 'polyline');
        }
        polyline = this.setElementAttributes(options, polyline);
        return polyline;
    };
    SvgRenderer.prototype.drawEllipse = function (options) {
        var ellipse = document.getElementById(options.id);
        if (ellipse === null) {
            ellipse = document.createElementNS(this.svgLink, 'ellipse');
        }
        ellipse = this.setElementAttributes(options, ellipse);
        return ellipse;
    };
    SvgRenderer.prototype.drawPolygon = function (options) {
        var polygon = document.getElementById(options.id);
        if (polygon === null) {
            polygon = document.createElementNS(this.svgLink, 'polygon');
        }
        polygon = this.setElementAttributes(options, polygon);
        return polygon;
    };
    SvgRenderer.prototype.drawImage = function (options) {
        var img = document.createElementNS(this.svgLink, 'image');
        img.setAttributeNS(null, 'height', options.height.toString());
        img.setAttributeNS(null, 'width', options.width.toString());
        img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', options.href);
        img.setAttributeNS(null, 'x', options.x.toString());
        img.setAttributeNS(null, 'y', options.y.toString());
        img.setAttributeNS(null, 'id', options.id);
        img.setAttributeNS(null, 'visibility', options.visibility);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(this.getOptionValue(options, 'clip-path'))) {
            img.setAttributeNS(null, 'clip-path', this.getOptionValue(options, 'clip-path'));
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(options.preserveAspectRatio)) {
            img.setAttributeNS(null, 'preserveAspectRatio', options.preserveAspectRatio);
        }
        return img;
    };
    SvgRenderer.prototype.createText = function (options, label) {
        var text = document.createElementNS(this.svgLink, 'text');
        text = this.setElementAttributes(options, text);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(label)) {
            text.textContent = label;
        }
        return text;
    };
    SvgRenderer.prototype.createTSpan = function (options, label) {
        var tSpan = document.createElementNS(this.svgLink, 'tspan');
        tSpan = this.setElementAttributes(options, tSpan);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(label)) {
            tSpan.textContent = label;
        }
        return tSpan;
    };
    SvgRenderer.prototype.createTitle = function (text) {
        var title = document.createElementNS(this.svgLink, 'title');
        title.textContent = text;
        return title;
    };
    SvgRenderer.prototype.createDefs = function () {
        var defs = document.createElementNS(this.svgLink, 'defs');
        return defs;
    };
    SvgRenderer.prototype.createClipPath = function (options) {
        var clipPath = document.createElementNS(this.svgLink, 'clipPath');
        clipPath = this.setElementAttributes(options, clipPath);
        return clipPath;
    };
    SvgRenderer.prototype.createForeignObject = function (options) {
        var foreignObject = document.createElementNS(this.svgLink, 'foreignObject');
        foreignObject = this.setElementAttributes(options, foreignObject);
        return foreignObject;
    };
    SvgRenderer.prototype.createGroup = function (options) {
        var group = document.createElementNS(this.svgLink, 'g');
        group = this.setElementAttributes(options, group);
        return group;
    };
    SvgRenderer.prototype.createPattern = function (options, element) {
        var pattern = document.createElementNS(this.svgLink, element);
        pattern = this.setElementAttributes(options, pattern);
        return pattern;
    };
    SvgRenderer.prototype.createRadialGradient = function (colors, name, options) {
        var colorName;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            var newOptions = {
                'id': this.rootId + '_' + name + 'radialGradient',
                'cx': options.cx + '%',
                'cy': options.cy + '%',
                'r': options.r + '%',
                'fx': options.fx + '%',
                'fy': options.fy + '%'
            };
            this.drawGradient('radialGradient', newOptions, colors);
            colorName = 'url(#' + this.rootId + '_' + name + 'radialGradient)';
        }
        else {
            colorName = colors[0].color.toString();
        }
        return colorName;
    };
    SvgRenderer.prototype.createLinearGradient = function (colors, name, options) {
        var colorName;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(colors[0].colorStop)) {
            var newOptions = {
                'id': this.rootId + '_' + name + 'linearGradient',
                'x1': options.x1 + '%',
                'y1': options.y1 + '%',
                'x2': options.x2 + '%',
                'y2': options.y2 + '%'
            };
            this.drawGradient('linearGradient', newOptions, colors);
            colorName = 'url(#' + this.rootId + '_' + name + 'linearGradient)';
        }
        else {
            colorName = colors[0].color.toString();
        }
        return colorName;
    };
    SvgRenderer.prototype.drawGradient = function (gradientType, options, colors) {
        var defs = this.createDefs();
        var gradient = document.createElementNS(this.svgLink, gradientType);
        gradient = this.setElementAttributes(options, gradient);
        for (var i = 0; i < colors.length; i++) {
            var stop_1 = document.createElementNS(this.svgLink, 'stop');
            stop_1.setAttribute('offset', colors[i].colorStop);
            stop_1.setAttribute('stop-color', colors[i].color);
            stop_1.setAttribute('stop-opacity', '1');
            gradient.appendChild(stop_1);
        }
        defs.appendChild(gradient);
        return defs;
    };
    SvgRenderer.prototype.drawClipPath = function (options) {
        var defs = this.createDefs();
        var clipPath = this.createClipPath({ 'id': options.id });
        var rect = this.drawRectangle(options);
        clipPath.appendChild(rect);
        defs.appendChild(clipPath);
        return defs;
    };
    SvgRenderer.prototype.drawCircularClipPath = function (options) {
        var defs = this.createDefs();
        var clipPath = this.createClipPath({ 'id': options.id });
        var circle = this.drawCircle(options);
        clipPath.appendChild(circle);
        defs.appendChild(clipPath);
        return defs;
    };
    SvgRenderer.prototype.setElementAttributes = function (options, element) {
        var keys = Object.keys(options);
        for (var i = 0; i < keys.length; i++) {
            element.setAttribute(keys[i], options[keys[i]]);
        }
        return element;
    };
    return SvgRenderer;
}());



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
/* harmony export (immutable) */ __webpack_exports__["b"] = setTemplateEngine;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTemplateEngine;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom__ = __webpack_require__(3);


var HAS_ROW = /^[\n\r.]+\<tr|^\<tr/;
function compile(templateString, helper) {
    var compiler = engineObj.compile(templateString, helper);
    return function (data, component, propName) {
        var result = compiler(data, component, propName);
        if (typeof result === 'string') {
            var ele = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom__["a" /* createElement */])((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
            return ele.childNodes;
        }
        else {
            return result;
        }
    };
}
function setTemplateEngine(classObj) {
    engineObj.compile = classObj.compile;
}
function getTemplateEngine() {
    return engineObj.compile;
}
var Engine = (function () {
    function Engine() {
    }
    Engine.prototype.compile = function (templateString, helper) {
        if (helper === void 0) { helper = {}; }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__template__["a" /* compile */])(templateString, helper);
    };
    return Engine;
}());
var engineObj = { compile: new Engine().compile };


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export expression */
/* harmony export (immutable) */ __webpack_exports__["a"] = compile;
var LINES = new RegExp('\\n|\\r|\\s\\s+', 'g');
var QUOTES = new RegExp(/'|"/g);
var IF_STMT = new RegExp('if ?\\(');
var ELSE_STMT = new RegExp('else');
var FOR_STMT = new RegExp('for ?\\(');
var IF_OR_FOR = new RegExp('(\/if|\/for)');
var CALL_FUNCTION = new RegExp('\\((.*)\\)', '');
var NOT_NUMBER = new RegExp('^[0-9]+$', 'g');
var WORD = new RegExp('[\\w"\'.\\s+]+', 'g');
var DBL_QUOTED_STR = new RegExp('"(.*?)"', 'g');
var exp = new RegExp('\\${([^}]*)}', 'g');
function expression(value) {
    if (value) {
        exp = value;
    }
    return exp;
}
function compile(template, helper) {
    var argName = 'data';
    var evalExpResult = evalExp(template, argName, helper);
    var fnCode = "var str=\"" + evalExpResult + "\"; return str;";
    var fn = new Function(argName, fnCode);
    return fn.bind(helper);
}
function evalExp(str, nameSpace, helper) {
    var localKeys = [];
    return str.replace(LINES, '').replace(DBL_QUOTED_STR, '\'$1\'').replace(exp, function (match, cnt, offset, matchStr) {
        var matches = cnt.match(CALL_FUNCTION);
        if (matches) {
            var rlStr = matches[1];
            if (IF_STMT.test(cnt)) {
                cnt = '"; ' + cnt.replace(matches[1], rlStr.replace(WORD, function (str) {
                    str = str.trim();
                    return addNameSpace(str, !(QUOTES.test(str)) && (localKeys.indexOf(str) === -1), nameSpace, localKeys);
                })) + '{ \n str = str + "';
            }
            else if (FOR_STMT.test(cnt)) {
                var rlStr_1 = matches[1].split(' of ');
                cnt = '"; ' + cnt.replace(matches[1], function (mtc) {
                    localKeys.push(rlStr_1[0]);
                    localKeys.push(rlStr_1[0] + 'Index');
                    return 'var i=0; i < ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys) + '.length; i++';
                }) + '{ \n ' + rlStr_1[0] + '= ' + addNameSpace(rlStr_1[1], true, nameSpace, localKeys)
                    + '[i]; \n var ' + rlStr_1[0] + 'Index=i; \n str = str + "';
            }
            else {
                var fnStr = cnt.split('(');
                var fNameSpace = (helper && helper.hasOwnProperty(fnStr[0]) ? 'this.' : 'global');
                fNameSpace = (/\./.test(fnStr[0]) ? '' : fNameSpace);
                cnt = '" + ' + (fNameSpace === 'global' ? '' : fNameSpace) +
                    cnt.replace(rlStr, addNameSpace(matches[1].replace(',', nameSpace + '.'), (fNameSpace === 'global' ? false : true), nameSpace, localKeys)) +
                    '+"';
            }
        }
        else if (ELSE_STMT.test(cnt)) {
            cnt = '"; ' + cnt.replace(ELSE_STMT, '} else { \n str = str + "');
        }
        else if (!!cnt.match(IF_OR_FOR)) {
            cnt = cnt.replace(IF_OR_FOR, '"; \n } \n str = str + "');
        }
        else {
            cnt = '"+' + addNameSpace(cnt, (localKeys.indexOf(cnt) === -1), nameSpace, localKeys) + '+"';
        }
        return cnt;
    });
}
function addNameSpace(str, addNS, nameSpace, ignoreList) {
    return ((addNS && !(NOT_NUMBER.test(str)) && ignoreList.indexOf(str.split('.')[0]) === -1) ? nameSpace + '.' + str : str);
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Touch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notify_property_change__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_property__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_handler__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SwipeSettings = (function (_super) {
    __extends(SwipeSettings, _super);
    function SwipeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SwipeSettings;
}(__WEBPACK_IMPORTED_MODULE_4__child_property__["a" /* ChildProperty */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["a" /* Property */])(50)
], SwipeSettings.prototype, "swipeThresholdDistance", void 0);
var swipeRegex = /(Up|Down)/;
var Touch = (function (_super) {
    __extends(Touch, _super);
    function Touch(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.startEvent = function (evt) {
            var point = (evt.changedTouches ? evt.changedTouches[0] : evt);
            _this.isTouchMoved = false;
            _this.movedDirection = '';
            _this.startPoint = _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            _this.startEventData = point;
            _this.hScrollLocked = _this.vScrollLocked = false;
            _this.tStampStart = Date.now();
            _this.timeOutTapHold = setTimeout(function () { _this.tapHoldEvent(evt); }, _this.tapHoldThreshold);
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].add(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchMoveEvent, _this.moveEvent, _this);
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].add(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchEndEvent, _this.endEvent, _this);
        };
        _this.moveEvent = function (evt) {
            var point = evt.changedTouches ? evt.changedTouches[0] : evt;
            _this.movedPoint = point;
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            var eScrollArgs = {};
            if (_this.isTouchMoved) {
                clearTimeout(_this.timeOutTapHold);
                _this.calcScrollPoints(evt);
                var scrollArg = {
                    startEvents: _this.startEventData,
                    originalEvent: evt, startX: _this.startPoint.clientX,
                    startY: _this.startPoint.clientY, distanceX: _this.distanceX,
                    distanceY: _this.distanceY, scrollDirection: _this.scrollDirection,
                    velocity: _this.getVelocity(point)
                };
                eScrollArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eScrollArgs, {}, scrollArg);
                _this.trigger('scroll', eScrollArgs);
                _this.lastMovedPoint = { clientX: point.clientX, clientY: point.clientY };
            }
        };
        _this.endEvent = function (evt) {
            clearTimeout(_this.timeOutTapHold);
            var point = evt;
            if (evt.changedTouches) {
                point = evt.changedTouches[0];
            }
            _this.isTouchMoved = !(point.clientX === _this.startPoint.clientX && point.clientY === _this.startPoint.clientY);
            _this.endPoint = point;
            var dblTapTriggred = false;
            var eDblTapArgs;
            var eTapArgs;
            var eSwipeArgs;
            var tDistance = _this.swipeSettings.swipeThresholdDistance;
            _this.calcPoints(evt);
            var swipeArgs = {
                originalEvent: evt,
                startEvents: _this.startEventData,
                startX: _this.startPoint.clientX,
                startY: _this.startPoint.clientY,
                distanceX: _this.distanceX, distanceY: _this.distanceY, swipeDirection: _this.movedDirection,
                velocity: _this.getVelocity(point)
            };
            if (!_this.isTouchMoved) {
                eDblTapArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eDblTapArgs, _this.defaultArgs, {});
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["j" /* isNullOrUndefined */])(_this.lastTapTime) && (new Date().getTime() - _this.lastTapTime) < _this.doubleTapThreshold) {
                    clearTimeout(_this.timeOutTap);
                    dblTapTriggred = true;
                    _this.trigger('doubleTap', eDblTapArgs);
                }
                if (!dblTapTriggred) {
                    eTapArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eTapArgs, _this.defaultArgs, {});
                    _this.timeOutTap = setTimeout(function () {
                        _this.trigger('tap', eTapArgs);
                    }, (typeof _this.doubleTap !== 'function' ? 0 : _this.doubleTapThreshold));
                }
            }
            else {
                eSwipeArgs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["i" /* extend */])(eSwipeArgs, _this.defaultArgs, swipeArgs);
                var canTrigger = false;
                var ele = _this.element;
                var scrollBool = _this.isScrollable(ele);
                var moved = swipeRegex.test(_this.movedDirection);
                if ((tDistance < _this.distanceX && !moved) || (tDistance < _this.distanceY && moved)) {
                    if (!scrollBool) {
                        canTrigger = true;
                    }
                    else {
                        canTrigger = _this.checkSwipe(ele, moved);
                    }
                }
                if (canTrigger) {
                    _this.trigger('swipe', eSwipeArgs);
                }
            }
            _this.lastTapTime = new Date().getTime();
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchMoveEvent, _this.moveEvent);
            __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(_this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchEndEvent, _this.endEvent);
        };
        _this.bind();
        return _this;
    }
    Touch.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Touch.prototype.bind = function () {
        this.wireEvents();
        if (__WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].isIE) {
            this.element.classList.add('e-block-touch');
        }
    };
    Touch.prototype.destroy = function () {
        this.unwireEvents();
        _super.prototype.destroy.call(this);
    };
    Touch.prototype.wireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].add(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchStartEvent, this.startEvent, this);
    };
    Touch.prototype.unwireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchStartEvent, this.startEvent);
    };
    Touch.prototype.getModuleName = function () {
        return 'touch';
    };
    Touch.prototype.isScrollable = function (element) {
        var eleStyle = getComputedStyle(element);
        var style = eleStyle.overflow + eleStyle.overflowX + eleStyle.overflowY;
        if ((/(auto|scroll)/).test(style)) {
            return true;
        }
        return false;
    };
    Touch.prototype.tapHoldEvent = function (evt) {
        var eTapArgs;
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchMoveEvent, this.moveEvent);
        __WEBPACK_IMPORTED_MODULE_5__event_handler__["a" /* EventHandler */].remove(this.element, __WEBPACK_IMPORTED_MODULE_2__browser__["a" /* Browser */].touchEndEvent, this.endEvent);
        eTapArgs = { originalEvent: evt };
        this.trigger('tapHold', eTapArgs);
    };
    Touch.prototype.calcPoints = function (evt) {
        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.startPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.startPoint.clientY)));
        if (this.distanceX > this.distanceY) {
            this.movedDirection = (point.clientX > this.startPoint.clientX) ? 'Right' : 'Left';
        }
        else {
            this.movedDirection = (point.clientY < this.startPoint.clientY) ? 'Up' : 'Down';
        }
    };
    Touch.prototype.calcScrollPoints = function (evt) {
        var point = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.defaultArgs = { originalEvent: evt };
        this.distanceX = Math.abs((Math.abs(point.clientX) - Math.abs(this.lastMovedPoint.clientX)));
        this.distanceY = Math.abs((Math.abs(point.clientY) - Math.abs(this.lastMovedPoint.clientY)));
        if ((this.distanceX > this.distanceY || this.hScrollLocked === true) && this.vScrollLocked === false) {
            this.scrollDirection = (point.clientX > this.lastMovedPoint.clientX) ? 'Right' : 'Left';
            this.hScrollLocked = true;
        }
        else {
            this.scrollDirection = (point.clientY < this.lastMovedPoint.clientY) ? 'Up' : 'Down';
            this.vScrollLocked = true;
        }
    };
    Touch.prototype.getVelocity = function (pnt) {
        var newX = pnt.clientX;
        var newY = pnt.clientY;
        var newT = Date.now();
        var xDist = newX - this.startPoint.clientX;
        var yDist = newY - this.startPoint.clientX;
        var interval = newT - this.tStampStart;
        return Math.sqrt(xDist * xDist + yDist * yDist) / interval;
    };
    Touch.prototype.checkSwipe = function (ele, flag) {
        var keys = ['scroll', 'offset'];
        var temp = flag ? ['Height', 'Top'] : ['Width', 'Left'];
        if ((ele[keys[0] + temp[0]] <= ele[keys[1] + temp[0]])) {
            return true;
        }
        return (ele[keys[0] + temp[1]] === 0) ||
            (ele[keys[1] + temp[0]] + ele[keys[0] + temp[1]] >= ele[keys[0] + temp[0]]);
    };
    return Touch;
}(__WEBPACK_IMPORTED_MODULE_3__base__["a" /* Base */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "tap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "doubleTap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "tapHold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "swipe", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["f" /* Event */])()
], Touch.prototype, "scroll", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["a" /* Property */])(500)
], Touch.prototype, "doubleTapThreshold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["a" /* Property */])(750)
], Touch.prototype, "tapHoldThreshold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__notify_property_change__["b" /* Complex */])({}, SwipeSettings)
], Touch.prototype, "swipeSettings", void 0);
Touch = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__notify_property_change__["g" /* NotifyPropertyChanges */]
], Touch);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_base__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__list_base__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__list_base__["b"]; });



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_view_index__ = __webpack_require__(46);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FieldSettings", function() { return __WEBPACK_IMPORTED_MODULE_0__list_view_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return __WEBPACK_IMPORTED_MODULE_0__list_view_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "listViewBuilder", function() { return __WEBPACK_IMPORTED_MODULE_0__list_view_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_index__ = __webpack_require__(44);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "cssClass", function() { return __WEBPACK_IMPORTED_MODULE_1__common_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ListBase", function() { return __WEBPACK_IMPORTED_MODULE_1__common_index__["b"]; });




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_view__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__list_view__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__list_view__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__list_view__["c"]; });



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return listViewBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__syncfusion_ej2_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_list_base__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var effectsConfig = {
    'None': [],
    'SlideLeft': ['SlideRightOut', 'SlideLeftOut', 'SlideLeftIn', 'SlideRightIn'],
    'SlideDown': ['SlideTopOut', 'SlideBottomOut', 'SlideBottomIn', 'SlideTopIn'],
    'Zoom': ['FadeOut', 'FadeZoomOut', 'FadeZoomIn', 'FadeIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
var effectsRTLConfig = {
    'None': [],
    'SlideLeft': ['SlideLeftOut', 'SlideRightOut', 'SlideRightIn', 'SlideLeftIn'],
    'SlideDown': ['SlideBottomOut', 'SlideTopOut', 'SlideTopIn', 'SlideBottomIn'],
    'Zoom': ['FadeZoomOut', 'FadeOut', 'FadeIn', 'FadeZoomIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
var classNames = {
    root: 'e-listview',
    hover: 'e-hover',
    selected: 'e-active',
    parentItem: 'e-list-parent',
    listItem: 'e-list-item',
    listItemText: 'e-list-text',
    grpListItem: 'e-list-group-item',
    hasChild: 'e-has-child',
    view: 'e-view',
    header: 'e-list-header',
    headerText: 'e-headertext',
    text: 'e-text',
    disable: 'e-disabled',
    content: 'e-content',
    icon: 'e-icons',
    backIcon: 'e-icon-back'
};
var FieldSettings = (function (_super) {
    __extends(FieldSettings, _super);
    function FieldSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FieldSettings;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["ChildProperty"]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('id')
], FieldSettings.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('text')
], FieldSettings.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('isChecked')
], FieldSettings.prototype, "isChecked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('isVisible')
], FieldSettings.prototype, "isVisible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('enabled')
], FieldSettings.prototype, "enabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('iconCss')
], FieldSettings.prototype, "iconCss", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('child')
], FieldSettings.prototype, "child", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('tooltip')
], FieldSettings.prototype, "tooltip", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('groupBy')
], FieldSettings.prototype, "groupBy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('text')
], FieldSettings.prototype, "sortBy", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('htmlAttributes')
], FieldSettings.prototype, "htmlAttributes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('tableName')
], FieldSettings.prototype, "tableName", void 0);
var ListView = (function (_super) {
    __extends(ListView, _super);
    function ListView(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.curDSLevel = [];
        _this.curViewDS = [];
        _this.keyConfigs = {
            moveDown: 'downarrow',
            moveUp: 'uparrow',
            select: 'enter',
            back: 'backspace'
        };
        _this.animateOptions = {};
        _this.aniObj = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Animation"](_this.animateOptions);
        return _this;
    }
    ListView.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'htmlAttributes':
                    this.setHTMLAttribute();
                    break;
                case 'cssClass':
                    this.setCSSClass(oldProp.cssClass);
                    break;
                case 'enable':
                    this.setEnable();
                    break;
                case 'width':
                case 'height':
                    this.setSize();
                    break;
                case 'enableRtl':
                    this.setEnableRTL();
                    break;
                case 'fields':
                    this.listBaseOption.fields = this.fields.properties;
                    this.reRender();
                    break;
                case 'headerTitle':
                    if (!this.curDSLevel.length) {
                        this.header(this.headerTitle, false);
                    }
                    break;
                case 'showHeader':
                    {
                        this.header(this.headerTitle, false);
                    }
                    break;
                case 'dataSource':
                    this.reRender();
                    break;
                case 'sortOrder':
                case 'showIcon':
                    this.listBaseOption.showIcon = this.showIcon;
                    this.curViewDS = this.getSubDS();
                    this.resetCurrentList();
                    break;
                default:
                    break;
            }
        }
    };
    ListView.prototype.setHTMLAttribute = function () {
        if (Object.keys(this.htmlAttributes).length) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, this.htmlAttributes);
        }
    };
    ListView.prototype.setCSSClass = function (oldCSSClass) {
        if (this.cssClass) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], this.cssClass.split(' '));
        }
        if (oldCSSClass) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], oldCSSClass.split(' '));
        }
    };
    ListView.prototype.setSize = function () {
        this.element.style.height = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(this.height);
        this.element.style.width = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(this.width);
    };
    ListView.prototype.setEnable = function () {
        this.enableElement(this.element, this.enable);
    };
    ListView.prototype.setEnableRTL = function () {
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        else {
            this.element.classList.remove('e-rtl');
        }
    };
    ListView.prototype.enableElement = function (element, isEnabled) {
        if (isEnabled) {
            element.classList.remove(classNames.disable);
        }
        else {
            element.classList.add(classNames.disable);
        }
    };
    ListView.prototype.header = function (text, showBack) {
        if (this.headerEle === undefined && this.showHeader) {
            this.headerEle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: classNames.header });
            var innerHeaderEle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: classNames.headerText, innerHTML: this.headerTitle });
            var textEle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: classNames.text, innerHTML: innerHeaderEle.outerHTML });
            var hedBackButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', {
                className: classNames.icon + ' ' + classNames.backIcon + ' e-but-back',
                attrs: { style: 'display:none;' }
            });
            this.headerEle.appendChild(hedBackButton);
            this.headerEle.appendChild(textEle);
            this.element.classList.add('e-has-header');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["prepend"])([this.headerEle], this.element);
        }
        else if (this.headerEle) {
            if (this.showHeader) {
                this.headerEle.style.display = '';
                var textEle = this.headerEle.querySelector('.' + classNames.headerText);
                var hedBackButton = this.headerEle.querySelector('.' + classNames.backIcon);
                textEle.innerHTML = text;
                if (showBack === true) {
                    hedBackButton.style.display = '';
                }
                else {
                    hedBackButton.style.display = 'none';
                }
            }
            else {
                this.headerEle.style.display = 'none';
            }
        }
    };
    ListView.prototype.switchView = function (fromView, toView, reverse) {
        var _this = this;
        if (fromView && toView) {
            var fPos_1 = fromView.style.position;
            var overflow_1 = (this.element.style.overflow !== 'hidden') ? this.element.style.overflow : '';
            fromView.style.position = 'absolute';
            fromView.classList.add('e-view');
            var anim = void 0;
            var duration = this.animation.duration;
            if (this.animation.effect) {
                anim = (this.enableRtl ? effectsRTLConfig[this.animation.effect] : effectsConfig[this.animation.effect]);
            }
            else {
                var slideLeft = 'SlideLeft';
                var slideRight = 'SlideRight';
                anim = (this.enableRtl ? effectsRTLConfig[slideLeft] : effectsConfig[slideRight]);
                duration = 0;
            }
            this.element.style.overflow = 'hidden';
            this.aniObj.animate(fromView, {
                name: (reverse === true ? anim[0] : anim[1]),
                duration: duration,
                timingFunction: this.animation.easing,
                end: function (model) {
                    fromView.style.display = 'none';
                    _this.element.style.overflow = overflow_1;
                    fromView.style.position = fPos_1;
                    fromView.classList.remove('e-view');
                }
            });
            toView.style.display = '';
            this.aniObj.animate(toView, {
                name: (reverse === true ? anim[2] : anim[3]),
                duration: duration,
                timingFunction: this.animation.easing,
                end: function () {
                    _this.trigger('actionComplete');
                }
            });
            this.curUL = toView;
        }
    };
    ListView.prototype.preRender = function () {
        this.listBaseOption = {
            template: this.template,
            groupTemplate: this.groupTemplate, expandCollapse: true, listClass: '',
            ariaAttributes: { itemRole: 'listitem', listRole: 'list', itemText: '',
                groupItemRole: 'group', wrapperRole: 'presentation' },
            fields: this.fields.properties, sortOrder: this.sortOrder, showIcon: this.showIcon
        };
    };
    ListView.prototype.clickHandler = function (e) {
        var target = e.target;
        var classList = target.classList;
        if (classList.contains(classNames.backIcon) || classList.contains(classNames.headerText)) {
            this.back();
        }
        else {
            var li = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["closest"])(target.parentNode, '.' + classNames.listItem);
            if (li === null) {
                li = target;
            }
            this.setSelectLI(li, e);
        }
    };
    ListView.prototype.hoverHandler = function (e) {
        var curLi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["closest"])(e.target.parentNode, '.' + classNames.listItem);
        this.setHoverLI(curLi);
    };
    ListView.prototype.leaveHandler = function (e) {
        this.removeHover();
    };
    ;
    ListView.prototype.keyActionHandler = function (e) {
        e.preventDefault();
        switch (e.action) {
            case 'moveDown':
                this.hoverSiblingLI();
                break;
            case 'moveUp':
                this.hoverSiblingLI(true);
                break;
            case 'select':
                this.setSelectLI(this.curUL.querySelector('.' + classNames.hover), e);
                break;
            case 'back':
                this.back();
                break;
        }
    };
    ListView.prototype.swipeActionHandler = function (e) {
        if (e.swipeDirection === 'Right') {
            this.back();
        }
    };
    ListView.prototype.wireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'click', this.clickHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'mouseover', this.hoverHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'mouseout', this.leaveHandler, this);
        this.keyboardModule = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["KeyboardEvents"](this.element, {
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: this.keyConfigs
        });
        this.touchModule = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Touch"](this.element, { swipe: this.swipeActionHandler.bind(this) });
    };
    ListView.prototype.unWireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'click', this.clickHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'mouseover', this.hoverHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'mouseout', this.leaveHandler);
        this.keyboardModule.destroy();
        this.touchModule.destroy();
    };
    ListView.prototype.removeHover = function () {
        var hoverLI = this.element.querySelector('.' + classNames.hover);
        if (hoverLI) {
            hoverLI.classList.remove(classNames.hover);
        }
    };
    ListView.prototype.removeSelect = function () {
        var selectedLI = this.element.querySelectorAll('.' + classNames.selected);
        for (var _i = 0, selectedLI_1 = selectedLI; _i < selectedLI_1.length; _i++) {
            var ele = selectedLI_1[_i];
            ele.removeAttribute('aria-selected');
            if (ele.className !== '') {
                ele.classList.remove(classNames.selected);
            }
        }
    };
    ListView.prototype.isValidLI = function (li) {
        return (li && li.classList.contains(classNames.listItem)
            && !li.classList.contains(classNames.grpListItem)
            && !li.classList.contains(classNames.disable));
    };
    ListView.prototype.setSelectLI = function (li, e) {
        if (this.isValidLI(li)
            && !li.classList.contains(classNames.selected)
            && this.enable) {
            this.removeSelect();
            li.classList.add(classNames.selected);
            li.setAttribute('aria-selected', 'true');
            this.removeHover();
            var data = this.getItemData(li);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(data) && typeof this.dataSource[0] === 'string') {
                this.selectedItems = {
                    item: li,
                    text: li.innerText.trim(),
                    data: this.dataSource
                };
            }
            else {
                this.selectedItems = {
                    item: li,
                    text: data[this.listBaseOption.fields.text],
                    data: data
                };
            }
            var eventArgs = {};
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["merge"])(eventArgs, this.selectedItems);
            if (e) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["merge"])(eventArgs, { isInteracted: true, event: e });
            }
            this.trigger('select', eventArgs);
            this.selectedLI = li;
            this.renderSubList(li);
        }
    };
    ListView.prototype.setHoverLI = function (li) {
        if (this.isValidLI(li) && !li.classList.contains(classNames.hover) && this.enable) {
            var lastLi = this.element.querySelectorAll('.' + classNames.hover);
            if (lastLi && lastLi.length) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])(lastLi, classNames.hover);
            }
            if (!li.classList.contains(classNames.selected)) {
                li.classList.add(classNames.hover);
            }
        }
    };
    ListView.prototype.hoverSiblingLI = function (prev) {
        var lastLi = this.curUL.querySelector('.' + classNames.hover);
        var siblingLI;
        if (!lastLi) {
            lastLi = this.curUL.querySelector('.' + classNames.selected);
        }
        if (lastLi) {
            siblingLI = __WEBPACK_IMPORTED_MODULE_2__common_list_base__["b" /* ListBase */].getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), lastLi, prev);
        }
        else {
            if (prev) {
                var curLIs = this.curUL.querySelectorAll('.' + classNames.listItem);
                siblingLI = curLIs[curLIs.length - 1];
            }
            else {
                siblingLI = this.curUL.querySelector('.' + classNames.listItem);
            }
        }
        this.setHoverLI(siblingLI);
    };
    ListView.prototype.getSubDS = function () {
        var levelKeys = this.curDSLevel;
        if (levelKeys.length) {
            var ds = this.localData;
            for (var _i = 0, levelKeys_1 = levelKeys; _i < levelKeys_1.length; _i++) {
                var key = levelKeys_1[_i];
                this.curDSJSON = this.findItemFromDS(ds, { id: key });
                ds = this.curDSJSON ? this.curDSJSON[this.fields.child] : ds;
            }
            return ds;
        }
        return this.localData;
    };
    ListView.prototype.getItemData = function (li) {
        var fields = this.getElementUID(li);
        var curDS = this.dataSource;
        return this.findItemFromDS(curDS, fields);
    };
    ListView.prototype.findItemFromDS = function (dataSource, fields, parent) {
        var _this = this;
        var resultJSON;
        if (dataSource && dataSource.length && fields) {
            dataSource.some(function (data) {
                if ((fields.id || fields.text) &&
                    (!fields.id || data[_this.fields.id] === fields.id) &&
                    (!fields.text || data[_this.fields.text] === fields.text)) {
                    resultJSON = (parent ? dataSource : data);
                }
                else if (data.hasOwnProperty(_this.fields.child) && data[_this.fields.child].length) {
                    resultJSON = _this.findItemFromDS(data[_this.fields.child], fields, parent);
                }
                return !!resultJSON;
            });
        }
        else {
            resultJSON = dataSource;
        }
        return resultJSON;
    };
    ListView.prototype.getQuery = function () {
        var columns = [];
        var query = (this.query ? this.query : new __WEBPACK_IMPORTED_MODULE_1__syncfusion_ej2_data__["Query"]());
        if (!this.query) {
            for (var _i = 0, _a = Object.keys(this.fields.properties); _i < _a.length; _i++) {
                var column = _a[_i];
                if (column !== 'tableName' && !!(this.fields[column]) &&
                    this.fields[column] !==
                        __WEBPACK_IMPORTED_MODULE_2__common_list_base__["b" /* ListBase */].defaultMappedFields[column]
                    && columns.indexOf(this.fields[column]) === -1) {
                    columns.push(this.fields[column]);
                }
            }
            query.select(columns);
            if (this.fields.properties.hasOwnProperty('tableName')) {
                query.from(this.fields.tableName);
            }
        }
        return query;
    };
    ListView.prototype.setViewDataSource = function (dataSource) {
        if (dataSource === void 0) { dataSource = this.localData; }
        if (dataSource && this.fields.groupBy) {
            this.curViewDS = __WEBPACK_IMPORTED_MODULE_2__common_list_base__["b" /* ListBase */].groupDataSource(dataSource, this.fields, this.sortOrder);
        }
        else if (dataSource && this.sortOrder !== 'None') {
            this.curViewDS = __WEBPACK_IMPORTED_MODULE_2__common_list_base__["b" /* ListBase */].getDataSource(dataSource, __WEBPACK_IMPORTED_MODULE_2__common_list_base__["b" /* ListBase */].addSorting(this.sortOrder, this.fields.sortBy));
        }
        else {
            this.curViewDS = dataSource;
        }
    };
    ListView.prototype.isInAnimation = function () {
        return this.curUL.classList.contains('.e-animate');
    };
    ListView.prototype.setLocalData = function () {
        var _this = this;
        this.trigger('actionBegin');
        if (this.dataSource instanceof __WEBPACK_IMPORTED_MODULE_1__syncfusion_ej2_data__["DataManager"]) {
            this.dataSource.executeQuery(this.getQuery()).then(function (e) {
                if (_this.isDestroyed) {
                    return;
                }
                _this.localData = e.result;
                _this.renderList();
                _this.trigger('actionComplete', e);
            }).catch(function (e) {
                if (_this.isDestroyed) {
                    return;
                }
                _this.trigger('actionFailure', e);
            });
        }
        else if (!this.dataSource || !this.dataSource.length) {
            var ul = this.element.querySelector('ul');
            if (ul) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["remove"])(ul);
                this.setProperties({ dataSource: __WEBPACK_IMPORTED_MODULE_2__common_list_base__["b" /* ListBase */].createJsonFromElement(ul) }, true);
                this.localData = this.dataSource;
                this.renderList();
                this.trigger('actionComplete', { data: this.localData });
            }
        }
        else {
            this.localData = this.dataSource;
            this.renderList();
            this.trigger('actionComplete', { data: this.localData });
        }
    };
    ListView.prototype.reRender = function () {
        this.element.innerHTML = '';
        this.curUL = this.headerEle = undefined;
        this.setLocalData();
        this.header();
        this.contentContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: classNames.content });
        this.element.appendChild(this.contentContainer);
        this.renderIntoDom(this.ulElement);
    };
    ListView.prototype.resetCurrentList = function () {
        this.setViewDataSource(this.curViewDS);
        this.contentContainer.innerHTML = '';
        this.createList();
        this.renderIntoDom(this.curUL);
    };
    ListView.prototype.createList = function () {
        this.ulElement = this.curUL = __WEBPACK_IMPORTED_MODULE_2__common_list_base__["b" /* ListBase */].createList(this.curViewDS, this.listBaseOption);
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
    };
    ListView.prototype.renderSubList = function (li) {
        var uID = li.getAttribute('data-uid');
        if (li.classList.contains(classNames.hasChild) && uID) {
            var ul = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["closest"])(li.parentNode, '.' + classNames.parentItem);
            var ele = this.element.querySelector('[pid=\'' + uID + '\']');
            this.curDSLevel.push(uID);
            this.setViewDataSource(this.getSubDS());
            if (!ele) {
                ele = __WEBPACK_IMPORTED_MODULE_2__common_list_base__["b" /* ListBase */].createListFromJson(this.curViewDS, this.listBaseOption, this.curDSLevel.length);
                ele.setAttribute('pID', uID);
                ele.style.display = 'none';
                this.renderIntoDom(ele);
            }
            this.switchView(ul, ele);
            this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
            this.header(this.selectedItems.data[this.listBaseOption.fields.text], true);
            this.selectedLI = undefined;
        }
    };
    ListView.prototype.renderIntoDom = function (ele) {
        this.contentContainer.appendChild(ele);
    };
    ListView.prototype.renderList = function () {
        this.setViewDataSource();
        this.createList();
        this.contentContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: classNames.content });
        this.element.appendChild(this.contentContainer);
        this.renderIntoDom(this.ulElement);
    };
    ListView.prototype.getElementUID = function (obj) {
        var fields = {};
        if (obj instanceof Element) {
            fields.id = obj.getAttribute('data-uid');
        }
        else {
            fields = obj;
        }
        return fields;
    };
    ListView.prototype.render = function () {
        this.element.classList.add(classNames.root);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { role: 'list' });
        this.setCSSClass();
        this.setEnableRTL();
        this.setEnable();
        this.setSize();
        this.wireEvents();
        this.header();
        this.setLocalData();
        this.setHTMLAttribute();
        this.rippleFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["rippleEffect"])(this.element, {
            selector: '.' + classNames.listItem
        });
    };
    ListView.prototype.destroy = function () {
        this.unWireEvents();
        var classAr = [classNames.root, this.cssClass, classNames.disable, 'e-rtl',
            'e-has-header'];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], classAr);
        this.rippleFn();
        _super.prototype.destroy.call(this);
    };
    ListView.prototype.back = function () {
        var pID = this.curDSLevel[this.curDSLevel.length - 1];
        if (pID === undefined || this.isInAnimation()) {
            return;
        }
        this.curDSLevel.pop();
        this.setViewDataSource(this.getSubDS());
        var toUL = this.element.querySelector('[data-uid=\'' + pID + '\']');
        var fromUL = this.curUL;
        if (!toUL) {
            this.createList();
            this.renderIntoDom(this.ulElement);
            toUL = this.curUL;
        }
        else {
            toUL = toUL.parentElement;
        }
        var text = this.curDSJSON[this.fields.text];
        this.switchView(fromUL, toUL, true);
        this.removeSelect();
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
        this.header((this.curDSLevel.length ? text : this.headerTitle), (this.curDSLevel.length ? true : false));
    };
    ListView.prototype.selectItem = function (obj) {
        var resultJSON = this.getItemData(obj);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + resultJSON[this.fields.id] + '"]');
            if (li) {
                this.setSelectLI(li);
            }
        }
    };
    ListView.prototype.getSelectedItem = function () {
        return this.selectedItems;
    };
    ListView.prototype.findItem = function (fields) {
        return this.findItemFromDS(this.dataSource, fields);
    };
    ListView.prototype.enableItem = function (obj) {
        var resultJSON = this.getItemData(obj);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + resultJSON[this.fields.id] + '"]');
            if (li) {
                li.classList.remove(classNames.disable);
            }
            delete resultJSON[this.fields.enabled];
        }
    };
    ListView.prototype.disableItem = function (obj) {
        var resultJSON = this.getItemData(obj);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + resultJSON[this.fields.id] + '"]');
            if (li) {
                li.classList.add(classNames.disable);
            }
            resultJSON[this.fields.enabled] = false;
        }
    };
    ListView.prototype.showItem = function (obj) {
        this.showHideItem(obj, false, '');
    };
    ListView.prototype.hideItem = function (obj) {
        this.showHideItem(obj, true, 'none');
    };
    ListView.prototype.showHideItem = function (obj, isHide, display) {
        var resultJSON = this.getItemData(obj);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + resultJSON[this.fields.id] + '"]');
            if (li) {
                li.style.display = display;
            }
            if (isHide) {
                resultJSON[this.fields.isVisible] = false;
            }
            else {
                delete resultJSON[this.fields.isVisible];
            }
        }
    };
    ListView.prototype.addItem = function (data, fields) {
        var ds = this.findItemFromDS(this.dataSource, fields);
        var child = ds[this.fields.child];
        if (!child) {
            child = [];
        }
        child = child.concat(data);
        if (ds instanceof Array) {
            this.dataSource = this.localData = ds.concat(data);
            this.setViewDataSource();
        }
        else {
            ds[this.fields.child] = child;
        }
        this.resetCurrentList();
    };
    ListView.prototype.removeItem = function (obj) {
        var _this = this;
        var fields = this.getElementUID(obj);
        var curDS = this.findItemFromDS(this.dataSource, fields, true);
        if (curDS && obj) {
            var curAr_1;
            var idx_1;
            curDS.some(function (data, index, arr) {
                if ((fields.id || fields.text) &&
                    (!fields.id || data[_this.fields.id] === fields.id) &&
                    (!fields.text || data[_this.fields.text] === fields.text)) {
                    curAr_1 = arr;
                    idx_1 = index;
                    return true;
                }
                return false;
            });
            curAr_1.splice(idx_1, 1);
            this.resetCurrentList();
        }
    };
    ListView.prototype.getModuleName = function () {
        return 'listview';
    };
    ListView.prototype.getPersistData = function () {
        return this.addOnPersist(['cssClass', 'enableRtl', 'htmlAttributes',
            'enable', 'fields', 'animation', 'headerTitle',
            'sortOrder', 'showIcon', 'height', 'width']);
    };
    return ListView;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Component"]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])()
], ListView.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])({})
], ListView.prototype, "htmlAttributes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(true)
], ListView.prototype, "enable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])([])
], ListView.prototype, "dataSource", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])()
], ListView.prototype, "query", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Complex"])(__WEBPACK_IMPORTED_MODULE_2__common_list_base__["b" /* ListBase */].defaultMappedFields, FieldSettings)
], ListView.prototype, "fields", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])({ effect: 'SlideLeft', duration: 400, easing: 'ease' })
], ListView.prototype, "animation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('None')
], ListView.prototype, "sortOrder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], ListView.prototype, "showIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], ListView.prototype, "headerTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], ListView.prototype, "showHeader", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], ListView.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], ListView.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], ListView.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], ListView.prototype, "groupTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], ListView.prototype, "select", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], ListView.prototype, "actionBegin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], ListView.prototype, "actionComplete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], ListView.prototype, "actionFailure", void 0);
ListView = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], ListView);

var listViewBuilder = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["CreateBuilder"])(ListView);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numerictextbox_index__ = __webpack_require__(73);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NumericTextBox", function() { return __WEBPACK_IMPORTED_MODULE_0__numerictextbox_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "numerictextboxHelper", function() { return __WEBPACK_IMPORTED_MODULE_0__numerictextbox_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__ = __webpack_require__(70);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "regularExpressions", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createMask", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "applyMask", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wireEvents", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "unwireEvents", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "unstrippedValue", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "strippedValue", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "maskInputFocusHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "maskInputBlurHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "maskInputDropHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mobileRemoveFunction", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setMaskValue", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setElementValue", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "maskInput", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getVal", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getMaskedVal", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MaskUndo", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MaskedTextBox", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["r"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_index__ = __webpack_require__(68);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_2__input_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_validator_index__ = __webpack_require__(67);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ErrorOption", function() { return __WEBPACK_IMPORTED_MODULE_3__form_validator_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FormValidator", function() { return __WEBPACK_IMPORTED_MODULE_3__form_validator_index__["b"]; });






/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* unused harmony export buttonBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var cssClassName = {
    RTL: 'e-rtl',
    BUTTON: 'e-btn',
    PRIMARY: 'e-primary',
    ICONBTN: 'e-icon-btn'
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(options, element) {
        return _super.call(this, options, element) || this;
    }
    Button.prototype.preRender = function () {
    };
    Button.prototype.render = function () {
        this.initialize();
    };
    Button.prototype.initialize = function () {
        if (this.cssClass) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], this.cssClass.split(' '));
        }
        if (this.isPrimary) {
            this.element.classList.add(cssClassName.PRIMARY);
        }
        if (this.content) {
            this.element.innerHTML = this.content;
        }
        this.setIconCss();
        if (this.enableRtl) {
            this.element.classList.add(cssClassName.RTL);
        }
        if (this.disabled) {
            this.controlStatus(this.disabled);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["rippleEffect"])(this.element, { selector: '.' + cssClassName.BUTTON });
        this.wireEvents();
    };
    Button.prototype.controlStatus = function (disabled) {
        this.element.disabled = disabled;
    };
    Button.prototype.setIconCss = function () {
        if (this.iconCss) {
            if (!this.element.textContent) {
                this.element.classList.add(cssClassName.ICONBTN);
            }
            var span = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: 'e-btn-icon ' + this.iconCss });
            var node = this.element.childNodes[0];
            if (node && this.iconPosition === 'left') {
                this.element.insertBefore(span, node);
                span.classList.add('e-icon-left');
            }
            else {
                this.element.appendChild(span);
                if (this.iconPosition === 'right') {
                    span.classList.add('e-icon-right');
                }
            }
        }
    };
    Button.prototype.wireEvents = function () {
        if (this.isToggle) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'click', this.btnClickHandler, this);
        }
    };
    Button.prototype.unWireEvents = function () {
        if (this.isToggle) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'click', this.btnClickHandler);
        }
    };
    Button.prototype.btnClickHandler = function () {
        if (this.element.classList.contains('e-active')) {
            this.element.classList.remove('e-active');
        }
        else {
            this.element.classList.add('e-active');
        }
    };
    Button.prototype.destroy = function () {
        var span;
        var element = this.element;
        _super.prototype.destroy.call(this);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], [cssClassName.PRIMARY, cssClassName.RTL, cssClassName.ICONBTN, 'e-success',
            'e-info', 'e-danger', 'e-warning', 'e-flat', 'e-outline', 'e-small', 'e-bigger', 'e-active', 'e-round']);
        ['e-ripple', 'disabled'].forEach(function (value) {
            element.removeAttribute(value);
        });
        if (this.content) {
            element.innerHTML = element.innerHTML.replace(this.content, '');
        }
        span = element.querySelector('span.e-btn-icon');
        if (span) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(span);
        }
        this.unWireEvents();
    };
    Button.prototype.getModuleName = function () {
        return 'btn';
    };
    Button.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    Button.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'isPrimary':
                    if (newProp.isPrimary) {
                        this.element.classList.add(cssClassName.PRIMARY);
                    }
                    else {
                        this.element.classList.remove(cssClassName.PRIMARY);
                    }
                    break;
                case 'disabled':
                    this.controlStatus(this.disabled);
                    break;
                case 'iconCss':
                    var span = this.element.querySelector('span.e-btn-icon');
                    if (span) {
                        span.className = 'e-btn-icon ' + this.iconCss;
                        if (this.element.textContent) {
                            if (this.iconPosition === 'left') {
                                span.classList.add('e-icon-left');
                            }
                            else {
                                span.classList.add('e-icon-right');
                            }
                        }
                    }
                    else {
                        this.setIconCss();
                    }
                    break;
                case 'iconPosition':
                    span = this.element.querySelector('span.e-btn-icon');
                    if (span) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(span);
                    }
                    this.setIconCss();
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], oldProp.cssClass.split(' '));
                    }
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], newProp.cssClass.split(' '));
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        this.element.classList.add(cssClassName.RTL);
                    }
                    else {
                        this.element.classList.remove(cssClassName.RTL);
                    }
                    break;
                case 'content':
                    var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_common__["b" /* getTextNode */])(this.element);
                    if (node) {
                        node.textContent = newProp.content;
                    }
                    else {
                        this.element.innerHTML = newProp.content;
                        this.element.classList.remove(cssClassName.ICONBTN);
                        this.setIconCss();
                    }
                    break;
                case 'isToggle':
                    if (newProp.isToggle) {
                        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'click', this.btnClickHandler, this);
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'click', this.btnClickHandler);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], ['e-active']);
                    }
                    break;
            }
        }
    };
    return Button;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Component"]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('left')
], Button.prototype, "iconPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], Button.prototype, "iconCss", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Button.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Button.prototype, "isPrimary", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], Button.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], Button.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Button.prototype, "isToggle", void 0);
Button = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], Button);

var buttonBuilder = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["CreateBuilder"])(Button);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button__["a"]; });



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CheckBox */
/* unused harmony export checkBoxBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CHECK = 'e-check';
var DISABLED = 'e-checkbox-disabled';
var FRAME = 'e-frame';
var INDETERMINATE = 'e-stop';
var LABEL = 'e-label';
var RIPPLE = 'e-ripple-container';
var RIPPLECHECK = 'e-ripple-check';
var RIPPLEINDETERMINATE = 'e-ripple-stop';
var RTL = 'e-rtl';
var WRAPPER = 'e-checkbox-wrapper';
var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isKeyPressed = false;
        return _this;
    }
    CheckBox.prototype.changeState = function (state) {
        var ariaState;
        var rippleSpan;
        var frameSpan = this.getWrapper().getElementsByClassName(FRAME)[0];
        if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isRippleEnabled"]) {
            rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
        }
        if (state === 'check') {
            frameSpan.classList.remove(INDETERMINATE);
            frameSpan.classList.add(CHECK);
            if (rippleSpan) {
                rippleSpan.classList.remove(RIPPLEINDETERMINATE);
                rippleSpan.classList.add(RIPPLECHECK);
            }
            ariaState = 'true';
            this.element.checked = true;
        }
        else if (state === 'uncheck') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([frameSpan], [CHECK, INDETERMINATE]);
            if (rippleSpan) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([rippleSpan], [RIPPLECHECK, RIPPLEINDETERMINATE]);
            }
            ariaState = 'false';
            this.element.checked = false;
        }
        else {
            frameSpan.classList.remove(CHECK);
            frameSpan.classList.add(INDETERMINATE);
            if (rippleSpan) {
                rippleSpan.classList.remove(RIPPLECHECK);
                rippleSpan.classList.add(RIPPLEINDETERMINATE);
            }
            ariaState = 'mixed';
            this.element.indeterminate = true;
        }
        this.getWrapper().setAttribute('aria-checked', ariaState);
    };
    CheckBox.prototype.clickHandler = function (event) {
        this.focusOutHandler();
        if (this.indeterminate) {
            this.changeState(this.checked ? 'check' : 'uncheck');
            this.indeterminate = false;
            this.element.indeterminate = false;
        }
        else if (this.checked) {
            this.changeState('uncheck');
            this.checked = false;
        }
        else {
            this.changeState('check');
            this.checked = true;
        }
        var changeEventArgs = { checked: this.element.checked, event: event };
        this.trigger('change', changeEventArgs);
    };
    CheckBox.prototype.destroy = function () {
        var wrapper = this.getWrapper();
        _super.prototype.destroy.call(this);
        if (!this.disabled) {
            this.unWireEvents();
        }
        wrapper.parentNode.insertBefore(this.element, wrapper);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(wrapper);
        this.element.checked = false;
        if (this.indeterminate) {
            this.element.indeterminate = false;
        }
        if (this.name) {
            this.element.removeAttribute('name');
        }
        if (this.value) {
            this.element.removeAttribute('value');
        }
        if (this.disabled) {
            this.element.removeAttribute('disabled');
        }
    };
    CheckBox.prototype.focusHandler = function () {
        if (this.isKeyPressed) {
            this.getWrapper().classList.add('e-focus');
        }
    };
    CheckBox.prototype.focusOutHandler = function () {
        this.getWrapper().classList.remove('e-focus');
    };
    CheckBox.prototype.getModuleName = function () {
        return 'checkbox';
    };
    CheckBox.prototype.getPersistData = function () {
        return this.addOnPersist(['checked', 'indeterminate']);
    };
    CheckBox.prototype.getWrapper = function () {
        return this.element.parentElement.parentElement;
    };
    CheckBox.prototype.initialize = function () {
        if (this.name) {
            this.element.setAttribute('name', this.name);
        }
        if (this.value) {
            this.element.setAttribute('value', this.value);
        }
        if (this.checked) {
            this.changeState('check');
        }
        if (this.indeterminate) {
            this.changeState();
        }
        if (this.disabled) {
            this.setDisabled();
        }
    };
    CheckBox.prototype.initWrapper = function () {
        var wrapper = this.element.parentElement;
        if (!wrapper.classList.contains(WRAPPER)) {
            wrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', {
                className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
            });
            this.element.parentNode.insertBefore(wrapper, this.element);
        }
        var label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('label', { attrs: { for: this.element.id } });
        var frameSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: 'e-icons ' + FRAME });
        if (this.enableRtl) {
            wrapper.classList.add(RTL);
        }
        if (this.cssClass) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([wrapper], this.cssClass.split(' '));
        }
        wrapper.appendChild(label);
        label.appendChild(this.element);
        label.appendChild(frameSpan);
        if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isRippleEnabled"]) {
            var rippleSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: RIPPLE });
            if (this.labelPosition === 'before') {
                label.appendChild(rippleSpan);
            }
            else {
                label.insertBefore(rippleSpan, frameSpan);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["rippleEffect"])(rippleSpan, { duration: 400, isCenterRipple: true });
        }
        if (this.label) {
            this.setText(this.label);
        }
    };
    CheckBox.prototype.keyActionHandler = function (e) {
        if (e.action === 'space') {
            e.preventDefault();
            this.clickHandler(e);
            this.focusHandler();
        }
    };
    CheckBox.prototype.keyDownHandler = function () {
        this.isKeyPressed = true;
    };
    CheckBox.prototype.labelMouseHandler = function (e) {
        var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
        if (rippleSpan) {
            var event_1 = document.createEvent('MouseEvents');
            event_1.initEvent(e.type, false, true);
            rippleSpan.dispatchEvent(event_1);
        }
    };
    CheckBox.prototype.mouseDownHandler = function () {
        this.isKeyPressed = false;
    };
    CheckBox.prototype.onPropertyChanged = function (newProp, oldProp) {
        var wrapper = this.getWrapper();
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'checked':
                    this.indeterminate = false;
                    this.element.indeterminate = false;
                    this.changeState(newProp.checked ? 'check' : 'uncheck');
                    break;
                case 'indeterminate':
                    if (newProp.indeterminate) {
                        this.changeState();
                    }
                    else {
                        this.element.indeterminate = false;
                        this.changeState(this.checked ? 'check' : 'uncheck');
                    }
                    break;
                case 'disabled':
                    if (newProp.disabled) {
                        this.setDisabled();
                        this.unWireEvents();
                    }
                    else {
                        this.element.disabled = false;
                        wrapper.classList.remove(DISABLED);
                        wrapper.setAttribute('aria-disabled', 'false');
                        this.wireEvents();
                    }
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        wrapper.classList.remove(oldProp.cssClass);
                    }
                    wrapper.classList.add(newProp.cssClass);
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        wrapper.classList.add(RTL);
                    }
                    else {
                        wrapper.classList.remove(RTL);
                    }
                    break;
                case 'label':
                    this.setText(newProp.label);
                    break;
                case 'labelPosition':
                    var label = wrapper.getElementsByClassName(LABEL)[0];
                    var labelWrap = wrapper.getElementsByTagName('label')[0];
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(label);
                    if (newProp.labelPosition === 'after') {
                        labelWrap.appendChild(label);
                    }
                    else {
                        labelWrap.insertBefore(label, wrapper.getElementsByClassName(FRAME)[0]);
                    }
                    break;
                case 'name':
                    this.element.setAttribute('name', newProp.name);
                    break;
                case 'value':
                    this.element.setAttribute('value', newProp.value);
                    break;
            }
        }
    };
    CheckBox.prototype.preRender = function () {
        if (this.element.tagName === 'EJ-CHECKBOX') {
            var ejInst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])('ej2_instances', this.element);
            var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('input', { attrs: { 'type': 'checkbox' } });
            var props = ['change', 'cssClass', 'indeterminate', 'label', 'labelPosition'];
            var wrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('EJ-CHECKBOX', {
                className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
            });
            for (var index = 0, len = this.element.attributes.length; index < len; index++) {
                if (props.indexOf(this.element.attributes[index].nodeName) === -1) {
                    input.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
                }
            }
            this.element.parentNode.insertBefore(input, this.element);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.element);
            this.element = input;
            this.element.parentNode.insertBefore(wrapper, this.element);
            wrapper.appendChild(this.element);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])('ej2_instances', ejInst, this.element);
        }
        if (this.element.getAttribute('type') !== 'checkbox') {
            this.element.setAttribute('type', 'checkbox');
        }
        if (!this.element.id) {
            this.element.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getUniqueID"])('e-' + this.getModuleName());
        }
    };
    CheckBox.prototype.render = function () {
        this.initWrapper();
        this.initialize();
        if (!this.disabled) {
            this.wireEvents();
        }
    };
    CheckBox.prototype.setDisabled = function () {
        var wrapper = this.getWrapper();
        this.element.disabled = true;
        wrapper.classList.add(DISABLED);
        wrapper.setAttribute('aria-disabled', 'true');
    };
    CheckBox.prototype.setText = function (text) {
        var label = this.getWrapper().getElementsByClassName(LABEL)[0];
        if (label) {
            label.textContent = text;
        }
        else {
            label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: LABEL, innerHTML: text });
            var labelWrap = this.getWrapper().getElementsByTagName('label')[0];
            if (this.labelPosition === 'before') {
                labelWrap.insertBefore(label, this.getWrapper().getElementsByClassName(FRAME)[0]);
            }
            else {
                labelWrap.appendChild(label);
            }
        }
    };
    CheckBox.prototype.unWireEvents = function () {
        var wrapper = this.getWrapper();
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'click', this.clickHandler);
        this.keyboardModule.destroy();
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(document, 'keydown', this.keyDownHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(wrapper, 'mousedown', this.mouseDownHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'focus', this.focusHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'focusout', this.focusOutHandler);
        var label = wrapper.getElementsByTagName('label')[0];
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(label, 'mousedown', this.labelMouseHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(label, 'mouseup', this.labelMouseHandler);
    };
    CheckBox.prototype.wireEvents = function () {
        var wrapper = this.getWrapper();
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'click', this.clickHandler, this);
        this.keyboardModule = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["KeyboardEvents"](wrapper, {
            eventName: 'keyup',
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: { space: 'space' }
        });
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(document, 'keydown', this.keyDownHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(wrapper, 'mousedown', this.mouseDownHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'focus', this.focusHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'focusout', this.focusOutHandler, this);
        var label = wrapper.getElementsByTagName('label')[0];
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(label, 'mousedown', this.labelMouseHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(label, 'mouseup', this.labelMouseHandler, this);
    };
    return CheckBox;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Component"]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], CheckBox.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], CheckBox.prototype, "checked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], CheckBox.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], CheckBox.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], CheckBox.prototype, "indeterminate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], CheckBox.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('after')
], CheckBox.prototype, "labelPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], CheckBox.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], CheckBox.prototype, "value", void 0);
CheckBox = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], CheckBox);

var checkBoxBuilder = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["CreateBuilder"])(CheckBox);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__check_box__ = __webpack_require__(51);
/* unused harmony namespace reexport */



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__(16);
/* unused harmony namespace reexport */



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_index__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_index__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__button_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_box_index__ = __webpack_require__(52);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radio_button_index__ = __webpack_require__(55);
/* unused harmony namespace reexport */






/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__radio_button__ = __webpack_require__(56);
/* unused harmony namespace reexport */



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RadioButton */
/* unused harmony export radioButtonBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LABEL = 'e-label';
var RIPPLE = 'e-ripple-container';
var RTL = 'e-rtl';
var WRAPPER = 'e-radio-wrapper';
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isKeyPressed = false;
        return _this;
    }
    RadioButton.prototype.changeHandler = function (event) {
        this.checked = true;
        this.dataBind();
        var changeEventArgs = { checked: true, event: event };
        this.trigger('change', changeEventArgs);
    };
    RadioButton.prototype.updateChange = function (state) {
        var input;
        var name = this.element.getAttribute('name');
        var radioGrp = document.querySelectorAll('input.e-radio[name="' + name + '"]');
        for (var i = 0; i < radioGrp.length; i++) {
            input = radioGrp[i];
            if (input !== this.element) {
                input.ej2_instances[0].checked = false;
            }
        }
    };
    RadioButton.prototype.destroy = function () {
        var label = this.getLabel();
        _super.prototype.destroy.call(this);
        if (!this.disabled) {
            this.unWireEvents();
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(label);
        this.element.checked = false;
        if (this.name) {
            this.element.removeAttribute('name');
        }
        if (this.value) {
            this.element.removeAttribute('value');
        }
        if (this.disabled) {
            this.element.removeAttribute('disabled');
        }
    };
    RadioButton.prototype.focusHandler = function () {
        if (this.isKeyPressed) {
            this.getLabel().classList.add('e-focus');
        }
    };
    RadioButton.prototype.focusOutHandler = function () {
        this.getLabel().classList.remove('e-focus');
    };
    RadioButton.prototype.getModuleName = function () {
        return 'radio';
    };
    RadioButton.prototype.getPersistData = function () {
        return this.addOnPersist(['checked']);
    };
    RadioButton.prototype.getLabel = function () {
        return this.element.nextElementSibling;
    };
    RadioButton.prototype.initialize = function () {
        this.initWrapper();
        if (this.name) {
            this.element.setAttribute('name', this.name);
        }
        if (this.value) {
            this.element.setAttribute('value', this.value);
        }
        if (this.checked) {
            this.element.checked = true;
        }
        if (this.disabled) {
            this.setDisabled();
        }
    };
    RadioButton.prototype.initWrapper = function () {
        var rippleSpan;
        var wrapper = this.element.parentElement;
        if (!wrapper.classList.contains(WRAPPER)) {
            wrapper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: WRAPPER });
            this.element.parentNode.insertBefore(wrapper, this.element);
        }
        var label = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('label', { attrs: { for: this.element.id } });
        wrapper.appendChild(this.element);
        wrapper.appendChild(label);
        if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isRippleEnabled"]) {
            rippleSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: (RIPPLE) });
            label.appendChild(rippleSpan);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["rippleEffect"])(rippleSpan, {
                duration: 400,
                isCenterRipple: true
            });
        }
        if (this.enableRtl) {
            label.classList.add(RTL);
        }
        if (this.cssClass) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([label], this.cssClass.split(' '));
        }
        if (this.label) {
            this.setText(this.label);
        }
    };
    RadioButton.prototype.keyDownHandler = function () {
        this.isKeyPressed = true;
    };
    RadioButton.prototype.labelRippleHandler = function (e) {
        var ripple = this.getLabel().getElementsByClassName(RIPPLE)[0];
        if (ripple) {
            var event_1 = document.createEvent('MouseEvents');
            event_1.initEvent(e.type, true, true);
            ripple.dispatchEvent(event_1);
        }
    };
    RadioButton.prototype.mouseDownHandler = function () {
        this.isKeyPressed = false;
    };
    RadioButton.prototype.onPropertyChanged = function (newProp, oldProp) {
        var label = this.getLabel();
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'checked':
                    if (newProp.checked) {
                        this.updateChange(newProp.checked);
                    }
                    this.element.checked = newProp.checked;
                    break;
                case 'disabled':
                    if (newProp.disabled) {
                        this.setDisabled();
                        this.unWireEvents();
                    }
                    else {
                        this.element.disabled = false;
                        this.wireEvents();
                    }
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        label.classList.remove(oldProp.cssClass);
                    }
                    label.classList.add(newProp.cssClass);
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        label.classList.add(RTL);
                    }
                    else {
                        label.classList.remove(RTL);
                    }
                    break;
                case 'label':
                    this.setText(newProp.label);
                    break;
                case 'labelPosition':
                    if (newProp.labelPosition === 'before') {
                        label.classList.add('e-right');
                    }
                    else {
                        label.classList.remove('e-right');
                    }
                    break;
                case 'name':
                    this.element.setAttribute('name', newProp.name);
                    break;
                case 'value':
                    this.element.setAttribute('value', newProp.value);
                    break;
            }
        }
    };
    RadioButton.prototype.preRender = function () {
        var element = this.element;
        element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_common__["a" /* wrapperInitialize */])('EJ-RADIOBUTTON', 'radio', element, WRAPPER);
        this.element = element;
        if (this.element.getAttribute('type') !== 'radio') {
            this.element.setAttribute('type', 'radio');
        }
        if (!this.element.id) {
            this.element.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getUniqueID"])('e-' + this.getModuleName());
        }
    };
    RadioButton.prototype.render = function () {
        this.initialize();
        if (!this.disabled) {
            this.wireEvents();
        }
    };
    RadioButton.prototype.setDisabled = function () {
        this.element.disabled = true;
    };
    RadioButton.prototype.setText = function (text) {
        var label = this.getLabel();
        var textLabel = label.getElementsByClassName(LABEL)[0];
        if (textLabel) {
            textLabel.textContent = text;
        }
        else {
            textLabel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('span', { className: LABEL, innerHTML: text });
            label.appendChild(textLabel);
        }
        if (this.labelPosition === 'before') {
            this.getLabel().classList.add('e-right');
        }
        else {
            this.getLabel().classList.remove('e-right');
        }
    };
    RadioButton.prototype.unWireEvents = function () {
        var label = this.getLabel();
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'change', this.changeHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(document, 'keydown', this.keyDownHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(label, 'mousedown', this.mouseDownHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'focus', this.focusHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'focusout', this.focusOutHandler);
        var rippleLabel = label.getElementsByClassName(LABEL)[0];
        if (rippleLabel) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(rippleLabel, 'mousedown', this.labelRippleHandler);
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(rippleLabel, 'mouseup', this.labelRippleHandler);
        }
    };
    RadioButton.prototype.wireEvents = function () {
        var label = this.getLabel();
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'change', this.changeHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(document, 'keydown', this.keyDownHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(label, 'mousedown', this.mouseDownHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'focus', this.focusHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'focusout', this.focusOutHandler, this);
        var rippleLabel = label.getElementsByClassName(LABEL)[0];
        if (rippleLabel) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(rippleLabel, 'mousedown', this.labelRippleHandler, this);
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(rippleLabel, 'mouseup', this.labelRippleHandler, this);
        }
    };
    return RadioButton;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Component"]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], RadioButton.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], RadioButton.prototype, "checked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], RadioButton.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], RadioButton.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], RadioButton.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('after')
], RadioButton.prototype, "labelPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], RadioButton.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], RadioButton.prototype, "value", void 0);
RadioButton = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], RadioButton);

var radioButtonBuilder = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["CreateBuilder"])(RadioButton);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__position__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__position__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__position__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collision__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__collision__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__collision__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__collision__["c"]; });




/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dialogBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_popup__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__syncfusion_ej2_buttons__ = __webpack_require__(54);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ButtonProps = (function (_super) {
    __extends(ButtonProps, _super);
    function ButtonProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ButtonProps;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["ChildProperty"]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])()
], ButtonProps.prototype, "buttonModel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])()
], ButtonProps.prototype, "click", void 0);
var ROOT = 'e-dialog';
var RTL = 'e-rtl';
var DLG_HEADER_CONTENT = 'e-dlg-header-content';
var DLG_HEADER = 'e-dlg-header';
var DLG_FOOTER_CONTENT = 'e-footer-content';
var MODAL_DLG = 'e-dlg-modal';
var DLG_CONTENT = 'e-dlg-content';
var DLG_CLOSE_ICON = 'e-icon-dlg-close';
var DLG_OVERLAY = 'e-dlg-overlay';
var DLG_CONTAINER = 'e-dlg-container';
var SCROLL_DISABLED = 'e-scroll-disabled';
var DLG_PRIMARY_BUTTON = 'e-primary';
var ICON = 'e-icons';
var POPUP_ROOT = 'e-popup';
var DEVICE = 'e-device';
var FULLSCREEN = 'e-dlg-fullscreen';
var DLG_CLOSE_ICON_BTN = 'e-dlg-closeicon-btn';
var DLG_HIDE = 'e-popup-close';
var DLG_SHOW = 'e-popup-open';
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog(options, element) {
        return _super.call(this, options, element) || this;
    }
    Dialog.prototype.render = function () {
        this.initialize();
        this.initRender();
        this.wireEvents();
    };
    Dialog.prototype.preRender = function () {
        var _this = this;
        this.closeIconClickEventHandler = function (event) {
            _this.hide();
            _this.closedFrom = event;
        };
        this.dlgOverlayClickEventHandler = function (event) {
            _this.trigger('overlayClick', event);
        };
    };
    ;
    Dialog.prototype.keyDown = function (event) {
        var _this = this;
        if (event.keyCode === 9) {
            if (this.isModal) {
                if (document.activeElement === this.btnObj.element && !event.shiftKey) {
                    event.preventDefault();
                    this.focusableElements(this.element).focus();
                }
                if (document.activeElement === this.focusableElements(this.element) && event.shiftKey) {
                    event.preventDefault();
                    this.btnObj.element.focus();
                }
            }
        }
        var element = document.activeElement;
        var isTagName = (['input', 'textarea'].indexOf(element.tagName.toLowerCase()) > -1);
        var isContentEdit = false;
        if (!isTagName) {
            isContentEdit = element.hasAttribute('contenteditable') && element.getAttribute('contenteditable') === 'true';
        }
        if (event.keyCode === 27 && this.closeOnEscape) {
            this.hide();
            this.closedFrom = event;
        }
        if ((event.keyCode === 13 && element.tagName.toLowerCase() === 'button' &&
            element.classList.contains(DLG_PRIMARY_BUTTON) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.primaryButtonEle)) ||
            (event.keyCode === 13 && !event.ctrlKey && element.tagName.toLowerCase() !== 'textarea' &&
                isTagName && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.primaryButtonEle)) ||
            (event.keyCode === 13 && event.ctrlKey && (element.tagName.toLowerCase() === 'textarea' ||
                isContentEdit)) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.primaryButtonEle)) {
            var buttonIndex_1;
            var firstPrimary = this.buttons.some(function (data, index) {
                buttonIndex_1 = index;
                var buttonModel = data.buttonModel;
                return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(buttonModel) && buttonModel.isPrimary === true;
            });
            if (firstPrimary && typeof (this.buttons[buttonIndex_1].click) === 'function') {
                setTimeout(function () {
                    _this.buttons[buttonIndex_1].click.call(_this, event);
                });
            }
        }
    };
    Dialog.prototype.initialize = function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.target)) {
            this.targetEle = ((typeof this.target) === 'string') ?
                document.querySelector(this.target) : this.target;
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], ROOT);
        if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], DEVICE);
        }
        this.setCSSClass();
        this.setMaxHeight();
    };
    Dialog.prototype.initRender = function () {
        var _this = this;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { role: 'dialog' });
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.zIndex)) {
            this.getZindexPartial();
        }
        if (this.header !== '') {
            this.setHeader();
        }
        if (this.showCloseIcon) {
            this.renderCloseIcon();
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.content) && this.content !== '') {
            this.setContent();
        }
        else if (this.element.hasChildNodes()) {
            this.contentEle = this.element;
        }
        if (this.footerTemplate !== '') {
            this.setFooterTemplate();
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.buttons[0].buttonModel) && this.footerTemplate === '') {
            this.setButton();
        }
        if (this.allowDragging && (!this.isModal) && (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.headerContent))) {
            this.setAllowDragging();
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-modal': (this.isModal ? 'true' : 'false') });
        if (this.isModal) {
            this.setIsModal();
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.targetEle)) {
            this.isModal ? this.targetEle.appendChild(this.dlgContainer) : this.targetEle.appendChild(this.element);
        }
        this.popupObj = new __WEBPACK_IMPORTED_MODULE_1__popup_popup__["a" /* Popup */](this.element, {
            height: this.height,
            width: this.width,
            zIndex: this.zIndex,
            relateTo: this.target,
            actionOnScroll: 'none',
            open: function () {
                _this.focusContent();
                _this.trigger('open');
            },
            close: function (event) {
                _this.unBindEvent(_this.element);
                if (_this.isModal) {
                    _this.dlgContainer.style.display = 'none';
                }
                _this.trigger('close', _this.closedFrom);
                _this.closedFrom = {};
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(_this.storeActiveElement)) {
                    _this.storeActiveElement.focus();
                }
            }
        });
        this.positionChange();
        this.setEnableRTL();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], DLG_HIDE);
        if (this.visible) {
            this.show();
        }
        else {
            if (this.isModal) {
                this.dlgOverlay.style.display = 'none';
            }
        }
    };
    Dialog.prototype.positionChange = function () {
        if (!this.isModal) {
            this.popupObj.setProperties({
                position: {
                    X: this.position.X, Y: this.position.Y
                }
            });
        }
        else {
            this.dlgContainer.classList.add('e-dlg-' + this.position.X + '-' + this.position.Y);
        }
    };
    Dialog.prototype.getZindexPartial = function () {
        var dialogParent = this.element.parentElement;
        var parentZindex = [];
        while (dialogParent) {
            if (dialogParent.tagName !== 'BODY') {
                var index = document.defaultView.getComputedStyle(dialogParent, null).getPropertyValue('z-index');
                var position = document.defaultView.getComputedStyle(dialogParent, null).getPropertyValue('position');
                if (index !== 'auto' && position !== 'static') {
                    parentZindex.push(index);
                }
                dialogParent = dialogParent.parentElement;
            }
            else {
                break;
            }
        }
        var childrenZindex = [];
        for (var i = 0; i < document.body.children.length; i++) {
            if (!this.element.isEqualNode(document.body.children[i])) {
                var index = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue('z-index');
                var position = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue('position');
                if (index !== 'auto' && position !== 'static') {
                    childrenZindex.push(index);
                }
            }
        }
        childrenZindex.push('999');
        var finalValue = parentZindex.concat(childrenZindex);
        this.zIndex = Math.max.apply(Math, finalValue) + 1;
    };
    ;
    Dialog.prototype.setAllowDragging = function () {
        var _this = this;
        var handleContent = '.' + DLG_HEADER_CONTENT;
        this.dragObj = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Draggable"](this.element, {
            clone: false,
            handle: handleContent,
            dragStart: function (event) {
                _this.trigger('dragStart', event);
            },
            dragStop: function (event) {
                _this.trigger('dragStop', event);
            },
            drag: function (event) {
                _this.trigger('drag', event);
            }
        });
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.targetEle)) {
            this.dragObj.dragArea = this.targetEle;
        }
    };
    Dialog.prototype.setButton = function () {
        this.buttonContent = [];
        var primaryBtnFlag = true;
        for (var i = 0; i < this.buttons.length; i++) {
            var btn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('button', { attrs: { type: 'button' } });
            this.buttonContent.push(btn.outerHTML);
        }
        this.setFooterTemplate();
        for (var i = 0; i < this.buttons.length; i++) {
            this.btnObj = new __WEBPACK_IMPORTED_MODULE_2__syncfusion_ej2_buttons__["a" /* Button */](this.buttons[i].buttonModel);
            if (typeof (this.buttons[i].click) === 'function') {
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.ftrTemplateContent.children[i], 'click', this.buttons[i].click, this);
            }
            this.btnObj.appendTo(this.ftrTemplateContent.children[i]);
            this.primaryButtonEle = this.element.getElementsByClassName('e-primary')[0];
        }
    };
    Dialog.prototype.setContent = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-describedby': this.element.id + '_dialog-content' });
        this.contentEle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: DLG_CONTENT, id: this.element.id + '_dialog-content' });
        typeof (this.content) === 'string' ? this.contentEle.innerHTML = this.content : this.contentEle.appendChild(this.content);
        !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.headerContent) ? this.element.insertBefore(this.contentEle, this.element.children[1]) :
            this.element.insertBefore(this.contentEle, this.element.children[0]);
        if (this.height === 'auto') {
            this.setMaxHeight();
        }
    };
    Dialog.prototype.setMaxHeight = function () {
        var display = this.element.style.display;
        this.element.style.display = 'none';
        this.element.style.maxHeight = (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.target)) ?
            (this.targetEle.offsetHeight - 20) + 'px' : (window.innerHeight - 20) + 'px';
        this.element.style.display = display;
    };
    Dialog.prototype.setEnableRTL = function () {
        this.enableRtl ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], RTL) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], RTL);
    };
    Dialog.prototype.setHeader = function () {
        this.headerEle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { id: this.element.id + '_title', className: DLG_HEADER, innerHTML: this.header });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-labelledby': this.element.id + '_title' });
        this.createHeaderContent();
        this.headerContent.appendChild(this.headerEle);
        this.element.insertBefore(this.headerContent, this.element.children[0]);
    };
    Dialog.prototype.setFooterTemplate = function () {
        this.ftrTemplateContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', {
            className: DLG_FOOTER_CONTENT,
            innerHTML: (this.footerTemplate !== '' ? this.footerTemplate : this.buttonContent.join(''))
        });
        this.element.appendChild(this.ftrTemplateContent);
    };
    Dialog.prototype.createHeaderContent = function () {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.headerContent)) {
            this.headerContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: DLG_HEADER_CONTENT });
        }
    };
    Dialog.prototype.renderCloseIcon = function () {
        this.closeIcon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('button', { className: DLG_CLOSE_ICON_BTN, attrs: { type: 'button' } });
        this.closeIconBtnObj = new __WEBPACK_IMPORTED_MODULE_2__syncfusion_ej2_buttons__["a" /* Button */]({ cssClass: 'e-flat', iconCss: DLG_CLOSE_ICON + ' ' + ICON });
        this.closeIconTitle();
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.headerContent)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["prepend"])([this.closeIcon], this.headerContent);
        }
        else {
            this.createHeaderContent();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["prepend"])([this.closeIcon], this.headerContent);
            this.element.insertBefore(this.headerContent, this.element.children[0]);
        }
        this.closeIconBtnObj.appendTo(this.closeIcon);
    };
    Dialog.prototype.closeIconTitle = function () {
        if (this.locale !== '') {
            var l10n = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["L10n"]('Dialog', { locale: 'Close' });
            l10n.setLocale(this.locale);
            var closeIconTitle = l10n.getConstant('Close');
            this.closeIcon.setAttribute('title', closeIconTitle);
        }
        else {
            this.closeIcon.setAttribute('title', 'Close');
        }
    };
    Dialog.prototype.setCSSClass = function (oldCSSClass) {
        if (this.cssClass) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], this.cssClass.split(' '));
        }
        if (oldCSSClass) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], oldCSSClass.split(' '));
        }
    };
    Dialog.prototype.setIsModal = function () {
        this.dlgContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: DLG_CONTAINER });
        this.element.parentNode.insertBefore(this.dlgContainer, this.element);
        this.dlgContainer.appendChild(this.element);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], MODAL_DLG);
        this.dlgOverlay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: DLG_OVERLAY });
        this.dlgOverlay.style.zIndex = (this.zIndex - 1).toString();
        this.dlgContainer.appendChild(this.dlgOverlay);
    };
    Dialog.prototype.getValidFocusNode = function (items) {
        var node;
        for (var u = 0; u < items.length; u++) {
            node = items[u];
            if ((node.clientHeight > 0 || (node.tagName.toLowerCase() === 'a' && node.hasAttribute('href'))) && node.tabIndex > -1 &&
                !node.disabled && !this.disableElement(node, '[disabled],[aria-disabled="true"],[type="hidden"]')) {
                return node;
            }
        }
        return node;
    };
    Dialog.prototype.focusableElements = function (content) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(content)) {
            var value = 'input,select,textarea,button,a,[contenteditable="true"],[tabindex]';
            var items = content.querySelectorAll(value);
            return this.getValidFocusNode(items);
        }
        return null;
    };
    Dialog.prototype.getAutoFocusNode = function (container) {
        var node = container.querySelector('.' + DLG_CLOSE_ICON_BTN);
        var value = '[autofocus]';
        var items = container.querySelectorAll(value);
        var validNode = this.getValidFocusNode(items);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(validNode)) {
            node = validNode;
        }
        else {
            validNode = this.focusableElements(this.contentEle);
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(validNode)) {
                return node = validNode;
            }
            else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.primaryButtonEle)) {
                return this.element.querySelector('.' + DLG_PRIMARY_BUTTON);
            }
        }
        return node;
    };
    Dialog.prototype.disableElement = function (element, t) {
        var elementMatch = element ? element.matches || element.webkitMatchesSelector || element.msMatchesSelector : null;
        if (elementMatch) {
            for (; element; element = element.parentNode) {
                if (element instanceof Element && elementMatch.call(element, t)) {
                    return element;
                }
            }
        }
        return null;
    };
    Dialog.prototype.focusContent = function () {
        var element = this.getAutoFocusNode(this.element);
        var node = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(element) ? element : this.element;
        node.focus();
        this.bindEvent(this.element);
    };
    Dialog.prototype.bindEvent = function (element) {
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(element, 'keydown', this.keyDown, this);
    };
    Dialog.prototype.unBindEvent = function (element) {
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(element, 'keydown', this.keyDown);
    };
    Dialog.prototype.getModuleName = function () {
        return 'dialog';
    };
    Dialog.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'content':
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.content) && this.content !== '') {
                        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.contentEle) && this.contentEle.getAttribute('role') !== 'dialog') {
                            this.contentEle.innerHTML = '';
                            typeof (this.content) === 'string' ?
                                this.contentEle.innerHTML = this.content : this.contentEle.appendChild(this.content);
                            this.setMaxHeight();
                        }
                        else {
                            this.setContent();
                        }
                    }
                    else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.contentEle)) {
                        this.element.removeChild(this.contentEle);
                    }
                    break;
                case 'header':
                    if (this.header === '') {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.headerEle);
                    }
                    else {
                        this.element.getElementsByClassName(DLG_HEADER).length > 0 ?
                            this.element.getElementsByClassName(DLG_HEADER)[0].innerHTML = this.header
                            : this.setHeader();
                    }
                    break;
                case 'footerTemplate':
                    this.element.getElementsByClassName(DLG_FOOTER_CONTENT).length > 0 ?
                        this.ftrTemplateContent.innerHTML = this.footerTemplate : this.setFooterTemplate();
                    break;
                case 'showCloseIcon':
                    if (this.element.getElementsByClassName(DLG_CLOSE_ICON).length > 0) {
                        if (!this.showCloseIcon && this.header === '') {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.headerContent);
                        }
                        else if (!this.showCloseIcon) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.closeIcon);
                        }
                    }
                    else {
                        this.renderCloseIcon();
                        this.wireEvents();
                    }
                    break;
                case 'locale':
                    if (this.showCloseIcon) {
                        this.closeIconTitle();
                    }
                    break;
                case 'visible':
                    this.visible ? this.show() : this.hide();
                    break;
                case 'isModal':
                    this.element.setAttribute('aria-modal', this.isModal ? 'true' : 'false');
                    if (this.isModal) {
                        this.setIsModal();
                        this.wireEvents();
                        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.targetEle)) {
                            this.isModal ? this.targetEle.appendChild(this.dlgContainer) : this.targetEle.appendChild(this.element);
                        }
                    }
                    else {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], MODAL_DLG);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([document.body], SCROLL_DISABLED);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.dlgOverlay);
                        while (this.dlgContainer.firstChild) {
                            this.dlgContainer.parentElement.insertBefore(this.dlgContainer.firstChild, this.dlgContainer);
                        }
                        this.dlgContainer.parentElement.removeChild(this.dlgContainer);
                    }
                    break;
                case 'height':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setStyleAttribute"])(this.element, { 'height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(newProp.height) });
                    break;
                case 'width':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setStyleAttribute"])(this.element, { 'width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(newProp.width) });
                    break;
                case 'zIndex':
                    this.popupObj.zIndex = this.zIndex;
                    break;
                case 'cssClass':
                    this.setCSSClass(oldProp.cssClass);
                    break;
                case 'animationSettings':
                    this.show();
                    break;
                case 'buttons':
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.buttons[0].buttonModel) && this.footerTemplate === '') {
                        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.ftrTemplateContent)) {
                            this.ftrTemplateContent.innerHTML = '';
                        }
                        this.setButton();
                    }
                    break;
                case 'allowDragging':
                    if (this.allowDragging && (!this.isModal) && (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.headerContent))) {
                        this.setAllowDragging();
                    }
                    else {
                        this.dragObj.destroy();
                    }
                    break;
                case 'target':
                    this.popupObj.relateTo = newProp.target;
                    break;
                case 'position':
                    if (oldProp.position.X === this.position.X && oldProp.position.Y === this.position.Y) {
                        break;
                    }
                    if (this.isModal) {
                        this.dlgContainer.classList.remove('e-dlg-' + oldProp.position.X + '-' + oldProp.position.Y);
                        this.dlgContainer.classList.add('e-dlg-' + this.position.X + '-' + this.position.Y);
                    }
                    else {
                        this.popupObj.position = this.position;
                        break;
                    }
                    break;
                case 'enableRtl':
                    this.setEnableRTL();
                    break;
            }
        }
    };
    Dialog.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    Dialog.prototype.destroy = function () {
        if (this.element.classList.contains(ROOT)) {
            this.unWireEvents();
            _super.prototype.destroy.call(this);
            var classArray = [
                ROOT, RTL, MODAL_DLG
            ];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element, this.element], classArray);
            if (this.popupObj.element.classList.contains(POPUP_ROOT)) {
                this.popupObj.destroy();
            }
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.btnObj)) {
                this.btnObj.destroy();
            }
            if (this.isModal) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.dlgOverlay);
                this.dlgContainer.parentNode.insertBefore(this.element, this.dlgContainer);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.dlgContainer);
            }
            this.element.innerHTML = '';
        }
    };
    Dialog.prototype.wireEvents = function () {
        if (this.showCloseIcon) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.closeIcon, 'click', this.closeIconClickEventHandler, this);
        }
        if (this.isModal) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.dlgOverlay, 'click', this.dlgOverlayClickEventHandler, this);
        }
    };
    Dialog.prototype.unWireEvents = function () {
        if (this.showCloseIcon) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.closeIcon, 'click', this.closeIconClickEventHandler);
        }
        if (this.isModal) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.dlgOverlay, 'click', this.dlgOverlayClickEventHandler);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.buttons[0].buttonModel)) {
            for (var i = 0; i < this.buttons.length; i++) {
                if (typeof (this.buttons[i].click) === 'function') {
                    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.ftrTemplateContent.children[i], 'click', this.buttons[i].click);
                }
            }
        }
    };
    Dialog.prototype.refreshPosition = function () {
        this.popupObj.refreshPosition();
    };
    Dialog.prototype.show = function (isFullScreen) {
        if (!this.element.classList.contains(DLG_SHOW) || (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(isFullScreen))) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(isFullScreen)) {
                this.fullScreen(isFullScreen);
            }
            this.storeActiveElement = document.activeElement;
            this.element.tabIndex = -1;
            this.trigger('beforeOpen');
            if (this.isModal && (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.dlgOverlay))) {
                this.dlgOverlay.style.display = 'block';
                this.dlgContainer.style.display = 'flex';
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.targetEle)) {
                    if (this.targetEle === document.body) {
                        this.dlgContainer.style.position = 'fixed';
                    }
                    else {
                        this.dlgContainer.style.position = 'absolute';
                    }
                    this.dlgOverlay.style.position = 'absolute';
                    this.element.style.position = 'relative';
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.targetEle], SCROLL_DISABLED);
                }
                else {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([document.body], SCROLL_DISABLED);
                }
            }
            var openAnimation = {
                name: this.animationSettings.effect + 'In',
                duration: this.animationSettings.duration,
                delay: this.animationSettings.delay
            };
            this.animationSettings.effect === 'None' ? this.popupObj.show() : this.popupObj.show(openAnimation);
            this.dialogOpen = true;
            this.visible = true;
        }
    };
    Dialog.prototype.hide = function () {
        this.trigger('beforeClose');
        if (this.isModal) {
            this.dlgOverlay.style.display = 'none';
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.targetEle) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.targetEle], SCROLL_DISABLED) :
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([document.body], SCROLL_DISABLED);
        }
        var closeAnimation = {
            name: this.animationSettings.effect + 'Out',
            duration: this.animationSettings.duration,
            delay: this.animationSettings.delay
        };
        this.animationSettings.effect === 'None' ? this.popupObj.hide() : this.popupObj.hide(closeAnimation);
        this.dialogOpen = false;
        this.visible = false;
    };
    Dialog.prototype.fullScreen = function (args) {
        var top = this.element.offsetTop;
        var left = this.element.offsetLeft;
        if (args) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], FULLSCREEN);
            var display = this.element.style.display;
            this.element.style.display = 'none';
            this.element.style.maxHeight = (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.target)) ?
                (this.targetEle.offsetHeight) + 'px' : (window.innerHeight) + 'px';
            this.element.style.display = display;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([document.body], SCROLL_DISABLED);
            if (this.allowDragging && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.dragObj)) {
                this.dragObj.destroy();
            }
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], FULLSCREEN);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([document.body], SCROLL_DISABLED);
            if (this.allowDragging && (!this.isModal) && (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.headerContent))) {
                this.setAllowDragging();
            }
        }
        return args;
    };
    return Dialog;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Component"]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], Dialog.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Dialog.prototype, "showCloseIcon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Dialog.prototype, "isModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], Dialog.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(true)
], Dialog.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('auto')
], Dialog.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('100%')
], Dialog.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], Dialog.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])()
], Dialog.prototype, "zIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], Dialog.prototype, "target", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], Dialog.prototype, "footerTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Dialog.prototype, "allowDragging", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Collection"])([{}], ButtonProps)
], Dialog.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(true)
], Dialog.prototype, "closeOnEscape", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])({ effect: 'Fade', duration: 400, delay: 0 })
], Dialog.prototype, "animationSettings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])({ X: 'center', Y: 'center' })
], Dialog.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], Dialog.prototype, "locale", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Dialog.prototype, "created", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Dialog.prototype, "open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Dialog.prototype, "beforeOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Dialog.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Dialog.prototype, "beforeClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Dialog.prototype, "dragStart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Dialog.prototype, "dragStop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Dialog.prototype, "drag", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Dialog.prototype, "overlayClick", void 0);
Dialog = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], Dialog);

var dialogBuilder = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["CreateBuilder"])(Dialog);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog__ = __webpack_require__(58);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialog__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__dialog__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__dialog__["c"]; });



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__popup__["a"]; });



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner__ = __webpack_require__(62);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__spinner__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__spinner__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__spinner__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__spinner__["d"]; });



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSpinner;
/* harmony export (immutable) */ __webpack_exports__["b"] = showSpinner;
/* harmony export (immutable) */ __webpack_exports__["c"] = hideSpinner;
/* harmony export (immutable) */ __webpack_exports__["d"] = setSpinner;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);

var globalTimeOut = {};
var spinTemplate = null;
var spinCSSClass = null;
var DEFT_MAT_WIDTH = 30;
var DEFT_FAB_WIDTH = 30;
var DEFT_BOOT_WIDTH = 30;
var CLS_SHOWSPIN = 'e-spin-show';
var CLS_HIDESPIN = 'e-spin-hide';
var CLS_MATERIALSPIN = 'e-spin-material';
var CLS_FABRICSPIN = 'e-spin-fabric';
var CLS_BOOTSPIN = 'e-spin-bootstrap';
var CLS_SPINWRAP = 'e-spinner-pane';
var CLS_SPININWRAP = 'e-spinner-inner';
var CLS_SPINCIRCLE = 'e-path-circle';
var CLS_SPINARC = 'e-path-arc';
var CLS_SPINLABEL = 'e-spin-label';
var CLS_SPINTEMPLATE = 'e-spin-template';
function createSpinner(args) {
    var radius;
    var container = create_spinner_container(args.target);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.cssClass)) {
        container.wrap.classList.add(args.cssClass);
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.template) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(spinTemplate)) {
        var template = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.template) ? args.template : spinTemplate;
        container.wrap.classList.add(CLS_SPINTEMPLATE);
        replaceContent(container.wrap, template, spinCSSClass);
    }
    else {
        var theme = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.type) ? args.type : getTheme(container.wrap);
        var width = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.width) ? args.width : undefined;
        radius = calculateRadius(width, theme);
        setTheme(theme, container.wrap, radius);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args.label)) {
            createLabel(container.inner_wrap, args.label);
        }
    }
    container.wrap.classList.add(CLS_HIDESPIN);
}
function createLabel(container, label) {
    var labelEle = document.createElement('div');
    labelEle.classList.add(CLS_SPINLABEL);
    labelEle.textContent = label;
    container.appendChild(labelEle);
    return labelEle;
}
function createMaterialSpinner(container, radius) {
    var uniqueID = random_generator();
    globalTimeOut[uniqueID] = { timeOut: 0, type: 'Material', radius: radius };
    create_material_element(container, uniqueID);
    mat_calculate_attributes(radius, container);
}
function startMatAnimate(container, uniqueID, radius) {
    var globalObject = {};
    var timeOutVar = 0;
    globalTimeOut[uniqueID].timeOut = 0;
    globalObject[uniqueID] = globalVariables(uniqueID, radius, 0, 0);
    var spinnerInfo = { uniqueID: uniqueID, container: container, globalInfo: globalObject, timeOutVar: timeOutVar };
    animateMaterial(spinnerInfo);
}
function createFabricSpinner(container, radius) {
    var uniqueID = random_generator();
    globalTimeOut[uniqueID] = { timeOut: 0, type: 'Fabric', radius: radius };
    create_fabric_element(container, uniqueID);
    fb_calculate_attributes(radius, container);
}
function getTheme(container) {
    var theme = window.getComputedStyle(container, ':after').getPropertyValue('content');
    return theme.replace(/['"]+/g, '');
}
function setTheme(theme, container, radius) {
    var innerContainer = container.querySelector('.' + CLS_SPININWRAP);
    var svg = innerContainer.querySelector('svg');
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(svg)) {
        innerContainer.removeChild(svg);
    }
    switch (theme) {
        case 'Material':
            createMaterialSpinner(innerContainer, radius);
            break;
        case 'Fabric':
            createFabricSpinner(innerContainer, radius);
            break;
        case 'Bootstrap':
            createBootstrapSpinner(innerContainer, radius);
    }
}
function createBootstrapSpinner(innerContainer, radius) {
    var uniqueID = random_generator();
    globalTimeOut[uniqueID] = { timeOut: 0, type: 'Bootstrap', radius: radius };
    create_bootstrap_element(innerContainer, uniqueID);
    boot_calculate_attributes(innerContainer, radius);
}
function create_bootstrap_element(innerContainer, uniqueID) {
    var svgBoot = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var viewBoxValue = 64;
    var trans = 32;
    var defaultRadius = 2;
    svgBoot.setAttribute('id', uniqueID);
    svgBoot.setAttribute('class', CLS_BOOTSPIN);
    svgBoot.setAttribute('viewBox', '0 0 ' + viewBoxValue + ' ' + viewBoxValue);
    innerContainer.insertBefore(svgBoot, innerContainer.firstChild);
    for (var item = 0; item <= 7; item++) {
        var bootCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        bootCircle.setAttribute('class', CLS_SPINCIRCLE + '_' + item);
        bootCircle.setAttribute('r', defaultRadius + '');
        bootCircle.setAttribute('transform', 'translate(' + trans + ',' + trans + ')');
        svgBoot.appendChild(bootCircle);
    }
}
function boot_calculate_attributes(innerContainer, radius) {
    var svg = innerContainer.querySelector('svg.e-spin-bootstrap');
    svg.style.width = svg.style.height = radius + 'px';
    var x = 0;
    var y = 0;
    var rad = 24;
    var startArc = 90;
    for (var item = 0; item <= 7; item++) {
        var start = defineArcPoints(x, y, rad, startArc);
        var circleEle = svg.querySelector('.' + CLS_SPINCIRCLE + '_' + item);
        circleEle.setAttribute('cx', start.x + '');
        circleEle.setAttribute('cy', start.y + '');
        startArc = startArc >= 360 ? 0 : startArc;
        startArc = startArc + 45;
    }
}
function generateSeries(begin, stop) {
    var series = [];
    var start = begin;
    var end = stop;
    var increment = false;
    var count = 1;
    formSeries(start);
    function formSeries(i) {
        series.push(i);
        if (i !== end || count === 1) {
            if (i <= start && i > 1 && !increment) {
                i = parseFloat((i - 0.2).toFixed(2));
            }
            else if (i === 1) {
                i = 7;
                i = parseFloat((i + 0.2).toFixed(2));
                increment = true;
            }
            else if (i < 8 && increment) {
                i = parseFloat((i + 0.2).toFixed(2));
                if (i === 8) {
                    increment = false;
                }
            }
            else if (i <= 8 && !increment) {
                i = parseFloat((i - 0.2).toFixed(2));
            }
            ++count;
            formSeries(i);
        }
    }
    return series;
}
function animateBootstrap(innerContainer) {
    var svg = innerContainer.querySelector('svg.e-spin-bootstrap');
    var id = svg.getAttribute('id');
    for (var i = 1; i <= 8; i++) {
        var circleEle = (innerContainer.getElementsByClassName('e-path-circle_' +
            (i === 8 ? 0 : i))[0]);
        rotation(circleEle, i, i, generateSeries(i, i), id);
    }
    function rotation(circle, start, end, series, id) {
        var count = 0;
        boot_animate(start);
        function boot_animate(radius) {
            if (globalTimeOut[id].isAnimate) {
                ++count;
                circle.setAttribute('r', radius + '');
                if (count >= series.length) {
                    count = 0;
                }
                globalTimeOut[id].timeOut = setTimeout(boot_animate.bind(null, series[count]), 18);
            }
        }
    }
}
function replaceContent(container, template, cssClass) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(cssClass)) {
        container.classList.add(cssClass);
    }
    var inner = container.querySelector('.e-spinner-inner');
    inner.innerHTML = template;
}
function calculateRadius(width, theme) {
    var defaultSize = theme === 'Material' ? DEFT_MAT_WIDTH : theme === 'Fabric' ? DEFT_FAB_WIDTH : DEFT_BOOT_WIDTH;
    width = width ? parseFloat(width + '') : defaultSize;
    return theme === 'Bootstrap' ? width : width / 2;
}
function globalVariables(id, radius, count, previousId) {
    return {
        radius: radius,
        count: count,
        previousId: previousId
    };
}
function random_generator() {
    var random = '';
    var combine = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
        random += combine.charAt(Math.floor(Math.random() * combine.length));
    }
    return random;
}
function create_fabric_element(innerContainer, uniqueID) {
    var svgFabric = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgFabric.setAttribute('id', uniqueID);
    svgFabric.setAttribute('class', CLS_FABRICSPIN);
    var fabricCirclePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    fabricCirclePath.setAttribute('class', CLS_SPINCIRCLE);
    var fabricCircleArc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    fabricCircleArc.setAttribute('class', CLS_SPINARC);
    innerContainer.insertBefore(svgFabric, innerContainer.firstChild);
    svgFabric.appendChild(fabricCirclePath);
    svgFabric.appendChild(fabricCircleArc);
}
function create_material_element(innerContainer, uniqueID) {
    var svgMaterial = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgMaterial.setAttribute('class', CLS_MATERIALSPIN);
    svgMaterial.setAttribute('id', uniqueID);
    var matCirclePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    matCirclePath.setAttribute('class', CLS_SPINCIRCLE);
    innerContainer.insertBefore(svgMaterial, innerContainer.firstChild);
    svgMaterial.appendChild(matCirclePath);
}
function create_spinner_container(target) {
    var spinnerContainer = document.createElement('div');
    spinnerContainer.classList.add(CLS_SPINWRAP);
    var spinnerInnerContainer = document.createElement('div');
    spinnerInnerContainer.classList.add(CLS_SPININWRAP);
    target.appendChild(spinnerContainer);
    spinnerContainer.appendChild(spinnerInnerContainer);
    return { wrap: spinnerContainer, inner_wrap: spinnerInnerContainer };
}
function animateMaterial(spinnerInfo) {
    var start = 1;
    var end = 149;
    var duration = 1333;
    var max = 75;
    createCircle(start, end, easeAnimation, duration, spinnerInfo.globalInfo[spinnerInfo.uniqueID].count, max, spinnerInfo);
    spinnerInfo.globalInfo[spinnerInfo.uniqueID].count = ++spinnerInfo.globalInfo[spinnerInfo.uniqueID].count % 4;
}
function createCircle(start, end, easing, duration, count, max, spinnerInfo) {
    var id = ++spinnerInfo.globalInfo[spinnerInfo.uniqueID].previousId;
    var startTime = new Date().getTime();
    var change = end - start;
    var diameter = getSize((spinnerInfo.globalInfo[spinnerInfo.uniqueID].radius * 2) + '');
    var strokeSize = getStrokeSize(diameter);
    var rotate = -90 * (spinnerInfo.globalInfo[spinnerInfo.uniqueID].count || 0);
    mat_animation(spinnerInfo);
    function mat_animation(spinnerInfo) {
        var currentTime = Math.max(0, Math.min(new Date().getTime() - startTime, duration));
        updatePath(easing(currentTime, start, change, duration), spinnerInfo.container);
        if (id === spinnerInfo.globalInfo[spinnerInfo.uniqueID].previousId && currentTime < duration) {
            globalTimeOut[spinnerInfo.uniqueID].timeOut = setTimeout(mat_animation.bind(null, spinnerInfo), 1);
        }
        else {
            animateMaterial(spinnerInfo);
        }
    }
    function updatePath(value, container) {
        if ((!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(container.querySelector('svg.e-spin-material')))
            && (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(container.querySelector('svg.e-spin-material').querySelector('path.e-path-circle')))) {
            var svg = container.querySelector('svg.e-spin-material');
            var path = svg.querySelector('path.e-path-circle');
            path.setAttribute('stroke-dashoffset', getDashOffset(diameter, strokeSize, value, max) + '');
            path.setAttribute('transform', 'rotate(' + (rotate) + ' ' + diameter / 2 + ' ' + diameter / 2 + ')');
        }
    }
}
function mat_calculate_attributes(radius, container) {
    var diameter = radius * 2;
    var svg = container.querySelector('svg.e-spin-material');
    var path = svg.querySelector('path.e-path-circle');
    var strokeSize = getStrokeSize(diameter);
    var transformOrigin = (diameter / 2) + 'px';
    svg.setAttribute('viewBox', '0 0 ' + diameter + ' ' + diameter);
    svg.style.width = svg.style.height = diameter + 'px';
    svg.style.transformOrigin = transformOrigin + ' ' + transformOrigin + ' ' + transformOrigin;
    path.setAttribute('stroke-width', strokeSize + '');
    path.setAttribute('d', drawArc(diameter, strokeSize));
    path.setAttribute('stroke-dasharray', ((diameter - strokeSize) * Math.PI * 0.75) + '');
    path.setAttribute('stroke-dashoffset', getDashOffset(diameter, strokeSize, 1, 75) + '');
}
function getSize(value) {
    var parsed = parseFloat(value);
    return parsed;
}
function drawArc(diameter, strokeSize) {
    var radius = diameter / 2;
    var offset = strokeSize / 2;
    return 'M' + radius + ',' + offset
        + 'A' + (radius - offset) + ',' + (radius - offset) + ' 0 1 1 ' + offset + ',' + radius;
}
function getStrokeSize(diameter) {
    return 10 / 100 * diameter;
}
function getDashOffset(diameter, strokeSize, value, max) {
    return (diameter - strokeSize) * Math.PI * ((3 * (max) / 100) - (value / 100));
}
function easeAnimation(current, start, change, duration) {
    var timestamp = (current /= duration) * current;
    var timecount = timestamp * current;
    return start + change * (6 * timecount * timestamp + -15 * timestamp * timestamp + 10 * timecount);
}
function fb_calculate_attributes(radius, innerConainer) {
    var centerX = radius;
    var centerY = radius;
    var diameter = radius * 2;
    var startArc = 315;
    var endArc = 45;
    var svg = innerConainer.querySelector('.e-spin-fabric');
    var circle = svg.querySelector('.e-path-circle');
    var path = svg.querySelector('.e-path-arc');
    var transformOrigin = (diameter / 2) + 'px';
    circle.setAttribute('d', defineCircle(centerX, centerY, radius));
    path.setAttribute('d', defineArc(centerX, centerY, radius, startArc, endArc));
    svg.setAttribute('viewBox', '0 0 ' + diameter + ' ' + diameter);
    svg.style.transformOrigin = transformOrigin + ' ' + transformOrigin + ' ' + transformOrigin;
    svg.style.width = svg.style.height = diameter + 'px';
}
function defineArcPoints(centerX, centerY, radius, angle) {
    var radians = (angle - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(radians)),
        y: centerY + (radius * Math.sin(radians))
    };
}
function defineArc(x, y, radius, startArc, endArc) {
    var start = defineArcPoints(x, y, radius, endArc);
    var end = defineArcPoints(x, y, radius, startArc);
    var d = [
        'M', start.x, start.y,
        'A', radius, radius, 0, 0, 0, end.x, end.y
    ].join(' ');
    return d;
}
function defineCircle(x, y, radius) {
    var d = [
        'M', x, y,
        'm', -radius, 0,
        'a', radius, radius, 0, 1, 0, radius * 2, 0,
        'a', radius, radius, 0, 1, 0, -radius * 2, 0,
    ].join(' ');
    return d;
}
function showSpinner(container) {
    showHideSpinner(container, false);
}
function showHideSpinner(container, isHide) {
    var spinnerWrap = container.classList.contains(CLS_SPINWRAP) ? container :
        container.querySelector('.' + CLS_SPINWRAP);
    var inner = spinnerWrap.querySelector('.' + CLS_SPININWRAP);
    var spinCheck;
    spinCheck = isHide ? !spinnerWrap.classList.contains(CLS_SPINTEMPLATE) && !spinnerWrap.classList.contains(CLS_HIDESPIN) :
        !spinnerWrap.classList.contains(CLS_SPINTEMPLATE) && !spinnerWrap.classList.contains(CLS_SHOWSPIN);
    if (spinCheck) {
        var svgEle = spinnerWrap.querySelector('svg');
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(svgEle)) {
            return;
        }
        var id = svgEle.getAttribute('id');
        globalTimeOut[id].isAnimate = !isHide;
        switch (globalTimeOut[id].type) {
            case 'Material':
                isHide ? clearTimeout(globalTimeOut[id].timeOut) : startMatAnimate(inner, id, globalTimeOut[id].radius);
                break;
            case 'Bootstrap':
                isHide ? clearTimeout(globalTimeOut[id].timeOut) : animateBootstrap(inner);
                break;
        }
    }
    isHide ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["classList"])(spinnerWrap, [CLS_HIDESPIN], [CLS_SHOWSPIN]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["classList"])(spinnerWrap, [CLS_SHOWSPIN], [CLS_HIDESPIN]);
}
function hideSpinner(container) {
    showHideSpinner(container, true);
}
function setSpinner(args) {
    if (args.template !== undefined) {
        spinTemplate = args.template;
        if (args.template !== undefined) {
            spinCSSClass = args.cssClass;
        }
    }
    var container = document.querySelectorAll('.' + CLS_SPINWRAP);
    for (var index = 0; index < container.length; index++) {
        ensureTemplate(args.template, container[index], args.type, args.cssClass);
    }
}
function ensureTemplate(template, container, theme, cssClass) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(template) && !container.classList.contains(CLS_SPINTEMPLATE)) {
        replaceTheme(container, theme, cssClass);
        if (container.classList.contains(CLS_SHOWSPIN)) {
            container.classList.remove(CLS_SHOWSPIN);
            showSpinner(container);
        }
        else {
            container.classList.remove(CLS_HIDESPIN);
            hideSpinner(container);
        }
    }
    else {
        spinTemplate = template;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(cssClass)) {
            spinCSSClass = cssClass;
        }
    }
}
function replaceTheme(container, theme, cssClass) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(cssClass)) {
        container.classList.add(cssClass);
    }
    var svgElement = container.querySelector('svg');
    var radius = theme === 'Bootstrap' ? parseFloat(svgElement.style.height) : parseFloat(svgElement.style.height) / 2;
    var classNames = svgElement.getAttribute('class');
    var svgClassList = classNames.split(/\s/);
    if (svgClassList.indexOf('e-spin-material') >= 0) {
        var id = svgElement.getAttribute('id');
        clearTimeout(globalTimeOut[id].timeOut);
    }
    setTheme(theme, container, radius);
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip__ = __webpack_require__(64);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tooltip__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__tooltip__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__tooltip__["c"]; });



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tooltipBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_popup__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_position__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_collision__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TOUCHEND_HIDE_DELAY = 1500;
var TAPHOLD_THRESHOLD = 500;
var SHOW_POINTER_TIP_GAP = 0;
var HIDE_POINTER_TIP_GAP = 8;
var MOUSE_TRAIL_GAP = 2;
var POINTER_ADJUST = 2;
var ROOT = 'e-tooltip';
var RTL = 'e-rtl';
var DEVICE = 'e-bigger';
var ICON = 'e-icons';
var CLOSE = 'e-tooltip-close';
var TOOLTIP_WRAP = 'e-tooltip-wrap';
var CONTENT = 'e-tip-content';
var ARROW_TIP = 'e-arrow-tip';
var ARROW_TIP_OUTER = 'e-arrow-tip-outer';
var ARROW_TIP_INNER = 'e-arrow-tip-inner';
var TIP_BOTTOM = 'e-tip-bottom';
var TIP_TOP = 'e-tip-top';
var TIP_LEFT = 'e-tip-left';
var TIP_RIGHT = 'e-tip-right';
var POPUP_ROOT = 'e-popup';
var POPUP_OPEN = 'e-popup-open';
var POPUP_CLOSE = 'e-popup-close';
var Animation = (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Animation;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["ChildProperty"]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])({ effect: 'FadeIn', duration: 150, delay: 0 })
], Animation.prototype, "open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])({ effect: 'FadeOut', duration: 150, delay: 0 })
], Animation.prototype, "close", void 0);
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(options, element) {
        return _super.call(this, options, element) || this;
    }
    Tooltip.prototype.initialize = function () {
        this.formatPosition();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], ROOT);
    };
    Tooltip.prototype.formatPosition = function () {
        if (this.position.indexOf('top') === 0 || this.position.indexOf('bottom') === 0) {
            _a = this.position.split(' '), this.tooltipPositionY = _a[0], this.tooltipPositionX = _a[1];
        }
        else {
            _b = this.position.split(' '), this.tooltipPositionX = _b[0], this.tooltipPositionY = _b[1];
        }
        var _a, _b;
    };
    Tooltip.prototype.renderArrow = function () {
        this.setTipClass(this.position);
        var tip = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: ARROW_TIP + ' ' + this.tipClass });
        tip.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: ARROW_TIP_OUTER + ' ' + this.tipClass }));
        tip.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: ARROW_TIP_INNER + ' ' + this.tipClass }));
        this.tooltipEle.appendChild(tip);
    };
    Tooltip.prototype.setTipClass = function (position) {
        if (position.indexOf('right') === 0) {
            this.tipClass = TIP_LEFT;
        }
        else if (position.indexOf('bottom') === 0) {
            this.tipClass = TIP_TOP;
        }
        else if (position.indexOf('left') === 0) {
            this.tipClass = TIP_RIGHT;
        }
        else {
            this.tipClass = TIP_BOTTOM;
        }
    };
    Tooltip.prototype.renderPopup = function (target) {
        var elePos = this.mouseTrail ? { top: 0, left: 0 } : this.getTooltipPosition(target);
        this.popupObj = new __WEBPACK_IMPORTED_MODULE_1__popup_popup__["a" /* Popup */](this.tooltipEle, {
            height: this.height,
            width: this.width,
            position: {
                X: elePos.left,
                Y: elePos.top
            },
            enableRtl: this.enableRtl,
            open: this.openPopupHandler.bind(this),
            close: this.closePopupHandler.bind(this)
        });
    };
    Tooltip.prototype.getTooltipPosition = function (target) {
        var pos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_position__["a" /* calculatePosition */])(target, this.tooltipPositionX, this.tooltipPositionY);
        var offsetPos = this.calculateTooltipOffset(this.position);
        var elePos = this.collisionFlipFit(target, pos.left + offsetPos.left, pos.top + offsetPos.top);
        return elePos;
    };
    Tooltip.prototype.reposition = function (target) {
        var elePos = this.getTooltipPosition(target);
        this.popupObj.position = { X: elePos.left, Y: elePos.top };
        this.popupObj.dataBind();
    };
    Tooltip.prototype.openPopupHandler = function () {
        this.trigger('afterOpen', this.tooltipEventArgs);
    };
    Tooltip.prototype.closePopupHandler = function () {
        this.clear();
        this.trigger('afterClose', this.tooltipEventArgs);
    };
    Tooltip.prototype.calculateTooltipOffset = function (position) {
        var pos = { top: 0, left: 0 };
        var tooltipEleWidth = this.tooltipEle.offsetWidth;
        var tooltipEleHeight = this.tooltipEle.offsetHeight;
        var arrowEle = this.tooltipEle.querySelector('.' + ARROW_TIP);
        var tipWidth = arrowEle ? arrowEle.offsetWidth : 0;
        var tipHeight = arrowEle ? arrowEle.offsetHeight : 0;
        var tipAdjust = (this.showTipPointer ? SHOW_POINTER_TIP_GAP : HIDE_POINTER_TIP_GAP);
        var tipHeightAdjust = (tipHeight / 2) + POINTER_ADJUST + (this.tooltipEle.offsetHeight - this.tooltipEle.clientHeight);
        var tipWidthAdjust = (tipWidth / 2) + POINTER_ADJUST + (this.tooltipEle.offsetWidth - this.tooltipEle.clientWidth);
        if (this.mouseTrail) {
            tipAdjust += MOUSE_TRAIL_GAP;
        }
        switch (position) {
            case 'right top':
                pos.left += tipWidth + tipAdjust;
                pos.top -= tooltipEleHeight - tipHeightAdjust;
                break;
            case 'right center':
                pos.left += tipWidth + tipAdjust;
                pos.top -= (tooltipEleHeight / 2);
                break;
            case 'right bottom':
                pos.left += tipWidth + tipAdjust;
                pos.top -= (tipHeightAdjust);
                break;
            case 'bottom right':
                pos.top += (tipHeight + tipAdjust);
                pos.left -= (tipWidthAdjust);
                break;
            case 'bottom center':
                pos.top += (tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth / 2);
                break;
            case 'bottom left':
                pos.top += (tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth - tipWidthAdjust);
                break;
            case 'left bottom':
                pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
                pos.top -= (tipHeightAdjust);
                break;
            case 'left center':
                pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
                pos.top -= (tooltipEleHeight / 2);
                break;
            case 'left top':
                pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
                pos.top -= (tooltipEleHeight - tipHeightAdjust);
                break;
            case 'top left':
                pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth - tipWidthAdjust);
                break;
            case 'top right':
                pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
                pos.left -= (tipWidthAdjust);
                break;
            default:
                pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth / 2);
                break;
        }
        pos.left += this.offsetX;
        pos.top += this.offsetY;
        return pos;
    };
    Tooltip.prototype.updateTipPosition = function (position) {
        var selEle = this.tooltipEle.querySelectorAll('.' + ARROW_TIP + ',.' + ARROW_TIP_OUTER + ',.' + ARROW_TIP_INNER);
        var removeList = [TIP_BOTTOM, TIP_TOP, TIP_LEFT, TIP_RIGHT];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])(selEle, removeList);
        this.setTipClass(position);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])(selEle, this.tipClass);
    };
    Tooltip.prototype.adjustArrow = function (target, position, tooltipPositionX, tooltipPositionY) {
        if (this.showTipPointer === false) {
            return;
        }
        this.updateTipPosition(position);
        var leftValue;
        var topValue;
        var tooltipWidth = this.tooltipEle.clientWidth;
        var tooltipHeight = this.tooltipEle.clientHeight;
        var arrowEle = this.tooltipEle.querySelector('.' + ARROW_TIP);
        var tipWidth = arrowEle.offsetWidth;
        var tipHeight = arrowEle.offsetHeight;
        if (this.tipClass === TIP_BOTTOM || this.tipClass === TIP_TOP) {
            topValue = this.tipClass === TIP_BOTTOM ? '100%' : -(tipHeight) + 'px';
            var tipPosExclude = tooltipPositionX !== 'center' || (tooltipWidth > target.offsetWidth) || this.mouseTrail;
            if ((tipPosExclude && tooltipPositionX === 'left') || (!tipPosExclude && this.tipPointerPosition === 'end')) {
                leftValue = (tooltipWidth - tipWidth - POINTER_ADJUST) + 'px';
            }
            else if ((tipPosExclude && tooltipPositionX === 'right') || (!tipPosExclude && this.tipPointerPosition === 'start')) {
                leftValue = POINTER_ADJUST + 'px';
            }
            else {
                leftValue = ((tooltipWidth / 2) - (tipWidth / 2)) + 'px';
            }
        }
        else {
            leftValue = this.tipClass === TIP_RIGHT ? tooltipWidth + 'px' : -(tipWidth) + 'px';
            var tipPosExclude = tooltipPositionY !== 'center' || (tooltipHeight > target.offsetHeight) || this.mouseTrail;
            if ((tipPosExclude && tooltipPositionY === 'top') || (!tipPosExclude && this.tipPointerPosition === 'end')) {
                topValue = (tooltipHeight - tipHeight - POINTER_ADJUST) + 'px';
            }
            else if ((tipPosExclude && tooltipPositionY === 'bottom') || (!tipPosExclude && this.tipPointerPosition === 'start')) {
                topValue = POINTER_ADJUST + 'px';
            }
            else {
                topValue = ((tooltipHeight / 2) - (tipHeight / 2)) + 'px';
            }
        }
        arrowEle.style.top = topValue;
        arrowEle.style.left = leftValue;
    };
    Tooltip.prototype.renderContent = function (target) {
        var tooltipContent = this.tooltipEle.querySelector('.' + CONTENT);
        if (target && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(target.getAttribute('title'))) {
            target.setAttribute('data-content', target.getAttribute('title'));
            target.removeAttribute('title');
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.content)) {
            if (typeof (this.content) === 'string') {
                tooltipContent.innerHTML = this.content;
            }
            else {
                while (tooltipContent.firstChild) {
                    tooltipContent.removeChild(tooltipContent.firstChild);
                }
                tooltipContent.appendChild(this.content);
            }
        }
        else {
            if (target && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(target.getAttribute('data-content'))) {
                tooltipContent.innerHTML = target.getAttribute('data-content');
            }
        }
    };
    Tooltip.prototype.renderCloseIcon = function () {
        if (!this.isSticky) {
            return;
        }
        var tipClose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: ICON + ' ' + CLOSE });
        this.tooltipEle.appendChild(tipClose);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(tipClose, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchStartEvent, this.onStickyClose, this);
    };
    Tooltip.prototype.addDescribedBy = function (target, id) {
        var describedby = (target.getAttribute('aria-describedby') || '').split(/\s+/);
        if (describedby.indexOf(id) < 0) {
            describedby.push(id);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(target, { 'aria-describedby': describedby.join(' ').trim(), 'data-tooltip-id': id });
    };
    Tooltip.prototype.removeDescribedBy = function (target) {
        var id = target.getAttribute('data-tooltip-id');
        var describedby = (target.getAttribute('aria-describedby') || '').split(/\s+/);
        var index = describedby.indexOf(id);
        if (index !== -1) {
            describedby.splice(index, 1);
        }
        target.removeAttribute('data-tooltip-id');
        var orgdescribedby = describedby.join(' ').trim();
        if (orgdescribedby) {
            target.setAttribute('aria-describedby', orgdescribedby);
        }
        else {
            target.removeAttribute('aria-describedby');
        }
    };
    Tooltip.prototype.tapHoldHandler = function (evt) {
        clearTimeout(this.autoCloseTimer);
        this.targetHover(evt.originalEvent);
    };
    Tooltip.prototype.touchEndHandler = function (e) {
        var _this = this;
        if (this.isSticky) {
            return;
        }
        var close = function () {
            _this.close();
        };
        this.autoCloseTimer = setTimeout(close, TOUCHEND_HIDE_DELAY);
    };
    Tooltip.prototype.targetClick = function (e) {
        var target;
        if (this.target) {
            target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["closest"])(e.target, this.target);
        }
        else {
            target = this.element;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(target)) {
            return;
        }
        if (target.getAttribute('data-tooltip-id') === null) {
            this.targetHover(e);
        }
        else if (!this.isSticky) {
            this.hideTooltip(this.animation.close, e, target);
        }
    };
    Tooltip.prototype.targetHover = function (e) {
        var target;
        if (this.target) {
            target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["closest"])(e.target, this.target);
        }
        else {
            target = this.element;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(target) || target.getAttribute('data-tooltip-id') !== null) {
            return;
        }
        var targetList = [].slice.call(document.querySelectorAll('[data-tooltip-id= ' + this.ctrlId + '_content]'));
        for (var _i = 0, targetList_1 = targetList; _i < targetList_1.length; _i++) {
            var target_1 = targetList_1[_i];
            this.restoreElement(target_1);
        }
        this.showTooltip(target, this.animation.open, e);
        this.wireMouseEvents(e, target);
    };
    Tooltip.prototype.showTooltip = function (target, showAnimation, e) {
        var _this = this;
        clearTimeout(this.showTimer);
        clearTimeout(this.hideTimer);
        this.tooltipEventArgs = e ? { type: e.type, cancel: false, target: target, event: e, element: this.tooltipEle } :
            { type: null, cancel: false, target: target, event: null, element: this.tooltipEle };
        this.trigger('beforeRender', this.tooltipEventArgs);
        if (this.tooltipEventArgs.cancel) {
            this.isHidden = true;
            this.clear();
            return;
        }
        this.isHidden = false;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.tooltipEle)) {
            this.ctrlId = this.element.getAttribute('id') ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getUniqueID"])(this.element.getAttribute('id')) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getUniqueID"])('tooltip');
            this.tooltipEle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', {
                className: TOOLTIP_WRAP + ' ' + POPUP_ROOT, attrs: {
                    role: 'tooltip', 'aria-hidden': 'false', 'id': this.ctrlId + '_content'
                }, styles: 'width:' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(this.width) + ';height:' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(this.height) + ';position:absolute;'
            });
            if (this.cssClass) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.tooltipEle], this.cssClass);
            }
            if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.tooltipEle], DEVICE);
            }
            if (this.width !== 'auto') {
                this.tooltipEle.style.maxWidth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(this.width);
            }
            this.tooltipEle.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('div', { className: CONTENT }));
            document.body.appendChild(this.tooltipEle);
            this.addDescribedBy(target, this.ctrlId + '_content');
            this.renderContent(target);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.tooltipEle], POPUP_OPEN);
            if (this.showTipPointer) {
                this.renderArrow();
            }
            this.renderCloseIcon();
            this.renderPopup(target);
        }
        else {
            this.adjustArrow(target, this.position, this.tooltipPositionX, this.tooltipPositionY);
            this.addDescribedBy(target, this.ctrlId + '_content');
            this.renderContent(target);
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Animation"].stop(this.tooltipEle);
            this.reposition(target);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.tooltipEle], POPUP_OPEN);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.tooltipEle], POPUP_CLOSE);
        this.tooltipEventArgs = e ? { type: e.type, cancel: false, target: target, event: e, element: this.tooltipEle } :
            { type: null, cancel: false, target: target, event: null, element: this.tooltipEle };
        this.trigger('beforeOpen', this.tooltipEventArgs);
        if (this.tooltipEventArgs.cancel) {
            this.isHidden = true;
            this.clear();
            return;
        }
        var openAnimation = {
            name: showAnimation.effect, duration: showAnimation.duration, delay: showAnimation.delay, timingFunction: 'easeOut'
        };
        if (showAnimation.effect === 'None') {
            openAnimation = undefined;
        }
        if (this.openDelay > 0) {
            var show = function () {
                if (_this.popupObj) {
                    _this.popupObj.show(openAnimation);
                }
            };
            this.showTimer = setTimeout(show, this.openDelay);
        }
        else {
            this.popupObj.show(openAnimation);
        }
    };
    Tooltip.prototype.checkCollision = function (target, x, y) {
        var elePos = {
            left: x, top: y, position: this.position,
            horizontal: this.tooltipPositionX, vertical: this.tooltipPositionY
        };
        var affectedPos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_collision__["a" /* isCollide */])(this.tooltipEle, (this.target ? this.element : null), x, y);
        if (affectedPos.length > 0) {
            elePos.horizontal = affectedPos.indexOf('left') >= 0 ? 'right' : affectedPos.indexOf('right') >= 0 ? 'left' :
                this.tooltipPositionX;
            elePos.vertical = affectedPos.indexOf('top') >= 0 ? 'bottom' : affectedPos.indexOf('bottom') >= 0 ? 'top' :
                this.tooltipPositionY;
        }
        return elePos;
    };
    Tooltip.prototype.collisionFlipFit = function (target, x, y) {
        var elePos = this.checkCollision(target, x, y);
        var newpos = elePos.position;
        if (this.tooltipPositionY !== elePos.vertical) {
            newpos = ((this.position.indexOf('bottom') === 0 || this.position.indexOf('top') === 0) ?
                elePos.vertical + ' ' + this.tooltipPositionX : this.tooltipPositionX + ' ' + elePos.vertical);
        }
        if (this.tooltipPositionX !== elePos.horizontal) {
            if (newpos.indexOf('left') === 0) {
                elePos.vertical = (newpos === 'left top' || newpos === 'left center') ? 'top' : 'bottom';
                newpos = (elePos.vertical + ' ' + 'left');
            }
            if (newpos.indexOf('right') === 0) {
                elePos.vertical = (newpos === 'right top' || newpos === 'right center') ? 'top' : 'bottom';
                newpos = (elePos.vertical + ' ' + 'right');
            }
            elePos.horizontal = this.tooltipPositionX;
        }
        if (elePos.position !== newpos) {
            var pos = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_position__["a" /* calculatePosition */])(target, this.tooltipPositionX, elePos.vertical);
            this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
            var offsetPos = this.calculateTooltipOffset(newpos);
            elePos.position = newpos;
            elePos.left = pos.left + offsetPos.left;
            elePos.top = pos.top + offsetPos.top;
        }
        else {
            this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
        }
        var eleOffset = { left: elePos.left, top: elePos.top };
        var left = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_collision__["b" /* fit */])(this.tooltipEle, (this.target ? this.element : null), { X: true, Y: false }, eleOffset).left;
        if (this.showTipPointer && (newpos.indexOf('bottom') === 0 || newpos.indexOf('top') === 0)) {
            var arrowEle = this.tooltipEle.querySelector('.' + ARROW_TIP);
            var arrowleft = parseInt(arrowEle.style.left, 10) - (left - elePos.left);
            if (arrowleft < 0) {
                arrowleft = 0;
            }
            else if ((arrowleft + arrowEle.offsetWidth) > this.tooltipEle.clientWidth) {
                arrowleft = this.tooltipEle.clientWidth - arrowEle.offsetWidth;
            }
            arrowEle.style.left = arrowleft.toString() + 'px';
        }
        eleOffset.left = left;
        return eleOffset;
    };
    Tooltip.prototype.hideTooltip = function (hideAnimation, e, targetElement) {
        var _this = this;
        var target;
        if (e) {
            target = this.target ? (targetElement || e.target) : this.element;
            this.tooltipEventArgs = {
                type: e.type, cancel: false, target: target, event: e, element: this.tooltipEle
            };
        }
        else {
            target = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]');
            this.tooltipEventArgs = {
                type: null, cancel: false, target: target, event: null, element: this.tooltipEle
            };
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(target)) {
            return;
        }
        this.trigger('beforeClose', this.tooltipEventArgs);
        if (!this.tooltipEventArgs.cancel) {
            this.restoreElement(target);
            this.isHidden = true;
            var closeAnimation_1 = {
                name: hideAnimation.effect, duration: hideAnimation.duration, delay: hideAnimation.delay, timingFunction: 'easeIn'
            };
            if (hideAnimation.effect === 'None') {
                closeAnimation_1 = undefined;
            }
            if (this.closeDelay > 0) {
                var hide = function () {
                    if (_this.popupObj) {
                        _this.popupObj.hide(closeAnimation_1);
                    }
                };
                this.hideTimer = setTimeout(hide, this.closeDelay);
            }
            else {
                this.popupObj.hide(closeAnimation_1);
            }
        }
        else {
            this.isHidden = false;
        }
    };
    Tooltip.prototype.restoreElement = function (target) {
        this.unwireMouseEvents(target);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(target.getAttribute('data-content'))) {
            target.setAttribute('title', target.getAttribute('data-content'));
            target.removeAttribute('data-content');
        }
        this.removeDescribedBy(target);
    };
    Tooltip.prototype.clear = function () {
        if (this.tooltipEle) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.tooltipEle], POPUP_CLOSE);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.tooltipEle], POPUP_OPEN);
        }
        if (this.isHidden) {
            if (this.popupObj) {
                this.popupObj.destroy();
            }
            if (this.tooltipEle) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["remove"])(this.tooltipEle);
            }
            this.tooltipEle = null;
            this.popupObj = null;
        }
    };
    Tooltip.prototype.onMouseOut = function (e) {
        this.hideTooltip(this.animation.close, e);
    };
    Tooltip.prototype.onStickyClose = function (e) {
        this.close();
    };
    Tooltip.prototype.onMouseMove = function (event) {
        var eventPageX = 0;
        var eventPageY = 0;
        if (event.type.indexOf('touch') > -1) {
            event.preventDefault();
            eventPageX = event.touches[0].pageX;
            eventPageY = event.touches[0].pageY;
        }
        else {
            eventPageX = event.pageX;
            eventPageY = event.pageY;
        }
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Animation"].stop(this.tooltipEle);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.tooltipEle], POPUP_CLOSE);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.tooltipEle], POPUP_OPEN);
        this.adjustArrow(event.target, this.position, this.tooltipPositionX, this.tooltipPositionY);
        var pos = this.calculateTooltipOffset(this.position);
        var x = eventPageX + pos.left + this.offsetX;
        var y = eventPageY + pos.top + this.offsetY;
        var elePos = this.checkCollision(event.target, x, y);
        if (this.tooltipPositionX !== elePos.horizontal || this.tooltipPositionY !== elePos.vertical) {
            var newpos = (this.position.indexOf('bottom') === 0 || this.position.indexOf('top') === 0) ?
                elePos.vertical + ' ' + elePos.horizontal : elePos.horizontal + ' ' + elePos.vertical;
            elePos.position = newpos;
            this.adjustArrow(event.target, elePos.position, elePos.horizontal, elePos.vertical);
            var colpos = this.calculateTooltipOffset(elePos.position);
            elePos.left = eventPageX + colpos.left + this.offsetX;
            elePos.top = eventPageY + colpos.top + this.offsetY;
        }
        this.tooltipEle.style.left = elePos.left + 'px';
        this.tooltipEle.style.top = elePos.top + 'px';
    };
    Tooltip.prototype.keyDown = function (event) {
        if (this.tooltipEle && event.keyCode === 27) {
            this.close();
        }
    };
    Tooltip.prototype.touchEnd = function (e) {
        if (this.tooltipEle && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["closest"])(e.target, '.' + ROOT) === null) {
            this.close();
        }
    };
    Tooltip.prototype.scrollHandler = function (e) {
        if (this.tooltipEle) {
            this.close();
        }
    };
    Tooltip.prototype.render = function () {
        this.initialize();
        this.wireEvents(this.opensOn);
    };
    Tooltip.prototype.preRender = function () {
        this.tipClass = TIP_BOTTOM;
        this.tooltipPositionX = 'center';
        this.tooltipPositionY = 'top';
        this.isHidden = true;
    };
    Tooltip.prototype.wireEvents = function (trigger) {
        var triggerList = this.getTriggerList(trigger);
        for (var _i = 0, triggerList_1 = triggerList; _i < triggerList_1.length; _i++) {
            var opensOn = triggerList_1[_i];
            if (opensOn === 'custom') {
                return;
            }
            if (opensOn === 'focus') {
                this.wireFocusEvents();
            }
            if (opensOn === 'click') {
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchStartEvent, this.targetClick, this);
            }
            if (opensOn === 'hover') {
                if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
                    this.touchModule = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Touch"](this.element, {
                        tapHoldThreshold: TAPHOLD_THRESHOLD,
                        tapHold: this.tapHoldHandler.bind(this)
                    });
                    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchEndEvent, this.touchEndHandler, this);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'mouseover', this.targetHover, this);
                }
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(document, 'touchend', this.touchEnd, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(document, 'scroll', this.scrollHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(document, 'keydown', this.keyDown, this);
    };
    Tooltip.prototype.getTriggerList = function (trigger) {
        if (trigger === 'auto') {
            trigger = (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) ? 'hover' : 'hover focus';
        }
        return trigger.split(' ');
    };
    Tooltip.prototype.wireFocusEvents = function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.target)) {
            var targetList = [].slice.call(this.element.querySelectorAll(this.target));
            for (var _i = 0, targetList_2 = targetList; _i < targetList_2.length; _i++) {
                var target = targetList_2[_i];
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(target, 'focus', this.targetHover, this);
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'focus', this.targetHover, this);
        }
    };
    Tooltip.prototype.wireMouseEvents = function (e, target) {
        if (!this.isSticky) {
            if (e.type === 'focus') {
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(target, 'blur', this.onMouseOut, this);
            }
            if (e.type === 'mouseover') {
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(target, 'mouseleave', this.onMouseOut, this);
            }
        }
        if (this.mouseTrail) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(target, 'mousemove touchstart', this.onMouseMove, this);
        }
    };
    Tooltip.prototype.unwireEvents = function (trigger) {
        var triggerList = this.getTriggerList(trigger);
        for (var _i = 0, triggerList_2 = triggerList; _i < triggerList_2.length; _i++) {
            var opensOn = triggerList_2[_i];
            if (opensOn === 'custom') {
                return;
            }
            if (opensOn === 'focus') {
                this.unwireFocusEvents();
            }
            if (opensOn === 'click') {
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchStartEvent, this.targetClick);
            }
            if (opensOn === 'hover') {
                if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
                    if (this.touchModule) {
                        this.touchModule.destroy();
                    }
                    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchEndEvent, this.touchEndHandler);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'mouseover', this.targetHover);
                }
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(document, 'touchend', this.touchEnd);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(document, 'scroll', this.scrollHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(document, 'keydown', this.keyDown);
    };
    Tooltip.prototype.unwireFocusEvents = function () {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.target)) {
            var targetList = [].slice.call(this.element.querySelectorAll(this.target));
            for (var _i = 0, targetList_3 = targetList; _i < targetList_3.length; _i++) {
                var target = targetList_3[_i];
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(target, 'focus', this.targetHover);
            }
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'focus', this.targetHover);
        }
    };
    Tooltip.prototype.unwireMouseEvents = function (target) {
        if (!this.isSticky) {
            var triggerList = this.getTriggerList(this.opensOn);
            for (var _i = 0, triggerList_3 = triggerList; _i < triggerList_3.length; _i++) {
                var opensOn = triggerList_3[_i];
                if (opensOn === 'focus') {
                    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(target, 'blur', this.onMouseOut);
                }
                if (opensOn === 'hover' && !__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
                    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(target, 'mouseleave', this.onMouseOut);
                }
            }
        }
        if (this.mouseTrail) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(target, 'mousemove touchstart', this.onMouseMove);
        }
    };
    Tooltip.prototype.getModuleName = function () {
        return 'tooltip';
    };
    Tooltip.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    Tooltip.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                    if (this.tooltipEle) {
                        this.tooltipEle.style.width = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(newProp.width);
                    }
                    break;
                case 'height':
                    if (this.tooltipEle) {
                        this.tooltipEle.style.height = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(newProp.height);
                    }
                    break;
                case 'content':
                    if (this.tooltipEle) {
                        this.renderContent();
                    }
                    break;
                case 'opensOn':
                    this.unwireEvents(oldProp.opensOn);
                    this.wireEvents(newProp.opensOn);
                    break;
                case 'position':
                    this.formatPosition();
                    var target = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]');
                    if (this.tooltipEle && target) {
                        this.reposition(target);
                    }
                    break;
                case 'tipPointerPosition':
                    var trgt = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]');
                    if (this.tooltipEle && trgt) {
                        this.reposition(trgt);
                    }
                    break;
                case 'offsetX':
                    if (this.tooltipEle) {
                        var x = newProp.offsetX - oldProp.offsetX;
                        this.tooltipEle.style.left = (parseInt(this.tooltipEle.style.left, 10) + (x)).toString() + 'px';
                    }
                    break;
                case 'offsetY':
                    if (this.tooltipEle) {
                        var y = newProp.offsetY - oldProp.offsetY;
                        this.tooltipEle.style.top = (parseInt(this.tooltipEle.style.top, 10) + (y)).toString() + 'px';
                    }
                    break;
                case 'cssClass':
                    if (this.tooltipEle) {
                        if (oldProp.cssClass) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.tooltipEle], oldProp.cssClass);
                        }
                        if (newProp.cssClass) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.tooltipEle], newProp.cssClass);
                        }
                    }
                    break;
                case 'enableRtl':
                    if (this.tooltipEle) {
                        if (this.enableRtl) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.tooltipEle], RTL);
                        }
                        else {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.tooltipEle], RTL);
                        }
                    }
                    break;
            }
        }
    };
    Tooltip.prototype.open = function (element, animation) {
        if (animation === void 0) { animation = this.animation.open; }
        if (element.style.display === 'none') {
            return;
        }
        this.showTooltip(element, animation);
    };
    Tooltip.prototype.close = function (animation) {
        if (animation === void 0) { animation = this.animation.close; }
        this.hideTooltip(animation);
    };
    Tooltip.prototype.refresh = function (target) {
        if (this.tooltipEle) {
            this.renderContent(target);
        }
        if (this.popupObj && target) {
            this.reposition(target);
        }
    };
    Tooltip.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], ROOT);
        this.unwireEvents(this.opensOn);
        if (this.popupObj) {
            this.popupObj.destroy();
        }
        if (this.tooltipEle) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["remove"])(this.tooltipEle);
        }
        this.tooltipEle = null;
        this.popupObj = null;
    };
    return Tooltip;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Component"]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('auto')
], Tooltip.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('auto')
], Tooltip.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])()
], Tooltip.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])()
], Tooltip.prototype, "target", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('top center')
], Tooltip.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(0)
], Tooltip.prototype, "offsetX", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(0)
], Tooltip.prototype, "offsetY", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(true)
], Tooltip.prototype, "showTipPointer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('auto')
], Tooltip.prototype, "tipPointerPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('auto')
], Tooltip.prototype, "opensOn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Tooltip.prototype, "mouseTrail", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Tooltip.prototype, "isSticky", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Complex"])({}, Animation)
], Tooltip.prototype, "animation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(0)
], Tooltip.prototype, "openDelay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(0)
], Tooltip.prototype, "closeDelay", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])()
], Tooltip.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], Tooltip.prototype, "enableRtl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Tooltip.prototype, "beforeRender", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Tooltip.prototype, "beforeOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Tooltip.prototype, "afterOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Tooltip.prototype, "beforeClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Tooltip.prototype, "afterClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Tooltip.prototype, "created", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], Tooltip.prototype, "destroyed", void 0);
Tooltip = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], Tooltip);

var tooltipBuilder = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["CreateBuilder"])(Tooltip);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(0), __webpack_require__(0), __webpack_require__(0), __webpack_require__(28), __webpack_require__(48), __webpack_require__(29), __webpack_require__(26), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_popups_1, ej2_inputs_1, incremental_search_1, drop_down_base_1, ej2_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dropDownListClasses = {
        root: 'e-dropdownlist',
        hover: drop_down_base_1.dropDownBaseClasses.hover,
        selected: drop_down_base_1.dropDownBaseClasses.selected,
        rtl: drop_down_base_1.dropDownBaseClasses.rtl,
        li: drop_down_base_1.dropDownBaseClasses.li,
        disable: drop_down_base_1.dropDownBaseClasses.disabled,
        base: drop_down_base_1.dropDownBaseClasses.root,
        focus: drop_down_base_1.dropDownBaseClasses.focus,
        input: 'e-input-group',
        inputFocus: 'e-input-focus',
        icon: 'e-input-group-icon e-ddl-icon',
        iconAnimation: 'e-icon-anim',
        value: 'e-input-value',
        device: 'e-ddl-device',
        backIcon: 'e-input-group-icon e-back-icon e-icons',
        filterBarClearIcon: 'e-input-group-icon e-clear-icon e-icons',
        filterInput: 'e-input-filter',
        filterParent: 'e-filter-parent',
        mobileFilter: 'e-ddl-device-filter',
        footer: 'e-ddl-footer',
        header: 'e-ddl-header',
        clearIcon: 'e-clear-icon',
        clearIconHide: 'e-clear-icon-hide',
        popupFullScreen: 'e-popup-full-page',
        disableIcon: 'e-ddl-disable-icon'
    };
    var inputObject = {
        container: null,
        buttons: []
    };
    var DropDownList = (function (_super) {
        __extends(DropDownList, _super);
        function DropDownList(options, element) {
            var _this = _super.call(this, options, element) || this;
            _this.isPopupOpen = false;
            _this.isDocumentClick = false;
            _this.isInteracted = false;
            _this.isFilterFocus = false;
            _this.beforePopupOpen = false;
            _this.initial = true;
            _this.initRemoteRender = false;
            _this.isNotSearchList = false;
            _this.isTyped = false;
            _this.isSelected = false;
            _this.preventFocus = false;
            _this.preventAutoFill = false;
            _this.isValidKey = false;
            _this.typedString = '';
            _this.isEscapeKey = false;
            _this.isPreventBlur = false;
            _this.isTabKey = false;
            _this.actionCompleteData = { isUpdated: false };
            _this.prevSelectPoints = {};
            _this.isSelectCustom = false;
            _this.isDropDownClick = false;
            _this.preventAltUp = false;
            _this.keyConfigure = {
                tab: 'tab',
                enter: '13',
                escape: '27',
                end: '35',
                home: '36',
                down: '40',
                up: '38',
                pageUp: '33',
                pageDown: '34',
                open: 'alt+40',
                close: 'shift+tab',
                hide: 'alt+38',
                space: '32'
            };
            return _this;
        }
        ;
        DropDownList.prototype.preRender = function () {
            this.element.style.opacity = '0';
            _super.prototype.preRender.call(this);
            this.activeIndex = this.index;
            this.queryString = '';
        };
        DropDownList.prototype.renderList = function (isEmptyData) {
            _super.prototype.render.call(this, isEmptyData);
            this.wireListEvents();
        };
        DropDownList.prototype.floatLabelChange = function () {
            if (this.getModuleName() === 'dropdownlist' && this.floatLabelType === 'Auto') {
                var floatElement = this.inputWrapper.container.querySelector('.e-float-text');
                if (this.inputElement.value !== '' || this.isInteracted) {
                    ej2_base_4.classList(floatElement, ['e-label-top'], ['e-label-bottom']);
                }
                else {
                    ej2_base_4.classList(floatElement, ['e-label-bottom'], ['e-label-top']);
                }
            }
        };
        DropDownList.prototype.resetHandler = function (e) {
            e.preventDefault();
            this.clear();
        };
        DropDownList.prototype.resetFocusElement = function () {
            this.removeHover();
            this.removeSelection();
            this.removeFocus();
            this.list.scrollTop = 0;
            if (this.getModuleName() !== 'autocomplete') {
                var li = this.ulElement.querySelector('.' + exports.dropDownListClasses.li);
                if (li) {
                    li.classList.add(exports.dropDownListClasses.focus);
                }
            }
        };
        DropDownList.prototype.clear = function (property) {
            this.resetSelection();
            this.onChangeEvent(null);
        };
        DropDownList.prototype.resetSelection = function () {
            if (this.list) {
                if (this.allowFiltering && this.getModuleName() !== 'autocomplete') {
                    this.onActionComplete(this.actionCompleteData.ulElement.cloneNode(true), this.actionCompleteData.list);
                }
                this.resetFocusElement();
            }
            this.hiddenElement.innerHTML = '';
            this.inputElement.value = '';
            this.value = null;
            this.text = null;
            this.index = null;
            this.activeIndex = null;
            this.item = null;
            this.itemData = null;
            this.queryString = '';
            if (this.valueTempElement) {
                ej2_base_4.detach(this.valueTempElement);
                this.inputElement.style.display = 'block';
                this.valueTempElement = null;
            }
            this.setSelection(null, null);
            this.isSelectCustom = false;
            this.updateIconState();
        };
        DropDownList.prototype.setHTMLAttributes = function () {
            if (Object.keys(this.htmlAttributes).length) {
                for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                    var htmlAttr = _a[_i];
                    if (htmlAttr === 'class') {
                        this.inputWrapper.container.classList.add(this.htmlAttributes[htmlAttr]);
                    }
                    else if (htmlAttr === 'disabled' && this.htmlAttributes[htmlAttr] === 'disabled') {
                        this.enabled = false;
                        this.setEnable();
                    }
                    else if (htmlAttr === 'readonly' && this.htmlAttributes[htmlAttr] === 'readonly') {
                        this.readonly = true;
                        this.dataBind();
                    }
                    else if (htmlAttr === 'style') {
                        this.inputWrapper.container.setAttribute('style', this.htmlAttributes[htmlAttr]);
                    }
                    else {
                        var defaultAttr = ['title', 'id', 'name', 'placeholder', 'required'];
                        if (defaultAttr.indexOf(htmlAttr) > -1) {
                            htmlAttr === 'placeholder' ? ej2_inputs_1.Input.setPlaceholder(this.htmlAttributes[htmlAttr], this.inputElement) :
                                this.element.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                        else {
                            this.inputWrapper.container.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                        }
                    }
                }
            }
        };
        DropDownList.prototype.getAriaAttributes = function () {
            return {
                'aria-disabled': 'false',
                'aria-owns': this.element.id + '_options',
                'role': 'listbox',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
                'aria-activedescendant': 'null',
                'aria-labelledby': this.hiddenElement.id
            };
        };
        DropDownList.prototype.setEnableRtl = function () {
            ej2_inputs_1.Input.setEnableRtl(this.enableRtl, [this.inputElement.parentElement]);
            if (this.popupObj) {
                this.popupObj.enableRtl = this.enableRtl;
                this.popupObj.dataBind();
            }
        };
        DropDownList.prototype.setEnable = function () {
            ej2_inputs_1.Input.setEnabled(this.enabled, this.inputElement);
            if (this.enabled) {
                ej2_base_4.removeClass([this.inputWrapper.container], exports.dropDownListClasses.disable);
                this.inputElement.setAttribute('aria-disabled', 'false');
                this.targetElement().setAttribute('tabindex', this.tabIndex);
            }
            else {
                this.hidePopup();
                ej2_base_4.addClass([this.inputWrapper.container], exports.dropDownListClasses.disable);
                this.inputElement.setAttribute('aria-disabled', 'true');
                this.targetElement().tabIndex = -1;
            }
        };
        DropDownList.prototype.getPersistData = function () {
            return this.addOnPersist(['value']);
        };
        ;
        DropDownList.prototype.preventTabIndex = function (element) {
            if (this.getModuleName() === 'dropdownlist') {
                element.tabIndex = -1;
            }
        };
        DropDownList.prototype.targetElement = function () {
            return this.inputWrapper.container;
        };
        DropDownList.prototype.getNgDirective = function () {
            return 'EJ-DROPDOWNLIST';
        };
        DropDownList.prototype.getElementByText = function (text) {
            return this.getElementByValue(this.getValueByText(text));
        };
        DropDownList.prototype.getElementByValue = function (value) {
            var item;
            var listItems = this.getItems();
            for (var _i = 0, listItems_1 = listItems; _i < listItems_1.length; _i++) {
                var liItem = listItems_1[_i];
                if (this.getFormattedValue(liItem.getAttribute('data-value')) === value) {
                    item = liItem;
                    break;
                }
            }
            return item;
        };
        ;
        DropDownList.prototype.initValue = function () {
            this.renderList();
            if (this.dataSource instanceof ej2_data_1.DataManager) {
                this.initRemoteRender = true;
            }
            else {
                this.updateValues();
            }
        };
        DropDownList.prototype.updateValues = function () {
            if (!ej2_base_2.isNullOrUndefined(this.value)) {
                this.setSelection(this.getElementByValue(this.value), null);
            }
            else if (this.text && ej2_base_2.isNullOrUndefined(this.value)) {
                this.setSelection(this.getElementByText(this.text), null);
            }
            else {
                this.setSelection(this.liCollections[this.activeIndex], null);
            }
            this.setHiddenValue();
            ej2_inputs_1.Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
        };
        DropDownList.prototype.onBlur = function (e) {
            var target = e.relatedTarget;
            var currentTarget = e.target;
            var isPreventBlur = this.isPreventBlur;
            this.isPreventBlur = false;
            if (isPreventBlur && !this.isDocumentClick && this.isPopupOpen && (!ej2_base_2.isNullOrUndefined(currentTarget) ||
                !this.isFilterLayout() && ej2_base_2.isNullOrUndefined(target))) {
                if (this.getModuleName() === 'dropdownlist' && this.allowFiltering && this.isPopupOpen) {
                    this.filterInput.focus();
                }
                else {
                    this.targetElement().focus();
                }
                return;
            }
            if (this.isDocumentClick || (!ej2_base_2.isNullOrUndefined(this.popupObj)
                && document.body.contains(this.popupObj.element) &&
                this.popupObj.element.classList.contains(exports.dropDownListClasses.mobileFilter))) {
                if (!this.beforePopupOpen) {
                    this.isDocumentClick = false;
                }
                return;
            }
            if (((this.getModuleName() === 'dropdownlist' && !this.isFilterFocus && target !== this.inputElement)
                && (document.activeElement !== target || (document.activeElement === target &&
                    currentTarget.classList.contains(exports.dropDownListClasses.inputFocus)))) ||
                (ej2_base_2.isNullOrUndefined(target) && this.getModuleName() === 'dropdownlist' && this.allowFiltering &&
                    currentTarget !== this.inputWrapper.container) || this.getModuleName() !== 'dropdownlist' &&
                !this.inputWrapper.container.contains(target) || this.isTabKey) {
                this.isDocumentClick = this.isPopupOpen ? true : false;
                this.focusOutAction();
                this.isTabKey = false;
            }
        };
        DropDownList.prototype.focusOutAction = function () {
            this.isInteracted = false;
            this.focusOut();
            this.onFocusOut();
        };
        DropDownList.prototype.onFocusOut = function () {
            if (this.isSelected) {
                this.isSelectCustom = false;
                this.onChangeEvent(null);
            }
            this.floatLabelChange();
            this.dispatchEvent(this.hiddenElement, 'change');
            if (this.inputWrapper.clearButton) {
                ej2_base_4.addClass([this.inputWrapper.clearButton], exports.dropDownListClasses.clearIconHide);
            }
            this.trigger('blur');
        };
        DropDownList.prototype.onFocus = function () {
            if (!this.isInteracted) {
                this.isInteracted = true;
                this.trigger('focus');
            }
            this.updateIconState();
        };
        DropDownList.prototype.wireEvent = function () {
            ej2_base_1.EventHandler.add(this.inputWrapper.container, 'mousedown', this.dropDownClick, this);
            ej2_base_1.EventHandler.add(this.inputWrapper.container, 'focus', this.focusIn, this);
            ej2_base_1.EventHandler.add(this.inputWrapper.container, 'keypress', this.onSearch, this);
            this.bindCommonEvent();
        };
        DropDownList.prototype.bindCommonEvent = function () {
            ej2_base_1.EventHandler.add(this.targetElement(), 'blur', this.onBlur, this);
            if (!ej2_base_3.Browser.isDevice) {
                this.keyboardModule = new ej2_base_1.KeyboardEvents(this.targetElement(), {
                    keyAction: this.keyActionHandler.bind(this), keyConfigs: this.keyConfigure, eventName: 'keydown'
                });
            }
            this.bindClearEvent();
        };
        DropDownList.prototype.bindClearEvent = function () {
            if (this.showClearButton) {
                ej2_base_1.EventHandler.add(this.inputWrapper.clearButton, 'mousedown', this.resetHandler, this);
            }
        };
        DropDownList.prototype.unBindCommonEvent = function () {
            ej2_base_1.EventHandler.remove(this.targetElement(), 'blur', this.onBlur);
            if (!ej2_base_3.Browser.isDevice) {
                this.keyboardModule.destroy();
            }
            if (this.showClearButton) {
                ej2_base_1.EventHandler.remove(this.inputWrapper.clearButton, 'mousedown', this.resetHandler);
            }
        };
        DropDownList.prototype.updateIconState = function () {
            if (this.showClearButton) {
                if (this.inputElement.value !== '') {
                    ej2_base_4.removeClass([this.inputWrapper.clearButton], exports.dropDownListClasses.clearIconHide);
                }
                else {
                    ej2_base_4.addClass([this.inputWrapper.clearButton], exports.dropDownListClasses.clearIconHide);
                }
            }
        };
        DropDownList.prototype.wireListEvents = function () {
            ej2_base_1.EventHandler.add(this.list, 'click', this.onMouseClick, this);
            ej2_base_1.EventHandler.add(this.list, 'mouseover', this.onMouseOver, this);
            ej2_base_1.EventHandler.add(this.list, 'mouseout', this.onMouseLeave, this);
        };
        ;
        DropDownList.prototype.onSearch = function (e) {
            if (e.charCode !== 32 && e.charCode !== 13) {
                if (this.list === undefined) {
                    this.renderList();
                }
                this.searchKeyEvent = e;
                if (!this.isRequested && !ej2_base_2.isNullOrUndefined(this.list.querySelector('li'))) {
                    this.incrementalSearch(e);
                }
            }
        };
        DropDownList.prototype.onMouseClick = function (e) {
            var target = e.target;
            var classList = target.classList;
            var li = ej2_base_4.closest(target, '.' + drop_down_base_1.dropDownBaseClasses.li);
            if (!this.isValidLI(li)) {
                return;
            }
            this.setSelection(li, e);
            if (ej2_base_3.Browser.isDevice && this.isFilterLayout()) {
                history.back();
            }
            else {
                var delay = 100;
                this.closePopup(delay);
            }
        };
        DropDownList.prototype.onMouseOver = function (e) {
            var currentLi = ej2_base_4.closest(e.target, '.' + drop_down_base_1.dropDownBaseClasses.li);
            this.setHover(currentLi);
        };
        ;
        DropDownList.prototype.setHover = function (li) {
            if (this.enabled && this.isValidLI(li) && !li.classList.contains(drop_down_base_1.dropDownBaseClasses.hover)) {
                this.removeHover();
                ej2_base_4.addClass([li], drop_down_base_1.dropDownBaseClasses.hover);
            }
        };
        ;
        DropDownList.prototype.onMouseLeave = function (e) {
            this.removeHover();
        };
        ;
        DropDownList.prototype.removeHover = function () {
            var hoveredItem = this.list.querySelectorAll('.' + drop_down_base_1.dropDownBaseClasses.hover);
            if (hoveredItem && hoveredItem.length) {
                ej2_base_4.removeClass(hoveredItem, drop_down_base_1.dropDownBaseClasses.hover);
            }
        };
        ;
        DropDownList.prototype.isValidLI = function (li) {
            return (li && li.hasAttribute('role') && li.getAttribute('role') === 'option');
        };
        ;
        DropDownList.prototype.incrementalSearch = function (e) {
            if (this.liCollections.length > 0) {
                var li = incremental_search_1.incrementalSearch(e.charCode, this.liCollections, this.activeIndex, true);
                if (!ej2_base_2.isNullOrUndefined(li)) {
                    this.setSelection(li, e);
                    this.setScrollPosition();
                }
            }
        };
        ;
        DropDownList.prototype.hideSpinner = function () {
            if (!ej2_base_2.isNullOrUndefined(this.spinnerElement)) {
                ej2_popups_1.hideSpinner(this.spinnerElement);
                ej2_base_4.removeClass([this.spinnerElement], exports.dropDownListClasses.disableIcon);
                this.spinnerElement.innerHTML = '';
                this.spinnerElement = null;
            }
        };
        DropDownList.prototype.showSpinner = function () {
            if (ej2_base_2.isNullOrUndefined(this.spinnerElement)) {
                this.spinnerElement = ej2_base_3.Browser.isDevice && !ej2_base_2.isNullOrUndefined(this.filterInputObj) && this.filterInputObj.buttons[1] ||
                    !ej2_base_2.isNullOrUndefined(this.filterInputObj) && this.filterInputObj.buttons[0] || this.inputWrapper.buttons[0];
                ej2_base_4.addClass([this.spinnerElement], exports.dropDownListClasses.disableIcon);
                ej2_popups_1.createSpinner({
                    target: this.spinnerElement,
                    width: drop_down_base_1.SPINNER_SIZE
                });
                ej2_popups_1.showSpinner(this.spinnerElement);
            }
        };
        DropDownList.prototype.keyActionHandler = function (e) {
            var preventAction = e.action === 'pageUp' || e.action === 'pageDown';
            var preventHomeEnd = this.getModuleName() !== 'dropdownlist' && (e.action === 'home' || e.action === 'end');
            this.isEscapeKey = e.action === 'escape';
            this.isTabKey = !this.isPopupOpen && e.action === 'tab';
            var isNavigation = (e.action === 'down' || e.action === 'up' || e.action === 'pageUp' || e.action === 'pageDown'
                || e.action === 'home' || e.action === 'end');
            if ((this.isEditTextBox() || preventAction || preventHomeEnd) && !this.isPopupOpen) {
                return;
            }
            if (!this.readonly) {
                var isTabAction = e.action === 'tab' || e.action === 'close';
                if (this.list === undefined && !this.isRequested && !isTabAction && e.action !== 'escape') {
                    this.searchKeyEvent = e;
                    this.renderList();
                }
                if (ej2_base_2.isNullOrUndefined(this.list) || (!ej2_base_2.isNullOrUndefined(this.liCollections) &&
                    isNavigation && this.liCollections.length === 0) || this.isRequested) {
                    return;
                }
                if (isTabAction && this.isPopupOpen || e.action === 'escape') {
                    e.preventDefault();
                }
                this.isSelected = e.action === 'escape' ? false : this.isSelected;
                this.isTyped = (isNavigation || e.action === 'escape') ? false : this.isTyped;
                switch (e.action) {
                    case 'down':
                    case 'up':
                        var focusEle = this.list.querySelector('.' + exports.dropDownListClasses.focus);
                        if (this.isSelectFocusItem(focusEle)) {
                            this.setSelection(focusEle, e);
                        }
                        else {
                            var nextItem = void 0;
                            var index = e.action === 'down' ? this.activeIndex + 1 : this.activeIndex - 1;
                            var startIndex = 0;
                            if (this.getModuleName() === 'autocomplete') {
                                startIndex = e.action === 'down' && ej2_base_2.isNullOrUndefined(this.activeIndex) ? 0 : this.liCollections.length - 1;
                                index = index < 0 ? this.liCollections.length - 1 : index === this.liCollections.length ? 0 : index;
                            }
                            nextItem = ej2_base_2.isNullOrUndefined(this.activeIndex) ? this.liCollections[startIndex] : this.liCollections[index];
                            this.setSelection(nextItem, e);
                        }
                        e.preventDefault();
                        break;
                    case 'pageUp':
                        this.pageUpSelection(this.activeIndex - this.getPageCount(), e);
                        e.preventDefault();
                        break;
                    case 'pageDown':
                        this.pageDownSelection(this.activeIndex + this.getPageCount(), e);
                        e.preventDefault();
                        break;
                    case 'home':
                        e.preventDefault();
                        if (this.activeIndex === 0) {
                            return;
                        }
                        this.setSelection(this.liCollections[0], e);
                        break;
                    case 'end':
                        e.preventDefault();
                        var lastLi = this.getItems().length - 1;
                        if (this.activeIndex === lastLi) {
                            return;
                        }
                        this.setSelection(this.liCollections[lastLi], e);
                        break;
                    case 'space':
                        if (this.getModuleName() === 'dropdownlist') {
                            if (!this.beforePopupOpen) {
                                this.showPopup();
                            }
                            else {
                                e.preventDefault();
                            }
                        }
                        break;
                    case 'open':
                        this.showPopup();
                        break;
                    case 'hide':
                        this.preventAltUp = this.isPopupOpen;
                        this.hidePopup();
                        this.focusDropDown(e);
                        break;
                    case 'enter':
                        this.selectCurrentItem(e);
                        break;
                    case 'escape':
                    case 'tab':
                    case 'close':
                        if (this.isPopupOpen) {
                            this.hidePopup();
                            this.focusDropDown(e);
                        }
                        break;
                }
            }
        };
        DropDownList.prototype.selectCurrentItem = function (e) {
            if (this.isPopupOpen) {
                var li = this.list.querySelector('.' + exports.dropDownListClasses.focus);
                if (li) {
                    this.setSelection(li, e);
                    this.isTyped = false;
                }
                if (this.isSelected) {
                    this.isSelectCustom = false;
                    this.onChangeEvent(e);
                }
                this.hidePopup();
                this.focusDropDown(e);
            }
            else {
                this.showPopup();
            }
        };
        DropDownList.prototype.isSelectFocusItem = function (element) {
            return !ej2_base_2.isNullOrUndefined(element);
        };
        DropDownList.prototype.getPageCount = function () {
            var liHeight = this.list.classList.contains(drop_down_base_1.dropDownBaseClasses.noData) ? null :
                getComputedStyle(this.getItems()[0], null).getPropertyValue('height');
            return Math.round(this.list.getBoundingClientRect().height / parseInt(liHeight, 10));
        };
        DropDownList.prototype.pageUpSelection = function (steps, event) {
            var previousItem = steps >= 0 ? this.liCollections[steps + 1] : this.liCollections[0];
            this.setSelection(previousItem, event);
        };
        ;
        DropDownList.prototype.pageDownSelection = function (steps, event) {
            var list = this.getItems();
            var previousItem = steps <= list.length ? this.liCollections[steps - 1] : this.liCollections[list.length - 1];
            this.setSelection(previousItem, event);
        };
        ;
        DropDownList.prototype.unWireEvent = function () {
            ej2_base_1.EventHandler.remove(this.inputWrapper.container, 'mousedown', this.dropDownClick);
            ej2_base_1.EventHandler.remove(this.inputWrapper.container, 'keypress', this.onSearch);
            ej2_base_1.EventHandler.remove(this.inputWrapper.container, 'focus', this.focusIn);
            this.unBindCommonEvent();
        };
        DropDownList.prototype.unWireListEvents = function () {
            ej2_base_1.EventHandler.remove(this.list, 'click', this.onMouseClick);
            ej2_base_1.EventHandler.remove(this.list, 'mouseover', this.onMouseOver);
            ej2_base_1.EventHandler.remove(this.list, 'mouseout', this.onMouseLeave);
        };
        ;
        DropDownList.prototype.onDocumentClick = function (e) {
            var target = e.target;
            if (!(!ej2_base_2.isNullOrUndefined(this.popupObj) && ej2_base_4.closest(target, '#' + this.popupObj.element.id)) &&
                !this.inputWrapper.container.contains(e.target)) {
                if (this.inputWrapper.container.classList.contains(exports.dropDownListClasses.inputFocus) || this.isPopupOpen) {
                    this.isDocumentClick = true;
                    var isActive = this.isRequested;
                    this.isInteracted = false;
                    this.hidePopup();
                    if (!isActive) {
                        this.onFocusOut();
                        this.inputWrapper.container.classList.remove(exports.dropDownListClasses.inputFocus);
                    }
                }
            }
            else if (target !== this.inputElement && !(this.allowFiltering && target === this.filterInput)
                && !(this.getModuleName() === 'combobox' &&
                    !this.allowFiltering && ej2_base_3.Browser.isDevice && target === this.inputWrapper.buttons[0])) {
                this.isPreventBlur = (ej2_base_3.Browser.isIE || ej2_base_3.Browser.info.name === 'edge') && (document.activeElement === this.targetElement() ||
                    document.activeElement === this.filterInput);
                e.preventDefault();
            }
        };
        DropDownList.prototype.activeStateChange = function () {
            if (this.isDocumentClick) {
                this.hidePopup();
                this.onFocusOut();
                this.inputWrapper.container.classList.remove(exports.dropDownListClasses.inputFocus);
            }
        };
        DropDownList.prototype.focusDropDown = function (e) {
            if (!this.initial && this.isFilterLayout()) {
                this.focusIn();
            }
        };
        DropDownList.prototype.dropDownClick = function (e) {
            if (this.targetElement().classList.contains(exports.dropDownListClasses.disable) || this.inputWrapper.clearButton === e.target) {
                return;
            }
            var target = e.target;
            if (target !== this.inputElement && !(this.allowFiltering && target === this.filterInput) && this.getModuleName() !== 'combobox') {
                e.preventDefault();
            }
            if (!this.readonly) {
                if (this.isPopupOpen) {
                    this.hidePopup();
                    if (this.isFilterLayout()) {
                        this.focusDropDown(e);
                    }
                }
                else {
                    this.focusIn();
                    this.floatLabelChange();
                    this.queryString = this.inputElement.value.trim() === '' ? null : this.inputElement.value;
                    this.isDropDownClick = true;
                    this.showPopup();
                }
            }
        };
        DropDownList.prototype.updateSelectedItem = function (li, e, preventSelect) {
            this.removeSelection();
            li.classList.add(drop_down_base_1.dropDownBaseClasses.selected);
            this.removeHover();
            var value = this.getFormattedValue(li.getAttribute('data-value'));
            this.item = li;
            this.itemData = this.getDataByValue(value);
            if (!this.initial && !preventSelect) {
                this.isSelected = true;
                var eventArgs = {
                    e: e,
                    item: this.item,
                    itemData: this.itemData,
                    isInteracted: e ? true : false
                };
                this.trigger('select', eventArgs);
            }
            var focusedItem = this.list.querySelector('.' + drop_down_base_1.dropDownBaseClasses.focus);
            if (focusedItem) {
                ej2_base_4.removeClass([focusedItem], drop_down_base_1.dropDownBaseClasses.focus);
            }
            li.setAttribute('aria-selected', 'true');
            this.activeIndex = this.getIndexByValue(value);
        };
        DropDownList.prototype.activeItem = function (li) {
            if (this.isValidLI(li) && !li.classList.contains(drop_down_base_1.dropDownBaseClasses.selected)) {
                this.removeSelection();
                li.classList.add(drop_down_base_1.dropDownBaseClasses.selected);
                this.removeHover();
                li.setAttribute('aria-selected', 'true');
            }
        };
        DropDownList.prototype.setValue = function (e) {
            var dataItem = this.getItemData();
            if (dataItem.value === null) {
                ej2_inputs_1.Input.setValue(null, this.inputElement, this.floatLabelType, this.showClearButton);
            }
            else {
                ej2_inputs_1.Input.setValue(dataItem.text, this.inputElement, this.floatLabelType, this.showClearButton);
            }
            if (this.previousValue === dataItem.value) {
                this.isSelected = false;
                return true;
            }
            else {
                this.isSelected = !this.initial ? true : false;
                this.isSelectCustom = false;
                if (this.getModuleName() === 'dropdownlist') {
                    this.updateIconState();
                }
                return false;
            }
        };
        DropDownList.prototype.setSelection = function (li, e) {
            if (this.isValidLI(li) && !li.classList.contains(drop_down_base_1.dropDownBaseClasses.selected)) {
                this.updateSelectedItem(li, e, false);
            }
            if (this.list) {
                this.removeHover();
            }
            this.selectedLI = li;
            if (this.setValue(e)) {
                return;
            }
            if (this.valueTemplate && this.itemData !== null) {
                this.setValueTemplate();
            }
            else if (this.inputElement.previousSibling === this.valueTempElement) {
                ej2_base_4.detach(this.valueTempElement);
                this.inputElement.style.display = 'block';
            }
            if (this.isPopupOpen) {
                ej2_base_2.attributes(this.targetElement(), { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
                if (this.isFilterLayout()) {
                    ej2_base_2.attributes(this.filterInput, { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
                }
            }
            if ((!this.isPopupOpen && !ej2_base_2.isNullOrUndefined(li)) || (this.isPopupOpen && !ej2_base_2.isNullOrUndefined(e) &&
                (e.type !== 'keydown' || e.type === 'keydown' && e.action === 'enter'))) {
                this.isSelectCustom = false;
                this.onChangeEvent(e);
            }
            if (this.isPopupOpen && !ej2_base_2.isNullOrUndefined(this.selectedLI) && this.itemData !== null && (!e || e.type !== 'click')) {
                this.setScrollPosition(e);
            }
        };
        DropDownList.prototype.setValueTemplate = function () {
            var compiledString;
            if (!this.valueTempElement) {
                this.valueTempElement = ej2_base_1.createElement('span', { className: exports.dropDownListClasses.value });
                this.inputElement.parentElement.insertBefore(this.valueTempElement, this.inputElement);
                this.inputElement.style.display = 'none';
                this.inputWrapper.container.focus();
                ej2_base_4.addClass([this.inputWrapper.container], [exports.dropDownListClasses.inputFocus]);
            }
            this.valueTempElement.innerHTML = '';
            compiledString = ej2_base_1.compile(this.valueTemplate);
            for (var _i = 0, _a = compiledString(this.itemData); _i < _a.length; _i++) {
                var item = _a[_i];
                this.valueTempElement.appendChild(item);
            }
        };
        DropDownList.prototype.removeSelection = function () {
            var selectedItems = this.list.querySelectorAll('.' + drop_down_base_1.dropDownBaseClasses.selected);
            if (selectedItems.length) {
                ej2_base_4.removeClass(selectedItems, drop_down_base_1.dropDownBaseClasses.selected);
                selectedItems[0].removeAttribute('aria-selected');
            }
        };
        ;
        DropDownList.prototype.getItemData = function () {
            var fields = this.fields;
            var dataItem = {};
            dataItem = this.itemData;
            var value = (!ej2_base_2.isNullOrUndefined(dataItem) &&
                (dataItem[fields.value] === null || dataItem[fields.value]) ? dataItem[fields.value] : dataItem);
            var text = (!ej2_base_2.isNullOrUndefined(dataItem) &&
                (dataItem[fields.text] === null || dataItem[fields.text]) ? dataItem[fields.text] : dataItem);
            return { value: value, text: text };
        };
        DropDownList.prototype.onChangeEvent = function (eve) {
            var dataItem = this.getItemData();
            var index = this.isSelectCustom ? null : this.activeIndex;
            this.setProperties({ 'value': dataItem.value, 'index': index, 'text': dataItem.text }, true);
            this.detachChangeEvent(eve);
        };
        ;
        DropDownList.prototype.detachChangeEvent = function (eve) {
            this.isSelected = false;
            this.previousValue = this.value;
            this.activeIndex = this.index;
            this.typedString = !ej2_base_2.isNullOrUndefined(this.text) ? this.text : '';
            if (!this.initial) {
                this.setHiddenValue();
                var eventArgs = {
                    e: eve,
                    item: this.item,
                    itemData: this.itemData,
                    isInteracted: eve ? true : false,
                    value: this.value
                };
                this.trigger('change', eventArgs);
            }
        };
        DropDownList.prototype.setHiddenValue = function () {
            if (!ej2_base_2.isNullOrUndefined(this.value)) {
                this.hiddenElement.innerHTML = '<option selected value =' + this.value + '>' + this.text + '</option>';
            }
            else {
                this.hiddenElement.innerHTML = '';
            }
        };
        DropDownList.prototype.onFilterUp = function (e) {
            this.isValidKey = e.keyCode === 40 || e.keyCode === 38 || this.isValidKey;
            if (this.isValidKey) {
                this.isValidKey = false;
                switch (e.keyCode) {
                    case 38:
                    case 40:
                        if (this.getModuleName() === 'autocomplete' && !this.isPopupOpen && !this.preventAltUp && !this.isRequested) {
                            this.preventAutoFill = true;
                            this.searchLists(e);
                        }
                        else {
                            this.preventAutoFill = false;
                        }
                        this.preventAltUp = false;
                        e.preventDefault();
                        break;
                    case 46:
                    case 8:
                        this.typedString = this.filterInput.value;
                        if (!this.isPopupOpen && this.typedString !== '' || this.isPopupOpen && this.queryString.length > 0) {
                            this.preventAutoFill = true;
                            this.searchLists(e);
                        }
                        else if (this.typedString === '') {
                            this.resetFocusElement();
                            this.activeIndex = null;
                            if (this.getModuleName() === 'autocomplete') {
                                this.hidePopup();
                            }
                        }
                        e.preventDefault();
                        break;
                    default:
                        this.typedString = this.filterInput.value;
                        this.preventAutoFill = false;
                        this.searchLists(e);
                        break;
                }
            }
        };
        DropDownList.prototype.onFilterDown = function (e) {
            switch (e.keyCode) {
                case 13:
                    break;
                case 40:
                case 38:
                    this.queryString = this.filterInput.value;
                    e.preventDefault();
                    break;
                case 9:
                    if (this.isPopupOpen) {
                        e.preventDefault();
                    }
                    break;
                default:
                    this.prevSelectPoints = this.getSelectionPoints();
                    this.queryString = this.filterInput.value;
                    break;
            }
        };
        DropDownList.prototype.removeFillSelection = function () {
            if (this.isInteracted) {
                var selection = this.getSelectionPoints();
                this.inputElement.setSelectionRange(selection.end, selection.end);
            }
        };
        DropDownList.prototype.getSelectionPoints = function () {
            var input = this.inputElement;
            return { start: Math.abs(input.selectionStart), end: Math.abs(input.selectionEnd) };
        };
        DropDownList.prototype.searchLists = function (e) {
            var _this = this;
            this.isTyped = true;
            this.activeIndex = null;
            if (this.filterInput.parentElement.querySelector('.' + exports.dropDownListClasses.clearIcon)) {
                var clearElement = this.filterInput.parentElement.querySelector('.' + exports.dropDownListClasses.clearIcon);
                clearElement.style.visibility = this.filterInput.value === '' ? 'hidden' : 'visible';
            }
            if (this.isFiltering()) {
                this.trigger('filtering', {
                    text: this.filterInput.value,
                    updateData: function (dataSource, query, fields) {
                        if (!ej2_base_2.isNullOrUndefined(_this.filterInput)) {
                            _this.beforePopupOpen = true;
                            if (_this.filterInput.value.trim() === '') {
                                _this.actionCompleteData.isUpdated = false;
                                _this.isTyped = false;
                                _this.onActionComplete(_this.actionCompleteData.ulElement, _this.actionCompleteData.list);
                                _this.isTyped = true;
                                if (!ej2_base_2.isNullOrUndefined(_this.itemData) && _this.getModuleName() === 'dropdownlist') {
                                    _this.focusIndexItem();
                                    _this.setScrollPosition();
                                }
                                _this.isNotSearchList = true;
                            }
                            else {
                                _this.isNotSearchList = false;
                                _this.resetList(dataSource, fields, query);
                            }
                        }
                    },
                    event: e
                });
            }
        };
        DropDownList.prototype.setSearchBox = function (popupElement) {
            if (this.isFiltering()) {
                var parentElement = ej2_base_1.createElement('span', {
                    className: exports.dropDownListClasses.filterParent
                });
                this.filterInput = ej2_base_1.createElement('input', {
                    attrs: { type: 'text' },
                    className: exports.dropDownListClasses.filterInput
                });
                this.element.parentNode.insertBefore(this.filterInput, this.element);
                var backIcon = false;
                if (ej2_base_3.Browser.isDevice) {
                    backIcon = true;
                }
                this.filterInputObj = ej2_inputs_1.Input.createInput({
                    element: this.filterInput,
                    buttons: backIcon ?
                        [exports.dropDownListClasses.backIcon, exports.dropDownListClasses.filterBarClearIcon] : [exports.dropDownListClasses.filterBarClearIcon],
                    properties: { placeholder: this.filterBarPlaceholder }
                });
                ej2_base_1.append([this.filterInputObj.container], parentElement);
                ej2_base_4.prepend([parentElement], popupElement);
                ej2_base_2.attributes(this.filterInput, {
                    'aria-disabled': 'false',
                    'aria-owns': this.element.id + '_options',
                    'role': 'listbox',
                    'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null,
                    'autocomplete': 'off',
                    'autocorrect': 'off',
                    'autocapitalize': 'off',
                    'spellcheck': 'false'
                });
                this.clearIconElement = this.filterInput.parentElement.querySelector('.' + exports.dropDownListClasses.clearIcon);
                if (!ej2_base_3.Browser.isDevice && this.clearIconElement) {
                    ej2_base_1.EventHandler.add(this.clearIconElement, 'click', this.clearText, this);
                    this.clearIconElement.style.visibility = 'hidden';
                }
                if (!ej2_base_3.Browser.isDevice) {
                    this.searchKeyModule = new ej2_base_1.KeyboardEvents(this.filterInput, {
                        keyAction: this.keyActionHandler.bind(this),
                        keyConfigs: this.keyConfigure,
                        eventName: 'keydown'
                    });
                }
                ej2_base_1.EventHandler.add(this.filterInput, 'input', this.onInput, this);
                ej2_base_1.EventHandler.add(this.filterInput, 'keyup', this.onFilterUp, this);
                ej2_base_1.EventHandler.add(this.filterInput, 'keydown', this.onFilterDown, this);
                ej2_base_1.EventHandler.add(this.filterInput, 'blur', this.onBlur, this);
                return this.filterInputObj;
            }
            else {
                return inputObject;
            }
        };
        ;
        DropDownList.prototype.onInput = function () {
            this.isValidKey = true;
        };
        DropDownList.prototype.onActionFailure = function (e) {
            _super.prototype.onActionFailure.call(this, e);
            this.renderPopup();
        };
        DropDownList.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
            if (this.isNotSearchList) {
                this.isNotSearchList = false;
                return;
            }
            if (this.isActive) {
                var selectedItem = this.selectedLI ? this.selectedLI.cloneNode(true) : null;
                _super.prototype.onActionComplete.call(this, ulElement, list, e);
                if (this.isRequested && !ej2_base_2.isNullOrUndefined(this.searchKeyEvent) && this.searchKeyEvent.type === 'keydown') {
                    this.isRequested = false;
                    this.keyActionHandler(this.searchKeyEvent);
                    this.searchKeyEvent = null;
                }
                if (this.isRequested && !ej2_base_2.isNullOrUndefined(this.searchKeyEvent)) {
                    this.incrementalSearch(this.searchKeyEvent);
                    this.searchKeyEvent = null;
                }
                this.list.scrollTop = 0;
                if (!ej2_base_2.isNullOrUndefined(ulElement)) {
                    ej2_base_2.attributes(ulElement, { 'id': this.element.id + '_options', 'role': 'listbox', 'aria-hidden': 'false' });
                }
                if (this.initRemoteRender) {
                    this.initial = true;
                    this.activeIndex = this.index;
                    this.updateValues();
                    this.initRemoteRender = false;
                    this.initial = false;
                }
                if (this.getModuleName() !== 'autocomplete' && this.isFiltering() && !this.isTyped) {
                    if (!this.actionCompleteData.isUpdated) {
                        this.actionCompleteData = { ulElement: ulElement.cloneNode(true), list: list, isUpdated: true };
                    }
                    this.addNewItem(list, selectedItem);
                    if (!ej2_base_2.isNullOrUndefined(this.itemData)) {
                        this.focusIndexItem();
                    }
                }
                if (this.beforePopupOpen) {
                    this.renderPopup();
                }
            }
        };
        DropDownList.prototype.addNewItem = function (listData, newElement) {
            var _this = this;
            if (!ej2_base_2.isNullOrUndefined(this.itemData) && !ej2_base_2.isNullOrUndefined(newElement)) {
                var value_1 = this.getItemData().value;
                var isExist = listData.some(function (data) {
                    return data[_this.fields.value] === value_1;
                });
                if (!isExist) {
                    this.addItem(this.itemData);
                    this.actionCompleteData.list.push(this.itemData);
                    this.actionCompleteData.ulElement.appendChild(newElement);
                }
                var selectedItems = void 0;
                var ulElement = this.actionCompleteData.ulElement;
                selectedItems = ulElement.querySelectorAll('.' + drop_down_base_1.dropDownBaseClasses.selected);
                if (selectedItems.length) {
                    ej2_base_4.removeClass(selectedItems, drop_down_base_1.dropDownBaseClasses.selected);
                    selectedItems[0].removeAttribute('aria-selected');
                }
            }
        };
        DropDownList.prototype.updateActionCompleteData = function (li, item) {
            if (this.getModuleName() !== 'autocomplete' && this.actionCompleteData.ulElement) {
                this.actionCompleteData.ulElement.appendChild(li.cloneNode(true));
                this.actionCompleteData.list.push(item);
            }
        };
        DropDownList.prototype.focusIndexItem = function () {
            var value = this.getItemData().value;
            this.activeIndex = this.getIndexByValue(value);
            var element = this.list.querySelector('[data-value="' + value + '"]');
            this.selectedLI = element;
            this.activeItem(element);
            this.removeFocus();
        };
        DropDownList.prototype.updateSelection = function () {
            var selectedItem = this.list.querySelector('.' + drop_down_base_1.dropDownBaseClasses.selected);
            if (selectedItem) {
                this.setProperties({ 'index': this.getIndexByValue(selectedItem.getAttribute('data-value')) });
                this.activeIndex = this.index;
            }
            else {
                this.removeFocus();
                this.list.querySelector('.' + drop_down_base_1.dropDownBaseClasses.li).classList.add(exports.dropDownListClasses.focus);
            }
        };
        DropDownList.prototype.removeFocus = function () {
            var highlightedItem = this.list.querySelectorAll('.' + exports.dropDownListClasses.focus);
            if (highlightedItem && highlightedItem.length) {
                ej2_base_4.removeClass(highlightedItem, exports.dropDownListClasses.focus);
            }
        };
        ;
        DropDownList.prototype.renderPopup = function () {
            if (this.popupObj && document.body.contains(this.popupObj.element)) {
                this.refreshPopup();
                return;
            }
            var popupEle = ej2_base_1.createElement('div', { id: this.element.id + '_popup', className: 'e-ddl e-popup' });
            var searchBox = this.setSearchBox(popupEle);
            this.listHeight = ej2_base_2.formatUnit(this.popupHeight);
            if (this.headerTemplate) {
                var compiledString = void 0;
                this.header = document.createElement('div');
                ej2_base_4.addClass([this.header], exports.dropDownListClasses.header);
                compiledString = ej2_base_1.compile(this.headerTemplate);
                for (var _i = 0, _a = compiledString({}); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.header.appendChild(item);
                }
                ej2_base_1.append([this.header], popupEle);
            }
            ej2_base_1.append([this.list], popupEle);
            if (this.footerTemplate) {
                this.setFooterTemplate(popupEle);
            }
            document.body.appendChild(popupEle);
            popupEle.style.visibility = 'hidden';
            if (this.popupHeight !== 'auto') {
                this.searchBoxHeight = 0;
                if (!ej2_base_2.isNullOrUndefined(searchBox.container)) {
                    this.searchBoxHeight = (searchBox.container.parentElement).getBoundingClientRect().height;
                    this.listHeight = (parseInt(this.listHeight, 10) - (this.searchBoxHeight)).toString() + 'px';
                }
                if (this.headerTemplate) {
                    var height = Math.round(this.header.getBoundingClientRect().height);
                    this.listHeight = (parseInt(this.listHeight, 10) - (height + this.searchBoxHeight)).toString() + 'px';
                }
                if (this.footerTemplate) {
                    var height = Math.round(this.footer.getBoundingClientRect().height);
                    this.listHeight = (parseInt(this.listHeight, 10) - (height + this.searchBoxHeight)).toString() + 'px';
                }
                this.list.style.maxHeight = (parseInt(this.listHeight, 10) - 2).toString() + 'px';
                popupEle.style.maxHeight = ej2_base_2.formatUnit(this.popupHeight);
            }
            else {
                popupEle.style.height = 'auto';
            }
            var offsetValue = 0;
            var left;
            if (!ej2_base_2.isNullOrUndefined(this.selectedLI) && (!ej2_base_2.isNullOrUndefined(this.activeIndex) && this.activeIndex >= 0)) {
                this.setScrollPosition();
            }
            else {
                this.list.scrollTop = 0;
            }
            if (ej2_base_3.Browser.isDevice && (!this.allowFiltering && (this.getModuleName() === 'dropdownlist' ||
                (this.isDropDownClick && this.getModuleName() === 'combobox')))) {
                offsetValue = this.getOffsetValue(popupEle);
                var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
                left = -(parseInt(getComputedStyle(firstItem).textIndent, 10) -
                    parseInt(getComputedStyle(this.inputElement).paddingLeft, 10) +
                    parseInt(getComputedStyle(this.inputElement.parentElement).borderLeftWidth, 10));
            }
            this.getFocusElement();
            this.createPopup(popupEle, offsetValue, left);
            this.checkCollision(popupEle);
            if (ej2_base_3.Browser.isDevice) {
                this.popupObj.element.classList.add(exports.dropDownListClasses.device);
                if (this.getModuleName() === 'dropdownlist' || (this.getModuleName() === 'combobox'
                    && !this.allowFiltering && this.isDropDownClick)) {
                    this.popupObj.collision = { X: 'none', Y: 'fit' };
                }
                if (this.isFilterLayout()) {
                    this.popupObj.element.classList.add(exports.dropDownListClasses.mobileFilter);
                    this.popupObj.position = { X: 0, Y: 0 };
                    this.popupObj.dataBind();
                    ej2_base_2.attributes(this.popupObj.element, { style: 'left:0px;right:0px;top:0px;bottom:0px;' });
                    ej2_base_4.addClass([document.body, this.popupObj.element], exports.dropDownListClasses.popupFullScreen);
                    this.setSearchBoxPosition();
                    this.backIconElement = searchBox.container.querySelector('.e-back-icon');
                    this.clearIconElement = searchBox.container.querySelector('.' + exports.dropDownListClasses.clearIcon);
                    ej2_base_1.EventHandler.add(this.backIconElement, 'click', this.clickOnBackIcon, this);
                    ej2_base_1.EventHandler.add(this.clearIconElement, 'click', this.clearText, this);
                }
            }
            popupEle.style.visibility = 'visible';
            ej2_base_4.addClass([popupEle], 'e-popup-close');
            var scrollParentElements = this.popupObj.getScrollableParent(this.inputWrapper.container);
            for (var _b = 0, scrollParentElements_1 = scrollParentElements; _b < scrollParentElements_1.length; _b++) {
                var element = scrollParentElements_1[_b];
                ej2_base_1.EventHandler.add(element, 'scroll', this.scrollHandler, this);
            }
            if (ej2_base_3.Browser.isDevice && this.isFilterLayout()) {
                ej2_base_1.EventHandler.add(this.list, 'scroll', this.listScroll, this);
            }
            ej2_base_2.attributes(this.targetElement(), { 'aria-expanded': 'true' });
            var inputParent = this.isFiltering() ? this.filterInput.parentElement : this.inputWrapper.container;
            ej2_base_4.addClass([inputParent], [exports.dropDownListClasses.inputFocus]);
            ej2_base_4.addClass([this.inputWrapper.container], [exports.dropDownListClasses.iconAnimation]);
            var animModel = { name: 'FadeIn', duration: 100 };
            this.beforePopupOpen = true;
            var eventArgs = { popup: this.popupObj };
            this.trigger('open', eventArgs);
            ej2_base_1.EventHandler.add(document, 'mousedown', this.onDocumentClick, this);
            this.popupObj.show(new ej2_base_3.Animation(animModel));
        };
        DropDownList.prototype.checkCollision = function (popupEle) {
            if (!ej2_base_3.Browser.isDevice || (ej2_base_3.Browser.isDevice && !(this.getModuleName() === 'dropdownlist' || this.isDropDownClick))) {
                var collision = ej2_popups_1.isCollide(popupEle);
                if (collision.length > 0) {
                    popupEle.style.marginTop = -parseInt(getComputedStyle(popupEle).marginTop, 10) + 'px';
                }
            }
        };
        DropDownList.prototype.getOffsetValue = function (popupEle) {
            var popupStyles = getComputedStyle(popupEle);
            var borderTop = parseInt(popupStyles.borderTop, 10);
            var borderBottom = parseInt(popupStyles.borderBottom, 10);
            return this.setPopupPosition(borderTop + borderBottom);
        };
        DropDownList.prototype.createPopup = function (element, offsetValue, left) {
            var _this = this;
            this.popupObj = new ej2_popups_1.Popup(element, {
                width: this.setWidth(), targetType: 'relative',
                relateTo: this.inputWrapper.container, collision: { X: 'none', Y: 'flip' }, offsetY: offsetValue,
                enableRtl: this.enableRtl, offsetX: left, position: { X: 'left', Y: 'bottom' },
                close: function () {
                    if (!_this.isDocumentClick) {
                        _this.focusDropDown();
                    }
                    _this.isDocumentClick = false;
                    _this.destroyPopup();
                },
                open: function () {
                    _this.isPopupOpen = true;
                    if (_this.isFilterLayout()) {
                        ej2_base_4.removeClass([_this.inputWrapper.container], [exports.dropDownListClasses.inputFocus]);
                        _this.isFilterFocus = true;
                        _this.filterInput.focus();
                        if (_this.inputWrapper.clearButton) {
                            ej2_base_4.addClass([_this.inputWrapper.clearButton], exports.dropDownListClasses.clearIconHide);
                        }
                    }
                    _this.activeStateChange();
                }
            });
        };
        DropDownList.prototype.isEmptyList = function () {
            return !ej2_base_2.isNullOrUndefined(this.liCollections) && this.liCollections.length === 0;
        };
        DropDownList.prototype.getFocusElement = function () {
        };
        DropDownList.prototype.isFilterLayout = function () {
            return this.getModuleName() === 'dropdownlist' && this.allowFiltering;
        };
        DropDownList.prototype.scrollHandler = function () {
            if (ej2_base_3.Browser.isDevice && ((this.getModuleName() === 'dropdownlist' &&
                !this.isFilterLayout()) || (this.getModuleName() === 'combobox' && !this.allowFiltering && this.isDropDownClick))) {
                this.hidePopup();
            }
        };
        DropDownList.prototype.setSearchBoxPosition = function () {
            var searchBoxHeight = this.filterInput.parentElement.getBoundingClientRect().height;
            this.popupObj.element.style.maxHeight = '100%';
            this.popupObj.element.style.width = '100%';
            this.list.style.maxHeight = (window.innerHeight - searchBoxHeight) + 'px';
            this.list.style.height = (window.innerHeight - searchBoxHeight) + 'px';
            var clearElement = this.filterInput.parentElement.querySelector('.' + exports.dropDownListClasses.clearIcon);
            ej2_base_4.detach(this.filterInput);
            clearElement.parentElement.insertBefore(this.filterInput, clearElement);
        };
        DropDownList.prototype.setPopupPosition = function (border) {
            var offsetValue;
            var popupOffset = border;
            var selectedLI = this.list.querySelector('.' + exports.dropDownListClasses.focus) || this.selectedLI;
            var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
            var lastItem = this.isEmptyList() ? this.list : this.liCollections[this.getItems().length - 1];
            var liHeight = firstItem.getBoundingClientRect().height;
            var listHeight = this.list.offsetHeight / 2;
            var height = ej2_base_2.isNullOrUndefined(selectedLI) ? firstItem.offsetTop : selectedLI.offsetTop;
            var lastItemOffsetValue = lastItem.offsetTop;
            if (lastItemOffsetValue - listHeight < height && !ej2_base_2.isNullOrUndefined(this.liCollections) &&
                this.liCollections.length > 0 && !ej2_base_2.isNullOrUndefined(selectedLI)) {
                var count = this.list.offsetHeight / liHeight;
                var paddingBottom = parseInt(getComputedStyle(this.list).paddingBottom, 10);
                offsetValue = (count - (this.liCollections.length - this.activeIndex)) * liHeight - popupOffset + paddingBottom;
                this.list.scrollTop = selectedLI.offsetTop;
            }
            else if (height > listHeight) {
                offsetValue = listHeight - liHeight / 2;
                this.list.scrollTop = height - listHeight + liHeight / 2;
            }
            else {
                offsetValue = height;
            }
            var inputHeight = this.inputWrapper.container.offsetHeight;
            offsetValue = offsetValue + liHeight + popupOffset - ((liHeight - inputHeight) / 2);
            return -offsetValue;
        };
        DropDownList.prototype.setWidth = function () {
            var width = ej2_base_2.formatUnit(this.popupWidth);
            if (width.indexOf('%') > -1) {
                var inputWidth = this.inputWrapper.container.offsetWidth * parseFloat(width) / 100;
                width = inputWidth.toString() + 'px';
            }
            if (ej2_base_3.Browser.isDevice && (!this.allowFiltering && (this.getModuleName() === 'dropdownlist' ||
                (this.isDropDownClick && this.getModuleName() === 'combobox')))) {
                var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
                width = (parseInt(width, 10) + (parseInt(getComputedStyle(firstItem).textIndent, 10) -
                    parseInt(getComputedStyle(this.inputElement).paddingLeft, 10) +
                    parseInt(getComputedStyle(this.inputElement.parentElement).borderLeftWidth, 10)) * 2) + 'px';
            }
            return width;
        };
        DropDownList.prototype.scrollBottom = function (isInitial) {
            var currentOffset = this.list.offsetHeight;
            var nextBottom = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
            var nextOffset = this.list.scrollTop + nextBottom - currentOffset;
            nextOffset = isInitial ? nextOffset + parseInt(getComputedStyle(this.list).paddingTop, 10) * 2 : nextOffset;
            var boxRange = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
            boxRange = this.fields.groupBy && !ej2_base_2.isNullOrUndefined(this.fixedHeaderElement) ?
                boxRange - this.fixedHeaderElement.offsetHeight : boxRange;
            if (this.activeIndex === 0) {
                this.list.scrollTop = 0;
            }
            else if (nextBottom > currentOffset || !(boxRange > 0 && this.list.offsetHeight > boxRange)) {
                this.list.scrollTop = nextOffset;
            }
        };
        DropDownList.prototype.scrollTop = function () {
            var nextOffset = this.selectedLI.offsetTop - this.list.scrollTop;
            var nextBottom = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
            nextOffset = this.fields.groupBy && !ej2_base_2.isNullOrUndefined(this.fixedHeaderElement) ?
                nextOffset - this.fixedHeaderElement.offsetHeight : nextOffset;
            var boxRange = (this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop);
            if (this.activeIndex === 0) {
                this.list.scrollTop = 0;
            }
            else if (nextOffset < 0) {
                this.list.scrollTop = this.list.scrollTop + nextOffset;
            }
            else if (!(boxRange > 0 && this.list.offsetHeight > boxRange)) {
                this.list.scrollTop = this.selectedLI.offsetTop - (this.fields.groupBy && !ej2_base_2.isNullOrUndefined(this.fixedHeaderElement) ?
                    this.fixedHeaderElement.offsetHeight : 0);
            }
        };
        DropDownList.prototype.isEditTextBox = function () {
            return false;
        };
        DropDownList.prototype.isFiltering = function () {
            return this.allowFiltering;
        };
        DropDownList.prototype.isPopupButton = function () {
            return true;
        };
        DropDownList.prototype.setScrollPosition = function (e) {
            if (!ej2_base_2.isNullOrUndefined(e)) {
                switch (e.action) {
                    case 'pageDown':
                    case 'down':
                    case 'end':
                        this.scrollBottom();
                        break;
                    default:
                        this.scrollTop();
                        break;
                }
            }
            else {
                this.scrollBottom(true);
            }
        };
        DropDownList.prototype.clearText = function () {
            this.filterInput.value = '';
            this.searchLists(null);
        };
        DropDownList.prototype.listScroll = function () {
            this.filterInput.blur();
        };
        DropDownList.prototype.closePopup = function (delay) {
            this.isTyped = false;
            if (!(this.popupObj && document.body.contains(this.popupObj.element))) {
                return;
            }
            ej2_base_1.EventHandler.remove(document, 'mousedown', this.onDocumentClick);
            this.isActive = false;
            this.filterInputObj = null;
            this.isDropDownClick = false;
            this.preventAutoFill = false;
            var scrollableParentElements = this.popupObj.getScrollableParent(this.inputWrapper.container);
            for (var _i = 0, scrollableParentElements_1 = scrollableParentElements; _i < scrollableParentElements_1.length; _i++) {
                var element = scrollableParentElements_1[_i];
                ej2_base_1.EventHandler.remove(element, 'scroll', this.scrollHandler);
            }
            if (ej2_base_3.Browser.isDevice && this.isFilterLayout()) {
                ej2_base_4.removeClass([document.body, this.popupObj.element], exports.dropDownListClasses.popupFullScreen);
                ej2_base_1.EventHandler.remove(this.list, 'scroll', this.listScroll);
            }
            if (this.isFilterLayout()) {
                if (!ej2_base_3.Browser.isDevice) {
                    this.searchKeyModule.destroy();
                    if (this.clearIconElement) {
                        ej2_base_1.EventHandler.remove(this.clearIconElement, 'click', this.clearText);
                    }
                }
                if (this.backIconElement) {
                    ej2_base_1.EventHandler.remove(this.backIconElement, 'click', this.clickOnBackIcon);
                    ej2_base_1.EventHandler.remove(this.clearIconElement, 'click', this.clearText);
                }
                ej2_base_1.EventHandler.remove(this.filterInput, 'input', this.onInput);
                ej2_base_1.EventHandler.remove(this.filterInput, 'keyup', this.onFilterUp);
                ej2_base_1.EventHandler.remove(this.filterInput, 'keydown', this.onFilterDown);
                ej2_base_1.EventHandler.remove(this.filterInput, 'blur', this.onBlur);
                this.filterInput = null;
            }
            ej2_base_2.attributes(this.targetElement(), { 'aria-expanded': 'false', 'aria-activedescendant': null });
            this.inputWrapper.container.classList.remove(exports.dropDownListClasses.iconAnimation);
            if (this.isFiltering()) {
                this.actionCompleteData.isUpdated = false;
            }
            this.beforePopupOpen = false;
            var eventArgs = { popup: this.popupObj };
            this.trigger('close', eventArgs);
            var animModel = {
                name: 'FadeOut',
                duration: 100,
                delay: delay ? delay : 0
            };
            if (this.getModuleName() === 'autocomplete') {
                this.rippleFun();
            }
            if (this.isPopupOpen) {
                this.popupObj.hide(new ej2_base_3.Animation(animModel));
            }
            else {
                this.destroyPopup();
            }
        };
        DropDownList.prototype.destroyPopup = function () {
            this.isPopupOpen = false;
            this.isFilterFocus = false;
            this.popupObj.destroy();
            ej2_base_4.detach(this.popupObj.element);
        };
        DropDownList.prototype.clickOnBackIcon = function () {
            this.hidePopup();
            this.focusIn();
        };
        DropDownList.prototype.render = function () {
            if (this.element.tagName === 'INPUT') {
                this.inputElement = this.element;
            }
            else {
                this.inputElement = ej2_base_1.createElement('input');
                if (this.element.tagName !== this.getNgDirective()) {
                    this.element.style.display = 'none';
                }
                this.element.parentElement.insertBefore(this.inputElement, this.element);
                this.preventTabIndex(this.inputElement);
            }
            this.inputWrapper = ej2_inputs_1.Input.createInput({
                element: this.inputElement,
                buttons: this.isPopupButton() ? [exports.dropDownListClasses.icon] : null,
                floatLabelType: this.floatLabelType,
                properties: {
                    readonly: this.getModuleName() === 'dropdownlist' ? true : this.readonly,
                    placeholder: this.placeholder,
                    cssClass: this.cssClass,
                    enabled: this.enabled,
                    enableRtl: this.enableRtl,
                    showClearButton: this.showClearButton
                },
            });
            if (this.element.tagName === this.getNgDirective()) {
                this.element.appendChild(this.inputWrapper.container);
            }
            else {
                this.inputElement.parentElement.insertBefore(this.element, this.inputElement);
            }
            var name = this.element.getAttribute('name') ? this.element.getAttribute('name') : this.element.getAttribute('id');
            this.hiddenElement = ej2_base_1.createElement('select', {
                attrs: { 'name': name, 'aria-hidden': 'true' }, styles: 'display:none'
            });
            ej2_base_4.prepend([this.hiddenElement], this.inputWrapper.container);
            this.element.removeAttribute('name');
            this.setFields();
            this.inputWrapper.container.style.width = ej2_base_2.formatUnit(this.width);
            this.inputWrapper.container.classList.add('e-ddl');
            this.wireEvent();
            this.tabIndex = this.element.hasAttribute('tabindex') ? this.element.getAttribute('tabindex') : '0';
            this.element.removeAttribute('tabindex');
            var id = this.element.getAttribute('id') ? this.element.getAttribute('id') : ej2_base_2.getUniqueID('ej2_dropdownlist');
            this.element.id = id;
            this.hiddenElement.id = id + '_hidden';
            this.targetElement().setAttribute('tabindex', this.tabIndex);
            ej2_base_2.attributes(this.targetElement(), this.getAriaAttributes());
            this.setHTMLAttributes();
            if (this.value !== null || this.activeIndex !== null || this.text !== null) {
                this.initValue();
            }
            else if (this.element.tagName === 'SELECT' && this.element.options[0]) {
                var selectElement = this.element;
                this.value = selectElement.options[selectElement.selectedIndex].value;
                this.text = ej2_base_2.isNullOrUndefined(this.value) ? null : selectElement.options[selectElement.selectedIndex].textContent;
                this.initValue();
            }
            this.preventTabIndex(this.element);
            if (!this.enabled) {
                this.targetElement().tabIndex = -1;
            }
            this.initial = false;
            this.element.style.opacity = '';
        };
        ;
        DropDownList.prototype.setFooterTemplate = function (popupEle) {
            var compiledString;
            if (this.footer) {
                this.footer.innerHTML = '';
            }
            else {
                this.footer = document.createElement('div');
                ej2_base_4.addClass([this.footer], exports.dropDownListClasses.footer);
            }
            compiledString = ej2_base_1.compile(this.footerTemplate);
            for (var _i = 0, _a = compiledString({}); _i < _a.length; _i++) {
                var item = _a[_i];
                this.footer.appendChild(item);
            }
            ej2_base_1.append([this.footer], popupEle);
        };
        DropDownList.prototype.setOldText = function (text) {
            this.text = text;
        };
        DropDownList.prototype.setOldValue = function (value) {
            this.value = value;
        };
        DropDownList.prototype.refreshPopup = function () {
            if (!ej2_base_2.isNullOrUndefined(this.popupObj) && document.body.contains(this.popupObj.element) &&
                ((this.allowFiltering && !(ej2_base_3.Browser.isDevice && this.isFilterLayout())) || this.getModuleName() === 'autocomplete')) {
                this.popupObj.refreshPosition();
            }
        };
        DropDownList.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'htmlAttributes':
                        this.setHTMLAttributes();
                        break;
                    case 'width':
                        ej2_base_4.setStyleAttribute(this.inputWrapper.container, { 'width': ej2_base_2.formatUnit(newProp.width) });
                        break;
                    case 'placeholder':
                        ej2_inputs_1.Input.setPlaceholder(newProp.placeholder, this.inputElement);
                        break;
                    case 'filterBarPlaceholder':
                        ej2_inputs_1.Input.setPlaceholder(newProp.filterBarPlaceholder, this.filterInput);
                        break;
                    case 'readonly':
                        ej2_inputs_1.Input.setReadonly(newProp.readonly, this.inputElement);
                        break;
                    case 'cssClass':
                        ej2_inputs_1.Input.setCssClass(newProp.cssClass, [this.inputWrapper.container]);
                        if (this.popupObj) {
                            this.popupObj.element.classList.add(newProp.cssClass);
                        }
                        break;
                    case 'enableRtl':
                        this.setEnableRtl();
                        break;
                    case 'enabled':
                        this.setEnable();
                        break;
                    case 'text':
                        if (newProp.text === null) {
                            this.clear();
                            return;
                        }
                        if (!this.list) {
                            if (this.dataSource instanceof ej2_data_1.DataManager) {
                                this.initRemoteRender = true;
                            }
                            this.renderList();
                        }
                        if (!this.initRemoteRender) {
                            var li = this.getElementByText(newProp.text);
                            if (this.isValidLI(li)) {
                                this.setSelection(li, null);
                            }
                            else {
                                this.setOldText(oldProp.text);
                            }
                        }
                        break;
                    case 'value':
                        if (newProp.value === null) {
                            this.clear();
                            return;
                        }
                        if (!this.list) {
                            if (this.dataSource instanceof ej2_data_1.DataManager) {
                                this.initRemoteRender = true;
                            }
                            this.renderList();
                        }
                        if (!this.initRemoteRender) {
                            var item = this.getElementByValue(newProp.value);
                            if (this.isValidLI(item)) {
                                this.setSelection(item, null);
                            }
                            else {
                                this.setOldValue(oldProp.value);
                            }
                        }
                        break;
                    case 'index':
                        if (newProp.index === null) {
                            this.clear();
                            return;
                        }
                        if (!this.list) {
                            if (this.dataSource instanceof ej2_data_1.DataManager) {
                                this.initRemoteRender = true;
                            }
                            this.renderList();
                        }
                        if (!this.initRemoteRender) {
                            var element = this.liCollections[newProp.index];
                            if (this.isValidLI(element)) {
                                this.setSelection(element, null);
                            }
                            else {
                                this.index = oldProp.index;
                            }
                        }
                        break;
                    case 'query':
                    case 'dataSource':
                        this.clear(prop);
                        this.resetList(this.dataSource);
                        break;
                    case 'footerTemplate':
                        if (this.popupObj) {
                            this.setFooterTemplate(this.popupObj.element);
                        }
                        break;
                    case 'floatLabelType':
                        ej2_inputs_1.Input.removeFloating(this.inputWrapper);
                        ej2_inputs_1.Input.addFloating(this.inputElement, newProp.floatLabelType, this.placeholder);
                        break;
                    default:
                        var ddlProps = void 0;
                        ddlProps = this.getPropObject(prop, newProp, oldProp);
                        _super.prototype.onPropertyChanged.call(this, ddlProps.newProperty, ddlProps.oldProperty);
                        break;
                }
            }
        };
        DropDownList.prototype.getModuleName = function () {
            return 'dropdownlist';
        };
        DropDownList.prototype.showPopup = function () {
            if (this.beforePopupOpen) {
                this.refreshPopup();
                return;
            }
            this.beforePopupOpen = true;
            if (this.isFiltering() && !this.isActive && this.actionCompleteData.list && this.actionCompleteData.list[0]) {
                this.isActive = true;
                this.onActionComplete(this.actionCompleteData.ulElement, this.actionCompleteData.list, null, true);
            }
            else if (ej2_base_2.isNullOrUndefined(this.list) || !ej2_base_2.isUndefined(this.list) && this.list.classList.contains(drop_down_base_1.dropDownBaseClasses.noData)) {
                this.renderList();
            }
            if (ej2_base_3.Browser.isDevice && this.isFilterLayout()) {
                var proxy_1 = this;
                window.onpopstate = function () {
                    proxy_1.hidePopup();
                };
                history.pushState({}, '');
            }
            if (!ej2_base_2.isNullOrUndefined(this.list.children[0]) || this.list.classList.contains(drop_down_base_1.dropDownBaseClasses.noData)) {
                this.renderPopup();
            }
            ej2_base_2.attributes(this.targetElement(), { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
        };
        DropDownList.prototype.hidePopup = function () {
            if (this.isEscapeKey && this.getModuleName() === 'dropdownlist') {
                ej2_inputs_1.Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                this.isEscapeKey = false;
                if (!ej2_base_2.isNullOrUndefined(this.index)) {
                    this.selectedLI = this.liCollections[this.index];
                    this.updateSelectedItem(this.selectedLI, null, true);
                    if (this.valueTemplate && this.itemData !== null) {
                        this.setValueTemplate();
                    }
                }
                else {
                    this.resetSelection();
                }
            }
            this.closePopup();
            var dataItem = this.getItemData();
            if (this.inputElement.value.trim() === '' && !this.isInteracted && (this.isSelectCustom ||
                !ej2_base_2.isNullOrUndefined(this.selectedLI) && this.inputElement.value !== dataItem.text)) {
                this.isSelectCustom = false;
                this.clear();
            }
        };
        DropDownList.prototype.focusIn = function () {
            if (this.targetElement().classList.contains(exports.dropDownListClasses.disable)) {
                return;
            }
            var isFocused = false;
            if (this.preventFocus && ej2_base_3.Browser.isDevice) {
                this.inputWrapper.container.tabIndex = 1;
                this.inputWrapper.container.focus();
                this.preventFocus = false;
                isFocused = true;
            }
            if (!isFocused) {
                this.targetElement().focus();
            }
            ej2_base_4.addClass([this.inputWrapper.container], [exports.dropDownListClasses.inputFocus]);
            this.onFocus();
        };
        DropDownList.prototype.focusOut = function () {
            this.isTyped = true;
            this.hidePopup();
            this.targetElement().blur();
            ej2_base_4.removeClass([this.inputWrapper.container], [exports.dropDownListClasses.inputFocus]);
        };
        DropDownList.prototype.destroy = function () {
            var _this = this;
            this.isActive = false;
            this.hidePopup();
            this.unWireEvent();
            if (this.list) {
                this.unWireListEvents();
            }
            ['readonly', 'aria-disabled', 'aria-placeholder', 'placeholder'].forEach(function (value) {
                _this.inputElement.removeAttribute(value);
            });
            this.inputElement.setAttribute('tabindex', this.tabIndex);
            this.inputElement.classList.remove('e-input');
            ej2_inputs_1.Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
            this.element.style.display = 'block';
            if (this.inputWrapper.container.parentElement.tagName === this.getNgDirective()) {
                ej2_base_4.detach(this.inputWrapper.container);
            }
            else {
                this.inputWrapper.container.parentElement.insertBefore(this.element, this.inputWrapper.container);
                ej2_base_4.detach(this.inputWrapper.container);
            }
            _super.prototype.destroy.call(this);
        };
        ;
        return DropDownList;
    }(drop_down_base_1.DropDownBase));
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "cssClass", void 0);
    __decorate([
        ej2_base_1.Property('100%')
    ], DropDownList.prototype, "width", void 0);
    __decorate([
        ej2_base_1.Property('300px')
    ], DropDownList.prototype, "popupHeight", void 0);
    __decorate([
        ej2_base_1.Property('100%')
    ], DropDownList.prototype, "popupWidth", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "placeholder", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "filterBarPlaceholder", void 0);
    __decorate([
        ej2_base_1.Property({})
    ], DropDownList.prototype, "htmlAttributes", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "query", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "valueTemplate", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "headerTemplate", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "footerTemplate", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], DropDownList.prototype, "allowFiltering", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], DropDownList.prototype, "readonly", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "text", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "value", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownList.prototype, "index", void 0);
    __decorate([
        ej2_base_1.Property('Never')
    ], DropDownList.prototype, "floatLabelType", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], DropDownList.prototype, "showClearButton", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownList.prototype, "filtering", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownList.prototype, "change", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownList.prototype, "open", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownList.prototype, "close", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownList.prototype, "blur", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownList.prototype, "focus", void 0);
    DropDownList = __decorate([
        ej2_base_3.NotifyPropertyChanges
    ], DropDownList);
    exports.DropDownList = DropDownList;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VALIDATE_EMAIL = new RegExp('^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,5}' +
    '|[.]{1}[a-zA-Z]{2,4}[.]{1}[a-zA-Z]{2,4})$');
var VALIDATE_URL = new RegExp('^((ftp|http|https):\/\/)?www\.([A-z]{2,})\.([A-z]{2,})$');
var VALIDATE_DATE_ISO = new RegExp('^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$');
var VALIDATE_DIGITS = new RegExp('^[0-9]*$');
var VALIDATE_PHONE = new RegExp('^[+]?[0-9]{9,13}$');
var VALIDATE_CREDITCARD = new RegExp('^\\d{13,16}$');
var ErrorOption;
(function (ErrorOption) {
    ErrorOption[ErrorOption["Message"] = 0] = "Message";
    ErrorOption[ErrorOption["Label"] = 1] = "Label";
})(ErrorOption || (ErrorOption = {}));
var FormValidator = FormValidator_1 = (function (_super) {
    __extends(FormValidator, _super);
    function FormValidator(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.validated = [];
        _this.errorRules = [];
        _this.allowSubmit = false;
        _this.required = 'required';
        _this.infoElement = null;
        _this.inputElement = null;
        _this.selectQuery = 'input:not([type=reset]):not([type=button]), select, textarea';
        _this.defaultMessages = {
            required: 'This field is required.',
            email: 'Please enter a valid email address.',
            url: 'Please enter a valid URL.',
            date: 'Please enter a valid date.',
            dateIso: 'Please enter a valid date ( ISO ).',
            creditcard: 'Please enter valid card number',
            number: 'Please enter a valid number.',
            digits: 'Please enter only digits.',
            maxLength: 'Please enter no more than {0} characters.',
            minLength: 'Please enter at least {0} characters.',
            rangeLength: 'Please enter a value between {0} and {1} characters long.',
            range: 'Please enter a value between {0} and {1}.',
            max: 'Please enter a value less than or equal to {0}.',
            min: 'Please enter a value greater than or equal to {0}.',
            regex: 'Please enter a correct value.',
            tel: 'Please enter a valid phone number.',
            pattern: 'Please enter a correct pattern value.',
            equalTo: 'Please enter the valid match text',
        };
        element = typeof element === 'string' ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["select"])(element, document) : element;
        if (_this.element != null) {
            _this.element.setAttribute('novalidate', '');
            _this.inputElements = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["selectAll"])(_this.selectQuery, _this.element);
            _this.createHTML5Rules();
            _this.wireEvents();
        }
        else {
            return undefined;
        }
        return _this;
    }
    FormValidator.prototype.addRules = function (name, rules) {
        if (this.rules.hasOwnProperty(name)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["extend"])(this.rules[name], rules, {});
        }
        else {
            this.rules[name] = rules;
        }
    };
    FormValidator.prototype.removeRules = function (name, rules) {
        if (!name && !rules) {
            this.rules = {};
        }
        else if (this.rules[name] && !rules) {
            delete this.rules[name];
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.rules[name] && rules)) {
            for (var i = 0; i < rules.length; i++) {
                delete this.rules[name][rules[i]];
            }
        }
        else {
            return;
        }
    };
    FormValidator.prototype.validate = function (selected) {
        var rules = Object.keys(this.rules);
        if (selected && rules.length) {
            this.validateRules(selected);
            return rules.indexOf(selected) !== -1 && this.errorRules.filter(function (data) {
                return data.name === selected;
            }).length === 0;
        }
        else {
            for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
                var name_1 = rules_1[_i];
                this.validateRules(name_1);
            }
            return this.errorRules.length === 0;
        }
    };
    FormValidator.prototype.reset = function () {
        this.errorRules = [];
        this.validated = [];
        this.element.reset();
        var elements = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["selectAll"])(this.selectQuery, this.element);
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            var input = element;
            input.removeAttribute('aria-invalid');
            input.classList.remove(this.errorClass);
            if (input.name.length > 0) {
                this.getInputElement(input.name);
                this.getErrorElement(input.name);
                this.hideMessage(input.name);
            }
            input.classList.remove(this.validClass);
        }
    };
    FormValidator.prototype.getInputElement = function (name) {
        this.inputElement = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["select"])('[name=' + name + ']', this.element));
        return this.inputElement;
    };
    FormValidator.prototype.destroy = function () {
        this.reset();
        this.unwireEvents();
        this.rules = {};
        var elements = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["selectAll"])('.' + this.errorClass + ', .' + this.validClass, this.element);
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
            var element = elements_2[_i];
            element.remove();
        }
        _super.prototype.destroy.call(this);
    };
    FormValidator.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    ;
    FormValidator.prototype.getModuleName = function () {
        return 'formValidator';
    };
    FormValidator.prototype.createHTML5Rules = function () {
        var defRules = ['required', 'regex', 'rangeLength', 'maxLength', 'minLength', 'dateIso', 'digits', 'pattern',
            'data-val-required', 'type', 'data-validation', 'min', 'max', 'range', 'equalTo', 'data-val-minlength-min',
            'data-val-equalto-other', 'data-val-maxlength-max', 'data-val-range-min', 'data-val-regex-pattern', 'data-val-length-max',
            'data-val-creditcard', 'data-val-phone'];
        var acceptedTypes = ['email', 'url', 'date', 'number', 'tel'];
        for (var _i = 0, _a = (this.inputElements); _i < _a.length; _i++) {
            var input = _a[_i];
            var allRule = {};
            for (var _b = 0, defRules_1 = defRules; _b < defRules_1.length; _b++) {
                var rule = defRules_1[_b];
                if (input.getAttribute(rule) !== null) {
                    switch (rule) {
                        case 'required':
                            this.defRule(input, allRule, rule, input.required);
                            break;
                        case 'data-validation':
                            rule = input.getAttribute(rule);
                            this.defRule(input, allRule, rule, true);
                            break;
                        case 'type':
                            if (acceptedTypes.indexOf(input.type) !== -1) {
                                this.defRule(input, allRule, input.type, true);
                            }
                            break;
                        case 'rangeLength':
                        case 'range':
                            this.defRule(input, allRule, rule, JSON.parse(input.getAttribute(rule)));
                            break;
                        case 'equalTo':
                            var id = input.getAttribute(rule);
                            this.defRule(input, allRule, rule, id);
                            break;
                        default:
                            if (input.getAttribute('data-val') === 'true') {
                                this.annotationRule(input, allRule, rule, input.getAttribute(rule));
                            }
                            else {
                                this.defRule(input, allRule, rule, input.getAttribute(rule));
                            }
                    }
                }
            }
            if (Object.keys(allRule).length !== 0) {
                this.addRules(input.name, allRule);
            }
        }
    };
    FormValidator.prototype.annotationRule = function (input, ruleCon, ruleName, value) {
        var annotationRule = ruleName.split('-');
        var rulesList = ['required', 'creditcard', 'phone', 'maxlength', 'minlength', 'range', 'regex', 'equalto'];
        var ruleFirstName = annotationRule[annotationRule.length - 1];
        var ruleSecondName = annotationRule[annotationRule.length - 2];
        if (rulesList.indexOf(ruleFirstName) !== -1) {
            switch (ruleFirstName) {
                case 'required':
                    this.defRule(input, ruleCon, 'required', value);
                    break;
                case 'creditcard':
                    this.defRule(input, ruleCon, 'creditcard', value);
                    break;
                case 'phone':
                    this.defRule(input, ruleCon, 'tel', value);
                    break;
            }
        }
        else if (rulesList.indexOf(ruleSecondName) !== -1) {
            switch (ruleSecondName) {
                case 'maxlength':
                    this.defRule(input, ruleCon, 'maxLength', value);
                    break;
                case 'minlength':
                    this.defRule(input, ruleCon, 'minLength', value);
                    break;
                case 'range':
                    var minvalue = input.getAttribute('data-val-range-min');
                    var maxvalue = input.getAttribute('data-val-range-max');
                    this.defRule(input, ruleCon, 'range', [minvalue, maxvalue]);
                    break;
                case 'equalto':
                    var id = input.getAttribute(ruleName).split('.');
                    this.defRule(input, ruleCon, 'equalTo', id[id.length - 1]);
                    break;
                case 'regex':
                    this.defRule(input, ruleCon, 'regex', value);
                    break;
            }
        }
    };
    FormValidator.prototype.defRule = function (input, ruleCon, ruleName, value) {
        var message = input.getAttribute('data-' + ruleName + '-message');
        var annotationMessage = input.getAttribute('data-val-' + ruleName);
        if (message) {
            value = [value, message];
        }
        else if (annotationMessage) {
            value = [value, annotationMessage];
        }
        ruleCon[ruleName] = value;
    };
    FormValidator.prototype.wireEvents = function () {
        for (var _i = 0, _a = (this.inputElements); _i < _a.length; _i++) {
            var input = _a[_i];
            if (FormValidator_1.isCheckable(input)) {
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(input, 'click', this.clickHandler, this);
            }
            else if (input.tagName === 'SELECT') {
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(input, 'change', this.changeHandler, this);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(input, 'focusout', this.focusOutHandler, this);
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(input, 'keyup', this.keyUpHandler, this);
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'submit', this.submitHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'reset', this.resetHandler, this);
    };
    FormValidator.prototype.unwireEvents = function () {
        for (var _i = 0, _a = (this.inputElements); _i < _a.length; _i++) {
            var input = _a[_i];
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].clearEvents(input);
        }
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'submit', this.submitHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'reset', this.resetHandler);
    };
    FormValidator.prototype.focusOutHandler = function (e) {
        this.trigger('focusout', e);
        var element = e.target;
        if (this.rules[element.name]) {
            if (this.rules[element.name][this.required] || element.value.length > 0) {
                this.validate(element.name);
            }
            else if (this.validated.indexOf(element.name) === -1) {
                this.validated.push(element.name);
            }
        }
    };
    FormValidator.prototype.keyUpHandler = function (e) {
        this.trigger('keyup', e);
        var element = e.target;
        var excludeKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        if (e.which === 9 && (!this.rules[element.name] || (this.rules[element.name] && !this.rules[element.name][this.required]))) {
            return;
        }
        if (this.validated.indexOf(element.name) !== -1 && this.rules[element.name] && excludeKeys.indexOf(e.which) === -1) {
            this.validate(element.name);
        }
    };
    FormValidator.prototype.clickHandler = function (e) {
        this.trigger('click', e);
        var element = e.target;
        if (element.type !== 'submit') {
            this.validate(element.name);
        }
        else if (element.getAttribute('formnovalidate') !== null) {
            this.allowSubmit = true;
        }
    };
    FormValidator.prototype.changeHandler = function (e) {
        this.trigger('change', e);
        var element = e.target;
        this.validate(element.name);
    };
    FormValidator.prototype.submitHandler = function (e) {
        this.trigger('submit', e);
        if (!this.allowSubmit && !this.validate()) {
            e.preventDefault();
        }
        else {
            this.allowSubmit = false;
        }
    };
    FormValidator.prototype.resetHandler = function () {
        this.reset();
    };
    FormValidator.prototype.validateRules = function (name) {
        if (!this.rules[name]) {
            return;
        }
        var rules = Object.keys(this.rules[name]);
        this.getInputElement(name);
        this.getErrorElement(name);
        for (var _i = 0, rules_2 = rules; _i < rules_2.length; _i++) {
            var rule = rules_2[_i];
            var errorMessage = this.getErrorMessage(this.rules[name][rule], rule);
            var errorRule = { name: name, message: errorMessage };
            var eventArgs = {
                inputName: name,
                element: this.inputElement,
                message: errorMessage
            };
            if (!this.isValid(name, rule) && !this.inputElement.classList.contains(this.ignore)) {
                this.removeErrorRules(name);
                this.errorRules.push(errorRule);
                this.inputElement.setAttribute('aria-invalid', 'true');
                this.inputElement.setAttribute('aria-describedby', this.inputElement.id + '-info');
                if (!this.infoElement) {
                    this.createErrorElement(name, errorRule.message, this.inputElement);
                }
                else {
                    this.showMessage(errorRule);
                }
                eventArgs.errorElement = this.infoElement;
                eventArgs.status = 'failure';
                this.inputElement.classList.add(this.errorClass);
                this.inputElement.classList.remove(this.validClass);
                this.trigger('validationComplete', eventArgs);
                if (rule === 'required') {
                    this.inputElement.setAttribute('aria-required', 'true');
                }
                break;
            }
            else {
                this.hideMessage(name);
                eventArgs.status = 'success';
                this.trigger('validationComplete', eventArgs);
            }
        }
    };
    FormValidator.prototype.isValid = function (name, rule) {
        var params = this.rules[name][rule];
        var param = (params instanceof Array && typeof params[1] === 'string') ? params[0] : params;
        var currentRule = this.rules[name][rule];
        var args = { value: this.inputElement.value, param: param, element: this.inputElement, formElement: this.element };
        this.trigger('validationBegin', args);
        if (currentRule && typeof currentRule[0] === 'function') {
            var fn = currentRule[0];
            return fn.call(this, { element: this.inputElement, value: this.inputElement.value });
        }
        else if (FormValidator_1.isCheckable(this.inputElement)) {
            if (rule !== 'required') {
                return true;
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["selectAll"])('input[name=' + name + ']:checked', this.element).length > 0;
        }
        else {
            return FormValidator_1.checkValidator[rule](args);
        }
    };
    FormValidator.prototype.getErrorMessage = function (ruleValue, rule) {
        var message = (ruleValue instanceof Array && typeof ruleValue[1] === 'string') ? ruleValue[1] : this.defaultMessages[rule];
        var formats = message.match(/{(\d)}/g);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(formats)) {
            for (var i = 0; i < formats.length; i++) {
                var value = ruleValue instanceof Array ? ruleValue[i] : ruleValue;
                message = message.replace(formats[i], value);
            }
        }
        return message;
    };
    FormValidator.prototype.createErrorElement = function (name, message, input) {
        var errorElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])(this.errorElement, {
            className: this.errorClass,
            innerHTML: message,
            attrs: { for: name }
        });
        if (this.errorOption === ErrorOption.Message) {
            errorElement.classList.remove(this.errorClass);
            errorElement.classList.add('e-message');
            errorElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])(this.errorContainer, { className: this.errorClass, innerHTML: errorElement.outerHTML });
        }
        errorElement.id = this.inputElement.name + '-info';
        if (this.element.querySelector('[data-valmsg-for="' + input.id + '"]')) {
            this.element.querySelector('[data-valmsg-for="' + input.id + '"]').appendChild(errorElement);
        }
        else if (input.hasAttribute('data-msg-containerid') === true) {
            var containerId = input.getAttribute('data-msg-containerid');
            var divElement = this.element.querySelector('#' + containerId);
            divElement.appendChild(errorElement);
        }
        else if (this.customPlacement != null) {
            this.customPlacement.call(this, this.inputElement, errorElement);
        }
        else {
            this.inputElement.parentNode.insertBefore(errorElement, this.inputElement.nextSibling);
        }
        errorElement.style.display = 'block';
        this.getErrorElement(name);
        this.validated.push(name);
        this.checkRequired(name);
    };
    FormValidator.prototype.getErrorElement = function (name) {
        this.infoElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["select"])(this.errorElement + '.' + this.errorClass, this.inputElement.parentElement);
        if (!this.infoElement) {
            this.infoElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["select"])(this.errorElement + '.' + this.errorClass + '[for="' + name + '"]');
        }
        return this.infoElement;
    };
    FormValidator.prototype.removeErrorRules = function (name) {
        for (var i = 0; i < this.errorRules.length; i++) {
            var rule = this.errorRules[i];
            if (rule.name === name) {
                this.errorRules.splice(i, 1);
            }
        }
    };
    FormValidator.prototype.showMessage = function (errorRule) {
        this.infoElement.style.display = 'block';
        this.infoElement.innerHTML = errorRule.message;
        this.checkRequired(errorRule.name);
    };
    FormValidator.prototype.hideMessage = function (name) {
        if (this.infoElement) {
            this.infoElement.style.display = 'none';
            this.removeErrorRules(name);
            this.inputElement.classList.add(this.validClass);
            this.inputElement.classList.remove(this.errorClass);
            this.inputElement.setAttribute('aria-invalid', 'false');
        }
    };
    FormValidator.prototype.checkRequired = function (name) {
        if (!this.rules[name][this.required] && !this.inputElement.value.length) {
            this.infoElement.innerHTML = this.inputElement.value;
            this.infoElement.setAttribute('aria-invalid', 'false');
            this.hideMessage(name);
        }
    };
    FormValidator.isCheckable = function (input) {
        var inputType = input.getAttribute('type');
        return inputType && (inputType === 'checkbox' || inputType === 'radio' || inputType === 'submit');
    };
    return FormValidator;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Base"]));
FormValidator.checkValidator = {
    required: function (option) {
        return option.value.length > 0;
    },
    email: function (option) {
        return VALIDATE_EMAIL.test(option.value);
    },
    url: function (option) {
        return VALIDATE_URL.test(option.value);
    },
    dateIso: function (option) {
        return VALIDATE_DATE_ISO.test(option.value);
    },
    tel: function (option) {
        return VALIDATE_PHONE.test(option.value);
    },
    creditcard: function (option) {
        return VALIDATE_CREDITCARD.test(option.value);
    },
    number: function (option) {
        return !isNaN(Number(option.value)) && option.value.indexOf(' ') === -1;
    },
    digits: function (option) {
        return VALIDATE_DIGITS.test(option.value);
    },
    maxLength: function (option) {
        return option.value.length <= option.param;
    },
    minLength: function (option) {
        return option.value.length >= option.param;
    },
    rangeLength: function (option) {
        var param = option.param;
        return option.value.length >= param[0] && option.value.length <= param[1];
    },
    range: function (option) {
        var param = option.param;
        return !isNaN(Number(option.value)) && Number(option.value) >= param[0] && Number(option.value) <= param[1];
    },
    date: function (option) {
        return !isNaN(new Date(option.value).getTime());
    },
    max: function (option) {
        if (!isNaN(Number(option.value))) {
            return +option.value <= option.param;
        }
        return new Date(option.value).getTime() <= new Date(JSON.parse(JSON.stringify(option.param))).getTime();
    },
    min: function (option) {
        if (!isNaN(Number(option.value))) {
            return +option.value >= option.param;
        }
        return new Date(option.value).getTime() >= new Date(JSON.parse(JSON.stringify(option.param))).getTime();
    },
    regex: function (option) {
        return new RegExp(option.param).test(option.value);
    },
    equalTo: function (option) {
        var compareTo = option.formElement.querySelector('#' + option.param);
        option.param = compareTo.value;
        return option.param === option.value;
    },
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('e-hidden')
], FormValidator.prototype, "ignore", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])({})
], FormValidator.prototype, "rules", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('e-error')
], FormValidator.prototype, "errorClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('e-valid')
], FormValidator.prototype, "validClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('label')
], FormValidator.prototype, "errorElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('div')
], FormValidator.prototype, "errorContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(ErrorOption.Label)
], FormValidator.prototype, "errorOption", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], FormValidator.prototype, "focusout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], FormValidator.prototype, "keyup", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], FormValidator.prototype, "click", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], FormValidator.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], FormValidator.prototype, "submit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], FormValidator.prototype, "validationBegin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], FormValidator.prototype, "validationComplete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], FormValidator.prototype, "customPlacement", void 0);
FormValidator = FormValidator_1 = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], FormValidator);

var FormValidator_1;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_validator__ = __webpack_require__(66);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__form_validator__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__form_validator__["b"]; });



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__input__["a"]; });



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regularExpressions; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createMask;
/* harmony export (immutable) */ __webpack_exports__["c"] = applyMask;
/* harmony export (immutable) */ __webpack_exports__["d"] = wireEvents;
/* harmony export (immutable) */ __webpack_exports__["e"] = unwireEvents;
/* harmony export (immutable) */ __webpack_exports__["f"] = unstrippedValue;
/* harmony export (immutable) */ __webpack_exports__["g"] = strippedValue;
/* harmony export (immutable) */ __webpack_exports__["h"] = maskInputFocusHandler;
/* harmony export (immutable) */ __webpack_exports__["i"] = maskInputBlurHandler;
/* harmony export (immutable) */ __webpack_exports__["j"] = maskInputDropHandler;
/* harmony export (immutable) */ __webpack_exports__["k"] = mobileRemoveFunction;
/* harmony export (immutable) */ __webpack_exports__["l"] = setMaskValue;
/* harmony export (immutable) */ __webpack_exports__["m"] = setElementValue;
/* harmony export (immutable) */ __webpack_exports__["n"] = maskInput;
/* harmony export (immutable) */ __webpack_exports__["o"] = getVal;
/* harmony export (immutable) */ __webpack_exports__["p"] = getMaskedVal;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return MaskUndo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_input__ = __webpack_require__(24);


var ERROR = 'e-error';
var INPUTGROUP = 'e-input-group';
var FLOATINPUT = 'e-float-input';
var UTILMASK = 'e-utility-mask';
var TOPLABEL = 'e-label-top';
var BOTTOMLABEL = 'e-label-bottom';
var regularExpressions = {
    '0': '[0-9]',
    '9': '[0-9 ]',
    '#': '[0-9 +-]',
    'L': '[A-Za-z]',
    '?': '[A-Za-z ]',
    '&': '[^\x7f ]+',
    'C': '[^\x7f]+',
    'A': '[A-Za-z0-9]',
    'a': '[A-Za-z0-9 ]',
};
function createMask() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'role': 'textbox', 'autocomplete': 'off', 'autocorrect': 'off', 'autocapitalize': 'off',
        'spellcheck': 'false', 'aria-live': 'assertive', 'aria-valuenow': '' });
    if (this.mask) {
        var splitMask = this.mask.split(']');
        for (var i = 0; i < splitMask.length; i++) {
            if (splitMask[i][splitMask[i].length - 1] === '\\') {
                splitMask[i] = splitMask[i] + ']';
                var splitInnerMask = splitMask[i].split('[');
                for (var j = 0; j < splitInnerMask.length; j++) {
                    if (splitInnerMask[j][splitInnerMask[j].length - 1] === '\\') {
                        splitInnerMask[j] = splitInnerMask[j] + '[';
                    }
                    pushIntoRegExpCollec.call(this, splitInnerMask[j]);
                }
            }
            else {
                var splitInnerMask = splitMask[i].split('[');
                if (splitInnerMask.length > 1) {
                    var chkSpace = false;
                    for (var j = 0; j < splitInnerMask.length; j++) {
                        if (splitInnerMask[j] === '\\') {
                            this.customRegExpCollec.push('[');
                            this.hiddenMask += splitInnerMask[j] + '[';
                        }
                        else if (splitInnerMask[j] === '') {
                            chkSpace = true;
                        }
                        else if ((splitInnerMask[j] !== '' && chkSpace) || j === splitInnerMask.length - 1) {
                            this.customRegExpCollec.push('[' + splitInnerMask[j] + ']');
                            this.hiddenMask += this.promptChar;
                            chkSpace = false;
                        }
                        else {
                            pushIntoRegExpCollec.call(this, splitInnerMask[j]);
                        }
                    }
                }
                else {
                    pushIntoRegExpCollec.call(this, splitInnerMask[0]);
                }
            }
        }
        this.escapeMaskValue = this.hiddenMask;
        this.promptMask = this.hiddenMask.replace(/[09?LCAa#&]/g, this.promptChar);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters)) {
            for (var i = 0; i < this.promptMask.length; i++) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters[this.promptMask[i]])) {
                    this.promptMask = this.promptMask.replace(new RegExp(this.promptMask[i], 'g'), this.promptChar);
                }
            }
        }
        var escapeNumber = 0;
        if (this.hiddenMask.match(new RegExp(/\\/))) {
            for (var i = 0; i < this.hiddenMask.length; i++) {
                var j = 0;
                if (i >= 2) {
                    j = i;
                }
                escapeNumber = this.hiddenMask.length - this.promptMask.length;
                j = j - escapeNumber;
                if ((i > 0 && this.hiddenMask[i - 1] !== '\\') && (this.hiddenMask[i] === '>' ||
                    this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|')) {
                    this.promptMask = this.promptMask.substring(0, j) +
                        this.promptMask.substring((i + 1) - escapeNumber, this.promptMask.length);
                    this.escapeMaskValue = this.escapeMaskValue.substring(0, j) +
                        this.escapeMaskValue.substring((i + 1) - escapeNumber, this.escapeMaskValue.length);
                }
                if (this.hiddenMask[i] === '\\') {
                    this.promptMask = this.promptMask.substring(0, j) + this.hiddenMask[i + 1] +
                        this.promptMask.substring((i + 2) - escapeNumber, this.promptMask.length);
                    this.escapeMaskValue = this.escapeMaskValue.substring(0, j) + this.escapeMaskValue[i + 1] +
                        this.escapeMaskValue.substring((i + 2) - escapeNumber, this.escapeMaskValue.length);
                }
            }
        }
        else {
            this.promptMask = this.promptMask.replace(/[>|<]/g, '');
            this.escapeMaskValue = this.hiddenMask.replace(/[>|<]/g, '');
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-invalid': 'false' });
    }
}
function applyMask() {
    setElementValue.call(this, this.promptMask);
    setMaskValue.call(this, this.value);
}
function wireEvents() {
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'keydown', maskInputKeyDownHandler, this);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'keypress', maskInputKeyPressHandler, this);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'keyup', maskInputKeyUpHandler, this);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'focus', maskInputFocusHandler, this);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'blur', maskInputBlurHandler, this);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'paste', maskInputPasteHandler, this);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'cut', maskInputCutHandler, this);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'drop', maskInputDropHandler, this);
}
function unwireEvents() {
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'keydown', maskInputKeyDownHandler);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'keypress', maskInputKeyPressHandler);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'keyup', maskInputKeyUpHandler);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'focus', maskInputFocusHandler);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'blur', maskInputBlurHandler);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'paste', maskInputPasteHandler);
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'cut', maskInputCutHandler);
}
function unstrippedValue(element) {
    return element.value;
}
function strippedValue(element) {
    var value = '';
    var k = 0;
    var checkMask = false;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(element) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this) && element.value !== this.promptMask) {
        for (var i = 0; i < this.customRegExpCollec.length; i++) {
            if (checkMask) {
                checkMask = false;
            }
            if (this.customRegExpCollec[k] === '>' || this.customRegExpCollec[k] === '<' ||
                this.customRegExpCollec[k] === '|' || this.customRegExpCollec[k] === '\\') {
                --i;
                checkMask = true;
            }
            if (!checkMask) {
                if ((element.value[i] !== this.promptChar) && (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customRegExpCollec[k]) &&
                    ((!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.regExpCollec[this.customRegExpCollec[k]])) ||
                        (this.customRegExpCollec[k].length > 2 && this.customRegExpCollec[k][0] === '[' &&
                            this.customRegExpCollec[k][this.customRegExpCollec[k].length - 1] === ']') ||
                        (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters) &&
                            (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters[this.customRegExpCollec[k]])))))) {
                    value += element.value[i];
                }
            }
            ++k;
        }
    }
    return value;
}
function pushIntoRegExpCollec(value) {
    for (var k = 0; k < value.length; k++) {
        this.hiddenMask += value[k];
        if (value[k] !== '\\') {
            this.customRegExpCollec.push(value[k]);
        }
    }
}
function maskInputFocusHandler(event) {
    var _this = this;
    if (this.mask) {
        this.isFocus = true;
        if (this.placeholder && this.element.value === '') {
            setElementValue.call(this, this.promptMask);
            this.element.setSelectionRange(0, this.element.value.length);
            setTimeout(function () {
                _this.element.setSelectionRange(0, _this.element.value.length);
            }, 1);
        }
    }
}
function maskInputBlurHandler(event) {
    if (this.mask) {
        this.isFocus = false;
        if (this.placeholder && this.element.value === this.promptMask && this.floatLabelType !== 'Always') {
            setElementValue.call(this, '');
            var labelElement = this.element.parentNode.querySelector('.e-float-text');
            if (this.floatLabelType === 'Auto' && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(labelElement) && labelElement.classList.contains(TOPLABEL)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([labelElement], TOPLABEL);
            }
        }
    }
}
function maskInputPasteHandler(event) {
    var _this = this;
    if (this.mask) {
        var sIndex_1 = this.element.selectionStart;
        var eIndex_1 = this.element.selectionEnd;
        var oldValue_1 = this.element.value;
        setElementValue.call(this, '');
        setTimeout(function () {
            var value = _this.element.value;
            if (_this.redoCollec.length > 0 && _this.redoCollec[0].value === _this.element.value) {
                value = strippedValue.call(_this, _this.element);
            }
            setElementValue.call(_this, oldValue_1);
            _this.element.selectionStart = sIndex_1;
            _this.element.selectionEnd = eIndex_1;
            var i = 0;
            _this.maskKeyPress = true;
            do {
                validateValue.call(_this, value[i], false, null);
                ++i;
            } while (i < value.length);
            _this.maskKeyPress = false;
        }, 1);
    }
}
function maskInputCutHandler(event) {
    var _this = this;
    if (this.mask) {
        var sIndex_2 = this.element.selectionStart;
        var eIndex = this.element.selectionEnd;
        this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: this.element.selectionEnd });
        var value_1 = this.element.value.substring(0, sIndex_2) + this.promptMask.substring(sIndex_2, eIndex) +
            this.element.value.substring(eIndex);
        setTimeout(function () {
            setElementValue.call(_this, value_1);
            _this.element.selectionStart = _this.element.selectionEnd = sIndex_2;
        }, 0);
    }
}
function maskInputDropHandler(event) {
    event.preventDefault();
}
function maskInputKeyDownHandler(event) {
    var _this = this;
    if (this.mask) {
        if (event.keyCode !== 229) {
            if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
                event.preventDefault();
            }
            removeMaskInputValues.call(this, event);
        }
        else {
            setTimeout(function () {
                removeMaskInputValues.call(_this, event);
            }, 0);
        }
        var startValue = this.element.value;
        if (event.ctrlKey && (event.keyCode === 89 || event.keyCode === 90)) {
            var collec = void 0;
            if (event.keyCode === 90 && this.undoCollec.length > 0 && startValue !== this.undoCollec[this.undoCollec.length - 1].value) {
                collec = this.undoCollec[this.undoCollec.length - 1];
                this.redoCollec.unshift({
                    value: this.element.value, startIndex: this.element.selectionStart,
                    endIndex: this.element.selectionEnd
                });
                setElementValue.call(this, collec.value);
                this.element.selectionStart = collec.startIndex;
                this.element.selectionEnd = collec.endIndex;
                this.undoCollec.splice(this.undoCollec.length - 1, 1);
            }
            else if (event.keyCode === 89 && this.redoCollec.length > 0 && startValue !== this.redoCollec[0].value) {
                collec = this.redoCollec[0];
                this.undoCollec.push({
                    value: this.element.value, startIndex: this.element.selectionStart,
                    endIndex: this.element.selectionEnd
                });
                setElementValue.call(this, collec.value);
                this.element.selectionStart = collec.startIndex;
                this.element.selectionEnd = collec.endIndex;
                this.redoCollec.splice(0, 1);
            }
        }
    }
}
function mobileRemoveFunction() {
    var collec;
    var sIndex = this.element.selectionStart;
    var eIndex = this.element.selectionEnd;
    if (this.redoCollec.length > 0) {
        collec = this.redoCollec[0];
        setElementValue.call(this, collec.value);
        if ((collec.startIndex - sIndex) === 1) {
            this.element.selectionStart = collec.startIndex;
            this.element.selectionEnd = collec.endIndex;
        }
        else {
            this.element.selectionStart = sIndex + 1;
            this.element.selectionEnd = eIndex + 1;
        }
    }
    else {
        setElementValue.call(this, this.promptMask);
        this.element.selectionStart = this.element.selectionEnd = sIndex;
    }
}
function removeMaskInputValues(event) {
    var isRemove = false;
    var oldEventVal;
    var isDeleted = false;
    if (this.element.value.length < this.promptMask.length) {
        isRemove = true;
        mobileRemoveFunction.call(this);
        oldEventVal = this.element.value;
    }
    var initStartIndex = this.element.selectionStart;
    var initEndIndex = this.element.selectionEnd;
    var startIndex = this.element.selectionStart;
    var endIndex = this.element.selectionEnd;
    var maskValue = this.hiddenMask.replace(/[>|\\<]/g, '');
    var curMask = maskValue[startIndex - 1];
    var parentElement = this.element.parentNode;
    if (isRemove || event.keyCode === 8 || event.keyCode === 46) {
        this.undoCollec.push({ value: this.element.value, startIndex: this.element.selectionStart, endIndex: endIndex });
        var multipleDel = false;
        if (startIndex > 0 || ((event.keyCode === 8 || event.keyCode === 46) && startIndex < this.element.value.length
            && ((this.element.selectionEnd - startIndex) !== this.element.value.length))) {
            var index = startIndex;
            if (startIndex !== endIndex) {
                startIndex = endIndex;
                if (event.keyCode === 46) {
                    multipleDel = true;
                }
            }
            else if (event.keyCode === 46) {
                ++index;
            }
            else {
                --index;
            }
            for (var k = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? k > index : k < index; (event.keyCode === 8 || isRemove || multipleDel) ? k-- : k++) {
                for (var i = startIndex; (event.keyCode === 8 || isRemove || multipleDel) ? i > 0 : i < this.element.value.length; (event.keyCode === 8 || isRemove || multipleDel) ? i-- : i++) {
                    var sIndex = void 0;
                    if (((event.keyCode === 8 || multipleDel) && ((initStartIndex !== initEndIndex && initStartIndex !== startIndex) ||
                        (initStartIndex === initEndIndex))) || isRemove) {
                        curMask = maskValue[i - 1];
                        sIndex = startIndex - 1;
                    }
                    else {
                        curMask = maskValue[i];
                        sIndex = startIndex;
                        ++startIndex;
                    }
                    var oldValue = this.element.value[sIndex];
                    if ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.regExpCollec[curMask]) && (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters)
                        && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters[curMask]))
                        && ((this.hiddenMask[sIndex] !== this.promptChar && this.customRegExpCollec[sIndex][0] !== '['
                            && this.customRegExpCollec[sIndex][this.customRegExpCollec[sIndex].length - 1] !== ']')))
                        || (this.promptMask[sIndex] !== this.promptChar && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters))) {
                        this.element.selectionStart = this.element.selectionEnd = sIndex;
                        event.preventDefault();
                        if (event.keyCode === 46 && !multipleDel) {
                            ++this.element.selectionStart;
                        }
                    }
                    else {
                        var value = this.element.value;
                        var prompt_1 = this.promptChar;
                        var elementValue = value.substring(0, sIndex) + prompt_1 + value.substring(startIndex, value.length);
                        setElementValue.call(this, elementValue);
                        event.preventDefault();
                        this.element.selectionStart = this.element.selectionEnd = sIndex;
                        isDeleted = true;
                    }
                    startIndex = this.element.selectionStart;
                    if ((!isDeleted && event.keyCode === 8) || multipleDel || (!isDeleted && !(event.keyCode === 46))) {
                        sIndex = startIndex - 1;
                    }
                    else {
                        sIndex = startIndex;
                        isDeleted = false;
                    }
                    oldValue = this.element.value[sIndex];
                    if (((initStartIndex !== initEndIndex) && (this.element.selectionStart === initStartIndex))
                        || (this.promptMask[sIndex] === this.promptChar) || ((oldValue !== this.promptMask[sIndex]) &&
                        (this.promptMask[sIndex] !== this.promptChar) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters))) {
                        break;
                    }
                }
            }
        }
        if (this.element.selectionStart === 0 && (this.element.selectionEnd === this.element.value.length)) {
            setElementValue.call(this, this.promptMask);
            event.preventDefault();
            this.element.selectionStart = this.element.selectionEnd = startIndex;
        }
        this.redoCollec.unshift({
            value: this.element.value, startIndex: this.element.selectionStart,
            endIndex: this.element.selectionEnd
        });
        triggerMaskChangeEvent.call(this, event, oldEventVal);
    }
}
function maskInputKeyPressHandler(event) {
    if (this.mask) {
        var oldValue = this.element.value;
        if ((!event.ctrlKey) || (event.ctrlKey && event.code !== 'KeyA' && event.code !== 'KeyY'
            && event.code !== 'KeyZ' && event.code !== 'KeyX' && event.code !== 'KeyC' && event.code !== 'KeyV')) {
            this.maskKeyPress = true;
            var key = event.key;
            if (key === 'Spacebar') {
                key = String.fromCharCode(event.keyCode);
            }
            if (!key) {
                this.isIosInvalid = true;
                validateValue.call(this, String.fromCharCode(event.keyCode), event.ctrlKey, event);
                event.preventDefault();
                this.isIosInvalid = false;
            }
            else if (key && key.length === 1) {
                validateValue.call(this, key, event.ctrlKey, event);
                event.preventDefault();
            }
        }
        triggerMaskChangeEvent.call(this, event, oldValue);
    }
}
function triggerMaskChangeEvent(event, oldValue) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.changeEventArgs)) {
        var eventArgs = {};
        this.changeEventArgs = { value: this.element.value, maskedValue: this.element.value, isInteraction: false };
        if (this.mask) {
            this.changeEventArgs.value = strippedValue.call(this, this.element);
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(event)) {
            this.changeEventArgs.isInteraction = true;
            this.changeEventArgs.event = event;
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["merge"])(eventArgs, this.changeEventArgs);
        this.trigger('change', eventArgs);
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-valuenow': this.element.value });
}
function maskInputKeyUpHandler(event) {
    if (this.mask) {
        var collec = void 0;
        if (!this.maskKeyPress && event.keyCode === 229) {
            var oldEventVal = void 0;
            if (this.element.value.length === 1) {
                this.element.value = this.element.value + this.promptMask;
                this.element.setSelectionRange(1, 1);
            }
            if (this.element.value.length > this.promptMask.length) {
                var startIndex = this.element.selectionStart;
                var addedValues = this.element.value.length - this.promptMask.length;
                var val_1 = this.element.value.substring(startIndex - addedValues, startIndex);
                if (this.undoCollec.length > 0) {
                    collec = this.undoCollec[this.undoCollec.length - 1];
                    var startIndex_1 = this.element.selectionStart;
                    oldEventVal = collec.value;
                    var oldVal = collec.value.substring(startIndex_1 - addedValues, startIndex_1);
                    collec = this.redoCollec[0];
                    val_1 = val_1.trim();
                    var isSpace = __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isAndroid && val_1 === '';
                    if (!isSpace && oldVal !== val_1 && collec.value.substring(startIndex_1 - addedValues, startIndex_1) !== val_1) {
                        validateValue.call(this, val_1, event.ctrlKey, event);
                    }
                    else if (isSpace) {
                        preventUnsupportedValues.call(this, event, startIndex_1 - 1, this.element.selectionEnd - 1, val_1, event.ctrlKey, false);
                    }
                }
                else {
                    oldEventVal = this.promptMask;
                    validateValue.call(this, val_1, event.ctrlKey, event);
                }
                this.maskKeyPress = false;
                triggerMaskChangeEvent.call(this, event, oldEventVal);
            }
        }
        else {
            removeMaskError.call(this);
        }
        var val = strippedValue.call(this, this.element);
        if (!((this.element.selectionStart === 0) && (this.promptMask === this.element.value) && val === '')) {
            this.prevValue = val;
            this.value = val;
        }
    }
    else {
        triggerMaskChangeEvent.call(this, event);
        this.value = this.element.value;
    }
}
function mobileSwipeCheck(key) {
    if (key.length > 1 && ((this.promptMask.length + key.length) < this.element.value.length)) {
        var elementValue = this.redoCollec[0].value.substring(0, this.redoCollec[0].startIndex) + key +
            this.redoCollec[0].value.substring(this.redoCollec[0].startIndex, this.redoCollec[0].value.length);
        setElementValue.call(this, elementValue);
        this.element.selectionStart = this.element.selectionEnd = this.redoCollec[0].startIndex + key.length;
    }
    this.element.selectionStart = this.element.selectionStart - key.length;
    this.element.selectionEnd = this.element.selectionEnd - key.length;
}
function validateValue(key, isCtrlKey, event) {
    if (!this.maskKeyPress) {
        mobileSwipeCheck.call(this, key);
    }
    var startIndex = this.element.selectionStart;
    var initStartIndex = startIndex;
    var endIndex = this.element.selectionEnd;
    var curMask;
    var allowText = false;
    var value = this.element.value;
    var eventOldVal;
    var prevSupport = false;
    for (var k = 0; k < key.length; k++) {
        var keyValue = key[k];
        startIndex = this.element.selectionStart;
        endIndex = this.element.selectionEnd;
        if (!this.maskKeyPress && initStartIndex === startIndex) {
            startIndex = startIndex + k;
        }
        if ((!this.maskKeyPress || startIndex < this.promptMask.length)) {
            for (var i = startIndex; i < this.promptMask.length; i++) {
                var maskValue = this.escapeMaskValue;
                curMask = maskValue[startIndex];
                if ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.regExpCollec[curMask]) && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters)
                    || (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters[curMask])))
                    && ((this.hiddenMask[startIndex] !== this.promptChar && this.customRegExpCollec[startIndex][0] !== '['
                        && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] !== ']')))
                    || ((this.promptMask[startIndex] !== this.promptChar) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters))
                    || (this.promptChar === curMask && this.escapeMaskValue === this.mask)) {
                    this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
                    startIndex = this.element.selectionStart;
                    curMask = this.hiddenMask[startIndex];
                }
            }
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.customCharacters[curMask])) {
                var customValStr = this.customCharacters[curMask];
                var customValArr = customValStr.split(',');
                for (var i = 0; i < customValArr.length; i++) {
                    if (keyValue.match(new RegExp('[' + customValArr[i] + ']'))) {
                        allowText = true;
                        break;
                    }
                }
            }
            else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.regExpCollec[curMask]) && keyValue.match(new RegExp(this.regExpCollec[curMask]))
                && this.promptMask[startIndex] === this.promptChar) {
                allowText = true;
            }
            else if (this.promptMask[startIndex] === this.promptChar && this.customRegExpCollec[startIndex][0] === '['
                && this.customRegExpCollec[startIndex][this.customRegExpCollec[startIndex].length - 1] === ']'
                && keyValue.match(new RegExp(this.customRegExpCollec[startIndex]))) {
                allowText = true;
            }
            if ((!this.maskKeyPress || startIndex < this.hiddenMask.length) && allowText) {
                if (k === 0) {
                    if (this.maskKeyPress) {
                        this.undoCollec.push({ value: value, startIndex: startIndex, endIndex: startIndex });
                    }
                    else {
                        var sIndex = this.element.selectionStart;
                        var eIndex = this.element.selectionEnd;
                        if (this.redoCollec.length > 0) {
                            eventOldVal = this.redoCollec[0].value;
                            setElementValue.call(this, eventOldVal);
                            this.undoCollec.push(this.redoCollec[0]);
                        }
                        else {
                            this.undoCollec.push({ value: this.promptMask, startIndex: startIndex, endIndex: startIndex });
                            eventOldVal = this.promptMask;
                            setElementValue.call(this, eventOldVal);
                        }
                        this.element.selectionStart = sIndex;
                        this.element.selectionEnd = eIndex;
                    }
                }
                startIndex = this.element.selectionStart;
                applySupportedValues.call(this, event, startIndex, keyValue, eventOldVal);
                prevSupport = true;
                if (k === key.length - 1) {
                    this.redoCollec.unshift({
                        value: this.element.value, startIndex: this.element.selectionStart,
                        endIndex: this.element.selectionEnd
                    });
                }
                allowText = false;
            }
            else {
                startIndex = this.element.selectionStart;
                preventUnsupportedValues.call(this, event, startIndex, initStartIndex, key, isCtrlKey, prevSupport);
            }
            if (k === key.length - 1 && !allowText) {
                if (!__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isAndroid || (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isAndroid && startIndex < this.promptMask.length)) {
                    this.redoCollec.unshift({
                        value: this.element.value,
                        startIndex: this.element.selectionStart,
                        endIndex: this.element.selectionEnd
                    });
                }
            }
        }
        else {
            if (key.length === 1 && !isCtrlKey && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(event)) {
                addMaskErrorClass.call(this);
            }
        }
    }
}
function applySupportedValues(event, startIndex, keyValue, eventOldVal) {
    if (this.hiddenMask.length > this.promptMask.length) {
        keyValue = changeToLowerUpperCase.call(this, keyValue, this.element.value);
    }
    var value = this.element.value;
    var elementValue = value.substring(0, startIndex) + keyValue + value.substring(startIndex + 1, value.length);
    setElementValue.call(this, elementValue);
    this.element.selectionStart = this.element.selectionEnd = startIndex + 1;
    triggerMaskChangeEvent.call(this, event, eventOldVal);
}
function preventUnsupportedValues(event, sIdx, idx, key, ctrl, chkSupport) {
    if (!this.maskKeyPress) {
        var eventOldVal = void 0;
        var value = this.element.value;
        if (sIdx >= this.promptMask.length) {
            setElementValue.call(this, value.substring(0, sIdx));
        }
        else {
            if (idx === sIdx) {
                setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx + 1, value.length));
            }
            else {
                if (this.promptMask.length === this.element.value.length) {
                    setElementValue.call(this, value.substring(0, sIdx) + value.substring(sIdx, value.length));
                }
                else {
                    setElementValue.call(this, value.substring(0, idx) + value.substring(idx + 1, value.length));
                }
            }
            this.element.selectionStart = this.element.selectionEnd = (chkSupport ||
                this.element.value[idx] !== this.promptChar) ? sIdx : idx;
        }
        eventOldVal = this.element.value;
        triggerMaskChangeEvent.call(this, event, eventOldVal);
        addMaskErrorClass.call(this);
    }
    if (key.length === 1 && !ctrl && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(event)) {
        addMaskErrorClass.call(this);
    }
}
function addMaskErrorClass() {
    var _this = this;
    var parentElement = this.element.parentNode;
    var timer = 200;
    if (parentElement.classList.contains(INPUTGROUP) || parentElement.classList.contains(FLOATINPUT)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([parentElement], ERROR);
    }
    else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], ERROR);
    }
    if (this.isIosInvalid === true) {
        timer = 400;
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-invalid': 'true' });
    setTimeout(function () {
        if (!_this.maskKeyPress) {
            removeMaskError.call(_this);
        }
    }, timer);
}
function removeMaskError() {
    var parentElement = this.element.parentNode;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([parentElement], ERROR);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.element], ERROR);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-invalid': 'false' });
}
function changeToLowerUpperCase(key, value) {
    var promptMask;
    var i;
    var j = 0;
    var curVal = value;
    var caseCount = 0;
    for (i = 0; i < this.hiddenMask.length; i++) {
        if (this.hiddenMask[i] === '\\') {
            promptMask = curVal.substring(0, i) + '\\' + curVal.substring(i, curVal.length);
        }
        if (this.hiddenMask[i] === '>' || this.hiddenMask[i] === '<' || this.hiddenMask[i] === '|') {
            if (this.hiddenMask[i] !== curVal[i]) {
                promptMask = curVal.substring(0, i) + this.hiddenMask[i] + curVal.substring(i, curVal.length);
            }
            ++caseCount;
        }
        if (promptMask) {
            if (((promptMask[i] === this.promptChar) && (i > this.element.selectionStart)) ||
                (this.element.value.indexOf(this.promptChar) < 0 && (this.element.selectionStart + caseCount) === i)) {
                caseCount = 0;
                break;
            }
            curVal = promptMask;
        }
    }
    while (i >= 0 && promptMask) {
        if (i === 0 || promptMask[i - 1] !== '\\') {
            var val = this.element.value;
            if (promptMask[i] === '>') {
                key = key.toUpperCase();
                break;
            }
            else if (promptMask[i] === '<') {
                key = key.toLowerCase();
                break;
            }
            else if (promptMask[i] === '|') {
                break;
            }
        }
        --i;
    }
    return key;
}
function setMaskValue(val) {
    if (this.mask && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(val) && (val === '' || this.prevValue !== val)) {
        this.maskKeyPress = true;
        setElementValue.call(this, this.promptMask);
        if (val !== '') {
            this.element.selectionStart = 0;
            this.element.selectionEnd = 0;
        }
        for (var i = 0; i < val.length; i++) {
            validateValue.call(this, val[i], false, null);
        }
        this.value = strippedValue.call(this, this.element);
        this.maskKeyPress = false;
        var labelElement = this.element.parentNode.querySelector('.e-float-text');
        if (this.element.value === this.promptMask && this.floatLabelType === 'Auto' &&
            !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(labelElement) && labelElement.classList.contains(TOPLABEL) && !this.isFocus) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([labelElement], TOPLABEL);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([labelElement], BOTTOMLABEL);
            setElementValue.call(this, '');
        }
    }
}
function setElementValue(val, element) {
    if (!this.isFocus && this.floatLabelType === 'Auto' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.value)) {
        val = '';
    }
    __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setValue(val, (element ? element : this.element), this.floatLabelType);
}
function maskInput(args) {
    var inputEle = getMaskInput(args);
    applyMask.call(inputEle);
    var val = strippedValue.call(this, this.element);
    this.prevValue = val;
    this.value = val;
    if (args.mask) {
        unwireEvents.call(inputEle);
        wireEvents.call(inputEle);
    }
}
function getMaskInput(args) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([args.element], UTILMASK);
    var inputEle = {
        element: args.element,
        mask: args.mask,
        promptMask: '',
        hiddenMask: '',
        escapeMaskValue: '',
        promptChar: args.promptChar ? (args.promptChar.length > 1) ? args.promptChar = args.promptChar[0]
            : args.promptChar : '_',
        value: args.value ? args.value : null,
        regExpCollec: regularExpressions,
        customRegExpCollec: [],
        customCharacters: args.customCharacters,
        undoCollec: [],
        redoCollec: [],
        maskKeyPress: false,
        prevValue: ''
    };
    createMask.call(inputEle);
    return inputEle;
}
function getVal(args) {
    return strippedValue.call(getUtilMaskEle(args), args.element);
}
function getMaskedVal(args) {
    return unstrippedValue.call(getUtilMaskEle(args), args.element);
}
function getUtilMaskEle(args) {
    var value = '';
    var inputEle;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(args) && args.element.classList.contains(UTILMASK)) {
        inputEle = getMaskInput(args);
    }
    return inputEle;
}
var MaskUndo = (function () {
    function MaskUndo() {
    }
    return MaskUndo;
}());

var maskUndo = new MaskUndo();


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_index__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__base_index__["q"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__ = __webpack_require__(71);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_1__maskedtextbox_index__["a"]; });




/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maskedtextbox__ = __webpack_require__(72);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__maskedtextbox__["a"]; });



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskedTextBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_input__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_index__ = __webpack_require__(27);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ROOT = 'e-widget e-mask';
var INPUT = 'e-input';
var MaskedTextBox = (function (_super) {
    __extends(MaskedTextBox, _super);
    function MaskedTextBox(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.promptMask = '';
        _this.hiddenMask = '';
        _this.escapeMaskValue = '';
        _this.regExpCollec = __WEBPACK_IMPORTED_MODULE_2__base_index__["a" /* regularExpressions */];
        _this.customRegExpCollec = [];
        _this.undoCollec = [];
        _this.redoCollec = [];
        _this.changeEventArgs = {};
        _this.maskKeyPress = false;
        _this.isFocus = false;
        _this.isInitial = false;
        _this.isIosInvalid = false;
        return _this;
    }
    MaskedTextBox.prototype.getModuleName = function () {
        return 'maskedtextbox';
    };
    MaskedTextBox.prototype.preRender = function () {
        var ejInstance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])('ej2_instances', this.element);
        this.cloneElement = this.element.cloneNode(true);
        this.angularTagName = null;
        if (this.element.tagName === 'EJ-MASKEDTEXTBOX') {
            this.angularTagName = this.element.tagName;
            var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('input');
            for (var i = 0; i < this.element.attributes.length; i++) {
                input.setAttribute(this.element.attributes[i].nodeName, this.element.attributes[i].nodeValue);
                input.innerHTML = this.element.innerHTML;
            }
            this.element.parentNode.appendChild(input);
            this.element.parentNode.removeChild(this.element);
            this.element = input;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])('ej2_instances', ejInstance, this.element);
        }
    };
    MaskedTextBox.prototype.getPersistData = function () {
        var keyEntity = ['value'];
        return this.addOnPersist(keyEntity);
    };
    MaskedTextBox.prototype.render = function () {
        if (this.element.tagName.toLowerCase() === 'input') {
            if (this.floatLabelType === 'Never') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.element], INPUT);
            }
            this.createWrapper();
            this.isInitial = true;
            this.resetMaskedTextBox();
            this.isInitial = false;
            this.setMaskPlaceholder(true);
            this.setWidth(this.width);
        }
    };
    MaskedTextBox.prototype.resetMaskedTextBox = function () {
        this.promptMask = '';
        this.hiddenMask = '';
        this.escapeMaskValue = '';
        this.customRegExpCollec = [];
        this.undoCollec = [];
        this.redoCollec = [];
        if (this.promptChar.length > 1) {
            this.promptChar = this.promptChar[0];
        }
        __WEBPACK_IMPORTED_MODULE_2__base_index__["b" /* createMask */].call(this);
        __WEBPACK_IMPORTED_MODULE_2__base_index__["c" /* applyMask */].call(this);
        var val = __WEBPACK_IMPORTED_MODULE_2__base_index__["g" /* strippedValue */].call(this, this.element);
        this.prevValue = val;
        this.value = val;
        if (!this.isInitial) {
            __WEBPACK_IMPORTED_MODULE_2__base_index__["e" /* unwireEvents */].call(this);
        }
        __WEBPACK_IMPORTED_MODULE_2__base_index__["d" /* wireEvents */].call(this);
    };
    MaskedTextBox.prototype.setMaskPlaceholder = function (setVal) {
        if (this.placeholder) {
            __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setPlaceholder(this.placeholder, this.element);
            if (this.element.value === this.promptMask && setVal && this.floatLabelType !== 'Always') {
                __WEBPACK_IMPORTED_MODULE_2__base_index__["m" /* setElementValue */].call(this, '');
            }
        }
    };
    MaskedTextBox.prototype.setCssClass = function (cssClass, element) {
        if (cssClass) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])(element, cssClass);
        }
    };
    MaskedTextBox.prototype.setWidth = function (width) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(width)) {
            this.element.style.width = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(width);
        }
    };
    MaskedTextBox.prototype.createWrapper = function () {
        this.inputObj = __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].createInput({
            element: this.element,
            customTag: this.angularTagName,
            floatLabelType: this.floatLabelType,
            properties: {
                enableRtl: this.enableRtl,
                enabled: this.enabled,
                placeholder: this.placeholder
            }
        });
        this.inputObj.container.setAttribute('class', ROOT + ' ' + this.inputObj.container.getAttribute('class'));
    };
    MaskedTextBox.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'value':
                    __WEBPACK_IMPORTED_MODULE_2__base_index__["l" /* setMaskValue */].call(this, this.value);
                    if (this.placeholder) {
                        this.setMaskPlaceholder(false);
                    }
                    break;
                case 'placeholder':
                    this.setMaskPlaceholder(true);
                    break;
                case 'width':
                    this.setWidth(newProp.width);
                    break;
                case 'cssClass':
                    this.setCssClass(newProp.cssClass, [this.inputObj.container]);
                    break;
                case 'enabled':
                    __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setEnabled(newProp.enabled, this.element);
                    break;
                case 'enableRtl':
                    __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setEnableRtl(newProp.enableRtl, [this.inputObj.container]);
                    break;
                case 'customCharacters':
                    this.customCharacters = newProp.customCharacters;
                    this.resetMaskedTextBox();
                    break;
                case 'mask':
                    var strippedValue_1 = this.value;
                    this.mask = newProp.mask;
                    this.updateValue(strippedValue_1);
                    break;
                case 'promptChar':
                    if (newProp.promptChar.length > 1) {
                        newProp.promptChar = newProp.promptChar[0];
                    }
                    if (newProp.promptChar) {
                        this.promptChar = newProp.promptChar;
                    }
                    else {
                        this.promptChar = '_';
                    }
                    var value = this.element.value.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                    if (this.promptMask === this.element.value) {
                        value = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                    }
                    this.promptMask = this.promptMask.replace(new RegExp('[' + oldProp.promptChar + ']', 'g'), this.promptChar);
                    this.undoCollec = this.redoCollec = [];
                    __WEBPACK_IMPORTED_MODULE_2__base_index__["m" /* setElementValue */].call(this, value);
                    break;
            }
        }
    };
    MaskedTextBox.prototype.updateValue = function (strippedVal) {
        this.resetMaskedTextBox();
        __WEBPACK_IMPORTED_MODULE_2__base_index__["l" /* setMaskValue */].call(this, strippedVal);
    };
    MaskedTextBox.prototype.getMaskedValue = function () {
        return __WEBPACK_IMPORTED_MODULE_2__base_index__["f" /* unstrippedValue */].call(this, this.element);
    };
    MaskedTextBox.prototype.destroy = function () {
        __WEBPACK_IMPORTED_MODULE_2__base_index__["e" /* unwireEvents */].call(this);
        this.inputObj.container.parentElement.appendChild(this.cloneElement);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.inputObj.container);
        _super.prototype.destroy.call(this);
    };
    return MaskedTextBox;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Component"]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], MaskedTextBox.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], MaskedTextBox.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], MaskedTextBox.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('Never')
], MaskedTextBox.prototype, "floatLabelType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(true)
], MaskedTextBox.prototype, "enabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], MaskedTextBox.prototype, "enablePersistence", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], MaskedTextBox.prototype, "enableRtl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], MaskedTextBox.prototype, "mask", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('_')
], MaskedTextBox.prototype, "promptChar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], MaskedTextBox.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], MaskedTextBox.prototype, "customCharacters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], MaskedTextBox.prototype, "created", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], MaskedTextBox.prototype, "destroyed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], MaskedTextBox.prototype, "change", void 0);
MaskedTextBox = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], MaskedTextBox);



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__numerictextbox__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__numerictextbox__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__numerictextbox__["b"]; });



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumericTextBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return numerictextboxHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_input__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROOT = 'e-numeric';
var SPINICON = 'e-input-group-icon';
var SPINUP = 'e-spin-up';
var SPINDOWN = 'e-spin-down';
var ERROR = 'e-error';
var INCREMENT = 'increment';
var DECREMENT = 'decrement';
var INTREGEXP = new RegExp('/^(-)?(\d*)$/');
var DECIMALSEPARATOR = '.';
var NumericTextBox = (function (_super) {
    __extends(NumericTextBox, _super);
    function NumericTextBox(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isPrevFocused = false;
        _this.decimalSeparator = '.';
        _this.intRegExp = new RegExp('/^(-)?(\d*)$/');
        _this.isCalled = false;
        return _this;
    }
    NumericTextBox.prototype.preRender = function () {
        var ejInstance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])('ej2_instances', this.element);
        this.cloneElement = this.element.cloneNode(true);
        this.angularTagName = null;
        if (this.element.tagName === 'EJ-NUMERICTEXTBOX') {
            this.angularTagName = this.element.tagName;
            var input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('input');
            var index = 0;
            for (index; index < this.element.attributes.length; index++) {
                input.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
                input.innerHTML = this.element.innerHTML;
            }
            this.element.parentNode.appendChild(input);
            this.element.parentNode.removeChild(this.element);
            this.element = input;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])('ej2_instances', ejInstance, this.element);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'role': 'spinbutton', 'tabindex': '0', 'autocomplete': 'off', 'aria-live': 'assertive' });
        var localeText = { incrementTitle: 'Increment value', decrementTitle: 'Decrement value', placeholder: '' };
        this.l10n = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["L10n"]('numerictextbox', localeText, this.locale);
        this.isValidState = true;
        this.inputStyle = null;
        this.inputName = null;
        this.cultureInfo = {};
        this.initCultureInfo();
        this.initCultureFunc();
        this.checkAttributes();
        this.prevValue = this.value;
        this.validateMinMax();
        this.validateStep();
        if (this.placeholder === null) {
            this.updatePlaceholder();
        }
    };
    NumericTextBox.prototype.render = function () {
        if (this.element.tagName.toLowerCase() === 'input') {
            this.createWrapper();
            if (this.showSpinButton) {
                this.spinBtnCreation();
            }
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.width)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setStyleAttribute"])(this.container, { 'width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(this.width) });
            }
            this.changeValue(this.value);
            this.wireEvents();
            if (this.value !== null && !isNaN(this.value)) {
                if (this.decimals) {
                    this.setProperties({ value: this.roundNumber(this.value, this.decimals) }, true);
                }
            }
        }
    };
    NumericTextBox.prototype.checkAttributes = function () {
        var attributes = ['value', 'min', 'max', 'step', 'disabled', 'readonly', 'style', 'name'];
        for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
            var prop = attributes_1[_i];
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.element.getAttribute(prop))) {
                switch (prop) {
                    case 'disabled':
                        var enabled = this.element.getAttribute(prop) === 'disabled' ||
                            this.element.getAttribute(prop) === 'true' ? false : true;
                        this.setProperties({ enabled: enabled }, true);
                        break;
                    case 'readonly':
                        var readonly = this.element.getAttribute(prop) === 'readonly'
                            || this.element.getAttribute(prop) === 'true' ? true : false;
                        this.setProperties({ readonly: readonly }, true);
                        break;
                    case 'style':
                        this.inputStyle = this.element.getAttribute(prop);
                        break;
                    case 'name':
                        this.inputName = this.element.getAttribute(prop);
                        break;
                    default:
                        var value = this.instance.getNumberParser({ format: 'n' })(this.element.getAttribute(prop));
                        if ((value !== null && !isNaN(value)) || (prop === 'value')) {
                            this.setProperties(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])(prop, value, {}), true);
                        }
                        break;
                }
            }
        }
    };
    NumericTextBox.prototype.updatePlaceholder = function () {
        this.setProperties({ placeholder: this.l10n.getConstant('placeholder') }, true);
    };
    NumericTextBox.prototype.initCultureFunc = function () {
        this.instance = new __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Internationalization"](this.locale);
    };
    NumericTextBox.prototype.initCultureInfo = function () {
        this.cultureInfo.format = this.format;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])('currency', this) !== null) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])('currency', this.currency, this.cultureInfo);
        }
    };
    NumericTextBox.prototype.createWrapper = function () {
        var inputObj = __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].createInput({
            element: this.element,
            customTag: this.angularTagName,
            floatLabelType: this.floatLabelType,
            properties: {
                readonly: this.readonly,
                placeholder: this.placeholder,
                cssClass: this.cssClass,
                enableRtl: this.enableRtl,
                enabled: this.enabled
            }
        });
        this.container = inputObj.container;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.container], ROOT);
        if (this.readonly) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-readonly': 'true' });
        }
        this.hiddenInput = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["createElement"])('input', { attrs: { type: 'hidden' } }));
        this.inputName = this.inputName !== null ? this.inputName : this.element.id;
        this.element.removeAttribute('name');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.hiddenInput, { 'name': this.inputName });
        this.container.insertBefore(this.hiddenInput, this.element);
        if (this.inputStyle !== null) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.container, { 'style': this.inputStyle });
        }
    };
    NumericTextBox.prototype.spinBtnCreation = function () {
        this.spinDown = __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].appendSpan(SPINICON + ' ' + SPINDOWN, this.container);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.spinDown, {
            'title': this.l10n.getConstant('decrementTitle'),
            'aria-label': this.l10n.getConstant('decrementTitle')
        });
        this.spinUp = __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].appendSpan(SPINICON + ' ' + SPINUP, this.container);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.spinUp, {
            'title': this.l10n.getConstant('incrementTitle'),
            'aria-label': this.l10n.getConstant('incrementTitle')
        });
        this.wireSpinBtnEvents();
    };
    NumericTextBox.prototype.validateMinMax = function () {
        if (!(typeof (this.min) === 'number' && !isNaN(this.min))) {
            this.setProperties({ min: -(Number.MAX_VALUE) }, true);
        }
        if (!(typeof (this.max) === 'number' && !isNaN(this.max))) {
            this.setProperties({ max: Number.MAX_VALUE }, true);
        }
        if (this.decimals !== null) {
            if (this.min !== -(Number.MAX_VALUE)) {
                this.setProperties({ min: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.min)) }, true);
            }
            if (this.max !== (Number.MAX_VALUE)) {
                this.setProperties({ max: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.max)) }, true);
            }
        }
        this.setProperties({ min: this.min > this.max ? this.max : this.min }, true);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-valuemin': this.min.toString(), 'aria-valuemax': this.max.toString() });
    };
    NumericTextBox.prototype.formattedValue = function (decimals, value) {
        return this.instance.getNumberFormat({
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals, useGrouping: false
        })(value);
    };
    NumericTextBox.prototype.validateStep = function () {
        if (this.decimals !== null) {
            this.setProperties({ step: this.instance.getNumberParser({ format: 'n' })(this.formattedValue(this.decimals, this.step)) }, true);
        }
    };
    NumericTextBox.prototype.action = function (operation) {
        var value = this.isFocused ? this.instance.getNumberParser({ format: 'n' })(this.element.value) : this.value;
        this.changeValue(this.performAction(value, this.step, operation));
        this.raiseChangeEvent();
    };
    NumericTextBox.prototype.checkErrorClass = function () {
        if (this.isValidState) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.container], ERROR);
        }
        else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["addClass"])([this.container], ERROR);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-invalid': this.isValidState ? 'false' : 'true' });
    };
    NumericTextBox.prototype.wireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'focus', this.focusIn, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'blur', this.focusOut, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'keydown', this.keyDownHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'keypress', this.keyPressHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'change', this.changeHandler, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'paste', this.pasteHandler, this);
    };
    NumericTextBox.prototype.wireSpinBtnEvents = function () {
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.spinUp, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchStartEvent, this.mouseDownOnSpinner, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.spinDown, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchStartEvent, this.mouseDownOnSpinner, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.spinUp, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchEndEvent, this.mouseUpOnSpinner, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.spinDown, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchEndEvent, this.mouseUpOnSpinner, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.spinUp, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchMoveEvent, this.touchMoveOnSpinner, this);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.spinDown, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchMoveEvent, this.touchMoveOnSpinner, this);
    };
    NumericTextBox.prototype.unwireEvents = function () {
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'focus', this.focusIn);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'blur', this.focusOut);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'keydown', this.keyDownHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'keypress', this.keyPressHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'change', this.changeHandler);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'paste', this.pasteHandler);
    };
    NumericTextBox.prototype.unwireSpinBtnEvents = function () {
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.spinUp, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchStartEvent, this.mouseDownOnSpinner);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.spinDown, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchStartEvent, this.mouseDownOnSpinner);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.spinUp, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchEndEvent, this.mouseUpOnSpinner);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.spinDown, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchEndEvent, this.mouseUpOnSpinner);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.spinUp, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchMoveEvent, this.touchMoveOnSpinner);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.spinDown, __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].touchMoveEvent, this.touchMoveOnSpinner);
    };
    NumericTextBox.prototype.changeHandler = function (event) {
        if (!this.element.value.length) {
            this.setProperties({ value: null }, true);
        }
        var parsedInput = this.instance.getNumberParser({ format: 'n' })(this.element.value);
        this.updateValue(parsedInput, event);
    };
    NumericTextBox.prototype.raiseChangeEvent = function (event) {
        if (this.prevValue !== this.value) {
            var eventArgs = {};
            this.changeEventArgs = { value: this.value, previousValue: this.prevValue };
            if (event) {
                this.changeEventArgs.event = event;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["merge"])(eventArgs, this.changeEventArgs);
            this.prevValue = this.value;
            this.trigger('change', eventArgs);
        }
    };
    NumericTextBox.prototype.pasteHandler = function () {
        var _this = this;
        var beforeUpdate = this.element.value;
        setTimeout(function () {
            if (!_this.numericRegex().test(_this.element.value)) {
                _this.setElementValue(beforeUpdate);
            }
        });
    };
    NumericTextBox.prototype.keyDownHandler = function (event) {
        switch (event.keyCode) {
            case 38:
                event.preventDefault();
                this.action(INCREMENT);
                break;
            case 40:
                event.preventDefault();
                this.action(DECREMENT);
                break;
            default: break;
        }
        if (!this.element.value.length) {
            this.setProperties({ value: null }, true);
            this.updateValue(this.instance.getNumberParser({ format: 'n' })(this.element.value));
        }
    };
    ;
    NumericTextBox.prototype.performAction = function (value, step, operation) {
        if (value === null || isNaN(value)) {
            value = 0;
        }
        var updatedValue = operation === INCREMENT ? value + step : value - step;
        updatedValue = this.correctRounding(value, step, updatedValue);
        return this.strictMode ? this.trimValue(updatedValue) : updatedValue;
    };
    ;
    NumericTextBox.prototype.correctRounding = function (value, step, result) {
        var floatExp = new RegExp('[,.](.*)');
        var valueText = value.toString();
        var stepText = step.toString();
        var floatValue = floatExp.test(value.toString());
        var floatStep = floatExp.test(step.toString());
        if (floatValue || floatStep) {
            var valueCount = floatValue ? floatExp.exec(value.toString())[0].length : 0;
            var stepCount = floatStep ? floatExp.exec(step.toString())[0].length : 0;
            var max = Math.max(valueCount, stepCount);
            return value = this.roundValue(result, max);
        }
        return result;
    };
    ;
    NumericTextBox.prototype.roundValue = function (result, precision) {
        precision = precision || 0;
        var divide = Math.pow(10, precision);
        return result *= divide, result = Math.round(result) / divide;
    };
    ;
    NumericTextBox.prototype.updateValue = function (value, event) {
        if (value !== null && !isNaN(value)) {
            if (this.decimals) {
                value = this.roundNumber(value, this.decimals);
            }
        }
        this.changeValue(value === null || isNaN(value) ? null : this.strictMode ? this.trimValue(value) : value);
        this.raiseChangeEvent(event);
    };
    NumericTextBox.prototype.changeValue = function (value) {
        if (!(value || value === 0)) {
            value = null;
            this.setProperties({ value: value }, true);
        }
        else {
            var numberOfDecimals = void 0;
            var decimalPart = value.toString().split('.')[1];
            numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
            if (this.decimals !== null) {
                numberOfDecimals = numberOfDecimals < this.decimals ? numberOfDecimals : this.decimals;
            }
            this.setProperties({ value: this.roundNumber(value, numberOfDecimals) }, true);
        }
        this.modifyText();
        if (!this.strictMode) {
            this.validateState();
        }
    };
    ;
    NumericTextBox.prototype.modifyText = function () {
        if (this.value || this.value === 0) {
            var value = this.formatNumber();
            var elementValue = this.isFocused ? value : this.instance.getNumberFormat(this.cultureInfo)(this.value);
            this.setElementValue(elementValue);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-valuenow': value });
            this.hiddenInput.value = value;
        }
        else {
            this.setElementValue('');
            this.element.removeAttribute('aria-valuenow');
            this.hiddenInput.value = null;
        }
    };
    ;
    NumericTextBox.prototype.setElementValue = function (val, element) {
        __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setValue(val, (element ? element : this.element), this.floatLabelType);
    };
    NumericTextBox.prototype.validateState = function () {
        this.isValidState = true;
        if (this.value || this.value === 0) {
            this.isValidState = !(this.value > this.max || this.value < this.min);
        }
        this.checkErrorClass();
    };
    NumericTextBox.prototype.formatNumber = function () {
        var numberOfDecimals;
        var currentValue = this.value;
        var decimalPart = currentValue.toString().split('.')[1];
        numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
        if (this.decimals !== null) {
            numberOfDecimals = numberOfDecimals < this.decimals ? numberOfDecimals : this.decimals;
        }
        return this.instance.getNumberFormat({
            maximumFractionDigits: numberOfDecimals,
            minimumFractionDigits: numberOfDecimals, useGrouping: false
        })(this.value);
    };
    ;
    NumericTextBox.prototype.trimValue = function (value) {
        if (value > this.max) {
            return this.max;
        }
        if (value < this.min) {
            return this.min;
        }
        return value;
    };
    ;
    NumericTextBox.prototype.roundNumber = function (value, precision) {
        var result = value;
        var decimals = precision || 0;
        var result1 = result.toString().split('e');
        result = Math.round(Number(result1[0] + 'e' + (result1[1] ? (Number(result1[1]) + decimals) : decimals)));
        var result2 = result.toString().split('e');
        result = Number(result2[0] + 'e' + (result2[1] ? (Number(result2[1]) - decimals) : -decimals));
        return Number(result.toFixed(decimals));
    };
    ;
    NumericTextBox.prototype.cancelEvent = function (event) {
        event.preventDefault();
        return false;
    };
    NumericTextBox.prototype.keyPressHandler = function (event) {
        if (event.which === 0 || event.metaKey || event.ctrlKey || event.keyCode === 8 || event.keyCode === 13) {
            return true;
        }
        var currentChar = String.fromCharCode(event.which);
        var text = this.element.value;
        text = text.substring(0, this.element.selectionStart) + currentChar + text.substring(this.element.selectionEnd);
        if (!this.numericRegex().test(text)) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        else {
            return true;
        }
    };
    ;
    NumericTextBox.prototype.numericRegex = function () {
        var numericObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getNumericObject"])(this.locale);
        var decimalSeparator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])('decimal', numericObject);
        var fractionRule = '*';
        if (decimalSeparator === DECIMALSEPARATOR) {
            decimalSeparator = '\\' + decimalSeparator;
        }
        if (this.decimals === 0) {
            return INTREGEXP;
        }
        if (this.decimals && this.validateDecimalOnType) {
            fractionRule = '{0,' + this.decimals + '}';
        }
        return new RegExp('^(-)?(((\\d+(' + decimalSeparator + '\\d' + fractionRule +
            ')?)|(' + decimalSeparator + '\\d' + fractionRule + ')))?$');
    };
    ;
    NumericTextBox.prototype.mouseWheel = function (event) {
        event.preventDefault();
        var delta;
        var rawEvent = event;
        if (rawEvent.wheelDelta) {
            delta = rawEvent.wheelDelta / 120;
        }
        else if (rawEvent.detail) {
            delta = -rawEvent.detail / 3;
        }
        if (delta > 0) {
            this.action(INCREMENT);
        }
        else if (delta < 0) {
            this.action(DECREMENT);
        }
        this.cancelEvent(event);
    };
    NumericTextBox.prototype.focusIn = function (event) {
        if (!this.enabled || this.readonly) {
            return;
        }
        this.isFocused = true;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["removeClass"])([this.container], ERROR);
        this.prevValue = this.value;
        if ((this.value || this.value === 0)) {
            var formatValue = this.formatNumber();
            this.setElementValue(formatValue);
            if (!this.isPrevFocused) {
                this.element.setSelectionRange(0, formatValue.length);
            }
        }
        if (!__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
            __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel, this);
        }
    };
    ;
    NumericTextBox.prototype.focusOut = function (event) {
        var _this = this;
        if (this.isPrevFocused) {
            event.preventDefault();
            if (__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
                var value_1 = this.element.value;
                this.element.focus();
                this.isPrevFocused = false;
                var ele_1 = this.element;
                setTimeout(function () {
                    _this.setElementValue(value_1, ele_1);
                }, 200);
            }
        }
        else {
            this.isFocused = false;
            if (!this.element.value.length) {
                this.setProperties({ value: null }, true);
            }
            var parsedInput = this.instance.getNumberParser({ format: 'n' })(this.element.value);
            this.updateValue(parsedInput);
            if (!__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
                __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel);
            }
        }
    };
    ;
    NumericTextBox.prototype.mouseDownOnSpinner = function (event) {
        var _this = this;
        if (this.isFocused) {
            this.isPrevFocused = true;
            event.preventDefault();
        }
        if (!this.getElementData(event)) {
            return;
        }
        var result = this.getElementData(event);
        var target = event.currentTarget;
        var action = (target.classList.contains(SPINUP)) ? INCREMENT : DECREMENT;
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(target, 'mouseleave', this.mouseUpClick, this);
        this.timeOut = setInterval(function () { _this.isCalled = true; _this.action(action); }, 150);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].add(document, 'mouseup', this.mouseUpClick, this);
    };
    NumericTextBox.prototype.touchMoveOnSpinner = function (event) {
        var target = document.elementFromPoint(event.clientX, event.clientY);
        if (!(target.classList.contains(SPINICON))) {
            clearInterval(this.timeOut);
        }
    };
    NumericTextBox.prototype.mouseUpOnSpinner = function (event) {
        if (this.isPrevFocused) {
            this.element.focus();
            if (!__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
                this.isPrevFocused = false;
            }
        }
        if (!__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Browser"].isDevice) {
            event.preventDefault();
        }
        if (!this.getElementData(event)) {
            return;
        }
        var target = event.currentTarget;
        var action = (target.classList.contains(SPINUP)) ? INCREMENT : DECREMENT;
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(target, 'mouseleave', this.mouseUpClick);
        if (!this.isCalled) {
            this.action(action);
        }
        this.isCalled = false;
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(document, 'mouseup', this.mouseUpClick);
    };
    NumericTextBox.prototype.getElementData = function (event) {
        if ((event.which && event.which === 3) || (event.button && event.button === 2)
            || !this.enabled || this.readonly) {
            return false;
        }
        clearInterval(this.timeOut);
        return true;
    };
    NumericTextBox.prototype.mouseUpClick = function (event) {
        event.stopPropagation();
        clearInterval(this.timeOut);
        this.isCalled = false;
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.spinUp, 'mouseleave', this.mouseUpClick);
        __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["EventHandler"].remove(this.spinDown, 'mouseleave', this.mouseUpClick);
    };
    NumericTextBox.prototype.increment = function (step) {
        if (step === void 0) { step = this.step; }
        this.changeValue(this.performAction(this.value, step, INCREMENT));
    };
    NumericTextBox.prototype.decrement = function (step) {
        if (step === void 0) { step = this.step; }
        this.changeValue(this.performAction(this.value, step, DECREMENT));
    };
    NumericTextBox.prototype.destroy = function () {
        this.unwireEvents();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.hiddenInput);
        if (this.showSpinButton) {
            this.unwireSpinBtnEvents();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.spinUp);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.spinDown);
        }
        this.container.parentElement.appendChild(this.cloneElement);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.container);
        _super.prototype.destroy.call(this);
    };
    NumericTextBox.prototype.getText = function () {
        return this.element.value;
    };
    NumericTextBox.prototype.getPersistData = function () {
        var keyEntity = ['value'];
        return this.addOnPersist(keyEntity);
    };
    NumericTextBox.prototype.onPropertyChanged = function (newProp, oldProp) {
        var elementVal;
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setStyleAttribute"])(this.container, { 'width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["formatUnit"])(newProp.width) });
                    break;
                case 'cssClass':
                    __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setCssClass(newProp.cssClass, [this.container], oldProp.cssClass);
                    break;
                case 'enabled':
                    __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setEnabled(newProp.enabled, this.element);
                    break;
                case 'enableRtl':
                    __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setEnableRtl(newProp.enableRtl, [this.container]);
                    break;
                case 'readonly':
                    __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setReadonly(newProp.readonly, this.element);
                    if (this.readonly) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.element, { 'aria-readonly': 'true' });
                    }
                    else {
                        this.element.removeAttribute('aria-readonly');
                    }
                    break;
                case 'placeholder':
                    __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setPlaceholder(newProp.placeholder, this.element);
                    break;
                case 'step':
                    this.step = newProp.step;
                    this.validateStep();
                    break;
                case 'showSpinButton':
                    if (newProp.showSpinButton) {
                        this.spinBtnCreation();
                    }
                    else {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.spinUp);
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["detach"])(this.spinDown);
                    }
                    break;
                case 'value':
                    this.updateValue(newProp.value);
                    break;
                case 'min':
                case 'max':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])(prop, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])(prop, newProp), this);
                    this.validateMinMax();
                    this.updateValue(this.value);
                    break;
                case 'strictMode':
                    this.strictMode = newProp.strictMode;
                    this.updateValue(this.value);
                    this.validateState();
                    break;
                case 'locale':
                    this.initCultureFunc();
                    this.l10n.setLocale(this.locale);
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.spinDown)) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.spinDown, {
                            'title': this.l10n.getConstant('decrementTitle'),
                            'aria-label': this.l10n.getConstant('decrementTitle')
                        });
                    }
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["isNullOrUndefined"])(this.spinUp)) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["attributes"])(this.spinUp, {
                            'title': this.l10n.getConstant('incrementTitle'),
                            'aria-label': this.l10n.getConstant('incrementTitle')
                        });
                    }
                    this.updatePlaceholder();
                    __WEBPACK_IMPORTED_MODULE_1__input_input__["a" /* Input */].setPlaceholder(this.placeholder, this.element);
                    this.updateValue(this.value);
                    break;
                case 'currency':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])(prop, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])(prop, newProp), this.cultureInfo);
                    this.updateValue(this.value);
                    break;
                case 'format':
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["setValue"])(prop, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["getValue"])(prop, newProp), this);
                    this.initCultureInfo();
                    this.updateValue(this.value);
                    break;
                case 'decimals':
                    this.decimals = newProp.decimals;
                    this.updateValue(this.value);
            }
        }
    };
    NumericTextBox.prototype.getModuleName = function () {
        return 'numerictextbox';
    };
    return NumericTextBox;
}(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Component"]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('')
], NumericTextBox.prototype, "cssClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], NumericTextBox.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(-(Number.MAX_VALUE))
], NumericTextBox.prototype, "min", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(Number.MAX_VALUE)
], NumericTextBox.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(1)
], NumericTextBox.prototype, "step", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], NumericTextBox.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], NumericTextBox.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(true)
], NumericTextBox.prototype, "showSpinButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], NumericTextBox.prototype, "readonly", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(true)
], NumericTextBox.prototype, "enabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], NumericTextBox.prototype, "enableRtl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], NumericTextBox.prototype, "enablePersistence", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('n2')
], NumericTextBox.prototype, "format", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], NumericTextBox.prototype, "decimals", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(null)
], NumericTextBox.prototype, "currency", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(true)
], NumericTextBox.prototype, "strictMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])(false)
], NumericTextBox.prototype, "validateDecimalOnType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Property"])('Never')
], NumericTextBox.prototype, "floatLabelType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], NumericTextBox.prototype, "created", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], NumericTextBox.prototype, "destroyed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["Event"])()
], NumericTextBox.prototype, "change", void 0);
NumericTextBox = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["NotifyPropertyChanges"]
], NumericTextBox);

var numerictextboxHelper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__syncfusion_ej2_base__["CreateBuilder"])(NumericTextBox);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(0), __webpack_require__(65), __webpack_require__(26), __webpack_require__(29), __webpack_require__(28), __webpack_require__(48)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, drop_down_list_1, drop_down_base_1, incremental_search_1, ej2_popups_1, ej2_inputs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    drop_down_list_1.dropDownListClasses.root = 'e-combobox';
    var inputObject = {
        container: null,
        buttons: []
    };
    var ComboBox = (function (_super) {
        __extends(ComboBox, _super);
        function ComboBox(options, element) {
            return _super.call(this, options, element) || this;
        }
        ;
        ComboBox.prototype.preRender = function () {
            _super.prototype.preRender.call(this);
        };
        ComboBox.prototype.wireEvent = function () {
            if (this.getModuleName() === 'combobox') {
                ej2_base_1.EventHandler.add(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur, this);
                ej2_base_1.EventHandler.add(this.inputWrapper.container, 'blur', this.onBlur, this);
            }
            if (!ej2_base_2.isNullOrUndefined(this.inputWrapper.buttons[0])) {
                ej2_base_1.EventHandler.add(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick, this);
            }
            ej2_base_1.EventHandler.add(this.inputElement, 'focus', this.targetFocus, this);
            if (!this.readonly) {
                ej2_base_1.EventHandler.add(this.inputElement, 'input', this.onInput, this);
                ej2_base_1.EventHandler.add(this.inputElement, 'keyup', this.onFilterUp, this);
                ej2_base_1.EventHandler.add(this.inputElement, 'keydown', this.onFilterDown, this);
            }
            this.bindCommonEvent();
        };
        ComboBox.prototype.preventBlur = function (e) {
            if ((!this.allowFiltering && document.activeElement !== this.inputElement &&
                !document.activeElement.classList.contains(drop_down_list_1.dropDownListClasses.input) && ej2_base_1.Browser.isDevice || !ej2_base_1.Browser.isDevice)) {
                e.preventDefault();
            }
        };
        ComboBox.prototype.targetElement = function () {
            return this.inputElement;
        };
        ComboBox.prototype.setOldText = function (text) {
            ej2_inputs_1.Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
            this.customValue();
            this.removeSelection();
        };
        ComboBox.prototype.setOldValue = function (value) {
            if (this.allowCustom) {
                this.valueMuteChange(this.value);
            }
            else {
                this.valueMuteChange(null);
            }
            this.removeSelection();
            this.setHiddenValue();
        };
        ComboBox.prototype.valueMuteChange = function (value) {
            var inputValue = ej2_base_2.isNullOrUndefined(value) ? null : value.toString();
            ej2_inputs_1.Input.setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
            this.setProperties({ value: value, text: value, index: null }, true);
            this.activeIndex = this.index;
            var fields = this.fields;
            var dataItem = {};
            dataItem[fields.text] = ej2_base_2.isNullOrUndefined(value) ? null : value.toString();
            dataItem[fields.value] = ej2_base_2.isNullOrUndefined(value) ? null : value.toString();
            this.itemData = dataItem;
            this.item = null;
            if (this.previousValue !== this.value) {
                this.detachChangeEvent(null);
            }
        };
        ComboBox.prototype.updateValues = function () {
            if (!ej2_base_2.isNullOrUndefined(this.value)) {
                var li = this.getElementByValue(this.value);
                if (li) {
                    this.setSelection(li, null);
                }
                else if (this.allowCustom) {
                    this.valueMuteChange(this.value);
                }
                else {
                    this.valueMuteChange(null);
                }
            }
            else if (this.text && ej2_base_2.isNullOrUndefined(this.value)) {
                var li = this.getElementByText(this.text);
                if (li) {
                    this.setSelection(li, null);
                }
                else {
                    ej2_inputs_1.Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                    this.customValue();
                }
            }
            else {
                this.setSelection(this.liCollections[this.activeIndex], null);
            }
            this.setHiddenValue();
            ej2_inputs_1.Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
        };
        ComboBox.prototype.getAriaAttributes = function () {
            var ariaAttributes = {
                'aria-owns': this.element.id + '_options',
                'role': 'combobox',
                'aria-autocomplete': 'both',
                'aria-labelledby': this.hiddenElement.id,
                'aria-hasPopup': 'true',
                'aria-expanded': 'false',
                'aria-readonly': this.readonly.toString(),
                'autocomplete': 'off',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'spellcheck': 'false'
            };
            return ariaAttributes;
        };
        ComboBox.prototype.searchLists = function (e) {
            this.isTyped = true;
            if (this.isFiltering()) {
                _super.prototype.searchLists.call(this, e);
                if (this.filterInput.value.trim() === '') {
                    this.setHoverList(this.ulElement.querySelector('.' + drop_down_list_1.dropDownListClasses.li));
                }
            }
            else {
                if (this.ulElement && this.inputElement.value === '' && this.preventAutoFill) {
                    this.setHoverList(this.ulElement.querySelector('.' + drop_down_list_1.dropDownListClasses.li));
                }
                this.incrementalSearch(e);
            }
        };
        ComboBox.prototype.getNgDirective = function () {
            return 'EJ-COMBOBOX';
        };
        ComboBox.prototype.setSearchBox = function () {
            this.filterInput = this.inputElement;
            return (this.isFiltering() ? this.inputWrapper : inputObject);
        };
        ComboBox.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
            _super.prototype.onActionComplete.call(this, ulElement, list, e);
            if (this.isSelectCustom) {
                this.removeSelection();
            }
            if (!this.preventAutoFill && this.getModuleName() === 'combobox' && this.isTyped) {
                this.inlineSearch();
            }
        };
        ComboBox.prototype.getFocusElement = function () {
            var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
            var selected = this.list.querySelector('.' + drop_down_list_1.dropDownListClasses.selected);
            var isSelected = dataItem.text === this.inputElement.value && !ej2_base_2.isNullOrUndefined(selected);
            if (isSelected) {
                return selected;
            }
            if ((ej2_base_1.Browser.isDevice && !this.isDropDownClick || !ej2_base_1.Browser.isDevice) &&
                !ej2_base_2.isNullOrUndefined(this.liCollections) && this.liCollections.length > 0) {
                var inputValue = this.inputElement.value;
                var activeItem = incremental_search_1.Search(inputValue, this.liCollections, 'StartsWith', true);
                var activeElement = activeItem.item;
                if (!ej2_base_2.isNullOrUndefined(activeElement)) {
                    var count = this.getIndexByValue(activeElement.getAttribute('data-value')) - 1;
                    var height = parseInt(getComputedStyle(this.liCollections[0], null).getPropertyValue('height'), 10);
                    if (!isNaN(height) && this.getModuleName() !== 'autocomplete') {
                        this.removeFocus();
                        var fixedHead = this.fields.groupBy ? this.liCollections[0].offsetHeight : 0;
                        this.list.scrollTop = count * height + fixedHead;
                        ej2_base_1.addClass([activeElement], drop_down_list_1.dropDownListClasses.focus);
                    }
                }
                else {
                    if (this.isSelectCustom && this.inputElement.value.trim() !== '') {
                        this.removeFocus();
                        this.list.scrollTop = 0;
                    }
                }
                return activeElement;
            }
            else {
                return null;
            }
        };
        ComboBox.prototype.setValue = function (e) {
            if (e && e.type === 'keydown' && e.action === 'enter') {
                this.removeFillSelection();
            }
            if (this.autofill && this.getModuleName() === 'combobox' && e && e.type === 'keydown' && e.action !== 'enter') {
                this.preventAutoFill = false;
                this.inlineSearch(e);
                return false;
            }
            else {
                return _super.prototype.setValue.call(this, e);
            }
        };
        ComboBox.prototype.showSpinner = function () {
            if (ej2_base_2.isNullOrUndefined(this.spinnerElement)) {
                this.spinnerElement = this.inputWrapper.buttons[0] || this.inputWrapper.clearButton;
                ej2_base_1.addClass([this.spinnerElement], drop_down_list_1.dropDownListClasses.disableIcon);
                ej2_popups_1.createSpinner({
                    target: this.spinnerElement,
                    width: drop_down_base_1.SPINNER_SIZE
                });
                ej2_popups_1.showSpinner(this.spinnerElement);
            }
        };
        ComboBox.prototype.hideSpinner = function () {
            if (!ej2_base_2.isNullOrUndefined(this.spinnerElement)) {
                ej2_popups_1.hideSpinner(this.spinnerElement);
                this.spinnerElement.innerHTML = '';
                ej2_base_1.removeClass([this.spinnerElement], drop_down_list_1.dropDownListClasses.disableIcon);
                this.spinnerElement = null;
            }
        };
        ComboBox.prototype.setAutoFill = function (activeElement, isHover) {
            if (!isHover) {
                this.setHoverList(activeElement);
            }
            if (this.autofill && !this.preventAutoFill) {
                var currentValue = this.getTextByValue(activeElement.getAttribute('data-value')).toString();
                var currentFillValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
                if (this.getModuleName() === 'combobox') {
                    if (!this.isSelected && this.previousValue !== currentFillValue) {
                        this.updateSelectedItem(activeElement, null);
                        this.isSelected = true;
                        this.previousValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
                    }
                    else {
                        this.updateSelectedItem(activeElement, null, true);
                    }
                }
                if (!this.isAndroidAutoFill(currentValue)) {
                    this.setAutoFillSelection(currentValue);
                }
            }
        };
        ComboBox.prototype.isAndroidAutoFill = function (value) {
            if (ej2_base_1.Browser.isAndroid) {
                var currentPoints = this.getSelectionPoints();
                var prevEnd = this.prevSelectPoints.end;
                var curEnd = currentPoints.end;
                var prevStart = this.prevSelectPoints.start;
                var curStart = currentPoints.start;
                if (prevEnd !== 0 && ((prevEnd === value.length && prevStart === value.length) ||
                    (prevStart > curStart && prevEnd > curEnd) || (prevEnd === curEnd && prevStart === curStart))) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        };
        ComboBox.prototype.isSelectFocusItem = function (element) {
            return !ej2_base_2.isNullOrUndefined(element);
        };
        ComboBox.prototype.inlineSearch = function (e) {
            var isKeyNavigate = (e && (e.action === 'down' || e.action === 'up' ||
                e.action === 'home' || e.action === 'end' || e.action === 'pageUp' || e.action === 'pageDown'));
            var activeElement = isKeyNavigate ? this.liCollections[this.activeIndex] : this.getFocusElement();
            if (!ej2_base_2.isNullOrUndefined(activeElement)) {
                if (!isKeyNavigate) {
                    var value = this.getFormattedValue(activeElement.getAttribute('data-value'));
                    this.activeIndex = this.getIndexByValue(value);
                    this.activeIndex = !ej2_base_2.isNullOrUndefined(this.activeIndex) ? this.activeIndex : null;
                }
                this.preventAutoFill = this.inputElement.value === '' ? false : this.preventAutoFill;
                this.setAutoFill(activeElement, isKeyNavigate);
            }
            else if (this.inputElement.value === '') {
                this.activeIndex = null;
                this.list.scrollTop = 0;
                var focusItem = this.list.querySelector('.' + drop_down_list_1.dropDownListClasses.li);
                this.setHoverList(focusItem);
            }
            else {
                this.activeIndex = null;
                this.removeSelection();
                this.removeFocus();
            }
        };
        ComboBox.prototype.incrementalSearch = function (e) {
            this.showPopup();
            if (!ej2_base_2.isNullOrUndefined(this.listData)) {
                this.inlineSearch(e);
                e.preventDefault();
            }
        };
        ;
        ComboBox.prototype.setAutoFillSelection = function (currentValue) {
            var selection = this.getSelectionPoints();
            var value = this.inputElement.value.substr(0, selection.start);
            if (value && (value.toLowerCase() === currentValue.substr(0, selection.start).toLowerCase())) {
                var inputValue = value + currentValue.substr(value.length, currentValue.length);
                ej2_inputs_1.Input.setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
                this.inputElement.setSelectionRange(selection.start, this.inputElement.value.length);
            }
            else {
                ej2_inputs_1.Input.setValue(currentValue, this.inputElement, this.floatLabelType, this.showClearButton);
                this.inputElement.setSelectionRange(0, this.inputElement.value.length);
            }
        };
        ;
        ComboBox.prototype.getValueByText = function (text) {
            return _super.prototype.getValueByText.call(this, text, true);
        };
        ComboBox.prototype.unWireEvent = function () {
            if (this.getModuleName() === 'combobox') {
                ej2_base_1.EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur);
                ej2_base_1.EventHandler.remove(this.inputWrapper.container, 'blur', this.onBlur);
            }
            if (!ej2_base_2.isNullOrUndefined(this.inputWrapper.buttons[0])) {
                ej2_base_1.EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick);
            }
            ej2_base_1.EventHandler.remove(this.inputElement, 'focus', this.targetFocus);
            if (!this.readonly) {
                ej2_base_1.EventHandler.remove(this.inputElement, 'input', this.onInput);
                ej2_base_1.EventHandler.remove(this.inputElement, 'keyup', this.onFilterUp);
                ej2_base_1.EventHandler.remove(this.inputElement, 'keydown', this.onFilterDown);
            }
            this.unBindCommonEvent();
        };
        ComboBox.prototype.setSelection = function (li, e) {
            _super.prototype.setSelection.call(this, li, e);
            if (!ej2_base_2.isNullOrUndefined(li) && !this.autofill && !this.isDropDownClick) {
                this.removeFocus();
            }
        };
        ComboBox.prototype.selectCurrentItem = function (e) {
            var li;
            if (this.isPopupOpen) {
                li = this.list.querySelector('.' + drop_down_list_1.dropDownListClasses.focus);
                if (li) {
                    this.setSelection(li, e);
                    this.isTyped = false;
                }
                if (this.isSelected) {
                    this.isSelectCustom = false;
                    this.onChangeEvent(e);
                }
            }
            if (this.isTyped && !this.isSelected && ej2_base_2.isNullOrUndefined(li)) {
                this.customValue();
            }
            this.hidePopup();
        };
        ComboBox.prototype.setHoverList = function (li) {
            this.removeSelection();
            if (this.isValidLI(li) && !li.classList.contains(drop_down_list_1.dropDownListClasses.selected)) {
                this.removeFocus();
                li.classList.add(drop_down_list_1.dropDownListClasses.focus);
            }
        };
        ;
        ComboBox.prototype.targetFocus = function (e) {
            if (ej2_base_1.Browser.isDevice && !this.allowFiltering) {
                this.preventFocus = false;
            }
            this.onFocus();
        };
        ComboBox.prototype.dropDownClick = function (e) {
            if (ej2_base_1.Browser.isDevice && !this.allowFiltering) {
                this.preventFocus = true;
            }
            _super.prototype.dropDownClick.call(this, e);
        };
        ComboBox.prototype.customValue = function () {
            var value = this.getValueByText(this.inputElement.value);
            if (!this.allowCustom && this.inputElement.value !== '') {
                this.setProperties({ value: value });
                if (ej2_base_2.isNullOrUndefined(this.value)) {
                    ej2_inputs_1.Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                }
            }
            else if (this.inputElement.value.trim() !== '') {
                var previousValue = this.value;
                if (ej2_base_2.isNullOrUndefined(value)) {
                    var value_1 = this.inputElement.value === '' ? null : this.inputElement.value;
                    var fields = this.fields;
                    var eventArgs = void 0;
                    eventArgs = { text: value_1, item: {} };
                    if (!this.initial) {
                        this.trigger('customValueSpecifier', eventArgs);
                    }
                    var item = eventArgs.item;
                    var dataItem = {};
                    if (item && item[fields.text] && item[fields.value]) {
                        dataItem = item;
                    }
                    else {
                        dataItem[fields.text] = value_1;
                        dataItem[fields.value] = value_1;
                    }
                    this.itemData = dataItem;
                    this.setProperties({ text: this.itemData[fields.text], value: this.itemData[fields.value], index: null }, true);
                    this.setSelection(null, null);
                    this.isSelectCustom = true;
                }
                else {
                    this.isSelectCustom = false;
                    this.setProperties({ value: value });
                }
                if (previousValue !== this.value) {
                    this.onChangeEvent(null);
                }
            }
        };
        ComboBox.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'readonly':
                        ej2_inputs_1.Input.setReadonly(this.readonly, this.inputElement);
                        if (this.readonly) {
                            ej2_base_1.EventHandler.remove(this.inputElement, 'keyup', this.onFilterUp);
                            ej2_base_1.EventHandler.remove(this.inputElement, 'keydown', this.onFilterDown);
                        }
                        else {
                            ej2_base_1.EventHandler.add(this.inputElement, 'keyup', this.onFilterUp, this);
                            ej2_base_1.EventHandler.add(this.inputElement, 'keydown', this.onFilterDown, this);
                        }
                        break;
                    case 'allowFiltering':
                        this.setSearchBox();
                        break;
                    case 'allowCustom':
                        break;
                    default:
                        var comboProps = void 0;
                        comboProps = this.getPropObject(prop, newProp, oldProp);
                        _super.prototype.onPropertyChanged.call(this, comboProps.newProperty, comboProps.oldProperty);
                        break;
                }
            }
        };
        ComboBox.prototype.render = function () {
            _super.prototype.render.call(this);
            this.setSearchBox();
            if (this.isFiltering() && this.getModuleName() === 'combobox' && ej2_base_2.isNullOrUndefined(this.list)) {
                _super.prototype.renderList.call(this);
            }
        };
        ;
        ComboBox.prototype.getModuleName = function () {
            return 'combobox';
        };
        ComboBox.prototype.hidePopup = function () {
            if (!ej2_base_2.isNullOrUndefined(this.listData)) {
                var isEscape = this.isEscapeKey;
                if (this.isEscapeKey) {
                    ej2_inputs_1.Input.setValue(this.typedString, this.inputElement, this.floatLabelType, this.showClearButton);
                    this.isEscapeKey = false;
                }
                if (this.autofill) {
                    this.removeFillSelection();
                }
                var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
                var selected = this.list.querySelector('.' + drop_down_list_1.dropDownListClasses.selected);
                if (dataItem.text === this.inputElement.value && !ej2_base_2.isNullOrUndefined(selected)) {
                    if (this.isSelected) {
                        this.onChangeEvent(null);
                        this.isSelectCustom = false;
                    }
                    _super.prototype.hidePopup.call(this);
                    return;
                }
                if (this.getModuleName() === 'combobox' && this.inputElement.value.trim() !== '') {
                    var searchItem = incremental_search_1.Search(this.inputElement.value, this.liCollections, 'Equal', true);
                    this.selectedLI = searchItem.item;
                    if (ej2_base_2.isNullOrUndefined(searchItem.index)) {
                        searchItem.index = incremental_search_1.Search(this.inputElement.value, this.liCollections, 'StartsWith', true).index;
                    }
                    this.activeIndex = searchItem.index;
                    if (!ej2_base_2.isNullOrUndefined(this.selectedLI)) {
                        this.updateSelectedItem(this.selectedLI, null, true);
                    }
                    else if (isEscape) {
                        this.isSelectCustom = true;
                        this.removeSelection();
                    }
                }
                if (!this.isEscapeKey && this.isTyped && !this.isInteracted) {
                    this.customValue();
                }
            }
            _super.prototype.hidePopup.call(this);
        };
        ComboBox.prototype.focusIn = function () {
            if (ej2_base_1.Browser.isDevice && !this.allowFiltering) {
                this.preventFocus = true;
            }
            _super.prototype.focusIn.call(this);
        };
        return ComboBox;
    }(drop_down_list_1.DropDownList));
    __decorate([
        ej2_base_1.Property(false)
    ], ComboBox.prototype, "autofill", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], ComboBox.prototype, "allowCustom", void 0);
    __decorate([
        ej2_base_1.Property({})
    ], ComboBox.prototype, "htmlAttributes", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], ComboBox.prototype, "allowFiltering", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], ComboBox.prototype, "query", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], ComboBox.prototype, "showClearButton", void 0);
    __decorate([
        ej2_base_1.Event()
    ], ComboBox.prototype, "customValueSpecifier", void 0);
    __decorate([
        ej2_base_1.Event()
    ], ComboBox.prototype, "filtering", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], ComboBox.prototype, "valueTemplate", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], ComboBox.prototype, "filterBarPlaceholder", void 0);
    ComboBox = __decorate([
        ej2_base_2.NotifyPropertyChanges
    ], ComboBox);
    exports.ComboBox = ComboBox;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(75)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, combo_box_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(combo_box_1);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);