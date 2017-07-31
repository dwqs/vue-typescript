'use strict';

import { ActionContext } from 'vuex';
import awaitTo from 'async-await-error-handling';

import api from '../../network/api';
import * as CONSTANT from '../mutation-types';

interface TimeState {
    curTime: number
};

const timeState: TimeState = {
    curTime: Date.now()
};

const getters = {
    getCurTime(state: TimeState): number{
        return state.curTime;
    }
};

const actions = {
    async changeTime({commit}: ActionContext<TimeState, any>, payload: any):  Promise<any>{
        const [err, data] =  await awaitTo(api.getIndex());
        console.log('changeTime', data);

        if(err){
            commit({
                type: CONSTANT.CHANGE_TIME,
                res: null
            });
            return;
        }

        commit({
            type: CONSTANT.CHANGE_TIME,
            res: Date.now()
        })
    }
};

const mutations = {
    [CONSTANT.CHANGE_TIME](state: TimeState, payload: any): any {
        if(payload.res){
            state.curTime = payload.res;
        }
    },
};

export default {
    namespace: 'user',
    state: timeState,
    getters,
    actions,
    mutations, 
}