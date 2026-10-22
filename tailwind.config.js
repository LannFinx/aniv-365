export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        surface: "#050811",
        cobalt: "#0070F3",
        cyanNeon: "#00D2FF",
        midnight: "#0A1128",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Syne', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 25px rgba(0, 112, 243, 0.45), 0 0 50px rgba(0, 210, 255, 0.25)',
        'neon-glow': '0 0 35px rgba(0, 112, 243, 0.6), inset 0 0 15px rgba(0, 210, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
