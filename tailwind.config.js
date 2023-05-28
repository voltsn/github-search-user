/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      textColor: {
        theme: {
          accent: "var(--color-text-accent)",
          "accent-2": "var(--color-text-accent-2)",
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          neutral: "var(--color-text-neutral)",
        },
      },
      backgroundColor: {
        theme: {
          base: "var(--color-bg-base)",
          "button-base": "(var(--color-button-base)",
          muted: "var(--color-bg-muted)",
        },
      },
    },
  },
  plugins: [],
};
