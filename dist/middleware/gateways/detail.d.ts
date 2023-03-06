import * as z from "zod";
import { Response, NextFunction } from "express";
import { ResponseError } from "../helper/ResponseTranslator";
declare const DetailGatewayRequest: z.ZodObject<{
    params: z.ZodAny;
    headers: z.ZodAny;
    body: z.ZodObject<{
        activityId: z.ZodString;
        from: z.ZodString;
        to: z.ZodString;
        language: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        language: string;
        from: string;
        to: string;
        activityId: string;
    }, {
        language: string;
        from: string;
        to: string;
        activityId: string;
    }>;
    query: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    body: {
        language: string;
        from: string;
        to: string;
        activityId: string;
    };
    params?: any;
    headers?: any;
    query?: any;
}, {
    body: {
        language: string;
        from: string;
        to: string;
        activityId: string;
    };
    params?: any;
    headers?: any;
    query?: any;
}>;
export type DetailGatewayRequestType = z.infer<typeof DetailGatewayRequest>;
export interface DetailGatewayAPIStandardResponse {
    success: boolean;
    identifier: string;
    data: Data;
}
export interface Data {
    activityId: string;
    activityName: string;
    activityType: string;
    location: Location;
    currency: string;
    termsAndConditions: any[];
    freeCancellation: boolean;
    activityDetails: ActivityDetail[];
    geoLocation: any;
    images: Image[];
    isOpenDated: boolean;
    isBestSeller: boolean;
    amountFrom: AmountFrom;
    packages: Package[];
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
export interface ActivityDetail {
    title: string;
    key: string;
    content: string[];
}
export interface Image {
    imageType: string;
    urls: Url[];
}
export interface Url {
    imageSize: string;
    resource: string;
}
export interface AmountFrom {
    amount: number;
    nettAmount: number;
    boxOfficeAmount: number;
}
export interface Package {
    packageId: string;
    packageName: string;
    packageDetails: PackageDetail[];
    amountsFrom: AmountsFrom[];
    ticketValidity: any;
    duration: number;
    opened: any;
    isFavorite: boolean;
    redeemStart: any;
    redeemEnd: any;
    operationDates: OperationDate[];
}
export interface PackageDetail {
    title: string;
    key: string;
    content: string[];
}
export interface AmountsFrom {
    priceName: string;
    amount: number;
    nettAmount: number;
    boxOfficeAmount: number;
    amountDetails: AmountDetails;
}
export interface AmountDetails {
    paxType: string;
    ageFrom: number;
    ageTo: number;
}
export interface OperationDate {
    date: string;
    day: string;
    operationDetails: OperationDetail[];
    targetMarket: any[];
    amountFrom: AmountFrom2;
}
export interface OperationDetail {
    showTime: string;
    allotment: Allotment;
    sellOnTime: any;
    paxAmounts: PaxAmount[];
    requiredTargets: any[];
    resourceData: ResourceData;
}
export interface Allotment {
    remaining: string;
    limit: string;
}
export interface PaxAmount {
    paxType: string;
    amount: number;
    requiredTarget: any;
    targetMarkets: any[];
    nettAmount: number;
    boxOfficeAmount: number;
    minPurchaseQty: any;
    maxPurchaseQty: any;
    remaining: string;
    amountDetails: AmountDetails2;
}
export interface AmountDetails2 {
    paxType: string;
    ageFrom: number;
    ageTo: number;
}
export interface ResourceData {
    rateKey: string;
    cancellationPolicy: CancellationPolicy;
}
export interface CancellationPolicy {
    cancelBefore: string;
    freeCancellation: boolean;
}
export interface AmountFrom2 {
    paxType: string;
    amount: number;
    nettAmount: number;
    boxOfficeAmount: number;
    minPurchaseQty: any;
    maxPurchaseQty: any;
    remaining: string;
    amountDetails: AmountDetails3;
}
export interface AmountDetails3 {
    paxType: string;
    ageFrom: number;
    ageTo: number;
}
export declare function ValidateDetailGateway(req: DetailGatewayRequestType, res: Response<DetailGatewayAPIStandardResponse | ResponseError>, next: NextFunction): Response<ResponseError | DetailGatewayAPIStandardResponse, Record<string, any>> | undefined;
export {};
