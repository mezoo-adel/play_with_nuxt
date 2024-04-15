/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js",
    "docs/content/**/*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oswald"],
        reqaa: ['"Aref Ruqaa"',  "Cambria", "Cochin", "Georgia", "Times"],
      },
      colors: {
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: {
          light: "#67e8f9",
          DEFAULT: "#06b6d4",
          dark: "#0e7490",
        },
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
