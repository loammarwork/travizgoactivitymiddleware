import * as z from "zod";
import { ZodError } from "zod";
import { Response, NextFunction } from "express";
import { HttpStatusCode } from "axios";
import { ResponseError, ResponseSuccess } from "../helper/ResponseTranslator";
import { ImageSizeType } from "../types/ImageSize";

const SearchGatewayRequest = z.object({
    params: z.any({}),
    headers: z.any({}),
    body: z.object({
        keyword: z.string(),
        from: z.string(),
        to: z.string(),
        language: z.string(),
        pagination: z.object({
            itemsPerPage: z.number(),
            page: z.number(),
        }),
    }),
    query: z.any({}),
});

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
    freeCancellation: boolean;
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

export function ValidateSearchGateway(
    req: SearchGatewayRequestType,
    res: Response<SearchGatewayAPIStandardResponse | ResponseError>,
    next: NextFunction
) {
    try {
        req = SearchGatewayRequest.parse(req);
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
