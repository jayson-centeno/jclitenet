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
    var Education = (function (_super) {
        __extends(Education, _super);
        function Education(props) {
            _super.call(this, props);
        }
        Education.prototype.render = function () {
            return (React.createElement("div", {className: "label-group"}, React.createElement("span", {className: "caption"}, "Education: "), React.createElement("div", {className: "wrapper"}, React.createElement("span", null, this.props.education))));
        };
        return Education;
    }(React.Component));
    return Education;
});
