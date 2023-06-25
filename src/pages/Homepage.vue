<script setup>
  import { ref } from 'vue';

  import Searcher from '../components/Searcher.vue';
  import ListCard from '../components/ListCard.vue';

  import GoogleBooksApi from '../services/GoogleBooksAPI.js';
  
  let dataSource = ref([]);

  function handleSearchRequest(text) {
      function success(dataRaw) {
        dataSource.value = GoogleBooksApi.ParseBookItems(dataRaw);
      }

      function error() {
        dataSource.value = [];
      }

      GoogleBooksApi.SearchForBooks(text, success, error);
  }
</script>

<template>
  <div>
    <h1>Book Finder</h1>
  </div>
  <div>
    <Searcher @search-requested="handleSearchRequest" />
  </div>
  <div>
    <ListCard :data-source="dataSource" />
  </div>
</template>

<style scoped>
</style>
