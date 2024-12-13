/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'half-blue-white': 'linear-gradient(180deg, #004d6f 80%, white 20%)',
      },
      fontFamily: {
        poppins:["Poppins", "sans-serif"],
      },
      lineHeight: {
        'golden': `${(1 * 1.618).toFixed(3)}`, // Example for base size of 1
        'golden-lg': `${(1.25 * 1.618).toFixed(3)}`, // Example for a larger size
      },
    },
  },
  plugins: [],
}

