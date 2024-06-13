/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "brown-100": "hsl(15,25%,80%)",
        "brown-200": "hsl(15,25%,65%)",
        "brown-500": "hsl(15,60%,60%)",
        "brown-900": "#1c1817",
      },
      fontFamily: {
        alegreya: ["Alegreya", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
