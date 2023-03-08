export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly WAITING_PAYMENT: "WAITING_PAYMENT";
    readonly FAILED: "FAILED";
    readonly CONFIRMED: "CONFIRMED";
};
export type PaymentStatusType = typeof PaymentStatus[keyof typeof PaymentStatus];
