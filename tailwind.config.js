module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          default: 'var(--red-default)',
          dark: 'var(--red-dark)',
        },
        blue: {
          lighter: 'var(--blue-lighter)',
          light: 'var(--blue-light)',
          default: 'var(--blue-default)',
        },
        green: 'var(--green)',
        white: 'var(--white)',
        lavendar: 'var(--lavendar)',
        pink: 'var(--pink)',
        black: {
          lighter: 'var(--black-lighter)',
          light: 'var(--black-light)',
          default: 'var(--black-default)',
        },
      },
      backgroundImage: (theme) => ({
        'footer-image': 'url("/footer.svg")',
        'footer-image-dark':
          'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("/footer.svg")',
      }),
    },
    fontFamily: {
      body: ['Poppins', 'Arial', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
};
