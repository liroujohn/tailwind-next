import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        },
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translate(-2px)' },
          to: { opacity: '1', transform: 'translate(0)' },
        },
      },

      animation: {
        slideDownAndFade: 'slideDownAndFade 0.4s cubic-bazier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
