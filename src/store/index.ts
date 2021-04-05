import { createStore } from 'vuex';

export default createStore({
  state: {
    isLogin: false
  },
  mutations: {
    updateIsLogin(state, value: boolean) {
      state.isLogin = value;
    }
  },
  actions: {},
  modules: {}
});
