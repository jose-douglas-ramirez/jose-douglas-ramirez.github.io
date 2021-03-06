define(["require", "exports", "./position"], function (require, exports, position_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var parentDocument;
    var targetContainer;
    function fit(element, viewPortElement, axis, position) {
        if (viewPortElement === void 0) { viewPortElement = null; }
        if (axis === void 0) { axis = { X: false, Y: false }; }
        if (!axis.Y && !axis.X) {
            return { left: 0, top: 0 };
        }
        var elemData = element.getBoundingClientRect();
        targetContainer = viewPortElement;
        parentDocument = element.ownerDocument;
        if (!position) {
            position = position_1.calculatePosition(element, 'left', 'top');
        }
        if (axis.X) {
            var containerWidth = targetContainer ? getTargetContainerWidth() : getViewPortWidth();
            var containerLeft = ContainerLeft();
            var containerRight = ContainerRight();
            var overLeft = containerLeft - position.left;
            var overRight = position.left + elemData.width - containerRight;
            if (elemData.width > containerWidth) {
                if (overLeft > 0 && overRight <= 0) {
                    position.left = containerRight - elemData.width;
                }
                else if (overRight > 0 && overLeft <= 0) {
                    position.left = containerLeft;
                }
                else {
                    position.left = overLeft > overRight ? (containerRight - elemData.width) : containerLeft;
                }
            }
            else if (overLeft > 0) {
                position.left += overLeft;
            }
            else if (overRight > 0) {
                position.left -= overRight;
            }
        }
        if (axis.Y) {
            var containerHeight = targetContainer ? getTargetContainerHeight() : getViewPortHeight();
            var containerTop = ContainerTop();
            var containerBottom = ContainerBottom();
            var overTop = containerTop - position.top;
            var overBottom = position.top + elemData.height - containerBottom;
            if (elemData.height > containerHeight) {
                if (overTop > 0 && overBottom <= 0) {
                    position.top = containerBottom - elemData.height;
                }
                else if (overBottom > 0 && overTop <= 0) {
                    position.top = containerTop;
                }
                else {
                    position.top = overTop > overBottom ? (containerBottom - elemData.height) : containerTop;
                }
            }
            else if (overTop > 0) {
                position.top += overTop;
            }
            else if (overBottom > 0) {
                position.top -= overBottom;
            }
        }
        return position;
    }
    exports.fit = fit;
    function isCollide(element, viewPortElement, x, y) {
        if (viewPortElement === void 0) { viewPortElement = null; }
        var elemOffset = position_1.calculatePosition(element, 'left', 'top');
        if (x) {
            elemOffset.left = x;
        }
        if (y) {
            elemOffset.top = y;
        }
        var data = [];
        targetContainer = viewPortElement;
        parentDocument = element.ownerDocument;
        var elementRect = element.getBoundingClientRect();
        var top = elemOffset.top;
        var left = elemOffset.left;
        var right = elemOffset.left + elementRect.width;
        var bottom = elemOffset.top + elementRect.height;
        var topData = '';
        var leftData = '';
        var yAxis = topCollideCheck(top, bottom);
        var xAxis = leftCollideCheck(left, right);
        if (yAxis.topSide) {
            data.push('top');
        }
        if (xAxis.rightSide) {
            data.push('right');
        }
        if (xAxis.leftSide) {
            data.push('left');
        }
        if (yAxis.bottomSide) {
            data.push('bottom');
        }
        return data;
    }
    exports.isCollide = isCollide;
    function flip(element, target, offsetX, offsetY, positionX, positionY, viewPortElement, axis) {
        if (viewPortElement === void 0) { viewPortElement = null; }
        if (axis === void 0) { axis = { X: true, Y: true }; }
        if (!target || !element || !positionX || !positionY || (!axis.X && !axis.Y)) {
            return;
        }
        var tEdge = { TL: null,
            TR: null,
            BL: null,
            BR: null };
        var eEdge = {
            TL: null,
            TR: null,
            BL: null,
            BR: null
        };
        var elementRect = element.getBoundingClientRect();
        var pos = {
            posX: positionX, posY: positionY, offsetX: offsetX, offsetY: offsetY, position: { left: 0, top: 0 }
        };
        targetContainer = viewPortElement;
        parentDocument = target.ownerDocument;
        updateElementData(target, tEdge, pos);
        setPosition(eEdge, pos, elementRect);
        if (axis.X) {
            leftFlip(target, eEdge, tEdge, pos, elementRect, true);
        }
        if (axis.Y && tEdge.TL.top > -1) {
            topFlip(target, eEdge, tEdge, pos, elementRect, true);
        }
        setPopup(element, pos);
    }
    exports.flip = flip;
    function setPopup(element, pos) {
        var left = 0;
        var top = 0;
        if (element.offsetParent != null
            && (getComputedStyle(element.offsetParent).position === 'absolute' ||
                getComputedStyle(element.offsetParent).position === 'relative')) {
            var data = position_1.calculatePosition(element.offsetParent, 'left', 'top');
            left = data.left;
            top = data.top;
        }
        element.style.top = (pos.position.top + pos.offsetY - (top)) + 'px';
        element.style.left = (pos.position.left + pos.offsetX - (left)) + 'px';
    }
    function updateElementData(target, edge, pos) {
        pos.position = position_1.calculatePosition(target, pos.posX, pos.posY);
        edge.TL = position_1.calculatePosition(target, 'left', 'top');
        edge.TR = position_1.calculatePosition(target, 'right', 'top');
        edge.BR = position_1.calculatePosition(target, 'left', 'bottom');
        edge.BL = position_1.calculatePosition(target, 'right', 'bottom');
    }
    function setPosition(eStatus, pos, elementRect) {
        eStatus.TL = { top: pos.position.top + pos.offsetY, left: pos.position.left + pos.offsetX };
        eStatus.TR = { top: eStatus.TL.top, left: eStatus.TL.left + elementRect.width };
        eStatus.BL = { top: eStatus.TL.top + elementRect.height,
            left: eStatus.TL.left };
        eStatus.BR = { top: eStatus.TL.top + elementRect.height,
            left: eStatus.TL.left + elementRect.width };
    }
    function leftCollideCheck(left, right) {
        var leftSide = false;
        var rightSide = false;
        if (((left - getBodyScrollLeft()) < ContainerLeft())) {
            leftSide = true;
        }
        if (right > ContainerRight()) {
            rightSide = true;
        }
        return { leftSide: leftSide, rightSide: rightSide };
    }
    function leftFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
        var collideSide = leftCollideCheck(edge.TL.left, edge.TR.left);
        if ((tEdge.TL.left - getBodyScrollLeft()) <= ContainerLeft()) {
            collideSide.leftSide = false;
        }
        if (tEdge.TR.left >= ContainerRight()) {
            collideSide.rightSide = false;
        }
        if ((collideSide.leftSide && !collideSide.rightSide) || (!collideSide.leftSide && collideSide.rightSide)) {
            if (pos.posX === 'right') {
                pos.posX = 'left';
            }
            else {
                pos.posX = 'right';
            }
            pos.offsetX = pos.offsetX + elementRect.width;
            pos.offsetX = -1 * pos.offsetX;
            pos.position = position_1.calculatePosition(target, pos.posX, pos.posY);
            setPosition(edge, pos, elementRect);
            if (deepCheck) {
                leftFlip(target, edge, tEdge, pos, elementRect, false);
            }
        }
    }
    function topFlip(target, edge, tEdge, pos, elementRect, deepCheck) {
        var collideSide = topCollideCheck(edge.TL.top, edge.BL.top);
        if ((tEdge.TL.top - getBodyScrollTop()) <= ContainerTop()) {
            collideSide.topSide = false;
        }
        if (tEdge.BL.top >= ContainerBottom()) {
            collideSide.bottomSide = false;
        }
        if ((collideSide.topSide && !collideSide.bottomSide) || (!collideSide.topSide && collideSide.bottomSide)) {
            if (pos.posY === 'top') {
                pos.posY = 'bottom';
            }
            else {
                pos.posY = 'top';
            }
            pos.offsetY = pos.offsetY + elementRect.height;
            pos.offsetY = -1 * pos.offsetY;
            pos.position = position_1.calculatePosition(target, pos.posX, pos.posY);
            setPosition(edge, pos, elementRect);
            if (deepCheck) {
                topFlip(target, edge, tEdge, pos, elementRect, false);
            }
        }
    }
    function topCollideCheck(top, bottom) {
        var topSide = false;
        var bottomSide = false;
        if ((top - getBodyScrollTop()) < ContainerTop()) {
            topSide = true;
        }
        if (bottom > ContainerBottom()) {
            bottomSide = true;
        }
        return { topSide: topSide, bottomSide: bottomSide };
    }
    function getTargetContainerWidth() {
        return targetContainer.getBoundingClientRect().width;
    }
    function getTargetContainerHeight() {
        return targetContainer.getBoundingClientRect().height;
    }
    function getTargetContainerLeft() {
        return targetContainer.getBoundingClientRect().left;
    }
    function getTargetContainerTop() {
        return targetContainer.getBoundingClientRect().top;
    }
    function ContainerTop() {
        if (targetContainer) {
            return getTargetContainerTop();
        }
        return 0;
    }
    function ContainerLeft() {
        if (targetContainer) {
            return getTargetContainerLeft();
        }
        return 0;
    }
    function ContainerRight() {
        if (targetContainer) {
            return (getBodyScrollLeft() + getTargetContainerLeft() + getTargetContainerWidth());
        }
        return (getBodyScrollLeft() + getViewPortWidth());
    }
    function ContainerBottom() {
        if (targetContainer) {
            return (getBodyScrollTop() + getTargetContainerTop() + getTargetContainerHeight());
        }
        return (getBodyScrollTop() + getViewPortHeight());
    }
    function getBodyScrollTop() {
        return parentDocument.documentElement.scrollTop || parentDocument.body.scrollTop;
    }
    function getBodyScrollLeft() {
        return parentDocument.documentElement.scrollLeft || parentDocument.body.scrollLeft;
    }
    function getViewPortHeight() {
        return window.innerHeight;
    }
    function getViewPortWidth() {
        return window.innerWidth;
    }
});
