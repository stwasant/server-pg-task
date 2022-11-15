"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttResponse = void 0;
const enum_1 = require("../utils/enum");
class HttResponse {
    Ok(resp, data) {
        return resp.status(enum_1.enumHttpStatus.OK).json({
            status: enum_1.enumHttpStatus.OK,
            statusMessage: 'Successfull',
            data: data,
        });
    }
    Created(resp, data) {
        return resp.status(enum_1.enumHttpStatus.CREATED).json({
            status: enum_1.enumHttpStatus.CREATED,
            statusMessage: 'Created/Updated Successfull',
            data: data,
        });
    }
    BadRequest(resp, data) {
        return resp.status(enum_1.enumHttpStatus.BAD_REQUEST).json({
            status: enum_1.enumHttpStatus.BAD_REQUEST,
            statusMessage: 'Bad request',
            data: data,
        });
    }
    NotFound(resp, data) {
        return resp.status(enum_1.enumHttpStatus.NOT_FOUND).json({
            status: enum_1.enumHttpStatus.NOT_FOUND,
            statusMessage: 'Bad request',
            data: data,
        });
    }
    Unauthorized(resp, data) {
        return resp.status(enum_1.enumHttpStatus.UNAUTHORIZED).json({
            status: enum_1.enumHttpStatus.UNAUTHORIZED,
            statusMessage: 'Bad request',
            data: data,
        });
    }
    ForBidden(resp, data) {
        return resp.status(enum_1.enumHttpStatus.FORBIDDEN).json({
            status: enum_1.enumHttpStatus.FORBIDDEN,
            statusMessage: 'Not accessible',
            data: data,
        });
    }
    NotFoundMethod(resp, data) {
        return resp.status(enum_1.enumHttpStatus.NOT_FOUND_METHOD).json({
            status: enum_1.enumHttpStatus.NOT_FOUND_METHOD,
            statusMessage: 'Resource does not exist',
            data: data,
        });
    }
    BlockedSource(resp, data) {
        return resp.status(enum_1.enumHttpStatus.BLOCKED_SOURCE).json({
            status: enum_1.enumHttpStatus.BLOCKED_SOURCE,
            statusMessage: 'Resource bloacked',
            data: data,
        });
    }
    ToMuchRequest(resp, data) {
        return resp.status(enum_1.enumHttpStatus.TO_MUCH_REQUEST).json({
            status: enum_1.enumHttpStatus.TO_MUCH_REQUEST,
            statusMessage: 'To much requests',
            data: data,
        });
    }
    InternalServerError(resp, data) {
        return resp.status(enum_1.enumHttpStatus.INTERNAL_SERVER_ERROR).json({
            status: enum_1.enumHttpStatus.INTERNAL_SERVER_ERROR,
            statusMessage: 'Resource does not exist',
            data: data,
        });
    }
    ServiceNotAvaiLable(resp, data) {
        return resp.status(enum_1.enumHttpStatus.SERVICE_NOT_AVAILABLE).json({
            status: enum_1.enumHttpStatus.SERVICE_NOT_AVAILABLE,
            statusMessage: 'Service does not available',
            data: data,
        });
    }
}
exports.HttResponse = HttResponse;
