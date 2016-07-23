/// <reference path="typings/require/require.d.ts" />
/// <reference path="interfaces/interfaces.d.ts" />
/// <reference path="typings/react/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', './services/authService'], function (require, exports, React, authService_1) {
    "use strict";
    var service = new authService_1.default();
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.getInitialState = function () {
            this.state = {
                isAuthenticated: service.isAuthenticated()
            };
        };
        App.prototype.render = function () {
            return (React.createElement("div", {id: "main"}, React.createElement("div", {className: "topnav"}, React.createElement("header", {id: "header", className: "highlight container-fluid"}, React.createElement("div", {id: "logo"}, React.createElement("h1", null, "<a>", React.createElement("span", null, "jc"), "litenet", React.createElement("label", {className: "blinking-cursor"}, "_"), "<⁄a>")))), React.createElement("div", {id: "subheader", "header-fixed": true}, React.createElement("div", {className: "container"}, React.createElement("div", {className: "navbar navbar-default"}, React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar"}, React.createElement("span", {className: "sr-only"}, "Toggle navigation"), React.createElement("span", {className: "icon-bar"}), React.createElement("span", {className: "icon-bar"}), React.createElement("span", {classclassName: "icon-bar"})), React.createElement("div", {id: "navbar", className: "subtitle navbar-collapse collapse"}, React.createElement("ul", {className: "nav navbar-nav"}, React.createElement("li", null, React.createElement("a", {href: "#"}, "Education")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Experiences")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Skills")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Contact")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Languages")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Certifications")), React.createElement("li", null, React.createElement("a", {href: "#"}, "Interests"))))))), React.createElement("div", {id: "summary-section"}, this.props.children), React.createElement("footer", null, React.createElement("div", {class: "container-fluid"}))));
        };
        return App;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = App;
});
