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
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
var defaulthtmlkeys = ['alt', 'className', 'disabled', 'form', 'id',
    'readOnly', 'style', 'tabIndex', 'title', 'type',
    'onClick', 'onFocus', 'onBlur'];
var ComponentBase = (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentBase.prototype.componentWillMount = function () {
        var propKeys = Object.keys(this.props);
        this.htmlattributes = {};
        var attrMatch = defaulthtmlkeys.concat(this.controlAttributes || []);
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var prop = propKeys_1[_i];
            if (prop.indexOf('data-') !== -1 || prop.indexOf('aria-') !== -1 || attrMatch.indexOf(prop) !== -1) {
                this.htmlattributes[prop] = this.props[prop];
            }
        }
    };
    ComponentBase.prototype.componentDidMount = function () {
        this.refreshChild(true);
        var ele = ReactDOM.findDOMNode(this);
        this.appendTo(ele);
    };
    ComponentBase.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState(nextProps);
        this.setProperties(nextProps);
        this.refreshChild(false, nextProps);
    };
    ComponentBase.prototype.getDefaultAttributes = function () {
        return this.htmlattributes;
    };
    ComponentBase.prototype.refreshChild = function (silent, props) {
        if (this.checkInjectedModules) {
            var prevModule = this.getInjectedModules() || [];
            var curModule = this.getInjectedServices() || [];
            for (var _i = 0, curModule_1 = curModule; _i < curModule_1.length; _i++) {
                var mod = curModule_1[_i];
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.injectedModules = prevModule;
        }
        if (this.directivekeys) {
            var directiveValue = this.validateChildren({}, this.directivekeys, (props || this.props));
            if (directiveValue) {
                if (!silent && this.skipRefresh) {
                    for (var _a = 0, _b = this.skipRefresh; _a < _b.length; _a++) {
                        var fields = _b[_a];
                        delete directiveValue[fields];
                    }
                }
                this.setProperties(directiveValue, silent);
            }
        }
    };
    ComponentBase.prototype.componentWillUnmount = function () {
        this.destroy();
    };
    ComponentBase.prototype.validateChildren = function (childCache, mapper, props) {
        var flag = false;
        var childs = React.Children.toArray(props.children);
        for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
            var child = childs_1[_i];
            var ifield = this.getChildType(child);
            var key = mapper[ifield];
            if (ifield && mapper) {
                var childProps = this.getChildProps(React.Children.toArray(child.props.children), key);
                if (childProps.length) {
                    flag = true;
                    childCache[child.type.propertyName || ifield] = childProps;
                }
            }
        }
        if (flag) {
            return childCache;
        }
        return null;
    };
    ComponentBase.prototype.getChildType = function (child) {
        if (child.type && child.type.isDirective) {
            return child.type.moduleName || '';
        }
        return '';
    };
    ComponentBase.prototype.getChildProps = function (subChild, matcher) {
        var ret = [];
        for (var _i = 0, subChild_1 = subChild; _i < subChild_1.length; _i++) {
            var child = subChild_1[_i];
            var accessProp = false;
            var key = void 0;
            if (typeof matcher === 'string') {
                accessProp = true;
                key = matcher;
            }
            else {
                key = Object.keys(matcher)[0];
            }
            var prop = child.props;
            var field = this.getChildType(child);
            if (field === key) {
                if (accessProp || !prop.children) {
                    ret.push(prop);
                }
                else {
                    ret.push(this.validateChildren(extend({}, prop), matcher[key], prop) || prop);
                }
            }
        }
        return ret;
    };
    ComponentBase.prototype.getInjectedServices = function () {
        var childs = React.Children.toArray(this.props.children);
        for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {
            var child = childs_2[_i];
            if (child.type.isService) {
                return child.props.services;
            }
        }
        return [];
    };
    return ComponentBase;
}(React.PureComponent));
export { ComponentBase };
