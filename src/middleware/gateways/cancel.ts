import * as z from "zod";
import { ZodError } from "zod";
import { Response, NextFunction } from "express";
import { HttpStatusCode } from "axios";
import { ResponseError } from "../helper/ResponseTranslator";
import { BookingStatusType } from "../types/BookingStatus";

const CancelGatewayRequest = z.object({
    params: z.any({}),
    headers: z.any({}),
    body: z.object({
        reference: z.string(),
    }),
    query: z.any({}),
});

export type CancelGatewayRequestType = z.infer<typeof CancelGatewayRequest>;

export interface CancelGatewayAPIStandardResponse {
    success: boolean;
    identifier: string;
    data: { reference: string; status: BookingStatusType; gatewayResponse: any };
}

export function ValidateCancelGateway(
    req: CancelGatewayRequestType,
    res: Response<CancelGatewayAPIStandardResponse | ResponseError>,
    next: NextFunction
) {
    try {
        req = CancelGatewayRequest.parse(req);
        next();
    } catch (error: unknown) {
        if (error instanceof Error)
            return res
                .status(HttpStatusCode.BadRequest)
                .json(new ResponseError({ code: HttpStatusCode.BadRequest, message: error.message }));
        if (error instanceof ZodError)
            return res
                .status(HttpStatusCode.BadRequest)
                .json(new ResponseError({ code: HttpStatusCode.BadRequest, message: error.message }));
        return res
            .status(HttpStatusCode.BadRequest)
            .json(new ResponseError({ code: HttpStatusCode.BadRequest, message: "Unknown error" }));
    }
}
