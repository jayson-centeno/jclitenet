/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'models/contactsModel', 'components/tools/loader'], function (require, exports, React, ContactsModel, Loader) {
    "use strict";
    var Contacts = (function (_super) {
        __extends(Contacts, _super);
        function Contacts(props) {
            _super.call(this, props);
            this.props.model = new ContactsModel();
            this.props.model.email = "jaysword1@yahoo.com";
            this.props.model.address1 = "L1 B5 East Acropolis Phase II Brgy Dolores, Taytay, Rizal 1920 Philippines";
            this.props.model.address2 = "L1 B5 East Acropolis Phase II Brgy Dolores, Taytay, Rizal 1920 Philippines";
            this.props.model.mobile = "+639277950178";
            this.props.model.homePhone = "0200320032";
            this.state = {
                isLoading: true
            };
        }
        Contacts.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.setState({ isLoading: false }); }, 1000);
        };
        Contacts.prototype.render = function () {
            var contacts = null;
            if (this.state.isLoading) {
                contacts = (React.createElement(Loader, {isActive: this.state.isLoading}));
            }
            else {
                contacts = (React.createElement("div", {className: "grp"}, React.createElement("div", {className: "label-group"}, React.createElement("span", {className: "caption"}, "Email: "), React.createElement("div", {className: "wrapper"}, React.createElement("span", {className: "description email"}, this.props.model.email))), React.createElement("div", {className: "label-group"}, React.createElement("span", {className: "caption"}, "Address1: "), React.createElement("div", {className: "wrapper"}, React.createElement("span", {class: "description"}, this.props.model.address1))), React.createElement("div", {className: "label-group"}, React.createElement("span", {className: "caption"}, "Address2: "), React.createElement("div", {className: "wrapper"}, React.createElement("span", {className: "description"}, this.props.model.address2))), React.createElement("div", {className: "label-group"}, React.createElement("span", {className: "caption"}, "Mobile: "), React.createElement("div", {className: "wrapper"}, React.createElement("span", {className: "description"}, this.props.model.mobile))), React.createElement("div", {className: "label-group"}, React.createElement("span", {className: "caption"}, "Home: "), React.createElement("div", {className: "wrapper"}, React.createElement("span", {className: "description"}, this.props.model.homePhone)))));
            }
            return (React.createElement("section", {id: "contacts", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-file-text fa-2x"}), React.createElement("h3", null, "Contact Information"), contacts));
        };
        return Contacts;
    }(React.Component));
    return Contacts;
});
