<script setup>
import { ref } from 'vue'

let searchText = ref('');
</script>

<template>
  <div>
    <input type="text" v-model="searchText" />
    <button @click="$emit('searchRequested', searchText)">Buscar</button>
  </div>
</template>

<style scoped>
</style>
