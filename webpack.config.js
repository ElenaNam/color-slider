const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const jQuery = require("jquery");
const path = require("path");
const webpack = require("webpack");

const ENV = process.env.npm_lifecycle_event;
const isDev = ENV === "dev";
const isProd = ENV === "build";

function setDMode() {
  if (isProd) {
    return "production";
  } else {
    return "development";
  }
}


const config = {
  target: "web",
  entry: __dirname + "/src/app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: isProd ? false : "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: "body",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    compress: true,
    overlay: true,
    stats: "errors-only",
    clientLogLevel: "none",
  },
  mode: setDMode(),
  externals: {
    jquery: "jQuery",
  },
};


if (isProd) {
  config.plugins.push(
    new UglifyJSPlugin(),    
  );
}
module.exports = config;
