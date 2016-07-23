/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'models/skillsModel', 'components/tools/loader'], function (require, exports, React, skillsModel_1, Loader) {
    "use strict";
    var Skills = (function (_super) {
        __extends(Skills, _super);
        function Skills(props) {
            _super.call(this, props);
            this.state = {
                isLoading: true
            };
            this.props.model = new skillsModel_1.default();
            this.props.model.skills = new Array(".net", "mvc", "sql");
        }
        Skills.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.setState({ isLoading: false }); }, 1000);
        };
        Skills.prototype.render = function () {
            var skills = null;
            if (this.state.isLoading) {
                skills = React.createElement(Loader, {isActive: this.state.isLoading});
            }
            else {
                skills = this.props.model.skills.map(function (skill) {
                    return (React.createElement("span", {className: "skill"}, skill));
                }, this);
            }
            return (React.createElement("section", {id: "skills", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-briefcase fa-2x"}), React.createElement("h3", null, "Skills"), React.createElement("div", {className: "grp"}, skills)));
        };
        return Skills;
    }(React.Component));
    return Skills;
});
