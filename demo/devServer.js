const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.jsx',
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
    }),
  ],
};
