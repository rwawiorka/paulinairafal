import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        "wedding": {
          DEFAULT: '#cfb0ef',
          50: '#faf7fd',
          100: '#f3ecfb',
          200: '#e9dcf8',
          300: '#cfb0ef',
          400: '#c097e9',
          500: '#a86fdd',
          600: '#9350cd',
          700: '#7d3db3',
          800: '#6a3792',
          900: '#562d76',
          950: '#391655',
        },
        "twojastara": {
          DEFAULT: '#ffffff',
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: colors.slate[200] || '#ffffff',
          950: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}


