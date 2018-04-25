const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HappyPack = require('happypack');   

const getHappyPackConfig = require('./happypack');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('../config');

const env = process.env.NODE_ENV || 'development';

module.exports = merge(baseWebpackConfig, {
    entry: {
        vendors: ['vue', 'vue-router', 'axios', 'async-await-error-handling', 'vue-property-decorator'],
        app: utils.resolve('src/page/index.ts')
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                type: 'javascript/auto',
                loaders: [
                    MiniCssExtractPlugin.loader,
                    'happypack/loader?id=css'
                ]
            }
        ]
    },
    output: {
        filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
        path: config[env].assetsRoot,
        publicPath: config[env].assetsPublicPath,
        chunkFilename: utils.assetsPath('js/[name].[chunkhash:8].js')
    },
    optimization: {
        // chunk for the webpack runtime code and chunk manifest
        runtimeChunk: {
            name: 'manifest'
        },
        // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    priority: -20
                },
                commons: {
                    // 抽取 demand-chunk 下的公共依赖模块
                    name: 'commons',
                    minChunks: 3,
                    chunks: 'async',
                    minSize: 0
                }
            }
        }
    },
    devtool: config[env].productionSourceMap ? '#source-map' : false,
    plugins: [
        new webpack.HashedModuleIdsPlugin(),

        new HappyPack(getHappyPackConfig({
            id: 'css',
            loaders: utils.extractCSS()
        })),

        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].[contenthash:8].css')
        }),

        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),

        // gzip
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|html|less|css)$/,
            threshold: 10240,
            minRatio: 0.8
        }),

        new UglifyJsPlugin({
            parallel: true,
            cache: true,
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false,
                    /* eslint-disable */
                    drop_debugger: true,
                    drop_console: true
                },
                mangle: true
            }
        }),

        new WebpackMd5Hash(),
        new WebpackInlineManifestPlugin({
            name: 'webpackManifest'
        })
    ]
});
