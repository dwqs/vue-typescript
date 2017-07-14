'use strict';

import { ActionContext } from 'vuex';
import * as CONSTANT from '../mutation-types';

interface UserState {
    name: string,
    age: number
};

const userState: UserState = {
    name: 'user test',
    age: 1,
};

const getters = {
    getUserName(state: UserState): string {
        return state.name
    },
    getUserAge(state: UserState): number {
        return state.age
    },
};

const actions = {
    changeUserAge({commit}: ActionContext<UserState, any>, payload: any): any{
        console.log('changeUserAge', payload)
    },

    async changeUserName({commit}: ActionContext<UserState, any>, payload: any): Promise<any> {
        console.log('changeUserName', payload)
        const res = await Promise.resolve(22222);
        commit({
            type: CONSTANT.CHANGE_USER_NAME,
            name: res,
        });
        return res;
    },
};

const mutations = {
    [CONSTANT.CHANGE_USER_NAME](state: UserState, payload: any): any {
        console.log('CONSTANT.CHANGE_USER_NAME', payload);
        state.name = payload.name;
    },
};

export default {
    namespace: 'user',
    state: userState,
    getters,
    actions,
    mutations, 
}