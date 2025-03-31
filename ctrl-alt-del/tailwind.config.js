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
        lora: ["Lora", "serif"],
        pacifico: ["Pacifico", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        nunito: ["Nunito", "sans-serif"]
      },
    },
  },
  plugins: [],
}

