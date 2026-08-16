/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mahindra: {
          red: '#E31837',
          redGlow: '#ff2d55',
          crimson: '#990011',
          dark: '#08080a',
          darker: '#040405',
          card: '#0f0f14',
          border: 'rgba(255, 255, 255, 0.08)',
          silver: '#C0C0C8',
          accent: '#FF3B30'
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(227, 24, 55, 0.3))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(227, 24, 55, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
