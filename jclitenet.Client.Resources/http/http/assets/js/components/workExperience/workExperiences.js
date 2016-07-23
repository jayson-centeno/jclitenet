/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'components/workExperience/workExperienceItem', 'models/workExperiencesModel', 'components/tools/loader'], function (require, exports, React, WorkExperienceItem, WorkExperiencesModel, Loader) {
    "use strict";
    var WorkExperiences = (function (_super) {
        __extends(WorkExperiences, _super);
        function WorkExperiences(props) {
            _super.call(this, props);
            this.props.model = new WorkExperiencesModel();
            this.props.model.workExpericeItems = this.props.model.workExpericeItems.concat({
                id: 1,
                position: "Senior Asp.Net Developer",
                companyName: "CVCheck.com - Outsourced",
                workStarted: "Jan 2015", workEnded: "Present",
                simpleAddress: " Makati, Philippines",
                workDescription: "- Pioneer Programmer of CVCheck.biz in the Philippines - Provide weekly reports to the management as part of project monitoring - Participate in project enhancement, code maintenance and certifications - Participate in framework collaboration and executions - Mentoring other developers about standard implementations - Monitoring project workflows and support bugs using Jira. - Provide clients with excellent bug fixes - Write code documentations - Write unit Testing - Supervising Front end developer - Work From Home"
            })
                .concat({
                id: 2,
                position: "Mid Asp.Net Developer",
                companyName: "CVCheck.com - Outsourced",
                workStarted: "Jan 2015", workEnded: "Present",
                simpleAddress: " Makati, Philippines",
                workDescription: "- Pioneer Programmer of CVCheck.biz in the Philippines - Provide weekly reports to the management as part of project monitoring - Participate in project enhancement, code maintenance and certifications - Participate in framework collaboration and executions - Mentoring other developers about standard implementations - Monitoring project workflows and support bugs using Jira. - Provide clients with excellent bug fixes - Write code documentations - Write unit Testing - Supervising Front end developer - Work From Home"
            });
            this.state = {
                isLoading: true
            };
        }
        WorkExperiences.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.setState({ isLoading: false }); }, 1000);
        };
        WorkExperiences.prototype.render = function () {
            var workItems = null;
            if (!this.state.isLoading) {
                workItems = this.props.model.workExpericeItems.map(function (item) {
                    var lastItem = this.props.model.workExpericeItems[this.props.model.workExpericeItems.length - 1];
                    var isLast = (lastItem == item);
                    return (React.createElement(WorkExperienceItem, {key: item.id, workExperience: item, isLastItem: isLast}));
                }, this);
            }
            else {
                workItems = React.createElement(Loader, {isActive: this.state.isLoading});
            }
            return (React.createElement("section", {id: "work-exp", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-industry fa-2x"}), React.createElement("h3", null, "Work Experiences"), workItems));
        };
        return WorkExperiences;
    }(React.Component));
    return WorkExperiences;
});
