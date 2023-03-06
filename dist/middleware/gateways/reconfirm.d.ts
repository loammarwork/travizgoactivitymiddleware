import * as z from "zod";
import { Response, NextFunction } from "express";
import { ResponseError } from "../helper/ResponseTranslator";
import { BookingStatusType } from "../types/BookingStatus";
declare const ReconfirmGatewayRequest: z.ZodObject<{
    params: z.ZodAny;
    headers: z.ZodAny;
    body: z.ZodObject<{
        reference: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        reference: string;
    }, {
        reference: string;
    }>;
    query: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    body: {
        reference: string;
    };
    params?: any;
    headers?: any;
    query?: any;
}, {
    body: {
        reference: string;
    };
    params?: any;
    headers?: any;
    query?: any;
}>;
export type ReconfirmGatewayRequestType = z.infer<typeof ReconfirmGatewayRequest>;
export interface ReconfirmGatewayAPIStandardResponse {
    success: boolean;
    identifier: string;
    data: {
        reference: string;
        currency: string;
        amount: string;
        status: BookingStatusType;
        gatewayResponse: any;
    };
}
export declare function ValidateReconfirmGateway(req: ReconfirmGatewayRequestType, res: Response<ReconfirmGatewayAPIStandardResponse | ResponseError>, next: NextFunction): Response<ResponseError | ReconfirmGatewayAPIStandardResponse, Record<string, any>> | undefined;
export {};
