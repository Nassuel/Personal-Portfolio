/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        gradient: "animatedgradient ease 3s infinite alternate"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          }
        },
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },

      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        nassuel: {
          "primary": "#9EC5AB",
          "secondary": "#32746D",
          "accent": "#104F55",
          "neutral": "#324033",
          "base-100": "#222125",
          "info": "#A3DEEF",
          "success": "#13674A",
          "warning": "#EFC61F",
          "error": "#EA4739",
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  }
}
