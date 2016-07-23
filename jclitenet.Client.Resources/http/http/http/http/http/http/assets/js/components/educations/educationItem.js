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
    var EducationItem = (function (_super) {
        __extends(EducationItem, _super);
        function EducationItem(props) {
            _super.call(this, props);
        }
        EducationItem.prototype.componentDidMount = function () {
        };
        EducationItem.prototype.render = function () {
            var separator = React.createElement("div", {className: "separator"});
            if (this.props.isLastItem)
                separator = null;
            return (React.createElement("div", {className: "grp"}, React.createElement("div", {className: "grp-title"}, React.createElement("h4", null, this.props.education.schoolName)), React.createElement("div", {className: "description"}, this.props.education.degree, ", ", this.props.education.courseName, " (", this.props.education.dateTaken, " - ", this.props.education.dateEnded, ")"), separator));
        };
        return EducationItem;
    }(React.Component));
    return EducationItem;
});
