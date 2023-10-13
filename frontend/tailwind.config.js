/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      Colors: {
        primaryBgColor: '#0067FF',
        yellowColor: '#FEB60D',
        purpleColor: '#9771FF',
        irisBlurColor: '#0185C5',
        headingColor: '#181A1E',
        textColor: '#4E545F',
      },
      
      boxShadow: {
        panelShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;',
      },

      //Update on 2023-10-13 @11:41
      theme: {
        extend: {
          textColors: {
            'custom-color': '#FF0000', // Define your custom color
          },
        },
      },
    },
  },
  plugins: [],
}

