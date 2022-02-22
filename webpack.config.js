const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// en modo dev me da el codigo en modo debug

// se definen las rules para js
const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-env'
      ],
      plugins: ['@babel/plugin-proposal-optional-chaining']
    }
  }
}


module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
  
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // se agrega el html a la carpeta dist
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })]


};

