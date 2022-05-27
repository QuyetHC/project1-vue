<template>
  <div class="employee">
    <v-card>
      <v-card-title>
        Employee
        <v-spacer></v-spacer>
        <v-autocomplete
          v-model="search"
          :items="DepartMap"
          item-text="Description"
          item-value="API"
          label="Public APIs"
          placeholder="search Department.."
          prepend-icon="mdi-database-search"
        ></v-autocomplete>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="tempList.length != 0 ? tempList : Employee"
        :search="searchR"
        @click:row="EmployeeDetail"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { dc, Employee } from "@/models/Employee";
import { depart } from "@/models/Department";

@Component
export default class EmployeeView extends Vue {
  Employee = dc;
  tempList = [];
  Department = depart;
  search = "";
  DepartMap = depart.map((x) => x.name);
  headers = [
    { text: "ID", value: "id" },
    { text: "Name", value: "name" },
    { text: "Age", value: "age" },
    { text: "Salary", value: "salary" },
    { text: "Department", value: "departmentId" },
  ];

  EmployeeDetail(emp: Employee) {
    this.$router.push("/employee/" + emp.id);
  }

  item() {
    return this.Department.map((depart) => depart.name);
  }
  @Watch("search")
  searchR() {
    if (this.search) {
      const depart = this.Department.find(
        (item) => item.name === this.search
      ).id;

      this.tempList = this.Employee.filter((item) => {
        return item.departmentId === depart;
      });

      /*
      return this.Employee.filter((item) => {
        return item.departmentId === depart;
      });*/
    } else {
      this.tempList.length = 0;
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