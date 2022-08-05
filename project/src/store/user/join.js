export default {
  state: {},
  getters: {},
  mutations: {
    addUsers: (state, payload) => {
      state.login.allUsers.push(payload);
    },
  },
  actions: {
    addUserAction: ({ commit }, payload) => {
      commit("addUsers", payload);
      alert("회원가입에 성공하였습니다.");
    },
  },
};
