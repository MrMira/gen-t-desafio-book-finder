<script setup>
import { ref } from 'vue'

let searchText = ref('');
</script>

<template>
  <div class="searcher">
    <input class="searcher__input" type="text" v-model="searchText" />
    <button class="searcher__button" @click="$emit('searchRequested', searchText)">Buscar por Livros</button>
  </div>
</template>

<style scoped>
  .searcher__input {
    font-size: 12pt;

    padding: 5px;
    margin-right: 15px;
    width: 250px;

    color: #555;
    border: 2px solid #ccc;
    border-radius: 5px;
    
    outline: none;
  }

  .searcher__button {
    cursor: pointer;
    
    padding: 8px;
    font-weight: bold;

    border: none;
    border-radius: 5px;

    color: #555;
    border: 2px solid #ccc;
    border-radius: 5px;
    /*
    color: rgba(0, 0, 0, 0.65);
    border: 1px solid rgba(27, 31, 35, 0.15);
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    */
  }

  .searcher__button:active {
    background-color: #EDEFF2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }
  
  .searcher__button:hover {
    background-color: #F3F4F6;
    text-decoration: none;
    transition-duration: 0.1s;
  }
</style>
