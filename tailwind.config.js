/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#EEE5FF',
      },
      backgroundImage: {
        'gradient-to-r-custom': 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-transparent': {
          'color': 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}
