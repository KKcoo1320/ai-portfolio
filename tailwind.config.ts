import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b1220",
        panel: "#111c31",
        line: "#1d2a44",
        neon: "#6ee7ff",
        accent: "#00d4ff",
        accent2: "#38f9d7"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(110,231,255,0.2), 0 0 30px rgba(0,212,255,0.12)"
      },
      animation: {
        reveal: "reveal 0.7s ease-out both",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
