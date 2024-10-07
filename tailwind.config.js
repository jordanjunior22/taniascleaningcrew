/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',       // Black
        lightTeal: '#E8E8E8',     // Soft light gray
        goldenYellow: '#FFFFFF',  // White
        coralRed: '#C0C0C0',      // Light silver for subtle contrast
        mutedGreen: '#A0A0A0',    // Medium gray for a neutral tone
        white: '#FFFFFF',         // White
    }
    
    },
  },
  plugins: [],
};
