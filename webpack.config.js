const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new ESLintPlugin()],
};
