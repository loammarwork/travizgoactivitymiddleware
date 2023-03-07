import * as z from "zod";
import { ZodError } from "zod";
import { Response, NextFunction } from "express";
import { HttpStatusCode } from "axios";
import { ResponseError, ResponseSuccess } from "../helper/ResponseTranslator";
import { ImageSizeType } from "../types/ImageSize";

const DetailGatewayRequest = z.object({
    params: z.any({}),
    headers: z.any({}),
    body: z.object({
        activityId: z.string(),
        from: z.string(),
        to: z.string(),
        language: z.string(),
    }),
    query: z.any({}),
});

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

interface ExtraData {
    code: string;
    text: string;
    required: boolean;
}

interface Package {
    extraDatas: ExtraData[];
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

export function ValidateDetailGateway(
    req: DetailGatewayRequestType,
    res: Response<DetailGatewayAPIStandardResponse | ResponseError>,
    next: NextFunction
) {
    try {
        req = DetailGatewayRequest.parse(req);
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
