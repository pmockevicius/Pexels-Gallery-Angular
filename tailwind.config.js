/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '71': '281px',
      },
      height: {
        '50': '196px',
        '14vh': '16vh',
        'largeScreen': 'calc(100vh - 311px)',
      },
      colors: {
        'grey': '#636363',
      },    
      lineHeight: {
        '72': '72px',
        '7.5': '30px',
      },
      screens: {
        // 'tablet': '640px',
  
        // 'laptop': '1024px',
      
        'desktop': '1200px',
       
      },
      
    },
    
  },
  plugins: [],
}