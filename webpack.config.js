const path = require("path");

module.exports = {
mode: 'production',
  entry: "./src/App.js",
  output: {
    filename: "myBundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
};
