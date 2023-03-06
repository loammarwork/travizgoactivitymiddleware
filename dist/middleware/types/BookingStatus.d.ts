export declare const BookingStatus: {
    readonly PRECONFIRMED: "PRECONFIRMED";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELED: "CANCELED";
    readonly FAILED: "FAILED";
};
export type BookingStatusType = typeof BookingStatus[keyof typeof BookingStatus];
