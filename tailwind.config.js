/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        '83': '83px',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui'), require('flowbite/plugin')
  ],
}

