<template>
  <div>
    <h3>ChildA</h3>
    <p>입력된 값: {{ receiveData }}</p>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { Emitter } from "mitt";

const receiveData = ref<string>("");
const emitter = inject<Emitter<any>>("$emitter");

emitter?.on("update:inputValue", (value: string): void => {
  console.log("수신 :>> ", value);
  receiveData.value = value;
});
</script>

<style scoped>
div {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  padding: 30px;
}
</style>
