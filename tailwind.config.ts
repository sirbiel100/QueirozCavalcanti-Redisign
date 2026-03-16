import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1A1A1A",
          "accent-gold": "#C8A97E",
          "accent-gold-light": "#F5EDD8",
          "accent-gold-dark": "#8B6914",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F7F7F5",
          100: "#EEEDE8",
          400: "#AAAAAA",
          600: "#555555",
          900: "#1A1A1A",
        },
        semantic: {
          navy: "#2A3C5B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "15px",
        md: "18px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "56px",
        "4xl": "64px",
      },
      letterSpacing: {
        tight: "-0.02em",
        wide: "0.05em",
        wider: "0.08em",
        widest: "0.12em",
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        subtle: "2px",
        default: "4px",
        card: "8px",
        pill: "100px",
      },
      boxShadow: {
        subtle: "0 1px 4px rgba(0,0,0,0.06)",
        card: "0 2px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
