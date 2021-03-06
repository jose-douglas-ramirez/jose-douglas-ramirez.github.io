define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base"], function (require, exports, ej2_base_1, ej2_base_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function wrapperInitialize(tag, type, element, WRAPPER) {
        if (element.tagName === tag) {
            var ejInstance = ej2_base_2.getValue('ej2_instances', element);
            var input = ej2_base_1.createElement('input', { attrs: { 'type': type } });
            var props = ['change', 'cssClass', 'label', 'labelPosition'];
            var wrapper = ej2_base_1.createElement(tag, {
                className: WRAPPER, attrs: { 'role': type, 'aria-checked': 'false' }
            });
            for (var index = 0, len = element.attributes.length; index < len; index++) {
                if (props.indexOf(element.attributes[index].nodeName) === -1) {
                    input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
                }
            }
            element.parentNode.insertBefore(input, element);
            ej2_base_1.detach(element);
            element = input;
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
            ej2_base_2.setValue('ej2_instances', ejInstance, element);
        }
        return element;
    }
    exports.wrapperInitialize = wrapperInitialize;
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
    exports.getTextNode = getTextNode;
    function createCheckBox(enableRipple, options) {
        if (enableRipple === void 0) { enableRipple = false; }
        if (options === void 0) { options = {}; }
        var wrapper = ej2_base_1.createElement('div', { className: 'e-checkbox-wrapper' });
        if (options.enableRtl) {
            wrapper.classList.add('e-rtl');
        }
        if (enableRipple) {
            var rippleSpan = ej2_base_1.createElement('span', { className: 'e-ripple-container' });
            ej2_base_1.rippleEffect(rippleSpan, { isCenterRipple: true, duration: 400 });
            wrapper.appendChild(rippleSpan);
        }
        var frameSpan = ej2_base_1.createElement('span', { className: 'e-frame e-icons' });
        if (options.checked) {
            frameSpan.classList.add('e-check');
        }
        wrapper.appendChild(frameSpan);
        if (options.label) {
            var labelSpan = ej2_base_1.createElement('span', { className: 'e-label', innerHTML: options.label });
            wrapper.appendChild(labelSpan);
        }
        return wrapper;
    }
    exports.createCheckBox = createCheckBox;
});
