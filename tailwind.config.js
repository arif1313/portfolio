/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // 'mainBg': '#b1bef3',
      // 'secondBg': '#c7d0f3',
      // 'Button': '#F59E0B',
      // 'hoverButton': '#D97706',
      // 'buttonBg':'#FDF1D9',
      // 'TextWhite': '#fdf9f9',
      // 'textYallow': '#F59E0B',
      // 'textBlack': '#000000',
      
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

