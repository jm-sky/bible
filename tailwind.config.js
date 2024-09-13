import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.sky[500],
          ...colors.sky,
        },
        muted: {
          DEFAULT: colors.gray[500],
        },
      },
      backdropBlur: {
        xs: '1px',
      },
    },
  },
  plugins: [],
}
