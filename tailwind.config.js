/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: { 
    extend: {
      fontFamily: {
        'Inter': ['"Inter"'],
      },
      colors: {
        backround_light: '#fff',
        text_light: '#fff',
        background_special: '#ff4500',
        backround_dark: '#262626',
        text_dark: '#262626',
        text_special: '#ff4500',
        shadow_colour: '#555',
      },
    },
  },
  plugins: [],
}