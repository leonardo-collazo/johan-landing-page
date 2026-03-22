/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        "mobile-xl": "480px",
        "mobile-large": "425px",
        "mobile-medium": "375px",
      },
      backgroundImage: {
        "hero-background-large":
          "url('../assets/pictures/hero-background-large.jpg')",
        "hero-background-medium":
          "url('../assets/pictures/hero-background-medium.jpg')",
        "hero-background-small":
          "url('../assets/pictures/hero-background-small.jpg')",
        "advanced-electronic-diagnostics-service":
          "url('../assets/pictures/advanced-electronic-diagnostics-service.png')",
        "module-programming-and-coding-service":
          "url('../assets/pictures/module-programming-and-coding-service.png')",
        "professional-automotive-locksmith-service":
          "url('../assets/pictures/professional-automotive-locksmith-service.png')",
        "automotive-air-conditioning-service":
          "url('../assets/pictures/automotive-air-conditioning-service.png')",
      },
      boxShadow: {
        "service-card-shadow": "0 0 14px 10px rgba(255, 255, 255, 0.45)",
      },
      fontFamily: {
        "open-sans": [
          "Open Sans",
          "Calibri",
          "Segoe UI",
          "Tahoma",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".gold-shine": {
          background:
            "linear-gradient(120deg, var(--dark-gold) 20%, var(--gold) 40%, var(--light-gold) 50%, var(--gold) 60%, var(--dark-gold) 80%)",
          "background-size": "200% auto",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          animation: "shine 8s linear infinite",
        },
      });
    },
  ],
};
