<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-alert v-if="validations === 1" type="error"
              >필수 입력사항 입니다.</v-alert
            >
            <v-alert v-if="validations === 2" type="error"
              >아이디가 중복 되었습니다.</v-alert
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
      isDuplicated: false,
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
      this.validations = null;
      this.isDuplicated = false;
      console.log(this.validations, this.isDuplicated);
      this.validationCheck(userObj);
      if (this.validations === 3) {
        this.addUserAction(userObj);
        this.clearForm();
        this.$router.push({ name: "home" });
      }
    },
    clearForm() {
      (this.id = null),
        (this.password = null),
        (this.name = null),
        (this.email = null),
        (this.validations = null),
        (this.isDuplicated = false);
    },
    validationCheck(data) {
      this.duplicationCheck(data);
      if (
        data.id === null ||
        data.id === "" ||
        data.password === null ||
        data.password === "" ||
        data.name === null ||
        data.name === "" ||
        data.email === null ||
        data.email === ""
      ) {
        return (this.validations = 1);
      } else if (this.isDuplicated === true) {
        return (this.validations = 2);
      } else {
        return (this.validations = 3);
      }
    },
    duplicationCheck(data) {
      this.$store.state.allUsers.forEach((user) => {
        if (user.id === data.id) this.isDuplicated = true;
      });
    },
  },
};
</script>
