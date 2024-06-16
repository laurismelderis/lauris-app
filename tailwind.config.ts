import type { Config } from 'tailwindcss'

interface Colors {
  transparent: string
  'dark-green': string
  gray: string
  green: string
  'light-green': string
  red: string
}

export const colors: Colors = {
  transparent: 'transparent',
  'dark-green': '#081C15',
  gray: '#606470',
  green: '#D9ED92',
  'light-green': '#E0E5C6',
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
