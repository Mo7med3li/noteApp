/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#0dcaf0",
      },
      screens: {
        "2xl": "1520px",
      },
    },
  },
  plugins: [],
};
