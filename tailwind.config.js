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
        montserratBold: ["montserrat-bold"],
        montserratExtraBold: ["montserrat-extrabold"]
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.25)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.25)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

