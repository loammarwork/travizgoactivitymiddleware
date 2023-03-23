const SearchMapper = {
    // Global Tix
    keyword: "keyword",
    category: "category",
    place: "place",
    price: "price",
    duration: "duration",
    priceFrom: "priceFrom",
    priceTo: "priceTo",
};

type SearchMapperType = keyof typeof SearchMapper;
export type SearchMapperTypeRecord = Record<SearchMapperType, string>;
const SearchMapperGlobalTix: SearchMapperTypeRecord = {
    category: "category",
    keyword: "keyword",
    place: "place",
    price: "price",
    duration: "duration",
    priceFrom: "priceFrom",
    priceTo: "priceTo",
};

const SearchMapperHotelBeds: SearchMapperTypeRecord = {
    category: "category",
    keyword: "keyword",
    place: "place",
    price: "price",
    duration: "",
    priceFrom: "",
    priceTo: "",
};
