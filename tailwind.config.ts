import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        steel: "#152132",
        panel: "#111827",
        gold: "#D7B56D",
        amber: "#F0C36A",
        mist: "#DCE5F0",
        line: "rgba(255,255,255,0.10)",
        slateBlue: "#24354A",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.18)",
        glow: "0 0 0 1px rgba(215,181,109,0.18), 0 24px 90px rgba(0,0,0,0.24)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hero-radial": "radial-gradient(circle at top, rgba(215,181,109,0.18), transparent 35%), radial-gradient(circle at 80% 20%, rgba(71,107,157,0.28), transparent 30%)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1240px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      animation: {
        float: "float 10s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
