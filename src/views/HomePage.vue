<template>
  <v-container class="home d-lg-col-4 d-md-col-3 d-sm-col-2">
    <h3>Top 10 Người Lương Cao Nhất</h3>
    <v-row>
      <v-col v-for="(item, index) in orderedUsers()" :key="index" cols="3">
        <v-card height="200">
          <div>ID: {{ item.id }}</div>
          <div>Name: {{ item.name }}</div>
          <div>Age: {{ item.age }}</div>
          <div>Salary: {{ item.salary }}</div>
          <div>
            <v-avatar color="indigo" size="100">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
    <h3>Phòng Ban Có Tổng Lương Cao Nhất</h3>
    <v-row>
      <v-col v-for="(item, index) in TotalSalary()" :key="index" cols="3">
        <v-card height="200">
          <div>ID: {{ item.id }}</div>
          <div>Name: {{ item.name }}</div>
          <div>Age: {{ item.age }}</div>
          <div>Salary: {{ item.salary }}</div>
          <div>
            <v-avatar color="indigo" size="100">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { dc } from "@/models/Employee";
import { depart } from "@/models/Department";

@Component
export default class extends Vue {
  Employee = dc;
  Department = depart;
  orderedUsers() {
    return this.Employee.sort((a, b) => b.salary - a.salary).slice(0, 10);
  }

  TotalSalary() {
    let total = 0;
    let high = 0;
    let highDepartmentId = 0;
    this.Department.forEach((department) => {
      const emp = this.Employee.filter(
        (employee) => employee.departmentId === department.id
      );
      emp.forEach((employee) => {
        total += employee.salary;
      });
      if (total > high) {
        high = total;
        highDepartmentId = department.id;
      }
    });
    return this.Employee.filter(
      (employee) => employee.departmentId == highDepartmentId
    );
  }
}
</script>
<style scoped>
.home {
  text-align: center;
}
</style>