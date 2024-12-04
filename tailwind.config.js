/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        blueCustom: "#004AAD",
        orangeCustom: "#FF6F00",
        grayLight: "#F4F4F4",
        customBlue: '#003F7D',
      },
    },
  },
}

