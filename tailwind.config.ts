import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        spiderman: ['SpiderMan', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        spiderman: {
          red: "#E51C24",
          blue: "#0D1F47",
          darkblue: "#0A1738",
          black: "#121212",
          web: "#FFFFFF",
          neon: "#00FFFF",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "web-swing": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        "spider-sense": {
          "0%": { boxShadow: "0 0 0 0 rgba(229, 28, 36, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(229, 28, 36, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(229, 28, 36, 0)" },
        },
        "web-shoot": {
          "0%": { width: "0%", opacity: "0" },
          "100%": { width: "100%", opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "web-swing": "web-swing 3s ease-in-out infinite",
        "spider-sense": "spider-sense 2s infinite",
        "web-shoot": "web-shoot 1s ease-out forwards",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
      backgroundImage: {
        "city-night": "linear-gradient(to bottom, #0A1738, #121212)",
        "web-pattern": "url('/web-pattern.svg')",
        "hero-gradient": "linear-gradient(to right, rgba(10, 23, 56, 0.9), rgba(10, 23, 56, 0.7))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
