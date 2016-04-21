/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    var Introduction = (function (_super) {
        __extends(Introduction, _super);
        function Introduction(props) {
            _super.call(this, props);
            this.setState({ introText: this.props.introText });
        }
        Introduction.prototype.render = function () {
            return (React.createElement("section", {id: "introduction", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-file-text fa-2x"}), React.createElement("h3", null, "Introduction"), React.createElement("p", null, this.props.introText)));
        };
        return Introduction;
    }(React.Component));
    return Introduction;
});
