import router from "@/router";

export default {
  state: {
    userInfo: null,
    allUsers: [
      { id: "1", name: "hoza", email: "hoza@gmail.com", password: "123456" },
      { id: "2", name: "lego", email: "lego@gmail.com", password: "123456" },
    ],
    isLogin: false,
    isLoginError: false,
  },
  getters: {},
  mutations: {
    loginSuccess: (state, payload) => {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    loginError: (state) => {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout: (state) => {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    },
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    },
  },
  actions: {
    loginAction: ({ commit, state }, payload) => {
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        if (user.id === payload.id) selectedUser = user;
      });
      if (selectedUser === null || selectedUser.password !== payload.password) {
        commit("loginError");
      } else {
        commit("loginSuccess", selectedUser);
        router.push({ name: "home" });
      }
    },
    logoutAction: ({ commit }) => {
      if (confirm("정말 로그아웃 하시겠습니까?")) {
        commit("logout");
        router.push({ name: "home" }).catch(() => {});
      }
    },
  },
};
