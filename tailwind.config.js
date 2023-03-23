/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "semi-gray": "#FAF7F7",
        "border-gray": "#A0C1AE",
        white: " #FFFFFF",
        "light-blue": "#63C5EA",
        "light-green": "#A0C1AE",
        pink: "#FA5396",
        "text-green": "#4FA3A5",
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
