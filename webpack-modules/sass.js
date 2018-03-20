const ExtractTextPlugin = require ('extract-text-webpack-plugin');
module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            'css-loader',
                            'sass-loader'
                        ],
                        fallback: 'style-loader'
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('./[name].css')
        ]
    }
};