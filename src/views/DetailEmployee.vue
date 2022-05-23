<template>
  <div class="single-employee">
    <div>
      <h3>Employee Detail</h3>
      <div class="card">
        <div class="card-body">
          <form class="form-inline">
            <div class="form-group">
              <label>ID</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Age</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Salary</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group">
              <label>Department</label>
              <input
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
  mounted() {
    for (let i = 0; i < this.Employee.length; i++) {
      if ((this.Employee.length = 2)) {
        console.log(2);
      }
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon {
  margin-right: 10px;
  border-radius: 1px solid black;
}
.icon i {
  cursor: pointer;
}
</style>