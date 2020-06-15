const devConfig = require("./webpack.dev.js");
const proConfig = require("./webpack.pro.js");
const baseConfig = require("./webpack.base.js");
const merge = require("webpack-merge");

// 判断是生成环境，还是开发环境
module.exports = env => {
    if (env && env.production) {
        return merge(baseConfig, proConfig);
    } else {
        return merge(baseConfig, devConfig);
    }
}