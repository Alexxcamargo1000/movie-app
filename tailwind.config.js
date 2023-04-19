/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#16181E',
        'blue-800': '#21242D',
        'blue-100': '#00B9AE',

        'zinc-100': '#F9F9F9',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}
