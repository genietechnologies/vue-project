import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 1, name: "hoza", email: "hoza@gmail.com", password: "123456" },
      { id: 2, name: "lego", email: "lego@gmail.com", password: "123456" },
    ],
    isLogin: false,
  },
  getters: {},
  mutations: {
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    },
    doLogin: (state) => {
      state.isLogin = true;
    },
    doLogout: (state) => {
      state.isLogin = false;
    },
  },
  actions: {
    addUserAction: ({ commit }, payload) => {
      commit("addUsers", payload);
    },
    login: ({ commit }, payload) => {
      console.log(payload.id);
      console.log(payload.password);
      commit("doLogin");
    },
  },
});
