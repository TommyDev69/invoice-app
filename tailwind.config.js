

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['"Neue Haas Grotesk Text Pro"', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))', // Custom setup
      },
      screens: {
        sm: '640px',   // Small devices (mobile)
        md: '768px',   // Medium devices (tablet)
        lg: '1024px',  // Large devices (desktops)
        xl: '1280px',  // Extra large devices (large desktops)
        '2xl': '1536px', // 2x extra large devices
        '3xl': '1600px', // Custom breakpoint for larger screens
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #DAF0FA 0%, #FFFCE2 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
      },
    },
  },
  plugins: [],
}
