const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: "./src/script.js",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /.js?$/,
                loader: 'babel!eslint-loader'
            }
        ]
    },

    plugins: [
        new StyleLintPlugin({
            configFile: '.stylelintrc',
            files: '**/*.css'
        })
    ]
}