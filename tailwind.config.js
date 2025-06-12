module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // if you want flowbite plugin for Tailwind
  ],
  darkMode: "class",
};
