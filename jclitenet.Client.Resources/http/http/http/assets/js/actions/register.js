define(["require", "exports", 'constants/constants'], function (require, exports, constants_1) {
    "use strict";
    function register(model) {
        return {
            type: constants_1.REGISTER_CONSTANTS.REGISTER,
            model: model
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = register;
});
