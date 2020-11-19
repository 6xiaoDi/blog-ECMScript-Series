const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "static", to: "static" }
            ],
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            "useBuiltIns": "usage"
                        }]
                    ],
                    plugins: [[
                        '@babel/plugin-transform-runtime',
                        {
                            corejs: { version: 2 } // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
                        }
                    ]]
                }
            }
        }]
    },
    stats: {
        children: false
    }
}