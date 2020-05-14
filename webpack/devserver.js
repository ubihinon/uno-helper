module.exports = function (path) {
    return {
        devServer: {
            contentBase: path,
            compress: false,
            port: 3000,
            historyApiFallback: true
        }
    };
};
