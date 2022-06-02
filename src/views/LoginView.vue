
<template>
  <v-form class="login" ref="form" v-model="valid" lazy-validation>
    <h1 id="login">Login</h1>
    <v-text-field
      v-model="input.username"
      :counter="5"
      :rules="nameRules"
      label="Username"
      name="username"
      required
    ></v-text-field>
    <v-text-field
      v-model="input.password"
      type="password"
      :counter="4"
      :rules="passRules"
      label="Password"
      required
    ></v-text-field>
    <v-btn class="mr-4" :disabled="!valid" @click="login()"> Login </v-btn>
  </v-form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      valid: true,
      input: {
        username: "",
        password: "",
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 5) || "Name must be less than 5 characters",
      ],
      passRules: [
        (v) => !!v || "Pass is required",
        (v) =>
          (v && v.length >= 4) ||
          "Name must be less than 4 characters or number.",
      ],
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("auth", false);
          sessionStorage.setItem('username', this.username);
          this.$router.replace({ name: "home" });
        } else {
          alert("The username or password is incorrect");
        }
      } else {
        alert("A username and password must be present");
      }
    },
  },
};
</script>

<style scoped>
.login {
  text-align: center;
  margin-top: 15%;
}
</style>