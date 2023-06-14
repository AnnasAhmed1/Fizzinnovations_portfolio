/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 1s ease-out",
        "back-in-left": "backInLeft 1s ease-out",
        "back-in-right": "backInRight 1s ease-out",
        "text-top-fade-in": "textTopFadeIn 0.5s ease-out",
        "text-bottom-fade-in": "textBottomFadeIn 0.5s ease-out",
        "text-left-fade-in": "textLeftFadeIn 0.5s ease-out",
        "text-right-fade-in": "textRightFadeIn 0.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        backInLeft: {
          "0%": { transform: "translateX(-200px) scale(0.8)", opacity: "0" },
          "80%": { transform: "translateX(10px) scale(1.1)", opacity: "1" },
          "100%": { transform: "translateX(0) scale(1)", opacity: "1" },
        },
        backInRight: {
          "0%": { transform: "translateX(200px) scale(0.8)", opacity: "0" },
          "80%": { transform: "translateX(-10px) scale(1.1)", opacity: "1" },
          "100%": { transform: "translateX(0) scale(1)", opacity: "1" },
        },
        textTopFadeIn: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        textBottomFadeIn: {
          "0%": { opacity: "1", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        textLeftFadeIn: {
          "0%": { opacity: "1", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        textRightFadeIn: {
          "0%": { opacity: "1", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      linearGradientColors: {
        "blue-purple": ["#1B6DF6", "#63c4ff"],
      },
      backgroundImage: (theme) => ({
        // "blue-purple-gradient": "linear-gradient(to right, #1B6DF6, #63c4ff)",
        "blue-purple-gradient": "linear-gradient(to right, #1B6DF6, #63c4ff)",
      }),
      // colors: {
      //   bluepurple: {
      //     gradient: "linear-gradient(to right, #1B6DF6, #63c4ff)",
      //   },
      // },
      textColor: {
        "bluepurple-gradient": {
          backgroundImage: "linear-gradient(to right, #1B6DF6, #63c4ff)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      },
      boxShadow: {
        custom: "0 11px 27px rgba(0,9,71,.13)",
        dark: "0 6px 6px rgba(0,108,255,.3)",
        cardShadow: "0 1px 10px rgba(0,0,0,6%)",
      },
    },
  },
  plugins: [],
};
