<template>
  <div class="app">
    <h1 style="text-align: center">Root</h1>

    <p @click="onClickEventBus">1. eventBus</p>
    <div class="components" v-show="showEventBus">
      <ParentA />
      <ParentB />
    </div>

    <p @click="onClickComponent">2. component</p>
    <div class="components" v-show="showComponent">
      <ComponentMain />
    </div>

    <p @click="onClickKey">3. key</p>
    <div class="components" v-if="showKey">
      <KeyMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// eventBus
import ParentA from "@/pages/event-bus/CompA/ParentA.vue";
import ParentB from "@/pages/event-bus/CompB/ParentB.vue";

// component
import ComponentMain from "@/pages/component/ComponentMain.vue";

// key
import KeyMain from "@/pages/key/KeyMain.vue";

const showEventBus = ref<boolean>(true);
const showComponent = ref<boolean>(true);
const showKey = ref<boolean>(true);

const onClickEventBus = (): void => {
  showEventBus.value = !showEventBus.value;
};
const onClickComponent = (): void => {
  showComponent.value = !showComponent.value;
};
const onClickKey = (): void => {
  showKey.value = !showKey.value;
};
</script>

<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0px 60px 0px 60px;
}
.components {
  display: flex;
  justify-content: space-around;
}
p {
  cursor: pointer;
  font-weight: 600;
  margin-top: 80px;
}
</style>
