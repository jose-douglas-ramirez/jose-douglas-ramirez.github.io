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
import { Component, Event, Property, NotifyPropertyChanges } from '@syncfusion/ej2-base';
import { isNullOrUndefined, formatUnit, getValue, setValue, addClass, detach, createElement } from '@syncfusion/ej2-base';
import { Input } from '../../input/input';
import { regularExpressions, createMask, applyMask, wireEvents, unwireEvents, unstrippedValue, strippedValue } from '../base/index';
import { setMaskValue, setElementValue } from '../base/index';
var ROOT = 'e-widget e-mask';
var INPUT = 'e-input';
var MaskedTextBox = (function (_super) {
    __extends(MaskedTextBox, _super);
    function MaskedTextBox(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.promptMask = '';
        _this.hiddenMask = '';
        _this.escapeMaskValue = '';
        _this.regExpCollec = regularExpressions;
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
        var ejInstance = getValue('ej2_instances', this.element);
        this.cloneElement = this.element.cloneNode(true);
        this.angularTagName = null;
        if (this.element.tagName === 'EJ-MASKEDTEXTBOX') {
            this.angularTagName = this.element.tagName;
            var input = createElement('input');
            for (var i = 0; i < this.element.attributes.length; i++) {
                input.setAttribute(this.element.attributes[i].nodeName, this.element.attributes[i].nodeValue);
                input.innerHTML = this.element.innerHTML;
            }
            this.element.parentNode.appendChild(input);
            this.element.parentNode.removeChild(this.element);
            this.element = input;
            setValue('ej2_instances', ejInstance, this.element);
        }
    };
    MaskedTextBox.prototype.getPersistData = function () {
        var keyEntity = ['value'];
        return this.addOnPersist(keyEntity);
    };
    MaskedTextBox.prototype.render = function () {
        if (this.element.tagName.toLowerCase() === 'input') {
            if (this.floatLabelType === 'Never') {
                addClass([this.element], INPUT);
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
        createMask.call(this);
        applyMask.call(this);
        var val = strippedValue.call(this, this.element);
        this.prevValue = val;
        this.value = val;
        if (!this.isInitial) {
            unwireEvents.call(this);
        }
        wireEvents.call(this);
    };
    MaskedTextBox.prototype.setMaskPlaceholder = function (setVal) {
        if (this.placeholder) {
            Input.setPlaceholder(this.placeholder, this.element);
            if (this.element.value === this.promptMask && setVal && this.floatLabelType !== 'Always') {
                setElementValue.call(this, '');
            }
        }
    };
    MaskedTextBox.prototype.setCssClass = function (cssClass, element) {
        if (cssClass) {
            addClass(element, cssClass);
        }
    };
    MaskedTextBox.prototype.setWidth = function (width) {
        if (!isNullOrUndefined(width)) {
            this.element.style.width = formatUnit(width);
        }
    };
    MaskedTextBox.prototype.createWrapper = function () {
        this.inputObj = Input.createInput({
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
                    setMaskValue.call(this, this.value);
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
                    Input.setEnabled(newProp.enabled, this.element);
                    break;
                case 'enableRtl':
                    Input.setEnableRtl(newProp.enableRtl, [this.inputObj.container]);
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
                    setElementValue.call(this, value);
                    break;
            }
        }
    };
    MaskedTextBox.prototype.updateValue = function (strippedVal) {
        this.resetMaskedTextBox();
        setMaskValue.call(this, strippedVal);
    };
    MaskedTextBox.prototype.getMaskedValue = function () {
        return unstrippedValue.call(this, this.element);
    };
    MaskedTextBox.prototype.destroy = function () {
        unwireEvents.call(this);
        this.inputObj.container.parentElement.appendChild(this.cloneElement);
        detach(this.inputObj.container);
        _super.prototype.destroy.call(this);
    };
    return MaskedTextBox;
}(Component));
__decorate([
    Property(null)
], MaskedTextBox.prototype, "cssClass", void 0);
__decorate([
    Property(null)
], MaskedTextBox.prototype, "width", void 0);
__decorate([
    Property(null)
], MaskedTextBox.prototype, "placeholder", void 0);
__decorate([
    Property('Never')
], MaskedTextBox.prototype, "floatLabelType", void 0);
__decorate([
    Property(true)
], MaskedTextBox.prototype, "enabled", void 0);
__decorate([
    Property(false)
], MaskedTextBox.prototype, "enablePersistence", void 0);
__decorate([
    Property(false)
], MaskedTextBox.prototype, "enableRtl", void 0);
__decorate([
    Property(null)
], MaskedTextBox.prototype, "mask", void 0);
__decorate([
    Property('_')
], MaskedTextBox.prototype, "promptChar", void 0);
__decorate([
    Property(null)
], MaskedTextBox.prototype, "value", void 0);
__decorate([
    Property(null)
], MaskedTextBox.prototype, "customCharacters", void 0);
__decorate([
    Event()
], MaskedTextBox.prototype, "created", void 0);
__decorate([
    Event()
], MaskedTextBox.prototype, "destroyed", void 0);
__decorate([
    Event()
], MaskedTextBox.prototype, "change", void 0);
MaskedTextBox = __decorate([
    NotifyPropertyChanges
], MaskedTextBox);
export { MaskedTextBox };
