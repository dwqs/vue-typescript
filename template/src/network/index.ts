import axios from 'axios';

console.log('api prefix', (window as any).PREFIX);

const instance = axios.create({
    baseURL: (window as any).PREFIX,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    responseType: 'json',
    validateStatus(status) {
        return status >= 200 && status < 500;
    },
});

export interface Params {
    url: string,
    data?: any
}

export default {
    get(obj: Params) {
        return Promise.resolve(
            instance.get(obj.url, {
                params: obj.data ? obj.data : { },
            }),
        )
    },

    post(obj: Params) {
        return Promise.resolve(
            instance.post(obj.url, {
                data: obj.data ? obj.data : {},
            }),
        )
    },

    delete(obj: Params) {
        return Promise.resolve(
            instance.delete(obj.url, {
                data: obj.data ? obj.data : {},
            }),
        )
    },

    put(obj: Params) {
        return Promise.resolve(
            instance.put(obj.url, {
                data: obj.data ? obj.data : {},
            }),
        )
    },

    patch(obj: Params) {
        return Promise.resolve(
            instance.patch(obj.url, {
                data: obj.data ? obj.data : {},
            }),
        )
    },
};