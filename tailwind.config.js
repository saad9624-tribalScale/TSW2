module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      custom1: ["Montserrat"],
      custom: ["EB Garamond"],
    },
  },
  fontFamily: {
    body: ["Montserrat"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
