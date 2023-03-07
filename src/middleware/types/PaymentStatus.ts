export const PaymentStatus = {
    PENDING: "PENDING",
    WAITING_PAYMENT: "WAITING_PAYMENT",
    FAILED: "FAILED",
    CONFIRMED: "CONFIRMED",
} as const;

export type PaymentStatusType = typeof PaymentStatus[keyof typeof PaymentStatus];
