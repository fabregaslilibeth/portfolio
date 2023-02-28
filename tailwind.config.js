/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ffb400",
        // accent: "32cd32",
        // primary: "#32cd32", //lime green
        primary: "#49084f", // purple
        grey: "#a9a3a3",
        secondary: "#252525",
        navitem: "#2b2a2a",
        border: "#625f5f",
      },
      fontFamily: {
        serif: ["Cormorant Garamond"],
        sans: ["Maven Pro"],
        cursive: ["Titan One"],
        accent: ["Merienda"],
        // cursive: ["Cabin Sketch"],
      },
      spacing: {
        90: "360px",
        108: "432px",
        192: "768px",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      boxShadow: {
        primary: "4px 4px 4px 0px rgba(73, 8, 79, 0.43)",
        simple: "4px 4px 4px 0px rgba(0, 0, 0, 0.43)",
        buttonNormal: '-5px -5px 20px #FFF, 5px 5px 20px rgba(73, 8, 79, 0.43)',
        buttonHover: '-2px -2px 5px #FFF, 2px 2px 5px #49084F',
        buttonDark: 'inset -6px -6px 9px 0px rgba(255,255,255,0.4), inset 6px 6px 9px rgba(0, 0, 0, 0.4)',
        normal: 'inset 2px 2px 5px #49084F, inset -5px -5px 10px #FFF',
        active: 'inset 1px 1px 2px #49084F, inset -1px -1px 2px #fff',
        input: '0 3px 5px rgba(8, 129, 163, 0.3)',
        smallBtn:
          "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5)",
      },
    },
  },
  plugins: [],
};
