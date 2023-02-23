

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      screens: {
        'md': '640px',
        // => @media (min-width: 992px) { ... }
      },

    },
  },
  plugins: [],
}
