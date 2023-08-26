import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "11rem",
        xl: "12rem",
        "2xl": "13rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        cursive: ["Lobster Two"],
      },
    },
  },
  plugins: [],
};

export default config;
