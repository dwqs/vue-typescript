import {observable, action} from 'mobx';

import awaitTo from 'async-await-error-handling';
import api from '../network/api';

class Time {
    @observable
    public curTime: number = 0;

    constructor(t: number){
        this.curTime = t;
    }

    @action
    public async changeTime(): Promise<any> {
        const [err, data] = await awaitTo(api.getIndex());
        console.log('tima model, changeTime', data);
        if(!data) {
            return Promise.reject(err);
        }
        // another way to use async/await: https://github.com/mobxjs/mobx/issues/299
        // docs: https://mobx.js.org/refguide/action.html
        this.timeChange();
    }

    @action
    public timeChange(): void {
        this.curTime = Date.now();
    }
}

let time = new Time(Date.now());

export default time;