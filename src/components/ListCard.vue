<script setup>
import CardBook from '../components/CardBook.vue';

const props = defineProps([
  'dataSource'
]);

</script>

<template>
  <div class="list-card" >
      <CardBook v-for="item in dataSource" :="item" />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .list-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    flex-direction: row;
  }
}
</style>
