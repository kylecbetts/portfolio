import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["Orbitron", "Arial", "Helvetica", "Verdana", "sans-serif"],
      sans: ["Roboto", "Arial", "Helvetica", "Verdana", "sans-serif"],
      mono: ["Roboto Mono", "Courier New", "Monaco", "monospace"],
    },
  },
  plugins: [],
};
export default config;
