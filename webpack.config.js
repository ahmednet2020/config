const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = (env, {mode}) => {
  return {
    "optimization":{"minimize": mode === 'development'? false:true},
    "devtool": (mode === 'development'? 'inline-source-map':false),
    "entry": {
      "index":path.join(__dirname, "./src/index.ts"),
    },
    "output": {
      "filename": "./js/[name].js",
      "path": path.join(__dirname, "/build")
    },
    "module": {
      "rules": [
        // typescript & babel config 
        {
          "test": /\.ts?$/,
          "use": ["babel-loader", "ts-loader"],
          "exclude": /node_modules/,
        },
        // sass config
        { 
          "test": /\.s(c|a)ss$/,
          "exclude": /node_modules/,
          "use":[MiniCssExtractPlugin.loader,"css-loader", "postcss-loader", "sass-loader"]
        },
        {
          "test": /\.(html)$/,
          "exclude": /node_modules/,
          "use": {
            "loader": 'html-loader',
            "options": {
              "attrs": ['img:src'],
              "interpolate":"require"
            }
          }
        },
        // img import config
        {
          "test": /\.(png|jpg|gif)$/,
          "exclude": /node_modules/,
          "use": [
              {
                "loader": 'file-loader',
                "options": {
                    "name": './imgs/[name].[ext]'
                },
              },
            ]
          }
      ]
    },
    "resolve": {
      "extensions": [".ts", ".js", ".json"]
    },
    "plugins": [
      new HtmlWebpackPlugin({
        template: 'src/html/index.html',
        chunks:["index"]
      }),
      new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: './css/[name].css',
      chunkFilename: '[id].css',
    }),
      new CopyPlugin(['./src/html/robots.txt','./src/html/manifest.json']),
    ]
  }
}