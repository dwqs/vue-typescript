// 全局的 actions，触发的 action 会被多个 module 处理
import { ActionContext } from 'vuex'; 

export default {
    actionTest({commit}: ActionContext<any, any>, payload: any) {
           console.log('111---actions');
    },
}