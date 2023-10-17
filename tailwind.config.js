/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grayish-blue": "#8486a9",
        "soft-red": "#fb6087",
        "dark-desaturated-blue": "#343650",
        "very-dark-blue": "#1e1f29",
        "mostly-black": "#191a24",
      },
      fontFamily: {
        "red-hat": ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
