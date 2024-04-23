import type { Config } from 'tailwindcss'

interface Colors {
  transparent: string
  'dark-gray': string
  gray: string
  'light-blue': string
  white: string
  red: string
}

export const colors: Colors = {
  transparent: 'transparent',
  'dark-gray': '#323643',
  gray: '#606470',
  'light-blue': '#93DEFF',
  white: '#F7F7F7',
  red: '#F65757',
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
}
export default config
