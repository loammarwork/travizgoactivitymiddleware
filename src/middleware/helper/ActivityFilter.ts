import { TargetSegmentType } from "./segmentMapper";

export const ActivityFilter: Record<string, TargetSegmentType[]> = {
    ["Attraction & Tickets"]: ["Theme parks & Water parks", "Museums & Galleries", "Zoo & Farms", "Musical theatre"],
    ["Tour"]: [
        "Full-day tours",
        "Muti-day tours",
        "Nature & Wildlife Tours",
        "Heritage & Cultural tours",
        "Cruises, sailing & Water tours",
    ],
    ["Food & Drink"]: ["Dinner Cruises"],
};
