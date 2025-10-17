/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "2rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans", "sans-serif"],
      },
      colors: {
        "marian-blue": "#314899",
        "raisin-black": "#231F20",
        "silver": "#C2C2C2",
        "dim-gray": "#737373",
        "floral-white": "#F8F4EC",
        "white-smoke": "#F3F3F3",
        "sea-salt": "#FAFAFA",
        "periwinkle": "#C7DBFF",
        "violet-blue": "#4243B1",
        "violet-blue-2": "#3738A6",
        "aquamarine": "#B2FCE4",
        "red": "#DF1B41",
        "cream": "#e8e0d0"
      },
      boxShadow: {
        card: "0 10px 20px -10px rgb(0 0 0 / 0.15), 0 6px 12px -6px rgb(0 0 0 / 0.10)",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [],
}

