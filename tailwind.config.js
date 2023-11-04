/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      'dark-background' : "url('./src/assets/darkBackground.jpg')",
    },
    extend: {
      spacing:{
        '18': '70px'
      },
      dropShadow:{
        'dark': '0 0 10px rgba(0, 0, 0, 0.5)',
        'darker': '0 5px 10px rgba(0, 0, 0, 0.75)',
      },
      boxShadow:{
        'dark': '0 3px 10px rgba(0, 0, 0, 0.5)',
        'darker': '0 5px 10px rgba(0, 0, 0, 0.75)',
      },
      transitionDuration:{
        'short': '300ms',
        'medium': '450ms',
        'slow': '800ms',
      },
      scale:{
        'small': '1.03',
        'mid': '1.1',
        'big': '1.2',
      }
    },
    fontFamily: {
      'mukta': ['Mukta'],
      'bebas': ['"Bebas Neue"'],
      'barlow': ['"Barlow Condensed"']
    },
  },
  plugins: [],
}

