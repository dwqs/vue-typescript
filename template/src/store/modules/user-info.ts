'use strict';

import { ActionContext } from 'vuex';
import awaitTo from 'async-await-error-handling';

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
        const [err, data] = await awaitTo(Promise.resolve(22222));
        if(err){
            commit({
                type: CONSTANT.CHANGE_USER_NAME,
                name: null,
            });
            return;
        }
        commit({
            type: CONSTANT.CHANGE_USER_NAME,
            name: data,
        });
        return data;
    },
};

const mutations = {
    [CONSTANT.CHANGE_USER_NAME](state: UserState, payload: any): any {
        console.log('CONSTANT.CHANGE_USER_NAME', payload);
        if(payload.name){
            state.name = payload.name;
        }
    },
};

export default {
    namespace: 'user',
    state: userState,
    getters,
    actions,
    mutations, 
}