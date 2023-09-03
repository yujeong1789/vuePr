<template>
  <div>
    <select v-model="selectedOption">
      <option value="">선택</option>
      <option value="A">component A</option>
      <option value="B">component B</option>
      <option value="C">component C</option>
      <option value="D">component D</option>
      <option value="E">component E</option>
    </select>
  </div>
  <div>
    <!-- 기존 v-if or v-show 사용 코드 -->

    <!-- 특수 엘리먼트 component 사용 코드 -->
    현재 컴포넌트:
    <component :is="componentMap.get(selectedOption)" />
  </div>
</template>

<script setup lang="ts">
import { readonly, ref } from "vue";

import IncludeCompA from "@/pages/component/IncludeCompA.vue";
import IncludeCompB from "@/pages/component/IncludeCompB.vue";
import IncludeCompC from "@/pages/component/IncludeCompC.vue";
import IncludeCompD from "@/pages/component/IncludeCompD.vue";
import IncludeCompE from "@/pages/component/IncludeCompE.vue";

const componentMap = readonly(
  new Map([
    ["A", IncludeCompA],
    ["B", IncludeCompB],
    ["C", IncludeCompC],
    ["D", IncludeCompD],
    ["E", IncludeCompE],
  ])
);
const selectedOption = ref<string>("");
</script>

<style scoped></style>
