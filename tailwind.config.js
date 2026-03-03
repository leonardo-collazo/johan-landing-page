/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        "mobile-large": "425px",
        "mobile-medium": "375px",
      },
      backgroundImage: {
        "hero-background-large-vertical":
          "url('../assets/pictures/computer-hardware-large-vertical.jpg')",
        "hero-background-medium-vertical":
          "url('../assets/pictures/computer-hardware-medium-vertical.jpg')",
        "hero-background-small-vertical":
          "url('../assets/pictures/computer-hardware-small-vertical.jpg')",
        "hero-background-large-horizontal":
          "url('../assets/pictures/computer-hardware-large-horizontal.jpg')",
        "hero-background-medium-horizontal":
          "url('../assets/pictures/computer-hardware-medium-horizontal.jpg')",
        "hero-background-small-horizontal":
          "url('../assets/pictures/computer-hardware-small-horizontal.jpg')",
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
  plugins: [],
};
