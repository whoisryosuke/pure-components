import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "build/index.min.js",
    name: "pure",
    format: "iife",
    sourceMap: "inline"
  },
  // All the used libs needs to be here
  external: ["react", "prop-types", "styled-components"],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    })
  ]
};
