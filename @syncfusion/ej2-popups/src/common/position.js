define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var elementRect;
    var element;
    var parentDocument;
    function calculateRelativeBasedPosition(anchor, element) {
        var anchorPos = { left: 0, top: 0 };
        var tempAnchor = anchor;
        if (!anchor || !element) {
            return anchorPos;
        }
        while (element.offsetParent && anchor && element.offsetParent !== anchor) {
            anchorPos.left += anchor.offsetLeft;
            anchorPos.top += anchor.offsetTop;
            anchor = anchor.offsetParent;
        }
        anchor = tempAnchor;
        while (element.offsetParent && anchor && element.offsetParent !== anchor) {
            anchorPos.left -= anchor.scrollLeft;
            anchorPos.top -= anchor.scrollTop;
            anchor = anchor.parentElement;
        }
        return anchorPos;
    }
    exports.calculateRelativeBasedPosition = calculateRelativeBasedPosition;
    function calculatePosition(currentElement, positionX, positionY) {
        if (!currentElement) {
            return { left: 0, top: 0 };
        }
        if (!positionX) {
            positionX = 'left';
        }
        if (!positionY) {
            positionY = 'top';
        }
        parentDocument = currentElement.ownerDocument;
        element = currentElement;
        var pos = { left: 0, top: 0 };
        return updatePosition(positionX.toLowerCase(), positionY.toLowerCase(), pos);
    }
    exports.calculatePosition = calculatePosition;
    function setPosx(value, pos) {
        pos.left = value;
    }
    function setPosy(value, pos) {
        pos.top = value;
    }
    function updatePosition(posX, posY, pos) {
        elementRect = element.getBoundingClientRect();
        switch (posY + posX) {
            case 'topcenter':
                setPosx(getElementHCenter(), pos);
                setPosy(getElementTop(), pos);
                break;
            case 'topright':
                setPosx(getElementRight(), pos);
                setPosy(getElementTop(), pos);
                break;
            case 'centercenter':
                setPosx(getElementHCenter(), pos);
                setPosy(getElementVCenter(), pos);
                break;
            case 'centerright':
                setPosx(getElementRight(), pos);
                setPosy(getElementVCenter(), pos);
                break;
            case 'centerleft':
                setPosx(getElementLeft(), pos);
                setPosy(getElementVCenter(), pos);
                break;
            case 'bottomcenter':
                setPosx(getElementHCenter(), pos);
                setPosy(getElementBottom(), pos);
                break;
            case 'bottomright':
                setPosx(getElementRight(), pos);
                setPosy(getElementBottom(), pos);
                break;
            case 'bottomleft':
                setPosx(getElementLeft(), pos);
                setPosy(getElementBottom(), pos);
                break;
            default:
            case 'topleft':
                setPosx(getElementLeft(), pos);
                setPosy(getElementTop(), pos);
                break;
        }
        return pos;
    }
    function getBodyScrollTop() {
        return parentDocument.documentElement.scrollTop || parentDocument.body.scrollTop;
    }
    function getBodyScrollLeft() {
        return parentDocument.documentElement.scrollLeft || parentDocument.body.scrollLeft;
    }
    function getElementBottom() {
        return elementRect.bottom + getBodyScrollTop();
    }
    function getElementVCenter() {
        return getElementTop() + (elementRect.height / 2);
    }
    function getElementTop() {
        return elementRect.top + getBodyScrollTop();
    }
    function getElementLeft() {
        return elementRect.left + getBodyScrollLeft();
    }
    function getElementRight() {
        return elementRect.right + getBodyScrollLeft();
    }
    function getElementHCenter() {
        return getElementLeft() + (elementRect.width / 2);
    }
});
