/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          light: "hsl(var(--accent-light))",
          regular: "hsl(var(--accent-regular))",
          dark: "hsl(var(--accent-dark))",
          overlay: "hsl(var(--accent-overlay))",
          subtleOverlay: "hsl(var(--accent-subtle-overlay))",
          textOver: "hsl(var(--accent-text-over))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
