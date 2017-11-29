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
define(["require", "exports", "../drop-down-base/drop-down-base", "@syncfusion/ej2-popups", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "../common/incremental-search", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-data"], function (require, exports, drop_down_base_1, ej2_popups_1, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, incremental_search_1, ej2_base_5, ej2_base_6, ej2_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FOCUS = 'e-input-focus';
    var DISABLED = 'e-disabled';
    var OVER_ALL_WRAPPER = 'e-multiselect e-input-group';
    var ELEMENT_WRAPPER = 'e-multi-select-wrapper';
    var ELEMENT_MOBILE_WRAPPER = 'e-mob-wrapper';
    var HIDE_LIST = 'e-hide-listitem';
    var DELIMITER_VIEW = 'e-delim-view';
    var CHIP_WRAPPER = 'e-chips-collection';
    var CHIP = 'e-chips';
    var CHIP_CONTENT = 'e-chipcontent';
    var CHIP_CLOSE = 'e-chips-close e-icon';
    var CHIP_SELECTED = 'e-chip-selected';
    var SEARCHBOX_WRAPPER = 'e-searcher';
    var DELIMITER_VIEW_WRAPPER = 'e-delimiter';
    var ZERO_SIZE = 'e-zero-size';
    var REMAIN_WRAPPER = 'e-remain';
    var CLOSEICON_CLASS = 'e-chips-close e-icon e-close-hooker';
    var DELIMITER_WRAPPER = 'e-delim-values';
    var POPUP_WRAPPER = 'e-ddl e-popup e-multi-select-list-wrapper';
    var INPUT_ELEMENT = 'e-dropdownbase';
    var RTL_CLASS = 'e-rtl';
    var CLOSE_ICON_HIDE = 'e-close-icon-hide';
    var MOBILE_CHIP = 'e-mob-chip';
    var FOOTER = 'e-ddl-footer';
    var HEADER = 'e-ddl-header';
    var DISABLE_ICON = 'e-ddl-disable-icon';
    var SPINNER_CLASS = 'e-ms-spinner-icon';
    var MultiSelect = (function (_super) {
        __extends(MultiSelect, _super);
        function MultiSelect(option, element) {
            var _this = _super.call(this, option, element) || this;
            _this.isValidKey = false;
            _this.mainListCollection = [];
            _this.beforePopupOpen = false;
            _this.scrollFocusStatus = false;
            _this.keyDownStatus = false;
            return _this;
        }
        ;
        MultiSelect.prototype.enableRTL = function (state) {
            this.enableRtl = state;
            if (state) {
                this.overAllWrapper.classList.add(RTL_CLASS);
            }
            else {
                this.overAllWrapper.classList.remove(RTL_CLASS);
            }
            if (this.popupObj) {
                this.popupObj.enableRtl = state;
                this.popupObj.dataBind();
            }
        };
        MultiSelect.prototype.updateHTMLAttribute = function () {
            if (Object.keys(this.htmlAttributes).length) {
                for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                    var htmlAttr = _a[_i];
                    switch (htmlAttr) {
                        case 'class':
                            this.overAllWrapper.classList.add(this.htmlAttributes[htmlAttr]);
                            this.popupWrapper.classList.add(this.htmlAttributes[htmlAttr]);
                            break;
                        case 'disabled':
                            this.enable(false);
                            break;
                        case 'placeholder':
                            this.inputElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                            break;
                        case 'name':
                            this.hiddenElement.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                            break;
                        default:
                            var defaultAttr = ['title', 'id', 'required'];
                            if (defaultAttr.indexOf(htmlAttr) > -1) {
                                this.element.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                            }
                            else {
                                this.overAllWrapper.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                            }
                            break;
                    }
                }
            }
        };
        MultiSelect.prototype.updateReadonly = function (state) {
            if (state) {
                this.inputElement.setAttribute('readonly', 'true');
            }
            else {
                this.inputElement.removeAttribute('readonly');
            }
        };
        MultiSelect.prototype.updateClearButton = function (state) {
            if (state) {
                if (this.overAllClear.parentNode) {
                    this.overAllClear.style.display = '';
                }
                else {
                    this.componentWrapper.appendChild(this.overAllClear);
                }
                this.componentWrapper.classList.remove(CLOSE_ICON_HIDE);
            }
            else {
                this.overAllClear.style.display = 'none';
                this.componentWrapper.classList.add(CLOSE_ICON_HIDE);
            }
        };
        MultiSelect.prototype.updateCssClass = function () {
            if (this.cssClass) {
                this.popupWrapper.classList.add(this.cssClass);
                this.overAllWrapper.classList.add(this.cssClass);
            }
        };
        MultiSelect.prototype.onPopupShown = function () {
            var animModel = { name: 'FadeIn', duration: 100 };
            this.focusAtFirstListItem();
            document.body.appendChild(this.popupObj.element);
            this.refreshPopup();
            this.popupObj.show(animModel);
            ej2_base_1.attributes(this.inputElement, { 'aria-expanded': 'true' });
            var eventArgs = { popup: this.popupObj };
            this.refreshListItems(null);
            this.trigger('open', eventArgs);
        };
        MultiSelect.prototype.focusAtFirstListItem = function () {
            if (this.ulElement && this.ulElement.querySelector('li.'
                + drop_down_base_1.dropDownBaseClasses.li)) {
                var element = this.ulElement.querySelector('li.'
                    + drop_down_base_1.dropDownBaseClasses.li + ':not(.'
                    + HIDE_LIST + ')');
                if (element !== null) {
                    this.removeFocus();
                    this.addListFocus(element);
                }
            }
        };
        MultiSelect.prototype.focusAtLastListItem = function (data) {
            var activeElement;
            if (data) {
                activeElement = incremental_search_1.Search(data, this.liCollections, 'StartsWith', this.ignoreCase);
            }
            else {
                if (this.value && this.value.length) {
                    incremental_search_1.Search(this.value[this.value.length - 1], this.liCollections, 'StartsWith', this.ignoreCase);
                }
                else {
                    activeElement = null;
                }
            }
            if (activeElement && activeElement.item !== null) {
                this.addListFocus(activeElement.item);
                this.scrollBottom(activeElement.item, activeElement.index);
            }
        };
        MultiSelect.prototype.getAriaAttributes = function () {
            var ariaAttributes = {
                'aria-disabled': 'false',
                'aria-owns': this.element.id + '_options',
                'role': 'listbox',
                'aria-multiselectable': 'true',
                'aria-activedescendant': 'null',
                'aria-haspopup': 'true',
                'aria-expanded': 'false'
            };
            return ariaAttributes;
        };
        MultiSelect.prototype.updateListARIA = function () {
            ej2_base_1.attributes(this.ulElement, { 'id': this.element.id + '_options', 'role': 'listbox', 'aria-hidden': 'false' });
            ej2_base_1.attributes(this.inputElement, this.getAriaAttributes());
            var li;
            li = this.list.querySelectorAll('li.' + drop_down_base_1.dropDownBaseClasses.li);
            var temp = li.length;
            if (li && li.length) {
                while (temp > 0) {
                    if (li[temp - 1].getAttribute('aria-selected') !== 'true') {
                        li[temp - 1].setAttribute('aria-selected', 'false');
                    }
                    temp--;
                }
            }
        };
        MultiSelect.prototype.removelastSelection = function (e) {
            var elements;
            elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
            var value = elements[elements.length - 1].getAttribute('data-value');
            this.removeValue(value, e);
            this.removeChipSelection();
            this.updateDelimeter(e);
            this.makeTextBoxEmpty();
            if (this.allowFiltering && this.mainList && this.listData) {
                var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
                this.onActionComplete(list, this.mainData);
                this.refreshSelection();
            }
            this.focusAtLastListItem(value);
        };
        MultiSelect.prototype.onActionFailure = function (e) {
            _super.prototype.onActionFailure.call(this, e);
            this.renderPopup();
            this.onPopupShown();
        };
        MultiSelect.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
            _super.prototype.onActionComplete.call(this, ulElement, list, e);
            if (!this.mainList && !this.mainData) {
                this.mainList = ulElement.cloneNode ? ulElement.cloneNode(true) : ulElement;
                this.mainData = list;
                this.mainListCollection = this.liCollections;
            }
            if (this.remoteCustomValue && this.allowCustomValue && this.inputFocus) {
                this.checkForCustomValue(this.tempQuery, this.fields);
                return;
            }
            if (this.value && this.value.length) {
                this.refreshSelection();
            }
            this.updateListARIA();
            this.unwireListEvents();
            this.wireListEvents();
            if (!ej2_base_6.isNullOrUndefined(this.setInitialValue)) {
                this.setInitialValue();
            }
            if (!ej2_base_6.isNullOrUndefined(this.selectAllAction)) {
                this.selectAllAction();
            }
            this.renderPopup();
            this.refreshPopup();
            if (this.beforePopupOpen) {
                this.beforePopupOpen = false;
                this.onPopupShown();
            }
        };
        MultiSelect.prototype.refreshSelection = function () {
            var value;
            var element;
            var className = this.hideSelectedItem ?
                HIDE_LIST :
                drop_down_base_1.dropDownBaseClasses.selected;
            for (var index = 0; this.value[index]; index++) {
                value = this.value[index];
                element = this.ulElement.querySelector('li[data-value="' + value + '"]');
                if (element) {
                    ej2_base_5.addClass([element], className);
                }
            }
        };
        MultiSelect.prototype.KeyUp = function (e) {
            this.isValidKey = e.keyCode === 8 || this.isValidKey;
            if (this.isValidKey) {
                this.isValidKey = false;
                this.expandTextbox();
                switch (e.keyCode) {
                    default:
                        if (!this.isPopupOpen()) {
                            this.showPopup();
                        }
                        if (this.liCollections) {
                            if (this.checkTextLength() && !this.allowFiltering && (e.keyCode !== 8)) {
                                this.focusAtFirstListItem();
                            }
                            else {
                                var text = this.inputElement.value;
                                this.keyCode = e.keyCode;
                                if (this.allowFiltering) {
                                    this.trigger('filtering', {
                                        text: this.inputElement.value,
                                        updateData: this.dataUpdater.bind(this),
                                        event: e
                                    });
                                }
                                else if (this.allowCustomValue) {
                                    var query = new ej2_data_1.Query();
                                    query = (text !== '') ? query.where(this.fields.text, 'startswith', text, true) : query;
                                    this.dataUpdater(this.mainData, query, this.fields);
                                    break;
                                }
                                else {
                                    var liCollections = void 0;
                                    liCollections = this.list.querySelectorAll('li.' + drop_down_base_1.dropDownBaseClasses.li);
                                    var activeElement = incremental_search_1.Search(this.inputElement.value, liCollections, 'StartsWith', this.ignoreCase);
                                    if (activeElement && activeElement.item !== null) {
                                        this.addListFocus(activeElement.item);
                                        this.list.scrollTop =
                                            activeElement.item.getBoundingClientRect().height * activeElement.index;
                                    }
                                }
                            }
                        }
                }
            }
        };
        MultiSelect.prototype.dataUpdater = function (dataSource, query, fields) {
            if (this.inputElement.value.trim() === '') {
                var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
                this.onActionComplete(list, this.mainData);
                if (this.value && this.value.length) {
                    this.refreshSelection();
                }
                if (this.keyCode !== 8) {
                    this.focusAtFirstListItem();
                }
            }
            else {
                this.resetList(dataSource, fields, query);
                if (this.allowCustomValue) {
                    if (!(dataSource instanceof ej2_data_1.DataManager)) {
                        this.checkForCustomValue(query, fields);
                    }
                    else {
                        this.remoteCustomValue = true;
                        this.tempQuery = query;
                    }
                }
            }
            this.refreshPopup();
        };
        MultiSelect.prototype.checkForCustomValue = function (query, fields) {
            var dataChecks = !this.getValueByText(this.inputElement.value, this.ignoreCase);
            if (this.allowCustomValue && dataChecks) {
                var text = this.fields.text;
                var value = this.fields.value;
                var data = {};
                data[value] = data[text] = this.inputElement.value;
                var tempData = JSON.parse(JSON.stringify(this.listData));
                tempData.splice(0, 0, data);
                this.resetList(tempData, fields ? fields : this.fields, query);
            }
            if (this.value && this.value.length) {
                this.refreshSelection();
            }
        };
        MultiSelect.prototype.getNgDirective = function () {
            return 'EJ-MULTISELECT';
        };
        MultiSelect.prototype.wrapperClick = function (e) {
            if (this.readonly || !this.enabled) {
                return;
            }
            if (e.target === this.overAllClear) {
                e.preventDefault();
                return;
            }
            if (!this.inputFocus) {
                this.inputElement.focus();
            }
            if (e.target && e.target.classList.toString().indexOf(CHIP_CLOSE) !== -1) {
                if (this.isPopupOpen()) {
                    this.refreshPopup();
                }
                return;
            }
            if (!this.isPopupOpen()) {
                this.showPopup();
            }
            else {
                this.hidePopup();
            }
            e.preventDefault();
        };
        MultiSelect.prototype.enable = function (state) {
            if (state) {
                this.overAllWrapper.classList.remove(DISABLED);
                this.inputElement.removeAttribute('disabled');
                ej2_base_1.attributes(this.inputElement, { 'aria-disabled': 'false' });
            }
            else {
                this.overAllWrapper.classList.add(DISABLED);
                this.inputElement.setAttribute('disabled', 'true');
                ej2_base_1.attributes(this.inputElement, { 'aria-disabled': 'true' });
            }
            if (this.enabled !== state) {
                this.enabled = state;
            }
            this.hidePopup();
        };
        MultiSelect.prototype.onBlur = function (eve) {
            var target = !ej2_base_6.isNullOrUndefined(eve) && eve.relatedTarget;
            if (document.body.contains(this.popupObj.element) && this.popupObj.element.contains(target)) {
                this.inputElement.focus();
                return;
            }
            if (this.scrollFocusStatus) {
                eve.preventDefault();
                this.inputElement.focus();
                this.scrollFocusStatus = false;
                return;
            }
            this.inputFocus = false;
            this.overAllWrapper.classList.remove(FOCUS);
            if (this.mode !== 'box') {
                this.refreshListItems(null);
                this.updateDelimView();
            }
            this.updateValueState(eve, this.value, this.tempValues);
            this.dispatchEvent(this.hiddenElement, 'change');
            this.overAllClear.style.display = 'none';
            if (this.isPopupOpen()) {
                this.hidePopup();
                this.makeTextBoxEmpty();
            }
            this.trigger('blur');
            if (ej2_base_4.Browser.isDevice && this.mode !== 'delimiter') {
                this.removeChipFocus();
            }
            this.removeChipSelection();
            this.refreshInputHight();
            this.refreshPlaceHolder();
        };
        MultiSelect.prototype.refreshInputHight = function () {
            if (!this.value || !this.value.length) {
                this.searchWrapper.classList.remove(ZERO_SIZE);
            }
            else {
                this.searchWrapper.classList.add(ZERO_SIZE);
            }
        };
        MultiSelect.prototype.validateValues = function (newValue, oldValue) {
            return JSON.stringify(newValue.slice().sort()) !== JSON.stringify(oldValue.slice().sort());
        };
        MultiSelect.prototype.updateValueState = function (event, newVal, oldVal) {
            var newValue = newVal ? newVal : [];
            var oldValue = oldVal ? oldVal : [];
            if (this.validateValues(newValue, oldValue)) {
                var eventArgs = {
                    e: event,
                    oldValue: oldVal,
                    value: newVal,
                    isInteracted: event ? true : false
                };
                this.trigger('change', eventArgs);
            }
        };
        MultiSelect.prototype.getPagingCount = function () {
            var height = this.list.classList.contains(drop_down_base_1.dropDownBaseClasses.noData) ? null :
                getComputedStyle(this.getItems()[0], null).getPropertyValue('height');
            return Math.round(this.list.getBoundingClientRect().height / parseInt(height, 10));
        };
        MultiSelect.prototype.pageUpSelection = function (steps) {
            var previousItem = steps >= 0 ? this.liCollections[steps + 1] : this.liCollections[0];
            this.addListFocus(previousItem);
            this.scrollBottom(previousItem, this.getIndexByValue(previousItem.getAttribute('data-value')));
        };
        ;
        MultiSelect.prototype.pageDownSelection = function (steps) {
            var list = this.getItems();
            var previousItem = steps <= list.length ? this.liCollections[steps - 1] : this.liCollections[list.length - 1];
            this.addListFocus(previousItem);
            this.scrollBottom(previousItem, this.getIndexByValue(previousItem.getAttribute('data-value')));
        };
        MultiSelect.prototype.focusIn = function () {
            if (this.enabled && !this.readonly) {
                this.inputFocus = true;
                if (!this.value) {
                    this.tempValues = this.value;
                }
                else {
                    this.tempValues = this.value.slice();
                }
                if (this.value && this.value.length) {
                    if (this.mode !== 'delimiter') {
                        this.chipCollectionWrapper.style.display = '';
                    }
                    else {
                        this.showDelimWrapper();
                    }
                    this.viewWrapper.style.display = 'none';
                }
                this.searchWrapper.classList.remove(ZERO_SIZE);
                this.trigger('focus');
                if (!this.overAllWrapper.classList.contains(FOCUS)) {
                    this.overAllWrapper.classList.add(FOCUS);
                }
                if (this.isPopupOpen()) {
                    this.refreshPopup();
                }
                return true;
            }
            else {
                return false;
            }
        };
        MultiSelect.prototype.showDelimWrapper = function () {
            this.delimiterWrapper.style.display = '';
            this.componentWrapper.classList.add(DELIMITER_VIEW_WRAPPER);
        };
        MultiSelect.prototype.hideDelimWrapper = function () {
            this.delimiterWrapper.style.display = 'none';
            this.componentWrapper.classList.remove(DELIMITER_VIEW_WRAPPER);
        };
        MultiSelect.prototype.expandTextbox = function () {
            var size = 5;
            if (this.placeholder) {
                size = size > this.inputElement.placeholder.length ? size : this.inputElement.placeholder.length;
            }
            if (this.inputElement.value.length > size) {
                this.inputElement.size = this.inputElement.value.length;
            }
            else {
                this.inputElement.size = size;
            }
        };
        MultiSelect.prototype.isPopupOpen = function () {
            return ((this.popupWrapper !== null) && (this.popupWrapper.parentElement !== null));
        };
        MultiSelect.prototype.refreshPopup = function () {
            if (this.popupObj) {
                this.popupObj.setProperties({ width: this.calcPopupWidth() });
                this.popupObj.refreshPosition();
                this.popupObj.show();
            }
        };
        MultiSelect.prototype.checkTextLength = function () {
            return this.inputElement.value.length < 1;
        };
        MultiSelect.prototype.popupKeyActions = function (keyCode) {
            switch (keyCode) {
                case 38:
                    this.hidePopup();
                    break;
                case 40:
                    if (!this.isPopupOpen()) {
                        this.showPopup();
                    }
                    break;
            }
        };
        MultiSelect.prototype.updateAriaAttribute = function () {
            var focusedItem = this.list.querySelector('.' + drop_down_base_1.dropDownBaseClasses.focus);
            if (!ej2_base_6.isNullOrUndefined(focusedItem)) {
                this.inputElement.setAttribute('aria-activedescendant', focusedItem.id);
            }
        };
        MultiSelect.prototype.onKeyDown = function (e) {
            this.keyDownStatus = true;
            if (e.keyCode > 111 && e.keyCode < 124) {
                return;
            }
            if (e.altKey) {
                this.popupKeyActions(e.keyCode);
                e.preventDefault();
                return;
            }
            else if (this.isPopupOpen()) {
                var focusedItem = this.list.querySelector('.' + drop_down_base_1.dropDownBaseClasses.focus);
                var activeIndex = void 0;
                switch (e.keyCode) {
                    case 36:
                        this.moveByTop(true);
                        break;
                    case 35:
                        this.moveByTop(false);
                        break;
                    case 33:
                        e.preventDefault();
                        if (focusedItem) {
                            this.getIndexByValue(focusedItem.getAttribute('data-value'));
                            this.pageUpSelection(activeIndex - this.getPagingCount());
                            this.updateAriaAttribute();
                        }
                        return;
                    case 34:
                        e.preventDefault();
                        if (focusedItem) {
                            this.getIndexByValue(focusedItem.getAttribute('data-value'));
                            this.pageDownSelection(activeIndex + this.getPagingCount());
                            this.updateAriaAttribute();
                        }
                        return;
                    case 38:
                        e.preventDefault();
                        this.moveByList(-1);
                        this.updateAriaAttribute();
                        break;
                    case 40:
                        e.preventDefault();
                        this.moveByList(1);
                        this.updateAriaAttribute();
                        break;
                    case 27:
                        e.preventDefault();
                        this.hidePopup();
                        return;
                    case 13:
                        e.preventDefault();
                        this.selectByKey(e);
                        return;
                }
            }
            else {
                switch (e.keyCode) {
                    case 13:
                    case 9:
                    case 16:
                    case 17:
                    case 20:
                        return;
                    case 40:
                        this.showPopup();
                        break;
                    case 27:
                        e.preventDefault();
                        this.escapeAction();
                        return;
                }
            }
            if (this.checkTextLength()) {
                if ((this.mode !== 'delimiter') && this.value && this.value.length) {
                    switch (e.keyCode) {
                        case 37:
                            e.preventDefault();
                            this.moveBy(-1);
                            break;
                        case 39:
                            e.preventDefault();
                            this.moveBy(1);
                            break;
                        case 8:
                            this.removelastSelection(e);
                            break;
                        case 46:
                            this.removeSelectedChip(e);
                            break;
                    }
                }
                else if (e.keyCode === 8 && this.mode === 'delimiter') {
                    if (this.value && this.value.length) {
                        e.preventDefault();
                        var temp = this.value[this.value.length - 1];
                        this.removeValue(temp, e);
                        this.updateDelimeter(e);
                        this.focusAtLastListItem(temp);
                    }
                }
            }
            this.expandTextbox();
            this.refreshPopup();
        };
        MultiSelect.prototype.selectByKey = function (e) {
            this.removeChipSelection();
            this.selectListByKey(e);
            if (this.hideSelectedItem) {
                this.focusAtFirstListItem();
            }
        };
        MultiSelect.prototype.escapeAction = function () {
            var temp = this.tempValues ? this.tempValues.slice() : [];
            if (this.value && this.validateValues(this.value, temp)) {
                this.value = temp;
                this.initialValueUpdate();
                if (this.mode !== 'delimiter') {
                    this.chipCollectionWrapper.style.display = '';
                }
                else {
                    this.showDelimWrapper();
                }
                this.refreshPlaceHolder();
                if (this.value.length) {
                    this.showOverAllClear();
                }
                else {
                    this.hideOverAllClear();
                }
            }
            this.makeTextBoxEmpty();
        };
        MultiSelect.prototype.scrollBottom = function (selectedLI, activeIndex) {
            var currentOffset = this.list.getBoundingClientRect().height;
            var nextBottom = selectedLI.offsetTop + selectedLI.getBoundingClientRect().height - this.list.scrollTop;
            var nextOffset = this.list.scrollTop + nextBottom - currentOffset;
            var boxRange = (selectedLI.offsetTop + selectedLI.getBoundingClientRect().height - this.list.scrollTop);
            boxRange = this.fields.groupBy && !ej2_base_6.isUndefined(this.fixedHeaderElement) ?
                boxRange - this.fixedHeaderElement.getBoundingClientRect().height : boxRange;
            if (activeIndex === 0) {
                this.list.scrollTop = 0;
            }
            else if (nextBottom > currentOffset) {
                this.list.scrollTop = nextOffset;
            }
            else if (!(boxRange > 0 && this.list.getBoundingClientRect().height > boxRange)) {
                this.list.scrollTop = nextOffset;
            }
        };
        MultiSelect.prototype.scrollTop = function (selectedLI, activeIndex) {
            var nextOffset = selectedLI.offsetTop - this.list.scrollTop;
            var nextBottom = selectedLI.offsetTop + selectedLI.getBoundingClientRect().height - this.list.scrollTop;
            nextOffset = this.fields.groupBy && !ej2_base_6.isUndefined(this.fixedHeaderElement) ?
                nextOffset - this.fixedHeaderElement.getBoundingClientRect().height : nextOffset;
            var boxRange = (selectedLI.offsetTop + selectedLI.getBoundingClientRect().height - this.list.scrollTop);
            if (activeIndex === 0) {
                this.list.scrollTop = 0;
            }
            else if (nextOffset < 0) {
                this.list.scrollTop = this.list.scrollTop + nextOffset;
            }
            else if (!(boxRange > 0 && this.list.getBoundingClientRect().height > boxRange)) {
                this.list.scrollTop = selectedLI.offsetTop - (this.fields.groupBy && !ej2_base_6.isUndefined(this.fixedHeaderElement) ?
                    this.fixedHeaderElement.getBoundingClientRect().height : 0);
            }
        };
        MultiSelect.prototype.selectListByKey = function (e) {
            var li = this.list.querySelector('li.' + drop_down_base_1.dropDownBaseClasses.focus);
            var limit = this.value && this.value.length ? this.value.length : 0;
            if (li !== null) {
                if (this.isValidLI(li) && limit < this.maximumSelectionLength) {
                    this.updateListSelection(li, e);
                    this.addListFocus(li);
                    this.updateDelimeter(e);
                    this.makeTextBoxEmpty();
                    this.refreshListItems(li.getAttribute('data-Value'));
                    this.refreshPopup();
                    if (this.value && this.value.length) {
                        this.removeListSelection();
                        this.refreshSelection();
                    }
                }
                if (this.closePopupOnSelect) {
                    this.hidePopup();
                }
            }
            this.refreshPlaceHolder();
        };
        MultiSelect.prototype.refreshListItems = function (data) {
            if ((this.allowFiltering || this.allowCustomValue) && this.mainList && this.listData) {
                var list = this.mainList.cloneNode ? this.mainList.cloneNode(true) : this.mainList;
                this.onActionComplete(list, this.mainData);
                this.focusAtLastListItem(data);
                if (this.value && this.value.length) {
                    this.refreshSelection();
                }
            }
        };
        MultiSelect.prototype.removeSelectedChip = function (e) {
            var selectedElem = this.chipCollectionWrapper.querySelector('span.' + CHIP_SELECTED);
            var temp;
            if (selectedElem !== null) {
                temp = selectedElem.nextElementSibling;
                if (temp !== null) {
                    this.removeChipSelection();
                    this.addChipSelection(temp);
                }
                this.removeValue(selectedElem.getAttribute('data-value'), e);
                this.makeTextBoxEmpty();
            }
            if (this.closePopupOnSelect) {
                this.hidePopup();
            }
        };
        MultiSelect.prototype.moveByTop = function (state) {
            var elements = this.list.querySelectorAll('li.' + drop_down_base_1.dropDownBaseClasses.li);
            var index;
            if (elements.length > 1) {
                this.removeFocus();
                index = state ? 0 : (elements.length - 1);
                this.addListFocus(elements[index]);
                this.scrollBottom(elements[index], index);
            }
            this.updateAriaAttribute();
        };
        MultiSelect.prototype.moveByList = function (position) {
            if (this.list) {
                var elements = this.list.querySelectorAll('li.'
                    + drop_down_base_1.dropDownBaseClasses.li
                    + ':not(.' + HIDE_LIST + ')');
                var selectedElem = this.list.querySelector('li.' + drop_down_base_1.dropDownBaseClasses.focus);
                var temp = -1;
                if (elements.length) {
                    for (var index = 0; index < elements.length; index++) {
                        if (elements[index] === selectedElem) {
                            temp = index;
                            break;
                        }
                    }
                    if (position > 0) {
                        if (temp < (elements.length - 1)) {
                            this.removeFocus();
                            this.addListFocus(elements[++temp]);
                            this.scrollBottom(elements[temp], temp);
                        }
                    }
                    else {
                        if (temp > 0) {
                            this.removeFocus();
                            this.addListFocus(elements[--temp]);
                            this.scrollTop(elements[temp], temp);
                        }
                    }
                }
            }
        };
        MultiSelect.prototype.moveBy = function (position) {
            var elements;
            var selectedElem;
            var temp;
            elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
            selectedElem = this.chipCollectionWrapper.querySelector('span.' + CHIP_SELECTED);
            if (selectedElem === null) {
                if (position < 0) {
                    this.addChipSelection(elements[elements.length - 1]);
                }
            }
            else {
                if (position < 0) {
                    temp = selectedElem.previousElementSibling;
                    if (temp !== null) {
                        this.removeChipSelection();
                        this.addChipSelection(temp);
                    }
                }
                else {
                    temp = selectedElem.nextElementSibling;
                    this.removeChipSelection();
                    if (temp !== null) {
                        this.addChipSelection(temp);
                    }
                }
            }
        };
        MultiSelect.prototype.chipClick = function (e) {
            if (this.enabled) {
                var elem = ej2_base_5.closest(e.target, '.' + CHIP);
                this.removeChipSelection();
                this.addChipSelection(elem);
            }
        };
        MultiSelect.prototype.removeChipSelection = function () {
            if (this.chipCollectionWrapper) {
                this.removeChipFocus();
            }
        };
        MultiSelect.prototype.addChipSelection = function (element) {
            ej2_base_5.addClass([element], CHIP_SELECTED);
        };
        MultiSelect.prototype.onChipRemove = function (e) {
            if (this.enabled && !this.readonly) {
                var element = e.target.parentElement;
                var value = this.getFormattedValue(element.getAttribute('data-value'));
                if (this.isPopupOpen()) {
                    this.hidePopup();
                }
                this.removeValue(value, e);
                this.updateDelimeter(e);
                this.makeTextBoxEmpty();
                if (!this.inputFocus) {
                    this.inputElement.focus();
                }
                e.preventDefault();
            }
        };
        MultiSelect.prototype.makeTextBoxEmpty = function () {
            this.inputElement.value = '';
            this.refreshPlaceHolder();
        };
        MultiSelect.prototype.refreshPlaceHolder = function () {
            if (this.placeholder) {
                if (this.value && this.value.length) {
                    this.inputElement.placeholder = '';
                }
                else {
                    this.inputElement.placeholder = this.placeholder;
                }
            }
            this.expandTextbox();
        };
        MultiSelect.prototype.removeValue = function (value, eve) {
            var index = this.value.indexOf(this.getFormattedValue(value));
            var className = this.hideSelectedItem ?
                HIDE_LIST :
                drop_down_base_1.dropDownBaseClasses.selected;
            if (index !== -1) {
                var element = this.list.querySelector('li[data-value="' + value + '"]');
                var eventArgs = {
                    e: eve,
                    item: element,
                    itemData: this.getDataByValue(value),
                    isInteracted: eve ? true : false
                };
                this.trigger('removing', eventArgs);
                this.value.splice(index, 1);
                this.setProperties({ value: [].concat([], this.value) }, true);
                if (element !== null) {
                    element.setAttribute('aria-selected', 'false');
                    ej2_base_5.removeClass([element], className);
                    ej2_base_1.attributes(this.inputElement, { 'aria-activedescendant': element.id });
                }
                this.updateMainList(true, value);
                this.removeChip(value);
                this.updateChipStatus();
                this.trigger('removed', eventArgs);
            }
        };
        MultiSelect.prototype.updateMainList = function (state, value) {
            if (this.allowFiltering) {
                var element2 = this.mainList.querySelector('li[data-value="' + value + '"]');
                if (element2) {
                    if (state) {
                        element2.setAttribute('aria-selected', 'false');
                        ej2_base_5.removeClass([element2], this.hideSelectedItem ?
                            HIDE_LIST :
                            drop_down_base_1.dropDownBaseClasses.selected);
                    }
                    else {
                        element2.setAttribute('aria-selected', 'true');
                        ej2_base_5.addClass([element2], this.hideSelectedItem ?
                            HIDE_LIST :
                            drop_down_base_1.dropDownBaseClasses.selected);
                    }
                }
            }
        };
        MultiSelect.prototype.removeChip = function (value) {
            if (this.chipCollectionWrapper) {
                var element = this.chipCollectionWrapper.querySelector('span[data-value="' + value + '"]');
                if (element) {
                    ej2_base_5.remove(element);
                }
            }
        };
        MultiSelect.prototype.updateChipStatus = function () {
            if (this.value.length) {
                if (!ej2_base_6.isNullOrUndefined(this.chipCollectionWrapper)) {
                    (this.chipCollectionWrapper.style.display = '');
                }
                if (this.mode === 'delimiter') {
                    this.showDelimWrapper();
                }
                this.showOverAllClear();
            }
            else {
                if (!ej2_base_6.isNullOrUndefined(this.chipCollectionWrapper)) {
                    this.chipCollectionWrapper.style.display = 'none';
                }
                if (!ej2_base_6.isNullOrUndefined(this.delimiterWrapper)) {
                    (this.delimiterWrapper.style.display = 'none');
                }
                this.hideOverAllClear();
            }
        };
        MultiSelect.prototype.addValue = function (value, text, eve) {
            if (!this.value) {
                this.value = [];
            }
            this.setProperties({ value: [].concat([], this.value, [value]) }, true);
            var element = this.list.querySelector('li[data-value="' + value + '"]');
            this.removeFocus();
            if (element) {
                this.addListFocus(element);
                this.addListSelection(element);
            }
            if (this.mode !== 'delimiter') {
                this.addChip(text, value);
            }
            this.updateChipStatus();
            this.dispatchSelect(value, eve, element, (eve && eve.type !== 'click'));
        };
        MultiSelect.prototype.dispatchSelect = function (value, eve, element, isNotTrigger) {
            if (this.initStatus && !isNotTrigger) {
                var eventArgs = {
                    e: eve,
                    item: element,
                    itemData: this.getDataByValue(value),
                    isInteracted: eve ? true : false
                };
                this.trigger('select', eventArgs);
            }
        };
        MultiSelect.prototype.addChip = function (text, value) {
            if (this.chipCollectionWrapper) {
                this.chipCollectionWrapper.appendChild(this.getChip(text, value));
            }
        };
        MultiSelect.prototype.removeChipFocus = function () {
            var elements;
            var closeElements;
            elements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP);
            closeElements = this.chipCollectionWrapper.querySelectorAll('span.' + CHIP_CLOSE.split(' ')[0]);
            ej2_base_5.removeClass(elements, CHIP_SELECTED);
            if (ej2_base_4.Browser.isDevice) {
                for (var index = 0; index < closeElements.length; index++) {
                    closeElements[index].style.display = 'none';
                }
            }
        };
        MultiSelect.prototype.onMobileChipInteraction = function (e) {
            var chipElem = ej2_base_5.closest(e.target, '.' + CHIP);
            var chipClose = chipElem.querySelector('span.' + CHIP_CLOSE.split(' ')[0]);
            if (this.enabled && !this.readonly) {
                if (!chipElem.classList.contains(CHIP_SELECTED)) {
                    this.removeChipFocus();
                    chipClose.style.display = '';
                    chipElem.classList.add(CHIP_SELECTED);
                }
                this.refreshPopup();
                e.preventDefault();
            }
        };
        MultiSelect.prototype.getChip = function (data, value) {
            var itemData = { text: value, value: value };
            var chip = ej2_base_5.createElement('span', {
                className: CHIP,
                attrs: { 'data-value': value, 'title': data }
            });
            var chipContent = ej2_base_5.createElement('span', { className: CHIP_CONTENT });
            var chipClose = ej2_base_5.createElement('span', { className: CHIP_CLOSE });
            if (this.mainData) {
                itemData = this.getDataByValue(value);
            }
            if (this.valueTemplate && itemData) {
                var compiledString = ej2_base_3.compile(this.valueTemplate);
                for (var _i = 0, _a = compiledString(itemData); _i < _a.length; _i++) {
                    var item = _a[_i];
                    chipContent.appendChild(item);
                }
            }
            else {
                chipContent.innerHTML = data;
            }
            chip.appendChild(chipContent);
            if (ej2_base_4.Browser.isDevice) {
                chip.classList.add(MOBILE_CHIP);
                ej2_base_5.append([chipClose], chip);
                chipClose.style.display = 'none';
                ej2_base_3.EventHandler.add(chip, 'click', this.onMobileChipInteraction, this);
            }
            else {
                ej2_base_3.EventHandler.add(chip, 'mousedown', this.chipClick, this);
                if (this.showClearButton) {
                    chip.appendChild(chipClose);
                }
            }
            ej2_base_3.EventHandler.add(chipClose, 'mousedown', this.onChipRemove, this);
            return chip;
        };
        MultiSelect.prototype.calcPopupWidth = function () {
            var width = ej2_base_6.formatUnit(this.popupWidth);
            if (width.indexOf('%') > -1) {
                var inputWidth = (this.componentWrapper.getBoundingClientRect().width) * parseFloat(width) / 100;
                width = inputWidth.toString() + 'px';
            }
            return width;
        };
        MultiSelect.prototype.mouseIn = function () {
            if (this.enabled && !this.readonly) {
                this.showOverAllClear();
            }
        };
        MultiSelect.prototype.mouseOut = function () {
            if (!this.inputFocus) {
                this.overAllClear.style.display = 'none';
            }
        };
        MultiSelect.prototype.renderPopup = function () {
            var _this = this;
            if (!this.list) {
                _super.prototype.render.call(this);
            }
            if (!this.popupObj) {
                document.body.appendChild(this.popupWrapper);
                var overAllHeight = parseInt(this.popupHeight, 10);
                this.popupWrapper.style.visibility = 'hidden';
                if (this.headerTemplate) {
                    var compiledString = void 0;
                    this.header = document.createElement('div');
                    ej2_base_5.addClass([this.header], HEADER);
                    compiledString = ej2_base_3.compile(this.headerTemplate);
                    var elements = compiledString({});
                    for (var temp = 0; temp < elements.length; temp++) {
                        this.header.appendChild(elements[temp]);
                    }
                    ej2_base_5.append([this.header], this.popupWrapper);
                    ej2_base_3.EventHandler.add(this.header, 'mousedown', this.onListMouseDown, this);
                    overAllHeight -= this.header.getBoundingClientRect().height;
                }
                ej2_base_5.append([this.list], this.popupWrapper);
                if (this.footerTemplate) {
                    var compiledString = void 0;
                    this.footer = document.createElement('div');
                    ej2_base_5.addClass([this.footer], FOOTER);
                    compiledString = ej2_base_3.compile(this.footerTemplate);
                    var elements = compiledString({});
                    for (var temp = 0; temp < elements.length; temp++) {
                        this.footer.appendChild(elements[temp]);
                    }
                    ej2_base_5.append([this.footer], this.popupWrapper);
                    ej2_base_3.EventHandler.add(this.footer, 'mousedown', this.onListMouseDown, this);
                    overAllHeight -= this.footer.getBoundingClientRect().height;
                }
                if (this.popupHeight !== 'auto') {
                    this.list.style.maxHeight = ej2_base_6.formatUnit(overAllHeight);
                    this.popupWrapper.style.maxHeight = ej2_base_6.formatUnit(this.popupHeight);
                }
                else {
                    this.list.style.maxHeight = ej2_base_6.formatUnit(this.popupHeight);
                }
                this.popupObj = new ej2_popups_1.Popup(this.popupWrapper, {
                    width: this.calcPopupWidth(), targetType: 'relative', position: { X: 'left', Y: 'bottom' },
                    relateTo: this.overAllWrapper, collision: { X: 'none', Y: 'flip' }, offsetY: 1,
                    enableRtl: this.enableRtl,
                    close: function () {
                        if (_this.popupObj.element.parentElement) {
                            ej2_base_5.detach(_this.popupObj.element);
                        }
                    }
                });
                this.popupObj.close();
                this.popupWrapper.style.visibility = '';
            }
        };
        MultiSelect.prototype.ClearAll = function (e) {
            if (this.enabled && !this.readonly) {
                var temp = void 0;
                var tempValues = this.value ? this.value.slice() : [];
                for (temp = this.value[0]; this.value.length !== 0; temp = this.value[0]) {
                    this.removeValue(temp, e);
                }
                this.updateDelimeter(e);
                if (this.mode !== 'box') {
                    this.updateDelimView();
                }
                this.makeTextBoxEmpty();
                if (this.isPopupOpen()) {
                    this.refreshPopup();
                }
                this.removeFocus();
                if (!this.inputFocus) {
                    this.updateValueState(e, this.value, tempValues);
                    this.inputElement.focus();
                }
                e.preventDefault();
            }
        };
        MultiSelect.prototype.windowResize = function () {
            this.refreshPopup();
            if (!this.inputFocus && this.viewWrapper && this.viewWrapper.parentElement) {
                this.updateDelimView();
            }
        };
        MultiSelect.prototype.wireEvent = function () {
            ej2_base_3.EventHandler.add(this.componentWrapper, 'mousedown', this.wrapperClick, this);
            ej2_base_3.EventHandler.add(window, 'resize', this.windowResize, this);
            ej2_base_3.EventHandler.add(this.inputElement, 'focus', this.focusIn, this);
            ej2_base_3.EventHandler.add(this.inputElement, 'keydown', this.onKeyDown, this);
            ej2_base_3.EventHandler.add(this.inputElement, 'keyup', this.KeyUp, this);
            ej2_base_3.EventHandler.add(this.inputElement, 'input', this.onInput, this);
            ej2_base_3.EventHandler.add(this.inputElement, 'blur', this.onBlur, this);
            ej2_base_3.EventHandler.add(this.componentWrapper, 'mousemove', this.mouseIn, this);
            ej2_base_3.EventHandler.add(this.componentWrapper, 'mouseout', this.mouseOut, this);
            ej2_base_3.EventHandler.add(this.overAllClear, 'mouseup', this.ClearAll, this);
        };
        MultiSelect.prototype.onInput = function () {
            if (this.keyDownStatus) {
                this.isValidKey = true;
            }
            else {
                this.isValidKey = false;
            }
            this.keyDownStatus = false;
        };
        MultiSelect.prototype.preRender = function () {
            _super.prototype.preRender.call(this);
        };
        MultiSelect.prototype.updateData = function () {
            var data = '';
            var delim = this.mode === 'delimiter';
            var text = [];
            var temp;
            var tempData = this.listData;
            this.listData = this.mainData;
            this.hiddenElement.innerHTML = '';
            for (var index = 0; this.value[index]; index++) {
                if (this.listData) {
                    temp = this.getTextByValue(this.value[index]);
                }
                else {
                    temp = this.value[index];
                }
                data += temp + this.delimiterChar + ' ';
                text.push(temp);
                this.hiddenElement.innerHTML += '<option selected value =' + this.value[index] + '>' + index + '</option>';
            }
            this.text = text.toString();
            if (delim) {
                this.delimiterWrapper.innerHTML = data;
            }
            this.listData = tempData;
        };
        MultiSelect.prototype.initialValueUpdate = function () {
            if (this.list) {
                var text = void 0;
                var textField = void 0;
                var valueField = void 0;
                var element = void 0;
                var value = void 0;
                if (this.chipCollectionWrapper) {
                    this.chipCollectionWrapper.innerHTML = '';
                }
                this.removeListSelection();
                for (var index = 0; this.value[index]; index++) {
                    value = this.value[index];
                    element = this.list.querySelector('li[data-value="' + value + '"]');
                    if (element) {
                        text = this.getTextByValue(value);
                        this.addChip(text, value);
                        this.addListSelection(element);
                    }
                }
                this.updateDelimeter(null);
                if (!this.inputFocus) {
                    if (this.mode === 'box') {
                        this.chipCollectionWrapper.style.display = '';
                    }
                    else if (this.mode === 'delimiter') {
                        this.showDelimWrapper();
                    }
                }
            }
        };
        MultiSelect.prototype.isValidLI = function (li) {
            return (li && !li.classList.contains(drop_down_base_1.dropDownBaseClasses.disabled) && !li.classList.contains(drop_down_base_1.dropDownBaseClasses.group) &&
                li.classList.contains(drop_down_base_1.dropDownBaseClasses.li));
        };
        ;
        MultiSelect.prototype.updateListSelection = function (li, e) {
            var value = this.getFormattedValue(li.getAttribute('data-value'));
            var text = this.getTextByValue(value);
            this.removeHover();
            if (!this.value || this.value.indexOf(value) === -1) {
                if ((this.allowCustomValue || this.allowFiltering) && !this.mainList.querySelector('li[data-value="' + value + '"]')) {
                    var temp = li.cloneNode(true);
                    var data = this.getDataByValue(value);
                    ej2_base_5.append([temp], this.mainList);
                    this.mainData.push(this.getDataByValue(value));
                    var eventArgs = {
                        newData: data
                    };
                    this.trigger('customValueSelection', eventArgs);
                }
                this.remoteCustomValue = false;
                this.addValue(value, text, e);
            }
            else {
                this.removeValue(value, e);
            }
        };
        MultiSelect.prototype.removeListSelection = function () {
            var className = this.hideSelectedItem ?
                HIDE_LIST :
                drop_down_base_1.dropDownBaseClasses.selected;
            var selectedItems = this.list.querySelectorAll('.' + className);
            var temp = selectedItems.length;
            if (selectedItems && selectedItems.length) {
                ej2_base_5.removeClass(selectedItems, className);
                while (temp > 0) {
                    selectedItems[temp - 1].setAttribute('aria-selected', 'false');
                    temp--;
                }
            }
        };
        ;
        MultiSelect.prototype.removeHover = function () {
            var hoveredItem = this.list.querySelectorAll('.' + drop_down_base_1.dropDownBaseClasses.hover);
            if (hoveredItem && hoveredItem.length) {
                ej2_base_5.removeClass(hoveredItem, drop_down_base_1.dropDownBaseClasses.hover);
            }
        };
        ;
        MultiSelect.prototype.removeFocus = function () {
            var hoveredItem = this.list.querySelectorAll('.' + drop_down_base_1.dropDownBaseClasses.focus);
            var mainlist = this.mainList.querySelectorAll('.' + drop_down_base_1.dropDownBaseClasses.focus);
            if (hoveredItem && hoveredItem.length) {
                ej2_base_5.removeClass(hoveredItem, drop_down_base_1.dropDownBaseClasses.focus);
                ej2_base_5.removeClass(mainlist, drop_down_base_1.dropDownBaseClasses.focus);
            }
        };
        ;
        MultiSelect.prototype.addListHover = function (li) {
            if (this.enabled && this.isValidLI(li)) {
                this.removeHover();
                ej2_base_5.addClass([li], drop_down_base_1.dropDownBaseClasses.hover);
            }
        };
        ;
        MultiSelect.prototype.addListFocus = function (element) {
            if (this.enabled && this.isValidLI(element)) {
                this.removeFocus();
                ej2_base_5.addClass([element], drop_down_base_1.dropDownBaseClasses.focus);
            }
        };
        MultiSelect.prototype.addListSelection = function (element) {
            var className = this.hideSelectedItem ?
                HIDE_LIST :
                drop_down_base_1.dropDownBaseClasses.selected;
            if (this.enabled && this.isValidLI(element) && !element.classList.contains(drop_down_base_1.dropDownBaseClasses.hover)) {
                ej2_base_5.addClass([element], className);
                this.updateMainList(false, element.getAttribute('data-value'));
                element.setAttribute('aria-selected', 'true');
                if (this.chipCollectionWrapper !== null) {
                    this.removeChipSelection();
                }
                ej2_base_1.attributes(this.inputElement, { 'aria-activedescendant': element.id });
            }
        };
        MultiSelect.prototype.updateDelimeter = function (eve) {
            this.updateData();
        };
        MultiSelect.prototype.onMouseClick = function (e) {
            this.scrollFocusStatus = false;
            var target = e.target;
            var li = ej2_base_5.closest(target, '.' + drop_down_base_1.dropDownBaseClasses.li);
            if (this.isValidLI(li)) {
                var limit = this.value && this.value.length ? this.value.length : 0;
                if (limit < this.maximumSelectionLength) {
                    this.updateListSelection(li, e);
                    this.addListFocus(li);
                    if ((this.allowCustomValue || this.allowFiltering) && this.mainList && this.listData) {
                        this.focusAtLastListItem(li.getAttribute('data-value'));
                        this.refreshSelection();
                    }
                    else {
                        this.makeTextBoxEmpty();
                    }
                }
                this.updateDelimeter(e);
                this.refreshPopup();
                if (this.hideSelectedItem) {
                    this.focusAtFirstListItem();
                }
                if (this.closePopupOnSelect) {
                    this.hidePopup();
                    this.makeTextBoxEmpty();
                }
                else {
                    e.preventDefault();
                }
                var value = this.getFormattedValue(li.getAttribute('data-value'));
                this.dispatchSelect(value, e, li, (li.getAttribute('aria-selected') === 'true' ? false : true));
            }
            else {
                e.preventDefault();
            }
            this.refreshPlaceHolder();
        };
        MultiSelect.prototype.onMouseOver = function (e) {
            var currentLi = ej2_base_5.closest(e.target, '.' + drop_down_base_1.dropDownBaseClasses.li);
            this.addListHover(currentLi);
        };
        MultiSelect.prototype.onMouseLeave = function (e) {
            this.removeHover();
        };
        MultiSelect.prototype.onListMouseDown = function (e) {
            e.preventDefault();
            this.scrollFocusStatus = true;
        };
        MultiSelect.prototype.wireListEvents = function () {
            ej2_base_3.EventHandler.add(this.list, 'mousedown', this.onListMouseDown, this);
            ej2_base_3.EventHandler.add(this.list, 'mouseup', this.onMouseClick, this);
            ej2_base_3.EventHandler.add(this.list, 'mouseover', this.onMouseOver, this);
            ej2_base_3.EventHandler.add(this.list, 'mouseout', this.onMouseLeave, this);
        };
        ;
        MultiSelect.prototype.unwireListEvents = function () {
            if (this.list) {
                ej2_base_3.EventHandler.remove(this.list, 'mousedown', this.onListMouseDown);
                ej2_base_3.EventHandler.remove(this.list, 'mouseup', this.onMouseClick);
                ej2_base_3.EventHandler.remove(this.list, 'mouseover', this.onMouseOver);
                ej2_base_3.EventHandler.remove(this.list, 'mouseout', this.onMouseLeave);
            }
        };
        ;
        MultiSelect.prototype.hideOverAllClear = function () {
            if (!this.value || !this.value.length) {
                this.overAllClear.style.display = 'none';
            }
        };
        MultiSelect.prototype.showOverAllClear = function () {
            if (this.value && this.value.length) {
                this.overAllClear.style.display = '';
            }
        };
        MultiSelect.prototype.showSpinner = function () {
            if (ej2_base_6.isNullOrUndefined(this.spinnerElement)) {
                if (this.overAllClear.style.display !== 'none') {
                    this.spinnerElement = this.overAllClear;
                }
                else {
                    this.spinnerElement = ej2_base_5.createElement('span', { className: CLOSEICON_CLASS + ' ' + SPINNER_CLASS });
                    this.componentWrapper.appendChild(this.spinnerElement);
                }
                ej2_base_5.addClass([this.spinnerElement], DISABLE_ICON);
                ej2_popups_1.createSpinner({
                    target: this.spinnerElement,
                    width: drop_down_base_1.SPINNER_SIZE
                });
                ej2_popups_1.showSpinner(this.spinnerElement);
            }
        };
        MultiSelect.prototype.hideSpinner = function () {
            if (!ej2_base_6.isNullOrUndefined(this.spinnerElement)) {
                ej2_popups_1.hideSpinner(this.spinnerElement);
                ej2_base_5.removeClass([this.spinnerElement], DISABLE_ICON);
                if (this.spinnerElement.classList.contains(SPINNER_CLASS)) {
                    ej2_base_5.detach(this.spinnerElement);
                }
                else {
                    this.spinnerElement.innerHTML = '';
                }
                this.spinnerElement = null;
            }
        };
        MultiSelect.prototype.updateDelimView = function () {
            if (this.delimiterWrapper) {
                this.hideDelimWrapper();
            }
            if (this.chipCollectionWrapper) {
                this.chipCollectionWrapper.style.display = 'none';
            }
            this.viewWrapper.style.display = '';
            if (this.value && this.value.length) {
                var data = '';
                var temp = void 0;
                var tempData = void 0;
                var tempIndex = 1;
                var wrapperleng = void 0;
                var remaining = void 0;
                this.viewWrapper.innerHTML = '';
                var l10nLocale = {
                    noRecordsTemplate: 'No Records Found',
                    actionFailureTemplate: 'The Request Failed',
                    overflowCountTemplate: '+${count} more..'
                };
                var l10n = new ej2_base_3.L10n('dropdowns', l10nLocale, this.locale);
                var remainContent = l10n.getConstant('overflowCountTemplate');
                var raminElement = ej2_base_5.createElement('span', {
                    className: REMAIN_WRAPPER
                });
                var compiledString = ej2_base_3.compile(remainContent);
                raminElement.appendChild(compiledString({ 'count': this.value.length })[0]);
                this.viewWrapper.appendChild(raminElement);
                var remainSize = raminElement.getBoundingClientRect().width;
                ej2_base_5.remove(raminElement);
                this.viewWrapper.innerHTML = '';
                var inputleng = this.searchWrapper.getBoundingClientRect().width;
                var overAllContainer = parseInt(window.getComputedStyle(this.componentWrapper).width, 10) -
                    parseInt(window.getComputedStyle(this.componentWrapper).paddingLeft, 10) -
                    parseInt(window.getComputedStyle(this.componentWrapper).paddingRight, 10);
                for (var index = 0; this.value[index]; index++) {
                    data += (index === 0) ? '' : this.delimiterChar + ' ';
                    if (this.mainData && this.mainData.length) {
                        temp = this.getTextByValue(this.value[index]);
                    }
                    else {
                        temp = this.value[index];
                    }
                    data += temp;
                    temp = this.viewWrapper.innerHTML;
                    this.viewWrapper.innerHTML = data;
                    wrapperleng = this.viewWrapper.getBoundingClientRect().width;
                    if ((wrapperleng) > overAllContainer) {
                        if (tempData !== undefined) {
                            temp = tempData;
                            index = tempIndex + 1;
                        }
                        this.viewWrapper.innerHTML = temp;
                        remaining = this.value.length - index;
                        break;
                    }
                    else if ((wrapperleng + remainSize) <= overAllContainer) {
                        tempData = data;
                        tempIndex = index;
                    }
                    else if (index === 0) {
                        tempData = '';
                        tempIndex = -1;
                    }
                }
                if (remaining > 0) {
                    raminElement.innerHTML = '';
                    raminElement.appendChild(compiledString({ 'count': remaining })[0]);
                    this.viewWrapper.appendChild(raminElement);
                }
            }
            else {
                this.viewWrapper.innerHTML = '';
                this.viewWrapper.style.display = 'none';
            }
        };
        MultiSelect.prototype.unWireEvent = function () {
            ej2_base_3.EventHandler.remove(this.componentWrapper, 'mousedown', this.wrapperClick);
            ej2_base_3.EventHandler.remove(window, 'resize', this.windowResize);
            ej2_base_3.EventHandler.remove(this.inputElement, 'focus', this.focusIn);
            ej2_base_3.EventHandler.remove(this.inputElement, 'keydown', this.onKeyDown);
            ej2_base_3.EventHandler.remove(this.inputElement, 'input', this.onInput);
            ej2_base_3.EventHandler.remove(this.inputElement, 'keyup', this.KeyUp);
            ej2_base_3.EventHandler.remove(this.inputElement, 'blur', this.onBlur);
            ej2_base_3.EventHandler.remove(this.componentWrapper, 'mousemove', this.mouseIn);
            ej2_base_3.EventHandler.remove(this.componentWrapper, 'mouseout', this.mouseOut);
            ej2_base_3.EventHandler.remove(this.overAllClear, 'mousedown', this.ClearAll);
        };
        MultiSelect.prototype.selectAllItem = function (state) {
            var li;
            li = this.list.querySelectorAll(state ?
                'li[aria-selected="false"]' :
                'li[aria-selected="true"]');
            var length = li.length;
            if (li && li.length) {
                while (length > 0) {
                    this.updateListSelection(li[length - 1], null);
                    length--;
                }
            }
            if (this.mode !== 'box' && !this.isPopupOpen()) {
                this.updateDelimView();
            }
            else {
                this.searchWrapper.classList.remove(ZERO_SIZE);
            }
            this.updateData();
            this.refreshPlaceHolder();
        };
        MultiSelect.prototype.getPersistData = function () {
            return this.addOnPersist(['value']);
        };
        ;
        MultiSelect.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'htmlAttributes':
                        this.updateHTMLAttribute();
                        break;
                    case 'showClearButton':
                        this.updateClearButton(newProp.showClearButton);
                        break;
                    case 'value':
                        if (!this.inputFocus) {
                            this.initialValueUpdate();
                            if (this.mode !== 'box') {
                                this.updateDelimView();
                            }
                            this.refreshInputHight();
                            this.refreshPlaceHolder();
                            this.updateValueState(null, this.value, oldProp.value);
                        }
                        break;
                    case 'width':
                        ej2_base_5.setStyleAttribute(this.overAllWrapper, { 'width': ej2_base_6.formatUnit(newProp.width) });
                        this.popupObj.setProperties({ width: this.calcPopupWidth() });
                        break;
                    case 'placeholder':
                        this.refreshPlaceHolder();
                        break;
                    case 'query':
                    case 'dataSource':
                        this.resetList(this.dataSource);
                        if (this.value && this.value.length) {
                            this.refreshSelection();
                        }
                        break;
                    case 'cssClass':
                        this.popupWrapper.classList.remove(oldProp.cssClass);
                        this.overAllWrapper.classList.remove(oldProp.cssClass);
                        this.updateCssClass();
                        break;
                    case 'enableRtl':
                        this.enableRTL(newProp.enableRtl);
                        break;
                    case 'readonly':
                        this.updateReadonly(newProp.readonly);
                        this.hidePopup();
                        break;
                    case 'enabled':
                        this.hidePopup();
                        this.enable(newProp.enabled);
                        break;
                }
            }
        };
        MultiSelect.prototype.hidePopup = function () {
            var delay = 100;
            if (this.isPopupOpen()) {
                var animModel = {
                    name: 'FadeOut',
                    duration: 100,
                    delay: delay ? delay : 0
                };
                this.beforePopupOpen = false;
                this.popupObj.hide(new ej2_base_4.Animation(animModel));
                ej2_base_1.attributes(this.inputElement, { 'aria-expanded': 'false' });
                this.popupObj.hide();
                var eventArgs = { popup: this.popupObj };
                this.trigger('close', eventArgs);
            }
        };
        MultiSelect.prototype.showPopup = function () {
            if (!this.ulElement) {
                this.beforePopupOpen = true;
                _super.prototype.render.call(this);
                return;
            }
            this.onPopupShown();
        };
        MultiSelect.prototype.selectAll = function (state) {
            var _this = this;
            if (ej2_base_6.isNullOrUndefined(this.list)) {
                this.selectAllAction = function () {
                    _this.selectAllItem(state);
                    _this.selectAllAction = null;
                };
                _super.prototype.render.call(this);
            }
            else {
                this.selectAllAction = null;
                this.selectAllItem(state);
            }
        };
        MultiSelect.prototype.getModuleName = function () {
            return 'multiselect';
        };
        ;
        MultiSelect.prototype.render = function () {
            var _this = this;
            this.initStatus = false;
            this.searchWrapper = ej2_base_5.createElement('span', { className: SEARCHBOX_WRAPPER });
            this.viewWrapper = ej2_base_5.createElement('span', {
                className: DELIMITER_VIEW + ' ' + DELIMITER_WRAPPER,
                styles: 'display:none;'
            });
            this.overAllClear = ej2_base_5.createElement('span', { className: CLOSEICON_CLASS, styles: 'display:none;' });
            this.componentWrapper = ej2_base_5.createElement('div', { className: ELEMENT_WRAPPER });
            this.overAllWrapper = ej2_base_5.createElement('div', { className: OVER_ALL_WRAPPER });
            if (ej2_base_4.Browser.isDevice) {
                this.componentWrapper.classList.add(ELEMENT_MOBILE_WRAPPER);
            }
            this.overAllWrapper.style.width = ej2_base_6.formatUnit(this.width);
            this.overAllWrapper.appendChild(this.componentWrapper);
            this.popupWrapper = ej2_base_5.createElement('div', {
                id: this.element.id + '_popup',
                className: POPUP_WRAPPER
            });
            if (this.mode === 'delimiter') {
                this.delimiterWrapper = ej2_base_5.createElement('span', { className: DELIMITER_WRAPPER, styles: 'display:none' });
                this.componentWrapper.appendChild(this.delimiterWrapper);
            }
            else {
                this.chipCollectionWrapper = ej2_base_5.createElement('span', {
                    className: CHIP_WRAPPER,
                    styles: 'display:none'
                });
                this.componentWrapper.appendChild(this.chipCollectionWrapper);
            }
            if (this.mode !== 'box') {
                this.componentWrapper.appendChild(this.viewWrapper);
            }
            this.componentWrapper.appendChild(this.searchWrapper);
            if (this.showClearButton && !ej2_base_4.Browser.isDevice) {
                this.componentWrapper.appendChild(this.overAllClear);
            }
            else {
                this.componentWrapper.classList.add(CLOSE_ICON_HIDE);
            }
            this.inputElement = ej2_base_5.createElement('input', {
                className: INPUT_ELEMENT,
                attrs: {
                    spellcheck: 'false',
                    type: 'text',
                    autocomplete: 'off',
                    tabindex: '0'
                }
            });
            this.refreshPlaceHolder();
            if (this.element.tagName !== this.getNgDirective()) {
                this.element.style.display = 'none';
            }
            if (this.element.tagName === this.getNgDirective()) {
                this.element.appendChild(this.overAllWrapper);
                this.searchWrapper.appendChild(this.inputElement);
            }
            else {
                this.element.parentElement.insertBefore(this.overAllWrapper, this.element);
                this.searchWrapper.appendChild(this.inputElement);
                this.searchWrapper.appendChild(this.element);
                this.element.removeAttribute('tabindex');
            }
            var name = this.element.getAttribute('name') ? this.element.getAttribute('name') : this.element.getAttribute('id');
            var id = this.element.getAttribute('id') ? this.element.getAttribute('id') : ej2_base_6.getUniqueID('ej2_dropdownlist');
            this.element.id = id;
            this.element.style.opacity = '';
            this.hiddenElement = ej2_base_5.createElement('select', {
                attrs: { 'name': name, 'aria-hidden': 'true', 'multiple': 'true' }, styles: 'display:none'
            });
            this.element.removeAttribute('name');
            this.searchWrapper.appendChild(this.hiddenElement);
            this.hideOverAllClear();
            this.wireEvent();
            this.enable(this.enabled);
            this.enableRTL(this.enableRtl);
            if (!(this.dataSource instanceof ej2_data_1.DataManager)) {
                this.renderPopup();
            }
            if (this.value && this.value.length) {
                if (!(this.dataSource instanceof ej2_data_1.DataManager)) {
                    this.initialValueUpdate();
                    this.initialUpdate();
                }
                else {
                    this.setInitialValue = function () {
                        _this.initialValueUpdate();
                        _this.initialUpdate();
                        _this.setInitialValue = null;
                    };
                    _super.prototype.render.call(this);
                }
            }
            else {
                this.initialUpdate();
            }
            this.initStatus = true;
        };
        ;
        MultiSelect.prototype.initialUpdate = function () {
            if (this.mode !== 'box') {
                this.updateDelimView();
            }
            this.updateCssClass();
            this.updateHTMLAttribute();
            this.updateReadonly(this.readonly);
            this.refreshInputHight();
        };
        MultiSelect.prototype.destroy = function () {
            if (this.popupObj) {
                this.popupObj.hide();
            }
            this.unwireListEvents();
            this.unWireEvent();
            _super.prototype.destroy.call(this);
            var temp = ['readonly', 'aria-disabled', 'aria-placeholder', 'placeholder'];
            var length = temp.length;
            while (length > 0) {
                this.inputElement.removeAttribute(temp[length - 1]);
                length--;
            }
            this.element.style.display = 'block';
            if (this.overAllWrapper.parentElement) {
                if (this.overAllWrapper.parentElement.tagName === this.getNgDirective()) {
                    ej2_base_5.remove(this.overAllWrapper);
                }
                else {
                    this.overAllWrapper.parentElement.insertBefore(this.element, this.overAllWrapper);
                    ej2_base_5.remove(this.overAllWrapper);
                }
            }
        };
        ;
        return MultiSelect;
    }(drop_down_base_1.DropDownBase));
    __decorate([
        ej2_base_3.Property(null)
    ], MultiSelect.prototype, "cssClass", void 0);
    __decorate([
        ej2_base_3.Property('100%')
    ], MultiSelect.prototype, "width", void 0);
    __decorate([
        ej2_base_3.Property('300px')
    ], MultiSelect.prototype, "popupHeight", void 0);
    __decorate([
        ej2_base_3.Property('100%')
    ], MultiSelect.prototype, "popupWidth", void 0);
    __decorate([
        ej2_base_3.Property(null)
    ], MultiSelect.prototype, "placeholder", void 0);
    __decorate([
        ej2_base_3.Property({})
    ], MultiSelect.prototype, "htmlAttributes", void 0);
    __decorate([
        ej2_base_3.Property(null)
    ], MultiSelect.prototype, "valueTemplate", void 0);
    __decorate([
        ej2_base_3.Property(null)
    ], MultiSelect.prototype, "headerTemplate", void 0);
    __decorate([
        ej2_base_3.Property(null)
    ], MultiSelect.prototype, "footerTemplate", void 0);
    __decorate([
        ej2_base_3.Property(null)
    ], MultiSelect.prototype, "itemTemplate", void 0);
    __decorate([
        ej2_base_3.Property(false)
    ], MultiSelect.prototype, "allowFiltering", void 0);
    __decorate([
        ej2_base_3.Property(false)
    ], MultiSelect.prototype, "allowCustomValue", void 0);
    __decorate([
        ej2_base_3.Property(true)
    ], MultiSelect.prototype, "showClearButton", void 0);
    __decorate([
        ej2_base_3.Property(1000)
    ], MultiSelect.prototype, "maximumSelectionLength", void 0);
    __decorate([
        ej2_base_3.Property(false)
    ], MultiSelect.prototype, "readonly", void 0);
    __decorate([
        ej2_base_3.Property(null)
    ], MultiSelect.prototype, "text", void 0);
    __decorate([
        ej2_base_3.Property(null)
    ], MultiSelect.prototype, "value", void 0);
    __decorate([
        ej2_base_3.Property(false)
    ], MultiSelect.prototype, "hideSelectedItem", void 0);
    __decorate([
        ej2_base_3.Property(true)
    ], MultiSelect.prototype, "closePopupOnSelect", void 0);
    __decorate([
        ej2_base_3.Property('default')
    ], MultiSelect.prototype, "mode", void 0);
    __decorate([
        ej2_base_3.Property(',')
    ], MultiSelect.prototype, "delimiterChar", void 0);
    __decorate([
        ej2_base_3.Property(true)
    ], MultiSelect.prototype, "ignoreCase", void 0);
    __decorate([
        ej2_base_3.Event()
    ], MultiSelect.prototype, "change", void 0);
    __decorate([
        ej2_base_3.Event()
    ], MultiSelect.prototype, "removing", void 0);
    __decorate([
        ej2_base_3.Event()
    ], MultiSelect.prototype, "removed", void 0);
    __decorate([
        ej2_base_3.Event()
    ], MultiSelect.prototype, "open", void 0);
    __decorate([
        ej2_base_3.Event()
    ], MultiSelect.prototype, "close", void 0);
    __decorate([
        ej2_base_3.Event()
    ], MultiSelect.prototype, "blur", void 0);
    __decorate([
        ej2_base_3.Event()
    ], MultiSelect.prototype, "focus", void 0);
    __decorate([
        ej2_base_3.Event()
    ], MultiSelect.prototype, "filtering", void 0);
    __decorate([
        ej2_base_3.Event()
    ], MultiSelect.prototype, "customValueSelection", void 0);
    MultiSelect = __decorate([
        ej2_base_2.NotifyPropertyChanges
    ], MultiSelect);
    exports.MultiSelect = MultiSelect;
});
