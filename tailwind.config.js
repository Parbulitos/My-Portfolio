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
      colors:{
        'custom-black' : '#06070E',
        'custom-purple' : '#8C4F9A',
        'custom-lila' : '#C69AD0',
      },
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    fontFamily: {
      'mukta': ['Mukta'],
      'bebas': ['"Bebas Neue"'],
      'barlow': ['"Barlow Condensed"'],
      'ubuntuMono': ['"Ubuntu Mono"'],
      'barlowCondensed': ['"Barlow Condensed"'],
      'mono': ['JetBrains Mono', 'monospace']
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated'),
  ],
}

