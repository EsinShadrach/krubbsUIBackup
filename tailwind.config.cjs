/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "index.html"],
  theme: {
    extend: {
      boxShadow: {
        buttonShadow: '2px 2px 4px rgba(41, 45, 50, 0.15)'
      },
      colors: {
        bluee: "#1C234A",
        linkBlue: "#1C234A",
        krubbsBlue: "#2196f3",
        review: "#F2F3F4CC",
        cardAsh: "#F5F5F6",
        krubbsYellow: "#FFE438"
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1220px",
        xxl: "1400px",
      },
      fontFamily: {
        gilmerBold: ["GilmerBold", "sans-serif"],
        gilmerHeavy: ["GilmerHeavy", "sans-serif"],
        gilmerLight: ["GilmerLight", "sans-serif"],
        gilmerMedium: ["GilmerMedium", "sans-serif"],
        gilmerOutline: ["GilmerOutline", "sans-serif"],
        gilmerRegular: ["GilmerRegular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
