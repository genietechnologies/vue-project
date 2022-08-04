<template>
  <v-app id="inspire">
    <v-main>
      <v-container fill-height fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-alert type="error" v-if="$store.state.isLoginError" class="mb-3"
              >아이디 또는 비밀번호를 확인해주세요.</v-alert
            >
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>로그인</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    name="id"
                    label="아이디를 입력해주세요."
                    type="text"
                    v-model="id"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="패스워드를 입력해주세요."
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" router :to="{ name: 'join' }"
                  >회원가입</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  @click="$store.dispatch('loginAction', { id, password })"
                  >로그인</v-btn
                >
                <v-btn color="primary">비밀번호 찾기</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      password: null,
    };
  },
};
</script>
