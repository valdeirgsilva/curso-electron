/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },

      keyframes: {
        slideIn: {
          from: { width: 0 },
          to: { width: 'var(--radix-collapsisable-content-width)' }
        },
        slideOut: {
          from: { width: 'var(--radix-collapsisable-content-width)' },
          to: { width: 0 }
        }
      },

      animation: {
        slideIn: 'slideIn 0.28s',
        slideOut: 'slideOut 0.28s'
      }
    }
  },
  plugins: []
}
