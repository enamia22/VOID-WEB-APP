/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', 'system-ui', 'sans-serif'] },
      colors: {
        brand: {
          green: { DEFAULT: '#16A34A', dark: '#0B6B3A' },
          red: { DEFAULT: '#DC2626', dark: '#B01219' },
        },
      },
      maxWidth: { container: '1280px' },
    },
  },
  plugins: [],
}
