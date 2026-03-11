/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#121212",
        card: "#1E1E1E",
        accent: "#2563EB",
        "accent-light": "#3B82F6",
        "text-primary": "#FFFFFF",
        "text-muted": "#A1A1AA",
        border: "#2A2A2A",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["GoogleSans-Regular"],
        "sans-bold": ["GoogleSans-Bold"],
      },
    },
  },
  plugins: [],
};

