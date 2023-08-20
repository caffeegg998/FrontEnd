// /** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin');
// export default {
//
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily:{
//         barlow:['"Barlow Condensed"','sans-serif']
//       },
//       colors:{
//         primary:'#16405B'
//       }
//
//     },
//   },
//   plugins: [
//     // plugin(function({ addBase, theme }) {
//     //   addBase({
//     //     'h1': { fontSize: theme('fontSize.5xl') }
//     //   })
//     // })
//   ],
// }
/** @type {import('tailwindcss').Config} */
/** @type {import('material-tailwind/react/utils/withMT')} */
// import "@material-tailwind/react/utils/withMT";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow:['"Barlow Condensed"','sans-serif']
      },
      backgroundImage: {
        'bookCover': "url('http://localhost:8082/api/book/download/be8e7faf-2125-419f-8bb7-e1f1fc1ae3d6.jpeg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors:{
        primary:'#16405B'
      }
    },
  },
  plugins: [],
}
