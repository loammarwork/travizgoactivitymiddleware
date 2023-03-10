export const BookingStatus = {
    PRECONFIRMED: "PRECONFIRMED",
    CONFIRMED: "CONFIRMED",
    CANCELED: "CANCELED",
    FAILED: "FAILED",
} as const;

export type BookingStatusType = typeof BookingStatus[keyof typeof BookingStatus];
