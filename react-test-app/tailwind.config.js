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
      colors:{
        primary:'#16405B'
      }
    },
  },
  plugins: [],
}