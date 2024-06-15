/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      xs: "480px",
      // => @media (min-width: 640px) { ... }

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
        Brand1: "#1A1A2E", //RGB: (26, 26, 46)
        Brand2: "#232931", //RGB: (35, 41, 49)
        Brand3: "#0F52BA", //RGB: (15, 82, 186)
        Brand4: "#39FF14", //RGB: (57, 255, 20)
        Brand5: "#EAEAEA", //RGB: (234, 234, 234)
        Brand6: "#000000", //RGB: (0, 0, 0)
      },
    },
  },
  plugins: [],
};
