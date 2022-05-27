<template>
  <div>
    <v-autocomplete
      v-model="search"
      :items="Department.map((x) => x.name)"
      item-text="Description"
      item-value="API"
      label="Public APIs"
      placeholder="search Department.."
      prepend-icon="mdi-database-search"
    ></v-autocomplete>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { depart } from "@/models/Department";

@Component
export default class extends Vue {
    search= "";
    Department = depart;
}
</script>

<style scoped>
</style>