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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "../input/input"], function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            var ejInstance = ej2_base_4.getValue('ej2_instances', this.element);
            this.cloneElement = this.element.cloneNode(true);
            this.angularTagName = null;
            if (this.element.tagName === 'EJ-NUMERICTEXTBOX') {
                this.angularTagName = this.element.tagName;
                var input = ej2_base_3.createElement('input');
                var index = 0;
                for (index; index < this.element.attributes.length; index++) {
                    input.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
                    input.innerHTML = this.element.innerHTML;
                }
                this.element.parentNode.appendChild(input);
                this.element.parentNode.removeChild(this.element);
                this.element = input;
                ej2_base_4.setValue('ej2_instances', ejInstance, this.element);
            }
            ej2_base_3.attributes(this.element, { 'role': 'spinbutton', 'tabindex': '0', 'autocomplete': 'off', 'aria-live': 'assertive' });
            var localeText = { incrementTitle: 'Increment value', decrementTitle: 'Decrement value', placeholder: '' };
            this.l10n = new ej2_base_1.L10n('numerictextbox', localeText, this.locale);
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
                if (!ej2_base_4.isNullOrUndefined(this.width)) {
                    ej2_base_3.setStyleAttribute(this.container, { 'width': ej2_base_4.formatUnit(this.width) });
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
                if (!ej2_base_4.isNullOrUndefined(this.element.getAttribute(prop))) {
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
                                this.setProperties(ej2_base_4.setValue(prop, value, {}), true);
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
            this.instance = new ej2_base_5.Internationalization(this.locale);
        };
        NumericTextBox.prototype.initCultureInfo = function () {
            this.cultureInfo.format = this.format;
            if (ej2_base_4.getValue('currency', this) !== null) {
                ej2_base_4.setValue('currency', this.currency, this.cultureInfo);
            }
        };
        NumericTextBox.prototype.createWrapper = function () {
            var inputObj = input_1.Input.createInput({
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
            ej2_base_3.addClass([this.container], ROOT);
            if (this.readonly) {
                ej2_base_3.attributes(this.element, { 'aria-readonly': 'true' });
            }
            this.hiddenInput = (ej2_base_3.createElement('input', { attrs: { type: 'hidden' } }));
            this.inputName = this.inputName !== null ? this.inputName : this.element.id;
            this.element.removeAttribute('name');
            ej2_base_3.attributes(this.hiddenInput, { 'name': this.inputName });
            this.container.insertBefore(this.hiddenInput, this.element);
            if (this.inputStyle !== null) {
                ej2_base_3.attributes(this.container, { 'style': this.inputStyle });
            }
        };
        NumericTextBox.prototype.spinBtnCreation = function () {
            this.spinDown = input_1.Input.appendSpan(SPINICON + ' ' + SPINDOWN, this.container);
            ej2_base_3.attributes(this.spinDown, {
                'title': this.l10n.getConstant('decrementTitle'),
                'aria-label': this.l10n.getConstant('decrementTitle')
            });
            this.spinUp = input_1.Input.appendSpan(SPINICON + ' ' + SPINUP, this.container);
            ej2_base_3.attributes(this.spinUp, {
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
            ej2_base_3.attributes(this.element, { 'aria-valuemin': this.min.toString(), 'aria-valuemax': this.max.toString() });
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
                ej2_base_3.removeClass([this.container], ERROR);
            }
            else {
                ej2_base_3.addClass([this.container], ERROR);
            }
            ej2_base_3.attributes(this.element, { 'aria-invalid': this.isValidState ? 'false' : 'true' });
        };
        NumericTextBox.prototype.wireEvents = function () {
            ej2_base_1.EventHandler.add(this.element, 'focus', this.focusIn, this);
            ej2_base_1.EventHandler.add(this.element, 'blur', this.focusOut, this);
            ej2_base_1.EventHandler.add(this.element, 'keydown', this.keyDownHandler, this);
            ej2_base_1.EventHandler.add(this.element, 'keypress', this.keyPressHandler, this);
            ej2_base_1.EventHandler.add(this.element, 'change', this.changeHandler, this);
            ej2_base_1.EventHandler.add(this.element, 'paste', this.pasteHandler, this);
        };
        NumericTextBox.prototype.wireSpinBtnEvents = function () {
            ej2_base_1.EventHandler.add(this.spinUp, ej2_base_1.Browser.touchStartEvent, this.mouseDownOnSpinner, this);
            ej2_base_1.EventHandler.add(this.spinDown, ej2_base_1.Browser.touchStartEvent, this.mouseDownOnSpinner, this);
            ej2_base_1.EventHandler.add(this.spinUp, ej2_base_1.Browser.touchEndEvent, this.mouseUpOnSpinner, this);
            ej2_base_1.EventHandler.add(this.spinDown, ej2_base_1.Browser.touchEndEvent, this.mouseUpOnSpinner, this);
            ej2_base_1.EventHandler.add(this.spinUp, ej2_base_1.Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
            ej2_base_1.EventHandler.add(this.spinDown, ej2_base_1.Browser.touchMoveEvent, this.touchMoveOnSpinner, this);
        };
        NumericTextBox.prototype.unwireEvents = function () {
            ej2_base_1.EventHandler.remove(this.element, 'focus', this.focusIn);
            ej2_base_1.EventHandler.remove(this.element, 'blur', this.focusOut);
            ej2_base_1.EventHandler.remove(this.element, 'keydown', this.keyDownHandler);
            ej2_base_1.EventHandler.remove(this.element, 'keypress', this.keyPressHandler);
            ej2_base_1.EventHandler.remove(this.element, 'change', this.changeHandler);
            ej2_base_1.EventHandler.remove(this.element, 'paste', this.pasteHandler);
        };
        NumericTextBox.prototype.unwireSpinBtnEvents = function () {
            ej2_base_1.EventHandler.remove(this.spinUp, ej2_base_1.Browser.touchStartEvent, this.mouseDownOnSpinner);
            ej2_base_1.EventHandler.remove(this.spinDown, ej2_base_1.Browser.touchStartEvent, this.mouseDownOnSpinner);
            ej2_base_1.EventHandler.remove(this.spinUp, ej2_base_1.Browser.touchEndEvent, this.mouseUpOnSpinner);
            ej2_base_1.EventHandler.remove(this.spinDown, ej2_base_1.Browser.touchEndEvent, this.mouseUpOnSpinner);
            ej2_base_1.EventHandler.remove(this.spinUp, ej2_base_1.Browser.touchMoveEvent, this.touchMoveOnSpinner);
            ej2_base_1.EventHandler.remove(this.spinDown, ej2_base_1.Browser.touchMoveEvent, this.touchMoveOnSpinner);
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
                ej2_base_4.merge(eventArgs, this.changeEventArgs);
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
                ej2_base_3.attributes(this.element, { 'aria-valuenow': value });
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
            input_1.Input.setValue(val, (element ? element : this.element), this.floatLabelType);
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
            var numericObject = ej2_base_5.getNumericObject(this.locale);
            var decimalSeparator = ej2_base_4.getValue('decimal', numericObject);
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
            ej2_base_3.removeClass([this.container], ERROR);
            this.prevValue = this.value;
            if ((this.value || this.value === 0)) {
                var formatValue = this.formatNumber();
                this.setElementValue(formatValue);
                if (!this.isPrevFocused) {
                    this.element.setSelectionRange(0, formatValue.length);
                }
            }
            if (!ej2_base_1.Browser.isDevice) {
                ej2_base_1.EventHandler.add(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel, this);
            }
        };
        ;
        NumericTextBox.prototype.focusOut = function (event) {
            var _this = this;
            if (this.isPrevFocused) {
                event.preventDefault();
                if (ej2_base_1.Browser.isDevice) {
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
                if (!ej2_base_1.Browser.isDevice) {
                    ej2_base_1.EventHandler.remove(this.element, 'mousewheel DOMMouseScroll', this.mouseWheel);
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
            ej2_base_1.EventHandler.add(target, 'mouseleave', this.mouseUpClick, this);
            this.timeOut = setInterval(function () { _this.isCalled = true; _this.action(action); }, 150);
            ej2_base_1.EventHandler.add(document, 'mouseup', this.mouseUpClick, this);
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
                if (!ej2_base_1.Browser.isDevice) {
                    this.isPrevFocused = false;
                }
            }
            if (!ej2_base_1.Browser.isDevice) {
                event.preventDefault();
            }
            if (!this.getElementData(event)) {
                return;
            }
            var target = event.currentTarget;
            var action = (target.classList.contains(SPINUP)) ? INCREMENT : DECREMENT;
            ej2_base_1.EventHandler.remove(target, 'mouseleave', this.mouseUpClick);
            if (!this.isCalled) {
                this.action(action);
            }
            this.isCalled = false;
            ej2_base_1.EventHandler.remove(document, 'mouseup', this.mouseUpClick);
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
            ej2_base_1.EventHandler.remove(this.spinUp, 'mouseleave', this.mouseUpClick);
            ej2_base_1.EventHandler.remove(this.spinDown, 'mouseleave', this.mouseUpClick);
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
            ej2_base_3.detach(this.hiddenInput);
            if (this.showSpinButton) {
                this.unwireSpinBtnEvents();
                ej2_base_3.detach(this.spinUp);
                ej2_base_3.detach(this.spinDown);
            }
            this.container.parentElement.appendChild(this.cloneElement);
            ej2_base_3.detach(this.container);
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
                        ej2_base_3.setStyleAttribute(this.container, { 'width': ej2_base_4.formatUnit(newProp.width) });
                        break;
                    case 'cssClass':
                        input_1.Input.setCssClass(newProp.cssClass, [this.container], oldProp.cssClass);
                        break;
                    case 'enabled':
                        input_1.Input.setEnabled(newProp.enabled, this.element);
                        break;
                    case 'enableRtl':
                        input_1.Input.setEnableRtl(newProp.enableRtl, [this.container]);
                        break;
                    case 'readonly':
                        input_1.Input.setReadonly(newProp.readonly, this.element);
                        if (this.readonly) {
                            ej2_base_3.attributes(this.element, { 'aria-readonly': 'true' });
                        }
                        else {
                            this.element.removeAttribute('aria-readonly');
                        }
                        break;
                    case 'placeholder':
                        input_1.Input.setPlaceholder(newProp.placeholder, this.element);
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
                            ej2_base_3.detach(this.spinUp);
                            ej2_base_3.detach(this.spinDown);
                        }
                        break;
                    case 'value':
                        this.updateValue(newProp.value);
                        break;
                    case 'min':
                    case 'max':
                        ej2_base_4.setValue(prop, ej2_base_4.getValue(prop, newProp), this);
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
                        if (!ej2_base_4.isNullOrUndefined(this.spinDown)) {
                            ej2_base_3.attributes(this.spinDown, {
                                'title': this.l10n.getConstant('decrementTitle'),
                                'aria-label': this.l10n.getConstant('decrementTitle')
                            });
                        }
                        if (!ej2_base_4.isNullOrUndefined(this.spinUp)) {
                            ej2_base_3.attributes(this.spinUp, {
                                'title': this.l10n.getConstant('incrementTitle'),
                                'aria-label': this.l10n.getConstant('incrementTitle')
                            });
                        }
                        this.updatePlaceholder();
                        input_1.Input.setPlaceholder(this.placeholder, this.element);
                        this.updateValue(this.value);
                        break;
                    case 'currency':
                        ej2_base_4.setValue(prop, ej2_base_4.getValue(prop, newProp), this.cultureInfo);
                        this.updateValue(this.value);
                        break;
                    case 'format':
                        ej2_base_4.setValue(prop, ej2_base_4.getValue(prop, newProp), this);
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
    }(ej2_base_1.Component));
    __decorate([
        ej2_base_1.Property('')
    ], NumericTextBox.prototype, "cssClass", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], NumericTextBox.prototype, "value", void 0);
    __decorate([
        ej2_base_1.Property(-(Number.MAX_VALUE))
    ], NumericTextBox.prototype, "min", void 0);
    __decorate([
        ej2_base_1.Property(Number.MAX_VALUE)
    ], NumericTextBox.prototype, "max", void 0);
    __decorate([
        ej2_base_1.Property(1)
    ], NumericTextBox.prototype, "step", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], NumericTextBox.prototype, "width", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], NumericTextBox.prototype, "placeholder", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], NumericTextBox.prototype, "showSpinButton", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], NumericTextBox.prototype, "readonly", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], NumericTextBox.prototype, "enabled", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], NumericTextBox.prototype, "enableRtl", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], NumericTextBox.prototype, "enablePersistence", void 0);
    __decorate([
        ej2_base_1.Property('n2')
    ], NumericTextBox.prototype, "format", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], NumericTextBox.prototype, "decimals", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], NumericTextBox.prototype, "currency", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], NumericTextBox.prototype, "strictMode", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], NumericTextBox.prototype, "validateDecimalOnType", void 0);
    __decorate([
        ej2_base_1.Property('Never')
    ], NumericTextBox.prototype, "floatLabelType", void 0);
    __decorate([
        ej2_base_1.Event()
    ], NumericTextBox.prototype, "created", void 0);
    __decorate([
        ej2_base_1.Event()
    ], NumericTextBox.prototype, "destroyed", void 0);
    __decorate([
        ej2_base_1.Event()
    ], NumericTextBox.prototype, "change", void 0);
    NumericTextBox = __decorate([
        ej2_base_2.NotifyPropertyChanges
    ], NumericTextBox);
    exports.NumericTextBox = NumericTextBox;
    exports.numerictextboxHelper = ej2_base_1.CreateBuilder(NumericTextBox);
});
