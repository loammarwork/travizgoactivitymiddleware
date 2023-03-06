import * as z from "zod";
import { Response, NextFunction } from "express";
import { ResponseError } from "../helper/ResponseTranslator";
import { ImageSizeType } from "../types/ImageSize";
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
interface Location {
    country: Country;
}
interface Country {
    name: string;
    destination: Destination;
}
interface Destination {
    name: string;
}
interface ActivityDetail {
    title: string;
    key: string;
    content: string[];
}
interface Image {
    imageType: string;
    urls: Url[];
}
interface Url {
    imageSize: ImageSizeType;
    resource: string;
}
interface AmountFrom {
    amount: number;
    nettAmount: number;
    boxOfficeAmount: number;
}
interface Package {
    packageId: string;
    packageName: string;
    packageDetails: PackageDetail[];
    amountsFrom: AmountsFrom[];
    ticketValidity: string | null;
    duration: number;
    opened: Opened[] | null;
    isFavorite: boolean;
    redeemStart: string | null;
    redeemEnd: string | null;
    operationDates: OperationDate[];
}
interface Opened {
    openingTime: string | null;
    closeTime: string | null;
    lastAdmissionTime: string | null;
    weekDays: string[];
}
interface PackageDetail {
    title: string;
    key: string;
    content: string[];
}
interface AmountsFrom {
    priceName: string;
    amount: number;
    nettAmount: number;
    boxOfficeAmount: number;
    amountDetails: any;
}
interface OperationDate {
    date: string;
    day: string;
    operationDetails: OperationDetail[];
    amountFrom: AmountFrom2;
}
interface OperationDetail {
    showTime: string | null;
    allotment: Allotment;
    sellOnTime: any;
    paxAmounts: PaxAmount[];
    requiredTargets: RequireTarget2[];
    resourceData: ResourceData;
}
interface RequireTarget2 {
    code: string;
    name: string;
}
interface Allotment {
    remaining: string;
    limit: string;
}
interface PaxAmount {
    paxType: string;
    amount: number;
    requiredTarget: RequireTarget2;
    targetMarkets: TargetMarket[];
    nettAmount: number;
    boxOfficeAmount: number;
    minPurchaseQty: number | null;
    maxPurchaseQty: number | null;
    remaining: string | number;
    amountDetails: any;
}
interface TargetMarket {
    name: string;
    code: string;
}
interface ResourceData {
    rateKey: string;
    cancellationPolicy: CancellationPolicy;
}
interface CancellationPolicy {
    cancelBefore: string;
    freeCancellation: boolean;
}
interface AmountFrom2 {
    paxType: string;
    amount: number;
    nettAmount: number;
    boxOfficeAmount: number;
    minPurchaseQty: number | null;
    maxPurchaseQty: number | null;
    remaining: string;
    amountDetails: any;
}
export declare function ValidateDetailGateway(req: DetailGatewayRequestType, res: Response<DetailGatewayAPIStandardResponse | ResponseError>, next: NextFunction): Response<ResponseError | DetailGatewayAPIStandardResponse, Record<string, any>> | undefined;
export {};
