<template>
  <div id="app">
    <router-view @auth="setAuth" />
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "admin",
        password: "admin",
      },
    };
  },
  methods: {
    setAuth(status) {
      this.auth = status;
    }
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