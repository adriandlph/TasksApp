/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors')

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      // Main color
      "main-color": defaultColors.orange["500"],

      // Main button
      "button-bg-main": defaultColors.orange["500"],
      "button-bg-main-hover": defaultColors.orange["600"],
      "button-bg-main-active": defaultColors.orange["700"],
      "button-bg-main-dark": defaultColors.orange["500"],
      "button-bg-main-dark-hover": defaultColors.orange["600"],
      "button-bg-main-dark-active": defaultColors.orange["700"],

      // Secondary button
      "button-bg-secondary": defaultColors.yellow["500"],
      "button-bg-secondary-hover": defaultColors.yellow["600"],
      "button-bg-secondary-active": defaultColors.yellow["700"],
      "button-bg-secondary-dark": defaultColors.yellow["200"],
      "button-bg-secondary-dark-hover": defaultColors.yellow["400"],
      "button-bg-secondary-dark-active": defaultColors.yellow["500"],

      // Other button
      "button-bg-other": defaultColors.stone["300"],
      "button-bg-other-hover": defaultColors.stone["400"],
      "button-bg-other-active": defaultColors.stone["500"],
      "button-bg-other-dark": defaultColors.stone["200"],
      "button-bg-other-dark-hover": defaultColors.stone["300"],
      "button-bg-other-dark-active": defaultColors.stone["400"],

      // Delete button
      "button-bg-delete": defaultColors.red["500"],
      "button-bg-delete-hover": defaultColors.red["600"],
      "button-bg-delete-active": defaultColors.red["700"],
      "button-bg-delete-dark": defaultColors.red["500"],
      "button-bg-delete-dark-hover": defaultColors.red["600"],
      "button-bg-delete-dark-active": defaultColors.red["700"],

    }},
    
  },
  plugins: [],
  darkMode: 'class',
}


