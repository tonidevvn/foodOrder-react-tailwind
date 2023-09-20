/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#fa4a0c",
      },
      textColor: {
        primary: "#fa4a0c",
      },
      borderColor: {
        primary: "#fa4a0c",
      },
      height: {
        banner: "660px",
        bannerBottom: "516px",
        appImage: "400px",
      },
    },
  },
  plugins: [],
};
