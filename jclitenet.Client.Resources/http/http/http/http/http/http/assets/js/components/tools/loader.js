/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    var Loader = (function (_super) {
        __extends(Loader, _super);
        function Loader(props) {
            _super.call(this, props);
        }
        Loader.prototype.render = function () {
            if (this.props.isActive) {
                return (React.createElement("div", null, React.createElement("i", {className: "fa fa-spinner"})));
            }
            else
                return (React.createElement("div", null));
        };
        return Loader;
    }(React.Component));
    return Loader;
});
