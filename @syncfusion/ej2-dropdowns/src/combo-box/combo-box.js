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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "../drop-down-list/drop-down-list", "../drop-down-base/drop-down-base", "../common/incremental-search", "@syncfusion/ej2-popups", "@syncfusion/ej2-inputs"], function (require, exports, ej2_base_1, ej2_base_2, drop_down_list_1, drop_down_base_1, incremental_search_1, ej2_popups_1, ej2_inputs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    drop_down_list_1.dropDownListClasses.root = 'e-combobox';
    var inputObject = {
        container: null,
        buttons: []
    };
    var ComboBox = (function (_super) {
        __extends(ComboBox, _super);
        function ComboBox(options, element) {
            return _super.call(this, options, element) || this;
        }
        ;
        ComboBox.prototype.preRender = function () {
            _super.prototype.preRender.call(this);
        };
        ComboBox.prototype.wireEvent = function () {
            if (this.getModuleName() === 'combobox') {
                ej2_base_1.EventHandler.add(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur, this);
                ej2_base_1.EventHandler.add(this.inputWrapper.container, 'blur', this.onBlur, this);
            }
            if (!ej2_base_2.isNullOrUndefined(this.inputWrapper.buttons[0])) {
                ej2_base_1.EventHandler.add(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick, this);
            }
            ej2_base_1.EventHandler.add(this.inputElement, 'focus', this.targetFocus, this);
            if (!this.readonly) {
                ej2_base_1.EventHandler.add(this.inputElement, 'input', this.onInput, this);
                ej2_base_1.EventHandler.add(this.inputElement, 'keyup', this.onFilterUp, this);
                ej2_base_1.EventHandler.add(this.inputElement, 'keydown', this.onFilterDown, this);
            }
            this.bindCommonEvent();
        };
        ComboBox.prototype.preventBlur = function (e) {
            if ((!this.allowFiltering && document.activeElement !== this.inputElement &&
                !document.activeElement.classList.contains(drop_down_list_1.dropDownListClasses.input) && ej2_base_1.Browser.isDevice || !ej2_base_1.Browser.isDevice)) {
                e.preventDefault();
            }
        };
        ComboBox.prototype.targetElement = function () {
            return this.inputElement;
        };
        ComboBox.prototype.setOldText = function (text) {
            ej2_inputs_1.Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
            this.customValue();
            this.removeSelection();
        };
        ComboBox.prototype.setOldValue = function (value) {
            if (this.allowCustom) {
                this.valueMuteChange(this.value);
            }
            else {
                this.valueMuteChange(null);
            }
            this.removeSelection();
            this.setHiddenValue();
        };
        ComboBox.prototype.valueMuteChange = function (value) {
            var inputValue = ej2_base_2.isNullOrUndefined(value) ? null : value.toString();
            ej2_inputs_1.Input.setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
            this.setProperties({ value: value, text: value, index: null }, true);
            this.activeIndex = this.index;
            var fields = this.fields;
            var dataItem = {};
            dataItem[fields.text] = ej2_base_2.isNullOrUndefined(value) ? null : value.toString();
            dataItem[fields.value] = ej2_base_2.isNullOrUndefined(value) ? null : value.toString();
            this.itemData = dataItem;
            this.item = null;
            if (this.previousValue !== this.value) {
                this.detachChangeEvent(null);
            }
        };
        ComboBox.prototype.updateValues = function () {
            if (!ej2_base_2.isNullOrUndefined(this.value)) {
                var li = this.getElementByValue(this.value);
                if (li) {
                    this.setSelection(li, null);
                }
                else if (this.allowCustom) {
                    this.valueMuteChange(this.value);
                }
                else {
                    this.valueMuteChange(null);
                }
            }
            else if (this.text && ej2_base_2.isNullOrUndefined(this.value)) {
                var li = this.getElementByText(this.text);
                if (li) {
                    this.setSelection(li, null);
                }
                else {
                    ej2_inputs_1.Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
                    this.customValue();
                }
            }
            else {
                this.setSelection(this.liCollections[this.activeIndex], null);
            }
            this.setHiddenValue();
            ej2_inputs_1.Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
        };
        ComboBox.prototype.getAriaAttributes = function () {
            var ariaAttributes = {
                'aria-owns': this.element.id + '_options',
                'role': 'combobox',
                'aria-autocomplete': 'both',
                'aria-labelledby': this.hiddenElement.id,
                'aria-hasPopup': 'true',
                'aria-expanded': 'false',
                'aria-readonly': this.readonly.toString(),
                'autocomplete': 'off',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'spellcheck': 'false'
            };
            return ariaAttributes;
        };
        ComboBox.prototype.searchLists = function (e) {
            this.isTyped = true;
            if (this.isFiltering()) {
                _super.prototype.searchLists.call(this, e);
                if (this.filterInput.value.trim() === '') {
                    this.setHoverList(this.ulElement.querySelector('.' + drop_down_list_1.dropDownListClasses.li));
                }
            }
            else {
                if (this.ulElement && this.inputElement.value === '' && this.preventAutoFill) {
                    this.setHoverList(this.ulElement.querySelector('.' + drop_down_list_1.dropDownListClasses.li));
                }
                this.incrementalSearch(e);
            }
        };
        ComboBox.prototype.getNgDirective = function () {
            return 'EJ-COMBOBOX';
        };
        ComboBox.prototype.setSearchBox = function () {
            this.filterInput = this.inputElement;
            return (this.isFiltering() ? this.inputWrapper : inputObject);
        };
        ComboBox.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
            _super.prototype.onActionComplete.call(this, ulElement, list, e);
            if (this.isSelectCustom) {
                this.removeSelection();
            }
            if (!this.preventAutoFill && this.getModuleName() === 'combobox' && this.isTyped) {
                this.inlineSearch();
            }
        };
        ComboBox.prototype.getFocusElement = function () {
            var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
            var selected = this.list.querySelector('.' + drop_down_list_1.dropDownListClasses.selected);
            var isSelected = dataItem.text === this.inputElement.value && !ej2_base_2.isNullOrUndefined(selected);
            if (isSelected) {
                return selected;
            }
            if ((ej2_base_1.Browser.isDevice && !this.isDropDownClick || !ej2_base_1.Browser.isDevice) &&
                !ej2_base_2.isNullOrUndefined(this.liCollections) && this.liCollections.length > 0) {
                var inputValue = this.inputElement.value;
                var activeItem = incremental_search_1.Search(inputValue, this.liCollections, 'StartsWith', true);
                var activeElement = activeItem.item;
                if (!ej2_base_2.isNullOrUndefined(activeElement)) {
                    var count = this.getIndexByValue(activeElement.getAttribute('data-value')) - 1;
                    var height = parseInt(getComputedStyle(this.liCollections[0], null).getPropertyValue('height'), 10);
                    if (!isNaN(height) && this.getModuleName() !== 'autocomplete') {
                        this.removeFocus();
                        var fixedHead = this.fields.groupBy ? this.liCollections[0].offsetHeight : 0;
                        this.list.scrollTop = count * height + fixedHead;
                        ej2_base_1.addClass([activeElement], drop_down_list_1.dropDownListClasses.focus);
                    }
                }
                else {
                    if (this.isSelectCustom && this.inputElement.value.trim() !== '') {
                        this.removeFocus();
                        this.list.scrollTop = 0;
                    }
                }
                return activeElement;
            }
            else {
                return null;
            }
        };
        ComboBox.prototype.setValue = function (e) {
            if (e && e.type === 'keydown' && e.action === 'enter') {
                this.removeFillSelection();
            }
            if (this.autofill && this.getModuleName() === 'combobox' && e && e.type === 'keydown' && e.action !== 'enter') {
                this.preventAutoFill = false;
                this.inlineSearch(e);
                return false;
            }
            else {
                return _super.prototype.setValue.call(this, e);
            }
        };
        ComboBox.prototype.showSpinner = function () {
            if (ej2_base_2.isNullOrUndefined(this.spinnerElement)) {
                this.spinnerElement = this.inputWrapper.buttons[0] || this.inputWrapper.clearButton;
                ej2_base_1.addClass([this.spinnerElement], drop_down_list_1.dropDownListClasses.disableIcon);
                ej2_popups_1.createSpinner({
                    target: this.spinnerElement,
                    width: drop_down_base_1.SPINNER_SIZE
                });
                ej2_popups_1.showSpinner(this.spinnerElement);
            }
        };
        ComboBox.prototype.hideSpinner = function () {
            if (!ej2_base_2.isNullOrUndefined(this.spinnerElement)) {
                ej2_popups_1.hideSpinner(this.spinnerElement);
                this.spinnerElement.innerHTML = '';
                ej2_base_1.removeClass([this.spinnerElement], drop_down_list_1.dropDownListClasses.disableIcon);
                this.spinnerElement = null;
            }
        };
        ComboBox.prototype.setAutoFill = function (activeElement, isHover) {
            if (!isHover) {
                this.setHoverList(activeElement);
            }
            if (this.autofill && !this.preventAutoFill) {
                var currentValue = this.getTextByValue(activeElement.getAttribute('data-value')).toString();
                var currentFillValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
                if (this.getModuleName() === 'combobox') {
                    if (!this.isSelected && this.previousValue !== currentFillValue) {
                        this.updateSelectedItem(activeElement, null);
                        this.isSelected = true;
                        this.previousValue = this.getFormattedValue(activeElement.getAttribute('data-value'));
                    }
                    else {
                        this.updateSelectedItem(activeElement, null, true);
                    }
                }
                if (!this.isAndroidAutoFill(currentValue)) {
                    this.setAutoFillSelection(currentValue);
                }
            }
        };
        ComboBox.prototype.isAndroidAutoFill = function (value) {
            if (ej2_base_1.Browser.isAndroid) {
                var currentPoints = this.getSelectionPoints();
                var prevEnd = this.prevSelectPoints.end;
                var curEnd = currentPoints.end;
                var prevStart = this.prevSelectPoints.start;
                var curStart = currentPoints.start;
                if (prevEnd !== 0 && ((prevEnd === value.length && prevStart === value.length) ||
                    (prevStart > curStart && prevEnd > curEnd) || (prevEnd === curEnd && prevStart === curStart))) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        };
        ComboBox.prototype.isSelectFocusItem = function (element) {
            return !ej2_base_2.isNullOrUndefined(element);
        };
        ComboBox.prototype.inlineSearch = function (e) {
            var isKeyNavigate = (e && (e.action === 'down' || e.action === 'up' ||
                e.action === 'home' || e.action === 'end' || e.action === 'pageUp' || e.action === 'pageDown'));
            var activeElement = isKeyNavigate ? this.liCollections[this.activeIndex] : this.getFocusElement();
            if (!ej2_base_2.isNullOrUndefined(activeElement)) {
                if (!isKeyNavigate) {
                    var value = this.getFormattedValue(activeElement.getAttribute('data-value'));
                    this.activeIndex = this.getIndexByValue(value);
                    this.activeIndex = !ej2_base_2.isNullOrUndefined(this.activeIndex) ? this.activeIndex : null;
                }
                this.preventAutoFill = this.inputElement.value === '' ? false : this.preventAutoFill;
                this.setAutoFill(activeElement, isKeyNavigate);
            }
            else if (this.inputElement.value === '') {
                this.activeIndex = null;
                this.list.scrollTop = 0;
                var focusItem = this.list.querySelector('.' + drop_down_list_1.dropDownListClasses.li);
                this.setHoverList(focusItem);
            }
            else {
                this.activeIndex = null;
                this.removeSelection();
                this.removeFocus();
            }
        };
        ComboBox.prototype.incrementalSearch = function (e) {
            this.showPopup();
            if (!ej2_base_2.isNullOrUndefined(this.listData)) {
                this.inlineSearch(e);
                e.preventDefault();
            }
        };
        ;
        ComboBox.prototype.setAutoFillSelection = function (currentValue) {
            var selection = this.getSelectionPoints();
            var value = this.inputElement.value.substr(0, selection.start);
            if (value && (value.toLowerCase() === currentValue.substr(0, selection.start).toLowerCase())) {
                var inputValue = value + currentValue.substr(value.length, currentValue.length);
                ej2_inputs_1.Input.setValue(inputValue, this.inputElement, this.floatLabelType, this.showClearButton);
                this.inputElement.setSelectionRange(selection.start, this.inputElement.value.length);
            }
            else {
                ej2_inputs_1.Input.setValue(currentValue, this.inputElement, this.floatLabelType, this.showClearButton);
                this.inputElement.setSelectionRange(0, this.inputElement.value.length);
            }
        };
        ;
        ComboBox.prototype.getValueByText = function (text) {
            return _super.prototype.getValueByText.call(this, text, true);
        };
        ComboBox.prototype.unWireEvent = function () {
            if (this.getModuleName() === 'combobox') {
                ej2_base_1.EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown', this.preventBlur);
                ej2_base_1.EventHandler.remove(this.inputWrapper.container, 'blur', this.onBlur);
            }
            if (!ej2_base_2.isNullOrUndefined(this.inputWrapper.buttons[0])) {
                ej2_base_1.EventHandler.remove(this.inputWrapper.buttons[0], 'mousedown', this.dropDownClick);
            }
            ej2_base_1.EventHandler.remove(this.inputElement, 'focus', this.targetFocus);
            if (!this.readonly) {
                ej2_base_1.EventHandler.remove(this.inputElement, 'input', this.onInput);
                ej2_base_1.EventHandler.remove(this.inputElement, 'keyup', this.onFilterUp);
                ej2_base_1.EventHandler.remove(this.inputElement, 'keydown', this.onFilterDown);
            }
            this.unBindCommonEvent();
        };
        ComboBox.prototype.setSelection = function (li, e) {
            _super.prototype.setSelection.call(this, li, e);
            if (!ej2_base_2.isNullOrUndefined(li) && !this.autofill && !this.isDropDownClick) {
                this.removeFocus();
            }
        };
        ComboBox.prototype.selectCurrentItem = function (e) {
            var li;
            if (this.isPopupOpen) {
                li = this.list.querySelector('.' + drop_down_list_1.dropDownListClasses.focus);
                if (li) {
                    this.setSelection(li, e);
                    this.isTyped = false;
                }
                if (this.isSelected) {
                    this.isSelectCustom = false;
                    this.onChangeEvent(e);
                }
            }
            if (this.isTyped && !this.isSelected && ej2_base_2.isNullOrUndefined(li)) {
                this.customValue();
            }
            this.hidePopup();
        };
        ComboBox.prototype.setHoverList = function (li) {
            this.removeSelection();
            if (this.isValidLI(li) && !li.classList.contains(drop_down_list_1.dropDownListClasses.selected)) {
                this.removeFocus();
                li.classList.add(drop_down_list_1.dropDownListClasses.focus);
            }
        };
        ;
        ComboBox.prototype.targetFocus = function (e) {
            if (ej2_base_1.Browser.isDevice && !this.allowFiltering) {
                this.preventFocus = false;
            }
            this.onFocus();
        };
        ComboBox.prototype.dropDownClick = function (e) {
            if (ej2_base_1.Browser.isDevice && !this.allowFiltering) {
                this.preventFocus = true;
            }
            _super.prototype.dropDownClick.call(this, e);
        };
        ComboBox.prototype.customValue = function () {
            var value = this.getValueByText(this.inputElement.value);
            if (!this.allowCustom && this.inputElement.value !== '') {
                this.setProperties({ value: value });
                if (ej2_base_2.isNullOrUndefined(this.value)) {
                    ej2_inputs_1.Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
                }
            }
            else if (this.inputElement.value.trim() !== '') {
                var previousValue = this.value;
                if (ej2_base_2.isNullOrUndefined(value)) {
                    var value_1 = this.inputElement.value === '' ? null : this.inputElement.value;
                    var fields = this.fields;
                    var eventArgs = void 0;
                    eventArgs = { text: value_1, item: {} };
                    if (!this.initial) {
                        this.trigger('customValueSpecifier', eventArgs);
                    }
                    var item = eventArgs.item;
                    var dataItem = {};
                    if (item && item[fields.text] && item[fields.value]) {
                        dataItem = item;
                    }
                    else {
                        dataItem[fields.text] = value_1;
                        dataItem[fields.value] = value_1;
                    }
                    this.itemData = dataItem;
                    this.setProperties({ text: this.itemData[fields.text], value: this.itemData[fields.value], index: null }, true);
                    this.setSelection(null, null);
                    this.isSelectCustom = true;
                }
                else {
                    this.isSelectCustom = false;
                    this.setProperties({ value: value });
                }
                if (previousValue !== this.value) {
                    this.onChangeEvent(null);
                }
            }
        };
        ComboBox.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'readonly':
                        ej2_inputs_1.Input.setReadonly(this.readonly, this.inputElement);
                        if (this.readonly) {
                            ej2_base_1.EventHandler.remove(this.inputElement, 'keyup', this.onFilterUp);
                            ej2_base_1.EventHandler.remove(this.inputElement, 'keydown', this.onFilterDown);
                        }
                        else {
                            ej2_base_1.EventHandler.add(this.inputElement, 'keyup', this.onFilterUp, this);
                            ej2_base_1.EventHandler.add(this.inputElement, 'keydown', this.onFilterDown, this);
                        }
                        break;
                    case 'allowFiltering':
                        this.setSearchBox();
                        break;
                    case 'allowCustom':
                        break;
                    default:
                        var comboProps = void 0;
                        comboProps = this.getPropObject(prop, newProp, oldProp);
                        _super.prototype.onPropertyChanged.call(this, comboProps.newProperty, comboProps.oldProperty);
                        break;
                }
            }
        };
        ComboBox.prototype.render = function () {
            _super.prototype.render.call(this);
            this.setSearchBox();
            if (this.isFiltering() && this.getModuleName() === 'combobox' && ej2_base_2.isNullOrUndefined(this.list)) {
                _super.prototype.renderList.call(this);
            }
        };
        ;
        ComboBox.prototype.getModuleName = function () {
            return 'combobox';
        };
        ComboBox.prototype.hidePopup = function () {
            if (!ej2_base_2.isNullOrUndefined(this.listData)) {
                var isEscape = this.isEscapeKey;
                if (this.isEscapeKey) {
                    ej2_inputs_1.Input.setValue(this.typedString, this.inputElement, this.floatLabelType, this.showClearButton);
                    this.isEscapeKey = false;
                }
                if (this.autofill) {
                    this.removeFillSelection();
                }
                var dataItem = this.isSelectCustom ? { text: '' } : this.getItemData();
                var selected = this.list.querySelector('.' + drop_down_list_1.dropDownListClasses.selected);
                if (dataItem.text === this.inputElement.value && !ej2_base_2.isNullOrUndefined(selected)) {
                    if (this.isSelected) {
                        this.onChangeEvent(null);
                        this.isSelectCustom = false;
                    }
                    _super.prototype.hidePopup.call(this);
                    return;
                }
                if (this.getModuleName() === 'combobox' && this.inputElement.value.trim() !== '') {
                    var searchItem = incremental_search_1.Search(this.inputElement.value, this.liCollections, 'Equal', true);
                    this.selectedLI = searchItem.item;
                    if (ej2_base_2.isNullOrUndefined(searchItem.index)) {
                        searchItem.index = incremental_search_1.Search(this.inputElement.value, this.liCollections, 'StartsWith', true).index;
                    }
                    this.activeIndex = searchItem.index;
                    if (!ej2_base_2.isNullOrUndefined(this.selectedLI)) {
                        this.updateSelectedItem(this.selectedLI, null, true);
                    }
                    else if (isEscape) {
                        this.isSelectCustom = true;
                        this.removeSelection();
                    }
                }
                if (!this.isEscapeKey && this.isTyped && !this.isInteracted) {
                    this.customValue();
                }
            }
            _super.prototype.hidePopup.call(this);
        };
        ComboBox.prototype.focusIn = function () {
            if (ej2_base_1.Browser.isDevice && !this.allowFiltering) {
                this.preventFocus = true;
            }
            _super.prototype.focusIn.call(this);
        };
        return ComboBox;
    }(drop_down_list_1.DropDownList));
    __decorate([
        ej2_base_1.Property(false)
    ], ComboBox.prototype, "autofill", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], ComboBox.prototype, "allowCustom", void 0);
    __decorate([
        ej2_base_1.Property({})
    ], ComboBox.prototype, "htmlAttributes", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], ComboBox.prototype, "allowFiltering", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], ComboBox.prototype, "query", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], ComboBox.prototype, "showClearButton", void 0);
    __decorate([
        ej2_base_1.Event()
    ], ComboBox.prototype, "customValueSpecifier", void 0);
    __decorate([
        ej2_base_1.Event()
    ], ComboBox.prototype, "filtering", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], ComboBox.prototype, "valueTemplate", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], ComboBox.prototype, "filterBarPlaceholder", void 0);
    ComboBox = __decorate([
        ej2_base_2.NotifyPropertyChanges
    ], ComboBox);
    exports.ComboBox = ComboBox;
});
