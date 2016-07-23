/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'models/languagesModel', 'components/languages/languageItem', 'components/tools/loader'], function (require, exports, React, LanguagesModel, LanguageItem, Loader) {
    "use strict";
    var Languages = (function (_super) {
        __extends(Languages, _super);
        function Languages(props) {
            _super.call(this, props);
            this.state = {
                isLoading: true
            };
            this.props.model = new LanguagesModel();
            var items = new Array();
            items = items
                .concat({
                id: 1,
                name: "English",
                level: "Conversational"
            })
                .concat({
                id: 2,
                name: "Tagalog",
                level: "Advanced"
            });
            this.props.model.languages = items;
        }
        Languages.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.setState({ isLoading: false }); }, 1000);
        };
        Languages.prototype.render = function () {
            var languages = null;
            if (this.state.isLoading) {
                languages = (React.createElement(Loader, {isActive: this.state.isLoading}));
            }
            else {
                languages = this.props.model.languages.map(function (item) {
                    return (React.createElement(LanguageItem, {model: item, key: item.id}));
                });
            }
            return (React.createElement("section", {id: "languages", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-globe fa-2x"}), React.createElement("h3", null, "Languages"), React.createElement("div", {className: "grp"}, languages)));
        };
        return Languages;
    }(React.Component));
    return Languages;
});
