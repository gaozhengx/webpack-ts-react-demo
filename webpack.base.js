const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.scss?$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    'primary-color': '#1DA57A',
                                    'link-color': '#1DA57A',
                                    'border-radius-base': '2px',
                                },
                                javascriptEnabled: true,
                            },
                        },
                    }],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash"6].[ext]',
                        outputpath: 'images/',
                        limit: 8192
                    }
                }
            },
            {
                test: /.\js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',// babel-loader是webpack 与 babel的通信桥梁梁
                    options: {
                        //预设：指示babel做怎样的兼容性处理
                        presets: [
                            [
                                '@babel/preset-env',//包含了es76转换规则
                                //@babel/polyfill 弥补低版本浏览器中缺失的特性，转换一些新的更新的api
                                {
                                    targets: {
                                        edge: '17',
                                        firefox: '60',
                                        chrome: '67',
                                        safari: '11.1',
                                    },
                                    corejs: 2,
                                    useBuiltIns: 'usage'//按需注入
                                }
                            ],
                            '@babel/preset-react'//babel与react转换的插件
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        // 配置去那些目录下寻找第三方模块
        modules: [path.resolve(__dirname, './node_modules')],
        alias: {
            // webpack会从⼊入⼝口⽂文件./node_modules/bin/react/index开始递归解析和处理理依赖的⽂文件。
            // 直接指定⽂文件，避免这处的耗时，加快打包速度
            react: path.resolve(__dirname, "./node_modules/react/umd/react.production.min.js"),
            "react-dom": path.resolve(__dirname, "./node_modules/react-dom/umd/react-dom.production.min.js"),
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        // 删除每次打包的文件
        new CleanWebpackPlugin(),
    ],
    // 关闭警告
    performance: {
        hints: false
    }
}