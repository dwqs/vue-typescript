import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 全局的 actions & getters
import actions from './actions';
import getters from './getters';

// modules
import user from './modules/user-info';

export default new Vuex.Store({
   strict: false,
   actions,
   getters,
   modules: {
       user,
   },
});
