/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#405E7F",  // Lacivert ton (sidebar ve ana renk)
        secondary: "#FFB347", // Turuncu (buton ve vurgu)
        background: "#0D1117", // Genel arka plan koyu tonu
        text: "#EAEAEA", // Açık gri metinler
      },
    },
  },
  plugins: [],
};
