module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-pink": "#FF00E4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
