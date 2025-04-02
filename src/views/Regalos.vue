<template>
  <section class="container my-4">
    <h2 class="text-center mb-4">Regalos</h2>
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
  { id: 9, name: 'Cinturón de cuero', price: '$600.00 MXN', image: './cinturon.png' },
  { id: 10, name: 'Bolso de mano', price: '$850.00 MXN', image: './bolso_mano.png' },
  { id: 13, name: 'Faja', price: '$450.00 MXN', image: './faja.png' },
  { id: 14, name: 'Mochila de cuero', price: '$1,500.00 MXN', image: './mochila.png' },
  { id: 16, name: 'Sandalias', price: '$800.00 MXN', image: './sandalia.png' },
  { id: 17, name: 'Bufanda de lana', price: '$350.00 MXN', image: './bufanda.png' },
  { id: 18, name: 'Gorra', price: '$250.00 MXN', image: './gorra.png' },
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
