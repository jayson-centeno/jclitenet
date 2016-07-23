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
    var WorkExperienceItem = (function (_super) {
        __extends(WorkExperienceItem, _super);
        function WorkExperienceItem(props) {
            _super.call(this, props);
        }
        WorkExperienceItem.prototype.render = function () {
            var separator = React.createElement("div", {className: "separator"});
            if (this.props.isLastItem)
                separator = null;
            return (React.createElement("div", {className: "grp"}, React.createElement("div", {className: "grp-title"}, React.createElement("h4", null, this.props.workExperience.position)), React.createElement("div", {className: "work-company"}, this.props.workExperience.companyName), React.createElement("div", {className: "work-dates"}, this.props.workExperience.workStarted, " – ", this.props.workExperience.workEnded, " | ", this.props.workExperience.simpleAddress), React.createElement("div", {className: "description"}, this.props.workExperience.workDescription), separator));
        };
        return WorkExperienceItem;
    }(React.Component));
    return WorkExperienceItem;
});
