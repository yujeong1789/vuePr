<template>
  <div class="parentHeader">
    <h2>ParentHeader</h2>
    <ChildHeader />
  </div>
</template>

<script setup lang="ts">
import ChildHeader from "@/pages/event-bus/header/ChildHeader.vue";
</script>

<style scoped>
.parentHeader {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  padding: 30px;
  width: 350px;
}
</style>
