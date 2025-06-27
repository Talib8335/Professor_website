/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgLight: "#F9FAFB",
        bgDark: "#111827",
        textLight: "#1F2937",
        textDark: "#D1D5DB",
        teal: "#60A5FA",
        purple: "#A78BFA",
        "teal-dark": "#3B82F6",
        "purple-dark": "#8B5CF6",
      },
      fontFamily: {
        serifHeading: ['"Grenze Gotisch"', "serif"],
        bodyFont: ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

