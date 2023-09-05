<template>
  <div class="box">
    <select v-model="selectedOption">
      <option value="">선택</option>
      <option value="A">component A</option>
      <option value="B">component B</option>
      <option value="C">component C</option>
      <option value="D">component D</option>
      <option value="E">component E</option>
    </select>
  </div>
  <div class="box">
    <p>현재 컴포넌트:</p>

    <!-- 기존 v-if or v-show 사용 코드 -->
    <!--    <IncludeCompA v-if="selectedOption === 'A'" :msg="selectedOption + '입니다'"/>-->
    <!--    <IncludeCompB v-if="selectedOption === 'B'" :msg="selectedOption + '입니다'"/>-->
    <!--    <IncludeCompC v-if="selectedOption === 'C'" :msg="selectedOption + '입니다'"/>-->
    <!--    <IncludeCompD v-if="selectedOption === 'D'" :msg="selectedOption + '입니다'"/>-->
    <!--    <IncludeCompE v-if="selectedOption === 'E'" :msg="selectedOption + '입니다'"/>-->

    <!-- 특수 엘리먼트 component 사용 코드 -->
    <component
      :is="componentMap.get(selectedOption)"
      :msg="selectedOption + '입니다'"
    />
  </div>
</template>

<script setup lang="ts">
import { readonly, ref } from "vue";

import IncludeCompA from "@/pages/component/IncludeCompA.vue";
import IncludeCompB from "@/pages/component/IncludeCompB.vue";
import IncludeCompC from "@/pages/component/IncludeCompC.vue";
import IncludeCompD from "@/pages/component/IncludeCompD.vue";
import IncludeCompE from "@/pages/component/IncludeCompE.vue";

const componentMap = readonly<Map<string, any>>(
  new Map([
    ["A", IncludeCompA],
    ["B", IncludeCompB],
    ["C", IncludeCompC],
    ["D", IncludeCompD],
    ["E", IncludeCompE],
  ])
);
const selectedOption = ref<any>();
</script>
<style scoped>
select {
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 0.375rem;
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  font-size: 20px;
}
.box {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  padding: 30px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box > div {
  width: 100%;
  padding: 10px;
  border-radius: 0.375rem;
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  display: flex;
  justify-content: center;
}
</style>
