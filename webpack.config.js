const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const babel = require('./webpack/babel');
const css = require('./webpack/css');
const files = require('./webpack/files');
const html = require('./webpack/html');
const icon = require('./webpack/icon');
const devserver = require('./webpack/devserver');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
};

const common = merge([
    {
        entry: "./src/index.js",
        plugins: [
            new HtmlWebPackPlugin({
                template: `${PATHS.src}/index.html`,
                filename: "index.html",
                publicPath: '/',
                favicon: './favicon.ico'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
    },
    babel(),
    css(),
    files(),
    html(),
    icon(),
]);

module.exports = (env) => {
    if (env.NODE_ENV === 'production') {
        return merge([common]);
    } else {
        return merge([
            common,
            devserver(PATHS.dist),
        ]);
    }
};
