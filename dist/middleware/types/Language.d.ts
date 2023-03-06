declare const Language: {
    readonly th: "th";
    readonly en: "en";
};
export type LanguageType = typeof Language[keyof typeof Language];
export {};
