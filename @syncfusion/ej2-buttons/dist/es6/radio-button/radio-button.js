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
import { Component, CreateBuilder, rippleEffect, NotifyPropertyChanges, Property } from '@syncfusion/ej2-base';
import { Event, EventHandler } from '@syncfusion/ej2-base';
import { addClass, createElement, detach, isRippleEnabled } from '@syncfusion/ej2-base';
import { getUniqueID } from '@syncfusion/ej2-base';
import { wrapperInitialize } from './../common/common';
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
        detach(label);
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
            wrapper = createElement('div', { className: WRAPPER });
            this.element.parentNode.insertBefore(wrapper, this.element);
        }
        var label = createElement('label', { attrs: { for: this.element.id } });
        wrapper.appendChild(this.element);
        wrapper.appendChild(label);
        if (isRippleEnabled) {
            rippleSpan = createElement('span', { className: (RIPPLE) });
            label.appendChild(rippleSpan);
            rippleEffect(rippleSpan, {
                duration: 400,
                isCenterRipple: true
            });
        }
        if (this.enableRtl) {
            label.classList.add(RTL);
        }
        if (this.cssClass) {
            addClass([label], this.cssClass.split(' '));
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
        element = wrapperInitialize('EJ-RADIOBUTTON', 'radio', element, WRAPPER);
        this.element = element;
        if (this.element.getAttribute('type') !== 'radio') {
            this.element.setAttribute('type', 'radio');
        }
        if (!this.element.id) {
            this.element.id = getUniqueID('e-' + this.getModuleName());
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
            textLabel = createElement('span', { className: LABEL, innerHTML: text });
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
        EventHandler.remove(this.element, 'change', this.changeHandler);
        EventHandler.remove(document, 'keydown', this.keyDownHandler);
        EventHandler.remove(label, 'mousedown', this.mouseDownHandler);
        EventHandler.remove(this.element, 'focus', this.focusHandler);
        EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
        var rippleLabel = label.getElementsByClassName(LABEL)[0];
        if (rippleLabel) {
            EventHandler.remove(rippleLabel, 'mousedown', this.labelRippleHandler);
            EventHandler.remove(rippleLabel, 'mouseup', this.labelRippleHandler);
        }
    };
    RadioButton.prototype.wireEvents = function () {
        var label = this.getLabel();
        EventHandler.add(this.element, 'change', this.changeHandler, this);
        EventHandler.add(document, 'keydown', this.keyDownHandler, this);
        EventHandler.add(label, 'mousedown', this.mouseDownHandler, this);
        EventHandler.add(this.element, 'focus', this.focusHandler, this);
        EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
        var rippleLabel = label.getElementsByClassName(LABEL)[0];
        if (rippleLabel) {
            EventHandler.add(rippleLabel, 'mousedown', this.labelRippleHandler, this);
            EventHandler.add(rippleLabel, 'mouseup', this.labelRippleHandler, this);
        }
    };
    return RadioButton;
}(Component));
__decorate([
    Event()
], RadioButton.prototype, "change", void 0);
__decorate([
    Property(false)
], RadioButton.prototype, "checked", void 0);
__decorate([
    Property('')
], RadioButton.prototype, "cssClass", void 0);
__decorate([
    Property(false)
], RadioButton.prototype, "disabled", void 0);
__decorate([
    Property('')
], RadioButton.prototype, "label", void 0);
__decorate([
    Property('after')
], RadioButton.prototype, "labelPosition", void 0);
__decorate([
    Property('')
], RadioButton.prototype, "name", void 0);
__decorate([
    Property('')
], RadioButton.prototype, "value", void 0);
RadioButton = __decorate([
    NotifyPropertyChanges
], RadioButton);
export { RadioButton };
export var radioButtonBuilder = CreateBuilder(RadioButton);
