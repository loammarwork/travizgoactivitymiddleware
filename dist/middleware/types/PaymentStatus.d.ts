export declare const PaymentStatus: {
    readonly PRECONFIRMED: "PRECONFIRMED";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELED: "CANCELED";
    readonly FAILED: "FAILED";
};
export type PaymentStatusType = typeof PaymentStatus[keyof typeof PaymentStatus];
