<template>
  <v-app id="home">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <ul>
          <li>
            <router-link to="/home" active-class="active" custom>
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/employee" active-class="active" custom>
              Employee
            </router-link>
          </li>
        </ul>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Project</v-toolbar-title>
      <!-- <router-link v-if="auth" to="/login" v-on:click.native="logout()" replace
        >LOGOUT</router-link
      > -->
    </v-app-bar>

    <v-main>
      <v-container> <router-view></router-view> </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>