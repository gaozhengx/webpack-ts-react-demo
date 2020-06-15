const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")


module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: '[name]_[hash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.sass?$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    // 代码分割
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react',
            template: './public/index.html',
            filename: 'index.html',
            minify: {
                removeComents: true,
                collapseWhitespace: true,
                minifyCSS: true
            }
        }),
        // 抽离css为独立文件输出
        new MiniCssExtractPlugin({
            filename: 'css/[name]_[contenthash:6].css'
        }),
        // 压缩css
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require("cssnano"), //引⼊入cssnano配置压缩选项
            cssProcessorOptions: {
                discardComments: { removeAll: true }
            }
        })
    ]
}