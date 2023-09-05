<template>
  <div class="parentHeader">
    <h2>ParentA</h2>
    <ChildA />
  </div>
</template>

<script setup lang="ts">
import ChildA from "@/pages/event-bus/CompA/ChildA.vue";
</script>

<style scoped>
.parentHeader {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  padding: 30px;
  width: 350px;
}
</style>
