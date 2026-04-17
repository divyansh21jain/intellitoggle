import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        merriweather: ['Merriweather Sans', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#42389E',
          dark: '#0F1026',
          light: '#EDECF6',
          50: '#F9F5FF',
        },
        accent: {
          DEFAULT: '#F9A71E',
          light: '#FFEBC9',
        },
        heading: {
          1: '#0E121B',
          2: '#1A1C3D',
          3: '#323338',
        },
        body: {
          1: '#4A4B4D',
          2: '#5F5F60',
          3: '#8D8D8D',
        },
      },
      boxShadow: {
        card: '0px 0px 10px 0px rgba(0,0,0,0.05)',
        btn: '0px 4px 4px 0px rgba(0,0,0,0.25)',
        screenshot: '0px 0px 20px 20px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config
