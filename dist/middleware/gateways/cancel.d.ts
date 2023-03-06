import * as z from "zod";
import { Response, NextFunction } from "express";
import { ResponseError } from "../helper/ResponseTranslator";
import { BookingStatusType } from "../types/BookingStatus";
declare const CancelGatewayRequest: z.ZodObject<{
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
export type CancelGatewayRequestType = z.infer<typeof CancelGatewayRequest>;
export interface CancelGatewayAPIStandardResponse {
    success: boolean;
    identifier: string;
    data: {
        reference: string;
        currency: string;
        amount: number;
        status: BookingStatusType;
        gatewayResponse: any;
    };
}
export declare function ValidateCancelGateway(req: CancelGatewayRequestType, res: Response<CancelGatewayAPIStandardResponse | ResponseError>, next: NextFunction): Response<ResponseError | CancelGatewayAPIStandardResponse, Record<string, any>> | undefined;
export {};
