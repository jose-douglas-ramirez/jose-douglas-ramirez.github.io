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
import { merge, formatUnit, isNullOrUndefined } from '@syncfusion/ej2-base';
import { attributes, addClass, removeClass, createElement, prepend, closest, remove } from '@syncfusion/ej2-base';
import { Component, EventHandler, Property, Complex, Event, CreateBuilder } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, ChildProperty, KeyboardEvents } from '@syncfusion/ej2-base';
import { Animation, rippleEffect, Touch } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ListBase } from '../common/list-base';
var effectsConfig = {
    'None': [],
    'SlideLeft': ['SlideRightOut', 'SlideLeftOut', 'SlideLeftIn', 'SlideRightIn'],
    'SlideDown': ['SlideTopOut', 'SlideBottomOut', 'SlideBottomIn', 'SlideTopIn'],
    'Zoom': ['FadeOut', 'FadeZoomOut', 'FadeZoomIn', 'FadeIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
var effectsRTLConfig = {
    'None': [],
    'SlideLeft': ['SlideLeftOut', 'SlideRightOut', 'SlideRightIn', 'SlideLeftIn'],
    'SlideDown': ['SlideBottomOut', 'SlideTopOut', 'SlideTopIn', 'SlideBottomIn'],
    'Zoom': ['FadeZoomOut', 'FadeOut', 'FadeIn', 'FadeZoomIn'],
    'Fade': ['FadeOut', 'FadeOut', 'FadeIn', 'FadeIn']
};
var classNames = {
    root: 'e-listview',
    hover: 'e-hover',
    selected: 'e-active',
    parentItem: 'e-list-parent',
    listItem: 'e-list-item',
    listItemText: 'e-list-text',
    grpListItem: 'e-list-group-item',
    hasChild: 'e-has-child',
    view: 'e-view',
    header: 'e-list-header',
    headerText: 'e-headertext',
    text: 'e-text',
    disable: 'e-disabled',
    content: 'e-content',
    icon: 'e-icons',
    backIcon: 'e-icon-back'
};
var FieldSettings = (function (_super) {
    __extends(FieldSettings, _super);
    function FieldSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FieldSettings;
}(ChildProperty));
export { FieldSettings };
__decorate([
    Property('id')
], FieldSettings.prototype, "id", void 0);
__decorate([
    Property('text')
], FieldSettings.prototype, "text", void 0);
__decorate([
    Property('isChecked')
], FieldSettings.prototype, "isChecked", void 0);
__decorate([
    Property('isVisible')
], FieldSettings.prototype, "isVisible", void 0);
__decorate([
    Property('enabled')
], FieldSettings.prototype, "enabled", void 0);
__decorate([
    Property('iconCss')
], FieldSettings.prototype, "iconCss", void 0);
__decorate([
    Property('child')
], FieldSettings.prototype, "child", void 0);
__decorate([
    Property('tooltip')
], FieldSettings.prototype, "tooltip", void 0);
__decorate([
    Property('groupBy')
], FieldSettings.prototype, "groupBy", void 0);
__decorate([
    Property('text')
], FieldSettings.prototype, "sortBy", void 0);
__decorate([
    Property('htmlAttributes')
], FieldSettings.prototype, "htmlAttributes", void 0);
__decorate([
    Property('tableName')
], FieldSettings.prototype, "tableName", void 0);
var ListView = (function (_super) {
    __extends(ListView, _super);
    function ListView(options, element) {
        var _this = _super.call(this, options, element) || this;
        _this.curDSLevel = [];
        _this.curViewDS = [];
        _this.keyConfigs = {
            moveDown: 'downarrow',
            moveUp: 'uparrow',
            select: 'enter',
            back: 'backspace'
        };
        _this.animateOptions = {};
        _this.aniObj = new Animation(_this.animateOptions);
        return _this;
    }
    ListView.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'htmlAttributes':
                    this.setHTMLAttribute();
                    break;
                case 'cssClass':
                    this.setCSSClass(oldProp.cssClass);
                    break;
                case 'enable':
                    this.setEnable();
                    break;
                case 'width':
                case 'height':
                    this.setSize();
                    break;
                case 'enableRtl':
                    this.setEnableRTL();
                    break;
                case 'fields':
                    this.listBaseOption.fields = this.fields.properties;
                    this.reRender();
                    break;
                case 'headerTitle':
                    if (!this.curDSLevel.length) {
                        this.header(this.headerTitle, false);
                    }
                    break;
                case 'showHeader':
                    {
                        this.header(this.headerTitle, false);
                    }
                    break;
                case 'dataSource':
                    this.reRender();
                    break;
                case 'sortOrder':
                case 'showIcon':
                    this.listBaseOption.showIcon = this.showIcon;
                    this.curViewDS = this.getSubDS();
                    this.resetCurrentList();
                    break;
                default:
                    break;
            }
        }
    };
    ListView.prototype.setHTMLAttribute = function () {
        if (Object.keys(this.htmlAttributes).length) {
            attributes(this.element, this.htmlAttributes);
        }
    };
    ListView.prototype.setCSSClass = function (oldCSSClass) {
        if (this.cssClass) {
            addClass([this.element], this.cssClass.split(' '));
        }
        if (oldCSSClass) {
            removeClass([this.element], oldCSSClass.split(' '));
        }
    };
    ListView.prototype.setSize = function () {
        this.element.style.height = formatUnit(this.height);
        this.element.style.width = formatUnit(this.width);
    };
    ListView.prototype.setEnable = function () {
        this.enableElement(this.element, this.enable);
    };
    ListView.prototype.setEnableRTL = function () {
        if (this.enableRtl) {
            this.element.classList.add('e-rtl');
        }
        else {
            this.element.classList.remove('e-rtl');
        }
    };
    ListView.prototype.enableElement = function (element, isEnabled) {
        if (isEnabled) {
            element.classList.remove(classNames.disable);
        }
        else {
            element.classList.add(classNames.disable);
        }
    };
    ListView.prototype.header = function (text, showBack) {
        if (this.headerEle === undefined && this.showHeader) {
            this.headerEle = createElement('div', { className: classNames.header });
            var innerHeaderEle = createElement('span', { className: classNames.headerText, innerHTML: this.headerTitle });
            var textEle = createElement('div', { className: classNames.text, innerHTML: innerHeaderEle.outerHTML });
            var hedBackButton = createElement('div', {
                className: classNames.icon + ' ' + classNames.backIcon + ' e-but-back',
                attrs: { style: 'display:none;' }
            });
            this.headerEle.appendChild(hedBackButton);
            this.headerEle.appendChild(textEle);
            this.element.classList.add('e-has-header');
            prepend([this.headerEle], this.element);
        }
        else if (this.headerEle) {
            if (this.showHeader) {
                this.headerEle.style.display = '';
                var textEle = this.headerEle.querySelector('.' + classNames.headerText);
                var hedBackButton = this.headerEle.querySelector('.' + classNames.backIcon);
                textEle.innerHTML = text;
                if (showBack === true) {
                    hedBackButton.style.display = '';
                }
                else {
                    hedBackButton.style.display = 'none';
                }
            }
            else {
                this.headerEle.style.display = 'none';
            }
        }
    };
    ListView.prototype.switchView = function (fromView, toView, reverse) {
        var _this = this;
        if (fromView && toView) {
            var fPos_1 = fromView.style.position;
            var overflow_1 = (this.element.style.overflow !== 'hidden') ? this.element.style.overflow : '';
            fromView.style.position = 'absolute';
            fromView.classList.add('e-view');
            var anim = void 0;
            var duration = this.animation.duration;
            if (this.animation.effect) {
                anim = (this.enableRtl ? effectsRTLConfig[this.animation.effect] : effectsConfig[this.animation.effect]);
            }
            else {
                var slideLeft = 'SlideLeft';
                var slideRight = 'SlideRight';
                anim = (this.enableRtl ? effectsRTLConfig[slideLeft] : effectsConfig[slideRight]);
                duration = 0;
            }
            this.element.style.overflow = 'hidden';
            this.aniObj.animate(fromView, {
                name: (reverse === true ? anim[0] : anim[1]),
                duration: duration,
                timingFunction: this.animation.easing,
                end: function (model) {
                    fromView.style.display = 'none';
                    _this.element.style.overflow = overflow_1;
                    fromView.style.position = fPos_1;
                    fromView.classList.remove('e-view');
                }
            });
            toView.style.display = '';
            this.aniObj.animate(toView, {
                name: (reverse === true ? anim[2] : anim[3]),
                duration: duration,
                timingFunction: this.animation.easing,
                end: function () {
                    _this.trigger('actionComplete');
                }
            });
            this.curUL = toView;
        }
    };
    ListView.prototype.preRender = function () {
        this.listBaseOption = {
            template: this.template,
            groupTemplate: this.groupTemplate, expandCollapse: true, listClass: '',
            ariaAttributes: { itemRole: 'listitem', listRole: 'list', itemText: '',
                groupItemRole: 'group', wrapperRole: 'presentation' },
            fields: this.fields.properties, sortOrder: this.sortOrder, showIcon: this.showIcon
        };
    };
    ListView.prototype.clickHandler = function (e) {
        var target = e.target;
        var classList = target.classList;
        if (classList.contains(classNames.backIcon) || classList.contains(classNames.headerText)) {
            this.back();
        }
        else {
            var li = closest(target.parentNode, '.' + classNames.listItem);
            if (li === null) {
                li = target;
            }
            this.setSelectLI(li, e);
        }
    };
    ListView.prototype.hoverHandler = function (e) {
        var curLi = closest(e.target.parentNode, '.' + classNames.listItem);
        this.setHoverLI(curLi);
    };
    ListView.prototype.leaveHandler = function (e) {
        this.removeHover();
    };
    ;
    ListView.prototype.keyActionHandler = function (e) {
        e.preventDefault();
        switch (e.action) {
            case 'moveDown':
                this.hoverSiblingLI();
                break;
            case 'moveUp':
                this.hoverSiblingLI(true);
                break;
            case 'select':
                this.setSelectLI(this.curUL.querySelector('.' + classNames.hover), e);
                break;
            case 'back':
                this.back();
                break;
        }
    };
    ListView.prototype.swipeActionHandler = function (e) {
        if (e.swipeDirection === 'Right') {
            this.back();
        }
    };
    ListView.prototype.wireEvents = function () {
        EventHandler.add(this.element, 'click', this.clickHandler, this);
        EventHandler.add(this.element, 'mouseover', this.hoverHandler, this);
        EventHandler.add(this.element, 'mouseout', this.leaveHandler, this);
        this.keyboardModule = new KeyboardEvents(this.element, {
            keyAction: this.keyActionHandler.bind(this),
            keyConfigs: this.keyConfigs
        });
        this.touchModule = new Touch(this.element, { swipe: this.swipeActionHandler.bind(this) });
    };
    ListView.prototype.unWireEvents = function () {
        EventHandler.remove(this.element, 'click', this.clickHandler);
        EventHandler.remove(this.element, 'mouseover', this.hoverHandler);
        EventHandler.remove(this.element, 'mouseout', this.leaveHandler);
        this.keyboardModule.destroy();
        this.touchModule.destroy();
    };
    ListView.prototype.removeHover = function () {
        var hoverLI = this.element.querySelector('.' + classNames.hover);
        if (hoverLI) {
            hoverLI.classList.remove(classNames.hover);
        }
    };
    ListView.prototype.removeSelect = function () {
        var selectedLI = this.element.querySelectorAll('.' + classNames.selected);
        for (var _i = 0, selectedLI_1 = selectedLI; _i < selectedLI_1.length; _i++) {
            var ele = selectedLI_1[_i];
            ele.removeAttribute('aria-selected');
            if (ele.className !== '') {
                ele.classList.remove(classNames.selected);
            }
        }
    };
    ListView.prototype.isValidLI = function (li) {
        return (li && li.classList.contains(classNames.listItem)
            && !li.classList.contains(classNames.grpListItem)
            && !li.classList.contains(classNames.disable));
    };
    ListView.prototype.setSelectLI = function (li, e) {
        if (this.isValidLI(li)
            && !li.classList.contains(classNames.selected)
            && this.enable) {
            this.removeSelect();
            li.classList.add(classNames.selected);
            li.setAttribute('aria-selected', 'true');
            this.removeHover();
            var data = this.getItemData(li);
            if (isNullOrUndefined(data) && typeof this.dataSource[0] === 'string') {
                this.selectedItems = {
                    item: li,
                    text: li.innerText.trim(),
                    data: this.dataSource
                };
            }
            else {
                this.selectedItems = {
                    item: li,
                    text: data[this.listBaseOption.fields.text],
                    data: data
                };
            }
            var eventArgs = {};
            merge(eventArgs, this.selectedItems);
            if (e) {
                merge(eventArgs, { isInteracted: true, event: e });
            }
            this.trigger('select', eventArgs);
            this.selectedLI = li;
            this.renderSubList(li);
        }
    };
    ListView.prototype.setHoverLI = function (li) {
        if (this.isValidLI(li) && !li.classList.contains(classNames.hover) && this.enable) {
            var lastLi = this.element.querySelectorAll('.' + classNames.hover);
            if (lastLi && lastLi.length) {
                removeClass(lastLi, classNames.hover);
            }
            if (!li.classList.contains(classNames.selected)) {
                li.classList.add(classNames.hover);
            }
        }
    };
    ListView.prototype.hoverSiblingLI = function (prev) {
        var lastLi = this.curUL.querySelector('.' + classNames.hover);
        var siblingLI;
        if (!lastLi) {
            lastLi = this.curUL.querySelector('.' + classNames.selected);
        }
        if (lastLi) {
            siblingLI = ListBase.getSiblingLI(this.curUL.querySelectorAll('.' + classNames.listItem), lastLi, prev);
        }
        else {
            if (prev) {
                var curLIs = this.curUL.querySelectorAll('.' + classNames.listItem);
                siblingLI = curLIs[curLIs.length - 1];
            }
            else {
                siblingLI = this.curUL.querySelector('.' + classNames.listItem);
            }
        }
        this.setHoverLI(siblingLI);
    };
    ListView.prototype.getSubDS = function () {
        var levelKeys = this.curDSLevel;
        if (levelKeys.length) {
            var ds = this.localData;
            for (var _i = 0, levelKeys_1 = levelKeys; _i < levelKeys_1.length; _i++) {
                var key = levelKeys_1[_i];
                this.curDSJSON = this.findItemFromDS(ds, { id: key });
                ds = this.curDSJSON ? this.curDSJSON[this.fields.child] : ds;
            }
            return ds;
        }
        return this.localData;
    };
    ListView.prototype.getItemData = function (li) {
        var fields = this.getElementUID(li);
        var curDS = this.dataSource;
        return this.findItemFromDS(curDS, fields);
    };
    ListView.prototype.findItemFromDS = function (dataSource, fields, parent) {
        var _this = this;
        var resultJSON;
        if (dataSource && dataSource.length && fields) {
            dataSource.some(function (data) {
                if ((fields.id || fields.text) &&
                    (!fields.id || data[_this.fields.id] === fields.id) &&
                    (!fields.text || data[_this.fields.text] === fields.text)) {
                    resultJSON = (parent ? dataSource : data);
                }
                else if (data.hasOwnProperty(_this.fields.child) && data[_this.fields.child].length) {
                    resultJSON = _this.findItemFromDS(data[_this.fields.child], fields, parent);
                }
                return !!resultJSON;
            });
        }
        else {
            resultJSON = dataSource;
        }
        return resultJSON;
    };
    ListView.prototype.getQuery = function () {
        var columns = [];
        var query = (this.query ? this.query : new Query());
        if (!this.query) {
            for (var _i = 0, _a = Object.keys(this.fields.properties); _i < _a.length; _i++) {
                var column = _a[_i];
                if (column !== 'tableName' && !!(this.fields[column]) &&
                    this.fields[column] !==
                        ListBase.defaultMappedFields[column]
                    && columns.indexOf(this.fields[column]) === -1) {
                    columns.push(this.fields[column]);
                }
            }
            query.select(columns);
            if (this.fields.properties.hasOwnProperty('tableName')) {
                query.from(this.fields.tableName);
            }
        }
        return query;
    };
    ListView.prototype.setViewDataSource = function (dataSource) {
        if (dataSource === void 0) { dataSource = this.localData; }
        if (dataSource && this.fields.groupBy) {
            this.curViewDS = ListBase.groupDataSource(dataSource, this.fields, this.sortOrder);
        }
        else if (dataSource && this.sortOrder !== 'None') {
            this.curViewDS = ListBase.getDataSource(dataSource, ListBase.addSorting(this.sortOrder, this.fields.sortBy));
        }
        else {
            this.curViewDS = dataSource;
        }
    };
    ListView.prototype.isInAnimation = function () {
        return this.curUL.classList.contains('.e-animate');
    };
    ListView.prototype.setLocalData = function () {
        var _this = this;
        this.trigger('actionBegin');
        if (this.dataSource instanceof DataManager) {
            this.dataSource.executeQuery(this.getQuery()).then(function (e) {
                if (_this.isDestroyed) {
                    return;
                }
                _this.localData = e.result;
                _this.renderList();
                _this.trigger('actionComplete', e);
            }).catch(function (e) {
                if (_this.isDestroyed) {
                    return;
                }
                _this.trigger('actionFailure', e);
            });
        }
        else if (!this.dataSource || !this.dataSource.length) {
            var ul = this.element.querySelector('ul');
            if (ul) {
                remove(ul);
                this.setProperties({ dataSource: ListBase.createJsonFromElement(ul) }, true);
                this.localData = this.dataSource;
                this.renderList();
                this.trigger('actionComplete', { data: this.localData });
            }
        }
        else {
            this.localData = this.dataSource;
            this.renderList();
            this.trigger('actionComplete', { data: this.localData });
        }
    };
    ListView.prototype.reRender = function () {
        this.element.innerHTML = '';
        this.curUL = this.headerEle = undefined;
        this.setLocalData();
        this.header();
        this.contentContainer = createElement('div', { className: classNames.content });
        this.element.appendChild(this.contentContainer);
        this.renderIntoDom(this.ulElement);
    };
    ListView.prototype.resetCurrentList = function () {
        this.setViewDataSource(this.curViewDS);
        this.contentContainer.innerHTML = '';
        this.createList();
        this.renderIntoDom(this.curUL);
    };
    ListView.prototype.createList = function () {
        this.ulElement = this.curUL = ListBase.createList(this.curViewDS, this.listBaseOption);
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
    };
    ListView.prototype.renderSubList = function (li) {
        var uID = li.getAttribute('data-uid');
        if (li.classList.contains(classNames.hasChild) && uID) {
            var ul = closest(li.parentNode, '.' + classNames.parentItem);
            var ele = this.element.querySelector('[pid=\'' + uID + '\']');
            this.curDSLevel.push(uID);
            this.setViewDataSource(this.getSubDS());
            if (!ele) {
                ele = ListBase.createListFromJson(this.curViewDS, this.listBaseOption, this.curDSLevel.length);
                ele.setAttribute('pID', uID);
                ele.style.display = 'none';
                this.renderIntoDom(ele);
            }
            this.switchView(ul, ele);
            this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
            this.header(this.selectedItems.data[this.listBaseOption.fields.text], true);
            this.selectedLI = undefined;
        }
    };
    ListView.prototype.renderIntoDom = function (ele) {
        this.contentContainer.appendChild(ele);
    };
    ListView.prototype.renderList = function () {
        this.setViewDataSource();
        this.createList();
        this.contentContainer = createElement('div', { className: classNames.content });
        this.element.appendChild(this.contentContainer);
        this.renderIntoDom(this.ulElement);
    };
    ListView.prototype.getElementUID = function (obj) {
        var fields = {};
        if (obj instanceof Element) {
            fields.id = obj.getAttribute('data-uid');
        }
        else {
            fields = obj;
        }
        return fields;
    };
    ListView.prototype.render = function () {
        this.element.classList.add(classNames.root);
        attributes(this.element, { role: 'list' });
        this.setCSSClass();
        this.setEnableRTL();
        this.setEnable();
        this.setSize();
        this.wireEvents();
        this.header();
        this.setLocalData();
        this.setHTMLAttribute();
        this.rippleFn = rippleEffect(this.element, {
            selector: '.' + classNames.listItem
        });
    };
    ListView.prototype.destroy = function () {
        this.unWireEvents();
        var classAr = [classNames.root, this.cssClass, classNames.disable, 'e-rtl',
            'e-has-header'];
        removeClass([this.element], classAr);
        this.rippleFn();
        _super.prototype.destroy.call(this);
    };
    ListView.prototype.back = function () {
        var pID = this.curDSLevel[this.curDSLevel.length - 1];
        if (pID === undefined || this.isInAnimation()) {
            return;
        }
        this.curDSLevel.pop();
        this.setViewDataSource(this.getSubDS());
        var toUL = this.element.querySelector('[data-uid=\'' + pID + '\']');
        var fromUL = this.curUL;
        if (!toUL) {
            this.createList();
            this.renderIntoDom(this.ulElement);
            toUL = this.curUL;
        }
        else {
            toUL = toUL.parentElement;
        }
        var text = this.curDSJSON[this.fields.text];
        this.switchView(fromUL, toUL, true);
        this.removeSelect();
        this.liCollection = this.curUL.querySelectorAll('.' + classNames.listItem);
        this.header((this.curDSLevel.length ? text : this.headerTitle), (this.curDSLevel.length ? true : false));
    };
    ListView.prototype.selectItem = function (obj) {
        var resultJSON = this.getItemData(obj);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + resultJSON[this.fields.id] + '"]');
            if (li) {
                this.setSelectLI(li);
            }
        }
    };
    ListView.prototype.getSelectedItem = function () {
        return this.selectedItems;
    };
    ListView.prototype.findItem = function (fields) {
        return this.findItemFromDS(this.dataSource, fields);
    };
    ListView.prototype.enableItem = function (obj) {
        var resultJSON = this.getItemData(obj);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + resultJSON[this.fields.id] + '"]');
            if (li) {
                li.classList.remove(classNames.disable);
            }
            delete resultJSON[this.fields.enabled];
        }
    };
    ListView.prototype.disableItem = function (obj) {
        var resultJSON = this.getItemData(obj);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + resultJSON[this.fields.id] + '"]');
            if (li) {
                li.classList.add(classNames.disable);
            }
            resultJSON[this.fields.enabled] = false;
        }
    };
    ListView.prototype.showItem = function (obj) {
        this.showHideItem(obj, false, '');
    };
    ListView.prototype.hideItem = function (obj) {
        this.showHideItem(obj, true, 'none');
    };
    ListView.prototype.showHideItem = function (obj, isHide, display) {
        var resultJSON = this.getItemData(obj);
        if (resultJSON) {
            var li = this.element.querySelector('[data-uid="' + resultJSON[this.fields.id] + '"]');
            if (li) {
                li.style.display = display;
            }
            if (isHide) {
                resultJSON[this.fields.isVisible] = false;
            }
            else {
                delete resultJSON[this.fields.isVisible];
            }
        }
    };
    ListView.prototype.addItem = function (data, fields) {
        var ds = this.findItemFromDS(this.dataSource, fields);
        var child = ds[this.fields.child];
        if (!child) {
            child = [];
        }
        child = child.concat(data);
        if (ds instanceof Array) {
            this.dataSource = this.localData = ds.concat(data);
            this.setViewDataSource();
        }
        else {
            ds[this.fields.child] = child;
        }
        this.resetCurrentList();
    };
    ListView.prototype.removeItem = function (obj) {
        var _this = this;
        var fields = this.getElementUID(obj);
        var curDS = this.findItemFromDS(this.dataSource, fields, true);
        if (curDS && obj) {
            var curAr_1;
            var idx_1;
            curDS.some(function (data, index, arr) {
                if ((fields.id || fields.text) &&
                    (!fields.id || data[_this.fields.id] === fields.id) &&
                    (!fields.text || data[_this.fields.text] === fields.text)) {
                    curAr_1 = arr;
                    idx_1 = index;
                    return true;
                }
                return false;
            });
            curAr_1.splice(idx_1, 1);
            this.resetCurrentList();
        }
    };
    ListView.prototype.getModuleName = function () {
        return 'listview';
    };
    ListView.prototype.getPersistData = function () {
        return this.addOnPersist(['cssClass', 'enableRtl', 'htmlAttributes',
            'enable', 'fields', 'animation', 'headerTitle',
            'sortOrder', 'showIcon', 'height', 'width']);
    };
    return ListView;
}(Component));
__decorate([
    Property()
], ListView.prototype, "cssClass", void 0);
__decorate([
    Property({})
], ListView.prototype, "htmlAttributes", void 0);
__decorate([
    Property(true)
], ListView.prototype, "enable", void 0);
__decorate([
    Property([])
], ListView.prototype, "dataSource", void 0);
__decorate([
    Property()
], ListView.prototype, "query", void 0);
__decorate([
    Complex(ListBase.defaultMappedFields, FieldSettings)
], ListView.prototype, "fields", void 0);
__decorate([
    Property({ effect: 'SlideLeft', duration: 400, easing: 'ease' })
], ListView.prototype, "animation", void 0);
__decorate([
    Property('None')
], ListView.prototype, "sortOrder", void 0);
__decorate([
    Property(false)
], ListView.prototype, "showIcon", void 0);
__decorate([
    Property('')
], ListView.prototype, "headerTitle", void 0);
__decorate([
    Property(false)
], ListView.prototype, "showHeader", void 0);
__decorate([
    Property('')
], ListView.prototype, "height", void 0);
__decorate([
    Property('')
], ListView.prototype, "width", void 0);
__decorate([
    Property(null)
], ListView.prototype, "template", void 0);
__decorate([
    Property(null)
], ListView.prototype, "groupTemplate", void 0);
__decorate([
    Event()
], ListView.prototype, "select", void 0);
__decorate([
    Event()
], ListView.prototype, "actionBegin", void 0);
__decorate([
    Event()
], ListView.prototype, "actionComplete", void 0);
__decorate([
    Event()
], ListView.prototype, "actionFailure", void 0);
ListView = __decorate([
    NotifyPropertyChanges
], ListView);
export { ListView };
export var listViewBuilder = CreateBuilder(ListView);
