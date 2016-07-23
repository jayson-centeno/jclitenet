/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 'models/certificationsModel', 'components/certifications/certificationItem', 'components/tools/loader'], function (require, exports, React, CertificationsModel, CertificationItem, Loader) {
    "use strict";
    var Certifications = (function (_super) {
        __extends(Certifications, _super);
        function Certifications(props) {
            _super.call(this, props);
            this.state = {
                isLoading: true
            };
            var items = new Array({ id: 1, title: "MCP", expStartDate: new Date(2013, 1, 1), expEndDate: new Date(2017, 1, 1) }, { id: 1, title: "MCP", expStartDate: new Date(2013, 1, 1), expEndDate: new Date(2018, 1, 1) });
            this.props.model = new CertificationsModel();
            this.props.model.certifications = items;
        }
        Certifications.prototype.componentDidMount = function () {
            var _this = this;
            setTimeout(function () { return _this.setState({ isLoading: false }); }, 1000);
        };
        Certifications.prototype.render = function () {
            var certifications = null;
            if (this.state.isLoading) {
                certifications = (React.createElement(Loader, {isActive: this.state.isLoading}));
            }
            else {
                certifications = this.props.model.certifications.map(function (item) {
                    return (React.createElement(CertificationItem, {model: item}));
                });
            }
            return (React.createElement("section", {id: "certifications", className: "profile-box bottom-spacer round-corner"}, React.createElement("i", {className: "fa fa-certificate fa-2x"}), React.createElement("h3", null, "Certifications"), React.createElement("div", {className: "grp"}, certifications)));
        };
        return Certifications;
    }(React.Component));
    return Certifications;
});
