/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "540px",
        // => @media (min-width: 540px) { ... }

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
      },
      colors: {
        primary: {
          500: "#ffd177",
          600: "#e5a932",
        },
      },
      animation: {
        openmenu: "openmenu 1s ease-in",
        closemenu: "closemenu 1s ease-in",
      },
      keyframes: {
        openmenu: {
          // initial position
          "0%": { left: "-224px" },
          // final position
          "100%": { left: "0px" },
        },
        closemenu: {
          // initial position
          "0%": { left: "0px" },
          // final position
          "100%": { left: "-224px" },
        },
      },
    },
  },
  plugins: [],
};
