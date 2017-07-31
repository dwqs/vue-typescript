import {observable, action} from 'mobx';

import awaitTo from 'async-await-error-handling';

class Time {
    @observable
    public curTime: number = 0;

    constructor(time: number){
        this.curTime = time;
    }

    @action
    public async changeTime(): Promise<any> {
        const [err, data] = await awaitTo(new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve('async changeTime');
            }, 10)
        }));
        console.log('tima model, changeTime', data);
        if(!data){
            return Promise.reject(err);
        }
        // another way to use async/await: https://github.com/mobxjs/mobx/issues/299
        // docs: https://mobx.js.org/refguide/action.html
        this.timeChange();
    }

    @action
    public timeChange(): void{
        this.curTime = Date.now();
    }
}

let time = new Time(Date.now());

export default time;