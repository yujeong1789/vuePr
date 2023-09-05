<template>
  <div class="parentBody">
    <h2>ParentB</h2>
    <ChildB />
  </div>
</template>

<script setup lang="ts">
import ChildB from "@/pages/event-bus/CompB/ChildB.vue";
</script>

<style scoped>
.parentBody {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  padding: 30px;
  width: 350px;
}
</style>
