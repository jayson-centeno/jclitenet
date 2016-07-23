/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'models/interestsModel', 'components/tools/loader'], function (require, exports, React, interestsModel_1, Loader) {
    "use strict";
    var Interests = (function (_super) {
        __extends(Interests, _super);
        function Interests(props) {
            _super.call(this, props);
            this.state = {
                isLoading: true
            };
            this.props.model = new interestsModel_1.default();
            this.props.model.interests = new Array(".net", "mvc", "sql", "DI");
        }
        Interests.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.setState({ isLoading: false }); }, 1000);
        };
        Interests.prototype.render = function () {
            var interest = null;
            if (this.state.isLoading) {
                interest = React.createElement(Loader, {isActive: this.state.isLoading});
            }
            else {
                interest = this.props.model.interests.map(function (interest) {
                    return (React.createElement("span", {className: "inter"}, interest));
                }, this);
            }
            return (React.createElement("section", {id: "skills", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-newspaper-o fa-2x"}), React.createElement("h3", null, "Interests"), React.createElement("div", {className: "grp"}, interest)));
        };
        return Interests;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Interests;
});
