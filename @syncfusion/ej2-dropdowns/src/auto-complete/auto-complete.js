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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "../drop-down-list/drop-down-list", "../combo-box/combo-box", "../common/highlight-search", "../common/incremental-search", "../drop-down-base/drop-down-base", "@syncfusion/ej2-popups", "@syncfusion/ej2-inputs", "@syncfusion/ej2-data"], function (require, exports, ej2_base_1, ej2_base_2, drop_down_list_1, combo_box_1, highlight_search_1, incremental_search_1, drop_down_base_1, ej2_popups_1, ej2_inputs_1, ej2_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SPINNER_CLASS = 'e-atc-spinner-icon';
    drop_down_list_1.dropDownListClasses.root = 'e-autocomplete';
    drop_down_list_1.dropDownListClasses.icon = 'e-input-group-icon e-ddl-icon e-search-icon';
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
            var filterQuery = query ? query : this.query ? this.query.clone() : new ej2_data_1.Query();
            if (this.isFiltered) {
                return filterQuery;
            }
            if (this.queryString !== null) {
                var dataType = this.typeOfData(this.dataSource).typeof;
                if (!(this.dataSource instanceof ej2_data_1.DataManager) && dataType === 'string' || dataType === 'number') {
                    filterQuery.where('', this.filterType, this.queryString, this.ignoreCase);
                }
                else {
                    var fields = this.fields;
                    filterQuery.where(!ej2_base_1.isNullOrUndefined(fields.value) ? fields.value : '', this.filterType, this.queryString, this.ignoreCase);
                }
            }
            if (!ej2_base_1.isNullOrUndefined(this.suggestionCount)) {
                filterQuery.take(this.suggestionCount);
            }
            return filterQuery;
        };
        AutoComplete.prototype.searchLists = function (e) {
            var _this = this;
            this.isTyped = true;
            this.isSelectCustom = false;
            if (ej2_base_1.isNullOrUndefined(this.list)) {
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
            if (ej2_base_1.isNullOrUndefined(property) || property !== 'dataSource') {
                _super.prototype.clear.call(this);
            }
            if (this.beforePopupOpen) {
                this.hidePopup();
            }
        };
        AutoComplete.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
            this.fixedHeaderElement = null;
            _super.prototype.onActionComplete.call(this, ulElement, list, e);
            var item = this.list.querySelector('.' + drop_down_list_1.dropDownListClasses.li);
            if (!ej2_base_1.isNullOrUndefined(item)) {
                ej2_base_2.removeClass([item], drop_down_list_1.dropDownListClasses.focus);
            }
            this.postBackAction();
        };
        AutoComplete.prototype.postBackAction = function () {
            if (this.queryString !== null && this.queryString !== '' && this.highlight) {
                highlight_search_1.highlightSearch(this.list, this.queryString, this.ignoreCase, this.filterType);
            }
            if (this.autofill && !ej2_base_1.isNullOrUndefined(this.liCollections[0])) {
                var items = [this.liCollections[0]];
                var searchItem = incremental_search_1.Search(this.inputElement.value, items, 'StartsWith', this.ignoreCase);
                if (!ej2_base_1.isNullOrUndefined(searchItem.item)) {
                    _super.prototype.setAutoFill.call(this, this.liCollections[0], true);
                }
            }
        };
        AutoComplete.prototype.setSelection = function (li, e) {
            if (!this.isValidLI(li)) {
                return;
            }
            if (!ej2_base_1.isNullOrUndefined(e) && e.type === 'keydown' && e.action !== 'enter' && this.isValidLI(li)) {
                var value = this.getFormattedValue(li.getAttribute('data-value'));
                this.activeIndex = this.getIndexByValue(value);
                this.setHoverList(li);
                this.selectedLI = li;
                this.setScrollPosition(e);
                if (this.autofill) {
                    this.preventAutoFill = false;
                    _super.prototype.setAutoFill.call(this, li);
                }
                ej2_base_2.attributes(this.inputElement, { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
            }
            else {
                _super.prototype.setSelection.call(this, li, e);
            }
        };
        AutoComplete.prototype.showSpinner = function () {
            if (ej2_base_1.isNullOrUndefined(this.spinnerElement)) {
                this.spinnerElement = this.inputWrapper.buttons[0] || this.inputWrapper.clearButton ||
                    ej2_inputs_1.Input.appendSpan('e-input-group-icon ' + SPINNER_CLASS, this.inputWrapper.container);
                ej2_base_1.addClass([this.spinnerElement], drop_down_list_1.dropDownListClasses.disableIcon);
                ej2_popups_1.createSpinner({
                    target: this.spinnerElement,
                    width: drop_down_base_1.SPINNER_SIZE
                });
                ej2_popups_1.showSpinner(this.spinnerElement);
            }
        };
        AutoComplete.prototype.hideSpinner = function () {
            if (!ej2_base_1.isNullOrUndefined(this.spinnerElement)) {
                ej2_popups_1.hideSpinner(this.spinnerElement);
                ej2_base_2.removeClass([this.spinnerElement], drop_down_list_1.dropDownListClasses.disableIcon);
                if (this.spinnerElement.classList.contains(SPINNER_CLASS)) {
                    ej2_base_1.detach(this.spinnerElement);
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
                highlight_search_1.highlightSearch(this.list, this.queryString, this.ignoreCase, this.filterType);
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
            if (ej2_base_1.isNullOrUndefined(this.list)) {
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
                            var button = ej2_inputs_1.Input.appendSpan(drop_down_list_1.dropDownListClasses.icon, this.inputWrapper.container);
                            this.inputWrapper.buttons[0] = button;
                            ej2_base_1.EventHandler.add(this.inputWrapper.buttons[0], 'click', this.dropDownClick, this);
                        }
                        else {
                            ej2_base_1.detach(this.inputWrapper.buttons[0]);
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
    }(combo_box_1.ComboBox));
    __decorate([
        ej2_base_1.Property({ value: null, iconCss: null, groupBy: null })
    ], AutoComplete.prototype, "fields", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], AutoComplete.prototype, "ignoreCase", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], AutoComplete.prototype, "showPopupButton", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], AutoComplete.prototype, "highlight", void 0);
    __decorate([
        ej2_base_1.Property(20)
    ], AutoComplete.prototype, "suggestionCount", void 0);
    __decorate([
        ej2_base_1.Property({})
    ], AutoComplete.prototype, "htmlAttributes", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], AutoComplete.prototype, "query", void 0);
    __decorate([
        ej2_base_1.Property(1)
    ], AutoComplete.prototype, "minLength", void 0);
    __decorate([
        ej2_base_1.Property('Contains')
    ], AutoComplete.prototype, "filterType", void 0);
    __decorate([
        ej2_base_1.Event()
    ], AutoComplete.prototype, "filtering", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], AutoComplete.prototype, "index", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], AutoComplete.prototype, "valueTemplate", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], AutoComplete.prototype, "filterBarPlaceholder", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], AutoComplete.prototype, "allowFiltering", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], AutoComplete.prototype, "text", void 0);
    AutoComplete = __decorate([
        ej2_base_2.NotifyPropertyChanges
    ], AutoComplete);
    exports.AutoComplete = AutoComplete;
});
