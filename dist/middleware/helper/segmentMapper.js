"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentMapper = exports.TargetSegment = void 0;
exports.TargetSegment = {
    AttractionAndTicket: "Attractions & Tickets",
    TourAndSightSeeing: "Tours & Sightseeing",
    FoodAndDrink: "Food & Drink",
    RelaxSpaAndBeauty: "Relax Spa & Beauty",
    Transport: "Transport",
    Health: "Health",
    WifiAndSimCard: "Wifi & Sim card",
    ThemeParksAndWaterParks: "Theme parks & Water parks",
    MuseumsAndGalleries: "Museums & Galleries",
    ZooAndFarms: "Zoo & Farms",
    MusicalTheatre: "Musical theatre",
    Tour: "Tour",
    FullDayTour: "Full-day tours",
    MultiDayTour: "Muti-day tours",
    NatureAndWildlifeTours: "Nature & Wildlife Tours",
    HeritageAndCulturalTours: "Heritage & Cultural tours",
    CruisesSailingAndWaterTours: "Cruises, sailing & Water tours",
    RestaurantAndDiningVouchers: "Restaurant & Dining Vouchers",
    DinnerCruises: "Dinner Cruises",
    D0_3_Hours: "0 - 3 Hours",
    D3_5_Hours: "3 - 5 Hours",
    D5_7_Hours: "5 - 7 Hours",
    D1_3_Days: "1 - 3 Days",
    More_3_Days: "3+ Days",
    Other: "Other",
};
exports.SegmentMapper = {
    //GlobalTix
    ["Attraction"]: ["Attractions & Tickets"],
    //HotelBed
    ["City tours"]: [
        "Tour",
        "Tours & Sightseeing",
        "Full-day tours",
        "Muti-day tours",
        "Nature & Wildlife Tours",
        "Heritage & Cultural tours",
    ],
    ["Amusement Parks"]: ["Theme parks & Water parks", "Theme parks & Water parks"],
    ["Tickets & Attraction Passes"]: ["Attractions & Tickets"],
    ["Art & culture"]: ["Museums & Galleries", "Musical theatre"],
    ["Shows, sports and special events"]: ["Musical theatre"],
    ["Gastronomy & nightlife"]: ["Dinner Cruises", "Cruises, sailing & Water tours"],
    ["Outdoor activities & Adventure"]: ["Attractions & Tickets", "Zoo & Farms", "Cruises, sailing & Water tours"],
    ["Day Trips & Excursions"]: ["Attractions & Tickets", "Full-day tours", "Zoo & Farms"],
    ["Zoo, Aquarium & Nature"]: ["Attractions & Tickets", "Zoo & Farms"],
    ["Classes"]: ["Other"],
    ["Spa & Wellness"]: ["Health", "Relax Spa & Beauty"],
    ["Transport & Rentals"]: ["Transport"],
    ["Air, Helicopter & Balloon Tours"]: ["Other"],
    ["Cruise & Water Tours"]: ["Dinner Cruises", "Cruises, sailing & Water tours", "Cruises, sailing & Water tours"],
    ["Travel Services"]: ["Wifi & Sim card"],
    ["Tour & activities"]: ["Tours & Sightseeing", "Attractions & Tickets"],
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
    ["Collection"]: ["Other", "Museums & Galleries"],
    ["Culture & Sights"]: ["Nature & Wildlife Tours", "Other"],
    ["Nature"]: ["Nature & Wildlife Tours"],
    ["Time Out"]: ["Other"],
    ["Entertainment"]: ["Other"],
    ["Food & Drink"]: ["Food & Drink"],
    ["Activities"]: [
        "Attractions & Tickets",
        "Relax Spa & Beauty",
        "Tour",
        "Tours & Sightseeing",
        "Zoo & Farms",
        "Restaurant & Dining Vouchers",
        "Heritage & Cultural tours",
        "Cruises, sailing & Water tours",
        "Musical theatre",
    ],
    ["Ocean College"]: ["Other"],
    ["MyMagic+"]: ["Other"],
    ["Theme Park"]: ["Theme parks & Water parks"],
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
    ["Mini cruises"]: ["Cruises, sailing & Water tours", "Dinner Cruises", "Cruises, sailing & Water tours"],
    ["City Break"]: ["Other"],
    ["Sun and Beach"]: ["Other"],
    ["Cultural tours"]: ["Tour", "Tours & Sightseeing", "Museums & Galleries", "Heritage & Cultural tours"],
    ["Pilgrimage / Religion"]: ["Other"],
    ["Gastronomy tours"]: ["Tour", "Tours & Sightseeing"],
    ["Safari, 4x4, quad"]: ["Other"],
    ["Ski, snow"]: ["Other"],
    ["Trekking"]: ["Other"],
    ["Adventure"]: ["Attractions & Tickets", "Zoo & Farms"],
    ["Nature and wildlife"]: ["Nature & Wildlife Tours"],
    ["Motorcycle tours"]: ["Other"],
    ["Mountain biking"]: ["Other"],
    ["Cycling"]: ["Other"],
    ["Golf"]: ["Other"],
    ["Multisport"]: ["Other"],
    ["Spa and Wellness"]: ["Health", "Relax Spa & Beauty"],
    ["Educational tours"]: ["Tour"],
    ["Rail tours"]: ["Other"],
    ["2-3 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours", "1 - 3 Days"],
    ["4-7 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours", "3+ Days"],
    ["8-14 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours", "3+ Days"],
    ["15-21 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours", "3+ Days"],
    ["More than 21 days"]: ["Tour", "Tours & Sightseeing", "Muti-day tours", "3+ Days"],
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
    ["Historical"]: ["Attractions & Tickets", "Heritage & Cultural tours"],
    ["Museum/Gallery"]: ["Museums & Galleries", "Attractions & Tickets"],
    ["Park Nature & Animals"]: ["Zoo & Farms", "Attractions & Tickets"],
    ["Theme & Water Park"]: ["Theme parks & Water parks"],
    ["Observation"]: ["Other"],
    ["City tour"]: ["Tours & Sightseeing", "Tour"],
    ["Cruise"]: ["Tours & Sightseeing", "Dinner Cruises", "Cruises, sailing & Water tours"],
    ["Day Trips"]: ["Full-day tours", "Tours & Sightseeing"],
    ["Island Tours"]: ["Tour", "Tours & Sightseeing"],
    ["Private Tours"]: ["Tour", "Tours & Sightseeing"],
    ["Sightseeing"]: ["Tour", "Tours & Sightseeing"],
    ["Water Activities"]: ["Tours & Sightseeing", "Cruises, sailing & Water tours", "Dinner Cruises", "Theme parks & Water parks"],
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
    ["0 - 3 hours"]: ["0 - 3 Hours"],
    ["3 - 5 hours"]: ["3 - 5 Hours"],
    ["5 - 7 hours"]: ["5 - 7 Hours"],
    ["1 to 3 days"]: ["1 - 3 Days"],
    ["3+ days"]: ["3+ Days"],
    ["Morning ( 6.00 - 12.00)"]: ["Other"],
    ["Afternoon (12.00 - 17.00)"]: ["Other"],
    ["Evening (17.00 - 24.00)"]: ["Other"],
    ["Adults (Ages 12 or Above)"]: ["Other"],
    ["Children (Ages 3–11 years)"]: ["Other"],
    ["Senior (Ages 60 years or Above)"]: ["Other"],
    ["Thai Residence Only"]: ["Other"],
};
//# sourceMappingURL=segmentMapper.js.map