import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'darkBg': '#2C3134',
        'darkTxt': '#E8E8E8',
        'darkSelect': '#505558',
        'darkRed': '#FF7369',
        'bluTxt': '#529CCA',
      }
    },
  },
  plugins: [],
}
export default config
