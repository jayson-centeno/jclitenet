/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', "components/profileSummary/addressIndustryInfo", 'components/profileSummary/latestJob', 'components/profileSummary/previousJobs', 'components/profileSummary/education', 'components/profileSummary/email', 'components/profileSummary/contactNumber', 'components/profileSummary/skype'], function (require, exports, React, AddressIndustryInfo, LatestJob, PreviousJobs, Education, Email, ContactNumber, Skype) {
    "use strict";
    var InfoBoxWrapper = (function (_super) {
        __extends(InfoBoxWrapper, _super);
        function InfoBoxWrapper(props) {
            _super.call(this, props);
        }
        InfoBoxWrapper.prototype.render = function () {
            return (React.createElement("div", {id: "info"}, React.createElement(AddressIndustryInfo, {simpleAddress: "Taytay, Philippines", industry: "Computer Software"}), React.createElement(LatestJob, {jobName: "BigOs"}), React.createElement(PreviousJobs, {jobs: "Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp"}), React.createElement(Education, {education: "Polytechnic University of the Philippines"}), React.createElement(Email, {email: "jaysword1@yahoo.com"}), React.createElement(ContactNumber, {contact: "+639277950178"}), React.createElement(Skype, {skype: "jayson-centeno"})));
        };
        return InfoBoxWrapper;
    }(React.Component));
    return InfoBoxWrapper;
});
