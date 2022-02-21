const tailwindcss = require("tailwindcss");

module.exports = {
  content: [ "*.html"],
  theme: {
    extend: {
      colors: {
        dark:"#1F2937",
        customgray: "#273549",
        customgreen: "#4ADF86",
        lightgreen: "#10B981"
      }
    },
  },
  plugins: [],
}
