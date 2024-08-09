/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/components/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['DM Serif Display', 'serif'],
      },
      animation: {
        'bounce-left': 'bounceLeft 1s infinite ease-in-out',
        'bounce-right': 'bounceRight 1s infinite ease-in-out',
        'loader-opacity': 'loaderOpacity .2s ease-in',
        'loader-hide': 'loaderHide 1s ease-in forwards',  
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
        loaderOpacity: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        loaderHide: {
          '0%': { transform: 'translateY(0)'},
          '100%': { transform: 'translateY(-100vh)'},
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
}

