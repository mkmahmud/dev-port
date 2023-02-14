/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '20px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      navFont: ['16px', '21px'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'text': '#607B96',
      'sec-bg': '#011627',
      'border-bg': '#1E2D3D',
      'text-green': '#43D9AD',
      'text-blue': '#4D5BCE',
      'text-orange': '#E99287',
      'text-purple': '#C98BDF',
      'text-yellow': '#FEA55F',
      'button': '#1C2B3A',
      'cardBG': '#011221',
    },
  },
  plugins: [],
}
