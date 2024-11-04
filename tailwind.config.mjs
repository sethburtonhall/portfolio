/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1280px",
      },
    },
    fontFamily: {
      brand: "var(--font-brand)",
    },
    extend: {
      screens: {
        // These variables are not working as expected
        // sm: "var(--breakpoint-sm)",
        // md: "var(--breakpoint-md)",
        // lg: "var(--breakpoint-lg)",
        sm: "40em",
        md: "50em",
        lg: "60em",
      },
      shadow: {
        DEFAULT: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      fontSize: {
        DEFAULT: "var(--text-base)",
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
      },
      colors: {
        // CSS variables in globals.css allow colors to be used in vanilla css <style> tag
        // this mapping allows colors to be used as inline utility classes
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        stone: {
          50: "var(--stone-50)",
          100: "var(--stone-100)",
          200: "var(--stone-200)",
          300: "var(--stone-300)",
          400: "var(--stone-400)",
          500: "var(--stone-500)",
          600: "var(--stone-600)",
          700: "var(--stone-700)",
          800: "var(--stone-800)",
          900: "var(--stone-900)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          regular: "var(--accent-regular)",
          dark: "var(--accent-dark)",
          overlay: "var(--accent-overlay)",
          subtleOverlay: "var(--accent-subtle-overlay)",
          textOver: "var(--accent-text-over)",
        },
        link: {
          DEFAULT: "var(--link)",
          hover: "var(--link-hover)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
