'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HappyPack = require('happypack'); 
let ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
let MxWebpackContentReplacePlugin = require('mx-webpack-content-replace-plugin');

let getHappyPackConfig = require('./happypack');

let config = require('../config');

const env = process.env.NODE_ENV || 'development';

// 全局变量
let {cdn, api, base} = config[env];

console.log('\n---------env------:\n', env);
console.log('\n---------cdn------:\n', cdn);
console.log('\n---------base------:\n', base);
console.log('\n---------api------:\n\n', api);

module.exports = {
    context: path.resolve(__dirname, "../src"),
    module: {
        noParse: [/static|assets/],
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
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
                use: [{
                    loader: 'happypack/loader?id=vue'
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]?[hash:8]'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]?[hash:8]'
                    }
                }]
            }
        ]
    },

    resolve:{
        extensions:[".ts",".tsx", ".js"],
        modules: [path.join(__dirname, '../node_modules')],
        alias:{
            '@src': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components'),
            'vue$': 'vue/dist/vue.js'
        }
    },

    {{#jquery}}
    externals: {
       jquery: 'jQuery'
    },
    {{/jquery}}

    resolveLoader: {
        modules: [path.join(__dirname, '../node_modules')]
    },

    performance: {
        hints: false
    },

    plugins:[

        {{#jquery}}
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        {{/jquery}}

        new webpack.DefinePlugin({
            ENV: JSON.stringify(env),
            CDN: JSON.stringify(cdn),
            API: JSON.stringify(api),
            BASE: JSON.stringify(base)
        }),

        //copy assets
        new CopyWebpackPlugin([
            {context: '../src', from: 'assets/**/*', to: path.resolve(__dirname, '../dist'), force: true}
        ]),

        new HappyPack(getHappyPackConfig({
            id: 'vue',
            loaders: [{
                path: 'vue-loader',
                query: {
                    // https://github.com/vuejs/vue-loader/issues/863
                    esModule: true
                }
            }]
        })),

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

        new MxWebpackContentReplacePlugin({
            src: /\/\/cdn\.followme\.com\/cdn/g,
            dest: cdn,
            exts: ['html', 'js', 'json', 'css']
        })
    ]
};
