<template>
  <div class="parentBody">
    <h2>ParentBody</h2>
    <ChildBody />
  </div>
</template>

<script setup lang="ts">
import ChildBody from "@/pages/event-bus/body/ChildBody.vue";
</script>

<style scoped>
.parentBody {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  padding: 30px;
  width: 350px;
}
</style>
