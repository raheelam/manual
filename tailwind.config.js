module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/hero-image.jpeg')",
        "hair-image": "url('/images/hair-image.png')",
        "ED-image": "url('/images/ED-image.png')",
        "one-image": "url('/images/one.png')",
        "two-image": "url('/images/two.png')",
      },
      fontFamily: {
        sans: ["TT Norms", "ui-sans-serif", "system-ui"],
      },
      colors: {
        heroBg: "#A5B7A1",
        sonAccent: "#7E0707",
        primarySolid: "#0B3B3C",
        primaryLight: "#E8EFE9",
        hr: "#BDCDC5",
      },
      screens: {
        landscape: "640px",
        tablet: "760px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
