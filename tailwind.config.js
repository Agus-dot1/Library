/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['DM Serif Display', 'serif'],
      },
      animation: {
        'bounce-left': 'bounceLeft 1s infinite ease-in-out',
        'bounce-right': 'bounceRight 1s infinite ease-in-out',  
      },
      keyframes: {
        bounceLeft: {
          '0%, 100%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateX(-5px)' },
        },
        bounceRight: {
          '0%, 100%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
}

