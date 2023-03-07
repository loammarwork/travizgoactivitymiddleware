export const PaymentStatus = {
    PRECONFIRMED: "PRECONFIRMED",
    CONFIRMED: "CONFIRMED",
    CANCELED: "CANCELED",
    FAILED: "FAILED",
} as const;

export type PaymentStatusType = typeof PaymentStatus[keyof typeof PaymentStatus];
