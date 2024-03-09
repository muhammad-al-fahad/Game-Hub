/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '475px',      
        'xs': '350px',
        '2xs': '280px'
      }
    },
  },
  plugins: [ 
    require('@tailwindcss/forms')({
      strategy: 'className',
    }),
  ],
}