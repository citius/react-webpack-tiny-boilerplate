var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var build = process.env.BUILD

module.exports = {
    entry: {
      app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: require.resolve('babel-loader'),
                options: {
                    cacheDirectory: true,
                    plugins: [
                      'babel-plugin-transform-object-rest-spread',
                      'babel-plugin-transform-class-properties',
                      'babel-plugin-transform-runtime'
                    ],
                    presets: [
                        'babel-preset-es2015',
                        'babel-preset-react'
                    ]
                }
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
        minify: build ? {collapseWhitespace: true} : false
      })
    ],
    devServer:{
      contentBase: path.join(__dirname, "dist"),
      compress: true
    }
}
