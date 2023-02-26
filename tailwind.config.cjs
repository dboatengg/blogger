/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "500px" },
      md: { max: "768px" },
    },
    extend: {},
  },
  plugins: [],
};
