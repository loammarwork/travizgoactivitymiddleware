const SearchGlobalMapping = {
    // Global Tix
    keyword: "keyword",
    category: "category",
    place: "place",
    price: "price",
    duration: "duration",
    priceFrom: "priceFrom",
    priceTo: "priceTo",
};

type SearchMapperType = keyof typeof SearchGlobalMapping;
export type SearchMapperTypeRecord = Record<SearchMapperType, string>;
