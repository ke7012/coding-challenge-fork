/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "wrong-red": "#f28482",
        "correct-green": "#84a59d",
        "mono-blue" : "rgba(134,168,194,0.5)",
      },
    },
  },
  plugins: [],
}

