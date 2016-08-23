var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: 'umd',
        library: 'mobxLogger',
        path: __dirname,
        filename: 'dist/mobx-logger.umd.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    externals: {
        mobx: 'mobx'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [/node_modules/]
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};