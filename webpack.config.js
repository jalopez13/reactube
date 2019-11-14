const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Reactube",
      filename: 'index.html',
      template: './src/index.html'
    })
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    contentBase: './dist'
  } 
};