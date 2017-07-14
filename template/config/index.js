'use strict';

let path = require('path');

module.exports =  {
    dev:{
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../dist'),
        port: 3000,
        env: 'development'
    },
    build:{
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../dist'),
        env: 'production'
    },
    prefix: {
        development: '',
        staging: '',
        preview: '',
        production: ''
    }
}
