import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        purple: {
          DEFAULT: "#6B21A8",
          dark:    "#4C1580",
          light:   "#9333EA",
          50:      "#F5F3FF",
          100:     "#EDE9FE",
          200:     "#DDD6FE",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        honorhome: {
          "primary":         "#6B21A8",
          "primary-content": "#ffffff",
          "accent":          "#D97706",
          "accent-content":  "#ffffff",
          "base-100":        "#ffffff",
          "base-200":        "#F9FAFB",
          "base-300":        "#F3F4F6",
          "base-content":    "#111827",
          "--rounded-btn":   "0.5rem",
          "--btn-text-case": "none",
        },
      },
    ],
    logs: false,
  },
};

export default config;
