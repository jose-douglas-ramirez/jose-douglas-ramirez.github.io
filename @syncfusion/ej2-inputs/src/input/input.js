define(["require", "exports", "@syncfusion/ej2-base"], function (require, exports, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            if (ej2_base_1.isNullOrUndefined(args.floatLabelType) || args.floatLabelType === 'Never') {
                inputObject.container = createInputContainer(args, CLASSNAMES.INPUTGROUP, CLASSNAMES.INPUTCUSTOMTAG, 'span');
                args.element.parentNode.insertBefore(inputObject.container, args.element);
                ej2_base_1.addClass([args.element], CLASSNAMES.INPUT);
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
            if (!ej2_base_1.isNullOrUndefined(args.properties) && !ej2_base_1.isNullOrUndefined(args.properties.showClearButton) && args.properties.showClearButton) {
                inputObject.clearButton = createClearButton(args.element, inputObject.container);
                if (inputObject.container.classList.contains(CLASSNAMES.FLOATINPUT)) {
                    ej2_base_1.addClass([inputObject.container], CLASSNAMES.INPUTGROUP);
                }
            }
            if (!ej2_base_1.isNullOrUndefined(args.buttons)) {
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
            ej2_base_1.addClass([label], CLASSNAMES.LABELTOP);
            if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                ej2_base_1.removeClass([label], CLASSNAMES.LABELBOTTOM);
            }
        }
        function _blurFn() {
            var parent = getParentNode(this);
            if (parent.getElementsByTagName('input')[0].value === '') {
                var label = parent.getElementsByClassName('e-float-text')[0];
                if (label.classList.contains(CLASSNAMES.LABELTOP)) {
                    ej2_base_1.removeClass([label], CLASSNAMES.LABELTOP);
                }
                ej2_base_1.addClass([label], CLASSNAMES.LABELBOTTOM);
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
            if (ej2_base_1.isNullOrUndefined(inputObject.container)) {
                inputObject.container = createInputContainer(args, CLASSNAMES.FLOATINPUT, CLASSNAMES.FLOATCUSTOMTAG, 'div');
                args.element.parentNode.insertBefore(inputObject.container, args.element);
            }
            else {
                if (!ej2_base_1.isNullOrUndefined(args.customTag)) {
                    inputObject.container.classList.add(CLASSNAMES.FLOATCUSTOMTAG);
                }
                inputObject.container.classList.add(CLASSNAMES.FLOATINPUT);
            }
            floatLinelement = ej2_base_1.createElement('span', { className: CLASSNAMES.FLOATLINE });
            floatLabelElement = ej2_base_1.createElement('label', { className: CLASSNAMES.FLOATTEXT });
            if (!ej2_base_1.isNullOrUndefined(args.element.id) && args.element.id !== '') {
                floatLabelElement.id = 'label_' + args.element.id.replace(/ /g, '_');
                ej2_base_1.attributes(args.element, { 'aria-labelledby': floatLabelElement.id });
            }
            if (!ej2_base_1.isNullOrUndefined(args.element.placeholder) && args.element.placeholder !== '') {
                floatLabelElement.innerHTML = args.element.placeholder;
                args.element.removeAttribute('placeholder');
            }
            if (!ej2_base_1.isNullOrUndefined(args.properties) && !ej2_base_1.isNullOrUndefined(args.properties.placeholder) &&
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
                    ej2_base_1.removeClass([floatLabelElement], CLASSNAMES.LABELBOTTOM);
                }
                ej2_base_1.addClass([floatLabelElement], CLASSNAMES.LABELTOP);
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
            if (!ej2_base_1.isNullOrUndefined(args.properties)) {
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
                ej2_base_1.removeClass([button], CLASSNAMES.CLEARICONHIDE);
            }
            else {
                ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE);
            }
        }
        function updateLabelState(value, label) {
            if (value) {
                ej2_base_1.addClass([label], CLASSNAMES.LABELTOP);
                if (label.classList.contains(CLASSNAMES.LABELBOTTOM)) {
                    ej2_base_1.removeClass([label], CLASSNAMES.LABELBOTTOM);
                }
            }
            else {
                if (label.classList.contains(CLASSNAMES.LABELTOP)) {
                    ej2_base_1.removeClass([label], CLASSNAMES.LABELTOP);
                }
                ej2_base_1.addClass([label], CLASSNAMES.LABELBOTTOM);
            }
        }
        function getParentNode(element) {
            var parentNode = element.parentNode;
            return parentNode;
        }
        function createClearButton(element, container) {
            var button = ej2_base_1.createElement('span', { className: CLASSNAMES.CLEARICON });
            container.appendChild(button);
            if (!ej2_base_1.isNullOrUndefined(privateInputObj.container) &&
                privateInputObj.container.classList.contains(CLASSNAMES.FLOATINPUT)) {
                ej2_base_1.addClass([privateInputObj.container], CLASSNAMES.INPUTGROUP);
            }
            ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE);
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
                    ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE);
                }
            });
            element.addEventListener('input', function (event) {
                updateIconState(element.value, button);
            });
            element.addEventListener('focus', function (event) {
                updateIconState(element.value, button);
            });
            element.addEventListener('blur', function (event) {
                setTimeout(function () { ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE); }, 200);
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
            if (!ej2_base_1.isNullOrUndefined(args.customTag)) {
                container = ej2_base_1.createElement(args.customTag, { className: className });
                container.classList.add(tagClass);
            }
            else {
                container = ej2_base_1.createElement(tag, { className: className });
            }
            return container;
        }
        function setValue(value, element, floatLabelType, clearButton) {
            element.value = value;
            if ((!ej2_base_1.isNullOrUndefined(floatLabelType)) && floatLabelType === 'Auto') {
                validateLabel(element, floatLabelType);
            }
            if (!ej2_base_1.isNullOrUndefined(clearButton) && clearButton) {
                var parentElement = getParentNode(element);
                var button = parentElement.getElementsByClassName(CLASSNAMES.CLEARICON)[0];
                if (element.value && parentElement.classList.contains('e-input-focus')) {
                    ej2_base_1.removeClass([button], CLASSNAMES.CLEARICONHIDE);
                }
                else {
                    ej2_base_1.addClass([button], CLASSNAMES.CLEARICONHIDE);
                }
            }
        }
        Input.setValue = setValue;
        function setCssClass(cssClass, elements, oldClass) {
            if (!ej2_base_1.isNullOrUndefined(oldClass) && oldClass !== '') {
                ej2_base_1.removeClass(elements, oldClass);
            }
            if (!ej2_base_1.isNullOrUndefined(cssClass) && cssClass !== '') {
                ej2_base_1.addClass(elements, cssClass);
            }
        }
        Input.setCssClass = setCssClass;
        function setPlaceholder(placeholder, element) {
            var parentElement;
            parentElement = getParentNode(element);
            if (parentElement.classList.contains(CLASSNAMES.FLOATINPUT)) {
                if (!ej2_base_1.isNullOrUndefined(placeholder) && placeholder !== '') {
                    parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = placeholder;
                    parentElement.classList.remove(CLASSNAMES.NOFLOATLABEL);
                }
                else {
                    parentElement.classList.add(CLASSNAMES.NOFLOATLABEL);
                    parentElement.getElementsByClassName(CLASSNAMES.FLOATTEXT)[0].textContent = '';
                }
            }
            else {
                if (!ej2_base_1.isNullOrUndefined(placeholder) && placeholder !== '') {
                    ej2_base_1.attributes(element, { 'placeholder': placeholder, 'aria-placeholder': placeholder });
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
                ej2_base_1.attributes(element, { readonly: '' });
            }
            else {
                element.removeAttribute('readonly');
            }
            if (!ej2_base_1.isNullOrUndefined(floatLabelType)) {
                validateLabel(element, floatLabelType);
            }
        }
        Input.setReadonly = setReadonly;
        function setEnableRtl(isRtl, elements) {
            if (isRtl) {
                ej2_base_1.addClass(elements, CLASSNAMES.RTL);
            }
            else {
                ej2_base_1.removeClass(elements, CLASSNAMES.RTL);
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
            if (!ej2_base_1.isNullOrUndefined(floatLabelType)) {
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
            if (!ej2_base_1.isNullOrUndefined(container) && container.classList.contains(CLASSNAMES.FLOATINPUT)) {
                var inputEle = container.querySelector('input');
                var placeholder = container.querySelector('.' + CLASSNAMES.FLOATTEXT).textContent;
                var clearButton = container.querySelector('.e-clear-icon') !== null;
                ej2_base_1.detach(container.querySelector('.' + CLASSNAMES.FLOATLINE));
                ej2_base_1.detach(container.querySelector('.' + CLASSNAMES.FLOATTEXT));
                ej2_base_1.classList(container, [CLASSNAMES.INPUTGROUP], [CLASSNAMES.FLOATINPUT]);
                unwireFloatingEvents(inputEle);
                ej2_base_1.attributes(inputEle, { 'placeholder': placeholder });
                inputEle.classList.add(CLASSNAMES.INPUT);
                if (!clearButton) {
                    inputEle.removeAttribute('required');
                }
            }
        }
        Input.removeFloating = removeFloating;
        function addFloating(input, type, placeholder) {
            var container = ej2_base_1.closest(input, '.' + CLASSNAMES.INPUTGROUP);
            if (type !== 'Never') {
                var customTag = container.tagName;
                customTag = customTag !== 'DIV' && customTag !== 'SPAN' ? customTag : null;
                var args = { element: input, floatLabelType: type, customTag: customTag, properties: { placeholder: placeholder } };
                var iconEle = container.querySelector('.e-clear-icon');
                var inputObj = { container: container };
                input.classList.remove(CLASSNAMES.INPUT);
                createFloatingInput(args, inputObj);
                if (ej2_base_1.isNullOrUndefined(iconEle)) {
                    iconEle = container.querySelector('.e-input-group-icon');
                }
                if (ej2_base_1.isNullOrUndefined(iconEle)) {
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
            var button = ej2_base_1.createElement('span', { className: iconClass });
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
    })(Input = exports.Input || (exports.Input = {}));
});
