define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var instances = 'ej2_instances';
    var uid = 0;
    function createInstance(classFunction, params) {
        var arrayParam = params;
        arrayParam.unshift(undefined);
        return new (Function.prototype.bind.apply(classFunction, arrayParam));
    }
    exports.createInstance = createInstance;
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
    exports.setImmediate = setImmediate;
    function getValue(nameSpace, obj) {
        var value = obj;
        var splits = nameSpace.split('.');
        for (var i = 0; i < splits.length && !isUndefined(value); i++) {
            value = value[splits[i]];
        }
        return value;
    }
    exports.getValue = getValue;
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
    exports.setValue = setValue;
    function deleteObject(obj, key) {
        delete obj[key];
    }
    exports.deleteObject = deleteObject;
    function isObject(obj) {
        var objCon = {};
        return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
    }
    exports.isObject = isObject;
    function getEnumValue(enumObject, enumValue) {
        return enumObject[enumValue];
    }
    exports.getEnumValue = getEnumValue;
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
    exports.merge = merge;
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
    exports.extend = extend;
    function isNullOrUndefined(value) {
        return value === undefined || value === null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isUndefined(value) {
        return ('undefined' === typeof value);
    }
    exports.isUndefined = isUndefined;
    function getUniqueID(definedName) {
        return definedName + '_' + uid++;
    }
    exports.getUniqueID = getUniqueID;
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
    exports.debounce = debounce;
    function queryParams(data) {
        var array = [];
        var keys = Object.keys(data);
        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
            var key = keys_2[_i];
            array.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + data[key]));
        }
        return array.join('&');
    }
    exports.queryParams = queryParams;
    function isObjectArray(value) {
        var parser = Object.prototype.toString;
        if (parser.call(value) === '[object Array]') {
            if (parser.call(value[0]) === '[object Object]') {
                return true;
            }
        }
        return false;
    }
    exports.isObjectArray = isObjectArray;
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
    exports.compareElementParent = compareElementParent;
    function throwError(message) {
        try {
            throw new Error(message);
        }
        catch (e) {
            throw e.message + '\n' + e.stack;
        }
    }
    exports.throwError = throwError;
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
    exports.print = print;
    function formatUnit(value) {
        var result = value + '';
        if (result === 'auto' || result.indexOf('%') !== -1 || result.indexOf('px') !== -1) {
            return result;
        }
        return result + 'px';
    }
    exports.formatUnit = formatUnit;
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
    exports.getInstance = getInstance;
    function addInstance(element, instance) {
        var elem = (typeof (element) === 'string') ? document.querySelector(element) : element;
        if (elem[instances]) {
            elem[instances].push(instance);
        }
        else {
            elem[instances] = [instance];
        }
    }
    exports.addInstance = addInstance;
    function combineArray(num) {
        var ret = '';
        for (var i = 0; i < 5; i++) {
            ret += (i ? ',' : '') + num[i];
        }
        return ret;
    }
});
