const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      blue: '#162A41',
      bluetext: '#263048',
      darktext: '#2A2C30',
      border: '#D3DEE8',
      grey: '#F8F8FB',
      lightblue: '#EEF7FF',
      textgrey: '#7B7B7B',
      mask: 'rgba(42, 44, 48, 0.7)',
      linkblue: '#2F80ED',
      button1: '#DD4B39',
      button2: '#3B5999',
      backgrundblue: '#25517A',
    },
    fontFamily: {
      roboto: ['Open Sans', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
