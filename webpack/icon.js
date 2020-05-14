module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: "file-loader",
                },
            ],
        },
    };
};
