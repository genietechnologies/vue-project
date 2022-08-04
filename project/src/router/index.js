import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store";

Vue.use(VueRouter);

const loginUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    alert("이미 로그인을 하였습니다.");
    next("/");
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: loginUser,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin === false) {
        alert("로그인을 해야합니다.");
        next("/login");
      } else {
        next();
      }
    },
    component: () =>
      import(/* webpackChunkName: "mypage" */ "../views/MypageView.vue"),
  },
  {
    path: "/join",
    name: "join",
    component: () =>
      import(/* webpackChunkName: "join" */ "../views/JoinView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
