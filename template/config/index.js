'use strict';

let path = require('path');

module.exports =  {
    dev:{
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../{{path}}'),
        port: {{port}}
    },
    build:{
        assetsRoot: path.resolve(__dirname, '../{{path}}'),
        assetsPublicPath: '/',
        contentBase: path.resolve(__dirname, '../{{path}}')
    },
    development: {
        cdn: 'http://cdn.followme.com/cdn',
        api: 'http://beta.api.followme.com/api/v1',
        base: 'http://www.followme.com'
    },
    staging: {
        cdn: 'http://cdn.followme.com/cdn',
        api: 'http://ismemories.cn/api/v1',
        base: 'http://www.followme.com'
    },
    preview: {
        cdn: 'http://cdn.followme.com/cdn',
        api: 'http://frontend.followme.com/api/v1',
        base: 'http://www.followme.com'
    },
    beta: {
        cdn: 'http://beta.www.followme.com/cdn',
        api: 'http://beta.www.followme.com/api/v1',
        base: 'http://beta.www.followme.com'
    },
    production: {
        cdn: 'http://cdn.followme.com/cdn',
        api: 'http://www.followme.com/api/v1',
        base: 'http://www.followme.com'
    },
    test: {
        cdn: 'http://pre.followme.com/cdn',
        api: 'http://pre.followme.com/api/v1',
        base: 'http://pre.followme.com'
    }
}
