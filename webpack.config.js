const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

// compresor de archivos

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const jsRules = {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      };
const cssRules = {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      };


      // module.exports = { 
      //   plugins: [new CompressionPlugin()],
      // };

// se puede exportar con o sin funcion quitando el arrow funcion y ya
module.exports = (env , {mode}) => ({
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.[contenthash].js",
  },
  module: {
    rules: [
      jsRules,
      cssRules
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  
  
  plugins: [
    // new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: "./styles/[name].css",
    }),
    new HtmlWebpackPlugin({
      title: "React app",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
   
  ],
});
