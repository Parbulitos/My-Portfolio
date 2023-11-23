/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      'dark-background' : "url('./src/assets/darkBackground.jpg')",
      'galery1' : "url('./src/assets/GaleryIMG1.jpg')"
    },
    extend: {
      spacing:{
        '18': '70px'
      },
      dropShadow:{
        'dark': '0 0 10px rgba(0, 0, 0, 0.5)',
        'darker': '0 5px 10px rgba(0, 0, 0, 0.75)',
        'content': '5px 0 10px rgba(0,0,0,0.75)',
      },
      boxShadow:{
        'dark': '0 3px 10px rgba(0, 0, 0, 0.5)',
        'darker': '0 5px 10px rgba(0, 0, 0, 0.75)',
        'content': '5px 0 15px rgba(0,0,0,0.75), -5px 0 15px rgba(0,0,0,0.75)',
      },
      transitionDuration:{
        'short': '300ms',
        'medium': '450ms',
        'slow': '800ms',
      },
      scale:{
        'small': '1.01',
        'mid': '1.05',
        'big': '1.1',
      },
    },
    fontFamily: {
      'mukta': ['Mukta'],
      'bebas': ['"Bebas Neue"'],
      'barlow': ['"Barlow Condensed"'],
      'ubuntuMono': ['"Ubuntu Mono"']
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

