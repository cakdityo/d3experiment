var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/app.js',
        vendor: ['d3']
    },
    output: {
        filename: 'public/js/[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'public/js/vendor.js')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}