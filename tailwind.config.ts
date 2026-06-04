import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ice: "#edf3f8",
        snow: "#f7f9fc",
        ink: "#0a1728",
        gold: "#b99150",
        navy: {
          950: "#05111f",
          900: "#071827",
          800: "#0d2336"
        }
      }
    }
  },
  plugins: []
};

export default config;
