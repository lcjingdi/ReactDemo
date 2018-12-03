
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    filename: 'index.html' // 要生成的内存中首页的名称
})

module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}