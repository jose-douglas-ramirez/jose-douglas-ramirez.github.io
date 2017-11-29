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
import { Component, Property, ChildProperty, Event, CreateBuilder } from '@syncfusion/ej2-base';
import { EventHandler, Touch, Browser, Animation as PopupAnimation } from '@syncfusion/ej2-base';
import { isNullOrUndefined, getUniqueID, formatUnit } from '@syncfusion/ej2-base';
import { attributes, createElement, closest, removeClass, addClass, remove } from '@syncfusion/ej2-base';
import { NotifyPropertyChanges, Complex } from '@syncfusion/ej2-base';
import { Popup } from '../popup/popup';
import { calculatePosition } from '../common/position';
import { isCollide, fit } from '../common/collision';
var TOUCHEND_HIDE_DELAY = 1500;
var TAPHOLD_THRESHOLD = 500;
var SHOW_POINTER_TIP_GAP = 0;
var HIDE_POINTER_TIP_GAP = 8;
var MOUSE_TRAIL_GAP = 2;
var POINTER_ADJUST = 2;
var ROOT = 'e-tooltip';
var RTL = 'e-rtl';
var DEVICE = 'e-bigger';
var ICON = 'e-icons';
var CLOSE = 'e-tooltip-close';
var TOOLTIP_WRAP = 'e-tooltip-wrap';
var CONTENT = 'e-tip-content';
var ARROW_TIP = 'e-arrow-tip';
var ARROW_TIP_OUTER = 'e-arrow-tip-outer';
var ARROW_TIP_INNER = 'e-arrow-tip-inner';
var TIP_BOTTOM = 'e-tip-bottom';
var TIP_TOP = 'e-tip-top';
var TIP_LEFT = 'e-tip-left';
var TIP_RIGHT = 'e-tip-right';
var POPUP_ROOT = 'e-popup';
var POPUP_OPEN = 'e-popup-open';
var POPUP_CLOSE = 'e-popup-close';
var Animation = (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Animation;
}(ChildProperty));
export { Animation };
__decorate([
    Property({ effect: 'FadeIn', duration: 150, delay: 0 })
], Animation.prototype, "open", void 0);
__decorate([
    Property({ effect: 'FadeOut', duration: 150, delay: 0 })
], Animation.prototype, "close", void 0);
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(options, element) {
        return _super.call(this, options, element) || this;
    }
    Tooltip.prototype.initialize = function () {
        this.formatPosition();
        addClass([this.element], ROOT);
    };
    Tooltip.prototype.formatPosition = function () {
        if (this.position.indexOf('top') === 0 || this.position.indexOf('bottom') === 0) {
            _a = this.position.split(' '), this.tooltipPositionY = _a[0], this.tooltipPositionX = _a[1];
        }
        else {
            _b = this.position.split(' '), this.tooltipPositionX = _b[0], this.tooltipPositionY = _b[1];
        }
        var _a, _b;
    };
    Tooltip.prototype.renderArrow = function () {
        this.setTipClass(this.position);
        var tip = createElement('div', { className: ARROW_TIP + ' ' + this.tipClass });
        tip.appendChild(createElement('div', { className: ARROW_TIP_OUTER + ' ' + this.tipClass }));
        tip.appendChild(createElement('div', { className: ARROW_TIP_INNER + ' ' + this.tipClass }));
        this.tooltipEle.appendChild(tip);
    };
    Tooltip.prototype.setTipClass = function (position) {
        if (position.indexOf('right') === 0) {
            this.tipClass = TIP_LEFT;
        }
        else if (position.indexOf('bottom') === 0) {
            this.tipClass = TIP_TOP;
        }
        else if (position.indexOf('left') === 0) {
            this.tipClass = TIP_RIGHT;
        }
        else {
            this.tipClass = TIP_BOTTOM;
        }
    };
    Tooltip.prototype.renderPopup = function (target) {
        var elePos = this.mouseTrail ? { top: 0, left: 0 } : this.getTooltipPosition(target);
        this.popupObj = new Popup(this.tooltipEle, {
            height: this.height,
            width: this.width,
            position: {
                X: elePos.left,
                Y: elePos.top
            },
            enableRtl: this.enableRtl,
            open: this.openPopupHandler.bind(this),
            close: this.closePopupHandler.bind(this)
        });
    };
    Tooltip.prototype.getTooltipPosition = function (target) {
        var pos = calculatePosition(target, this.tooltipPositionX, this.tooltipPositionY);
        var offsetPos = this.calculateTooltipOffset(this.position);
        var elePos = this.collisionFlipFit(target, pos.left + offsetPos.left, pos.top + offsetPos.top);
        return elePos;
    };
    Tooltip.prototype.reposition = function (target) {
        var elePos = this.getTooltipPosition(target);
        this.popupObj.position = { X: elePos.left, Y: elePos.top };
        this.popupObj.dataBind();
    };
    Tooltip.prototype.openPopupHandler = function () {
        this.trigger('afterOpen', this.tooltipEventArgs);
    };
    Tooltip.prototype.closePopupHandler = function () {
        this.clear();
        this.trigger('afterClose', this.tooltipEventArgs);
    };
    Tooltip.prototype.calculateTooltipOffset = function (position) {
        var pos = { top: 0, left: 0 };
        var tooltipEleWidth = this.tooltipEle.offsetWidth;
        var tooltipEleHeight = this.tooltipEle.offsetHeight;
        var arrowEle = this.tooltipEle.querySelector('.' + ARROW_TIP);
        var tipWidth = arrowEle ? arrowEle.offsetWidth : 0;
        var tipHeight = arrowEle ? arrowEle.offsetHeight : 0;
        var tipAdjust = (this.showTipPointer ? SHOW_POINTER_TIP_GAP : HIDE_POINTER_TIP_GAP);
        var tipHeightAdjust = (tipHeight / 2) + POINTER_ADJUST + (this.tooltipEle.offsetHeight - this.tooltipEle.clientHeight);
        var tipWidthAdjust = (tipWidth / 2) + POINTER_ADJUST + (this.tooltipEle.offsetWidth - this.tooltipEle.clientWidth);
        if (this.mouseTrail) {
            tipAdjust += MOUSE_TRAIL_GAP;
        }
        switch (position) {
            case 'right top':
                pos.left += tipWidth + tipAdjust;
                pos.top -= tooltipEleHeight - tipHeightAdjust;
                break;
            case 'right center':
                pos.left += tipWidth + tipAdjust;
                pos.top -= (tooltipEleHeight / 2);
                break;
            case 'right bottom':
                pos.left += tipWidth + tipAdjust;
                pos.top -= (tipHeightAdjust);
                break;
            case 'bottom right':
                pos.top += (tipHeight + tipAdjust);
                pos.left -= (tipWidthAdjust);
                break;
            case 'bottom center':
                pos.top += (tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth / 2);
                break;
            case 'bottom left':
                pos.top += (tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth - tipWidthAdjust);
                break;
            case 'left bottom':
                pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
                pos.top -= (tipHeightAdjust);
                break;
            case 'left center':
                pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
                pos.top -= (tooltipEleHeight / 2);
                break;
            case 'left top':
                pos.left -= (tipWidth + tooltipEleWidth + tipAdjust);
                pos.top -= (tooltipEleHeight - tipHeightAdjust);
                break;
            case 'top left':
                pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth - tipWidthAdjust);
                break;
            case 'top right':
                pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
                pos.left -= (tipWidthAdjust);
                break;
            default:
                pos.top -= (tooltipEleHeight + tipHeight + tipAdjust);
                pos.left -= (tooltipEleWidth / 2);
                break;
        }
        pos.left += this.offsetX;
        pos.top += this.offsetY;
        return pos;
    };
    Tooltip.prototype.updateTipPosition = function (position) {
        var selEle = this.tooltipEle.querySelectorAll('.' + ARROW_TIP + ',.' + ARROW_TIP_OUTER + ',.' + ARROW_TIP_INNER);
        var removeList = [TIP_BOTTOM, TIP_TOP, TIP_LEFT, TIP_RIGHT];
        removeClass(selEle, removeList);
        this.setTipClass(position);
        addClass(selEle, this.tipClass);
    };
    Tooltip.prototype.adjustArrow = function (target, position, tooltipPositionX, tooltipPositionY) {
        if (this.showTipPointer === false) {
            return;
        }
        this.updateTipPosition(position);
        var leftValue;
        var topValue;
        var tooltipWidth = this.tooltipEle.clientWidth;
        var tooltipHeight = this.tooltipEle.clientHeight;
        var arrowEle = this.tooltipEle.querySelector('.' + ARROW_TIP);
        var tipWidth = arrowEle.offsetWidth;
        var tipHeight = arrowEle.offsetHeight;
        if (this.tipClass === TIP_BOTTOM || this.tipClass === TIP_TOP) {
            topValue = this.tipClass === TIP_BOTTOM ? '100%' : -(tipHeight) + 'px';
            var tipPosExclude = tooltipPositionX !== 'center' || (tooltipWidth > target.offsetWidth) || this.mouseTrail;
            if ((tipPosExclude && tooltipPositionX === 'left') || (!tipPosExclude && this.tipPointerPosition === 'end')) {
                leftValue = (tooltipWidth - tipWidth - POINTER_ADJUST) + 'px';
            }
            else if ((tipPosExclude && tooltipPositionX === 'right') || (!tipPosExclude && this.tipPointerPosition === 'start')) {
                leftValue = POINTER_ADJUST + 'px';
            }
            else {
                leftValue = ((tooltipWidth / 2) - (tipWidth / 2)) + 'px';
            }
        }
        else {
            leftValue = this.tipClass === TIP_RIGHT ? tooltipWidth + 'px' : -(tipWidth) + 'px';
            var tipPosExclude = tooltipPositionY !== 'center' || (tooltipHeight > target.offsetHeight) || this.mouseTrail;
            if ((tipPosExclude && tooltipPositionY === 'top') || (!tipPosExclude && this.tipPointerPosition === 'end')) {
                topValue = (tooltipHeight - tipHeight - POINTER_ADJUST) + 'px';
            }
            else if ((tipPosExclude && tooltipPositionY === 'bottom') || (!tipPosExclude && this.tipPointerPosition === 'start')) {
                topValue = POINTER_ADJUST + 'px';
            }
            else {
                topValue = ((tooltipHeight / 2) - (tipHeight / 2)) + 'px';
            }
        }
        arrowEle.style.top = topValue;
        arrowEle.style.left = leftValue;
    };
    Tooltip.prototype.renderContent = function (target) {
        var tooltipContent = this.tooltipEle.querySelector('.' + CONTENT);
        if (target && !isNullOrUndefined(target.getAttribute('title'))) {
            target.setAttribute('data-content', target.getAttribute('title'));
            target.removeAttribute('title');
        }
        if (!isNullOrUndefined(this.content)) {
            if (typeof (this.content) === 'string') {
                tooltipContent.innerHTML = this.content;
            }
            else {
                while (tooltipContent.firstChild) {
                    tooltipContent.removeChild(tooltipContent.firstChild);
                }
                tooltipContent.appendChild(this.content);
            }
        }
        else {
            if (target && !isNullOrUndefined(target.getAttribute('data-content'))) {
                tooltipContent.innerHTML = target.getAttribute('data-content');
            }
        }
    };
    Tooltip.prototype.renderCloseIcon = function () {
        if (!this.isSticky) {
            return;
        }
        var tipClose = createElement('div', { className: ICON + ' ' + CLOSE });
        this.tooltipEle.appendChild(tipClose);
        EventHandler.add(tipClose, Browser.touchStartEvent, this.onStickyClose, this);
    };
    Tooltip.prototype.addDescribedBy = function (target, id) {
        var describedby = (target.getAttribute('aria-describedby') || '').split(/\s+/);
        if (describedby.indexOf(id) < 0) {
            describedby.push(id);
        }
        attributes(target, { 'aria-describedby': describedby.join(' ').trim(), 'data-tooltip-id': id });
    };
    Tooltip.prototype.removeDescribedBy = function (target) {
        var id = target.getAttribute('data-tooltip-id');
        var describedby = (target.getAttribute('aria-describedby') || '').split(/\s+/);
        var index = describedby.indexOf(id);
        if (index !== -1) {
            describedby.splice(index, 1);
        }
        target.removeAttribute('data-tooltip-id');
        var orgdescribedby = describedby.join(' ').trim();
        if (orgdescribedby) {
            target.setAttribute('aria-describedby', orgdescribedby);
        }
        else {
            target.removeAttribute('aria-describedby');
        }
    };
    Tooltip.prototype.tapHoldHandler = function (evt) {
        clearTimeout(this.autoCloseTimer);
        this.targetHover(evt.originalEvent);
    };
    Tooltip.prototype.touchEndHandler = function (e) {
        var _this = this;
        if (this.isSticky) {
            return;
        }
        var close = function () {
            _this.close();
        };
        this.autoCloseTimer = setTimeout(close, TOUCHEND_HIDE_DELAY);
    };
    Tooltip.prototype.targetClick = function (e) {
        var target;
        if (this.target) {
            target = closest(e.target, this.target);
        }
        else {
            target = this.element;
        }
        if (isNullOrUndefined(target)) {
            return;
        }
        if (target.getAttribute('data-tooltip-id') === null) {
            this.targetHover(e);
        }
        else if (!this.isSticky) {
            this.hideTooltip(this.animation.close, e, target);
        }
    };
    Tooltip.prototype.targetHover = function (e) {
        var target;
        if (this.target) {
            target = closest(e.target, this.target);
        }
        else {
            target = this.element;
        }
        if (isNullOrUndefined(target) || target.getAttribute('data-tooltip-id') !== null) {
            return;
        }
        var targetList = [].slice.call(document.querySelectorAll('[data-tooltip-id= ' + this.ctrlId + '_content]'));
        for (var _i = 0, targetList_1 = targetList; _i < targetList_1.length; _i++) {
            var target_1 = targetList_1[_i];
            this.restoreElement(target_1);
        }
        this.showTooltip(target, this.animation.open, e);
        this.wireMouseEvents(e, target);
    };
    Tooltip.prototype.showTooltip = function (target, showAnimation, e) {
        var _this = this;
        clearTimeout(this.showTimer);
        clearTimeout(this.hideTimer);
        this.tooltipEventArgs = e ? { type: e.type, cancel: false, target: target, event: e, element: this.tooltipEle } :
            { type: null, cancel: false, target: target, event: null, element: this.tooltipEle };
        this.trigger('beforeRender', this.tooltipEventArgs);
        if (this.tooltipEventArgs.cancel) {
            this.isHidden = true;
            this.clear();
            return;
        }
        this.isHidden = false;
        if (isNullOrUndefined(this.tooltipEle)) {
            this.ctrlId = this.element.getAttribute('id') ? getUniqueID(this.element.getAttribute('id')) : getUniqueID('tooltip');
            this.tooltipEle = createElement('div', {
                className: TOOLTIP_WRAP + ' ' + POPUP_ROOT, attrs: {
                    role: 'tooltip', 'aria-hidden': 'false', 'id': this.ctrlId + '_content'
                }, styles: 'width:' + formatUnit(this.width) + ';height:' + formatUnit(this.height) + ';position:absolute;'
            });
            if (this.cssClass) {
                addClass([this.tooltipEle], this.cssClass);
            }
            if (Browser.isDevice) {
                addClass([this.tooltipEle], DEVICE);
            }
            if (this.width !== 'auto') {
                this.tooltipEle.style.maxWidth = formatUnit(this.width);
            }
            this.tooltipEle.appendChild(createElement('div', { className: CONTENT }));
            document.body.appendChild(this.tooltipEle);
            this.addDescribedBy(target, this.ctrlId + '_content');
            this.renderContent(target);
            addClass([this.tooltipEle], POPUP_OPEN);
            if (this.showTipPointer) {
                this.renderArrow();
            }
            this.renderCloseIcon();
            this.renderPopup(target);
        }
        else {
            this.adjustArrow(target, this.position, this.tooltipPositionX, this.tooltipPositionY);
            this.addDescribedBy(target, this.ctrlId + '_content');
            this.renderContent(target);
            PopupAnimation.stop(this.tooltipEle);
            this.reposition(target);
        }
        removeClass([this.tooltipEle], POPUP_OPEN);
        addClass([this.tooltipEle], POPUP_CLOSE);
        this.tooltipEventArgs = e ? { type: e.type, cancel: false, target: target, event: e, element: this.tooltipEle } :
            { type: null, cancel: false, target: target, event: null, element: this.tooltipEle };
        this.trigger('beforeOpen', this.tooltipEventArgs);
        if (this.tooltipEventArgs.cancel) {
            this.isHidden = true;
            this.clear();
            return;
        }
        var openAnimation = {
            name: showAnimation.effect, duration: showAnimation.duration, delay: showAnimation.delay, timingFunction: 'easeOut'
        };
        if (showAnimation.effect === 'None') {
            openAnimation = undefined;
        }
        if (this.openDelay > 0) {
            var show = function () {
                if (_this.popupObj) {
                    _this.popupObj.show(openAnimation);
                }
            };
            this.showTimer = setTimeout(show, this.openDelay);
        }
        else {
            this.popupObj.show(openAnimation);
        }
    };
    Tooltip.prototype.checkCollision = function (target, x, y) {
        var elePos = {
            left: x, top: y, position: this.position,
            horizontal: this.tooltipPositionX, vertical: this.tooltipPositionY
        };
        var affectedPos = isCollide(this.tooltipEle, (this.target ? this.element : null), x, y);
        if (affectedPos.length > 0) {
            elePos.horizontal = affectedPos.indexOf('left') >= 0 ? 'right' : affectedPos.indexOf('right') >= 0 ? 'left' :
                this.tooltipPositionX;
            elePos.vertical = affectedPos.indexOf('top') >= 0 ? 'bottom' : affectedPos.indexOf('bottom') >= 0 ? 'top' :
                this.tooltipPositionY;
        }
        return elePos;
    };
    Tooltip.prototype.collisionFlipFit = function (target, x, y) {
        var elePos = this.checkCollision(target, x, y);
        var newpos = elePos.position;
        if (this.tooltipPositionY !== elePos.vertical) {
            newpos = ((this.position.indexOf('bottom') === 0 || this.position.indexOf('top') === 0) ?
                elePos.vertical + ' ' + this.tooltipPositionX : this.tooltipPositionX + ' ' + elePos.vertical);
        }
        if (this.tooltipPositionX !== elePos.horizontal) {
            if (newpos.indexOf('left') === 0) {
                elePos.vertical = (newpos === 'left top' || newpos === 'left center') ? 'top' : 'bottom';
                newpos = (elePos.vertical + ' ' + 'left');
            }
            if (newpos.indexOf('right') === 0) {
                elePos.vertical = (newpos === 'right top' || newpos === 'right center') ? 'top' : 'bottom';
                newpos = (elePos.vertical + ' ' + 'right');
            }
            elePos.horizontal = this.tooltipPositionX;
        }
        if (elePos.position !== newpos) {
            var pos = calculatePosition(target, this.tooltipPositionX, elePos.vertical);
            this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
            var offsetPos = this.calculateTooltipOffset(newpos);
            elePos.position = newpos;
            elePos.left = pos.left + offsetPos.left;
            elePos.top = pos.top + offsetPos.top;
        }
        else {
            this.adjustArrow(target, newpos, elePos.horizontal, elePos.vertical);
        }
        var eleOffset = { left: elePos.left, top: elePos.top };
        var left = fit(this.tooltipEle, (this.target ? this.element : null), { X: true, Y: false }, eleOffset).left;
        if (this.showTipPointer && (newpos.indexOf('bottom') === 0 || newpos.indexOf('top') === 0)) {
            var arrowEle = this.tooltipEle.querySelector('.' + ARROW_TIP);
            var arrowleft = parseInt(arrowEle.style.left, 10) - (left - elePos.left);
            if (arrowleft < 0) {
                arrowleft = 0;
            }
            else if ((arrowleft + arrowEle.offsetWidth) > this.tooltipEle.clientWidth) {
                arrowleft = this.tooltipEle.clientWidth - arrowEle.offsetWidth;
            }
            arrowEle.style.left = arrowleft.toString() + 'px';
        }
        eleOffset.left = left;
        return eleOffset;
    };
    Tooltip.prototype.hideTooltip = function (hideAnimation, e, targetElement) {
        var _this = this;
        var target;
        if (e) {
            target = this.target ? (targetElement || e.target) : this.element;
            this.tooltipEventArgs = {
                type: e.type, cancel: false, target: target, event: e, element: this.tooltipEle
            };
        }
        else {
            target = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]');
            this.tooltipEventArgs = {
                type: null, cancel: false, target: target, event: null, element: this.tooltipEle
            };
        }
        if (isNullOrUndefined(target)) {
            return;
        }
        this.trigger('beforeClose', this.tooltipEventArgs);
        if (!this.tooltipEventArgs.cancel) {
            this.restoreElement(target);
            this.isHidden = true;
            var closeAnimation_1 = {
                name: hideAnimation.effect, duration: hideAnimation.duration, delay: hideAnimation.delay, timingFunction: 'easeIn'
            };
            if (hideAnimation.effect === 'None') {
                closeAnimation_1 = undefined;
            }
            if (this.closeDelay > 0) {
                var hide = function () {
                    if (_this.popupObj) {
                        _this.popupObj.hide(closeAnimation_1);
                    }
                };
                this.hideTimer = setTimeout(hide, this.closeDelay);
            }
            else {
                this.popupObj.hide(closeAnimation_1);
            }
        }
        else {
            this.isHidden = false;
        }
    };
    Tooltip.prototype.restoreElement = function (target) {
        this.unwireMouseEvents(target);
        if (!isNullOrUndefined(target.getAttribute('data-content'))) {
            target.setAttribute('title', target.getAttribute('data-content'));
            target.removeAttribute('data-content');
        }
        this.removeDescribedBy(target);
    };
    Tooltip.prototype.clear = function () {
        if (this.tooltipEle) {
            removeClass([this.tooltipEle], POPUP_CLOSE);
            addClass([this.tooltipEle], POPUP_OPEN);
        }
        if (this.isHidden) {
            if (this.popupObj) {
                this.popupObj.destroy();
            }
            if (this.tooltipEle) {
                remove(this.tooltipEle);
            }
            this.tooltipEle = null;
            this.popupObj = null;
        }
    };
    Tooltip.prototype.onMouseOut = function (e) {
        this.hideTooltip(this.animation.close, e);
    };
    Tooltip.prototype.onStickyClose = function (e) {
        this.close();
    };
    Tooltip.prototype.onMouseMove = function (event) {
        var eventPageX = 0;
        var eventPageY = 0;
        if (event.type.indexOf('touch') > -1) {
            event.preventDefault();
            eventPageX = event.touches[0].pageX;
            eventPageY = event.touches[0].pageY;
        }
        else {
            eventPageX = event.pageX;
            eventPageY = event.pageY;
        }
        PopupAnimation.stop(this.tooltipEle);
        removeClass([this.tooltipEle], POPUP_CLOSE);
        addClass([this.tooltipEle], POPUP_OPEN);
        this.adjustArrow(event.target, this.position, this.tooltipPositionX, this.tooltipPositionY);
        var pos = this.calculateTooltipOffset(this.position);
        var x = eventPageX + pos.left + this.offsetX;
        var y = eventPageY + pos.top + this.offsetY;
        var elePos = this.checkCollision(event.target, x, y);
        if (this.tooltipPositionX !== elePos.horizontal || this.tooltipPositionY !== elePos.vertical) {
            var newpos = (this.position.indexOf('bottom') === 0 || this.position.indexOf('top') === 0) ?
                elePos.vertical + ' ' + elePos.horizontal : elePos.horizontal + ' ' + elePos.vertical;
            elePos.position = newpos;
            this.adjustArrow(event.target, elePos.position, elePos.horizontal, elePos.vertical);
            var colpos = this.calculateTooltipOffset(elePos.position);
            elePos.left = eventPageX + colpos.left + this.offsetX;
            elePos.top = eventPageY + colpos.top + this.offsetY;
        }
        this.tooltipEle.style.left = elePos.left + 'px';
        this.tooltipEle.style.top = elePos.top + 'px';
    };
    Tooltip.prototype.keyDown = function (event) {
        if (this.tooltipEle && event.keyCode === 27) {
            this.close();
        }
    };
    Tooltip.prototype.touchEnd = function (e) {
        if (this.tooltipEle && closest(e.target, '.' + ROOT) === null) {
            this.close();
        }
    };
    Tooltip.prototype.scrollHandler = function (e) {
        if (this.tooltipEle) {
            this.close();
        }
    };
    Tooltip.prototype.render = function () {
        this.initialize();
        this.wireEvents(this.opensOn);
    };
    Tooltip.prototype.preRender = function () {
        this.tipClass = TIP_BOTTOM;
        this.tooltipPositionX = 'center';
        this.tooltipPositionY = 'top';
        this.isHidden = true;
    };
    Tooltip.prototype.wireEvents = function (trigger) {
        var triggerList = this.getTriggerList(trigger);
        for (var _i = 0, triggerList_1 = triggerList; _i < triggerList_1.length; _i++) {
            var opensOn = triggerList_1[_i];
            if (opensOn === 'custom') {
                return;
            }
            if (opensOn === 'focus') {
                this.wireFocusEvents();
            }
            if (opensOn === 'click') {
                EventHandler.add(this.element, Browser.touchStartEvent, this.targetClick, this);
            }
            if (opensOn === 'hover') {
                if (Browser.isDevice) {
                    this.touchModule = new Touch(this.element, {
                        tapHoldThreshold: TAPHOLD_THRESHOLD,
                        tapHold: this.tapHoldHandler.bind(this)
                    });
                    EventHandler.add(this.element, Browser.touchEndEvent, this.touchEndHandler, this);
                }
                else {
                    EventHandler.add(this.element, 'mouseover', this.targetHover, this);
                }
            }
        }
        EventHandler.add(document, 'touchend', this.touchEnd, this);
        EventHandler.add(document, 'scroll', this.scrollHandler, this);
        EventHandler.add(document, 'keydown', this.keyDown, this);
    };
    Tooltip.prototype.getTriggerList = function (trigger) {
        if (trigger === 'auto') {
            trigger = (Browser.isDevice) ? 'hover' : 'hover focus';
        }
        return trigger.split(' ');
    };
    Tooltip.prototype.wireFocusEvents = function () {
        if (!isNullOrUndefined(this.target)) {
            var targetList = [].slice.call(this.element.querySelectorAll(this.target));
            for (var _i = 0, targetList_2 = targetList; _i < targetList_2.length; _i++) {
                var target = targetList_2[_i];
                EventHandler.add(target, 'focus', this.targetHover, this);
            }
        }
        else {
            EventHandler.add(this.element, 'focus', this.targetHover, this);
        }
    };
    Tooltip.prototype.wireMouseEvents = function (e, target) {
        if (!this.isSticky) {
            if (e.type === 'focus') {
                EventHandler.add(target, 'blur', this.onMouseOut, this);
            }
            if (e.type === 'mouseover') {
                EventHandler.add(target, 'mouseleave', this.onMouseOut, this);
            }
        }
        if (this.mouseTrail) {
            EventHandler.add(target, 'mousemove touchstart', this.onMouseMove, this);
        }
    };
    Tooltip.prototype.unwireEvents = function (trigger) {
        var triggerList = this.getTriggerList(trigger);
        for (var _i = 0, triggerList_2 = triggerList; _i < triggerList_2.length; _i++) {
            var opensOn = triggerList_2[_i];
            if (opensOn === 'custom') {
                return;
            }
            if (opensOn === 'focus') {
                this.unwireFocusEvents();
            }
            if (opensOn === 'click') {
                EventHandler.remove(this.element, Browser.touchStartEvent, this.targetClick);
            }
            if (opensOn === 'hover') {
                if (Browser.isDevice) {
                    if (this.touchModule) {
                        this.touchModule.destroy();
                    }
                    EventHandler.remove(this.element, Browser.touchEndEvent, this.touchEndHandler);
                }
                else {
                    EventHandler.remove(this.element, 'mouseover', this.targetHover);
                }
            }
        }
        EventHandler.remove(document, 'touchend', this.touchEnd);
        EventHandler.remove(document, 'scroll', this.scrollHandler);
        EventHandler.remove(document, 'keydown', this.keyDown);
    };
    Tooltip.prototype.unwireFocusEvents = function () {
        if (!isNullOrUndefined(this.target)) {
            var targetList = [].slice.call(this.element.querySelectorAll(this.target));
            for (var _i = 0, targetList_3 = targetList; _i < targetList_3.length; _i++) {
                var target = targetList_3[_i];
                EventHandler.remove(target, 'focus', this.targetHover);
            }
        }
        else {
            EventHandler.remove(this.element, 'focus', this.targetHover);
        }
    };
    Tooltip.prototype.unwireMouseEvents = function (target) {
        if (!this.isSticky) {
            var triggerList = this.getTriggerList(this.opensOn);
            for (var _i = 0, triggerList_3 = triggerList; _i < triggerList_3.length; _i++) {
                var opensOn = triggerList_3[_i];
                if (opensOn === 'focus') {
                    EventHandler.remove(target, 'blur', this.onMouseOut);
                }
                if (opensOn === 'hover' && !Browser.isDevice) {
                    EventHandler.remove(target, 'mouseleave', this.onMouseOut);
                }
            }
        }
        if (this.mouseTrail) {
            EventHandler.remove(target, 'mousemove touchstart', this.onMouseMove);
        }
    };
    Tooltip.prototype.getModuleName = function () {
        return 'tooltip';
    };
    Tooltip.prototype.getPersistData = function () {
        return this.addOnPersist([]);
    };
    Tooltip.prototype.onPropertyChanged = function (newProp, oldProp) {
        for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
            var prop = _a[_i];
            switch (prop) {
                case 'width':
                    if (this.tooltipEle) {
                        this.tooltipEle.style.width = formatUnit(newProp.width);
                    }
                    break;
                case 'height':
                    if (this.tooltipEle) {
                        this.tooltipEle.style.height = formatUnit(newProp.height);
                    }
                    break;
                case 'content':
                    if (this.tooltipEle) {
                        this.renderContent();
                    }
                    break;
                case 'opensOn':
                    this.unwireEvents(oldProp.opensOn);
                    this.wireEvents(newProp.opensOn);
                    break;
                case 'position':
                    this.formatPosition();
                    var target = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]');
                    if (this.tooltipEle && target) {
                        this.reposition(target);
                    }
                    break;
                case 'tipPointerPosition':
                    var trgt = document.querySelector('[data-tooltip-id= ' + this.ctrlId + '_content]');
                    if (this.tooltipEle && trgt) {
                        this.reposition(trgt);
                    }
                    break;
                case 'offsetX':
                    if (this.tooltipEle) {
                        var x = newProp.offsetX - oldProp.offsetX;
                        this.tooltipEle.style.left = (parseInt(this.tooltipEle.style.left, 10) + (x)).toString() + 'px';
                    }
                    break;
                case 'offsetY':
                    if (this.tooltipEle) {
                        var y = newProp.offsetY - oldProp.offsetY;
                        this.tooltipEle.style.top = (parseInt(this.tooltipEle.style.top, 10) + (y)).toString() + 'px';
                    }
                    break;
                case 'cssClass':
                    if (this.tooltipEle) {
                        if (oldProp.cssClass) {
                            removeClass([this.tooltipEle], oldProp.cssClass);
                        }
                        if (newProp.cssClass) {
                            addClass([this.tooltipEle], newProp.cssClass);
                        }
                    }
                    break;
                case 'enableRtl':
                    if (this.tooltipEle) {
                        if (this.enableRtl) {
                            addClass([this.tooltipEle], RTL);
                        }
                        else {
                            removeClass([this.tooltipEle], RTL);
                        }
                    }
                    break;
            }
        }
    };
    Tooltip.prototype.open = function (element, animation) {
        if (animation === void 0) { animation = this.animation.open; }
        if (element.style.display === 'none') {
            return;
        }
        this.showTooltip(element, animation);
    };
    Tooltip.prototype.close = function (animation) {
        if (animation === void 0) { animation = this.animation.close; }
        this.hideTooltip(animation);
    };
    Tooltip.prototype.refresh = function (target) {
        if (this.tooltipEle) {
            this.renderContent(target);
        }
        if (this.popupObj && target) {
            this.reposition(target);
        }
    };
    Tooltip.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        removeClass([this.element], ROOT);
        this.unwireEvents(this.opensOn);
        if (this.popupObj) {
            this.popupObj.destroy();
        }
        if (this.tooltipEle) {
            remove(this.tooltipEle);
        }
        this.tooltipEle = null;
        this.popupObj = null;
    };
    return Tooltip;
}(Component));
__decorate([
    Property('auto')
], Tooltip.prototype, "width", void 0);
__decorate([
    Property('auto')
], Tooltip.prototype, "height", void 0);
__decorate([
    Property()
], Tooltip.prototype, "content", void 0);
__decorate([
    Property()
], Tooltip.prototype, "target", void 0);
__decorate([
    Property('top center')
], Tooltip.prototype, "position", void 0);
__decorate([
    Property(0)
], Tooltip.prototype, "offsetX", void 0);
__decorate([
    Property(0)
], Tooltip.prototype, "offsetY", void 0);
__decorate([
    Property(true)
], Tooltip.prototype, "showTipPointer", void 0);
__decorate([
    Property('auto')
], Tooltip.prototype, "tipPointerPosition", void 0);
__decorate([
    Property('auto')
], Tooltip.prototype, "opensOn", void 0);
__decorate([
    Property(false)
], Tooltip.prototype, "mouseTrail", void 0);
__decorate([
    Property(false)
], Tooltip.prototype, "isSticky", void 0);
__decorate([
    Complex({}, Animation)
], Tooltip.prototype, "animation", void 0);
__decorate([
    Property(0)
], Tooltip.prototype, "openDelay", void 0);
__decorate([
    Property(0)
], Tooltip.prototype, "closeDelay", void 0);
__decorate([
    Property()
], Tooltip.prototype, "cssClass", void 0);
__decorate([
    Property(false)
], Tooltip.prototype, "enableRtl", void 0);
__decorate([
    Event()
], Tooltip.prototype, "beforeRender", void 0);
__decorate([
    Event()
], Tooltip.prototype, "beforeOpen", void 0);
__decorate([
    Event()
], Tooltip.prototype, "afterOpen", void 0);
__decorate([
    Event()
], Tooltip.prototype, "beforeClose", void 0);
__decorate([
    Event()
], Tooltip.prototype, "afterClose", void 0);
__decorate([
    Event()
], Tooltip.prototype, "created", void 0);
__decorate([
    Event()
], Tooltip.prototype, "destroyed", void 0);
Tooltip = __decorate([
    NotifyPropertyChanges
], Tooltip);
export { Tooltip };
export var tooltipBuilder = CreateBuilder(Tooltip);
