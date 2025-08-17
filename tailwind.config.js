/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#B87D4B'
      },
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia']
      }
    },
  },
  plugins: [],
}
