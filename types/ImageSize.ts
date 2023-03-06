const ImageSize = {
    SMALL: "SMALL",
    MEDIUM: "MEDIUM",
    LARGE: "LARGE",
} as const;

export type ImageSizeType = typeof ImageSize[keyof typeof ImageSize];
