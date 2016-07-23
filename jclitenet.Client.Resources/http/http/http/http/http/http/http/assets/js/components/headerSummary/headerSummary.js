var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    var HeaderSummary = (function (_super) {
        __extends(HeaderSummary, _super);
        function HeaderSummary(props) {
            _super.call(this, props);
        }
        HeaderSummary.prototype.render = function () {
            return (React.createElement("div", {id: "title"}, React.createElement("h1", null, this.props.name), React.createElement("h2", null, this.props.title)));
        };
        return HeaderSummary;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = HeaderSummary;
});
