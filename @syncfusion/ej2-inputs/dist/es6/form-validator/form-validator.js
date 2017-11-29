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
import { selectAll, select, createElement, Base } from '@syncfusion/ej2-base';
import { extend, isNullOrUndefined, EventHandler } from '@syncfusion/ej2-base';
import { Property, NotifyPropertyChanges, Event } from '@syncfusion/ej2-base';
var VALIDATE_EMAIL = new RegExp('^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,5}' +
    '|[.]{1}[a-zA-Z]{2,4}[.]{1}[a-zA-Z]{2,4})$');
var VALIDATE_URL = new RegExp('^((ftp|http|https):\/\/)?www\.([A-z]{2,})\.([A-z]{2,})$');
var VALIDATE_DATE_ISO = new RegExp('^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$');
var VALIDATE_DIGITS = new RegExp('^[0-9]*$');
var VALIDATE_PHONE = new RegExp('^[+]?[0-9]{9,13}$');
var VALIDATE_CREDITCARD = new RegExp('^\\d{13,16}$');
export var ErrorOption;
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
        element = typeof element === 'string' ? select(element, document) : element;
        if (_this.element != null) {
            _this.element.setAttribute('novalidate', '');
            _this.inputElements = selectAll(_this.selectQuery, _this.element);
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
            extend(this.rules[name], rules, {});
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
        else if (!isNullOrUndefined(this.rules[name] && rules)) {
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
        var elements = selectAll(this.selectQuery, this.element);
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
        this.inputElement = (select('[name=' + name + ']', this.element));
        return this.inputElement;
    };
    FormValidator.prototype.destroy = function () {
        this.reset();
        this.unwireEvents();
        this.rules = {};
        var elements = selectAll('.' + this.errorClass + ', .' + this.validClass, this.element);
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
                EventHandler.add(input, 'click', this.clickHandler, this);
            }
            else if (input.tagName === 'SELECT') {
                EventHandler.add(input, 'change', this.changeHandler, this);
            }
            else {
                EventHandler.add(input, 'focusout', this.focusOutHandler, this);
                EventHandler.add(input, 'keyup', this.keyUpHandler, this);
            }
        }
        EventHandler.add(this.element, 'submit', this.submitHandler, this);
        EventHandler.add(this.element, 'reset', this.resetHandler, this);
    };
    FormValidator.prototype.unwireEvents = function () {
        for (var _i = 0, _a = (this.inputElements); _i < _a.length; _i++) {
            var input = _a[_i];
            EventHandler.clearEvents(input);
        }
        EventHandler.remove(this.element, 'submit', this.submitHandler);
        EventHandler.remove(this.element, 'reset', this.resetHandler);
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
            return selectAll('input[name=' + name + ']:checked', this.element).length > 0;
        }
        else {
            return FormValidator_1.checkValidator[rule](args);
        }
    };
    FormValidator.prototype.getErrorMessage = function (ruleValue, rule) {
        var message = (ruleValue instanceof Array && typeof ruleValue[1] === 'string') ? ruleValue[1] : this.defaultMessages[rule];
        var formats = message.match(/{(\d)}/g);
        if (!isNullOrUndefined(formats)) {
            for (var i = 0; i < formats.length; i++) {
                var value = ruleValue instanceof Array ? ruleValue[i] : ruleValue;
                message = message.replace(formats[i], value);
            }
        }
        return message;
    };
    FormValidator.prototype.createErrorElement = function (name, message, input) {
        var errorElement = createElement(this.errorElement, {
            className: this.errorClass,
            innerHTML: message,
            attrs: { for: name }
        });
        if (this.errorOption === ErrorOption.Message) {
            errorElement.classList.remove(this.errorClass);
            errorElement.classList.add('e-message');
            errorElement = createElement(this.errorContainer, { className: this.errorClass, innerHTML: errorElement.outerHTML });
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
        this.infoElement = select(this.errorElement + '.' + this.errorClass, this.inputElement.parentElement);
        if (!this.infoElement) {
            this.infoElement = select(this.errorElement + '.' + this.errorClass + '[for="' + name + '"]');
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
}(Base));
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
    Property('e-hidden')
], FormValidator.prototype, "ignore", void 0);
__decorate([
    Property({})
], FormValidator.prototype, "rules", void 0);
__decorate([
    Property('e-error')
], FormValidator.prototype, "errorClass", void 0);
__decorate([
    Property('e-valid')
], FormValidator.prototype, "validClass", void 0);
__decorate([
    Property('label')
], FormValidator.prototype, "errorElement", void 0);
__decorate([
    Property('div')
], FormValidator.prototype, "errorContainer", void 0);
__decorate([
    Property(ErrorOption.Label)
], FormValidator.prototype, "errorOption", void 0);
__decorate([
    Event()
], FormValidator.prototype, "focusout", void 0);
__decorate([
    Event()
], FormValidator.prototype, "keyup", void 0);
__decorate([
    Event()
], FormValidator.prototype, "click", void 0);
__decorate([
    Event()
], FormValidator.prototype, "change", void 0);
__decorate([
    Event()
], FormValidator.prototype, "submit", void 0);
__decorate([
    Event()
], FormValidator.prototype, "validationBegin", void 0);
__decorate([
    Event()
], FormValidator.prototype, "validationComplete", void 0);
__decorate([
    Event()
], FormValidator.prototype, "customPlacement", void 0);
FormValidator = FormValidator_1 = __decorate([
    NotifyPropertyChanges
], FormValidator);
export { FormValidator };
var FormValidator_1;
