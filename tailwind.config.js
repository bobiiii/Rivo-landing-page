/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        
       xl3: '0 20px 60px -5px rgba(0, 0, 0, 0.5)',
        
      },
      colors:{
        "prePrimary": "#267D49",
        "primary":"#C2EFD4",
        "secondary":"#224F34"
      },
      fontFamily:{
        
      },
      backgroundImage: {
        '': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
