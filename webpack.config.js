const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//modules
const pug = require('./webpack-modules/pug');
const sass = require('./webpack-modules/sass');
const fonts = require('./webpack-modules/fonts');
const images = require('./webpack-modules/images');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};
const common = merge(
    {
        entry: PATHS.src + '/index/index.js',
        output:{
            path: PATHS.dist,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: PATHS.src + '/index/index.pug'
            })
        ],
    },
    pug(),
    sass(),
    fonts(),
    images()
);

const developmentConfig = {

};

const productionConfig = {

};

module.exports = function(env){
    if (env === 'production'){
        return common;
    }
    if (env === 'development'){
        return common;
    }
};
