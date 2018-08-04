const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack')

const config = {
  mode: 'development',
  entry:{
    app:'./src/index.js',
  },
  output:{
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    
  },
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  devtool:'inline-source-map',
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'Output management',
      template:'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {from:'static'}
    ])

  ],
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

module.exports = config;