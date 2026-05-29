/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0e1322",
        abyss: "#090e1c",
        panel: "#161b2b",
        card: "#1a1f2f",
        raised: "#25293a",
        ink: {
          DEFAULT: "#dee1f7",
          muted: "#bbcabf",
          faint: "#64748b",
          dim: "#475569",
        },
        mint: "#4edea3",
        emerald: "#10b981",
        sky: "#44d8f1",
        amber: "#f59e0b",
        violet: "#a78bfa",
        coral: "#f0795f",
      },
      fontFamily: {
        head: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "80rem",
      },
      boxShadow: {
        cta: "0 8px 20px rgba(78,222,163,0.2)",
        nav: "0 8px 32px rgba(16,185,129,0.06)",
      },
    },
  },
  plugins: [],
};
