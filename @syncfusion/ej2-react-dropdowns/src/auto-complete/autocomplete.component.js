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
define(["require", "exports", "react", "@syncfusion/ej2-dropdowns", "@syncfusion/ej2-react-base"], function (require, exports, React, ej2_dropdowns_1, ej2_react_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AutoCompleteComponent = (function (_super) {
        __extends(AutoCompleteComponent, _super);
        function AutoCompleteComponent(props) {
            var _this = _super.call(this, props) || this;
            _this.initRenderCalled = false;
            _this.checkInjectedModules = false;
            _this.state = props;
            return _this;
        }
        AutoCompleteComponent.prototype.render = function () {
            if ((this.element && !this.initRenderCalled) || this.refreshing) {
                _super.prototype.render.call(this);
                this.initRenderCalled = true;
            }
            else {
                return React.createElement('input', this.getDefaultAttributes(), this.props.children);
            }
        };
        return AutoCompleteComponent;
    }(ej2_dropdowns_1.AutoComplete));
    exports.AutoCompleteComponent = AutoCompleteComponent;
    ej2_react_base_1.applyMixins(AutoCompleteComponent, [ej2_react_base_1.ComponentBase, React.PureComponent]);
});
