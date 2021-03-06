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
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "../popup/popup", "@syncfusion/ej2-buttons"], function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, ej2_base_5, ej2_base_6, popup_1, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonProps = (function (_super) {
        __extends(ButtonProps, _super);
        function ButtonProps() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ButtonProps;
    }(ej2_base_3.ChildProperty));
    __decorate([
        ej2_base_1.Property()
    ], ButtonProps.prototype, "buttonModel", void 0);
    __decorate([
        ej2_base_1.Property()
    ], ButtonProps.prototype, "click", void 0);
    exports.ButtonProps = ButtonProps;
    var ROOT = 'e-dialog';
    var RTL = 'e-rtl';
    var DLG_HEADER_CONTENT = 'e-dlg-header-content';
    var DLG_HEADER = 'e-dlg-header';
    var DLG_FOOTER_CONTENT = 'e-footer-content';
    var MODAL_DLG = 'e-dlg-modal';
    var DLG_CONTENT = 'e-dlg-content';
    var DLG_CLOSE_ICON = 'e-icon-dlg-close';
    var DLG_OVERLAY = 'e-dlg-overlay';
    var DLG_CONTAINER = 'e-dlg-container';
    var SCROLL_DISABLED = 'e-scroll-disabled';
    var DLG_PRIMARY_BUTTON = 'e-primary';
    var ICON = 'e-icons';
    var POPUP_ROOT = 'e-popup';
    var DEVICE = 'e-device';
    var FULLSCREEN = 'e-dlg-fullscreen';
    var DLG_CLOSE_ICON_BTN = 'e-dlg-closeicon-btn';
    var DLG_HIDE = 'e-popup-close';
    var DLG_SHOW = 'e-popup-open';
    var Dialog = (function (_super) {
        __extends(Dialog, _super);
        function Dialog(options, element) {
            return _super.call(this, options, element) || this;
        }
        Dialog.prototype.render = function () {
            this.initialize();
            this.initRender();
            this.wireEvents();
        };
        Dialog.prototype.preRender = function () {
            var _this = this;
            this.closeIconClickEventHandler = function (event) {
                _this.hide();
                _this.closedFrom = event;
            };
            this.dlgOverlayClickEventHandler = function (event) {
                _this.trigger('overlayClick', event);
            };
        };
        ;
        Dialog.prototype.keyDown = function (event) {
            var _this = this;
            if (event.keyCode === 9) {
                if (this.isModal) {
                    if (document.activeElement === this.btnObj.element && !event.shiftKey) {
                        event.preventDefault();
                        this.focusableElements(this.element).focus();
                    }
                    if (document.activeElement === this.focusableElements(this.element) && event.shiftKey) {
                        event.preventDefault();
                        this.btnObj.element.focus();
                    }
                }
            }
            var element = document.activeElement;
            var isTagName = (['input', 'textarea'].indexOf(element.tagName.toLowerCase()) > -1);
            var isContentEdit = false;
            if (!isTagName) {
                isContentEdit = element.hasAttribute('contenteditable') && element.getAttribute('contenteditable') === 'true';
            }
            if (event.keyCode === 27 && this.closeOnEscape) {
                this.hide();
                this.closedFrom = event;
            }
            if ((event.keyCode === 13 && element.tagName.toLowerCase() === 'button' &&
                element.classList.contains(DLG_PRIMARY_BUTTON) && !ej2_base_4.isNullOrUndefined(this.primaryButtonEle)) ||
                (event.keyCode === 13 && !event.ctrlKey && element.tagName.toLowerCase() !== 'textarea' &&
                    isTagName && !ej2_base_4.isNullOrUndefined(this.primaryButtonEle)) ||
                (event.keyCode === 13 && event.ctrlKey && (element.tagName.toLowerCase() === 'textarea' ||
                    isContentEdit)) && !ej2_base_4.isNullOrUndefined(this.primaryButtonEle)) {
                var buttonIndex_1;
                var firstPrimary = this.buttons.some(function (data, index) {
                    buttonIndex_1 = index;
                    var buttonModel = data.buttonModel;
                    return !ej2_base_4.isNullOrUndefined(buttonModel) && buttonModel.isPrimary === true;
                });
                if (firstPrimary && typeof (this.buttons[buttonIndex_1].click) === 'function') {
                    setTimeout(function () {
                        _this.buttons[buttonIndex_1].click.call(_this, event);
                    });
                }
            }
        };
        Dialog.prototype.initialize = function () {
            if (!ej2_base_4.isNullOrUndefined(this.target)) {
                this.targetEle = ((typeof this.target) === 'string') ?
                    document.querySelector(this.target) : this.target;
            }
            ej2_base_2.addClass([this.element], ROOT);
            if (ej2_base_1.Browser.isDevice) {
                ej2_base_2.addClass([this.element], DEVICE);
            }
            this.setCSSClass();
            this.setMaxHeight();
        };
        Dialog.prototype.initRender = function () {
            var _this = this;
            ej2_base_2.attributes(this.element, { role: 'dialog' });
            if (ej2_base_4.isNullOrUndefined(this.zIndex)) {
                this.getZindexPartial();
            }
            if (this.header !== '') {
                this.setHeader();
            }
            if (this.showCloseIcon) {
                this.renderCloseIcon();
            }
            if (!ej2_base_4.isNullOrUndefined(this.content) && this.content !== '') {
                this.setContent();
            }
            else if (this.element.hasChildNodes()) {
                this.contentEle = this.element;
            }
            if (this.footerTemplate !== '') {
                this.setFooterTemplate();
            }
            if (!ej2_base_4.isNullOrUndefined(this.buttons[0].buttonModel) && this.footerTemplate === '') {
                this.setButton();
            }
            if (this.allowDragging && (!this.isModal) && (!ej2_base_4.isNullOrUndefined(this.headerContent))) {
                this.setAllowDragging();
            }
            ej2_base_2.attributes(this.element, { 'aria-modal': (this.isModal ? 'true' : 'false') });
            if (this.isModal) {
                this.setIsModal();
            }
            if (!ej2_base_4.isNullOrUndefined(this.targetEle)) {
                this.isModal ? this.targetEle.appendChild(this.dlgContainer) : this.targetEle.appendChild(this.element);
            }
            this.popupObj = new popup_1.Popup(this.element, {
                height: this.height,
                width: this.width,
                zIndex: this.zIndex,
                relateTo: this.target,
                actionOnScroll: 'none',
                open: function () {
                    _this.focusContent();
                    _this.trigger('open');
                },
                close: function (event) {
                    _this.unBindEvent(_this.element);
                    if (_this.isModal) {
                        _this.dlgContainer.style.display = 'none';
                    }
                    _this.trigger('close', _this.closedFrom);
                    _this.closedFrom = {};
                    if (!ej2_base_4.isNullOrUndefined(_this.storeActiveElement)) {
                        _this.storeActiveElement.focus();
                    }
                }
            });
            this.positionChange();
            this.setEnableRTL();
            ej2_base_2.addClass([this.element], DLG_HIDE);
            if (this.visible) {
                this.show();
            }
            else {
                if (this.isModal) {
                    this.dlgOverlay.style.display = 'none';
                }
            }
        };
        Dialog.prototype.positionChange = function () {
            if (!this.isModal) {
                this.popupObj.setProperties({
                    position: {
                        X: this.position.X, Y: this.position.Y
                    }
                });
            }
            else {
                this.dlgContainer.classList.add('e-dlg-' + this.position.X + '-' + this.position.Y);
            }
        };
        Dialog.prototype.getZindexPartial = function () {
            var dialogParent = this.element.parentElement;
            var parentZindex = [];
            while (dialogParent) {
                if (dialogParent.tagName !== 'BODY') {
                    var index = document.defaultView.getComputedStyle(dialogParent, null).getPropertyValue('z-index');
                    var position = document.defaultView.getComputedStyle(dialogParent, null).getPropertyValue('position');
                    if (index !== 'auto' && position !== 'static') {
                        parentZindex.push(index);
                    }
                    dialogParent = dialogParent.parentElement;
                }
                else {
                    break;
                }
            }
            var childrenZindex = [];
            for (var i = 0; i < document.body.children.length; i++) {
                if (!this.element.isEqualNode(document.body.children[i])) {
                    var index = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue('z-index');
                    var position = document.defaultView.getComputedStyle(document.body.children[i], null).getPropertyValue('position');
                    if (index !== 'auto' && position !== 'static') {
                        childrenZindex.push(index);
                    }
                }
            }
            childrenZindex.push('999');
            var finalValue = parentZindex.concat(childrenZindex);
            this.zIndex = Math.max.apply(Math, finalValue) + 1;
        };
        ;
        Dialog.prototype.setAllowDragging = function () {
            var _this = this;
            var handleContent = '.' + DLG_HEADER_CONTENT;
            this.dragObj = new ej2_base_6.Draggable(this.element, {
                clone: false,
                handle: handleContent,
                dragStart: function (event) {
                    _this.trigger('dragStart', event);
                },
                dragStop: function (event) {
                    _this.trigger('dragStop', event);
                },
                drag: function (event) {
                    _this.trigger('drag', event);
                }
            });
            if (!ej2_base_4.isNullOrUndefined(this.targetEle)) {
                this.dragObj.dragArea = this.targetEle;
            }
        };
        Dialog.prototype.setButton = function () {
            this.buttonContent = [];
            var primaryBtnFlag = true;
            for (var i = 0; i < this.buttons.length; i++) {
                var btn = ej2_base_2.createElement('button', { attrs: { type: 'button' } });
                this.buttonContent.push(btn.outerHTML);
            }
            this.setFooterTemplate();
            for (var i = 0; i < this.buttons.length; i++) {
                this.btnObj = new ej2_buttons_1.Button(this.buttons[i].buttonModel);
                if (typeof (this.buttons[i].click) === 'function') {
                    ej2_base_5.EventHandler.add(this.ftrTemplateContent.children[i], 'click', this.buttons[i].click, this);
                }
                this.btnObj.appendTo(this.ftrTemplateContent.children[i]);
                this.primaryButtonEle = this.element.getElementsByClassName('e-primary')[0];
            }
        };
        Dialog.prototype.setContent = function () {
            ej2_base_2.attributes(this.element, { 'aria-describedby': this.element.id + '_dialog-content' });
            this.contentEle = ej2_base_2.createElement('div', { className: DLG_CONTENT, id: this.element.id + '_dialog-content' });
            typeof (this.content) === 'string' ? this.contentEle.innerHTML = this.content : this.contentEle.appendChild(this.content);
            !ej2_base_4.isNullOrUndefined(this.headerContent) ? this.element.insertBefore(this.contentEle, this.element.children[1]) :
                this.element.insertBefore(this.contentEle, this.element.children[0]);
            if (this.height === 'auto') {
                this.setMaxHeight();
            }
        };
        Dialog.prototype.setMaxHeight = function () {
            var display = this.element.style.display;
            this.element.style.display = 'none';
            this.element.style.maxHeight = (!ej2_base_4.isNullOrUndefined(this.target)) ?
                (this.targetEle.offsetHeight - 20) + 'px' : (window.innerHeight - 20) + 'px';
            this.element.style.display = display;
        };
        Dialog.prototype.setEnableRTL = function () {
            this.enableRtl ? ej2_base_2.addClass([this.element], RTL) : ej2_base_2.removeClass([this.element], RTL);
        };
        Dialog.prototype.setHeader = function () {
            this.headerEle = ej2_base_2.createElement('div', { id: this.element.id + '_title', className: DLG_HEADER, innerHTML: this.header });
            ej2_base_2.attributes(this.element, { 'aria-labelledby': this.element.id + '_title' });
            this.createHeaderContent();
            this.headerContent.appendChild(this.headerEle);
            this.element.insertBefore(this.headerContent, this.element.children[0]);
        };
        Dialog.prototype.setFooterTemplate = function () {
            this.ftrTemplateContent = ej2_base_2.createElement('div', {
                className: DLG_FOOTER_CONTENT,
                innerHTML: (this.footerTemplate !== '' ? this.footerTemplate : this.buttonContent.join(''))
            });
            this.element.appendChild(this.ftrTemplateContent);
        };
        Dialog.prototype.createHeaderContent = function () {
            if (ej2_base_4.isNullOrUndefined(this.headerContent)) {
                this.headerContent = ej2_base_2.createElement('div', { className: DLG_HEADER_CONTENT });
            }
        };
        Dialog.prototype.renderCloseIcon = function () {
            this.closeIcon = ej2_base_2.createElement('button', { className: DLG_CLOSE_ICON_BTN, attrs: { type: 'button' } });
            this.closeIconBtnObj = new ej2_buttons_1.Button({ cssClass: 'e-flat', iconCss: DLG_CLOSE_ICON + ' ' + ICON });
            this.closeIconTitle();
            if (!ej2_base_4.isNullOrUndefined(this.headerContent)) {
                ej2_base_2.prepend([this.closeIcon], this.headerContent);
            }
            else {
                this.createHeaderContent();
                ej2_base_2.prepend([this.closeIcon], this.headerContent);
                this.element.insertBefore(this.headerContent, this.element.children[0]);
            }
            this.closeIconBtnObj.appendTo(this.closeIcon);
        };
        Dialog.prototype.closeIconTitle = function () {
            if (this.locale !== '') {
                var l10n = new ej2_base_1.L10n('Dialog', { locale: 'Close' });
                l10n.setLocale(this.locale);
                var closeIconTitle = l10n.getConstant('Close');
                this.closeIcon.setAttribute('title', closeIconTitle);
            }
            else {
                this.closeIcon.setAttribute('title', 'Close');
            }
        };
        Dialog.prototype.setCSSClass = function (oldCSSClass) {
            if (this.cssClass) {
                ej2_base_2.addClass([this.element], this.cssClass.split(' '));
            }
            if (oldCSSClass) {
                ej2_base_2.removeClass([this.element], oldCSSClass.split(' '));
            }
        };
        Dialog.prototype.setIsModal = function () {
            this.dlgContainer = ej2_base_2.createElement('div', { className: DLG_CONTAINER });
            this.element.parentNode.insertBefore(this.dlgContainer, this.element);
            this.dlgContainer.appendChild(this.element);
            ej2_base_2.addClass([this.element], MODAL_DLG);
            this.dlgOverlay = ej2_base_2.createElement('div', { className: DLG_OVERLAY });
            this.dlgOverlay.style.zIndex = (this.zIndex - 1).toString();
            this.dlgContainer.appendChild(this.dlgOverlay);
        };
        Dialog.prototype.getValidFocusNode = function (items) {
            var node;
            for (var u = 0; u < items.length; u++) {
                node = items[u];
                if ((node.clientHeight > 0 || (node.tagName.toLowerCase() === 'a' && node.hasAttribute('href'))) && node.tabIndex > -1 &&
                    !node.disabled && !this.disableElement(node, '[disabled],[aria-disabled="true"],[type="hidden"]')) {
                    return node;
                }
            }
            return node;
        };
        Dialog.prototype.focusableElements = function (content) {
            if (!ej2_base_4.isNullOrUndefined(content)) {
                var value = 'input,select,textarea,button,a,[contenteditable="true"],[tabindex]';
                var items = content.querySelectorAll(value);
                return this.getValidFocusNode(items);
            }
            return null;
        };
        Dialog.prototype.getAutoFocusNode = function (container) {
            var node = container.querySelector('.' + DLG_CLOSE_ICON_BTN);
            var value = '[autofocus]';
            var items = container.querySelectorAll(value);
            var validNode = this.getValidFocusNode(items);
            if (!ej2_base_4.isNullOrUndefined(validNode)) {
                node = validNode;
            }
            else {
                validNode = this.focusableElements(this.contentEle);
                if (!ej2_base_4.isNullOrUndefined(validNode)) {
                    return node = validNode;
                }
                else if (!ej2_base_4.isNullOrUndefined(this.primaryButtonEle)) {
                    return this.element.querySelector('.' + DLG_PRIMARY_BUTTON);
                }
            }
            return node;
        };
        Dialog.prototype.disableElement = function (element, t) {
            var elementMatch = element ? element.matches || element.webkitMatchesSelector || element.msMatchesSelector : null;
            if (elementMatch) {
                for (; element; element = element.parentNode) {
                    if (element instanceof Element && elementMatch.call(element, t)) {
                        return element;
                    }
                }
            }
            return null;
        };
        Dialog.prototype.focusContent = function () {
            var element = this.getAutoFocusNode(this.element);
            var node = !ej2_base_4.isNullOrUndefined(element) ? element : this.element;
            node.focus();
            this.bindEvent(this.element);
        };
        Dialog.prototype.bindEvent = function (element) {
            ej2_base_5.EventHandler.add(element, 'keydown', this.keyDown, this);
        };
        Dialog.prototype.unBindEvent = function (element) {
            ej2_base_5.EventHandler.remove(element, 'keydown', this.keyDown);
        };
        Dialog.prototype.getModuleName = function () {
            return 'dialog';
        };
        Dialog.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'content':
                        if (!ej2_base_4.isNullOrUndefined(this.content) && this.content !== '') {
                            if (!ej2_base_4.isNullOrUndefined(this.contentEle) && this.contentEle.getAttribute('role') !== 'dialog') {
                                this.contentEle.innerHTML = '';
                                typeof (this.content) === 'string' ?
                                    this.contentEle.innerHTML = this.content : this.contentEle.appendChild(this.content);
                                this.setMaxHeight();
                            }
                            else {
                                this.setContent();
                            }
                        }
                        else if (!ej2_base_4.isNullOrUndefined(this.contentEle)) {
                            this.element.removeChild(this.contentEle);
                        }
                        break;
                    case 'header':
                        if (this.header === '') {
                            ej2_base_2.detach(this.headerEle);
                        }
                        else {
                            this.element.getElementsByClassName(DLG_HEADER).length > 0 ?
                                this.element.getElementsByClassName(DLG_HEADER)[0].innerHTML = this.header
                                : this.setHeader();
                        }
                        break;
                    case 'footerTemplate':
                        this.element.getElementsByClassName(DLG_FOOTER_CONTENT).length > 0 ?
                            this.ftrTemplateContent.innerHTML = this.footerTemplate : this.setFooterTemplate();
                        break;
                    case 'showCloseIcon':
                        if (this.element.getElementsByClassName(DLG_CLOSE_ICON).length > 0) {
                            if (!this.showCloseIcon && this.header === '') {
                                ej2_base_2.detach(this.headerContent);
                            }
                            else if (!this.showCloseIcon) {
                                ej2_base_2.detach(this.closeIcon);
                            }
                        }
                        else {
                            this.renderCloseIcon();
                            this.wireEvents();
                        }
                        break;
                    case 'locale':
                        if (this.showCloseIcon) {
                            this.closeIconTitle();
                        }
                        break;
                    case 'visible':
                        this.visible ? this.show() : this.hide();
                        break;
                    case 'isModal':
                        this.element.setAttribute('aria-modal', this.isModal ? 'true' : 'false');
                        if (this.isModal) {
                            this.setIsModal();
                            this.wireEvents();
                            if (!ej2_base_4.isNullOrUndefined(this.targetEle)) {
                                this.isModal ? this.targetEle.appendChild(this.dlgContainer) : this.targetEle.appendChild(this.element);
                            }
                        }
                        else {
                            ej2_base_2.removeClass([this.element], MODAL_DLG);
                            ej2_base_2.removeClass([document.body], SCROLL_DISABLED);
                            ej2_base_2.detach(this.dlgOverlay);
                            while (this.dlgContainer.firstChild) {
                                this.dlgContainer.parentElement.insertBefore(this.dlgContainer.firstChild, this.dlgContainer);
                            }
                            this.dlgContainer.parentElement.removeChild(this.dlgContainer);
                        }
                        break;
                    case 'height':
                        ej2_base_2.setStyleAttribute(this.element, { 'height': ej2_base_4.formatUnit(newProp.height) });
                        break;
                    case 'width':
                        ej2_base_2.setStyleAttribute(this.element, { 'width': ej2_base_4.formatUnit(newProp.width) });
                        break;
                    case 'zIndex':
                        this.popupObj.zIndex = this.zIndex;
                        break;
                    case 'cssClass':
                        this.setCSSClass(oldProp.cssClass);
                        break;
                    case 'animationSettings':
                        this.show();
                        break;
                    case 'buttons':
                        if (!ej2_base_4.isNullOrUndefined(this.buttons[0].buttonModel) && this.footerTemplate === '') {
                            if (!ej2_base_4.isNullOrUndefined(this.ftrTemplateContent)) {
                                this.ftrTemplateContent.innerHTML = '';
                            }
                            this.setButton();
                        }
                        break;
                    case 'allowDragging':
                        if (this.allowDragging && (!this.isModal) && (!ej2_base_4.isNullOrUndefined(this.headerContent))) {
                            this.setAllowDragging();
                        }
                        else {
                            this.dragObj.destroy();
                        }
                        break;
                    case 'target':
                        this.popupObj.relateTo = newProp.target;
                        break;
                    case 'position':
                        if (oldProp.position.X === this.position.X && oldProp.position.Y === this.position.Y) {
                            break;
                        }
                        if (this.isModal) {
                            this.dlgContainer.classList.remove('e-dlg-' + oldProp.position.X + '-' + oldProp.position.Y);
                            this.dlgContainer.classList.add('e-dlg-' + this.position.X + '-' + this.position.Y);
                        }
                        else {
                            this.popupObj.position = this.position;
                            break;
                        }
                        break;
                    case 'enableRtl':
                        this.setEnableRTL();
                        break;
                }
            }
        };
        Dialog.prototype.getPersistData = function () {
            return this.addOnPersist([]);
        };
        Dialog.prototype.destroy = function () {
            if (this.element.classList.contains(ROOT)) {
                this.unWireEvents();
                _super.prototype.destroy.call(this);
                var classArray = [
                    ROOT, RTL, MODAL_DLG
                ];
                ej2_base_2.removeClass([this.element, this.element], classArray);
                if (this.popupObj.element.classList.contains(POPUP_ROOT)) {
                    this.popupObj.destroy();
                }
                if (!ej2_base_4.isNullOrUndefined(this.btnObj)) {
                    this.btnObj.destroy();
                }
                if (this.isModal) {
                    ej2_base_2.detach(this.dlgOverlay);
                    this.dlgContainer.parentNode.insertBefore(this.element, this.dlgContainer);
                    ej2_base_2.detach(this.dlgContainer);
                }
                this.element.innerHTML = '';
            }
        };
        Dialog.prototype.wireEvents = function () {
            if (this.showCloseIcon) {
                ej2_base_5.EventHandler.add(this.closeIcon, 'click', this.closeIconClickEventHandler, this);
            }
            if (this.isModal) {
                ej2_base_5.EventHandler.add(this.dlgOverlay, 'click', this.dlgOverlayClickEventHandler, this);
            }
        };
        Dialog.prototype.unWireEvents = function () {
            if (this.showCloseIcon) {
                ej2_base_5.EventHandler.remove(this.closeIcon, 'click', this.closeIconClickEventHandler);
            }
            if (this.isModal) {
                ej2_base_5.EventHandler.remove(this.dlgOverlay, 'click', this.dlgOverlayClickEventHandler);
            }
            if (!ej2_base_4.isNullOrUndefined(this.buttons[0].buttonModel)) {
                for (var i = 0; i < this.buttons.length; i++) {
                    if (typeof (this.buttons[i].click) === 'function') {
                        ej2_base_5.EventHandler.remove(this.ftrTemplateContent.children[i], 'click', this.buttons[i].click);
                    }
                }
            }
        };
        Dialog.prototype.refreshPosition = function () {
            this.popupObj.refreshPosition();
        };
        Dialog.prototype.show = function (isFullScreen) {
            if (!this.element.classList.contains(DLG_SHOW) || (!ej2_base_4.isNullOrUndefined(isFullScreen))) {
                if (!ej2_base_4.isNullOrUndefined(isFullScreen)) {
                    this.fullScreen(isFullScreen);
                }
                this.storeActiveElement = document.activeElement;
                this.element.tabIndex = -1;
                this.trigger('beforeOpen');
                if (this.isModal && (!ej2_base_4.isNullOrUndefined(this.dlgOverlay))) {
                    this.dlgOverlay.style.display = 'block';
                    this.dlgContainer.style.display = 'flex';
                    if (!ej2_base_4.isNullOrUndefined(this.targetEle)) {
                        if (this.targetEle === document.body) {
                            this.dlgContainer.style.position = 'fixed';
                        }
                        else {
                            this.dlgContainer.style.position = 'absolute';
                        }
                        this.dlgOverlay.style.position = 'absolute';
                        this.element.style.position = 'relative';
                        ej2_base_2.addClass([this.targetEle], SCROLL_DISABLED);
                    }
                    else {
                        ej2_base_2.addClass([document.body], SCROLL_DISABLED);
                    }
                }
                var openAnimation = {
                    name: this.animationSettings.effect + 'In',
                    duration: this.animationSettings.duration,
                    delay: this.animationSettings.delay
                };
                this.animationSettings.effect === 'None' ? this.popupObj.show() : this.popupObj.show(openAnimation);
                this.dialogOpen = true;
                this.visible = true;
            }
        };
        Dialog.prototype.hide = function () {
            this.trigger('beforeClose');
            if (this.isModal) {
                this.dlgOverlay.style.display = 'none';
                !ej2_base_4.isNullOrUndefined(this.targetEle) ? ej2_base_2.removeClass([this.targetEle], SCROLL_DISABLED) :
                    ej2_base_2.removeClass([document.body], SCROLL_DISABLED);
            }
            var closeAnimation = {
                name: this.animationSettings.effect + 'Out',
                duration: this.animationSettings.duration,
                delay: this.animationSettings.delay
            };
            this.animationSettings.effect === 'None' ? this.popupObj.hide() : this.popupObj.hide(closeAnimation);
            this.dialogOpen = false;
            this.visible = false;
        };
        Dialog.prototype.fullScreen = function (args) {
            var top = this.element.offsetTop;
            var left = this.element.offsetLeft;
            if (args) {
                ej2_base_2.addClass([this.element], FULLSCREEN);
                var display = this.element.style.display;
                this.element.style.display = 'none';
                this.element.style.maxHeight = (!ej2_base_4.isNullOrUndefined(this.target)) ?
                    (this.targetEle.offsetHeight) + 'px' : (window.innerHeight) + 'px';
                this.element.style.display = display;
                ej2_base_2.addClass([document.body], SCROLL_DISABLED);
                if (this.allowDragging && !ej2_base_4.isNullOrUndefined(this.dragObj)) {
                    this.dragObj.destroy();
                }
            }
            else {
                ej2_base_2.removeClass([this.element], FULLSCREEN);
                ej2_base_2.removeClass([document.body], SCROLL_DISABLED);
                if (this.allowDragging && (!this.isModal) && (!ej2_base_4.isNullOrUndefined(this.headerContent))) {
                    this.setAllowDragging();
                }
            }
            return args;
        };
        return Dialog;
    }(ej2_base_1.Component));
    __decorate([
        ej2_base_1.Property('')
    ], Dialog.prototype, "content", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], Dialog.prototype, "showCloseIcon", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], Dialog.prototype, "isModal", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Dialog.prototype, "header", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], Dialog.prototype, "visible", void 0);
    __decorate([
        ej2_base_1.Property('auto')
    ], Dialog.prototype, "height", void 0);
    __decorate([
        ej2_base_1.Property('100%')
    ], Dialog.prototype, "width", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Dialog.prototype, "cssClass", void 0);
    __decorate([
        ej2_base_1.Property()
    ], Dialog.prototype, "zIndex", void 0);
    __decorate([
        ej2_base_1.Property(null)
    ], Dialog.prototype, "target", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Dialog.prototype, "footerTemplate", void 0);
    __decorate([
        ej2_base_1.Property(false)
    ], Dialog.prototype, "allowDragging", void 0);
    __decorate([
        ej2_base_1.Collection([{}], ButtonProps)
    ], Dialog.prototype, "buttons", void 0);
    __decorate([
        ej2_base_1.Property(true)
    ], Dialog.prototype, "closeOnEscape", void 0);
    __decorate([
        ej2_base_1.Property({ effect: 'Fade', duration: 400, delay: 0 })
    ], Dialog.prototype, "animationSettings", void 0);
    __decorate([
        ej2_base_1.Property({ X: 'center', Y: 'center' })
    ], Dialog.prototype, "position", void 0);
    __decorate([
        ej2_base_1.Property('')
    ], Dialog.prototype, "locale", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Dialog.prototype, "created", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Dialog.prototype, "open", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Dialog.prototype, "beforeOpen", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Dialog.prototype, "close", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Dialog.prototype, "beforeClose", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Dialog.prototype, "dragStart", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Dialog.prototype, "dragStop", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Dialog.prototype, "drag", void 0);
    __decorate([
        ej2_base_1.Event()
    ], Dialog.prototype, "overlayClick", void 0);
    Dialog = __decorate([
        ej2_base_3.NotifyPropertyChanges
    ], Dialog);
    exports.Dialog = Dialog;
    exports.dialogBuilder = ej2_base_1.CreateBuilder(Dialog);
});
