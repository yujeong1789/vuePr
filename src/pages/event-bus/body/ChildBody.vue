<template>
  <div>
    <h3>ChildBody</h3>
    <input type="text" v-model="sendValue" />
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch } from "vue";
import { Emitter } from "mitt";

const sendValue = ref<string>("");
const emitter = inject<Emitter<any>>("$emitter");

watch(
  () => sendValue.value,
  () => {
    console.log("송신 :>> ", sendValue.value);
    emitter?.emit("update:inputValue", sendValue.value);
  }
);
</script>

<style scoped>
div {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  padding: 30px;
}
</style>
