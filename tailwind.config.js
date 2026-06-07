/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0e6ff',
          100: '#d9b3ff',
          200: '#c280ff',
          300: '#ab4dff',
          400: '#941aff',
          500: '#7c00e6',
          600: '#6200b3',
          700: '#490080',
          800: '#30004d',
          900: '#17001a',
        },
        dark: {
          50: '#e6e6f0',
          100: '#b3b3d1',
          200: '#8080b3',
          300: '#4d4d94',
          400: '#1a1a75',
          500: '#0d0d2b',
          600: '#0a0a22',
          700: '#07071a',
          800: '#050511',
          900: '#020209',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
