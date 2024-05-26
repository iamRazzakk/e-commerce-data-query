"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = void 0;
const success = (message, data) => {
    return {
        success: true,
        message: message,
        data: data,
    };
};
exports.success = success;
const error = (message, err) => {
    return {
        success: false,
        message: message,
        data: err,
    };
};
exports.error = error;
