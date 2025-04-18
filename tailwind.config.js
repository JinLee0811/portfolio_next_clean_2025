/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          lightest: "#233554",
          light: "#112240",
          DEFAULT: "#0a192f",
          dark: "#020c1b",
        },
        slate: {
          lightest: {
            DEFAULT: "#ccd6f6",
            light: "#495670",
          },
          light: {
            DEFAULT: "#a8b2d1",
            light: "#64748b",
          },
          DEFAULT: {
            dark: "#8892b0",
            light: "#334155",
          },
          dark: {
            dark: "#495670",
            light: "#1e293b",
          },
        },
        green: {
          dark: "#64ffda",
          light: "#0ea5e9",
        },
      },
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "monospace"],
        sans: ["Calibre", "Inter", "San Francisco", "SF Pro Text", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
        128: "32rem",
      },
      fontSize: {
        xxs: "0.7rem",
        huge: "5rem",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
