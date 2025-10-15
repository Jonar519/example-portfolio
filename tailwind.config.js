/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#f8fafc', // light mode background
          dark: '#0f172a',    // dark mode background
        },
        foreground: {
          DEFAULT: '#1e293b', // light mode foreground
          dark: '#334155',    // dark mode foreground
        },
        grey: '#64748b',
      },
    },
  },
  plugins: [],
}