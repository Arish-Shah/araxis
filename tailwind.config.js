module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          default: '#eb4a53',
          dark: '#d03153',
        },
        blue: {
          lighter: '#234e9f',
          light: '#1e3b6f',
          default: '#1b1a4e',
        },
        green: '#00dda3',
        white: '#ffffff',
        lavendar: '#efeff9',
        pink: '#f9eff0',
        black: {
          lighter: '#cccccc',
          light: '#4d4d4d',
          default: '#2d2d2d',
        },
      },
      backgroundImage: theme => ({
        'footer-image': 'url("/footer.svg")',
      }),
    },
    fontFamily: {
      body: ['Poppins'],
    },
  },
  variants: {},
  plugins: [],
};
