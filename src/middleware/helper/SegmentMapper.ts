export const TargetSegment = {
    AttractionAndTicket: "Attraction & Ticket",
    TourAndSightSeeing: "Tours & Sightseeing",
    FoodAndDrink: "Food & Drink",
    RelaxSpaAndBeauty: "Relax Spa & Beauty",
    Transport: "Transport",
    Health: "Health",
    WifiAndSimCard: "Wifi & sim card",
    ThemeParksAndWaterParks: "Theme parks & water parks",
    MuseumsAndGalleries: "Museums and Galleries",
    ZooAndFarms: "Zoo & Farms",
    MusicalTheatre: "Musical theatre",
    Tour: "Tour",
    FullDayTour: "Full-day tours",
    MultiDayTour: "Muti-day tours",
    NatureAndWildlifeTours: "Nature & Wildlife Tours",
    HeritageAndCulturalTours: "Heritage and cultural tours",
    CruisesSailingAndWaterTours: "Cruises, sailing & water tours",
    RestaurantAndDiningVouchers: "Restaurant & Dining Vouchers",
    DinnerCruises: "Dinner Cruises",
    Other: "Other",
} as const;

export type TargetSegmentType = typeof TargetSegment[keyof typeof TargetSegment];

export type SegmentMapperTypeRecord<T> = Record<string, T>;

export const SegmentMapper: SegmentMapperTypeRecord<Array<TargetSegmentType>> = {
    //HotelBed
    ["City tours"]: [
        "Tour",
        "Tours & Sightseeing",
        "Full-day tours",
        "Muti-day tours",
        "Nature & Wildlife Tours",
        "Heritage and cultural tours",
    ],
    ["Amusement Parks"]: ["Theme parks & water parks", "Theme parks & water parks"],
    ["Tickets & Attraction Passes"]: ["Attraction & Ticket"],
    ["Art & culture"]: ["Museums and Galleries", "Musical theatre"],
    ["Shows, sports and special events"]: ["Musical theatre"],
    ["Gastronomy & nightlife"]: ["Dinner Cruises", "Cruises, sailing & water tours"],
    ["Outdoor activities & Adventure"]: ["Attraction & Ticket", "Zoo & Farms", "Cruises, sailing & water tours"],
    ["Day Trips & Excursions"]: ["Attraction & Ticket", "Full-day tours", "Zoo & Farms"],
    ["Zoo, Aquarium & Nature"]: ["Attraction & Ticket", "Zoo & Farms"],
    ["Classes"]: ["Other"],
    ["Spa & Wellness"]: ["Health", "Relax Spa & Beauty"],
    ["Transport & Rentals"]: ["Transport"],
    ["Air, Helicopter & Balloon Tours"]: ["Other"],
    ["Cruise & Water Tours"]: ["Dinner Cruises", "Cruises, sailing & water tours", "Cruises, sailing & water tours"],
    ["Travel Services"]: ["Wifi & sim card"],
    ["Tour & activities"]: ["Tours & Sightseeing", "Attraction & Ticket"],
    ["Specialist tours"]: ["Other"],
    ["Bundle"]: ["Other"],
    ["Multiday"]: ["Muti-day tours", "Tour"],
    ["Flexible"]: ["Other"],
    ["Full day"]: ["Full-day tours", "Tour"],
    ["Half-day morning"]: ["Other"],
    ["Half-day afternoon"]: ["Other"],
    ["Evening"]: ["Other"],
    ["Families with kids"]: ["Other"],
    ["Adult only"]: ["Other"],
    ["Couples"]: ["Other"],
    ["Families"]: ["Other"],
    ["Senior"]: ["Other"],
    ["Youth"]: ["Other"],
    ["Shopping, markets and souks"]: ["Other"],
    ["Collection"]: ["Other", "Museums and Galleries"],
    ["Culture & Sights"]: ["Nature & Wildlife Tours", "Other"],
    ["Nature"]: ["Nature & Wildlife Tours"],
    ["Time Out"]: ["Other"],
    ["Entertainment"]: ["Other"],
    ["Food & Drink"]: ["Food & Drink"],
    ["Activities"]: [
        "Attraction & Ticket",
        "Relax Spa & Beauty",
        "Tour",
        "Tours & Sightseeing",
        "Zoo & Farms",
        "Restaurant & Dining Vouchers",
        "Heritage and cultural tours",
        "Cruises, sailing & water tours",
        "Musical theatre",
    ],
    ["Ocean College"]: ["Other"],
    ["MyMagic+"]: ["Other"],
    ["Theme Park"]: ["Theme parks & water parks"],
    ["Adult Only"]: ["Other"],
    ["Loud & Lively"]: ["Other"],
    ["Designed for Couples"]: ["Other"],
    ["Great for Groups"]: ["Other"],
    ["Perfect for Families"]: ["Other"],
    ["Easy"]: ["Other"],
    ["Moderate"]: ["Other"],
    ["Strenuous"]: ["Other"],
    ["Short"]: ["Other"],
    ["Overnight"]: ["Other"],
    ["Go out"]: ["Other"],
    ["Go local"]: ["Other"],
    ["Go active"]: ["Other"],
    ["Go relax"]: ["Other"],
    ["Go extra"]: ["Other"],
    ["Self-drive tours"]: ["Other", "Tour", "Tours & Sightseeing"],
    ["Private tours"]: ["Other", "Tour", "Tours & Sightseeing"],
    ["Seat in coach scheduled departures"]: ["Other"],
    ["Mini cruises"]: ["Cruises, sailing & water tours", "Dinner Cruises", "Cruises, sailing & water tours"],
    ["City Break"]: ["Other"],
    ["Sun and Beach"]: ["Other"],
    ["Cultural tours"]: ["Tour", "Tours & Sightseeing", "Museums and Galleries", "Heritage and cultural tours"],
    ["Pilgrimage / Religion"]: ["Other"],
    ["Gastronomy tours"]: ["Tour", "Tours & Sightseeing"],
    ["Safari, 4x4, quad"]: ["Other"],
    ["Ski, snow"]: ["Other"],
    ["Trekking"]: ["Other"],
    ["Adventure"]: ["Attraction & Ticket", "Zoo & Farms"],
    ["Nature and wildlife"]: ["Nature & Wildlife Tours"],
    ["Motorcycle tours"]: ["Other"],
    ["Mountain biking"]: ["Other"],
    ["Cycling"]: ["Other"],
    ["Golf"]: ["Other"],
    ["Multisport"]: ["Other"],
    ["Spa and Wellness"]: ["Health", "Relax Spa & Beauty"],
    ["Educational tours"]: ["Tour"],
    ["Rail tours"]: ["Other"],
    ["2-3 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours"],
    ["4-7 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours"],
    ["8-14 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours"],
    ["15-21 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours"],
    ["More than 21 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours"],
    ["Volunteers"]: ["Other"],
    ["Big Bus"]: ["Other"],
    ["City Sightseeing Worldwide"]: ["Tour", "Tours & Sightseeing"],
    ["Urban Adventures"]: ["Tour"],
    ["Context"]: ["Other"],
    ["Gray Line"]: ["Other"],
    ["Lip Smacking Tours"]: ["Other"],
    ["Premium Tours"]: ["Tour", "Tours & Sightseeing", "Tour", "Full-day tours", "Muti-day tours"],
    ["Walks of Paris"]: ["Other"],
    ["Walks of Italy"]: ["Other"],
    ["Walks USA"]: ["Other"],
    ["Evan Evans"]: ["Other"],
    ["Key Tours"]: ["Other"],
    ["Pink Jeep"]: ["Other"],
    ["Plaza Premium Lounge"]: ["Other"],
    ["Maverick"]: ["Other"],
    ["City Wonders"]: ["Other"],
    ["Papillon"]: ["Other"],
    ["Landsea Tours"]: ["Tour"],
    ["Golden Tours – Gray Line London"]: ["Tour"],
    ["Travel Curious"]: ["Other"],
    ["Service date"]: ["Other"],
    ["Seasonal"]: ["Other"],
    ["Private"]: ["Other"],
    ["Small group"]: ["Other"],
    ["Tailor-made"]: ["Other"],
    ["Shore excursions"]: ["Other"],
    ["Skip the line-Fast track"]: ["Other"],
    ["Wheelchair accessible"]: ["Other"],
    ["Safe2Stay"]: ["Other"],

    //Extranet
    ["Historical"]: ["Attraction & Ticket", "Heritage and cultural tours"],
    ["Museum/Gallery"]: ["Museums and Galleries", "Attraction & Ticket"],
    ["Park Nature & Animals"]: ["Zoo & Farms", "Attraction & Ticket"],
    ["Theme & Water Park"]: ["Theme parks & water parks"],
    ["Observation"]: ["Other"],
    ["City tour"]: ["Tours & Sightseeing", "Tour"],
    ["Cruise"]: ["Tours & Sightseeing", "Dinner Cruises", "Cruises, sailing & water tours"],
    ["Day Trips"]: ["Full-day tours", "Tours & Sightseeing"],
    ["Island Tours"]: ["Tour", "Tours & Sightseeing"],
    ["Private Tours"]: ["Tour", "Tours & Sightseeing"],
    ["Sightseeing"]: ["Tour", "Tours & Sightseeing"],
    ["Water Activities"]: ["Tours & Sightseeing", "Cruises, sailing & water tours", "Dinner Cruises", "Theme parks & water parks"],
    ["Massage & Spa"]: ["Relax Spa & Beauty", "Health"],
    ["Salon & Beauty"]: ["Relax Spa & Beauty", "Health"],
    ["Chinese Food"]: ["Food & Drink"],
    ["Italian Food"]: ["Food & Drink"],
    ["Japanese Food"]: ["Food & Drink"],
    ["Thai Authentic Food"]: ["Food & Drink"],
    ["Dining"]: ["Food & Drink"],
    ["City tour guide"]: ["Other"],
    ["Historical tour guide"]: ["Other"],
    ["Adventure guide"]: ["Other"],
    ["0 - 3 hours"]: ["Other"],
    ["3 - 5 hours"]: ["Other"],
    ["5 - 7 hours"]: ["Other"],
    ["1 to 3 days"]: ["Other"],
    ["3+ days"]: ["Other"],
    ["Morning ( 6.00 - 12.00)"]: ["Other"],
    ["Afternoon (12.00 - 17.00)"]: ["Other"],
    ["Evening (17.00 - 24.00)"]: ["Other"],
    ["Adults (Ages 12 or Above)"]: ["Other"],
    ["Children (Ages 3–11 years)"]: ["Other"],
    ["Senior (Ages 60 years or Above)"]: ["Other"],
    ["Thai Residence Only"]: ["Other"],
};

export type SegmentMapperType = keyof typeof SegmentMapper;
