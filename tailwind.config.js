/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {
        darkBackground: "#173482",  // Matches --ifm-color-primary-darkest (dark theme)
        lightBackground: "#FFFFFF",  // Matches --ifm-color-primary-lightest (light theme)
        primaryBlue: "#214aba",  // Matches --ifm-color-primary
        secondaryBlue: "#2451cd",  // Matches --ifm-color-primary-light
        lgBackground: "#dfe6f7",  // Matches --ifm-color-primary-light (light theme variant)
        dgBackground: "#567ad6",  // Matches --ifm-color-primary-darkest (dark theme variant)
      }
    },
  },
  plugins: [],
}

