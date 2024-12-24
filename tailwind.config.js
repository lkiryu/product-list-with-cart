/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '820px' },
      'sm': { 'max': '640px' },
    },
    extend: {
      colors: {
        orange_red: "hsl(14, 86%, 42%)",
        light_green: "hsl(159, 69%, 38%)",
        very_light_rose: "hsl(20, 50%, 98%)",
        light_rose: "hsl(13, 31%, 94%)",
        medium_rose: "hsl(14, 25%, 72%)",
        rose: "hsl(7, 20%, 60%)",
        dark_rose: "hsl(12, 20%, 44%)",
        very_dark_rose: "hsl(14, 65%, 9%)"
      },
      fontFamily: {
        red_hat_text: ["Red Hat Text", "serif"]
      }
    },
  },
  plugins: [],
}

