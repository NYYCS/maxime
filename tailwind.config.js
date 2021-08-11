module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        "0": "0",
        "calendar": "0 1 140px",
        "guests": "0 1 80px"
      },
      fontFamily: {
        grotesk: ["Neuzeit Grotesk", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%"},
          "100%": { opacity: "100%"},
         },
         "fade-out": {
          "0%": { opacity: "100%"},
          "100%": { opacity: "0%"},
         },
        "fade-up": {
          "0%": { transform: "translateY(100%)", opacity: "0%"},
          "100%": { transform: "translateY(0%)", opacity: "100%"},
         },
        "fade-down": {
         "0%": { transform: "translateY(-100%)", opacity: "0%"},
         "100%": { transform: "translateY(0%)" , opacity: "100%"},
        },
        "fade-left": {
          "0%": { transform: "translateX(100%)", opacity: "0%"},
          "100%": { transform: "translateX(0%)", opacity: "100%"},
         },
        "fade-right": {
         "0%": { transform: "translateX(-100%)", opacity: "0%"},
         "100%": { transform: "translateX(0%)" , opacity: "100%"},
        },
      },
      animation: {
        "fade-in": "fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) 1",
        "fade-out": "fade-out 1s cubic-bezier(0.4, 0, 0.2, 1) 1",
        "fade-up": "fade-up 1s cubic-bezier(0.4, 0, 0.2, 1) 1",
        "fade-down": "fade-down 1s cubic-bezier(0.4, 0, 0.2, 1) 1",
        "fade-left": "fade-left 1s cubic-bezier(0.4, 0, 0.2, 1) 1",
        "fade-right": "fade-right 1s cubic-bezier(0.4, 0, 0.2, 1) 1",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
