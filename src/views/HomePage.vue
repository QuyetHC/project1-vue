<template>
  <div>
    
      {{orderedUsers()}}
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
  orderedUsers() {
      this.Employee.sort((a, b) => b.salary - a.salary).slice(0, 10);
  }
}

</script>

<style scoped>
</style>