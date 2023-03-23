declare const SearchMapper: {
    keyword: string;
    category: string;
    place: string;
    price: string;
    duration: string;
    priceFrom: string;
    priceTo: string;
};
type SearchMapperType = keyof typeof SearchMapper;
export type SearchMapperTypeRecord = Record<SearchMapperType, string>;
export {};
