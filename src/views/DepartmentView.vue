<template>
  <v-card>
    <v-card-title>
      Department
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in searchR()" :key="index">
        <tr v-for="(it, ind) in item.employee" :key="ind">
          <td>
            {{ it.id }}
          </td>
          <td>{{ it.name }}</td>
          <td>
            {{ it.age }}
          </td>
          <td>
            {{ it.salary }}
          </td>
        </tr>
      </tbody>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { dc } from "@/models/Employee";
import { depart } from "@/models/Department";
@Component
export default class DepartmentView extends Vue {
  Employee = dc;
  Department = depart;
  search = "";
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