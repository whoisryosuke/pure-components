const path = require("path");

module.exports = {
  // Sets up Styleguidist with our Webpack setup
  webpackConfig: require("./webpack.config.js"),

  // Override Styleguidist doc components
  styleguideComponents: {
    Wrapper: path.join(__dirname, ".styleguidist/components/Wrapper")
  },

  // Files to ignore from docs
  // Theming
  theme: {
    color: {
      sidebarBackground: "#191818"
    },
    fontSize: {
      h2: 48,
      h3: 36,
      h4: 24,
      h5: 18,
      h6: 16
    }
  }
};
