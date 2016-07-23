/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'models/personalLinksModel', 'components/personalLinks/personalLinksItem', 'components/tools/loader'], function (require, exports, React, PersonalLinksModel, PersonalLinksItem, Loader) {
    "use strict";
    var PersonalLinks = (function (_super) {
        __extends(PersonalLinks, _super);
        function PersonalLinks(props) {
            _super.call(this, props);
            this.state = {
                isLoading: true
            };
            this.props.model = new PersonalLinksModel();
            var items = new Array();
            items = items
                .concat({
                id: 1,
                name: "Personal",
                link: "www.x.com"
            })
                .concat({
                id: 2,
                name: "LinkedIn",
                link: "www.linkedin.com"
            });
            this.props.model.personalLinks = items;
        }
        PersonalLinks.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.setState({ isLoading: false }); }, 1000);
        };
        PersonalLinks.prototype.render = function () {
            var personalLinks = null;
            if (this.state.isLoading) {
                personalLinks = (React.createElement(Loader, {isActive: this.state.isLoading}));
            }
            else {
                personalLinks = this.props.model.personalLinks.map(function (item) {
                    return (React.createElement(PersonalLinksItem, {model: item, key: item.id}));
                });
            }
            return (React.createElement("section", {id: "home-page", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-home fa-2x"}), React.createElement("h3", null, "Personal Home Page or Blogs"), personalLinks));
        };
        return PersonalLinks;
    }(React.Component));
    return PersonalLinks;
});
