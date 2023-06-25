<script setup>

import noImageUrl from '../assets/noimage.png';

const props = defineProps([
  'titulo',
  'autores',
  'dataPublicacao',
  'imageUrl'
]);


let autoresFormatted = props.autores.join(', ');
let dataPublicacaoFormatted = props.dataPublicacao.tipo === 'ano' ? props.dataPublicacao.valor.format('YYYY') : props.dataPublicacao.valor.format('DD/MM/YYYY');
let imageUrlFormatted = props.imageUrl == null ? noImageUrl : props.imageUrl;

</script>

<template>
  <div class="card-book">
    <div class="card-image">
      <img :src="imageUrlFormatted" />
    </div>
    <div class="card-content">
      <p class="card-content__title">{{ titulo }}</p>
      <p class="card-content__author">{{ autoresFormatted }}</p>
      <p class="card-content__date">{{ dataPublicacaoFormatted }}</p>
      <a href="#">Acessar livro no Google Books</a>
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

  .card-content p {
    margin: 10px 15px;
  }

  .card-content a {
    margin: 10px 15px;
    text-decoration: none;
  }

  .card-content__title {
    font-weight: bold;
  }

  .card-content__author {
    font-style: italic;
  }
</style>
