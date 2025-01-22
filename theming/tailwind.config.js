/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "var(--bgColor)",
        fgColor: "var(--fgColor)",
        borderColor: "var(--borderColor)",
        
      },
      backgroundImage: {
        orangeBg: "var(--orangeBg)",
      }
    },
  },
  plugins: [],
};
