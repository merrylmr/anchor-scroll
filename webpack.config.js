const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    entry: {
        index: ['/src/index.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: "[name].js",
        // 这将在所有模块定义下暴露你的库, 允许它与 CommonJS、AMD 和作为全局变量工作
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            // 'transform-runtime' 插件告诉 Babel
            // 要引用 runtime 来代替注入。
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',
                            {
                                "targets": {
                                    "chrome": "58",
                                    "ie": "11"
                                },
                                useBuiltIns: 'usage',
                                //  必须配置
                                corejs: {version: "3", proposals: true}
                            }
                        ]],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [new CleanWebpackPlugin({})],
    watchOptions: {
        ignored: /node_modules/,
    },
}