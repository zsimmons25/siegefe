module.exports = {
  plugins: {
    tailwindcss: {
      './src/**/*.{js,jsx,ts,tsx}':
      './public/index.html'
    },
    autoprefixer: {},
  },
}