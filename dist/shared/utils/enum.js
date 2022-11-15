"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumHttpStatus = void 0;
var enumHttpStatus;
(function (enumHttpStatus) {
    enumHttpStatus[enumHttpStatus["OK"] = 200] = "OK";
    enumHttpStatus[enumHttpStatus["CREATED"] = 201] = "CREATED";
    enumHttpStatus[enumHttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    enumHttpStatus[enumHttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    enumHttpStatus[enumHttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    enumHttpStatus[enumHttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    enumHttpStatus[enumHttpStatus["NOT_FOUND_METHOD"] = 405] = "NOT_FOUND_METHOD";
    enumHttpStatus[enumHttpStatus["BLOCKED_SOURCE"] = 423] = "BLOCKED_SOURCE";
    enumHttpStatus[enumHttpStatus["TO_MUCH_REQUEST"] = 429] = "TO_MUCH_REQUEST";
    enumHttpStatus[enumHttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    enumHttpStatus[enumHttpStatus["SERVICE_NOT_AVAILABLE"] = 503] = "SERVICE_NOT_AVAILABLE";
})(enumHttpStatus = exports.enumHttpStatus || (exports.enumHttpStatus = {}));
