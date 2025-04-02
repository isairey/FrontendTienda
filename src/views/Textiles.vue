<template>
  <section class="container my-4">
    <h2 class="text-center mb-4">Textiles</h2>
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
  { id: 3, name: 'Vestido de Telar', price: '$1,990.75 MXN', image: './Vestido.png' },
  { id: 5, name: 'Zapatos', price: '$1,500.00 MXN', image: './zapatos.webp' },
  { id: 7, name: 'Guayabera', price: '$1,200.00 MXN', image: './guayavera.png' },
  { id: 15, name: 'Pantalón de lino', price: '$1,100.00 MXN', image: './pantalon-lino.png' },
  { id: 22, name: 'Camiseta', price: '$350.00 MXN', image: './camiseta.webp' },
  { id: 23, name: 'Chaqueta de mezclilla', price: '$1,200.00 MXN', image: './chaqueta-mezclilla.png' },
  { id: 12, name: 'Blusa bordada', price: '$900.00 MXN', image: './blusa.png' },
  { id: 11, name: 'Pantalón de mezclilla', price: '$1,200.00 MXN', image: './pantalon.png' },
  { id: 24, name: 'Taza artesanal', price: '$200.00 MXN', image: './taza.png' },
  { id: 25, name: 'Plato decorativo', price: '$350.00 MXN', image: './plato.png' }
])
</script>

<style scoped>
.product-list {
  max-height: 70vh; /* Limita la altura para activar el scroll */
  overflow-y: auto; /* Activa el desplazamiento vertical */
}
</style>
