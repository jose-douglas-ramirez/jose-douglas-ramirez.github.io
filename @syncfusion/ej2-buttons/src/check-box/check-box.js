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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base"], function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            if (ej2_base_3.isRippleEnabled) {
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
                ej2_base_3.removeClass([frameSpan], [CHECK, INDETERMINATE]);
                if (rippleSpan) {
                    ej2_base_3.removeClass([rippleSpan], [RIPPLECHECK, RIPPLEINDETERMINATE]);
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
            ej2_base_3.detach(wrapper);
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
                wrapper = ej2_base_3.createElement('div', {
                    className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
                });
                this.element.parentNode.insertBefore(wrapper, this.element);
            }
            var label = ej2_base_3.createElement('label', { attrs: { for: this.element.id } });
            var frameSpan = ej2_base_3.createElement('span', { className: 'e-icons ' + FRAME });
            if (this.enableRtl) {
                wrapper.classList.add(RTL);
            }
            if (this.cssClass) {
                ej2_base_3.addClass([wrapper], this.cssClass.split(' '));
            }
            wrapper.appendChild(label);
            label.appendChild(this.element);
            label.appendChild(frameSpan);
            if (ej2_base_3.isRippleEnabled) {
                var rippleSpan = ej2_base_3.createElement('span', { className: RIPPLE });
                if (this.labelPosition === 'before') {
                    label.appendChild(rippleSpan);
                }
                else {
                    label.insertBefore(rippleSpan, frameSpan);
                }
                ej2_base_3.rippleEffect(rippleSpan, { duration: 400, isCenterRipple: true });
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
                        ej2_base_3.detach(label);
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
                var ejInst = ej2_base_4.getValue('ej2_instances', this.element);
                var input = ej2_base_3.createElement('input', { attrs: { 'type': 'checkbox' } });
                var props = ['change', 'cssClass', 'indeterminate', 'label', 'labelPosition'];
                var wrapper = ej2_base_3.createElement('EJ-CHECKBOX', {
                    className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
                });
                for (var index = 0, len = this.element.attributes.length; index < len; index++) {
                    if (props.indexOf(this.element.attributes[index].nodeName) === -1) {
                        input.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
                    }
                }
                this.element.parentNode.insertBefore(input, this.element);
                ej2_base_3.detach(this.element);
                this.element = input;
                this.element.parentNode.insertBefore(wrapper, this.element);
                wrapper.appendChild(this.element);
                ej2_base_4.setValue('ej2_instances', ejInst, this.element);
            }
            if (this.element.getAttribute('type') !== 'checkbox') {
                this.element.setAttribute('type', 'checkbox');
            }
            if (!this.element.id) {
                this.element.id = ej2_base_4.getUniqueID('e-' + this.getModuleName());
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
                label = ej2_base_3.createElement('span', { className: LABEL, innerHTML: text });
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
            ej2_base_2.EventHandler.remove(this.element, 'click', this.clickHandler);
            this.keyboardModule.destroy();
            ej2_base_2.EventHandler.remove(document, 'keydown', this.keyDownHandler);
            ej2_base_2.EventHandler.remove(wrapper, 'mousedown', this.mouseDownHandler);
            ej2_base_2.EventHandler.remove(this.element, 'focus', this.focusHandler);
            ej2_base_2.EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
            var label = wrapper.getElementsByTagName('label')[0];
            ej2_base_2.EventHandler.remove(label, 'mousedown', this.labelMouseHandler);
            ej2_base_2.EventHandler.remove(label, 'mouseup', this.labelMouseHandler);
        };
        CheckBox.prototype.wireEvents = function () {
            var wrapper = this.getWrapper();
            ej2_base_2.EventHandler.add(this.element, 'click', this.clickHandler, this);
            this.keyboardModule = new ej2_base_2.KeyboardEvents(wrapper, {
                eventName: 'keyup',
                keyAction: this.keyActionHandler.bind(this),
                keyConfigs: { space: 'space' }
            });
            ej2_base_2.EventHandler.add(document, 'keydown', this.keyDownHandler, this);
            ej2_base_2.EventHandler.add(wrapper, 'mousedown', this.mouseDownHandler, this);
            ej2_base_2.EventHandler.add(this.element, 'focus', this.focusHandler, this);
            ej2_base_2.EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
            var label = wrapper.getElementsByTagName('label')[0];
            ej2_base_2.EventHandler.add(label, 'mousedown', this.labelMouseHandler, this);
            ej2_base_2.EventHandler.add(label, 'mouseup', this.labelMouseHandler, this);
        };
        return CheckBox;
    }(ej2_base_1.Component));
    __decorate([
        ej2_base_2.Event()
    ], CheckBox.prototype, "change", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], CheckBox.prototype, "checked", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], CheckBox.prototype, "cssClass", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], CheckBox.prototype, "disabled", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], CheckBox.prototype, "indeterminate", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], CheckBox.prototype, "label", void 0);
    __decorate([
        ej2_base_1.Property('after')
    ], CheckBox.prototype, "labelPosition", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], CheckBox.prototype, "name", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], CheckBox.prototype, "value", void 0);
    CheckBox = __decorate([
        ej2_base_1.NotifyPropertyChanges
    ], CheckBox);
    exports.CheckBox = CheckBox;
    exports.checkBoxBuilder = ej2_base_1.CreateBuilder(CheckBox);
});
