const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HappyPack = require('happypack');
let ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const getHappyPackConfig = require('./happypack');
const config = require('../config');
const utils = require('./utils');

const env = process.env.NODE_ENV || 'development';
const apiPrefix = env === 'development' ? config[env].prefix : config[env].prefix;

console.log('---------env------:', env, '------apiPrefix-------:', apiPrefix);

module.exports = {
    mode: env,
    context: utils.resolve('src'),
    module: {
        noParse: [/static|assets/],
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                type: 'javascript/auto',
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true
                    }
                }]
            },
            {
                test: /\.vue$/,
                type: 'javascript/auto',
                loader: 'happypack/loader?id=vue'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                type: 'javascript/auto',
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: utils.assetsPath('images/[name].[ext]')
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'javascript/auto',
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('fonts/[name].[ext]')
                    }
                }]
            }
        ]
    },

    resolve:{
        extensions:[".ts",".tsx", ".js"],
        modules: [utils.resolve('node_modules')],
        alias:{
            '@src': utils.resolve('src'),
            '@components': utils.resolve('src/components'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    externals: {
        'es6-promise': 'window.ES6Promise'
    },

    resolveLoader: {
        modules: [utils.resolve('node_modules')]
    },

    performance: {
        hints: false
    },

    stats: {
        children: false
    },

    plugins:[
        new HappyPack(getHappyPackConfig({
            id: 'vue',
            loaders: ['vue-loader']
        })),

        new CopyWebpackPlugin([
            { 
                context: '..', 
                from: 'static/**/*', 
                to: utils.resolve('dist'), 
                force: true,
                ignore: ['.*']
            }, 
            {
                context: '../src',
                from: 'assets/**/*',
                to: utils.resolve('dist'),
                force: true,
                ignore: ['.*']
            }
        ]),

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true,
          env: process.env.NODE_ENV,
          minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
          }
        }),

        new ForkTsCheckerWebpackPlugin({
            tsconfig: '../tsconfig.json'
        }),

        new ProgressBarPlugin()
    ]
};
