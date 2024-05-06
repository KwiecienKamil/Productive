import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pri: "#F1CC7B",
        sec: "#393E46",
        acc: "#00ADB5",
        lightGray: "#DCDCDC",
      },
      fontFamily: {
        inter: "Inter",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        lg: "0.9rem",
        xl: "1.1rem",
        "2xl": "1.363rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    themes: ["light", "dark", "emerald"],
  },
};
export default config;
