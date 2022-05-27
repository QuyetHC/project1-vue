<template>
  <v-container class="home d-lg-col-4 d-md-col-3 d-sm-col-2">
    <h3>Top 10 Người Lương Cao Nhất</h3>
    <v-row>
      <v-col v-for="(item, index) in top10" :key="index" cols="3">
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
      <v-col v-for="(item, index) in tempEmployee" :key="index" cols="3">
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
  tempEmployee = [];
  top10 = [];
  orderedUsers() {
    this.top10 = this.Employee.sort((a, b) => b.salary - a.salary).slice(0, 10);
  }

  created() {
    this.orderedUsers();
    this.TotalSalary();
  }
  TotalSalary() {
    let high = 0;
    let highDepartmentId;
    this.Department.forEach((department) => {
      let total = 0;
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
    this.tempEmployee = this.Employee.filter(
      (employee) => employee.departmentId === highDepartmentId
    );
  }
}
</script>
<style scoped>
.home {
  text-align: center;
}
</style>