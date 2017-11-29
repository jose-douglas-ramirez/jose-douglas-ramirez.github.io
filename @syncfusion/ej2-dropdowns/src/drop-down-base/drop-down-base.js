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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-data", "@syncfusion/ej2-lists"], function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_data_1, ej2_lists_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SPINNER_SIZE = ej2_base_2.Browser.isDevice ? '16px' : '14px';
    exports.dropDownBaseClasses = {
        root: 'e-dropdownbase',
        rtl: 'e-rtl',
        content: 'e-content',
        selected: 'e-active',
        hover: 'e-hover',
        noData: 'e-nodata',
        fixedHead: 'e-fixed-head',
        focus: 'e-item-focus',
        li: ej2_lists_1.cssClass.li,
        group: ej2_lists_1.cssClass.group,
        disabled: ej2_lists_1.cssClass.disabled,
        grouping: 'e-dd-group'
    };
    var DropDownBase = (function (_super) {
        __extends(DropDownBase, _super);
        function DropDownBase(options, element) {
            var _this = _super.call(this, options, element) || this;
            _this.scrollTimer = -1;
            _this.enableRtlElements = [];
            _this.isRequested = false;
            return _this;
        }
        ;
        DropDownBase.prototype.getPropObject = function (prop, newProp, oldProp) {
            var newProperty = new Object();
            var oldProperty = new Object();
            var propName = new Function('prop', 'return prop');
            newProperty[propName(prop)] = newProp[propName(prop)];
            oldProperty[propName(prop)] = oldProp[propName(prop)];
            var data = new Object();
            data.newProperty = newProperty;
            data.oldProperty = oldProperty;
            return data;
        };
        DropDownBase.prototype.getValueByText = function (text, ignoreCase) {
            var value = null;
            var dataSource = this.listData;
            var fields = this.fields;
            var type = this.typeOfData(dataSource).typeof;
            if (ignoreCase) {
                if (type === 'string' || type === 'number') {
                    for (var _i = 0, dataSource_1 = dataSource; _i < dataSource_1.length; _i++) {
                        var item = dataSource_1[_i];
                        if (!ej2_base_2.isNullOrUndefined(item) && String(item).toLowerCase() === text.toString().toLowerCase()) {
                            value = type === 'string' ? String(item) : this.getFormattedValue(String(item));
                            break;
                        }
                    }
                }
                else {
                    dataSource.filter(function (item) {
                        var itemText = item[fields.text].toString();
                        if (itemText.toLowerCase() === text.toLowerCase()) {
                            value = item[fields.value];
                        }
                    });
                }
            }
            else {
                if (type === 'string' || type === 'number') {
                    for (var _a = 0, dataSource_2 = dataSource; _a < dataSource_2.length; _a++) {
                        var item = dataSource_2[_a];
                        if (!ej2_base_2.isNullOrUndefined(item) && String(item) === text.toString()) {
                            value = type === 'string' ? text : this.getFormattedValue(text);
                            break;
                        }
                    }
                }
                else {
                    dataSource.filter(function (item) {
                        if (item[fields.text] === text) {
                            value = item[fields.value];
                        }
                    });
                }
            }
            return value;
        };
        ;
        DropDownBase.prototype.l10nUpdate = function (actionFailure) {
            if (this.noRecordsTemplate !== 'No Records Found' || this.actionFailureTemplate !== 'The Request Failed') {
                var template = actionFailure ? this.actionFailureTemplate : this.noRecordsTemplate;
                var compiledString = void 0;
                this.list.innerHTML = '';
                compiledString = ej2_base_1.compile(template);
                for (var _i = 0, _a = compiledString({}); _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.list.appendChild(item);
                }
            }
            else {
                var l10nLocale = { noRecordsTemplate: 'No Records Found', actionFailureTemplate: 'The Request Failed' };
                this.l10n = new ej2_base_1.L10n('dropdownlist', l10nLocale, this.locale);
                this.list.innerHTML = actionFailure ?
                    this.l10n.getConstant('actionFailureTemplate') : this.l10n.getConstant('noRecordsTemplate');
            }
        };
        DropDownBase.prototype.getTextByValue = function (value) {
            var text;
            var dataSource = this.listData;
            var fields = this.fields;
            var type = this.typeOfData(dataSource).typeof;
            if (type === 'string' || type === 'number') {
                for (var _i = 0, dataSource_3 = dataSource; _i < dataSource_3.length; _i++) {
                    var item = dataSource_3[_i];
                    if (!ej2_base_2.isNullOrUndefined(item) && item.toString() === value.toString()) {
                        text = item.toString();
                        break;
                    }
                }
            }
            else {
                dataSource.filter(function (item) {
                    if (!ej2_base_2.isNullOrUndefined(item[fields.value]) && item[fields.value].toString() === value.toString()) {
                        text = item[fields.text];
                    }
                });
            }
            return text;
        };
        DropDownBase.prototype.getFormattedValue = function (value) {
            if (this.listData && this.listData.length) {
                var item = this.typeOfData(this.listData);
                if (typeof item.item[this.fields.value ? this.fields.value : 'value'] === 'number'
                    || item.typeof === 'number') {
                    return parseInt(value, 10);
                }
            }
            return value;
        };
        DropDownBase.prototype.setEnableRtl = function () {
            if (this.list) {
                this.enableRtlElements.push(this.list);
            }
            this.enableRtl ? ej2_base_1.addClass(this.enableRtlElements, exports.dropDownBaseClasses.rtl) :
                ej2_base_2.removeClass(this.enableRtlElements, exports.dropDownBaseClasses.rtl);
        };
        ;
        DropDownBase.prototype.initialize = function () {
            this.bindEvent = true;
            if (this.element.tagName === 'UL') {
                var jsonElement = ej2_lists_1.ListBase.createJsonFromElement(this.element);
                this.setProperties({ fields: { text: 'text', value: 'text' } }, true);
                this.resetList(jsonElement, this.fields);
            }
            else if (this.element.tagName === 'SELECT') {
                var dataSource = this.dataSource instanceof Array ? (this.dataSource.length > 0 ? true : false)
                    : !ej2_base_2.isNullOrUndefined(this.dataSource) ? true : false;
                if (!dataSource) {
                    this.renderItemsBySelect();
                }
            }
            else {
                this.setListData(this.dataSource, this.fields, this.query);
            }
        };
        ;
        DropDownBase.prototype.getPersistData = function () {
            return this.addOnPersist([]);
        };
        ;
        DropDownBase.prototype.setEnabled = function () {
            if (this.enabled) {
                this.element.setAttribute('aria-disabled', 'false');
            }
            else {
                this.element.setAttribute('aria-disabled', 'true');
            }
        };
        ;
        DropDownBase.prototype.renderItemsBySelect = function () {
            var element = this.element;
            var fields = { value: 'value', text: 'text' };
            var jsonElement = [];
            var group = element.querySelectorAll('select>optgroup');
            var option = element.querySelectorAll('select>option');
            this.getJSONfromOption(jsonElement, option, fields);
            if (group.length) {
                for (var i = 0; i < group.length; i++) {
                    var item = group[i];
                    var optionGroup = {};
                    optionGroup[fields.text] = item.label;
                    optionGroup.isHeader = true;
                    var child = item.querySelectorAll('option');
                    jsonElement.push(optionGroup);
                    this.getJSONfromOption(jsonElement, child, fields);
                }
                var items = element.querySelectorAll('select>option');
            }
            this.fields.text = fields.text;
            this.fields.value = fields.value;
            this.resetList(jsonElement, fields);
        };
        DropDownBase.prototype.getJSONfromOption = function (items, options, fields) {
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                var json = {};
                json[fields.text] = option.innerText;
                json[fields.value] = option.getAttribute(fields.value) ? option.getAttribute(fields.value) : option.innerText;
                items.push(json);
            }
        };
        DropDownBase.prototype.preRender = function () {
        };
        DropDownBase.prototype.setListData = function (dataSource, fields, query) {
            var _this = this;
            fields = fields ? fields : this.fields;
            var ulElement;
            this.isActive = true;
            this.showSpinner();
            if (dataSource instanceof ej2_data_1.DataManager) {
                this.isRequested = true;
                this.trigger('actionBegin');
                dataSource.executeQuery(this.getQuery(query)).then(function (e) {
                    _this.trigger('actionComplete', e);
                    var listItems = e.result;
                    ulElement = _this.renderItems(listItems, fields);
                    _this.onActionComplete(ulElement, listItems, e);
                    _this.isRequested = false;
                    _this.hideSpinner();
                }).catch(function (e) {
                    _this.isRequested = false;
                    _this.onActionFailure(e);
                    _this.hideSpinner();
                });
            }
            else {
                var dataManager = new ej2_data_1.DataManager(dataSource);
                var listItems = (this.getQuery(query)).executeLocal(dataManager);
                ulElement = this.renderItems(listItems, fields);
                this.onActionComplete(ulElement, listItems);
                this.hideSpinner();
            }
        };
        DropDownBase.prototype.showSpinner = function () {
        };
        DropDownBase.prototype.hideSpinner = function () {
        };
        DropDownBase.prototype.onActionFailure = function (e) {
            this.liCollections = [];
            this.trigger('actionFailure', e);
            this.l10nUpdate(true);
            ej2_base_1.addClass([this.list], exports.dropDownBaseClasses.noData);
        };
        DropDownBase.prototype.onActionComplete = function (ulElement, list, e) {
            this.listData = list;
            this.list.innerHTML = '';
            this.list.appendChild(ulElement);
            this.liCollections = this.list.querySelectorAll('.' + exports.dropDownBaseClasses.li);
            this.ulElement = this.list.querySelector('ul');
            this.postRender(this.list, list, this.bindEvent);
        };
        DropDownBase.prototype.postRender = function (listElement, list, bindEvent) {
            var focusItem = listElement.querySelector('.' + exports.dropDownBaseClasses.li);
            var selectedItem = listElement.querySelector('.' + exports.dropDownBaseClasses.selected);
            if (focusItem && !selectedItem) {
                ej2_base_1.addClass([focusItem], exports.dropDownBaseClasses.focus);
            }
            if (list.length <= 0) {
                this.l10nUpdate();
                ej2_base_1.addClass([listElement], exports.dropDownBaseClasses.noData);
            }
            else {
                listElement.classList.remove(exports.dropDownBaseClasses.noData);
            }
            if (this.groupTemplate) {
                this.renderGroupTemplate(listElement);
            }
        };
        DropDownBase.prototype.getQuery = function (query) {
            return query ? query : this.query ? this.query : new ej2_data_1.Query();
        };
        DropDownBase.prototype.renderGroupTemplate = function (listEle) {
            if (this.fields.groupBy !== null && this.dataSource || this.element.querySelector('.' + exports.dropDownBaseClasses.group)) {
                var dataSource = this.dataSource;
                var headerItems = listEle.querySelectorAll('.' + exports.dropDownBaseClasses.group);
                var tempHeaders = ej2_lists_1.ListBase.renderGroupTemplate(this.groupTemplate, dataSource, this.fields, headerItems);
            }
        };
        DropDownBase.prototype.createListItems = function (dataSource, fields) {
            if (dataSource && fields.groupBy || this.element.querySelector('optgroup')) {
                if (fields.groupBy) {
                    dataSource = ej2_lists_1.ListBase.groupDataSource(dataSource, fields);
                }
                ej2_base_1.addClass([this.list], exports.dropDownBaseClasses.grouping);
            }
            else {
                dataSource = this.getSortedDataSource(dataSource);
            }
            var iconCss = ej2_base_2.isNullOrUndefined(fields.iconCss) ? false : true;
            var options = (fields.text !== null || fields.value !== null) ? {
                fields: fields, showIcon: iconCss, ariaAttributes: { groupItemRole: 'presentation' }
            } : { fields: { value: 'text' } };
            return ej2_lists_1.ListBase.createList(dataSource, options, true);
        };
        ;
        DropDownBase.prototype.setFloatingHeader = function (e) {
            if (ej2_base_2.isNullOrUndefined(this.fixedHeaderElement)) {
                this.fixedHeaderElement = ej2_base_2.createElement('div', { className: exports.dropDownBaseClasses.fixedHead });
                if (!this.list.querySelector('li').classList.contains(exports.dropDownBaseClasses.group)) {
                    this.fixedHeaderElement.style.display = 'none';
                }
                ej2_base_2.prepend([this.fixedHeaderElement], this.list);
                this.setFixedHeader();
            }
            this.scrollStop(e);
        };
        DropDownBase.prototype.scrollStop = function (e) {
            var target = e.target;
            var liHeight = parseInt(getComputedStyle(this.liCollections[0], null).getPropertyValue('height'), 10);
            var topIndex = Math.round(target.scrollTop / liHeight);
            var liCollections = this.ulElement.querySelectorAll('li');
            for (var i = topIndex; i > -1; i--) {
                if (!ej2_base_2.isNullOrUndefined(liCollections[i]) && liCollections[i].classList.contains(exports.dropDownBaseClasses.group)) {
                    var currentLi = liCollections[i];
                    this.fixedHeaderElement.innerHTML = currentLi.innerHTML;
                    this.fixedHeaderElement.style.display = 'block';
                    break;
                }
                else {
                    this.fixedHeaderElement.style.display = 'none';
                }
            }
        };
        DropDownBase.prototype.renderItems = function (listData, fields) {
            var ulElement;
            if (this.itemTemplate && listData) {
                var dataSource = listData;
                if (dataSource && fields.groupBy) {
                    dataSource = ej2_lists_1.ListBase.groupDataSource(dataSource, fields, this.sortOrder);
                }
                else {
                    dataSource = this.getSortedDataSource(dataSource);
                }
                ulElement = ej2_lists_1.ListBase.renderContentTemplate(this.itemTemplate, dataSource, fields);
            }
            else {
                ulElement = this.createListItems(listData, fields);
            }
            return ulElement;
        };
        ;
        DropDownBase.prototype.typeOfData = function (items) {
            var item = { typeof: null, item: null };
            for (var i = 0; i < items.length; i++) {
                if (!ej2_base_2.isNullOrUndefined(items[i])) {
                    return item = { typeof: typeof items[i], item: items[i] };
                }
            }
            return item;
        };
        DropDownBase.prototype.setFixedHeader = function () {
            this.list.parentElement.style.display = 'block';
            var liWidth = this.liCollections[0].offsetWidth;
            this.fixedHeaderElement.style.width = liWidth.toString() + 'px';
            ej2_base_2.setStyleAttribute(this.fixedHeaderElement, { zIndex: 10 });
            var firstLi = this.ulElement.querySelector('.' + exports.dropDownBaseClasses.group);
            this.fixedHeaderElement.innerHTML = firstLi.innerHTML;
        };
        DropDownBase.prototype.getSortedDataSource = function (dataSource) {
            if (dataSource && this.sortOrder !== 'None') {
                var textField = this.fields.text ? this.fields.text : 'text';
                dataSource = ej2_lists_1.ListBase.getDataSource(dataSource, ej2_lists_1.ListBase.addSorting(this.sortOrder, textField));
            }
            return dataSource;
        };
        DropDownBase.prototype.getIndexByValue = function (value) {
            var index;
            var listItems = this.getItems();
            for (var i = 0; i < listItems.length; i++) {
                if (listItems[i].getAttribute('data-value') === value.toString()) {
                    index = i;
                    break;
                }
            }
            return index;
        };
        ;
        DropDownBase.prototype.dispatchEvent = function (element, type) {
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent(type, false, true);
            element.dispatchEvent(evt);
        };
        DropDownBase.prototype.setFields = function () {
            var fields = this.fields;
            if (this.fields.value && !this.fields.text) {
                this.fields.text = this.fields.value;
            }
            else if (!fields.value && fields.text) {
                this.fields.value = this.fields.text;
            }
            else if (!this.fields.value && !this.fields.text) {
                this.fields.value = this.fields.text = 'text';
            }
        };
        DropDownBase.prototype.resetList = function (dataSource, fields, query) {
            if (this.list) {
                this.setListData(dataSource, fields, query);
            }
        };
        DropDownBase.prototype.updateSelection = function () {
        };
        DropDownBase.prototype.renderList = function () {
            this.render();
        };
        DropDownBase.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'enableRtl':
                        this.setEnableRtl();
                        break;
                    case 'enabled':
                        this.setEnabled();
                        break;
                    case 'query':
                    case 'sortOrder':
                    case 'dataSource':
                    case 'itemTemplate':
                        this.resetList(this.dataSource);
                        break;
                    case 'groupTemplate':
                        this.renderGroupTemplate(this.list);
                        break;
                    case 'locale':
                        if (this.list) {
                            this.l10nUpdate();
                        }
                        break;
                }
            }
        };
        ;
        DropDownBase.prototype.render = function (isEmptyData) {
            this.list = ej2_base_2.createElement('div', { className: exports.dropDownBaseClasses.content, attrs: { 'tabindex': '0' } });
            this.list.classList.add(exports.dropDownBaseClasses.root);
            this.setFields();
            var rippleModel = { duration: 300, selector: '.' + exports.dropDownBaseClasses.li };
            this.rippleFun = ej2_base_3.rippleEffect(this.list, rippleModel);
            var group = this.element.querySelector('select>optgroup');
            if (this.fields.groupBy || !ej2_base_2.isNullOrUndefined(group)) {
                ej2_base_1.EventHandler.add(this.list, 'scroll', this.setFloatingHeader, this);
            }
            if (this.getModuleName() === 'dropdownbase') {
                if (this.element.getAttribute('tabindex')) {
                    this.list.setAttribute('tabindex', this.element.getAttribute('tabindex'));
                }
                ej2_base_2.removeClass([this.element], exports.dropDownBaseClasses.root);
                this.element.style.display = 'none';
                var wrapperElement = document.createElement('div');
                this.element.parentElement.insertBefore(wrapperElement, this.element);
                wrapperElement.appendChild(this.element);
                wrapperElement.appendChild(this.list);
            }
            this.setEnableRtl();
            this.setEnabled();
            if (!isEmptyData) {
                this.initialize();
            }
        };
        ;
        DropDownBase.prototype.getModuleName = function () {
            return 'dropdownbase';
        };
        ;
        DropDownBase.prototype.getItems = function () {
            return this.ulElement.querySelectorAll('.' + exports.dropDownBaseClasses.li);
        };
        ;
        DropDownBase.prototype.addItem = function (items, itemIndex) {
            if (!this.list || this.list.textContent === this.noRecordsTemplate) {
                this.renderList();
            }
            var itemsCount = this.getItems().length;
            var selectedItemValue = this.list.querySelector('.' + exports.dropDownBaseClasses.selected);
            items = items instanceof Array ? items : [items];
            var index;
            index = (ej2_base_2.isNullOrUndefined(itemIndex) || itemIndex < 0 || itemIndex > itemsCount - 1) ? itemsCount : itemIndex;
            var fields = this.fields;
            var liCollections = [];
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var li = ej2_base_2.createElement('li', { className: exports.dropDownBaseClasses.li, id: 'option-add-' + i });
                li.setAttribute('data-value', item[fields.value]);
                li.setAttribute('role', 'option');
                li.appendChild(document.createTextNode(item[fields.text]));
                liCollections.push(li);
                this.listData.push(item);
                this.updateActionCompleteData(li, item);
            }
            if (itemsCount === 0 && ej2_base_2.isNullOrUndefined(this.list.querySelector('ul'))) {
                this.list.innerHTML = '';
                this.list.appendChild(this.ulElement);
                ej2_base_1.append(liCollections, this.ulElement);
            }
            else {
                for (var i = 0; i < items.length; i++) {
                    if (this.liCollections[index]) {
                        this.liCollections[index].parentNode.insertBefore(liCollections[i], this.liCollections[index]);
                    }
                    else {
                        this.ulElement.appendChild(liCollections[i]);
                    }
                    var tempLi = [].slice.call(this.liCollections);
                    tempLi.splice(index, 0, liCollections[i]);
                    this.liCollections = tempLi;
                    index += 1;
                }
            }
            if (selectedItemValue || itemIndex === 0) {
                this.updateSelection();
            }
        };
        DropDownBase.prototype.updateActionCompleteData = function (li, item) {
        };
        DropDownBase.prototype.getDataByValue = function (value) {
            var type = this.typeOfData(this.listData).typeof;
            if (type === 'string' || type === 'number') {
                for (var _i = 0, _a = this.listData; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (!ej2_base_2.isNullOrUndefined(item) && item === value) {
                        return item;
                    }
                }
            }
            else {
                for (var _b = 0, _c = this.listData; _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (!ej2_base_2.isNullOrUndefined(item) && item[this.fields.value ? this.fields.value : 'value'] === value) {
                        return item;
                    }
                }
            }
            return null;
        };
        DropDownBase.prototype.destroy = function () {
            if (document.body.contains(this.list)) {
                ej2_base_1.EventHandler.remove(this.list, 'scroll', this.setFloatingHeader);
                if (!ej2_base_2.isNullOrUndefined(this.rippleFun)) {
                    this.rippleFun();
                }
                ej2_base_2.detach(this.list);
            }
            _super.prototype.destroy.call(this);
        };
        ;
        return DropDownBase;
    }(ej2_base_1.Component));
    __decorate([
        ej2_base_1.Property({ text: null, value: null, iconCss: null, groupBy: null })
    ], DropDownBase.prototype, "fields", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], DropDownBase.prototype, "enableRtl", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], DropDownBase.prototype, "enablePersistence", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownBase.prototype, "itemTemplate", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownBase.prototype, "groupTemplate", void 0);
    __decorate([
        ej2_base_1.Property('No Records Found')
    ], DropDownBase.prototype, "noRecordsTemplate", void 0);
    __decorate([
        ej2_base_1.Property('The Request Failed')
    ], DropDownBase.prototype, "actionFailureTemplate", void 0);
    __decorate([
        ej2_base_1.Property('None')
    ], DropDownBase.prototype, "sortOrder", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], DropDownBase.prototype, "enabled", void 0);
    __decorate([
        ej2_base_1.Property([])
    ], DropDownBase.prototype, "dataSource", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], DropDownBase.prototype, "query", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownBase.prototype, "actionBegin", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownBase.prototype, "actionComplete", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownBase.prototype, "actionFailure", void 0);
    __decorate([
        ej2_base_1.Event()
    ], DropDownBase.prototype, "select", void 0);
    DropDownBase = __decorate([
        ej2_base_3.NotifyPropertyChanges
    ], DropDownBase);
    exports.DropDownBase = DropDownBase;
});
