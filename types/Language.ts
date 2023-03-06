const Language = {
    th: "th",
    en: "en",
} as const;

export type LanguageType = typeof Language[keyof typeof Language];
