const htmlWebpackPlugin = require('html-webpack-plugin')
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: "development",
    devServer: {
        port: 3001
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new moduleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductIndex': './src/index'
            }
        })
    ]
}