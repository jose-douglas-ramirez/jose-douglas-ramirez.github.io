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
import { Property, addClass, EventHandler, isNullOrUndefined, detach, Event } from '@syncfusion/ej2-base';
import { removeClass, attributes, NotifyPropertyChanges } from '@syncfusion/ej2-base';
import { dropDownListClasses } from '../drop-down-list/drop-down-list';
import { ComboBox } from '../combo-box/combo-box';
import { highlightSearch } from '../common/highlight-search';
import { Search } from '../common/incremental-search';
import { SPINNER_SIZE } from '../drop-down-base/drop-down-base';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { Input } from '@syncfusion/ej2-inputs';
import { DataManager, Query } from '@syncfusion/ej2-data';
var SPINNER_CLASS = 'e-atc-spinner-icon';
dropDownListClasses.root = 'e-autocomplete';
dropDownListClasses.icon = 'e-input-group-icon e-ddl-icon e-search-icon';
var AutoComplete = (function (_super) {
    __extends(AutoComplete, _super);
    function AutoComplete(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isFiltered = false;
        return _this;
    }
    ;
    AutoComplete.prototype.preRender = function () {
        _super.prototype.preRender.call(this);
    };
    AutoComplete.prototype.getNgDirective = function () {
        return 'EJ-AUTOCOMPLETE';
    };
    AutoComplete.prototype.getQuery = function (query) {
        var filterQuery = query ? query : this.query ? this.query.clone() : new Query();
        if (this.isFiltered) {
            return filterQuery;
        }
        if (this.queryString !== null) {
            var dataType = this.typeOfData(this.dataSource).typeof;
            if (!(this.dataSource instanceof DataManager) && dataType === 'string' || dataType === 'number') {
                filterQuery.where('', this.filterType, this.queryString, this.ignoreCase);
            }
            else {
                var fields = this.fields;
                filterQuery.where(!isNullOrUndefined(fields.value) ? fields.value : '', this.filterType, this.queryString, this.ignoreCase);
            }
        }
        if (!isNullOrUndefined(this.suggestionCount)) {
            filterQuery.take(this.suggestionCount);
        }
        return filterQuery;
    };
    AutoComplete.prototype.searchLists = function (e) {
        var _this = this;
        this.isTyped = true;
        this.isSelectCustom = false;
        if (isNullOrUndefined(this.list)) {
            _super.prototype.renderList.call(this, true);
        }
        var isDownUpKey = e.keyCode === 40 || e.keyCode === 38;
        this.queryString = this.filterInput.value;
        if (isDownUpKey) {
            this.queryString = this.queryString === '' ? null : this.queryString;
            this.beforePopupOpen = true;
            this.resetList(this.dataSource, this.fields);
            return;
        }
        this.isSelected = false;
        this.activeIndex = null;
        var eventArgs = {
            preventDefaultAction: false,
            text: this.filterInput.value,
            updateData: function (dataSource, query, fields) {
                _this.isFiltered = true;
                _this.filterAction(dataSource, query, fields);
            }
        };
        this.trigger('filtering', eventArgs);
        if (!this.isFiltered && !eventArgs.preventDefaultAction) {
            this.filterAction(this.dataSource, null, this.fields);
        }
    };
    AutoComplete.prototype.filterAction = function (dataSource, query, fields) {
        this.beforePopupOpen = true;
        if (this.queryString !== '' && (this.queryString.length >= this.minLength || this.isFiltered)) {
            this.resetList(dataSource, fields, query);
        }
        else {
            this.hidePopup();
        }
    };
    AutoComplete.prototype.clear = function (property) {
        if (isNullOrUndefined(property) || property !== 'dataSource') {
            _super.prototype.clear.call(this);
        }
        if (this.beforePopupOpen) {
            this.hidePopup();
        }
    };
    AutoComplete.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
        this.fixedHeaderElement = null;
        _super.prototype.onActionComplete.call(this, ulElement, list, e);
        var item = this.list.querySelector('.' + dropDownListClasses.li);
        if (!isNullOrUndefined(item)) {
            removeClass([item], dropDownListClasses.focus);
        }
        this.postBackAction();
    };
    AutoComplete.prototype.postBackAction = function () {
        if (this.queryString !== null && this.queryString !== '' && this.highlight) {
            highlightSearch(this.list, this.queryString, this.ignoreCase, this.filterType);
        }
        if (this.autofill && !isNullOrUndefined(this.liCollections[0])) {
            var items = [this.liCollections[0]];
            var searchItem = Search(this.inputElement.value, items, 'StartsWith', this.ignoreCase);
            if (!isNullOrUndefined(searchItem.item)) {
                _super.prototype.setAutoFill.call(this, this.liCollections[0], true);
            }
        }
    };
    AutoComplete.prototype.setSelection = function (li, e) {
        if (!this.isValidLI(li)) {
            return;
        }
        if (!isNullOrUndefined(e) && e.type === 'keydown' && e.action !== 'enter' && this.isValidLI(li)) {
            var value = this.getFormattedValue(li.getAttribute('data-value'));
            this.activeIndex = this.getIndexByValue(value);
            this.setHoverList(li);
            this.selectedLI = li;
            this.setScrollPosition(e);
            if (this.autofill) {
                this.preventAutoFill = false;
                _super.prototype.setAutoFill.call(this, li);
            }
            attributes(this.inputElement, { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
        }
        else {
            _super.prototype.setSelection.call(this, li, e);
        }
    };
    AutoComplete.prototype.showSpinner = function () {
        if (isNullOrUndefined(this.spinnerElement)) {
            this.spinnerElement = this.inputWrapper.buttons[0] || this.inputWrapper.clearButton ||
                Input.appendSpan('e-input-group-icon ' + SPINNER_CLASS, this.inputWrapper.container);
            addClass([this.spinnerElement], dropDownListClasses.disableIcon);
            createSpinner({
                target: this.spinnerElement,
                width: SPINNER_SIZE
            });
            showSpinner(this.spinnerElement);
        }
    };
    AutoComplete.prototype.hideSpinner = function () {
        if (!isNullOrUndefined(this.spinnerElement)) {
            hideSpinner(this.spinnerElement);
            removeClass([this.spinnerElement], dropDownListClasses.disableIcon);
            if (this.spinnerElement.classList.contains(SPINNER_CLASS)) {
                detach(this.spinnerElement);
            }
            else {
                this.spinnerElement.innerHTML = '';
            }
            this.spinnerElement = null;
        }
    };
    AutoComplete.prototype.isFiltering = function () {
        return true;
    };
    AutoComplete.prototype.renderPopup = function () {
        this.list.scrollTop = 0;
        _super.prototype.renderPopup.call(this);
        if (this.highlight) {
            highlightSearch(this.list, this.queryString, this.ignoreCase, this.filterType);
        }
    };
    AutoComplete.prototype.isEditTextBox = function () {
        return true;
    };
    AutoComplete.prototype.isPopupButton = function () {
        return this.showPopupButton;
    };
    AutoComplete.prototype.isSelectFocusItem = function (element) {
        return false;
    };
    AutoComplete.prototype.showPopup = function () {
        if (this.beforePopupOpen) {
            this.refreshPopup();
            return;
        }
        this.beforePopupOpen = true;
        this.preventAutoFill = true;
        if (isNullOrUndefined(this.list)) {
            this.renderList();
        }
        else {
            this.resetList(this.dataSource, this.fields);
        }
    };
    AutoComplete.prototype.hidePopup = function () {
        _super.prototype.hidePopup.call(this);
        this.activeIndex = -1;
    };
    AutoComplete.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'showPopupButton':
                    if (this.showPopupButton) {
                        var button = Input.appendSpan(dropDownListClasses.icon, this.inputWrapper.container);
                        this.inputWrapper.buttons[0] = button;
                        EventHandler.add(this.inputWrapper.buttons[0], 'click', this.dropDownClick, this);
                    }
                    else {
                        detach(this.inputWrapper.buttons[0]);
                        this.inputWrapper.buttons[0] = null;
                    }
                    break;
                default:
                    var atcProps = void 0;
                    atcProps = this.getPropObject(prop, newProp, oldProp);
                    _super.prototype.onPropertyChanged.call(this, atcProps.newProperty, atcProps.oldProperty);
                    break;
            }
        }
    };
    AutoComplete.prototype.getModuleName = function () {
        return 'autocomplete';
    };
    AutoComplete.prototype.render = function () {
        _super.prototype.render.call(this);
    };
    ;
    return AutoComplete;
}(ComboBox));
__decorate([
    Property({ value: null, iconCss: null, groupBy: null })
], AutoComplete.prototype, "fields", void 0);
__decorate([
    Property(true)
], AutoComplete.prototype, "ignoreCase", void 0);
__decorate([
    Property(false)
], AutoComplete.prototype, "showPopupButton", void 0);
__decorate([
    Property(false)
], AutoComplete.prototype, "highlight", void 0);
__decorate([
    Property(20)
], AutoComplete.prototype, "suggestionCount", void 0);
__decorate([
    Property({})
], AutoComplete.prototype, "htmlAttributes", void 0);
__decorate([
    Property(null)
], AutoComplete.prototype, "query", void 0);
__decorate([
    Property(1)
], AutoComplete.prototype, "minLength", void 0);
__decorate([
    Property('Contains')
], AutoComplete.prototype, "filterType", void 0);
__decorate([
    Event()
], AutoComplete.prototype, "filtering", void 0);
__decorate([
    Property(null)
], AutoComplete.prototype, "index", void 0);
__decorate([
    Property(null)
], AutoComplete.prototype, "valueTemplate", void 0);
__decorate([
    Property(null)
], AutoComplete.prototype, "filterBarPlaceholder", void 0);
__decorate([
    Property(false)
], AutoComplete.prototype, "allowFiltering", void 0);
__decorate([
    Property(null)
], AutoComplete.prototype, "text", void 0);
AutoComplete = __decorate([
    NotifyPropertyChanges
], AutoComplete);
export { AutoComplete };
