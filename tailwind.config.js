/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        home_bg: "#EFEFEF",
        welcome_bg: "#192A36",
        welcome_text: "#E5E5E5",
        accent: "#87FA4A",
      },
      fontFamily: {
        mont: "Montserrat Alternates",
      },
    },
  },
  plugins: [],
};
