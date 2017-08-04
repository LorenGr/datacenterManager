var webpack = require("webpack"),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        __dirname + '/src' + '/index.js'
    ],
    output: {
        path: __dirname + '/public/',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'react-hot-loader/webpack'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            'plugins': [
                                'transform-class-properties'
                            ],
                            'presets': [
                                "es2015",
                                "react",
                                "stage-3"
                            ]
                        }
                    }]
            }]
    },
    devServer: {
        contentBase: __dirname + '/public'
    }
};