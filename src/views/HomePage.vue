<template>
  <v-container class="home" >
        <h3>Top 10 Người Lương Cao Nhất</h3>
        <v-row>
          <v-col v-for="(item, index) in top10" :key="index">
            <v-card height="250" width="160">
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
        <v-row no-gutters>
          <v-col v-for="(item, index) in tempEmployee" :key="index">
            <v-card height="250" width="160">
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
import { action, observable, computed } from "mobx";

@Component
export default class extends Vue {
  Employee = dc;
  Department = depart;
  @observable tempEmployee = [];
  @observable top10 = [];

  @computed
  orderedUsers() {
    this.top10 = this.Employee.sort((a, b) => b.salary - a.salary).slice(0, 10);
  }

  @action
  created() {
    this.orderedUsers();
    this.TotalSalary();
  }

  @computed
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
</style>
