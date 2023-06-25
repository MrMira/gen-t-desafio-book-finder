<script setup>
  import { ref } from 'vue';

  import Searcher from '../components/Searcher.vue';
  import ListCard from '../components/ListCard.vue';

  import GoogleBooksApi from '../services/GoogleBooksAPI.js';
  
  let dataSource = ref([]);
  let dataLoading = ref('');
  let textNoDataAvailable = ref('');

  function handleSearchRequest(text) {
    
    function success(dataRaw) {
        textNoDataAvailable.value = '';
        dataLoading.value = 'loader';
        dataSource.value = GoogleBooksApi.ParseBookItems(dataRaw);
        dataLoading.value = '';
      }

      function error() {
        textNoDataAvailable.value = 'Ocorreu um erro ao tentar fazer a busca pelos livros. Por favor, tente mais tarde...';
        dataSource.value = [];
      }

      GoogleBooksApi.SearchForBooks(text, success, error);
  }
</script>

<template>
  <div class="page-book">
    <div class="book-head">
      <h1 class="book-head__title">Buscador de Livros</h1>
      <Searcher @search-requested="handleSearchRequest" />
    </div>
    <div class="book-body">
      <ListCard :data-source="dataSource" />
      <div class="body-help">
        <div :class="{dataLoading}"></div>
        <p class="body-help__no-data">{{textNoDataAvailable}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .book-head {
    margin: 20px 0;
    text-align: center;
  }

  .book-head__title {
    margin-bottom: 10px;
  }

  .body-help {
    margin-top: 50px;
    text-align: center;
  }

  .body-help__no-data {
    font-style: italic;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #444;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  } 
</style>
