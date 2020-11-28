module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
  purge: [
      // './storage/framework/views/*.php',
      // './resources/views/**/*.blade.php',
      // './resources/js/**/*.vue'
  ],
  theme: {
    extend: {
      fill: theme => ({
        'blue': theme('colors.blue.500'),
        'gray': theme('colors.gray.500'),
      }),
      customForms: theme => ({
        default: {
          'input, textarea, multiselect, select': {
            borderColor: theme('colors.gray.500'),
            '&:focus': {
            borderColor: theme('colors.blue.500'),
            },
          },
        },
      }),
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
      },
      inset: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
      },
      colors: {
        blue: {
            '100': '#859DFF',
            '200': '#708DFF',
            '300': '#5C7CFF',
            '400': '#476CFF',
            '500': '#2752FF',
            '600': '#0A3BFF',
            '700': '#002DE0',
            '800': '#0025B8',
            '900': '#001D8F',
          },
        red: {
          '100': '#FF8585',
          '200': '#FF7070',
          '300': '#FF5C5C',
          '400': '#FF4747',
          '500': '#FF2626',
          '600': '#F50000',
          '700': '#CC0000',
          '800': '#A30000',
          '900': '#7A0000',
        },
      },
    },
  },
  variants: {},
}
