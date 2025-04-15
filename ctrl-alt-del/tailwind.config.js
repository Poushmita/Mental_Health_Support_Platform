/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        atma: ['Atma', 'cursive'],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        playfair: ['Playfair Display', 'serif'],
        lora: ["Lora", "serif"],
        pacifico: ["Pacifico", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-left': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        'slide-left': 'slide-left 0.8s ease-in-out forwards',
      'slide-right': 'slide-right 0.8s ease-in-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-out-left': 'slide-out-left 0.5s ease-in',
        'slide-out-right': 'slide-out-right 0.5s ease-in',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ]
}

