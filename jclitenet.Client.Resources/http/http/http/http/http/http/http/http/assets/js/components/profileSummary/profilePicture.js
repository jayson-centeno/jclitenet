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
    var ProfilePicture = (function (_super) {
        __extends(ProfilePicture, _super);
        function ProfilePicture(props) {
            _super.call(this, props);
        }
        ProfilePicture.prototype.render = function () {
            return (React.createElement("div", {id: "pic"}, React.createElement("img", {src: "/assets/images/upload/2cbf4fb7e2823ce69b932954b163cf93.png", width: "192", height: "192"})));
        };
        return ProfilePicture;
    }(React.Component));
    return ProfilePicture;
});
