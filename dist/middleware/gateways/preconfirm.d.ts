import * as z from "zod";
import { Response, NextFunction } from "express";
import { ResponseError } from "../helper/ResponseTranslator";
import { BookingStatusType } from "../types/BookingStatus";
declare const PreconfirmGatewayRequest: z.ZodObject<{
    params: z.ZodAny;
    headers: z.ZodAny;
    body: z.ZodObject<{
        bookingHolder: z.ZodObject<{
            name: z.ZodString;
            surname: z.ZodString;
            title: z.ZodString;
            email: z.ZodString;
            address: z.ZodString;
            zipCode: z.ZodString;
            phones: z.ZodArray<z.ZodString, "many">;
            nationality: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            address: string;
            name: string;
            title: string;
            email: string;
            surname: string;
            zipCode: string;
            phones: string[];
            nationality: string;
        }, {
            address: string;
            name: string;
            title: string;
            email: string;
            surname: string;
            zipCode: string;
            phones: string[];
            nationality: string;
        }>;
        activities: z.ZodArray<z.ZodObject<{
            serviceDate: z.ZodString;
            activityDetail: z.ZodObject<{
                rateKey: z.ZodString;
                showTime: z.ZodUnion<[z.ZodString, z.ZodNull]>;
            }, "strip", z.ZodTypeAny, {
                rateKey: string;
                showTime: string | null;
            }, {
                rateKey: string;
                showTime: string | null;
            }>;
            paxes: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                surname: z.ZodString;
                title: z.ZodString;
                email: z.ZodString;
                phoneNo: z.ZodString;
                nationality: z.ZodString;
                paxAmount: z.ZodObject<{
                    paxType: z.ZodString;
                    amount: z.ZodNumber;
                    nettAmount: z.ZodNumber;
                    boxOfficeAmount: z.ZodNumber;
                    minPurchaseQty: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
                    maxPurchaseQty: z.ZodUnion<[z.ZodNumber, z.ZodNull]>;
                    amountDetails: z.ZodAny;
                }, "strip", z.ZodTypeAny, {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                }, {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                }>;
            }, "strip", z.ZodTypeAny, {
                name: string;
                title: string;
                email: string;
                surname: string;
                nationality: string;
                phoneNo: string;
                paxAmount: {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                };
            }, {
                name: string;
                title: string;
                email: string;
                surname: string;
                nationality: string;
                phoneNo: string;
                paxAmount: {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                };
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            serviceDate: string;
            activityDetail: {
                rateKey: string;
                showTime: string | null;
            };
            paxes: {
                name: string;
                title: string;
                email: string;
                surname: string;
                nationality: string;
                phoneNo: string;
                paxAmount: {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                };
            }[];
        }, {
            serviceDate: string;
            activityDetail: {
                rateKey: string;
                showTime: string | null;
            };
            paxes: {
                name: string;
                title: string;
                email: string;
                surname: string;
                nationality: string;
                phoneNo: string;
                paxAmount: {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                };
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        bookingHolder: {
            address: string;
            name: string;
            title: string;
            email: string;
            surname: string;
            zipCode: string;
            phones: string[];
            nationality: string;
        };
        activities: {
            serviceDate: string;
            activityDetail: {
                rateKey: string;
                showTime: string | null;
            };
            paxes: {
                name: string;
                title: string;
                email: string;
                surname: string;
                nationality: string;
                phoneNo: string;
                paxAmount: {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                };
            }[];
        }[];
    }, {
        bookingHolder: {
            address: string;
            name: string;
            title: string;
            email: string;
            surname: string;
            zipCode: string;
            phones: string[];
            nationality: string;
        };
        activities: {
            serviceDate: string;
            activityDetail: {
                rateKey: string;
                showTime: string | null;
            };
            paxes: {
                name: string;
                title: string;
                email: string;
                surname: string;
                nationality: string;
                phoneNo: string;
                paxAmount: {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                };
            }[];
        }[];
    }>;
    query: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    body: {
        bookingHolder: {
            address: string;
            name: string;
            title: string;
            email: string;
            surname: string;
            zipCode: string;
            phones: string[];
            nationality: string;
        };
        activities: {
            serviceDate: string;
            activityDetail: {
                rateKey: string;
                showTime: string | null;
            };
            paxes: {
                name: string;
                title: string;
                email: string;
                surname: string;
                nationality: string;
                phoneNo: string;
                paxAmount: {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                };
            }[];
        }[];
    };
    params?: any;
    headers?: any;
    query?: any;
}, {
    body: {
        bookingHolder: {
            address: string;
            name: string;
            title: string;
            email: string;
            surname: string;
            zipCode: string;
            phones: string[];
            nationality: string;
        };
        activities: {
            serviceDate: string;
            activityDetail: {
                rateKey: string;
                showTime: string | null;
            };
            paxes: {
                name: string;
                title: string;
                email: string;
                surname: string;
                nationality: string;
                phoneNo: string;
                paxAmount: {
                    paxType: string;
                    amount: number;
                    nettAmount: number;
                    boxOfficeAmount: number;
                    minPurchaseQty: number | null;
                    maxPurchaseQty: number | null;
                    amountDetails?: any;
                };
            }[];
        }[];
    };
    params?: any;
    headers?: any;
    query?: any;
}>;
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
            freeCancellation: boolean;
            cancelBefore: string | null;
        };
        gatewayResponse: any;
    };
}
export declare function ValidatePreconfirmGateway(req: PreconfirmGatewayRequestType, res: Response<PreconfirmGatewayAPIStandardResponse | ResponseError>, next: NextFunction): Response<ResponseError | PreconfirmGatewayAPIStandardResponse, Record<string, any>> | undefined;
export {};
