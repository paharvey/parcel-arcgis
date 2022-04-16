const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: ['./src/index.js']
  },
  node: false,
  output: {
    path: path.join(__dirname, 'dist'),
    chunkFilename: 'chunks/[id].js',
    publicPath: '',
    clean: true
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 1234,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunksSortMode: 'none'
    })
  ]
};
