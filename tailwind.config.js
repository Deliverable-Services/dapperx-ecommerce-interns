/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate': '#EDEEF1'
      },
      fontFamily: {
        'dscript': '"Dancing Script"',
      }
    },
  },
  plugins: [{
    'postcss-import': {},
    tailwindcss: {},
  }],
};
