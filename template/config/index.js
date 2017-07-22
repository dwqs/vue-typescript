'use strict';

let path = require('path');

module.exports =  {
    dev:{
        env: 'development',
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../{{path}}'),
        port: {{port}},
        prefix: '{{prefix}}'
    },
    build:{
        env: 'production',
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../{{path}}'),
        prefix: '{{prefix}}'
    }
}
