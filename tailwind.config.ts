import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: colors.cyan,
      accent: colors.purple,
      neutral: colors.slate,
      transparent: "transparent",
    },
    fontFamily: {
      display: ["Orbitron", "Arial", "Helvetica", "Verdana", "sans-serif"],
      sans: ["Roboto", "Arial", "Helvetica", "Verdana", "sans-serif"],
      mono: ["Roboto Mono", "Courier New", "Monaco", "monospace"],
    },
  },
  plugins: [],
};
export default config;
