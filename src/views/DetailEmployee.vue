<template>
  <div class="single-employee">
    <div>
      <h3>Employee Detail</h3>
      <div class="card">
        <div class="card-body">
          <form class="form-inline">
            <div class="form-group">
              <label>ID: </label>
              <input
                v-model="info.id"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Name: </label>
              <input
                v-model="info.name"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Age: </label>
              <input
                v-model="info.age"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Salary: </label>
              <input
                v-model="info.salary"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Department: </label>
              <input
                v-model="info.departmentId"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="ml-auto text-right">
              <button type="submit" class="btn btn-primary my-2">Edit</button>
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
import router from "@/router";

@Component
export default class extends Vue {
  Employee = dc;
  Eid = this.$route.params.id;
  info = this.Employee.find((employee) => {
    return employee.id == parseInt(this.Eid);
  });

  mounted() {
    this.info;
  }
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