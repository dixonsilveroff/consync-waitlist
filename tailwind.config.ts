import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E4E8C",
        "primary-dark": "#163A6B",
        highlight: "#2F6FD6",
        background: "#F5F6F7",
        text: "#2C2F33",
        "graphite-black": "#1A1C1E",
        success: "#4CAF50",
        warning: "#F9C74F",
        danger: "#E63946",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.05)",
        precision: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;