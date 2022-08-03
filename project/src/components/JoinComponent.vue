<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
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
    </v-content>
  </v-app>
</template>
