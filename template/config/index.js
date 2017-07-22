'use strict';

let path = require('path');

module.exports =  {
    dev:{
        env: require('./dev.env.js'),
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../{{path}}'),
        port: {{port}},
        prefix: '{{prefix}}'
    },
    build:{
        env: require('./prod.env.js'),
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../{{path}}'),
        prefix: '{{prefix}}'
    }
}
