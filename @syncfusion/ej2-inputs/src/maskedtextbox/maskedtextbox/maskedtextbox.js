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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "../../input/input", "../base/index", "../base/index"], function (require, exports, ej2_base_1, ej2_base_2, input_1, index_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ROOT = 'e-widget e-mask';
    var INPUT = 'e-input';
    var MaskedTextBox = (function (_super) {
        __extends(MaskedTextBox, _super);
        function MaskedTextBox(options, element) {
            var _this = _super.call(this, options, element) || this;
            _this.promptMask = '';
            _this.hiddenMask = '';
            _this.escapeMaskValue = '';
            _this.regExpCollec = index_1.regularExpressions;
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
            var ejInstance = ej2_base_2.getValue('ej2_instances', this.element);
            this.cloneElement = this.element.cloneNode(true);
            this.angularTagName = null;
            if (this.element.tagName === 'EJ-MASKEDTEXTBOX') {
                this.angularTagName = this.element.tagName;
                var input = ej2_base_2.createElement('input');
                for (var i = 0; i < this.element.attributes.length; i++) {
                    input.setAttribute(this.element.attributes[i].nodeName, this.element.attributes[i].nodeValue);
                    input.innerHTML = this.element.innerHTML;
                }
                this.element.parentNode.appendChild(input);
                this.element.parentNode.removeChild(this.element);
                this.element = input;
                ej2_base_2.setValue('ej2_instances', ejInstance, this.element);
            }
        };
        MaskedTextBox.prototype.getPersistData = function () {
            var keyEntity = ['value'];
            return this.addOnPersist(keyEntity);
        };
        MaskedTextBox.prototype.render = function () {
            if (this.element.tagName.toLowerCase() === 'input') {
                if (this.floatLabelType === 'Never') {
                    ej2_base_2.addClass([this.element], INPUT);
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
            index_1.createMask.call(this);
            index_1.applyMask.call(this);
            var val = index_1.strippedValue.call(this, this.element);
            this.prevValue = val;
            this.value = val;
            if (!this.isInitial) {
                index_1.unwireEvents.call(this);
            }
            index_1.wireEvents.call(this);
        };
        MaskedTextBox.prototype.setMaskPlaceholder = function (setVal) {
            if (this.placeholder) {
                input_1.Input.setPlaceholder(this.placeholder, this.element);
                if (this.element.value === this.promptMask && setVal && this.floatLabelType !== 'Always') {
                    index_2.setElementValue.call(this, '');
                }
            }
        };
        MaskedTextBox.prototype.setCssClass = function (cssClass, element) {
            if (cssClass) {
                ej2_base_2.addClass(element, cssClass);
            }
        };
        MaskedTextBox.prototype.setWidth = function (width) {
            if (!ej2_base_2.isNullOrUndefined(width)) {
                this.element.style.width = ej2_base_2.formatUnit(width);
            }
        };
        MaskedTextBox.prototype.createWrapper = function () {
            this.inputObj = input_1.Input.createInput({
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
                        index_2.setMaskValue.call(this, this.value);
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
                        input_1.Input.setEnabled(newProp.enabled, this.element);
                        break;
                    case 'enableRtl':
                        input_1.Input.setEnableRtl(newProp.enableRtl, [this.inputObj.container]);
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
                        index_2.setElementValue.call(this, value);
                        break;
                }
            }
        };
        MaskedTextBox.prototype.updateValue = function (strippedVal) {
            this.resetMaskedTextBox();
            index_2.setMaskValue.call(this, strippedVal);
        };
        MaskedTextBox.prototype.getMaskedValue = function () {
            return index_1.unstrippedValue.call(this, this.element);
        };
        MaskedTextBox.prototype.destroy = function () {
            index_1.unwireEvents.call(this);
            this.inputObj.container.parentElement.appendChild(this.cloneElement);
            ej2_base_2.detach(this.inputObj.container);
            _super.prototype.destroy.call(this);
        };
        return MaskedTextBox;
    }(ej2_base_1.Component));
    __decorate([
        ej2_base_1.Property(null)
    ], MaskedTextBox.prototype, "cssClass", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], MaskedTextBox.prototype, "width", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], MaskedTextBox.prototype, "placeholder", void 0);
    __decorate([
        ej2_base_1.Property('Never')
    ], MaskedTextBox.prototype, "floatLabelType", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], MaskedTextBox.prototype, "enabled", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], MaskedTextBox.prototype, "enablePersistence", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], MaskedTextBox.prototype, "enableRtl", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], MaskedTextBox.prototype, "mask", void 0);
    __decorate([
        ej2_base_1.Property('_')
    ], MaskedTextBox.prototype, "promptChar", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], MaskedTextBox.prototype, "value", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], MaskedTextBox.prototype, "customCharacters", void 0);
    __decorate([
        ej2_base_1.Event()
    ], MaskedTextBox.prototype, "created", void 0);
    __decorate([
        ej2_base_1.Event()
    ], MaskedTextBox.prototype, "destroyed", void 0);
    __decorate([
        ej2_base_1.Event()
    ], MaskedTextBox.prototype, "change", void 0);
    MaskedTextBox = __decorate([
        ej2_base_1.NotifyPropertyChanges
    ], MaskedTextBox);
    exports.MaskedTextBox = MaskedTextBox;
});
