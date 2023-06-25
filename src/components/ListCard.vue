<script setup>
import CardBook from '../components/CardBook.vue';

const props = defineProps([
  'dataSource'
]);

</script>

<template>
  <div v-for="item in dataSource">
      <CardBook :="item" />
  </div>
</template>

<style scoped>
</style>
