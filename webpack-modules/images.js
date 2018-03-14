module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(gif|png|jpe?g)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                    }
                }
            ]
        }
    }
};