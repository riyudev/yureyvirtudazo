/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsRegular: ["poppins-regular"],
        poppinsBold: ["poppins-bold"],
        montserratBold: ["montserrat-bold"],
        montserratExtraBold: ["montserrat-extrabold"]
      },
      colors: {
        'dark-blue': '#0f172a'
      }
    },
  },
  plugins: [],
}

