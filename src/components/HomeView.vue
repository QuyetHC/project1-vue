<template>
  <v-app id="home">
    <v-navigation-drawer v-model="drawer" app>
      <v-card class="mx-auto" max-width="500">
        <v-list>
          <v-list-item-group v-model="model">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Project</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container> <router-view></router-view> </v-container>
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  drawer = true;
  items = [
    {
      icon: "fa-fort-awesome",
      text: "Home",
      route: "/home",
    },
    {
      icon: "fa-elementor",
      text: "Employee",
      route: "/employee",
    },
  ];
  model = 1;

  logout() {
    sessionStorage.clear();
    this.$router.push("/login");
  }
}
</script>

<style scoped>
#home {
  display: flex;
  text-align: center;
}
</style>
