<template>
  <div class="single-employee">
    <div>
      <h3>Employee Detail</h3>
      <div class="card">
        <div class="card-body">
          <form class="form-inline">
            <div class="form-group">
              <v-text-field
                v-model="info.id"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                label="ID"
                disabled="false"
                required
              ></v-text-field>
            </div>
            <div class="form-group">
              <v-text-field
                v-model="info.name"
                :counter="20"
                :rules="nameRules"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                label="Name"
                required
              ></v-text-field>
            </div>
            <div class="form-group">
              <v-text-field
                v-model="info.age"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                label="Age"
                required
              ></v-text-field>
            </div>
            <div class="form-group">
              <v-text-field
                v-model="info.salary"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                label="Salary"
                required
              ></v-text-field>
            </div>
            <div class="form-group">
              <select
                class="form-control"
                v-model="info.departmentId"
              >
                <option v-for="item in Employee" :value="item.departmentId" :key="item.departmentId">
                  {{ item.departmentId }}
                </option>
              </select>
            </div>
            <div class="ml-auto text-right">
              <v-btn @click="clickEdit(info)" depressed> Edit </v-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { dc } from "@/models/Employee";
import { depart } from "@/models/Department";

@Component
export default class extends Vue {
  Employee = dc;
  Department = depart;
  Eid = this.$route.params.id;
  info = this.Employee.find((employee) => {
    return employee.id == parseInt(this.Eid);
  });

  mounted() {
    this.info;
  }

  clickEdit(itemSave) {
    this.Employee.findIndex((e) => e.id === itemSave.id);
    window.location.replace;
  }
  nameRules = [
    (v) => !!v || "Name is required",
    (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
  ];
}
</script>

<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.card {
  display: flex;
}
</style>