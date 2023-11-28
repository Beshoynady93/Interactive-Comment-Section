/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue-200': 'hsl(239, 57%, 85%)',
        'primary-blue-400': 'hsl(238, 40%, 52%)',
        'primary-red-200': 'hsl(357, 100%, 86%)',
        'primary-red-400': 'hsl(358, 79%, 66%)',
        'neutral-blue-200': 'hsl(211, 10%, 45%)',
        'neutral-blue-400': 'hsl(212, 24%, 26%)',
        'neutral-grey-200': 'hsl(228, 33%, 97%)',
        'neutral-grey-400': 'hsl(223, 19%, 93%)',
      },
      fontFamily: {
        primary: 'Rubik, sans-serif',
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        'bold-7': 700,
      },
      gridTemplateColumns: {
        'comments-replies-md': 'max-content auto auto',
        'add-comment-section': 'max-content auto max-content',
      },
    },
  },
  plugins: [],
};
