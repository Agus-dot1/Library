/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

