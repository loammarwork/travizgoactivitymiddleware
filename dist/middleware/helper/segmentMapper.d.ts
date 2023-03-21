export declare const TargetSegment: {
    readonly AttractionAndTicket: "Attractions & Tickets";
    readonly TourAndSightSeeing: "Tours & Sightseeing";
    readonly FoodAndDrink: "Food & Drink";
    readonly RelaxSpaAndBeauty: "Relax Spa & Beauty";
    readonly Transport: "Transport";
    readonly Health: "Health";
    readonly WifiAndSimCard: "Wifi & Sim card";
    readonly ThemeParksAndWaterParks: "Theme parks & Water parks";
    readonly MuseumsAndGalleries: "Museums & Galleries";
    readonly ZooAndFarms: "Zoo & Farms";
    readonly MusicalTheatre: "Musical theatre";
    readonly Tour: "Tour";
    readonly FullDayTour: "Full-day tours";
    readonly MultiDayTour: "Muti-day tours";
    readonly NatureAndWildlifeTours: "Nature & Wildlife Tours";
    readonly HeritageAndCulturalTours: "Heritage & Cultural tours";
    readonly CruisesSailingAndWaterTours: "Cruises, sailing & Water tours";
    readonly RestaurantAndDiningVouchers: "Restaurant & Dining Vouchers";
    readonly DinnerCruises: "Dinner Cruises";
    readonly D0_3_Hours: "0 - 3 Hours";
    readonly D3_5_Hours: "3 - 5 Hours";
    readonly D5_7_Hours: "5 - 7 Hours";
    readonly D1_3_Days: "1 - 3 Days";
    readonly More_3_Days: "3+ Days";
    readonly Other: "Other";
    readonly SportActivities: "Sport Activities";
    readonly WorkShopActivities: "Workshop Activities";
};
export type ERPMapperType = keyof typeof TargetSegment;
export type ERPMapperValue = typeof TargetSegment[keyof typeof TargetSegment];
export type ERPMapperTypeRecord = Record<ERPMapperValue, ERPMapperType>;
export declare const ERPCategoryMapperCode: ERPMapperTypeRecord;
/**
 *  ["0 - 3 hours"]: ["Other"],
    ["3 - 5 hours"]: ["Other"],
    ["5 - 7 hours"]: ["Other"],
    ["1 to 3 days"]: ["Other"],
    ["3+ days"]: ["Other"],
 *
 */
export type TargetSegmentType = typeof TargetSegment[keyof typeof TargetSegment];
export type SegmentMapperTypeRecord<T> = Record<string, T>;
export declare const SegmentMapper: SegmentMapperTypeRecord<Array<TargetSegmentType>>;
export type SegmentMapperType = keyof typeof SegmentMapper;
