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
    var PersonalLinksItem = (function (_super) {
        __extends(PersonalLinksItem, _super);
        function PersonalLinksItem(props) {
            _super.call(this, props);
        }
        PersonalLinksItem.prototype.render = function () {
            return (React.createElement("div", {className: "label-group"}, React.createElement("span", {className: "caption strong"}, this.props.model.name), React.createElement("div", {className: "wrapper"}, React.createElement("span", {className: "description"}, React.createElement("a", {href: this.props.model.link}, this.props.model.link)))));
        };
        return PersonalLinksItem;
    }(React.Component));
    return PersonalLinksItem;
});
