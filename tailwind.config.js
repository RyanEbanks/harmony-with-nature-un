/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'half-blue-white': 'linear-gradient(180deg, #004d6f 80%, white 20%)',
      },
    },
  },
  plugins: [],
}

