const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};
module.exports = {
    entry: PATHS.src + '/index.js',
    output:{
        path: PATHS.dist,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '/index.pug'
        })
    ],
    // pug module
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                }
            }
        ]
    },
    // scss module
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // file-loader
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg|woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            }
        ]
    }
}
