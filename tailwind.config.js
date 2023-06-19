/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e50000",
        secondary: "#de1212",
      },
      fontFamily: {
        slogan: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
