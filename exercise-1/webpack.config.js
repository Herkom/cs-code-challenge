const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.m?.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            { test: /\.handlebars$/, loader: "handlebars-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }),
    ]
}