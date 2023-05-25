/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#2b2b26',
        cinnabar: {
          DEFAULT: '#E94F37',
          50: '#FBE1DC',
          100: '#F9D0CA',
          200: '#F5B0A5',
          300: '#F19081',
          400: '#ED6F5C',
          500: '#E94F37',
          600: '#D13017',
          700: '#9E2411',
          800: '#6C190C',
          900: '#390D06',
          950: '#200704',
        },
        downy: {
          DEFAULT: '#69C9B6',
          50: '#F0FAF8',
          100: '#E1F4F0',
          200: '#C3E9E2',
          300: '#A5DFD3',
          400: '#87D4C5',
          500: '#69C9B6',
          600: '#42B8A0',
          700: '#338F7C',
          800: '#246558',
          900: '#163C34',
          950: '#0E2722',
        },
      },
      fontFamily: {
        sans: ['Instrument Sans', 'ui-sans-serif'],
        serif: ['Playfair', 'ui-serif'],
      },
    },
  },
  plugins: [],
};
