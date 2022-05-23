<template>
  <div class="employee">
    <v-autocomplete
      v-model="search"
      :items="Department.map((x) => x.name)"
      item-text="Description"
      item-value="API"
      label="Public APIs"
      placeholder="search Department.."
      prepend-icon="mdi-database-search"
    ></v-autocomplete>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchR()" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.salary }}</td>
          <td>{{ item.departmentId }}</td>
          <td>
            <router-link class="btn btn-primary" v-bind:to="'employee/'+ item.id">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <v-data-table :items-per-page="5"></v-data-table>
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
  search = "";
  item() {
    return this.Department.map((depart) => depart.name);
  }
  @Watch("search")
  searchR() {
    if (this.search) {
      const depart = this.Department.find(
        (item) => item.name == this.search
      ).id;
      return this.Employee.filter((item) => {
        return item.departmentId == depart;
      });
    } else {
      return this.Employee;
    }
  }
}
</script>

<style scoped>
table,
td,
th {
  border: 1px solid;
}

table {
  width: 100%;
  border-collapse: collapse;
}
</style>