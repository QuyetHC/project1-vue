<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Project</v-toolbar-title>
      
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 6" :key="n" cols="6">
            <v-card height="350"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: null,
    items: [
      {
        icon: "mdi-inbox",
        text: "Inbox",
      },
      {
        icon: "mdi-star",
        text: "Star",
      },
      {
        icon: "mdi-send",
        text: "Send",
      },
      {
        icon: "mdi-email-open",
        text: "Drafts",
      },
    ],
    model: 1,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
