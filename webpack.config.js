const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "index.min.js",
    libraryTarget: "umd",
    library: "pure-styled-components"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
