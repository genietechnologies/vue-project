<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" expand-on-hover mini-variant app>
      <v-list dense>
        <v-list-item router :to="{ name: 'home' }" exact>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="$store.state.login.isLogin === false"
          router
          :to="{ name: 'login' }"
          exact
        >
          <v-list-item-action>
            <v-icon>person</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>로그인</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else router :to="{ name: 'mypage' }" exact>
          <v-list-item-action>
            <v-icon>notes</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>마이페이지</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="$store.state.login.isLogin === false"
          router
          :to="{ name: 'join' }"
          exact
        >
          <v-list-item-action>
            <v-icon>person</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>회원가입</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else exact style="cursor: pointer">
          <v-list-item-action>
            <v-icon>person</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="$store.dispatch('logoutAction')"
              >로그아웃</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{ name: 'table' }" exact>
          <v-list-item-action>
            <v-icon>mdi-list-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>데이터 목록</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{ name: 'chart' }" exact>
          <v-list-item-action>
            <v-icon>mdi-list-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>chartjs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="indigo" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Genie</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- <v-menu offset-y v-if="$store.state.isLogin">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark text v-bind="attrs" v-on="on" icon>
              <v-icon>dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{ name: 'mypage' }">
              <v-list-item-title>마이페이지</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$store.dispatch('logoutAction')">
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
        <v-btn text router :to="{ name: 'table' }">데이터 목록</v-btn>
        <v-btn
          text
          v-if="$store.state.login.isLogin"
          router
          :to="{ name: 'mypage' }"
          >마이페이지</v-btn
        >
        <v-btn text v-else router :to="{ name: 'login' }">로그인</v-btn>
        <v-btn
          text
          v-if="$store.state.login.isLogin"
          @click="$store.dispatch('logoutAction')"
          >로그아웃</v-btn
        >
        <v-btn text v-else router :to="{ name: 'join' }">회원가입</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2022</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
};
</script>
