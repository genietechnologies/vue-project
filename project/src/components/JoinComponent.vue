<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-alert v-if="validations === false" type="error"
              >필수 입력사항 입니다.</v-alert
            >
            <h1>회원가입</h1>
            <v-text-field label="아이디" v-model="id"></v-text-field>
            <v-text-field
              label="비밀번호"
              type="password"
              v-model="password"
            ></v-text-field>
            <v-text-field label="이름" v-model="name"></v-text-field>
            <v-text-field label="이메일" v-model="email"></v-text-field>
            <v-btn @click="signUp">회원가입</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      id: null,
      password: null,
      name: null,
      email: null,
      validations: null,
    };
  },
  methods: {
    ...mapActions(["addUserAction"]),
    signUp() {
      let userObj = {
        id: this.id,
        password: this.password,
        name: this.name,
        email: this.email,
      };
      this.validationCheck(userObj);
      if (this.validations === true) {
        this.addUserAction(userObj);
        this.clearForm();
        this.$router.push({ name: "home" });
      }
    },
    clearForm() {
      (this.id = null),
        (this.password = null),
        (this.name = null),
        (this.email = null);
    },
    validationCheck(data) {
      if (
        data.id === null ||
        data.password === null ||
        data.name === null ||
        data.email === null
      ) {
        return (this.validations = false);
      } else {
        return (this.validations = true);
      }
    },
  },
};
</script>
