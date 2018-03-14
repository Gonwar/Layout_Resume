module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                }
            ]
        }
    }
};