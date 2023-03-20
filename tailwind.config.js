/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'Sono': ['"Sono"', 'sans-serif'],
        'Lora': ['"Lora"', 'sans-serif'],
        'Roboto': ['"Roboto Slab", serif']
      },
    },
  },
  plugins: [],
}