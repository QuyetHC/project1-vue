<template>
  <div class="employee">
    <v-autocomplete
      v-model="search"
      :items="item()"
      item-text="Description"
      item-value="API"
      label="Public APIs"
      placeholder="search Department.."
      prepend-icon="mdi-database-search"
    ></v-autocomplete>
    <div>
      <ul>
        <li v-for="(item, index) in searchR()" :key="index">
          {{ item.name }}
          <div class="searchR" v-for="(it, ind) in item.employee" :key="ind">
            {{ it.id }} - {{ it.name }} - {{ it.age }} - {{ it.salary }}
          </div>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { dc } from "@/models/Employee";
import { depart } from "@/models/Department";

@Component
export default class EmployeeView extends Vue {
  Employee = dc;
  Department = depart;
  search = '';
  @Watch("search")
  item() {
    return this.Department.map((depart) => depart.name);
  }
  @Watch("search")
  searchR() {
    if (this.search) {
      return this.Department.filter((item) => {
        return item.name == this.search;
      });
    } else {
      return this.Department;
    }
  }
}
</script>

<style scoped>
</style>