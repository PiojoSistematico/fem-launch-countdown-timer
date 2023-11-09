/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#8486a9",
        "primary-2": "#fb6087",
        "neutral-1": "#ffffff",
        "neutral-2": "#343650",
        "neutral-3": "#1e1f29",
        "neutral-4": "#191a24",
      },
      fontFamily: {
        RedHatText: ["RedHatText", "sans-serif"],
      },
    },
  },
  plugins: [],
};
