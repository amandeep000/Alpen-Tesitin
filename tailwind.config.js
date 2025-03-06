/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        latoLight: ["latoLight", "sans-serif"],
        openSans: ["openSans", "sans-serif"],
      },
      body: {
        fontFamily: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
