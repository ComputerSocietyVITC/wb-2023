import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: '#16C79E'
      },
      fontFamily: {
        'OffBitRegular': 'OffBit Trial Regular',
        'OffBitTrial': 'OffBit Trial 101',
        'OffBitDotTrial': 'OffBit Trial Dot',
        'OffBitBoldTrial101': 'OffBit Bold',
        'OffBitBold': 'OffBit Trial Bold',
        'OffBitBoldDotTrial': 'OffBit Trial Dot Bold',
      },
      screens: {
        sm: {
          max: "767px",
        },
        md: {
          min: "768px",
          max: "1280px",
        },
        lg: {
          min: "1280px",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
