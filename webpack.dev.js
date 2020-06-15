const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: '[name]_[hash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.sass?$/,
                include: path.resolve(__dirname, './src'),
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react-demo',
            template: './public/index.html',
            filename: 'index.html'
        }),
        // 热模块替换，不需要刷新页面，进行更新操作
        new webpack.HotModuleReplacementPlugin(),
        new HardSourceWebpackPlugin(),//写到硬盘中，第二次速度会加快很多
    ],
    devServer: {
        contentBase: './dist',
        open: true,
        port: 3000,
        hot: true,//不支持热跟新的情况下会自动刷新页面
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                // 是否需要跨域
                // changeOrigin: true
            }
        }
    },
    // remove unused exports.
    optimization: {
        usedExports: true,
    }
}