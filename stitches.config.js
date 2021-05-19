import { createCss } from "@stitches/react";

export const { styled, getCssString, global } = createCss({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      gray000: "#FFFFFF",
      gray100: "#e9e9e9",
      gray200: "#d9d9d9",
      gray300: "#c4c4c4",
      gray400: "#9d9d9d",
      gray500: "#7b7b7b",
      gray600: "#555555",
      gray700: "#434343",
      gray800: "#262626",
      gray900: "#101010",
      gray1000: "#000000",
    },
    space: {
      xSmall: "4px",
      small: "8px",
      medium: "16px",
      large: "32px",
      xLarge: "64px",
      xXLarge: "128px",
    },
  },
  media: {
    small: "(min-width: 640px)",
    medium: "(min-width: 768px)",
    lessThanLarge: "(max-width: 1024px)",
    large: "(min-width: 1024px)",
    xLarge: "(min-width: 1200px)",
    xXLarge: "(min-width: 1536px)",
  },
});

export const globalStyles = global({
  "@font-face": [
    {
      fontFamily: "Suisse",
      src: `url("fonts/Suisse/SuisseIntl-Regular-WebS.woff2") format("woff2"),
            url("fonts/Suisse/SuisseIntl-Regular-WebS.woff") format("woff"),
            url("fonts/Suisse/SuisseIntl-Regular-WebS.ttf")  format("truetype")`,
      fontStyle: "normal",
      fontWeight: 400,
    },
  ],
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "$gray1000",
    fontFamily: "Suisse",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
});
