<script setup>
import { ref } from 'vue';

import SearchBar from '../components/SearchBar.vue';
import Loading from '../components/Loading.vue';
import ListCard from '../components/ListCard.vue';

import GoogleBooksApi from '../services/GoogleBooksApi.js';
import Constants from '../util/Constants.js';

let dataSource = ref([]);

let isLoading = ref(false);
let textProblem = ref('');

let handleSearchRequested = function (text) {
  dataSource.value = [];

  if (text === '') {
    textProblem.value = 'Antes de clicar no botão de busca, informe um termo para pesquisa.'
    return;
  }

  let onSuccess = function (data) {
    if (data.totalItems === 0) {
      textProblem.value = 'Não foi encontrado nenhum resultado para o termo de pesquisa fornecido.';
      return;
    }

    textProblem.value = '';
    isLoading.value = true;

    if (Constants.TimeToDelayRequestInMilliseconds !== 0) {
      setTimeout(function() {
        isLoading.value = false;
        dataSource.value = GoogleBooksApi.ParseBookItems(data);
      }, Constants.TimeToDelayRequestInMilliseconds);
    } else {
      isLoading.value = false;
      dataSource.value = GoogleBooksApi.ParseBookItems(data);
    }
  }

  let onError = function () {
    isLoading.value = false;
    textProblem.value = 'Ocorreu um erro ao tentar fazer a busca pelos livros. Por favor, tente mais tarde...';
  }

  GoogleBooksApi.SearchForBooks(text, onSuccess, onError);
}
</script>

<template>
  <div class="page-book">
    <div class="book-head">
      <h1 class="book-head__title">Book Finder</h1>
      <SearchBar @search-requested="handleSearchRequested" />
    </div>
    
    <div class="book-body">
      <ListCard :data-source="dataSource" />

      <div class="body-help">
        <Loading :state="isLoading" />
        <p class="body-help__no-data">{{ textProblem }}</p>
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
  margin-top: 10px;
  text-align: center;
}

.body-help__no-data {
  font-style: italic;
}
</style>
