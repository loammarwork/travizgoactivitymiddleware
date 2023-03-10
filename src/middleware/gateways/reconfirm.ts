import * as z from "zod";
import { ZodError } from "zod";
import { Response, NextFunction } from "express";
import { HttpStatusCode } from "axios";
import { ResponseError } from "../helper/ResponseTranslator";
import { BookingStatusType } from "../types/BookingStatus";

const ReconfirmGatewayRequest = z.object({
    params: z.any({}),
    headers: z.any({}),
    body: z.object({
        reference: z.string(),
    }),
    query: z.any({}),
});

export type ReconfirmGatewayRequestType = z.infer<typeof ReconfirmGatewayRequest>;

export interface ReconfirmGatewayAPIStandardResponse {
    success: boolean;
    identifier: string;
    data: { reference: string; currency: string; amount: number; status: BookingStatusType; gatewayResponse: any };
}

export function ValidateReconfirmGateway(
    req: ReconfirmGatewayRequestType,
    res: Response<ReconfirmGatewayAPIStandardResponse | ResponseError>,
    next: NextFunction
) {
    try {
        req = ReconfirmGatewayRequest.parse(req);
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
