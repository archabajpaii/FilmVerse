/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.1)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [ require('tailwindcss-textshadow')],
}

