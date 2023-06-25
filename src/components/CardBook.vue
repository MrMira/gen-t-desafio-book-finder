<script setup>

const props = defineProps([
  'titulo',
  'autores',
  'dataPublicacao',
  'imageUrl'
]);

let autoresFormatted = props.autores.join(', ');
let dataPublicacaoFormatted = props.dataPublicacao.tipo === 'ano' ? props.dataPublicacao.valor.format('YYYY') : props.dataPublicacao.valor.format('DD/MM/YYYY');

</script>

<template>
  <div>
    <img :src="imageUrl" />
    <p>{{ titulo }}</p>
    <p>{{ autoresFormatted }}</p>
    <p>{{ dataPublicacaoFormatted }}</p>
  </div>
</template>

<style scoped>
</style>
