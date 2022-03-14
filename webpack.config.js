const path = require('path);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    devtool: 'sourcd-map',
    entry: {
        main: './src/js/main.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[contenthash][ext]',
    },
    module: {
        rules: [
            {
                test: /\.vue/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'vue-loader',
                    },
                ],
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.png|\.jpg/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][contenhash][ext]',
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './stylesheets/[name]-[contenthash][ext]',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.pug',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
    ],
};
