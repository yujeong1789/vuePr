<template>
  <div class="keyMain">
    <h3>Parent</h3>
    <p>{{ msg }}</p>
    <span @click="onClickForceRender">force render click!</span>
    <IncludeKey :propValue="propValue" :key="includeKeyRerenderFlag" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import IncludeKey from "@/pages/key/IncludeKey.vue";

const msg = ref<string>("");
const propValue = ref<any>(undefined);
const includeKeyRerenderFlag = ref<number>(0);

onMounted(() => {
  setTimeout(() => {
    propValue.value = "foo";
    msg.value = "Child 엘리먼트에 " + propValue.value + "를 전달했습니다.";
  }, 1000);
});

const onClickForceRender = (): void => {
  includeKeyRerenderFlag.value = new Date().getTime();
};
</script>
<style scoped>
.keyMain {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  padding: 30px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

span {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 10px 30px 10px 30px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 30px;
}
</style>
