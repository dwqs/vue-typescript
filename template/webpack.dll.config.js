'use strict';

const path = require('path');
const webpack = require('webpack');

{{#if_eq state 'vuex'}}
let vendors = [
    'vuex', 'vuex-router-sync'
];
{{/if_eq}}
{{#if_eq state 'mobx'}}
let vendors = [
    'mobx', 'vue-mobx'
];
{{/if_eq}}

module.exports = {
    entry: {
        vendor: vendors.concat('vue', 'vue-class-component', 'vue-router', 'babel-polyfill', 'async-await-error-handling')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].dll.js',
        //定义输出：window.${output.library}
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
          path: path.join(__dirname, './dist', '[name]-manifest.json'),
          // 和 output.library 一样即可
          name: '[name]_library'
      })
    ]
}
