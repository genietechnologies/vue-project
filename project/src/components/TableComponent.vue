<template>
  <v-app>
    <v-main>
      <v-container fluid mt-11>
        <v-layout align-center justify-center>
          <v-flex xs12 sm10>
            <h1 class="font-weight-bold text-h4 mb-10">데이터 목록</h1>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
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
    ...mapState("table", ["headers", "desserts"]),
  },
};
</script>
