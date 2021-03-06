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
import { EventHandler, Property, Event, compile, KeyboardEvents, createElement, append } from '@syncfusion/ej2-base';
import { attributes, isNullOrUndefined, getUniqueID, formatUnit, isUndefined } from '@syncfusion/ej2-base';
import { Animation, Browser, NotifyPropertyChanges } from '@syncfusion/ej2-base';
import { addClass, removeClass, setStyleAttribute, closest, prepend, detach, classList } from '@syncfusion/ej2-base';
import { Popup, isCollide, createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { Input } from '@syncfusion/ej2-inputs';
import { incrementalSearch } from '../common/incremental-search';
import { DropDownBase, dropDownBaseClasses, SPINNER_SIZE } from '../drop-down-base/drop-down-base';
import { DataManager } from '@syncfusion/ej2-data';
export var dropDownListClasses = {
    root: 'e-dropdownlist',
    hover: dropDownBaseClasses.hover,
    selected: dropDownBaseClasses.selected,
    rtl: dropDownBaseClasses.rtl,
    li: dropDownBaseClasses.li,
    disable: dropDownBaseClasses.disabled,
    base: dropDownBaseClasses.root,
    focus: dropDownBaseClasses.focus,
    input: 'e-input-group',
    inputFocus: 'e-input-focus',
    icon: 'e-input-group-icon e-ddl-icon',
    iconAnimation: 'e-icon-anim',
    value: 'e-input-value',
    device: 'e-ddl-device',
    backIcon: 'e-input-group-icon e-back-icon e-icons',
    filterBarClearIcon: 'e-input-group-icon e-clear-icon e-icons',
    filterInput: 'e-input-filter',
    filterParent: 'e-filter-parent',
    mobileFilter: 'e-ddl-device-filter',
    footer: 'e-ddl-footer',
    header: 'e-ddl-header',
    clearIcon: 'e-clear-icon',
    clearIconHide: 'e-clear-icon-hide',
    popupFullScreen: 'e-popup-full-page',
    disableIcon: 'e-ddl-disable-icon'
};
var inputObject = {
    container: null,
    buttons: []
};
var DropDownList = (function (_super) {
    __extends(DropDownList, _super);
    function DropDownList(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.isPopupOpen = false;
        _this.isDocumentClick = false;
        _this.isInteracted = false;
        _this.isFilterFocus = false;
        _this.beforePopupOpen = false;
        _this.initial = true;
        _this.initRemoteRender = false;
        _this.isNotSearchList = false;
        _this.isTyped = false;
        _this.isSelected = false;
        _this.preventFocus = false;
        _this.preventAutoFill = false;
        _this.isValidKey = false;
        _this.typedString = '';
        _this.isEscapeKey = false;
        _this.isPreventBlur = false;
        _this.isTabKey = false;
        _this.actionCompleteData = { isUpdated: false };
        _this.prevSelectPoints = {};
        _this.isSelectCustom = false;
        _this.isDropDownClick = false;
        _this.preventAltUp = false;
        _this.keyConfigure = {
            tab: 'tab',
            enter: '13',
            escape: '27',
            end: '35',
            home: '36',
            down: '40',
            up: '38',
            pageUp: '33',
            pageDown: '34',
            open: 'alt+40',
            close: 'shift+tab',
            hide: 'alt+38',
            space: '32'
        };
        return _this;
    }
    ;
    DropDownList.prototype.preRender = function () {
        this.element.style.opacity = '0';
        _super.prototype.preRender.call(this);
        this.activeIndex = this.index;
        this.queryString = '';
    };
    DropDownList.prototype.renderList = function (isEmptyData) {
        _super.prototype.render.call(this, isEmptyData);
        this.wireListEvents();
    };
    DropDownList.prototype.floatLabelChange = function () {
        if (this.getModuleName() === 'dropdownlist' && this.floatLabelType === 'Auto') {
            var floatElement = this.inputWrapper.container.querySelector('.e-float-text');
            if (this.inputElement.value !== '' || this.isInteracted) {
                classList(floatElement, ['e-label-top'], ['e-label-bottom']);
            }
            else {
                classList(floatElement, ['e-label-bottom'], ['e-label-top']);
            }
        }
    };
    DropDownList.prototype.resetHandler = function (e) {
        e.preventDefault();
        this.clear();
    };
    DropDownList.prototype.resetFocusElement = function () {
        this.removeHover();
        this.removeSelection();
        this.removeFocus();
        this.list.scrollTop = 0;
        if (this.getModuleName() !== 'autocomplete') {
            var li = this.ulElement.querySelector('.' + dropDownListClasses.li);
            if (li) {
                li.classList.add(dropDownListClasses.focus);
            }
        }
    };
    DropDownList.prototype.clear = function (property) {
        this.resetSelection();
        this.onChangeEvent(null);
    };
    DropDownList.prototype.resetSelection = function () {
        if (this.list) {
            if (this.allowFiltering && this.getModuleName() !== 'autocomplete') {
                this.onActionComplete(this.actionCompleteData.ulElement.cloneNode(true), this.actionCompleteData.list);
            }
            this.resetFocusElement();
        }
        this.hiddenElement.innerHTML = '';
        this.inputElement.value = '';
        this.value = null;
        this.text = null;
        this.index = null;
        this.activeIndex = null;
        this.item = null;
        this.itemData = null;
        this.queryString = '';
        if (this.valueTempElement) {
            detach(this.valueTempElement);
            this.inputElement.style.display = 'block';
            this.valueTempElement = null;
        }
        this.setSelection(null, null);
        this.isSelectCustom = false;
        this.updateIconState();
    };
    DropDownList.prototype.setHTMLAttributes = function () {
        if (Object.keys(this.htmlAttributes).length) {
            for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                var htmlAttr = _a[_i];
                if (htmlAttr === 'class') {
                    this.inputWrapper.container.classList.add(this.htmlAttributes[htmlAttr]);
                }
                else if (htmlAttr === 'disabled' && this.htmlAttributes[htmlAttr] === 'disabled') {
                    this.enabled = false;
                    this.setEnable();
                }
                else if (htmlAttr === 'readonly' && this.htmlAttributes[htmlAttr] === 'readonly') {
                    this.readonly = true;
                    this.dataBind();
                }
                else if (htmlAttr === 'style') {
                    this.inputWrapper.container.setAttribute('style', this.htmlAttributes[htmlAttr]);
                }
                else {
                    var defaultAttr = ['title', 'id', 'name', 'placeholder', 'required'];
                    if (defaultAttr.indexOf(htmlAttr) > -1) {
                        htmlAttr === 'placeholder' ? Input.setPlaceholder(this.htmlAttributes[htmlAttr], this.inputElement) :
                            this.element.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                    }
                    else {
                        this.inputWrapper.container.setAttribute(htmlAttr, this.htmlAttributes[htmlAttr]);
                    }
                }
            }
        }
    };
    DropDownList.prototype.getAriaAttributes = function () {
        return {
            'aria-disabled': 'false',
            'aria-owns': this.element.id + '_options',
            'role': 'listbox',
            'aria-haspopup': 'true',
            'aria-expanded': 'false',
            'aria-activedescendant': 'null',
            'aria-labelledby': this.hiddenElement.id
        };
    };
    DropDownList.prototype.setEnableRtl = function () {
        Input.setEnableRtl(this.enableRtl, [this.inputElement.parentElement]);
        if (this.popupObj) {
            this.popupObj.enableRtl = this.enableRtl;
            this.popupObj.dataBind();
        }
    };
    DropDownList.prototype.setEnable = function () {
        Input.setEnabled(this.enabled, this.inputElement);
        if (this.enabled) {
            removeClass([this.inputWrapper.container], dropDownListClasses.disable);
            this.inputElement.setAttribute('aria-disabled', 'false');
            this.targetElement().setAttribute('tabindex', this.tabIndex);
        }
        else {
            this.hidePopup();
            addClass([this.inputWrapper.container], dropDownListClasses.disable);
            this.inputElement.setAttribute('aria-disabled', 'true');
            this.targetElement().tabIndex = -1;
        }
    };
    DropDownList.prototype.getPersistData = function () {
        return this.addOnPersist(['value']);
    };
    ;
    DropDownList.prototype.preventTabIndex = function (element) {
        if (this.getModuleName() === 'dropdownlist') {
            element.tabIndex = -1;
        }
    };
    DropDownList.prototype.targetElement = function () {
        return this.inputWrapper.container;
    };
    DropDownList.prototype.getNgDirective = function () {
        return 'EJ-DROPDOWNLIST';
    };
    DropDownList.prototype.getElementByText = function (text) {
        return this.getElementByValue(this.getValueByText(text));
    };
    DropDownList.prototype.getElementByValue = function (value) {
        var item;
        var listItems = this.getItems();
        for (var _i = 0, listItems_1 = listItems; _i < listItems_1.length; _i++) {
            var liItem = listItems_1[_i];
            if (this.getFormattedValue(liItem.getAttribute('data-value')) === value) {
                item = liItem;
                break;
            }
        }
        return item;
    };
    ;
    DropDownList.prototype.initValue = function () {
        this.renderList();
        if (this.dataSource instanceof DataManager) {
            this.initRemoteRender = true;
        }
        else {
            this.updateValues();
        }
    };
    DropDownList.prototype.updateValues = function () {
        if (!isNullOrUndefined(this.value)) {
            this.setSelection(this.getElementByValue(this.value), null);
        }
        else if (this.text && isNullOrUndefined(this.value)) {
            this.setSelection(this.getElementByText(this.text), null);
        }
        else {
            this.setSelection(this.liCollections[this.activeIndex], null);
        }
        this.setHiddenValue();
        Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
    };
    DropDownList.prototype.onBlur = function (e) {
        var target = e.relatedTarget;
        var currentTarget = e.target;
        var isPreventBlur = this.isPreventBlur;
        this.isPreventBlur = false;
        if (isPreventBlur && !this.isDocumentClick && this.isPopupOpen && (!isNullOrUndefined(currentTarget) ||
            !this.isFilterLayout() && isNullOrUndefined(target))) {
            if (this.getModuleName() === 'dropdownlist' && this.allowFiltering && this.isPopupOpen) {
                this.filterInput.focus();
            }
            else {
                this.targetElement().focus();
            }
            return;
        }
        if (this.isDocumentClick || (!isNullOrUndefined(this.popupObj)
            && document.body.contains(this.popupObj.element) &&
            this.popupObj.element.classList.contains(dropDownListClasses.mobileFilter))) {
            if (!this.beforePopupOpen) {
                this.isDocumentClick = false;
            }
            return;
        }
        if (((this.getModuleName() === 'dropdownlist' && !this.isFilterFocus && target !== this.inputElement)
            && (document.activeElement !== target || (document.activeElement === target &&
                currentTarget.classList.contains(dropDownListClasses.inputFocus)))) ||
            (isNullOrUndefined(target) && this.getModuleName() === 'dropdownlist' && this.allowFiltering &&
                currentTarget !== this.inputWrapper.container) || this.getModuleName() !== 'dropdownlist' &&
            !this.inputWrapper.container.contains(target) || this.isTabKey) {
            this.isDocumentClick = this.isPopupOpen ? true : false;
            this.focusOutAction();
            this.isTabKey = false;
        }
    };
    DropDownList.prototype.focusOutAction = function () {
        this.isInteracted = false;
        this.focusOut();
        this.onFocusOut();
    };
    DropDownList.prototype.onFocusOut = function () {
        if (this.isSelected) {
            this.isSelectCustom = false;
            this.onChangeEvent(null);
        }
        this.floatLabelChange();
        this.dispatchEvent(this.hiddenElement, 'change');
        if (this.inputWrapper.clearButton) {
            addClass([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
        }
        this.trigger('blur');
    };
    DropDownList.prototype.onFocus = function () {
        if (!this.isInteracted) {
            this.isInteracted = true;
            this.trigger('focus');
        }
        this.updateIconState();
    };
    DropDownList.prototype.wireEvent = function () {
        EventHandler.add(this.inputWrapper.container, 'mousedown', this.dropDownClick, this);
        EventHandler.add(this.inputWrapper.container, 'focus', this.focusIn, this);
        EventHandler.add(this.inputWrapper.container, 'keypress', this.onSearch, this);
        this.bindCommonEvent();
    };
    DropDownList.prototype.bindCommonEvent = function () {
        EventHandler.add(this.targetElement(), 'blur', this.onBlur, this);
        if (!Browser.isDevice) {
            this.keyboardModule = new KeyboardEvents(this.targetElement(), {
                keyAction: this.keyActionHandler.bind(this), keyConfigs: this.keyConfigure, eventName: 'keydown'
            });
        }
        this.bindClearEvent();
    };
    DropDownList.prototype.bindClearEvent = function () {
        if (this.showClearButton) {
            EventHandler.add(this.inputWrapper.clearButton, 'mousedown', this.resetHandler, this);
        }
    };
    DropDownList.prototype.unBindCommonEvent = function () {
        EventHandler.remove(this.targetElement(), 'blur', this.onBlur);
        if (!Browser.isDevice) {
            this.keyboardModule.destroy();
        }
        if (this.showClearButton) {
            EventHandler.remove(this.inputWrapper.clearButton, 'mousedown', this.resetHandler);
        }
    };
    DropDownList.prototype.updateIconState = function () {
        if (this.showClearButton) {
            if (this.inputElement.value !== '') {
                removeClass([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
            }
            else {
                addClass([this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
            }
        }
    };
    DropDownList.prototype.wireListEvents = function () {
        EventHandler.add(this.list, 'click', this.onMouseClick, this);
        EventHandler.add(this.list, 'mouseover', this.onMouseOver, this);
        EventHandler.add(this.list, 'mouseout', this.onMouseLeave, this);
    };
    ;
    DropDownList.prototype.onSearch = function (e) {
        if (e.charCode !== 32 && e.charCode !== 13) {
            if (this.list === undefined) {
                this.renderList();
            }
            this.searchKeyEvent = e;
            if (!this.isRequested && !isNullOrUndefined(this.list.querySelector('li'))) {
                this.incrementalSearch(e);
            }
        }
    };
    DropDownList.prototype.onMouseClick = function (e) {
        var target = e.target;
        var classList = target.classList;
        var li = closest(target, '.' + dropDownBaseClasses.li);
        if (!this.isValidLI(li)) {
            return;
        }
        this.setSelection(li, e);
        if (Browser.isDevice && this.isFilterLayout()) {
            history.back();
        }
        else {
            var delay = 100;
            this.closePopup(delay);
        }
    };
    DropDownList.prototype.onMouseOver = function (e) {
        var currentLi = closest(e.target, '.' + dropDownBaseClasses.li);
        this.setHover(currentLi);
    };
    ;
    DropDownList.prototype.setHover = function (li) {
        if (this.enabled && this.isValidLI(li) && !li.classList.contains(dropDownBaseClasses.hover)) {
            this.removeHover();
            addClass([li], dropDownBaseClasses.hover);
        }
    };
    ;
    DropDownList.prototype.onMouseLeave = function (e) {
        this.removeHover();
    };
    ;
    DropDownList.prototype.removeHover = function () {
        var hoveredItem = this.list.querySelectorAll('.' + dropDownBaseClasses.hover);
        if (hoveredItem && hoveredItem.length) {
            removeClass(hoveredItem, dropDownBaseClasses.hover);
        }
    };
    ;
    DropDownList.prototype.isValidLI = function (li) {
        return (li && li.hasAttribute('role') && li.getAttribute('role') === 'option');
    };
    ;
    DropDownList.prototype.incrementalSearch = function (e) {
        if (this.liCollections.length > 0) {
            var li = incrementalSearch(e.charCode, this.liCollections, this.activeIndex, true);
            if (!isNullOrUndefined(li)) {
                this.setSelection(li, e);
                this.setScrollPosition();
            }
        }
    };
    ;
    DropDownList.prototype.hideSpinner = function () {
        if (!isNullOrUndefined(this.spinnerElement)) {
            hideSpinner(this.spinnerElement);
            removeClass([this.spinnerElement], dropDownListClasses.disableIcon);
            this.spinnerElement.innerHTML = '';
            this.spinnerElement = null;
        }
    };
    DropDownList.prototype.showSpinner = function () {
        if (isNullOrUndefined(this.spinnerElement)) {
            this.spinnerElement = Browser.isDevice && !isNullOrUndefined(this.filterInputObj) && this.filterInputObj.buttons[1] ||
                !isNullOrUndefined(this.filterInputObj) && this.filterInputObj.buttons[0] || this.inputWrapper.buttons[0];
            addClass([this.spinnerElement], dropDownListClasses.disableIcon);
            createSpinner({
                target: this.spinnerElement,
                width: SPINNER_SIZE
            });
            showSpinner(this.spinnerElement);
        }
    };
    DropDownList.prototype.keyActionHandler = function (e) {
        var preventAction = e.action === 'pageUp' || e.action === 'pageDown';
        var preventHomeEnd = this.getModuleName() !== 'dropdownlist' && (e.action === 'home' || e.action === 'end');
        this.isEscapeKey = e.action === 'escape';
        this.isTabKey = !this.isPopupOpen && e.action === 'tab';
        var isNavigation = (e.action === 'down' || e.action === 'up' || e.action === 'pageUp' || e.action === 'pageDown'
            || e.action === 'home' || e.action === 'end');
        if ((this.isEditTextBox() || preventAction || preventHomeEnd) && !this.isPopupOpen) {
            return;
        }
        if (!this.readonly) {
            var isTabAction = e.action === 'tab' || e.action === 'close';
            if (this.list === undefined && !this.isRequested && !isTabAction && e.action !== 'escape') {
                this.searchKeyEvent = e;
                this.renderList();
            }
            if (isNullOrUndefined(this.list) || (!isNullOrUndefined(this.liCollections) &&
                isNavigation && this.liCollections.length === 0) || this.isRequested) {
                return;
            }
            if (isTabAction && this.isPopupOpen || e.action === 'escape') {
                e.preventDefault();
            }
            this.isSelected = e.action === 'escape' ? false : this.isSelected;
            this.isTyped = (isNavigation || e.action === 'escape') ? false : this.isTyped;
            switch (e.action) {
                case 'down':
                case 'up':
                    var focusEle = this.list.querySelector('.' + dropDownListClasses.focus);
                    if (this.isSelectFocusItem(focusEle)) {
                        this.setSelection(focusEle, e);
                    }
                    else {
                        var nextItem = void 0;
                        var index = e.action === 'down' ? this.activeIndex + 1 : this.activeIndex - 1;
                        var startIndex = 0;
                        if (this.getModuleName() === 'autocomplete') {
                            startIndex = e.action === 'down' && isNullOrUndefined(this.activeIndex) ? 0 : this.liCollections.length - 1;
                            index = index < 0 ? this.liCollections.length - 1 : index === this.liCollections.length ? 0 : index;
                        }
                        nextItem = isNullOrUndefined(this.activeIndex) ? this.liCollections[startIndex] : this.liCollections[index];
                        this.setSelection(nextItem, e);
                    }
                    e.preventDefault();
                    break;
                case 'pageUp':
                    this.pageUpSelection(this.activeIndex - this.getPageCount(), e);
                    e.preventDefault();
                    break;
                case 'pageDown':
                    this.pageDownSelection(this.activeIndex + this.getPageCount(), e);
                    e.preventDefault();
                    break;
                case 'home':
                    e.preventDefault();
                    if (this.activeIndex === 0) {
                        return;
                    }
                    this.setSelection(this.liCollections[0], e);
                    break;
                case 'end':
                    e.preventDefault();
                    var lastLi = this.getItems().length - 1;
                    if (this.activeIndex === lastLi) {
                        return;
                    }
                    this.setSelection(this.liCollections[lastLi], e);
                    break;
                case 'space':
                    if (this.getModuleName() === 'dropdownlist') {
                        if (!this.beforePopupOpen) {
                            this.showPopup();
                        }
                        else {
                            e.preventDefault();
                        }
                    }
                    break;
                case 'open':
                    this.showPopup();
                    break;
                case 'hide':
                    this.preventAltUp = this.isPopupOpen;
                    this.hidePopup();
                    this.focusDropDown(e);
                    break;
                case 'enter':
                    this.selectCurrentItem(e);
                    break;
                case 'escape':
                case 'tab':
                case 'close':
                    if (this.isPopupOpen) {
                        this.hidePopup();
                        this.focusDropDown(e);
                    }
                    break;
            }
        }
    };
    DropDownList.prototype.selectCurrentItem = function (e) {
        if (this.isPopupOpen) {
            var li = this.list.querySelector('.' + dropDownListClasses.focus);
            if (li) {
                this.setSelection(li, e);
                this.isTyped = false;
            }
            if (this.isSelected) {
                this.isSelectCustom = false;
                this.onChangeEvent(e);
            }
            this.hidePopup();
            this.focusDropDown(e);
        }
        else {
            this.showPopup();
        }
    };
    DropDownList.prototype.isSelectFocusItem = function (element) {
        return !isNullOrUndefined(element);
    };
    DropDownList.prototype.getPageCount = function () {
        var liHeight = this.list.classList.contains(dropDownBaseClasses.noData) ? null :
            getComputedStyle(this.getItems()[0], null).getPropertyValue('height');
        return Math.round(this.list.getBoundingClientRect().height / parseInt(liHeight, 10));
    };
    DropDownList.prototype.pageUpSelection = function (steps, event) {
        var previousItem = steps >= 0 ? this.liCollections[steps + 1] : this.liCollections[0];
        this.setSelection(previousItem, event);
    };
    ;
    DropDownList.prototype.pageDownSelection = function (steps, event) {
        var list = this.getItems();
        var previousItem = steps <= list.length ? this.liCollections[steps - 1] : this.liCollections[list.length - 1];
        this.setSelection(previousItem, event);
    };
    ;
    DropDownList.prototype.unWireEvent = function () {
        EventHandler.remove(this.inputWrapper.container, 'mousedown', this.dropDownClick);
        EventHandler.remove(this.inputWrapper.container, 'keypress', this.onSearch);
        EventHandler.remove(this.inputWrapper.container, 'focus', this.focusIn);
        this.unBindCommonEvent();
    };
    DropDownList.prototype.unWireListEvents = function () {
        EventHandler.remove(this.list, 'click', this.onMouseClick);
        EventHandler.remove(this.list, 'mouseover', this.onMouseOver);
        EventHandler.remove(this.list, 'mouseout', this.onMouseLeave);
    };
    ;
    DropDownList.prototype.onDocumentClick = function (e) {
        var target = e.target;
        if (!(!isNullOrUndefined(this.popupObj) && closest(target, '#' + this.popupObj.element.id)) &&
            !this.inputWrapper.container.contains(e.target)) {
            if (this.inputWrapper.container.classList.contains(dropDownListClasses.inputFocus) || this.isPopupOpen) {
                this.isDocumentClick = true;
                var isActive = this.isRequested;
                this.isInteracted = false;
                this.hidePopup();
                if (!isActive) {
                    this.onFocusOut();
                    this.inputWrapper.container.classList.remove(dropDownListClasses.inputFocus);
                }
            }
        }
        else if (target !== this.inputElement && !(this.allowFiltering && target === this.filterInput)
            && !(this.getModuleName() === 'combobox' &&
                !this.allowFiltering && Browser.isDevice && target === this.inputWrapper.buttons[0])) {
            this.isPreventBlur = (Browser.isIE || Browser.info.name === 'edge') && (document.activeElement === this.targetElement() ||
                document.activeElement === this.filterInput);
            e.preventDefault();
        }
    };
    DropDownList.prototype.activeStateChange = function () {
        if (this.isDocumentClick) {
            this.hidePopup();
            this.onFocusOut();
            this.inputWrapper.container.classList.remove(dropDownListClasses.inputFocus);
        }
    };
    DropDownList.prototype.focusDropDown = function (e) {
        if (!this.initial && this.isFilterLayout()) {
            this.focusIn();
        }
    };
    DropDownList.prototype.dropDownClick = function (e) {
        if (this.targetElement().classList.contains(dropDownListClasses.disable) || this.inputWrapper.clearButton === e.target) {
            return;
        }
        var target = e.target;
        if (target !== this.inputElement && !(this.allowFiltering && target === this.filterInput) && this.getModuleName() !== 'combobox') {
            e.preventDefault();
        }
        if (!this.readonly) {
            if (this.isPopupOpen) {
                this.hidePopup();
                if (this.isFilterLayout()) {
                    this.focusDropDown(e);
                }
            }
            else {
                this.focusIn();
                this.floatLabelChange();
                this.queryString = this.inputElement.value.trim() === '' ? null : this.inputElement.value;
                this.isDropDownClick = true;
                this.showPopup();
            }
        }
    };
    DropDownList.prototype.updateSelectedItem = function (li, e, preventSelect) {
        this.removeSelection();
        li.classList.add(dropDownBaseClasses.selected);
        this.removeHover();
        var value = this.getFormattedValue(li.getAttribute('data-value'));
        this.item = li;
        this.itemData = this.getDataByValue(value);
        if (!this.initial && !preventSelect) {
            this.isSelected = true;
            var eventArgs = {
                e: e,
                item: this.item,
                itemData: this.itemData,
                isInteracted: e ? true : false
            };
            this.trigger('select', eventArgs);
        }
        var focusedItem = this.list.querySelector('.' + dropDownBaseClasses.focus);
        if (focusedItem) {
            removeClass([focusedItem], dropDownBaseClasses.focus);
        }
        li.setAttribute('aria-selected', 'true');
        this.activeIndex = this.getIndexByValue(value);
    };
    DropDownList.prototype.activeItem = function (li) {
        if (this.isValidLI(li) && !li.classList.contains(dropDownBaseClasses.selected)) {
            this.removeSelection();
            li.classList.add(dropDownBaseClasses.selected);
            this.removeHover();
            li.setAttribute('aria-selected', 'true');
        }
    };
    DropDownList.prototype.setValue = function (e) {
        var dataItem = this.getItemData();
        if (dataItem.value === null) {
            Input.setValue(null, this.inputElement, this.floatLabelType, this.showClearButton);
        }
        else {
            Input.setValue(dataItem.text, this.inputElement, this.floatLabelType, this.showClearButton);
        }
        if (this.previousValue === dataItem.value) {
            this.isSelected = false;
            return true;
        }
        else {
            this.isSelected = !this.initial ? true : false;
            this.isSelectCustom = false;
            if (this.getModuleName() === 'dropdownlist') {
                this.updateIconState();
            }
            return false;
        }
    };
    DropDownList.prototype.setSelection = function (li, e) {
        if (this.isValidLI(li) && !li.classList.contains(dropDownBaseClasses.selected)) {
            this.updateSelectedItem(li, e, false);
        }
        if (this.list) {
            this.removeHover();
        }
        this.selectedLI = li;
        if (this.setValue(e)) {
            return;
        }
        if (this.valueTemplate && this.itemData !== null) {
            this.setValueTemplate();
        }
        else if (this.inputElement.previousSibling === this.valueTempElement) {
            detach(this.valueTempElement);
            this.inputElement.style.display = 'block';
        }
        if (this.isPopupOpen) {
            attributes(this.targetElement(), { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
            if (this.isFilterLayout()) {
                attributes(this.filterInput, { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
            }
        }
        if ((!this.isPopupOpen && !isNullOrUndefined(li)) || (this.isPopupOpen && !isNullOrUndefined(e) &&
            (e.type !== 'keydown' || e.type === 'keydown' && e.action === 'enter'))) {
            this.isSelectCustom = false;
            this.onChangeEvent(e);
        }
        if (this.isPopupOpen && !isNullOrUndefined(this.selectedLI) && this.itemData !== null && (!e || e.type !== 'click')) {
            this.setScrollPosition(e);
        }
    };
    DropDownList.prototype.setValueTemplate = function () {
        var compiledString;
        if (!this.valueTempElement) {
            this.valueTempElement = createElement('span', { className: dropDownListClasses.value });
            this.inputElement.parentElement.insertBefore(this.valueTempElement, this.inputElement);
            this.inputElement.style.display = 'none';
            this.inputWrapper.container.focus();
            addClass([this.inputWrapper.container], [dropDownListClasses.inputFocus]);
        }
        this.valueTempElement.innerHTML = '';
        compiledString = compile(this.valueTemplate);
        for (var _i = 0, _a = compiledString(this.itemData); _i < _a.length; _i++) {
            var item = _a[_i];
            this.valueTempElement.appendChild(item);
        }
    };
    DropDownList.prototype.removeSelection = function () {
        var selectedItems = this.list.querySelectorAll('.' + dropDownBaseClasses.selected);
        if (selectedItems.length) {
            removeClass(selectedItems, dropDownBaseClasses.selected);
            selectedItems[0].removeAttribute('aria-selected');
        }
    };
    ;
    DropDownList.prototype.getItemData = function () {
        var fields = this.fields;
        var dataItem = {};
        dataItem = this.itemData;
        var value = (!isNullOrUndefined(dataItem) &&
            (dataItem[fields.value] === null || dataItem[fields.value]) ? dataItem[fields.value] : dataItem);
        var text = (!isNullOrUndefined(dataItem) &&
            (dataItem[fields.text] === null || dataItem[fields.text]) ? dataItem[fields.text] : dataItem);
        return { value: value, text: text };
    };
    DropDownList.prototype.onChangeEvent = function (eve) {
        var dataItem = this.getItemData();
        var index = this.isSelectCustom ? null : this.activeIndex;
        this.setProperties({ 'value': dataItem.value, 'index': index, 'text': dataItem.text }, true);
        this.detachChangeEvent(eve);
    };
    ;
    DropDownList.prototype.detachChangeEvent = function (eve) {
        this.isSelected = false;
        this.previousValue = this.value;
        this.activeIndex = this.index;
        this.typedString = !isNullOrUndefined(this.text) ? this.text : '';
        if (!this.initial) {
            this.setHiddenValue();
            var eventArgs = {
                e: eve,
                item: this.item,
                itemData: this.itemData,
                isInteracted: eve ? true : false,
                value: this.value
            };
            this.trigger('change', eventArgs);
        }
    };
    DropDownList.prototype.setHiddenValue = function () {
        if (!isNullOrUndefined(this.value)) {
            this.hiddenElement.innerHTML = '<option selected value =' + this.value + '>' + this.text + '</option>';
        }
        else {
            this.hiddenElement.innerHTML = '';
        }
    };
    DropDownList.prototype.onFilterUp = function (e) {
        this.isValidKey = e.keyCode === 40 || e.keyCode === 38 || this.isValidKey;
        if (this.isValidKey) {
            this.isValidKey = false;
            switch (e.keyCode) {
                case 38:
                case 40:
                    if (this.getModuleName() === 'autocomplete' && !this.isPopupOpen && !this.preventAltUp && !this.isRequested) {
                        this.preventAutoFill = true;
                        this.searchLists(e);
                    }
                    else {
                        this.preventAutoFill = false;
                    }
                    this.preventAltUp = false;
                    e.preventDefault();
                    break;
                case 46:
                case 8:
                    this.typedString = this.filterInput.value;
                    if (!this.isPopupOpen && this.typedString !== '' || this.isPopupOpen && this.queryString.length > 0) {
                        this.preventAutoFill = true;
                        this.searchLists(e);
                    }
                    else if (this.typedString === '') {
                        this.resetFocusElement();
                        this.activeIndex = null;
                        if (this.getModuleName() === 'autocomplete') {
                            this.hidePopup();
                        }
                    }
                    e.preventDefault();
                    break;
                default:
                    this.typedString = this.filterInput.value;
                    this.preventAutoFill = false;
                    this.searchLists(e);
                    break;
            }
        }
    };
    DropDownList.prototype.onFilterDown = function (e) {
        switch (e.keyCode) {
            case 13:
                break;
            case 40:
            case 38:
                this.queryString = this.filterInput.value;
                e.preventDefault();
                break;
            case 9:
                if (this.isPopupOpen) {
                    e.preventDefault();
                }
                break;
            default:
                this.prevSelectPoints = this.getSelectionPoints();
                this.queryString = this.filterInput.value;
                break;
        }
    };
    DropDownList.prototype.removeFillSelection = function () {
        if (this.isInteracted) {
            var selection = this.getSelectionPoints();
            this.inputElement.setSelectionRange(selection.end, selection.end);
        }
    };
    DropDownList.prototype.getSelectionPoints = function () {
        var input = this.inputElement;
        return { start: Math.abs(input.selectionStart), end: Math.abs(input.selectionEnd) };
    };
    DropDownList.prototype.searchLists = function (e) {
        var _this = this;
        this.isTyped = true;
        this.activeIndex = null;
        if (this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon)) {
            var clearElement = this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon);
            clearElement.style.visibility = this.filterInput.value === '' ? 'hidden' : 'visible';
        }
        if (this.isFiltering()) {
            this.trigger('filtering', {
                text: this.filterInput.value,
                updateData: function (dataSource, query, fields) {
                    if (!isNullOrUndefined(_this.filterInput)) {
                        _this.beforePopupOpen = true;
                        if (_this.filterInput.value.trim() === '') {
                            _this.actionCompleteData.isUpdated = false;
                            _this.isTyped = false;
                            _this.onActionComplete(_this.actionCompleteData.ulElement, _this.actionCompleteData.list);
                            _this.isTyped = true;
                            if (!isNullOrUndefined(_this.itemData) && _this.getModuleName() === 'dropdownlist') {
                                _this.focusIndexItem();
                                _this.setScrollPosition();
                            }
                            _this.isNotSearchList = true;
                        }
                        else {
                            _this.isNotSearchList = false;
                            _this.resetList(dataSource, fields, query);
                        }
                    }
                },
                event: e
            });
        }
    };
    DropDownList.prototype.setSearchBox = function (popupElement) {
        if (this.isFiltering()) {
            var parentElement = createElement('span', {
                className: dropDownListClasses.filterParent
            });
            this.filterInput = createElement('input', {
                attrs: { type: 'text' },
                className: dropDownListClasses.filterInput
            });
            this.element.parentNode.insertBefore(this.filterInput, this.element);
            var backIcon = false;
            if (Browser.isDevice) {
                backIcon = true;
            }
            this.filterInputObj = Input.createInput({
                element: this.filterInput,
                buttons: backIcon ?
                    [dropDownListClasses.backIcon, dropDownListClasses.filterBarClearIcon] : [dropDownListClasses.filterBarClearIcon],
                properties: { placeholder: this.filterBarPlaceholder }
            });
            append([this.filterInputObj.container], parentElement);
            prepend([parentElement], popupElement);
            attributes(this.filterInput, {
                'aria-disabled': 'false',
                'aria-owns': this.element.id + '_options',
                'role': 'listbox',
                'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null,
                'autocomplete': 'off',
                'autocorrect': 'off',
                'autocapitalize': 'off',
                'spellcheck': 'false'
            });
            this.clearIconElement = this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon);
            if (!Browser.isDevice && this.clearIconElement) {
                EventHandler.add(this.clearIconElement, 'click', this.clearText, this);
                this.clearIconElement.style.visibility = 'hidden';
            }
            if (!Browser.isDevice) {
                this.searchKeyModule = new KeyboardEvents(this.filterInput, {
                    keyAction: this.keyActionHandler.bind(this),
                    keyConfigs: this.keyConfigure,
                    eventName: 'keydown'
                });
            }
            EventHandler.add(this.filterInput, 'input', this.onInput, this);
            EventHandler.add(this.filterInput, 'keyup', this.onFilterUp, this);
            EventHandler.add(this.filterInput, 'keydown', this.onFilterDown, this);
            EventHandler.add(this.filterInput, 'blur', this.onBlur, this);
            return this.filterInputObj;
        }
        else {
            return inputObject;
        }
    };
    ;
    DropDownList.prototype.onInput = function () {
        this.isValidKey = true;
    };
    DropDownList.prototype.onActionFailure = function (e) {
        _super.prototype.onActionFailure.call(this, e);
        this.renderPopup();
    };
    DropDownList.prototype.onActionComplete = function (ulElement, list, e, isUpdated) {
        if (this.isNotSearchList) {
            this.isNotSearchList = false;
            return;
        }
        if (this.isActive) {
            var selectedItem = this.selectedLI ? this.selectedLI.cloneNode(true) : null;
            _super.prototype.onActionComplete.call(this, ulElement, list, e);
            if (this.isRequested && !isNullOrUndefined(this.searchKeyEvent) && this.searchKeyEvent.type === 'keydown') {
                this.isRequested = false;
                this.keyActionHandler(this.searchKeyEvent);
                this.searchKeyEvent = null;
            }
            if (this.isRequested && !isNullOrUndefined(this.searchKeyEvent)) {
                this.incrementalSearch(this.searchKeyEvent);
                this.searchKeyEvent = null;
            }
            this.list.scrollTop = 0;
            if (!isNullOrUndefined(ulElement)) {
                attributes(ulElement, { 'id': this.element.id + '_options', 'role': 'listbox', 'aria-hidden': 'false' });
            }
            if (this.initRemoteRender) {
                this.initial = true;
                this.activeIndex = this.index;
                this.updateValues();
                this.initRemoteRender = false;
                this.initial = false;
            }
            if (this.getModuleName() !== 'autocomplete' && this.isFiltering() && !this.isTyped) {
                if (!this.actionCompleteData.isUpdated) {
                    this.actionCompleteData = { ulElement: ulElement.cloneNode(true), list: list, isUpdated: true };
                }
                this.addNewItem(list, selectedItem);
                if (!isNullOrUndefined(this.itemData)) {
                    this.focusIndexItem();
                }
            }
            if (this.beforePopupOpen) {
                this.renderPopup();
            }
        }
    };
    DropDownList.prototype.addNewItem = function (listData, newElement) {
        var _this = this;
        if (!isNullOrUndefined(this.itemData) && !isNullOrUndefined(newElement)) {
            var value_1 = this.getItemData().value;
            var isExist = listData.some(function (data) {
                return data[_this.fields.value] === value_1;
            });
            if (!isExist) {
                this.addItem(this.itemData);
                this.actionCompleteData.list.push(this.itemData);
                this.actionCompleteData.ulElement.appendChild(newElement);
            }
            var selectedItems = void 0;
            var ulElement = this.actionCompleteData.ulElement;
            selectedItems = ulElement.querySelectorAll('.' + dropDownBaseClasses.selected);
            if (selectedItems.length) {
                removeClass(selectedItems, dropDownBaseClasses.selected);
                selectedItems[0].removeAttribute('aria-selected');
            }
        }
    };
    DropDownList.prototype.updateActionCompleteData = function (li, item) {
        if (this.getModuleName() !== 'autocomplete' && this.actionCompleteData.ulElement) {
            this.actionCompleteData.ulElement.appendChild(li.cloneNode(true));
            this.actionCompleteData.list.push(item);
        }
    };
    DropDownList.prototype.focusIndexItem = function () {
        var value = this.getItemData().value;
        this.activeIndex = this.getIndexByValue(value);
        var element = this.list.querySelector('[data-value="' + value + '"]');
        this.selectedLI = element;
        this.activeItem(element);
        this.removeFocus();
    };
    DropDownList.prototype.updateSelection = function () {
        var selectedItem = this.list.querySelector('.' + dropDownBaseClasses.selected);
        if (selectedItem) {
            this.setProperties({ 'index': this.getIndexByValue(selectedItem.getAttribute('data-value')) });
            this.activeIndex = this.index;
        }
        else {
            this.removeFocus();
            this.list.querySelector('.' + dropDownBaseClasses.li).classList.add(dropDownListClasses.focus);
        }
    };
    DropDownList.prototype.removeFocus = function () {
        var highlightedItem = this.list.querySelectorAll('.' + dropDownListClasses.focus);
        if (highlightedItem && highlightedItem.length) {
            removeClass(highlightedItem, dropDownListClasses.focus);
        }
    };
    ;
    DropDownList.prototype.renderPopup = function () {
        if (this.popupObj && document.body.contains(this.popupObj.element)) {
            this.refreshPopup();
            return;
        }
        var popupEle = createElement('div', { id: this.element.id + '_popup', className: 'e-ddl e-popup' });
        var searchBox = this.setSearchBox(popupEle);
        this.listHeight = formatUnit(this.popupHeight);
        if (this.headerTemplate) {
            var compiledString = void 0;
            this.header = document.createElement('div');
            addClass([this.header], dropDownListClasses.header);
            compiledString = compile(this.headerTemplate);
            for (var _i = 0, _a = compiledString({}); _i < _a.length; _i++) {
                var item = _a[_i];
                this.header.appendChild(item);
            }
            append([this.header], popupEle);
        }
        append([this.list], popupEle);
        if (this.footerTemplate) {
            this.setFooterTemplate(popupEle);
        }
        document.body.appendChild(popupEle);
        popupEle.style.visibility = 'hidden';
        if (this.popupHeight !== 'auto') {
            this.searchBoxHeight = 0;
            if (!isNullOrUndefined(searchBox.container)) {
                this.searchBoxHeight = (searchBox.container.parentElement).getBoundingClientRect().height;
                this.listHeight = (parseInt(this.listHeight, 10) - (this.searchBoxHeight)).toString() + 'px';
            }
            if (this.headerTemplate) {
                var height = Math.round(this.header.getBoundingClientRect().height);
                this.listHeight = (parseInt(this.listHeight, 10) - (height + this.searchBoxHeight)).toString() + 'px';
            }
            if (this.footerTemplate) {
                var height = Math.round(this.footer.getBoundingClientRect().height);
                this.listHeight = (parseInt(this.listHeight, 10) - (height + this.searchBoxHeight)).toString() + 'px';
            }
            this.list.style.maxHeight = (parseInt(this.listHeight, 10) - 2).toString() + 'px';
            popupEle.style.maxHeight = formatUnit(this.popupHeight);
        }
        else {
            popupEle.style.height = 'auto';
        }
        var offsetValue = 0;
        var left;
        if (!isNullOrUndefined(this.selectedLI) && (!isNullOrUndefined(this.activeIndex) && this.activeIndex >= 0)) {
            this.setScrollPosition();
        }
        else {
            this.list.scrollTop = 0;
        }
        if (Browser.isDevice && (!this.allowFiltering && (this.getModuleName() === 'dropdownlist' ||
            (this.isDropDownClick && this.getModuleName() === 'combobox')))) {
            offsetValue = this.getOffsetValue(popupEle);
            var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
            left = -(parseInt(getComputedStyle(firstItem).textIndent, 10) -
                parseInt(getComputedStyle(this.inputElement).paddingLeft, 10) +
                parseInt(getComputedStyle(this.inputElement.parentElement).borderLeftWidth, 10));
        }
        this.getFocusElement();
        this.createPopup(popupEle, offsetValue, left);
        this.checkCollision(popupEle);
        if (Browser.isDevice) {
            this.popupObj.element.classList.add(dropDownListClasses.device);
            if (this.getModuleName() === 'dropdownlist' || (this.getModuleName() === 'combobox'
                && !this.allowFiltering && this.isDropDownClick)) {
                this.popupObj.collision = { X: 'none', Y: 'fit' };
            }
            if (this.isFilterLayout()) {
                this.popupObj.element.classList.add(dropDownListClasses.mobileFilter);
                this.popupObj.position = { X: 0, Y: 0 };
                this.popupObj.dataBind();
                attributes(this.popupObj.element, { style: 'left:0px;right:0px;top:0px;bottom:0px;' });
                addClass([document.body, this.popupObj.element], dropDownListClasses.popupFullScreen);
                this.setSearchBoxPosition();
                this.backIconElement = searchBox.container.querySelector('.e-back-icon');
                this.clearIconElement = searchBox.container.querySelector('.' + dropDownListClasses.clearIcon);
                EventHandler.add(this.backIconElement, 'click', this.clickOnBackIcon, this);
                EventHandler.add(this.clearIconElement, 'click', this.clearText, this);
            }
        }
        popupEle.style.visibility = 'visible';
        addClass([popupEle], 'e-popup-close');
        var scrollParentElements = this.popupObj.getScrollableParent(this.inputWrapper.container);
        for (var _b = 0, scrollParentElements_1 = scrollParentElements; _b < scrollParentElements_1.length; _b++) {
            var element = scrollParentElements_1[_b];
            EventHandler.add(element, 'scroll', this.scrollHandler, this);
        }
        if (Browser.isDevice && this.isFilterLayout()) {
            EventHandler.add(this.list, 'scroll', this.listScroll, this);
        }
        attributes(this.targetElement(), { 'aria-expanded': 'true' });
        var inputParent = this.isFiltering() ? this.filterInput.parentElement : this.inputWrapper.container;
        addClass([inputParent], [dropDownListClasses.inputFocus]);
        addClass([this.inputWrapper.container], [dropDownListClasses.iconAnimation]);
        var animModel = { name: 'FadeIn', duration: 100 };
        this.beforePopupOpen = true;
        var eventArgs = { popup: this.popupObj };
        this.trigger('open', eventArgs);
        EventHandler.add(document, 'mousedown', this.onDocumentClick, this);
        this.popupObj.show(new Animation(animModel));
    };
    DropDownList.prototype.checkCollision = function (popupEle) {
        if (!Browser.isDevice || (Browser.isDevice && !(this.getModuleName() === 'dropdownlist' || this.isDropDownClick))) {
            var collision = isCollide(popupEle);
            if (collision.length > 0) {
                popupEle.style.marginTop = -parseInt(getComputedStyle(popupEle).marginTop, 10) + 'px';
            }
        }
    };
    DropDownList.prototype.getOffsetValue = function (popupEle) {
        var popupStyles = getComputedStyle(popupEle);
        var borderTop = parseInt(popupStyles.borderTop, 10);
        var borderBottom = parseInt(popupStyles.borderBottom, 10);
        return this.setPopupPosition(borderTop + borderBottom);
    };
    DropDownList.prototype.createPopup = function (element, offsetValue, left) {
        var _this = this;
        this.popupObj = new Popup(element, {
            width: this.setWidth(), targetType: 'relative',
            relateTo: this.inputWrapper.container, collision: { X: 'none', Y: 'flip' }, offsetY: offsetValue,
            enableRtl: this.enableRtl, offsetX: left, position: { X: 'left', Y: 'bottom' },
            close: function () {
                if (!_this.isDocumentClick) {
                    _this.focusDropDown();
                }
                _this.isDocumentClick = false;
                _this.destroyPopup();
            },
            open: function () {
                _this.isPopupOpen = true;
                if (_this.isFilterLayout()) {
                    removeClass([_this.inputWrapper.container], [dropDownListClasses.inputFocus]);
                    _this.isFilterFocus = true;
                    _this.filterInput.focus();
                    if (_this.inputWrapper.clearButton) {
                        addClass([_this.inputWrapper.clearButton], dropDownListClasses.clearIconHide);
                    }
                }
                _this.activeStateChange();
            }
        });
    };
    DropDownList.prototype.isEmptyList = function () {
        return !isNullOrUndefined(this.liCollections) && this.liCollections.length === 0;
    };
    DropDownList.prototype.getFocusElement = function () {
    };
    DropDownList.prototype.isFilterLayout = function () {
        return this.getModuleName() === 'dropdownlist' && this.allowFiltering;
    };
    DropDownList.prototype.scrollHandler = function () {
        if (Browser.isDevice && ((this.getModuleName() === 'dropdownlist' &&
            !this.isFilterLayout()) || (this.getModuleName() === 'combobox' && !this.allowFiltering && this.isDropDownClick))) {
            this.hidePopup();
        }
    };
    DropDownList.prototype.setSearchBoxPosition = function () {
        var searchBoxHeight = this.filterInput.parentElement.getBoundingClientRect().height;
        this.popupObj.element.style.maxHeight = '100%';
        this.popupObj.element.style.width = '100%';
        this.list.style.maxHeight = (window.innerHeight - searchBoxHeight) + 'px';
        this.list.style.height = (window.innerHeight - searchBoxHeight) + 'px';
        var clearElement = this.filterInput.parentElement.querySelector('.' + dropDownListClasses.clearIcon);
        detach(this.filterInput);
        clearElement.parentElement.insertBefore(this.filterInput, clearElement);
    };
    DropDownList.prototype.setPopupPosition = function (border) {
        var offsetValue;
        var popupOffset = border;
        var selectedLI = this.list.querySelector('.' + dropDownListClasses.focus) || this.selectedLI;
        var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
        var lastItem = this.isEmptyList() ? this.list : this.liCollections[this.getItems().length - 1];
        var liHeight = firstItem.getBoundingClientRect().height;
        var listHeight = this.list.offsetHeight / 2;
        var height = isNullOrUndefined(selectedLI) ? firstItem.offsetTop : selectedLI.offsetTop;
        var lastItemOffsetValue = lastItem.offsetTop;
        if (lastItemOffsetValue - listHeight < height && !isNullOrUndefined(this.liCollections) &&
            this.liCollections.length > 0 && !isNullOrUndefined(selectedLI)) {
            var count = this.list.offsetHeight / liHeight;
            var paddingBottom = parseInt(getComputedStyle(this.list).paddingBottom, 10);
            offsetValue = (count - (this.liCollections.length - this.activeIndex)) * liHeight - popupOffset + paddingBottom;
            this.list.scrollTop = selectedLI.offsetTop;
        }
        else if (height > listHeight) {
            offsetValue = listHeight - liHeight / 2;
            this.list.scrollTop = height - listHeight + liHeight / 2;
        }
        else {
            offsetValue = height;
        }
        var inputHeight = this.inputWrapper.container.offsetHeight;
        offsetValue = offsetValue + liHeight + popupOffset - ((liHeight - inputHeight) / 2);
        return -offsetValue;
    };
    DropDownList.prototype.setWidth = function () {
        var width = formatUnit(this.popupWidth);
        if (width.indexOf('%') > -1) {
            var inputWidth = this.inputWrapper.container.offsetWidth * parseFloat(width) / 100;
            width = inputWidth.toString() + 'px';
        }
        if (Browser.isDevice && (!this.allowFiltering && (this.getModuleName() === 'dropdownlist' ||
            (this.isDropDownClick && this.getModuleName() === 'combobox')))) {
            var firstItem = this.isEmptyList() ? this.list : this.liCollections[0];
            width = (parseInt(width, 10) + (parseInt(getComputedStyle(firstItem).textIndent, 10) -
                parseInt(getComputedStyle(this.inputElement).paddingLeft, 10) +
                parseInt(getComputedStyle(this.inputElement.parentElement).borderLeftWidth, 10)) * 2) + 'px';
        }
        return width;
    };
    DropDownList.prototype.scrollBottom = function (isInitial) {
        var currentOffset = this.list.offsetHeight;
        var nextBottom = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
        var nextOffset = this.list.scrollTop + nextBottom - currentOffset;
        nextOffset = isInitial ? nextOffset + parseInt(getComputedStyle(this.list).paddingTop, 10) * 2 : nextOffset;
        var boxRange = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
        boxRange = this.fields.groupBy && !isNullOrUndefined(this.fixedHeaderElement) ?
            boxRange - this.fixedHeaderElement.offsetHeight : boxRange;
        if (this.activeIndex === 0) {
            this.list.scrollTop = 0;
        }
        else if (nextBottom > currentOffset || !(boxRange > 0 && this.list.offsetHeight > boxRange)) {
            this.list.scrollTop = nextOffset;
        }
    };
    DropDownList.prototype.scrollTop = function () {
        var nextOffset = this.selectedLI.offsetTop - this.list.scrollTop;
        var nextBottom = this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop;
        nextOffset = this.fields.groupBy && !isNullOrUndefined(this.fixedHeaderElement) ?
            nextOffset - this.fixedHeaderElement.offsetHeight : nextOffset;
        var boxRange = (this.selectedLI.offsetTop + this.selectedLI.offsetHeight - this.list.scrollTop);
        if (this.activeIndex === 0) {
            this.list.scrollTop = 0;
        }
        else if (nextOffset < 0) {
            this.list.scrollTop = this.list.scrollTop + nextOffset;
        }
        else if (!(boxRange > 0 && this.list.offsetHeight > boxRange)) {
            this.list.scrollTop = this.selectedLI.offsetTop - (this.fields.groupBy && !isNullOrUndefined(this.fixedHeaderElement) ?
                this.fixedHeaderElement.offsetHeight : 0);
        }
    };
    DropDownList.prototype.isEditTextBox = function () {
        return false;
    };
    DropDownList.prototype.isFiltering = function () {
        return this.allowFiltering;
    };
    DropDownList.prototype.isPopupButton = function () {
        return true;
    };
    DropDownList.prototype.setScrollPosition = function (e) {
        if (!isNullOrUndefined(e)) {
            switch (e.action) {
                case 'pageDown':
                case 'down':
                case 'end':
                    this.scrollBottom();
                    break;
                default:
                    this.scrollTop();
                    break;
            }
        }
        else {
            this.scrollBottom(true);
        }
    };
    DropDownList.prototype.clearText = function () {
        this.filterInput.value = '';
        this.searchLists(null);
    };
    DropDownList.prototype.listScroll = function () {
        this.filterInput.blur();
    };
    DropDownList.prototype.closePopup = function (delay) {
        this.isTyped = false;
        if (!(this.popupObj && document.body.contains(this.popupObj.element))) {
            return;
        }
        EventHandler.remove(document, 'mousedown', this.onDocumentClick);
        this.isActive = false;
        this.filterInputObj = null;
        this.isDropDownClick = false;
        this.preventAutoFill = false;
        var scrollableParentElements = this.popupObj.getScrollableParent(this.inputWrapper.container);
        for (var _i = 0, scrollableParentElements_1 = scrollableParentElements; _i < scrollableParentElements_1.length; _i++) {
            var element = scrollableParentElements_1[_i];
            EventHandler.remove(element, 'scroll', this.scrollHandler);
        }
        if (Browser.isDevice && this.isFilterLayout()) {
            removeClass([document.body, this.popupObj.element], dropDownListClasses.popupFullScreen);
            EventHandler.remove(this.list, 'scroll', this.listScroll);
        }
        if (this.isFilterLayout()) {
            if (!Browser.isDevice) {
                this.searchKeyModule.destroy();
                if (this.clearIconElement) {
                    EventHandler.remove(this.clearIconElement, 'click', this.clearText);
                }
            }
            if (this.backIconElement) {
                EventHandler.remove(this.backIconElement, 'click', this.clickOnBackIcon);
                EventHandler.remove(this.clearIconElement, 'click', this.clearText);
            }
            EventHandler.remove(this.filterInput, 'input', this.onInput);
            EventHandler.remove(this.filterInput, 'keyup', this.onFilterUp);
            EventHandler.remove(this.filterInput, 'keydown', this.onFilterDown);
            EventHandler.remove(this.filterInput, 'blur', this.onBlur);
            this.filterInput = null;
        }
        attributes(this.targetElement(), { 'aria-expanded': 'false', 'aria-activedescendant': null });
        this.inputWrapper.container.classList.remove(dropDownListClasses.iconAnimation);
        if (this.isFiltering()) {
            this.actionCompleteData.isUpdated = false;
        }
        this.beforePopupOpen = false;
        var eventArgs = { popup: this.popupObj };
        this.trigger('close', eventArgs);
        var animModel = {
            name: 'FadeOut',
            duration: 100,
            delay: delay ? delay : 0
        };
        if (this.getModuleName() === 'autocomplete') {
            this.rippleFun();
        }
        if (this.isPopupOpen) {
            this.popupObj.hide(new Animation(animModel));
        }
        else {
            this.destroyPopup();
        }
    };
    DropDownList.prototype.destroyPopup = function () {
        this.isPopupOpen = false;
        this.isFilterFocus = false;
        this.popupObj.destroy();
        detach(this.popupObj.element);
    };
    DropDownList.prototype.clickOnBackIcon = function () {
        this.hidePopup();
        this.focusIn();
    };
    DropDownList.prototype.render = function () {
        if (this.element.tagName === 'INPUT') {
            this.inputElement = this.element;
        }
        else {
            this.inputElement = createElement('input');
            if (this.element.tagName !== this.getNgDirective()) {
                this.element.style.display = 'none';
            }
            this.element.parentElement.insertBefore(this.inputElement, this.element);
            this.preventTabIndex(this.inputElement);
        }
        this.inputWrapper = Input.createInput({
            element: this.inputElement,
            buttons: this.isPopupButton() ? [dropDownListClasses.icon] : null,
            floatLabelType: this.floatLabelType,
            properties: {
                readonly: this.getModuleName() === 'dropdownlist' ? true : this.readonly,
                placeholder: this.placeholder,
                cssClass: this.cssClass,
                enabled: this.enabled,
                enableRtl: this.enableRtl,
                showClearButton: this.showClearButton
            },
        });
        if (this.element.tagName === this.getNgDirective()) {
            this.element.appendChild(this.inputWrapper.container);
        }
        else {
            this.inputElement.parentElement.insertBefore(this.element, this.inputElement);
        }
        var name = this.element.getAttribute('name') ? this.element.getAttribute('name') : this.element.getAttribute('id');
        this.hiddenElement = createElement('select', {
            attrs: { 'name': name, 'aria-hidden': 'true' }, styles: 'display:none'
        });
        prepend([this.hiddenElement], this.inputWrapper.container);
        this.element.removeAttribute('name');
        this.setFields();
        this.inputWrapper.container.style.width = formatUnit(this.width);
        this.inputWrapper.container.classList.add('e-ddl');
        this.wireEvent();
        this.tabIndex = this.element.hasAttribute('tabindex') ? this.element.getAttribute('tabindex') : '0';
        this.element.removeAttribute('tabindex');
        var id = this.element.getAttribute('id') ? this.element.getAttribute('id') : getUniqueID('ej2_dropdownlist');
        this.element.id = id;
        this.hiddenElement.id = id + '_hidden';
        this.targetElement().setAttribute('tabindex', this.tabIndex);
        attributes(this.targetElement(), this.getAriaAttributes());
        this.setHTMLAttributes();
        if (this.value !== null || this.activeIndex !== null || this.text !== null) {
            this.initValue();
        }
        else if (this.element.tagName === 'SELECT' && this.element.options[0]) {
            var selectElement = this.element;
            this.value = selectElement.options[selectElement.selectedIndex].value;
            this.text = isNullOrUndefined(this.value) ? null : selectElement.options[selectElement.selectedIndex].textContent;
            this.initValue();
        }
        this.preventTabIndex(this.element);
        if (!this.enabled) {
            this.targetElement().tabIndex = -1;
        }
        this.initial = false;
        this.element.style.opacity = '';
    };
    ;
    DropDownList.prototype.setFooterTemplate = function (popupEle) {
        var compiledString;
        if (this.footer) {
            this.footer.innerHTML = '';
        }
        else {
            this.footer = document.createElement('div');
            addClass([this.footer], dropDownListClasses.footer);
        }
        compiledString = compile(this.footerTemplate);
        for (var _i = 0, _a = compiledString({}); _i < _a.length; _i++) {
            var item = _a[_i];
            this.footer.appendChild(item);
        }
        append([this.footer], popupEle);
    };
    DropDownList.prototype.setOldText = function (text) {
        this.text = text;
    };
    DropDownList.prototype.setOldValue = function (value) {
        this.value = value;
    };
    DropDownList.prototype.refreshPopup = function () {
        if (!isNullOrUndefined(this.popupObj) && document.body.contains(this.popupObj.element) &&
            ((this.allowFiltering && !(Browser.isDevice && this.isFilterLayout())) || this.getModuleName() === 'autocomplete')) {
            this.popupObj.refreshPosition();
        }
    };
    DropDownList.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'htmlAttributes':
                    this.setHTMLAttributes();
                    break;
                case 'width':
                    setStyleAttribute(this.inputWrapper.container, { 'width': formatUnit(newProp.width) });
                    break;
                case 'placeholder':
                    Input.setPlaceholder(newProp.placeholder, this.inputElement);
                    break;
                case 'filterBarPlaceholder':
                    Input.setPlaceholder(newProp.filterBarPlaceholder, this.filterInput);
                    break;
                case 'readonly':
                    Input.setReadonly(newProp.readonly, this.inputElement);
                    break;
                case 'cssClass':
                    Input.setCssClass(newProp.cssClass, [this.inputWrapper.container]);
                    if (this.popupObj) {
                        this.popupObj.element.classList.add(newProp.cssClass);
                    }
                    break;
                case 'enableRtl':
                    this.setEnableRtl();
                    break;
                case 'enabled':
                    this.setEnable();
                    break;
                case 'text':
                    if (newProp.text === null) {
                        this.clear();
                        return;
                    }
                    if (!this.list) {
                        if (this.dataSource instanceof DataManager) {
                            this.initRemoteRender = true;
                        }
                        this.renderList();
                    }
                    if (!this.initRemoteRender) {
                        var li = this.getElementByText(newProp.text);
                        if (this.isValidLI(li)) {
                            this.setSelection(li, null);
                        }
                        else {
                            this.setOldText(oldProp.text);
                        }
                    }
                    break;
                case 'value':
                    if (newProp.value === null) {
                        this.clear();
                        return;
                    }
                    if (!this.list) {
                        if (this.dataSource instanceof DataManager) {
                            this.initRemoteRender = true;
                        }
                        this.renderList();
                    }
                    if (!this.initRemoteRender) {
                        var item = this.getElementByValue(newProp.value);
                        if (this.isValidLI(item)) {
                            this.setSelection(item, null);
                        }
                        else {
                            this.setOldValue(oldProp.value);
                        }
                    }
                    break;
                case 'index':
                    if (newProp.index === null) {
                        this.clear();
                        return;
                    }
                    if (!this.list) {
                        if (this.dataSource instanceof DataManager) {
                            this.initRemoteRender = true;
                        }
                        this.renderList();
                    }
                    if (!this.initRemoteRender) {
                        var element = this.liCollections[newProp.index];
                        if (this.isValidLI(element)) {
                            this.setSelection(element, null);
                        }
                        else {
                            this.index = oldProp.index;
                        }
                    }
                    break;
                case 'query':
                case 'dataSource':
                    this.clear(prop);
                    this.resetList(this.dataSource);
                    break;
                case 'footerTemplate':
                    if (this.popupObj) {
                        this.setFooterTemplate(this.popupObj.element);
                    }
                    break;
                case 'floatLabelType':
                    Input.removeFloating(this.inputWrapper);
                    Input.addFloating(this.inputElement, newProp.floatLabelType, this.placeholder);
                    break;
                default:
                    var ddlProps = void 0;
                    ddlProps = this.getPropObject(prop, newProp, oldProp);
                    _super.prototype.onPropertyChanged.call(this, ddlProps.newProperty, ddlProps.oldProperty);
                    break;
            }
        }
    };
    DropDownList.prototype.getModuleName = function () {
        return 'dropdownlist';
    };
    DropDownList.prototype.showPopup = function () {
        if (this.beforePopupOpen) {
            this.refreshPopup();
            return;
        }
        this.beforePopupOpen = true;
        if (this.isFiltering() && !this.isActive && this.actionCompleteData.list && this.actionCompleteData.list[0]) {
            this.isActive = true;
            this.onActionComplete(this.actionCompleteData.ulElement, this.actionCompleteData.list, null, true);
        }
        else if (isNullOrUndefined(this.list) || !isUndefined(this.list) && this.list.classList.contains(dropDownBaseClasses.noData)) {
            this.renderList();
        }
        if (Browser.isDevice && this.isFilterLayout()) {
            var proxy_1 = this;
            window.onpopstate = function () {
                proxy_1.hidePopup();
            };
            history.pushState({}, '');
        }
        if (!isNullOrUndefined(this.list.children[0]) || this.list.classList.contains(dropDownBaseClasses.noData)) {
            this.renderPopup();
        }
        attributes(this.targetElement(), { 'aria-activedescendant': this.selectedLI ? this.selectedLI.id : null });
    };
    DropDownList.prototype.hidePopup = function () {
        if (this.isEscapeKey && this.getModuleName() === 'dropdownlist') {
            Input.setValue(this.text, this.inputElement, this.floatLabelType, this.showClearButton);
            this.isEscapeKey = false;
            if (!isNullOrUndefined(this.index)) {
                this.selectedLI = this.liCollections[this.index];
                this.updateSelectedItem(this.selectedLI, null, true);
                if (this.valueTemplate && this.itemData !== null) {
                    this.setValueTemplate();
                }
            }
            else {
                this.resetSelection();
            }
        }
        this.closePopup();
        var dataItem = this.getItemData();
        if (this.inputElement.value.trim() === '' && !this.isInteracted && (this.isSelectCustom ||
            !isNullOrUndefined(this.selectedLI) && this.inputElement.value !== dataItem.text)) {
            this.isSelectCustom = false;
            this.clear();
        }
    };
    DropDownList.prototype.focusIn = function () {
        if (this.targetElement().classList.contains(dropDownListClasses.disable)) {
            return;
        }
        var isFocused = false;
        if (this.preventFocus && Browser.isDevice) {
            this.inputWrapper.container.tabIndex = 1;
            this.inputWrapper.container.focus();
            this.preventFocus = false;
            isFocused = true;
        }
        if (!isFocused) {
            this.targetElement().focus();
        }
        addClass([this.inputWrapper.container], [dropDownListClasses.inputFocus]);
        this.onFocus();
    };
    DropDownList.prototype.focusOut = function () {
        this.isTyped = true;
        this.hidePopup();
        this.targetElement().blur();
        removeClass([this.inputWrapper.container], [dropDownListClasses.inputFocus]);
    };
    DropDownList.prototype.destroy = function () {
        var _this = this;
        this.isActive = false;
        this.hidePopup();
        this.unWireEvent();
        if (this.list) {
            this.unWireListEvents();
        }
        ['readonly', 'aria-disabled', 'aria-placeholder', 'placeholder'].forEach(function (value) {
            _this.inputElement.removeAttribute(value);
        });
        this.inputElement.setAttribute('tabindex', this.tabIndex);
        this.inputElement.classList.remove('e-input');
        Input.setValue('', this.inputElement, this.floatLabelType, this.showClearButton);
        this.element.style.display = 'block';
        if (this.inputWrapper.container.parentElement.tagName === this.getNgDirective()) {
            detach(this.inputWrapper.container);
        }
        else {
            this.inputWrapper.container.parentElement.insertBefore(this.element, this.inputWrapper.container);
            detach(this.inputWrapper.container);
        }
        _super.prototype.destroy.call(this);
    };
    ;
    return DropDownList;
}(DropDownBase));
__decorate([
    Property(null)
], DropDownList.prototype, "cssClass", void 0);
__decorate([
    Property('100%')
], DropDownList.prototype, "width", void 0);
__decorate([
    Property('300px')
], DropDownList.prototype, "popupHeight", void 0);
__decorate([
    Property('100%')
], DropDownList.prototype, "popupWidth", void 0);
__decorate([
    Property(null)
], DropDownList.prototype, "placeholder", void 0);
__decorate([
    Property(null)
], DropDownList.prototype, "filterBarPlaceholder", void 0);
__decorate([
    Property({})
], DropDownList.prototype, "htmlAttributes", void 0);
__decorate([
    Property(null)
], DropDownList.prototype, "query", void 0);
__decorate([
    Property(null)
], DropDownList.prototype, "valueTemplate", void 0);
__decorate([
    Property(null)
], DropDownList.prototype, "headerTemplate", void 0);
__decorate([
    Property(null)
], DropDownList.prototype, "footerTemplate", void 0);
__decorate([
    Property(false)
], DropDownList.prototype, "allowFiltering", void 0);
__decorate([
    Property(false)
], DropDownList.prototype, "readonly", void 0);
__decorate([
    Property(null)
], DropDownList.prototype, "text", void 0);
__decorate([
    Property(null)
], DropDownList.prototype, "value", void 0);
__decorate([
    Property(null)
], DropDownList.prototype, "index", void 0);
__decorate([
    Property('Never')
], DropDownList.prototype, "floatLabelType", void 0);
__decorate([
    Property(false)
], DropDownList.prototype, "showClearButton", void 0);
__decorate([
    Event()
], DropDownList.prototype, "filtering", void 0);
__decorate([
    Event()
], DropDownList.prototype, "change", void 0);
__decorate([
    Event()
], DropDownList.prototype, "open", void 0);
__decorate([
    Event()
], DropDownList.prototype, "close", void 0);
__decorate([
    Event()
], DropDownList.prototype, "blur", void 0);
__decorate([
    Event()
], DropDownList.prototype, "focus", void 0);
DropDownList = __decorate([
    NotifyPropertyChanges
], DropDownList);
export { DropDownList };
