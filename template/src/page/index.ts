import './hooks';
import './reset.css';

import Vue from 'vue';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';

const env = process.env.NODE_ENV || 'development';

if (env !== 'development') {
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
}

import store from '../store/index';

Vue.use(Router);

// dynamic import for on-demand loaded chunk
const App = (r: any) => require.ensure([], () => r(require('../general/app/index.vue')), 'app1');
const Info = (r: any) => require.ensure([], () => r(require('@components/info/index.vue')), 'info');

const Outer = { template: '<router-view></router-view>' };

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '{{publicPath}}',
            component: Outer,
            children: [
                { path: '', component: App },
                { path: 'info', component: Info },
            ],
        },
    ],
});

sync(store, router);

const app = new Vue({
    router,
    store,
    ...Outer,
});

app.$mount('#app');
