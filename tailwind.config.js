/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#F5C96A',
      secondary:'#22D3EE',
      dark: '#2A2A2A',
      midDark: '#3E3E3E',
    },
    keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.08)'},

        },
        sway:{
          '0%, 100%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(10deg)'}
        },
        spin:{
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'}
        },
        fadeUp: {
      "0%": { opacity: "0", transform: "translateY(30px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    pulseGlow: {
  '0%, 100%': { boxShadow: '0 0 0px rgba(255, 255, 0, 0.5)' },
  '50%': { boxShadow: '0 0 20px rgba(255, 255, 0, 0.8)' },
},
drift: {
  '0%, 100%': { transform: 'translate(0, 0)' },
  '50%': { transform: 'translate(10px, -10px)' },
},

      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        zoom: 'zoom 6s ease-in-out infinite',
        sway: 'sway 5s ease-in-out infinite',
        spin: 'spin 5s linear infinite',
        fadeUp: "fadeUp 0.8s ease-out forwards",
        drift: 'drift 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
    fontFamily: {
      bengali: ['"Tiro Bangla"', 'serif'],
    },
    },
  },
  plugins: [],
}