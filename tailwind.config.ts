import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B", charcoal: "#161514",
        gold: { DEFAULT: "#C9A24B", light: "#E6C878", dark: "#9A7A2E" },
        ivory: { DEFAULT: "#EFE3C2", soft: "#F7F0DC" },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg,#9A7A2E 0%,#E6C878 50%,#C9A24B 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
