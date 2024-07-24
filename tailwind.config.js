/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './alejandr088.github.io/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: true,
    layers: ['components', 'utilities'],
  },
}

