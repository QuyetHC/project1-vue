<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link v-if="auth" to="/login" v-on:click.native="logout()" replace
        >Logout</router-link
      > -->
    </div>
    <router-view @auth="setAuth" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "quyet",
        password: "pass",
      },
    };
  },
  mounted() {
    if (!this.auth) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuth(status) {
      this.auth = status;
    },
    logout() {
      this.auth = false;
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f0f0f0;
}
h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  width: 1024px;
  margin: auto;
}
</style>