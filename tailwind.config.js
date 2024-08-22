/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#355699",
        secondary: "#181A1B",
        gray: "#EEF1F7",
      },
      fontFamily: {
        "tt-firs-neue": ['"TT Firs Neue"', "sans-serif"],
      },
      animation: {
        vote: "vote 0.8s ease-in-out",
        vote2: "vote2 0.8s ease-in-out",
      },
      keyframes: {
        vote: {
          "0%": {
            transform: "rotate(0deg)",
            opacity: 0,
          },
          "100%": {
            transform: "rotate(180deg)",
            opacity: 1,
          },
        },
        vote2: {
          "0%": {
            transform: "rotate(0deg)",
            opacity: 0,
          },
          "100%": {
            transform: "rotate(-180deg)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
