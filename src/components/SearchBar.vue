<script setup>
import { ref, onMounted } from 'vue'

let refSearchInput = ref(null);
let textSearch = ref('');

const props = defineProps([
  'handlerToFocus'
]);

onMounted(() => 
  refSearchInput.value.focus()
);

</script>

<template>
  <form class="search-bar">
    <input class="search-bar__input" type="text" placeholder="Digite o nome de um livro, autor ou assunto" v-model="textSearch" ref="refSearchInput" />
    <button class="search-bar__button" @click.prevent="$emit('searchRequested', textSearch)">Buscar por Livros</button>
  </form>
</template>

<style scoped>
.search-bar__input {
  font-size: 12pt;

  padding: 5px;
  margin-right: 15px;
  width: 350px;

  color: #555;
  border: 2px solid #ccc;
  border-radius: 5px;

  outline: none;
}

.search-bar__button {
  cursor: pointer;

  padding: 8px;
  font-weight: bold;

  border: none;
  border-radius: 5px;

  color: #555;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.search-bar__button:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.search-bar__button:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

::placeholder {
  color: #ccc;;
}
</style>
