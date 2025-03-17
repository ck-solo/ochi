/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:["Founders_Grotesk_X-Condensed","Gilroy","sans-serif"]
      }
    },
  },
  plugins: [],
}

