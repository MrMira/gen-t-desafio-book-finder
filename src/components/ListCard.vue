<script setup>

const props = defineProps([
  'dataSource'
]);

</script>

<template>
  <div v-for="t in dataSource">
      {{t.titulo}}
  </div>
</template>

<style scoped>
</style>
