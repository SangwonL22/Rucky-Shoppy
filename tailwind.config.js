/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#33AAFF',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.png')`,
      },
    },
  },
  plugins: [],
};
