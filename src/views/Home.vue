<template>
  <section class="container my-4">
    <h2 class="text-center mb-4">Productos</h2>
    <div class="row overflow-auto product-list">
      <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
        <ProductCard :product="product" @add-to-cart="addToCart" />
      </div>
    </div>

    <!-- Mensaje de confirmación -->
    <div v-if="addedMessage" class="alert alert-success text-center mt-3">
      {{ addedMessage }}
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const cart = ref([])
const addedMessage = ref("") // Estado para el mensaje de feedback

const products = ref([
  { id: 1, name: 'Alebrije', price: 799.97, image: './alebrije.webp' },
  { id: 2, name: 'Sombrero', price: 2999.00, image: './sombrero.webp' },
  { id: 3, name: 'Vestido de Telar', price: 1990.75, image: './Vestido.png' },
  { id: 4, name: 'Molcajete', price: 250.00, image: './MOLCAJETE.webp' }
])

// Cargar carrito desde localStorage
const loadCart = () => {
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    cart.value = JSON.parse(storedCart)
  }
}

// Guardar carrito en localStorage
const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

// Agregar producto al carrito
const addToCart = (product) => {
  const existingProduct = cart.value.find(item => item.id === product.id)

  if (existingProduct) {
    existingProduct.quantity += 1 // Aumentar cantidad si el producto ya está en el carrito
  } else {
    cart.value.push({ ...product, quantity: 1 }) // Agregar con cantidad inicial de 1
  }

  cart.value = [...cart.value] // Forzar reactividad en Vue
  saveCart() // Guardar en localStorage
}


onMounted(() => {
  loadCart()
})
</script>

<style scoped>
.product-list {
  max-height: 70vh;
  overflow-y: auto;
}
</style>
