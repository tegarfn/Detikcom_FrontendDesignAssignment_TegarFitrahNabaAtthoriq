/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/pages/register.html"], 
  theme: {
    extend: {
        fontFamily: {
          montserrat: "'Montserrat', sans-serif",
        }
    },
    colors: {
      "primary": "#007CBD",
      "secondary": "#3EB7DD",
      "background": "#F4FBFF",
      "form": "#F8F8F8",
      "white": "#FFFFFF",
      "black": "#000000",
    },
  },
  plugins: [],
}

