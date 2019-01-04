const path = require("path");

module.exports = {
  // Sets up Styleguidist with our Webpack setup
  webpackConfig: require("./webpack.config.js"),

  // Override Styleguidist doc components
  styleguideComponents: {
    Wrapper: path.join(__dirname, ".styleguidist/components/Wrapper")
  },

  sections: [
    {
      name: "Introduction",
      content: "docs/index.md"
    },
    {
      name: "Getting Started",
      content: "docs/getting-started.md"
    },
    // {
    //   name: 'Documentation',
    //   sections: [
    //     {
    //       name: 'Customize',
    //       content: 'docs/installation.md',
    //       description: 'The description for the installation section'
    //     },
    //     {
    //       name: 'Configuration',
    //       content: 'docs/configuration.md'
    //     },
    //     {
    //       name: 'Live Demo',
    //       external: true,
    //       href: 'http://example.com'
    //     }
    //   ]
    // },
    {
      name: "Components",
      content: "docs/ui.md",
      components: "src/components/*/*.js",
      exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand" // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Customize",
      content: "docs/customize.md"
    },
    {
      name: "Releases",
      content: "CHANGELOG.md"
    },
    {
      name: "Pure CSS",
      href: "http://purecss.io",
      external: true
    }
  ],

  // Files to ignore from docs
  ignore: ["**/*.story.js", "**/*.test.js"],

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
