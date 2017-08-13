var webpack = require("webpack"),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        "app": [
            'babel-polyfill',
            'react-hot-loader/patch',
        ],
        "vendor": [
            "lodash.sortby",
            "react",
            "react-dom",
            "react-jss",
            "react-redux",
            "react-transition-group",
            "redux",
            "timeago-react",
        ],
        "index": __dirname + '/src' + '/index.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
    ],
    output: {
        path: __dirname + '/public/',
        publicPath: '/',
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
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