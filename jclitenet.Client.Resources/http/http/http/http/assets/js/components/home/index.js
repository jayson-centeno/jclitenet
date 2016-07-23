/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'components/headerSummary/headerSummary', 'components/profileSummary/profileSummary', 'components/introduction/introduction', 'components/educations/educations', 'components/workExperience/workExperiences', 'components/skills/skills', 'components/contacts/contacts', 'components/languages/languages', "components/certifications/certifications", "components/interests/interests", "components/personalLinks/personalLinks", "components/socialMedia/socialMedia"], function (require, exports, React, headerSummary_1, ProfileSummary, Introduction, Educations, WorkExperiences, Skills, Contacts, Languages, Certifications, interests_1, PersonalLinks, SocialMedia) {
    "use strict";
    var Index = (function (_super) {
        __extends(Index, _super);
        function Index() {
            _super.apply(this, arguments);
        }
        Index.prototype.render = function () {
            return (React.createElement("div", {id: "summary"}, React.createElement("div", {className: "background parallax"}), React.createElement("div", {className: "container"}, React.createElement(headerSummary_1.default, {name: "Jayson Centeno", title: "FullStack .Net Developer"}), React.createElement(ProfileSummary, null), React.createElement(Introduction, {introText: "No Value"}), React.createElement(Educations, {model: null}), React.createElement(WorkExperiences, {model: null}), React.createElement(Skills, {model: null}), React.createElement(Contacts, {model: null}), React.createElement(Languages, {model: null}), React.createElement(Certifications, {model: null}), React.createElement(interests_1.default, {model: null}), React.createElement(PersonalLinks, {model: null}), React.createElement(SocialMedia, {model: null}))));
        };
        return Index;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Index;
});
