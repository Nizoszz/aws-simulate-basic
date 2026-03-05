import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scale: {
        "97": "0.97",
        "103": "1.03",
        "125": "1.25",
        "150": "1.5",
      },
      keyframes: {
        blinkCorrectAnswer: {
          "0%": { opacity: "1", backgroundColor: "var(--lima)" },
          "50%": { opacity: "0.5", backgroundColor: "transparent" },
          "100%": { opacity: "1", backgroundColor: "var(--lima)" },
        },
        blinkErrorAnswer: {
          "0%": { opacity: "1", backgroundColor: "red" },
          "50%": { opacity: "0.5", backgroundColor: "transparent" },
          "100%": { opacity: "1", backgroundColor: "red" },
        },
      },
      animation: {
        blinkCorrectAnswer: "blinkCorrectAnswer 5s linear infinite",
        blinkErrorAnswer: "blinkErrorAnswer 5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
