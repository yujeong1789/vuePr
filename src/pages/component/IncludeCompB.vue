<template>
  <div>
    <h3>{{ props.msg }}</h3>
  </div>
</template>
<script setup lang="ts">
interface Props {
  msg: string;
}

const props: any = withDefaults(defineProps<Props>(), {
  msg: "",
});
</script>
