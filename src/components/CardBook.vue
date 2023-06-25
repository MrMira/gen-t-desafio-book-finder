<script setup>
import { computed } from 'vue';

import noImageUrl from '../assets/noimage.png';

const props = defineProps([
  'titulo',
  'autores',
  'dataPublicacao',
  'imageUrl',
  'link'
]);

function FormatDate(data) {
  let valor = data.valor;

  if (data.formato === 'YYYY') {
    return valor.format('YYYY') ;
  }

  if (data.formato === 'YYYY-MM') {
    return valor.format('MM/YYYY');
  }

  if (data.formato === 'YYYY-MM-DD') {
    return valor.format('DD/MM/YYYY') ;
  }

  return 'Data de publicação ausente.';
}

let autoresFormatted = computed(() => props.autores.join(', '));
let dataPublicacaoFormatted = computed(() => FormatDate(props.dataPublicacao));
let imageUrlFormatted = computed(() => props.imageUrl == null ? noImageUrl : props.imageUrl);

</script>

<template>
  <div class="card-book">
    <div class="card-image">
      <img :src="imageUrlFormatted" width="180" />
    </div>
    <div class="card-content">
      <p class="card-content__title">{{ titulo }}</p>
      <p class="card-content__author">{{ autoresFormatted }}</p>
      <p class="card-content__date">{{ dataPublicacaoFormatted }}</p>
      <a :href="link" target="_blank">Acessar link de preview do livro</a>
    </div>
  </div>
</template>

<style scoped>
  .card-book {
    display: flex;
    padding: 10px 5px;
    margin: 30px 50px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  .card-image {
    margin: 0px 15px;
  }

  .card-content p {
    margin-bottom: 10px;
  }

  .card-content a {
    margin-bottom: 10px;
    text-decoration: none;
  }

  .card-content__title {
    font-weight: bold;
  }

  .card-content__author {
    font-style: italic;
  }
</style>
