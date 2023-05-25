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
        'gray-primary': '#1f1f21',
        'gray-secondary': '#8C8B8E',
        'gray-tertiary': '#48484A',
        primary: {
          DEFAULT: '#5100FF',
          50: '#C1BDEF',
          100: '#B1ADEB',
          200: '#928CE4',
          300: '#726BDC',
          400: '#534AD4',
          500: '#392FC6',
          600: '#2C2499',
          700: '#1F196B',
          800: '#120F3E',
          900: '#050411',
          950: '#000000',
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
