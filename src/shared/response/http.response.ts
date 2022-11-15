import { Response } from "express";
import { enumHttpStatus } from "../utils/enum";

export class HttResponse {

    Ok(resp: Response, data?:any): Response {
        return resp.status(enumHttpStatus.OK).json({
            status: enumHttpStatus.OK,
            statusMessage: 'Successfull',
            data: data,
        })
    }

    Created(resp: Response, data?: any): Response {
        return resp.status(enumHttpStatus.CREATED).json({
            status: enumHttpStatus.CREATED,
            statusMessage: 'Created/Updated Successfull',
            data: data,
        })
    }
    BadRequest(resp: Response, data?: any): Response {
        return resp.status(enumHttpStatus.BAD_REQUEST).json({
            status: enumHttpStatus.BAD_REQUEST,
            statusMessage: 'Bad request',
            data: data,
        })
    }

    NotFound(resp: Response, data?: any): Response {
        return resp.status(enumHttpStatus.NOT_FOUND).json({
            status: enumHttpStatus.NOT_FOUND,
            statusMessage: 'Bad request',
            data: data,
        })
    }

    Unauthorized(resp: Response, data?: any): Response {
        return resp.status(enumHttpStatus.UNAUTHORIZED).json({
            status: enumHttpStatus.UNAUTHORIZED,
            statusMessage: 'Bad request',
            data: data,
        })
    }

    ForBidden (resp: Response, data?: any): Response {
        return resp.status(enumHttpStatus.FORBIDDEN).json({
            status: enumHttpStatus.FORBIDDEN,
            statusMessage: 'Not accessible',
            data: data,
        })
    }

    NotFoundMethod (resp: Response, data?:any): Response {
        return resp.status(enumHttpStatus.NOT_FOUND_METHOD).json({
            status: enumHttpStatus.NOT_FOUND_METHOD,
            statusMessage: 'Resource does not exist',
            data: data,
        })
    }

    BlockedSource (resp: Response, data?: any): Response {
        return resp.status(enumHttpStatus.BLOCKED_SOURCE).json({
            status: enumHttpStatus.BLOCKED_SOURCE,
            statusMessage: 'Resource bloacked',
            data: data,
        })
    }

    ToMuchRequest (resp: Response, data?: any): Response {
        return resp.status(enumHttpStatus.TO_MUCH_REQUEST).json({
            status: enumHttpStatus.TO_MUCH_REQUEST,
            statusMessage: 'To much requests',
            data: data,
        })
    }

    InternalServerError (resp: Response, data?: any): Response {
        return resp.status(enumHttpStatus.INTERNAL_SERVER_ERROR).json({
            status: enumHttpStatus.INTERNAL_SERVER_ERROR,
            statusMessage: 'Resource does not exist',
            data: data,
        })
    }

    ServiceNotAvaiLable (resp: Response, data?: any): Response {
        return resp.status(enumHttpStatus.SERVICE_NOT_AVAILABLE).json({
            status: enumHttpStatus.SERVICE_NOT_AVAILABLE,
            statusMessage: 'Service does not available',
            data: data,
        })

    }
}