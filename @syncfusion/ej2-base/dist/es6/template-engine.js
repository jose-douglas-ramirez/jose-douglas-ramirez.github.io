import { compile as render } from './template';
import { createElement } from './dom';
var HAS_ROW = /^[\n\r.]+\<tr|^\<tr/;
export function compile(templateString, helper) {
    var compiler = engineObj.compile(templateString, helper);
    return function (data, component, propName) {
        var result = compiler(data, component, propName);
        if (typeof result === 'string') {
            var ele = createElement((HAS_ROW.test(result) ? 'table' : 'div'), { innerHTML: result });
            return ele.childNodes;
        }
        else {
            return result;
        }
    };
}
export function setTemplateEngine(classObj) {
    engineObj.compile = classObj.compile;
}
export function getTemplateEngine() {
    return engineObj.compile;
}
var Engine = (function () {
    function Engine() {
    }
    Engine.prototype.compile = function (templateString, helper) {
        if (helper === void 0) { helper = {}; }
        return render(templateString, helper);
    };
    return Engine;
}());
var engineObj = { compile: new Engine().compile };
