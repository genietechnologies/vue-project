<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <h1>마이페이지</h1>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >아이디 : {{ userInfo.id }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >이름 : {{ userInfo.name }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >이메일 : {{ userInfo.email }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>
