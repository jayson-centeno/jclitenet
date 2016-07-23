/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    var EducationsModel = (function () {
        function EducationsModel() {
            this.educationItems = new Array();
        }
        return EducationsModel;
    }());
    return EducationsModel;
});
