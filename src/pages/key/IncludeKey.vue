<template>
  <div>
    <h3>Child</h3>
    <p>Parent로부터 받은 값: {{ propValue || typeof propValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const propValue = ref<any>(undefined);

interface Props {
  propValue: any;
}

const props: any = withDefaults(defineProps<Props>(), {
  propValue: undefined,
});

onMounted(() => {
  propValue.value = props.propValue;
});
</script>

<style scoped>
div {
  box-shadow: 0 2px 6px 0 rgba(67, 89, 113, 0.12);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
