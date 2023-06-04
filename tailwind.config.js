/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '18px'],
      xsm: ['14px', '18px'],
      sm: ['16px', '24px'],
      base: ['20px', '28px'],
      lg: ['24px', '32px'],
      xl: ['36px', '44px'],
    },
  },
  plugins: [],
}
