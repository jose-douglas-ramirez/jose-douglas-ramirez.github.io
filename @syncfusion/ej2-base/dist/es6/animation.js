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
import { createElement, selectAll, closest } from './dom';
import { Base } from './base';
import { Browser } from './browser';
import { EventHandler } from './event-handler';
import { Property, NotifyPropertyChanges, Event } from './notify-property-change';
var Animation = Animation_1 = (function (_super) {
    __extends(Animation, _super);
    function Animation(options) {
        var _this = _super.call(this, options, undefined) || this;
        _this.easing = {
            ease: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
            linear: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
            easeIn: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            easeOut: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
            easeInOut: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
            elasticInOut: 'cubic-bezier(0.5,-0.58,0.38,1.81)',
            elasticIn: 'cubic-bezier(0.17,0.67,0.59,1.81)',
            elasticOut: 'cubic-bezier(0.7,-0.75,0.99,1.01)'
        };
        return _this;
    }
    Animation.prototype.animate = function (element, options) {
        options = !options ? {} : options;
        var model = this.getModel(options);
        if (typeof element === 'string') {
            var elements = Array.prototype.slice.call(selectAll(element, document));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var element_1 = elements_1[_i];
                model.element = element_1;
                Animation_1.delayAnimation(model);
            }
        }
        else {
            model.element = element;
            Animation_1.delayAnimation(model);
        }
    };
    Animation.stop = function (element, model) {
        element.style.animation = '';
        element.removeAttribute('e-animate');
        var animationId = element.getAttribute('e-animation-id');
        if (animationId) {
            var frameId = parseInt(animationId, 10);
            cancelAnimationFrame(frameId);
            element.removeAttribute('e-animation-id');
        }
        if (model && model.end) {
            model.end.call(this, model);
        }
    };
    Animation.delayAnimation = function (model) {
        if (model.delay) {
            setTimeout(function () { Animation_1.applyAnimation(model); }, model.delay);
        }
        else {
            Animation_1.applyAnimation(model);
        }
    };
    Animation.applyAnimation = function (model) {
        var _this = this;
        model.timeStamp = 0;
        var step = 0;
        var timerId = 0;
        var startTime = 0;
        var prevTimeStamp = 0;
        var duration = model.duration;
        model.element.setAttribute('e-animate', 'true');
        var startAnimation = function (timeStamp) {
            try {
                if (timeStamp) {
                    prevTimeStamp = prevTimeStamp === 0 ? timeStamp : prevTimeStamp;
                    model.timeStamp = (timeStamp + model.timeStamp) - prevTimeStamp;
                    prevTimeStamp = timeStamp;
                    if (!step && model.begin) {
                        model.begin.call(_this, model);
                    }
                    step = step + 1;
                    var avg = model.timeStamp / step;
                    if (model.timeStamp < duration && model.timeStamp + avg < duration && model.element.getAttribute('e-animate')) {
                        model.element.style.animation = model.name + ' ' + model.duration + 'ms ' + model.timingFunction;
                        if (model.progress) {
                            model.progress.call(_this, model);
                        }
                        requestAnimationFrame(startAnimation);
                    }
                    else {
                        cancelAnimationFrame(timerId);
                        model.element.removeAttribute('e-animation-id');
                        model.element.removeAttribute('e-animate');
                        model.element.style.animation = '';
                        if (model.end) {
                            model.end.call(_this, model);
                        }
                    }
                }
                else {
                    startTime = performance.now();
                    timerId = requestAnimationFrame(startAnimation);
                    model.element.setAttribute('e-animation-id', timerId.toString());
                }
            }
            catch (e) {
                cancelAnimationFrame(timerId);
                model.element.removeAttribute('e-animation-id');
                if (model.fail) {
                    model.fail.call(_this, e);
                }
            }
        };
        startAnimation();
    };
    Animation.prototype.getModel = function (options) {
        return {
            name: options.name || this.name,
            delay: options.delay || this.delay,
            duration: (options.duration !== undefined ? options.duration : this.duration),
            begin: options.begin || this.begin,
            end: options.end || this.end,
            fail: options.fail || this.fail,
            progress: options.progress || this.progress,
            timingFunction: this.easing[options.timingFunction] ? this.easing[options.timingFunction] :
                (options.timingFunction || this.easing[this.timingFunction])
        };
    };
    Animation.prototype.onPropertyChanged = function (newProp, oldProp) {
    };
    Animation.prototype.getModuleName = function () {
        return 'animation';
    };
    Animation.prototype.destroy = function () {
    };
    return Animation;
}(Base));
__decorate([
    Property('FadeIn')
], Animation.prototype, "name", void 0);
__decorate([
    Property(400)
], Animation.prototype, "duration", void 0);
__decorate([
    Property('ease')
], Animation.prototype, "timingFunction", void 0);
__decorate([
    Property(0)
], Animation.prototype, "delay", void 0);
__decorate([
    Event()
], Animation.prototype, "progress", void 0);
__decorate([
    Event()
], Animation.prototype, "begin", void 0);
__decorate([
    Event()
], Animation.prototype, "end", void 0);
__decorate([
    Event()
], Animation.prototype, "fail", void 0);
Animation = Animation_1 = __decorate([
    NotifyPropertyChanges
], Animation);
export { Animation };
export function rippleEffect(element, rippleOptions, done) {
    var rippleModel = getRippleModel(rippleOptions);
    if (rippleModel.rippleFlag === false || (rippleModel.rippleFlag === undefined && !isRippleEnabled)) {
        return Function;
    }
    element.setAttribute('data-ripple', 'true');
    EventHandler.add(element, 'mousedown', rippleHandler, { parent: element, rippleOptions: rippleModel });
    EventHandler.add(element, 'mouseup', rippleUpHandler, { parent: element, rippleOptions: rippleModel, done: done });
    EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    if (Browser.isPointer) {
        EventHandler.add(element, 'transitionend', rippleLeaveHandler, { parent: element, rippleOptions: rippleModel });
    }
    return (function () {
        element.removeAttribute('data-ripple');
        EventHandler.remove(element, 'mousedown', rippleHandler);
        EventHandler.remove(element, 'mouseup', rippleUpHandler);
        EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
        EventHandler.remove(element, 'transitionend', rippleLeaveHandler);
    });
}
function getRippleModel(rippleOptions) {
    var rippleModel = {
        selector: rippleOptions && rippleOptions.selector ? rippleOptions.selector : null,
        ignore: rippleOptions && rippleOptions.ignore ? rippleOptions.ignore : null,
        rippleFlag: rippleOptions && rippleOptions.rippleFlag,
        isCenterRipple: rippleOptions && rippleOptions.isCenterRipple,
        duration: rippleOptions && rippleOptions.duration ? rippleOptions.duration : 350
    };
    return rippleModel;
}
function rippleHandler(e) {
    var target = (e.target);
    var selector = this.rippleOptions.selector;
    var element = selector ? closest(target, selector) : target;
    if (!element || (this.rippleOptions && closest(target, this.rippleOptions.ignore))) {
        return;
    }
    var offset = element.getBoundingClientRect();
    var offsetX = e.pageX - document.body.scrollLeft;
    var offsetY = e.pageY - document.body.scrollTop;
    var pageX = Math.max(Math.abs(offsetX - offset.left), Math.abs(offsetX - offset.right));
    var pageY = Math.max(Math.abs(offsetY - offset.top), Math.abs(offsetY - offset.bottom));
    var radius = Math.sqrt(pageX * pageX + pageY * pageY);
    var diameter = radius * 2 + 'px';
    var x = offsetX - offset.left - radius;
    var y = offsetY - offset.top - radius;
    if (this.rippleOptions && this.rippleOptions.isCenterRipple) {
        x = 0;
        y = 0;
        diameter = '100%';
    }
    element.classList.add('e-ripple');
    var duration = this.rippleOptions.duration.toString();
    var styles = 'width: ' + diameter + ';height: ' + diameter + ';left: ' + x + 'px;top: ' + y + 'px;' +
        'transition-duration: ' + duration + 'ms;';
    var rippleElement = createElement('div', { className: 'e-ripple-element', styles: styles });
    element.appendChild(rippleElement);
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');
    rippleElement.style.transform = 'scale(1)';
    if (element !== this.parent) {
        EventHandler.add(element, 'mouseleave', rippleLeaveHandler, { parent: this.parent, rippleOptions: this.rippleOptions });
    }
}
function rippleUpHandler(e) {
    removeRipple(e, this);
}
function rippleLeaveHandler(e) {
    removeRipple(e, this);
}
function removeRipple(e, eventArgs) {
    var duration = eventArgs.rippleOptions.duration;
    var target = (e.target);
    var selector = eventArgs.rippleOptions.selector;
    var element = selector ? closest(target, selector) : target;
    if (!element || (element && element.className.indexOf('e-ripple') === -1)) {
        return;
    }
    var rippleElements = selectAll('.e-ripple-element', element);
    var rippleElement = rippleElements[rippleElements.length - 1];
    if (rippleElement) {
        rippleElement.style.opacity = '0.5';
    }
    if (eventArgs.parent !== element) {
        EventHandler.remove(element, 'mouseleave', rippleLeaveHandler);
    }
    setTimeout(function () {
        if (rippleElement && rippleElement.parentNode) {
            rippleElement.parentNode.removeChild(rippleElement);
        }
        if (!element.getElementsByClassName('e-ripple-element').length) {
            element.classList.remove('e-ripple');
        }
        if (eventArgs.done) {
            eventArgs.done(e);
        }
    }, duration);
}
export var isRippleEnabled = false;
export function enableRipple(isRipple) {
    isRippleEnabled = isRipple;
    return isRippleEnabled;
}
var Animation_1;
