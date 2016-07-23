/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'components/educations/educationItem', 'models/educationsModel', 'components/tools/loader'], function (require, exports, React, EducationItem, EducationsModel, Loader) {
    "use strict";
    var Educations = (function (_super) {
        __extends(Educations, _super);
        function Educations(props) {
            _super.call(this, props);
            props.model = new EducationsModel();
            props.model.educationItems = props.model.educationItems.concat({
                id: 1,
                schoolName: "Polytechnic University of the Philippines",
                degree: "Bachelor Degree",
                courseName: "Computer Engineering",
                dateTaken: "1998",
                dateEnded: "2003"
            });
            props.model.educationItems = props.model.educationItems.concat({
                id: 2,
                schoolName: "Polytechnic University of the Philippines",
                degree: "Bachelor Degree",
                courseName: "Computer Engineering",
                dateTaken: "1998",
                dateEnded: "2003"
            });
            this.state = {
                isLoading: true
            };
        }
        Educations.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.setState({ isLoading: false }); }, 1000);
        };
        Educations.prototype.render = function () {
            var educationItemsComponent = null;
            if (!this.state.isLoading) {
                var educationItems = this.props.model.educationItems;
                var showItems = educationItems.filter(function (item) {
                    return true;
                }, this);
                var lastItem = showItems[showItems.length - 1];
                educationItemsComponent = showItems.map(function (item) {
                    var isLast = (lastItem == item);
                    return (React.createElement(EducationItem, {key: item.id, education: item, isLastItem: isLast}));
                });
            }
            else {
                educationItemsComponent = React.createElement(Loader, {isActive: this.state.isLoading});
            }
            return (React.createElement("section", {id: "education", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-graduation-cap fa-2x"}), React.createElement("h3", null, "Education"), educationItemsComponent));
        };
        return Educations;
    }(React.Component));
    return Educations;
});
