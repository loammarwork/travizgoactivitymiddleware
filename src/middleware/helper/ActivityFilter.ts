import { TargetSegmentType } from "./segmentMapper";

type CategoryValueType =
    | "Theme parks & Water parks"
    | "Museums & Galleries"
    | "Zoo & Farms"
    | "Musical theatre"
    | "Full-day tours"
    | "Muti-day tours"
    | "Nature & Wildlife Tours"
    | "Heritage & Cultural tours"
    | "Cruises, sailing & Water tours"
    | "Dinner Cruises";

export const ActivityFilter: { categoryTitle: TargetSegmentType; categoryName: CategoryValueType[] }[] = [
    {
        categoryTitle: "Attractions & Tickets",
        categoryName: ["Theme parks & Water parks", "Museums & Galleries", "Zoo & Farms", "Musical theatre"],
    },
    {
        categoryTitle: "Tour",
        categoryName: [
            "Full-day tours",
            "Muti-day tours",
            "Nature & Wildlife Tours",
            "Heritage & Cultural tours",
            "Cruises, sailing & Water tours",
        ],
    },
    {
        categoryTitle: "Food & Drink",
        categoryName: ["Dinner Cruises"],
    },
];
