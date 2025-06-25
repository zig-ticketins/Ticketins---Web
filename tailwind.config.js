/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{html,js,jsx,ts,tsx}",
    "./*.{html,js}" 
  ],
  safelist: [
    {
      pattern: /^fa-/,
      variants: ["hover"]
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0178ff',
        secondary: '#3bd279',
        accent: '#64dbd3',
        dark: '#000D1F',
        light: '#F8FAFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}