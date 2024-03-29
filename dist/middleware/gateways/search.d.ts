import * as z from "zod";
import { Response, NextFunction } from "express";
import { ResponseError } from "../helper/ResponseTranslator";
import { ImageSizeType } from "../types/ImageSize";
declare const SearchGatewayRequest: z.ZodObject<{
    params: z.ZodAny;
    headers: z.ZodAny;
    body: z.ZodObject<{
        keyword: z.ZodString;
        from: z.ZodString;
        to: z.ZodString;
        language: z.ZodString;
        pagination: z.ZodObject<{
            itemsPerPage: z.ZodNumber;
            page: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            itemsPerPage: number;
            page: number;
        }, {
            itemsPerPage: number;
            page: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        language: string;
        from: string;
        keyword: string;
        to: string;
        pagination: {
            itemsPerPage: number;
            page: number;
        };
    }, {
        language: string;
        from: string;
        keyword: string;
        to: string;
        pagination: {
            itemsPerPage: number;
            page: number;
        };
    }>;
    query: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    body: {
        language: string;
        from: string;
        keyword: string;
        to: string;
        pagination: {
            itemsPerPage: number;
            page: number;
        };
    };
    params?: any;
    headers?: any;
    query?: any;
}, {
    body: {
        language: string;
        from: string;
        keyword: string;
        to: string;
        pagination: {
            itemsPerPage: number;
            page: number;
        };
    };
    params?: any;
    headers?: any;
    query?: any;
}>;
export type SearchGatewayRequestType = z.infer<typeof SearchGatewayRequest>;
export interface SearchGatewayAPIStandardResponse {
    success: boolean;
    identifier: string;
    data: Daum[];
    pagination: Pagination;
}
export interface Daum {
    activityId: string;
    activityName: string;
    activityType: string;
    location: Location;
    segments: Segment[];
    currency: string;
    targetMarket: any[];
    amountFrom: AmountFrom;
    images: Image[];
    freeCancellation: {
        type: "CANCEL.CONDITIONAL" | "NON.REFUNDABLE" | "FREE.CANCELLATION";
        note: string;
    };
}
export interface Location {
    country: Country;
}
export interface Country {
    name: string;
    destination: Destination;
}
export interface Destination {
    name: string;
}
export interface Segment {
    segmentName: string;
    segmentValues: string[];
}
export interface AmountFrom {
    amount: number;
    nettAmount: number;
    boxOfficeAmount: number;
}
export interface Image {
    imageType: string;
    urls: Url[];
}
export interface Url {
    imageSize: ImageSizeType;
    resource: string;
}
export interface Pagination {
    itemsPerPage: number;
    page: number;
    totalItems: number;
    itemsCount: number;
}
export declare function ValidateSearchGateway(req: SearchGatewayRequestType, res: Response<SearchGatewayAPIStandardResponse | ResponseError>, next: NextFunction): Response<ResponseError | SearchGatewayAPIStandardResponse, Record<string, any>> | undefined;
export {};
