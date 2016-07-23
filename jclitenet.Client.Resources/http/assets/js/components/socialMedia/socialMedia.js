/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'models/socialMediaModel', 'components/tools/loader'], function (require, exports, React, SocialMediaModel, Loader) {
    "use strict";
    var SocialMedia = (function (_super) {
        __extends(SocialMedia, _super);
        function SocialMedia(props) {
            _super.call(this, props);
            this.state = {
                isLoading: true
            };
            this.props.model = new SocialMediaModel();
            this.props.model.links = new Array("www.linkedin.com", "www.googleplus.com");
        }
        SocialMedia.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.setState({ isLoading: false }); }, 1000);
        };
        SocialMedia.prototype.render = function () {
            var socialMedias = null;
            if (this.state.isLoading) {
                socialMedias = React.createElement(Loader, {isActive: this.state.isLoading});
            }
            else {
                socialMedias = this.props.model.links.map(function (item) {
                    var newItem = item;
                    return (React.createElement("li", null, React.createElement("a", {href: newItem}, newItem)));
                }, this);
            }
            return (React.createElement("section", {id: "skills", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-briefcase fa-2x"}), React.createElement("h3", null, "Social Media Accounts"), React.createElement("ul", null, socialMedias)));
        };
        return SocialMedia;
    }(React.Component));
    return SocialMedia;
});
