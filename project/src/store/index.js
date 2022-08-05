import Vue from "vue";
import Vuex from "vuex";
import login from "./user/login";
import join from "./user/join";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    join,
  },
});
