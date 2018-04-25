// Promise polyfill for webpack2+: https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
require('es6-promise').polyfill();

import 'normalize.css';
import 'babel-polyfill';

import './hooks';

import Vue from 'vue';
import Router from 'vue-router';
{{#if_eq state 'vuex'}}
import { sync } from 'vuex-router-sync';
{{/if_eq}}
{{#if_eq state 'mobx'}}
import VueMobx from 'vue-mobx';
import { observable, isObservable, toJS } from 'mobx';

Vue.use(VueMobx, {
    toJS,
    isObservable,
    observable: observable
});
{{/if_eq}}

const env = process.env.NODE_ENV || 'development';

if (env !== 'development') {
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
}

{{#if_eq state 'vuex'}}
import store from '../vuex/index';
{{/if_eq}}

Vue.use(Router);

// dynamic import for on-demand loaded chunk
const App = (r: any) => require.ensure([], () => r(require('../general/app/index.vue')), 'app1');
const Info = (r: any) => require.ensure([], () => r(require('@components/info/index.vue')), 'info');

const Outer = { template: '<router-view></router-view>' };

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Outer,
            children: [
                { path: '', component: App },
                { path: 'info', component: Info },
            ],
        },
    ],
});

{{#if_eq state 'vuex'}}
sync(store, router);
{{/if_eq}}

const app = new Vue({
    router,
    {{#if_eq state 'vuex'}}
    store,
    {{/if_eq}}
    ...Outer,
});

app.$mount('#app');
