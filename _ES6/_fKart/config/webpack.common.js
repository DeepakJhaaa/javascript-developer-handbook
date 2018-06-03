const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const contextPath = path.resolve(__dirname, "..");
const srcPath = contextPath + "/src";
const distPath = contextPath + "/dist";

module.exports = {
  context: srcPath,

  entry: ['babel-polyfill', './index.js'],

  output: {
    filename: 'bundle.js',
    path: distPath
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|svg)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }],
  },
  resolve: {
    modules: [srcPath, "node_modules"]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: contextPath,
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: "Your App's Title",
      template: "index.html",
      inject: 'head'
    })
  ]

};