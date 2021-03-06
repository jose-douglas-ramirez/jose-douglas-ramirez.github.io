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
import { Base } from './base';
import { Browser } from './browser';
import { isVisible } from './dom';
import { Property, Complex, NotifyPropertyChanges, Event } from './notify-property-change';
import { EventHandler } from './event-handler';
import { ChildProperty } from './child-property';
import { select, closest, setStyleAttribute, addClass, createElement } from './dom';
import { extend, isUndefined, isNullOrUndefined, compareElementParent } from './util';
var defaultPosition = { left: 0, top: 0, bottom: 0, right: 0 };
var positionProp = ['offsetLeft', 'offsetTop'];
var axisMapper = ['x', 'y'];
var axisValueMapper = ['left', 'top'];
var Position = (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Position;
}(ChildProperty));
export { Position };
__decorate([
    Property(0)
], Position.prototype, "left", void 0);
__decorate([
    Property(0)
], Position.prototype, "top", void 0);
var Draggable = Draggable_1 = (function (_super) {
    __extends(Draggable, _super);
    function Draggable(element, options) {
        var _this = _super.call(this, options, element) || this;
        _this.dragLimit = Draggable_1.getDefaultPosition();
        _this.borderWidth = Draggable_1.getDefaultPosition();
        _this.padding = Draggable_1.getDefaultPosition();
        _this.diffX = 0;
        _this.diffY = 0;
        _this.droppables = {};
        _this.bind();
        return _this;
    }
    Draggable.prototype.bind = function () {
        this.toggleEvents();
        if (Browser.isIE) {
            addClass([this.element], 'e-block-touch');
        }
        this.droppables[this.scope] = {};
    };
    Draggable.getDefaultPosition = function () {
        return extend({}, defaultPosition);
    };
    Draggable.prototype.toggleEvents = function (isUnWire) {
        var ele;
        if (!isUndefined(this.handle)) {
            ele = select(this.handle, this.element);
        }
        if (isUnWire) {
            EventHandler.remove(ele || this.element, Browser.touchStartEvent, this.initialize);
        }
        else {
            EventHandler.add(ele || this.element, Browser.touchStartEvent, this.initialize, this);
        }
    };
    Draggable.prototype.initialize = function (evt) {
        this.target = evt.currentTarget;
        if (this.preventDefault && !isUndefined(evt.changedTouches)) {
            evt.preventDefault();
        }
        if (this.abort) {
            if (!isNullOrUndefined(closest(evt.target, this.abort))) {
                return;
            }
        }
        this.element.setAttribute('aria-grabbed', 'true');
        var intCoord = this.getCoordinates(evt);
        this.initialPosition = { x: intCoord.pageX, y: intCoord.pageY };
        if (!this.clone) {
            var pos = this.element.getBoundingClientRect();
            this.relativeXPosition = intCoord.pageX - pos.left;
            this.relativeYPosition = intCoord.pageY - pos.top;
        }
        EventHandler.add(document, Browser.touchMoveEvent, this.intDragStart, this);
        EventHandler.add(document, Browser.touchEndEvent, this.intDestroy, this);
        this.toggleEvents(true);
        document.body.classList.add('e-prevent-select');
        EventHandler.trigger(document.documentElement, Browser.touchStartEvent, evt);
    };
    Draggable.prototype.intDragStart = function (evt) {
        var isChangeTouch = !isUndefined(evt.changedTouches);
        if (isChangeTouch && (evt.changedTouches.length !== 1)) {
            return;
        }
        var intCordinate = this.getCoordinates(evt);
        var pos;
        var styleProp = getComputedStyle(this.element);
        this.margin = {
            left: parseInt(styleProp.marginLeft, 10),
            top: parseInt(styleProp.marginTop, 10),
            right: parseInt(styleProp.marginRight, 10),
            bottom: parseInt(styleProp.marginBottom, 10),
        };
        var element = this.element;
        if (this.clone && this.dragTarget) {
            var intClosest = closest(evt.target, this.dragTarget);
            if (!isNullOrUndefined(intClosest)) {
                element = intClosest;
            }
        }
        this.offset = this.calculateParentPosition(element);
        this.position = this.getMousePosition(evt);
        var x = this.initialPosition.x - intCordinate.pageX;
        var y = this.initialPosition.y - intCordinate.pageY;
        var distance = Math.sqrt((x * x) + (y * y));
        if (distance >= this.distance) {
            var ele = this.getHelperElement(evt);
            if (!ele || isNullOrUndefined(ele)) {
                return;
            }
            var dragTargetElement = this.helperElement = ele;
            this.parentClientRect = this.calculateParentPosition(dragTargetElement.offsetParent);
            if (this.dragStart) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStart', { event: evt, element: element, target: curTarget });
            }
            if (this.dragArea) {
                this.setDragArea();
            }
            else {
                this.dragLimit = { left: 0, right: 0, bottom: 0, top: 0 };
                this.borderWidth = { top: 0, left: 0 };
            }
            pos = { left: this.position.left - this.parentClientRect.left, top: this.position.top - this.parentClientRect.top };
            if (this.clone && !this.enableTailMode) {
                this.diffX = this.position.left - this.offset.left;
                this.diffY = this.position.top - this.offset.top;
            }
            var posValue = this.getProcessedPositionValue({ top: (pos.top - this.diffY) + 'px',
                left: (pos.left - this.diffX) + 'px' });
            setStyleAttribute(dragTargetElement, {
                position: 'absolute', top: posValue.top, left: posValue.left
            });
            EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart);
            EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy);
            if (isVisible(dragTargetElement)) {
                EventHandler.add(document, Browser.touchMoveEvent, this.intDrag, this);
                EventHandler.add(document, Browser.touchEndEvent, this.intDragStop, this);
                this.setGlobalDroppables(false, this.element, dragTargetElement);
            }
            else {
                document.body.classList.remove('e-prevent-select');
            }
        }
    };
    Draggable.prototype.getProcessedPositionValue = function (value) {
        if (this.axis) {
            if (this.axis === 'x') {
                value.top = '0px';
            }
            else if (this.axis === 'y') {
                value.left = '0px';
            }
        }
        if (this.queryPositionInfo) {
            return this.queryPositionInfo(value);
        }
        return value;
    };
    Draggable.prototype.calculateParentPosition = function (ele) {
        if (isNullOrUndefined(ele)) {
            return { left: 0, top: 0 };
        }
        var rect = ele.getBoundingClientRect();
        var style = getComputedStyle(ele);
        return {
            left: (rect.left + window.pageXOffset) - parseInt(style.marginLeft, 10),
            top: (rect.top + window.pageYOffset) - parseInt(style.marginTop, 10)
        };
    };
    Draggable.prototype.intDrag = function (evt) {
        if (!isUndefined(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var left;
        var top;
        this.position = this.getMousePosition(evt);
        var docHeight = this.getDocumentWidthHeight('Height');
        if (docHeight < this.position.top) {
            this.position.top = docHeight;
        }
        var docWidth = this.getDocumentWidthHeight('Width');
        if (docWidth < this.position.left) {
            this.position.left = docWidth;
        }
        if (this.drag) {
            var curTarget = this.getProperTargetElement(evt);
            this.trigger('drag', { event: evt, element: this.element, target: curTarget });
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.intOver(evt, eleObj.target);
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            this.hoverObject = eleObj;
        }
        else if (this.hoverObject) {
            this.hoverObject.instance.intOut(evt, eleObj.target);
            this.hoverObject.instance.dragData[this.scope] = null;
            this.hoverObject = null;
        }
        var helperElement = this.droppables[this.scope].helper;
        this.parentClientRect = this.calculateParentPosition(this.helperElement.offsetParent);
        var tLeft = this.parentClientRect.left;
        var tTop = this.parentClientRect.top;
        var intCoord = this.getCoordinates(evt);
        var pagex = intCoord.pageX;
        var pagey = intCoord.pageY;
        var dLeft = this.position.left - this.diffX;
        var dTop = this.position.top - this.diffY;
        if (this.dragArea) {
            var styles = getComputedStyle(helperElement);
            if (this.pageX !== pagex || this.skipDistanceCheck) {
                var helperWidth = helperElement.offsetWidth + (parseFloat(styles.marginLeft)
                    + parseFloat(styles.marginRight));
                if (this.dragLimit.left > dLeft) {
                    left = this.dragLimit.left;
                }
                else if (this.dragLimit.right < dLeft + helperWidth) {
                    left = this.dragLimit.right - helperWidth;
                }
                else {
                    left = dLeft;
                }
            }
            if (this.pageY !== pagey || this.skipDistanceCheck) {
                var helperHeight = helperElement.offsetHeight + (parseFloat(styles.marginTop)
                    + parseFloat(styles.marginBottom));
                if (this.dragLimit.top > dTop) {
                    top = this.dragLimit.top;
                }
                else if (this.dragLimit.bottom < dTop + helperHeight) {
                    top = this.dragLimit.bottom - helperHeight;
                }
                else {
                    top = dTop;
                }
            }
        }
        else {
            left = dLeft;
            top = dTop;
        }
        var iTop = tTop + this.borderWidth.top;
        var iLeft = tLeft + this.borderWidth.left;
        var dragValue = this.getProcessedPositionValue({ top: (top - iTop) + 'px', left: (left - iLeft) + 'px' });
        setStyleAttribute(helperElement, { left: dragValue.left, top: dragValue.top });
        this.position.left = left;
        this.position.top = top;
        this.pageX = pagex;
        this.pageY = pagey;
    };
    Draggable.prototype.getDocumentWidthHeight = function (str) {
        var docBody = document.body;
        var docEle = document.documentElement;
        var returnValue = Math.max(docBody['scroll' + str], docEle['scroll' + str], docBody['offset' + str], docEle['offset' + str], docEle['client' + str]);
        return returnValue;
    };
    Draggable.prototype.intDragStop = function (evt) {
        if (!isUndefined(evt.changedTouches) && (evt.changedTouches.length !== 1)) {
            return;
        }
        var type = ['touchend', 'pointerup', 'mouseup'];
        if (type.indexOf(evt.type) !== -1) {
            if (this.dragStop) {
                var curTarget = this.getProperTargetElement(evt);
                this.trigger('dragStop', { event: evt, element: this.element, target: curTarget, helper: this.helperElement });
            }
            this.intDestroy(evt);
        }
        else {
            this.element.setAttribute('aria-grabbed', 'false');
        }
        var eleObj = this.checkTargetElement(evt);
        if (eleObj.target && eleObj.instance) {
            eleObj.instance.dragStopCalled = true;
            eleObj.instance.dragData[this.scope] = this.droppables[this.scope];
            eleObj.instance.intDrop(evt, eleObj.target);
        }
        this.setGlobalDroppables(true);
        document.body.classList.remove('e-prevent-select');
    };
    Draggable.prototype.intDestroy = function (evt) {
        this.toggleEvents();
        document.body.classList.remove('e-prevent-select');
        this.element.setAttribute('aria-grabbed', 'false');
        EventHandler.remove(document, Browser.touchMoveEvent, this.intDragStart);
        EventHandler.remove(document, Browser.touchEndEvent, this.intDragStop);
        EventHandler.remove(document, Browser.touchEndEvent, this.intDestroy);
        EventHandler.remove(document, Browser.touchMoveEvent, this.intDrag);
    };
    Draggable.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Draggable.prototype.getModuleName = function () {
        return 'draggable';
    };
    Draggable.prototype.setDragArea = function () {
        var eleWidthBound;
        var eleHeightBound;
        var top = 0;
        var left = 0;
        var ele;
        var type = typeof this.dragArea;
        if (type === 'string') {
            ele = select(this.dragArea);
        }
        else {
            ele = this.dragArea;
        }
        if (ele) {
            var elementArea = ele.getBoundingClientRect();
            eleWidthBound = elementArea.width ? elementArea.width : elementArea.right - elementArea.left;
            eleHeightBound = elementArea.height ? elementArea.height : elementArea.bottom - elementArea.top;
            var keys = ['Top', 'Left', 'Bottom', 'Right'];
            var styles = getComputedStyle(ele);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var tborder = styles['border' + key + 'Width'];
                var tpadding = styles['padding' + key];
                var lowerKey = key.toLowerCase();
                this.borderWidth[lowerKey] = isNaN(parseFloat(tborder)) ? 0 : parseFloat(tborder);
                this.padding[lowerKey] = isNaN(parseFloat(tpadding)) ? 0 : parseFloat(tpadding);
            }
            top = elementArea.top;
            left = elementArea.left;
            this.dragLimit.left = left + this.borderWidth.left + this.padding.left;
            this.dragLimit.top = top + this.borderWidth.top + this.padding.top;
            this.dragLimit.right = left + eleWidthBound - (this.borderWidth.right + this.padding.right);
            this.dragLimit.bottom = top + eleHeightBound - (this.borderWidth.bottom + this.padding.bottom);
        }
    };
    Draggable.prototype.getProperTargetElement = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var ele;
        var prevStyle = this.helperElement.style.display || '';
        if (compareElementParent(evt.target, this.helperElement) || evt.type.indexOf('touch') !== -1) {
            this.helperElement.style.display = 'none';
            ele = document.elementFromPoint(intCoord.clientX, intCoord.clientY);
            this.helperElement.style.display = prevStyle;
        }
        else {
            ele = evt.target;
        }
        return ele;
    };
    Draggable.prototype.getMousePosition = function (evt) {
        var intCoord = this.getCoordinates(evt);
        var pageX = this.clone ? intCoord.pageX : intCoord.pageX - this.relativeXPosition;
        var pageY = this.clone ? intCoord.pageY : intCoord.pageY - this.relativeYPosition;
        return {
            left: pageX - (this.margin.left + this.cursorAt.left),
            top: pageY - (this.margin.top + this.cursorAt.top)
        };
    };
    Draggable.prototype.getCoordinates = function (evt) {
        if (evt.type.indexOf('touch') > -1) {
            return evt.changedTouches[0];
        }
        return evt;
    };
    Draggable.prototype.getHelperElement = function (evt) {
        var element;
        if (this.clone) {
            if (this.helper) {
                element = this.helper({ sender: evt, element: this.target });
            }
            else {
                element = createElement('div', { className: 'e-drag-helper e-block-touch', innerHTML: 'Draggable' });
                document.body.appendChild(element);
            }
        }
        else {
            element = this.element;
        }
        return element;
    };
    Draggable.prototype.setGlobalDroppables = function (reset, drag, helper) {
        this.droppables[this.scope] = reset ? null : {
            draggable: drag,
            helper: helper,
            draggedElement: this.element
        };
    };
    Draggable.prototype.checkTargetElement = function (evt) {
        var target = this.getProperTargetElement(evt);
        var dropIns = this.getDropInstance(target);
        if (!dropIns && target && !isNullOrUndefined(target.parentNode)) {
            var parent_1 = closest(target.parentNode, '.e-droppable') || target.parentElement;
            if (parent_1) {
                dropIns = this.getDropInstance(parent_1);
            }
        }
        return { target: target, instance: dropIns };
    };
    Draggable.prototype.getDropInstance = function (ele) {
        var name = 'getModuleName';
        var drop;
        var eleInst = ele && ele.ej2_instances;
        if (eleInst) {
            for (var _i = 0, eleInst_1 = eleInst; _i < eleInst_1.length; _i++) {
                var inst = eleInst_1[_i];
                if (inst[name]() === 'droppable') {
                    drop = inst;
                    break;
                }
            }
        }
        return drop;
    };
    Draggable.prototype.destroy = function () {
        this.toggleEvents(true);
        _super.prototype.destroy.call(this);
    };
    return Draggable;
}(Base));
__decorate([
    Complex({}, Position)
], Draggable.prototype, "cursorAt", void 0);
__decorate([
    Property(true)
], Draggable.prototype, "clone", void 0);
__decorate([
    Property()
], Draggable.prototype, "dragArea", void 0);
__decorate([
    Event()
], Draggable.prototype, "drag", void 0);
__decorate([
    Event()
], Draggable.prototype, "dragStart", void 0);
__decorate([
    Event()
], Draggable.prototype, "dragStop", void 0);
__decorate([
    Property(1)
], Draggable.prototype, "distance", void 0);
__decorate([
    Property()
], Draggable.prototype, "handle", void 0);
__decorate([
    Property()
], Draggable.prototype, "abort", void 0);
__decorate([
    Property()
], Draggable.prototype, "helper", void 0);
__decorate([
    Property('default')
], Draggable.prototype, "scope", void 0);
__decorate([
    Property('')
], Draggable.prototype, "dragTarget", void 0);
__decorate([
    Property()
], Draggable.prototype, "axis", void 0);
__decorate([
    Property()
], Draggable.prototype, "queryPositionInfo", void 0);
__decorate([
    Property(false)
], Draggable.prototype, "enableTailMode", void 0);
__decorate([
    Property(false)
], Draggable.prototype, "skipDistanceCheck", void 0);
__decorate([
    Property(true)
], Draggable.prototype, "preventDefault", void 0);
Draggable = Draggable_1 = __decorate([
    NotifyPropertyChanges
], Draggable);
export { Draggable };
var Draggable_1;
