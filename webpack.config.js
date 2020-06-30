'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rendererOptimization = {
    splitChunks: {
        cacheGroups: {
            vendors: {
                test: mod => {
                    return /[\\/]node_modules[\\/]/.test(mod.context);
                },
                chunks: 'initial',
                name: 'vendors',
                priority: 10,
                enforce: true
            }
        }
    },
    minimizer: [
        // We won't minimize for now
    ]
};

const extractAppCssPlugin = new MiniCssExtractPlugin({
    filename: '[name].min.css'
});

module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/client/Index.tsx', 'webpack-hot-middleware/client']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        modules: [path.resolve('.'), 'node_modules']
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     loader: 'source-map-loader',
            //     exclude: path.resolve(__dirname, 'node_modules')
            // },
            // {
            //     test: /\.jsx$/,
            //     loader: 'babel-loader',
            //     exclude: path.resolve(__dirname, 'node_modules')
            // },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.mdx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env', '@babel/react']
                        }
                    },
                    '@mdx-js/loader'
                ],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            // { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader', options: { limit: 512 } },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 512,
                    outputPath: 'assets',
                    name: '[name].[ext]'
                }
            },
            // { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' }
        ]
    },
    plugins: [
        extractAppCssPlugin,
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'client', 'index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: rendererOptimization
};
