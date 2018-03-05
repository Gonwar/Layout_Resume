//basic vars
const path = require('path');
const webpack = require('webpack');

// additional plagins
// const plugin = require('plugin_name');
const CleanWebpackPlugin = require ('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
var isProduction = (process.env.NODE_ENV == 'production');

//module settings
module.exports = {
    // project path
    context: path.resolve(__dirname, 'src'),

    // input
    entry: {
        //main file app
        app: [
           // './js/app.js',
            './scss/style.scss'
        ],
    },

    //output path
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
    },

    //dev-server configuration
    devServer: {
        contentBase: './app'
      },

      devtool: (isProduction) ? '' : 'inline-source-map',

      module: {
          rules: [
              {
                  test: /\.scss$/,
                  use: ExtractTextPlugin.extract({
                      use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader: 'postcss-loader',
                            options: {sourceMap: true}
                        },
                          {
                              loader: 'sass-loader',
                              options: {sourceMap: true}
                          },
                      ],
                      fallback: 'style-loader',
                  })
              },
              //Image
              {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                    },
                  },
                ],
              },
              //Add fonts
              {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                },
              }
          ],
      },
    plugins:[
        new ExtractTextPlugin(
            './css/[name].css'
        ),
        new CleanWebpackPlugin(['dist']),

        new CopyWebpackPlugin(
            [
                { from: './img', to : 'img'},
                { from: './fonts', to: 'fonts'},
            ],
        ),
    ],
      
};

// PRODACTION CONFIG
{
    if(isProduction) {
        module.exports.plugins.push(
            new UglifyJSPlugin({
                sourceMap: true
            }),
        );
        module.exports.plugins.push(
            new ImageminPlugin({
                test: /\.(png|gif|svg|jpe?g)$/
            }),
        );
        module.exports.plugins.push(
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
        );
    }
}
