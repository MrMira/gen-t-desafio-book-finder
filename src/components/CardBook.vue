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
    return valor.format('YYYY');
  }

  if (data.formato === 'YYYY-MM') {
    return valor.format('MM/YYYY');
  }

  if (data.formato === 'YYYY-MM-DD') {
    return valor.format('DD/MM/YYYY');
  }

  return valor;
}

let autoresFormatted = computed(() => props.autores.join(', '));
let dataPublicacaoFormatted = computed(() => FormatDate(props.dataPublicacao));
let imageUrlFormatted = computed(() => props.imageUrl == null ? noImageUrl : props.imageUrl);

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
      <a :href="link" target="_blank">Acessar link de preview do livro</a>
    </div>
  </div>
</template>

<style scoped>
.card-book {
  display: flex;
  flex-direction: column;

  padding: 20px 15px;
  margin: 20px 30px;

  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.card-image {
  height: 185px;
  width: 128px;

  margin: 0px auto;
  margin-bottom: 15px;
}

.card-image img {
  max-height: 100%;
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

@media (min-width: 728px) {
  .card-book {
    padding: 15px 5px;
    flex-direction: initial;
  }

  .card-image {
    margin: 0px 15px;
  }
}

@media (min-width: 1024px) {
  .card-book {
    width: 500px;
    flex-direction: initial;
  }

  .card-image {
    margin: 0px 15px;
  }
}
</style>
