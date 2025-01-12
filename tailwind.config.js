/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'establish-retro': ['establishRetrosansOTF', 'sans-serif'],  
      }
    },
  },
  plugins: [],
}

