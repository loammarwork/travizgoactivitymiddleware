import * as z from "zod";
import { ZodError } from "zod";
import { Response, NextFunction } from "express";
import { HttpStatusCode } from "axios";
import { ResponseError } from "../helper/ResponseTranslator";
import { BookingStatusType } from "../types/BookingStatus";

const PreconfirmGatewayRequest = z.object({
    params: z.any({}),
    headers: z.any({}),
    body: z.object({
        bookingRef: z.string(),
        bookingHolder: z.object({
            name: z.string(),
            surname: z.string(),
            title: z.string(),
            email: z.string(),
            address: z.string(),
            zipCode: z.string(),
            phones: z.array(z.string()),
            nationality: z.string(),
        }),
        activities: z.array(
            z.object({
                serviceDate: z.string(),
                activityDetail: z.object({
                    rateKey: z.string(),
                    showTime: z.union([z.string(), z.null()]),
                }),
                answers: z
                    .array(
                        z.object({
                            question: z.object({
                                code: z.string(),
                                text: z.string(),
                            }),
                            answer: z.string(),
                        })
                    )
                    .optional(),
                paxes: z.array(
                    z.object({
                        name: z.string(),
                        surname: z.string(),
                        title: z.string(),
                        email: z.string(),
                        phoneNo: z.string(),
                        nationality: z.string(),
                        paxAmount: z.object({
                            paxType: z.string(),
                            amount: z.number(),
                            nettAmount: z.number(),
                            boxOfficeAmount: z.number(),
                            minPurchaseQty: z.union([z.number(), z.null()]),
                            maxPurchaseQty: z.union([z.number(), z.null()]),
                            amountDetails: z.any(),
                        }),
                    })
                ),
            })
        ),
    }),
    query: z.any({}),
});

export type PreconfirmGatewayRequestType = z.infer<typeof PreconfirmGatewayRequest>;

export interface PreconfirmGatewayAPIStandardResponse {
    success: boolean;
    identifier: string;
    data: {
        reference: string;
        currency: string;
        amount: number;
        status: BookingStatusType;
        cancellationDetail: {
            freeCancellation: {
                type: "CANCEL.CONDITIONAL" | "NON.REFUNDABLE" | "FREE.CANCELLATION";
                note: string;
            };
            cancelBefore: string | null;
        };
        gatewayResponse: any;
    };
}

export function ValidatePreconfirmGateway(
    req: PreconfirmGatewayRequestType,
    res: Response<PreconfirmGatewayAPIStandardResponse | ResponseError>,
    next: NextFunction
) {
    try {
        req = PreconfirmGatewayRequest.parse(req);
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
        return res.status(HttpStatusCode.BadRequest).json(new ResponseError({ code: HttpStatusCode.BadRequest, message: "Unknown error" }));
    }
}
