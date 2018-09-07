const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

const config = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'

  },
  devServer: {
    contentBase: './dist',
    hot: false
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Animated lesson',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: 'static'
    }])

  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test:/\.(png|jpg|gif)$/,
        exclude:/node_modules/,
        use:['file-loader']
      },
      {
        test: /\.(css|scss)$/,
        exclude:/node_modules/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options:{
              sourceMap:true,
              modules: true,
              localIdentName: "[local]__[hash:base64:5]"
            }
          },
          {loader: 'sass-loader'},
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          
        }

      }
    ]
  }
}

module.exports = config;