'use strict';

let path = require('path');

module.exports =  {
    dev:{
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../{{path}}'),
        port: {{port}},
        env: 'development'
    },
    build:{
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../{{path}}'),
        env: 'production'
    },
    prefix: {
        development: '{{prefix}}',
        staging: '{{prefix}}',
        preview: '{{prefix}}',
        production: '{{prefix}}'
    }
}
