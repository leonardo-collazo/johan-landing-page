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
        // First set of hero backgrounds
        "hero-background-small-1":
          "url('../assets/pictures/hero-background-small-1.jpg')",
        "hero-background-medium-1":
          "url('../assets/pictures/hero-background-medium-1.jpg')",
        "hero-background-large-1":
          "url('../assets/pictures/hero-background-large-1.jpg')",

        // Second set of hero backgrounds
        "hero-background-small-2":
          "url('../assets/pictures/hero-background-small-2.jpg')",
        "hero-background-medium-2":
          "url('../assets/pictures/hero-background-medium-2.jpg')",
        "hero-background-large-2":
          "url('../assets/pictures/hero-background-large-2.jpg')",

        // Service card background
        "service-card-background":
          "url('../assets/pictures/service-card-background.jpg')",
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
        ".text-black-outline": {
          "-webkit-text-stroke": "1px var(--black)",
        },
      });
    },
  ],
};
