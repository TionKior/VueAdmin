import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 后端返回的jwt
        token: ''
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
            // 保存到localStorage中
            localStorage.setItem("token", token)
        }
    },
    actions: {},
    modules: {}
})
