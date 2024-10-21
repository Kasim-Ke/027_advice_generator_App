/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": " 0px 0px 28px 1px rgba(83,255,170,1)",
      },
    },
  },
  plugins: [],
};
