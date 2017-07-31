'use strict';

let path = require('path');

module.exports =  {
    dev:{
        env: 'development',
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../dist'),
        port: {{port}},
        prefix: '{{prefix}}'
    },
    build:{
        env: 'production',
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../dist'),
        prefix: '{{prefix}}'
    }
}
