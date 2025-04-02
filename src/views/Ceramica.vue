<template>
  <section class="container my-4">
    <h2 class="text-center mb-4">Productos de Cerámica</h2>
    <div class="row overflow-auto product-list">
      <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const products = ref([
  { id: 24, name: 'Taza artesanal', price: '$200.00 MXN', image: './taza.png' },
  { id: 25, name: 'Plato decorativo', price: '$350.00 MXN', image: './plato.png' },
  { id: 29, name: 'Jarrón de cerámica', price: '$1,200.00 MXN', image: './jarron.webp' }
])
</script>

<style scoped>
.product-list {
  max-height: 70vh; /* Limita la altura para activar el scroll */
  overflow-y: auto; /* Activa el desplazamiento vertical */
}
</style>
