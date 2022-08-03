import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: "hoza", email: "hoza@gmail.com", password: "123456" },
      { id: 2, name: "lego", email: "lego@gmail.com", password: "123456" },
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {},
  actions: {},
});
