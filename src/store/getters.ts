// 全局的 getters，从多个 module 里面聚合数据

export default {
    getterTest(state: any) {
        console.log('11111---getters', state);
        return state;
    },
} 