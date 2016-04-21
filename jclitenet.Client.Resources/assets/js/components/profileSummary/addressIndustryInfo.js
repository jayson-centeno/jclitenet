/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    var AddressIndustryInfo = (function (_super) {
        __extends(AddressIndustryInfo, _super);
        function AddressIndustryInfo(props) {
            _super.call(this, props);
        }
        AddressIndustryInfo.prototype.render = function () {
            return (React.createElement("span", null, this.props.simpleAddress, " | ", this.props.industry));
        };
        return AddressIndustryInfo;
    }(React.Component));
    return AddressIndustryInfo;
});
