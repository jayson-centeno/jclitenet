/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", 'components/profileSummary/profilePicture', 'components/profileSummary/infoBoxWrapper'], function (require, exports, React, ProfilePicture, InfoBoxWrapper) {
    "use strict";
    var ProfileSummary = (function (_super) {
        __extends(ProfileSummary, _super);
        function ProfileSummary(props) {
            _super.call(this, props);
        }
        ProfileSummary.prototype.render = function () {
            return (React.createElement("section", {id: "profile-summary", className: "profile-box bottom-spacer round-corner"}, React.createElement("div", {className: "profile-wrapper"}, React.createElement(ProfilePicture, null), React.createElement(InfoBoxWrapper, null))));
        };
        return ProfileSummary;
    }(React.Component));
    return ProfileSummary;
});
