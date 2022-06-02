<template>
  <v-container class="home">
    <v-col cols="12" lg="10" md="8" sm="8">
      <h3>Top 10 Người Lương Cao Nhất</h3>
      <v-row>
        <v-col v-for="(item, index) in top10" :key="index">
          <v-card height="auto">
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
        <v-col v-for="(item, index) in tempEmployee" :key="index">
          <v-card height="auto">
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
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { dc } from "@/models/Employee";
import { depart } from "@/models/Department";
import { action, observable } from "mobx";

@Component
export default class extends Vue {
  @observable
  Employee = dc;
  Department = depart;
  tempEmployee = [];
  top10 = [];

  @action
  orderedUsers() {
    this.top10 = this.Employee.sort((a, b) => b.salary - a.salary).slice(0, 10);
  }

  created() {
    this.orderedUsers();
    this.TotalSalary();
  }

  @action
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
