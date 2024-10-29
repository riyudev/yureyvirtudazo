/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: "600px",
        tablet: "900px",
      },
      fontFamily: {
        poppinsRegular: ["poppins-regular"],
        poppinsBold: ["poppins-bold"],
        montserratBold: ["montserrat-bold"],
        montserratExtraBold: ["montserrat-extrabold"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
