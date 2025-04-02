<template>
  <section class="container my-4">
    <h2 class="text-center mb-4">Productos de Joyería</h2>
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
  { id: 20, name: 'Pulsera de plata', price: '$650.00 MXN', image: './pulsera.png' },
  { id: 21, name: 'Anillo de oro', price: '$5,000.00 MXN', image: './anillo.png' }
])
</script>

<style scoped>
.product-list {
  max-height: 70vh; /* Limita la altura para activar el scroll */
  overflow-y: auto; /* Activa el desplazamiento vertical */
}
</style>
