module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        pink: "2px solid #FF00E4",
      },
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
