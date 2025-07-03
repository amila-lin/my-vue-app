/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
    safelist: [
    {
      pattern: /^line-clamp-(1[0]?|[1-9])$/, // line-clamp-1 ~ line-clamp-10
    },
  ],
  plugins: [],
}

