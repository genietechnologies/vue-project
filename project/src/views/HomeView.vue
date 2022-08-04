<template>
  <hello-world />
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
  },
  created() {
    console.log(`아이디 총 갯수: ${this.$store.state.allUsers.length}`);
    this.$store.state.allUsers.forEach((user) => {
      console.log(user.id);
    });
  },
};
</script>
