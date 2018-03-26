var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: 'umd',
        library: 'mobxLogger',
        path: __dirname,
        filename: 'mobx-logger.umd.js'
    },
    resolve: {
        extensions: ['.js']
    },
    externals: {
        mobx: 'mobx'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [/node_modules/]
        }]
    }
};