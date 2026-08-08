export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          from: { width: "0%"},
          to: { width: "100%"},
        },
      },
      animation: {
        progress: "progress 5s linear infinite",
      }
    },
  },
  plugins: [],
};