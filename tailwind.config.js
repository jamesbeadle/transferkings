/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: [
    "hover:text-OpenWSLBackground",
    "hover:text-OpenFPLBackground",
    "hover:text-JeffBetsBackground",
    "hover:text-FootballGodBackground",
    "hover:text-TransferKingsBackground",
    "hover:text-BrandGrayShade6",
    "bg-OpenWSLBackground",
    "bg-OpenFPLBackground",
    "bg-JeffBetsBackground",
    "bg-FootballGodBackground",
    "bg-TransferKingsBackground",
    "bg-BrandGrayShade6",
  ],
  theme: {
    screens: {
      xxs: "420px",
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    fontSize: {
      xxs: ".625rem",
      xs: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      lg: "1.1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        BrandBlue: "#2D64E3",
        BrandDarkBlue: "#1D54D3",
        BrandGreen: "#23DC89",
        BrandGray: "#232323",
        BrandLightGray: "#5E5E5E",
        BrandWhite: "#FFFFFF",
        BrandRed: "#FF403C",
        BrandInfo: "#3CA1FF",
        BrandGrayBg: "#2F2F2F",
        BrandGrayShade1: "#484848",
        BrandGrayShade2: "#757575",
        BrandGrayShade3: "#8C8C8C",
        BrandGrayShade4: "#D1D1D1",
        BrandGrayShade5: "#E8E8E8",
        BrandGrayShade6: "#F9F9F9",
        FootballGodBackground: "#7F56F1",
        OpenFPLBackground: "#2CE3A6",
        TransferKingsBackground: "#2D64E3",
        OpenWSLBackground: "#F156D2",
        JeffBetsBackground: "#D7FE49",
        FootballGodFont: "#FFFFFF",
        OpenFPLFont: "#000000",
        TransferKingsFont: "#FFFFFF",
        OpenWSLFont: "#FFFFFF",
        JeffBetsFont: "#000000",
      },
      backgroundImage: {
        "diagonal-stripes":
          "linear-gradient(45deg, #FFD700 33.33%, #C0C0C0 33.33%, #C0C0C0 66.66%, red 66.66%)",
      },
    },
  },
  plugins: [],
};
