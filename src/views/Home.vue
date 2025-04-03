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

const products = [
  { id: 1, name: 'Alebrije', price: 799.97, image: './alebrije.webp' },
  { id: 2, name: 'Sombrero', price: 2999.00, image: './sombrero.webp' },
  { id: 3, name: 'Vestido de Telar', price: 1990.75, image: './Vestido.png' },
  { id: 4, name: 'Molcajete', price: 250.00, image: './MOLCAJETE.webp' },
  { id: 5, name: 'Zapatos', price: 1500.00, image: './zapatos.webp' },
  { id: 6, name: 'Chamarra de cuero', price: 3500.00, image: './chamarra.png' },
  { id: 7, name: 'Guayabera', price: 1200.00, image: './guayavera.png' },
  { id: 8, name: 'Botas vaqueras', price: 2000.00, image: './Botas.webp' },
  { id: 9, name: 'Cinturón de cuero', price: 600.00, image: './cinturon.png' },
  { id: 10, name: 'Bolso de mano', price: 850.00, image: './bolso_mano.png' },
  { id: 11, name: 'Pantalón de mezclilla', price: 1200.00, image: './pantalon.png' },
  { id: 12, name: 'Blusa bordada', price: 900.00, image: './blusa.png' },
  { id: 13, name: 'Faja', price: 450.00, image: './faja.png' },
  { id: 14, name: 'Mochila de cuero', price: 1500.00, image: './mochila.png' },
  { id: 15, name: 'Pantalón de lino', price: 1100.00, image: './pantalon-lino.png' },
  { id: 16, name: 'Sandalias', price: 800.00, image: './sandalia.png' },
  { id: 17, name: 'Bufanda de lana', price: 350.00, image: './bufanda.png' },
  { id: 18, name: 'Gorra', price: 250.00, image: './gorra.png' },
  { id: 19, name: 'Reloj', price: 2000.00, image: './reloj.png' },
  { id: 20, name: 'Pulsera de plata', price: 650.00, image: './pulsera.png' },
  { id: 21, name: 'Anillo de oro', price: 5000.00, image: './anillo.png' },
  { id: 22, name: 'Camiseta', price: 350.00, image: './camiseta.webp' },
  { id: 23, name: 'Chaqueta de mezclilla', price: 1200.00, image: './chaqueta-mezclilla.png' },
  { id: 24, name: 'Taza artesanal', price: 200.00, image: './taza.png' },
  { id: 25, name: 'Plato decorativo', price: 350.00, image: './plato.png' },
  { id: 26, name: 'Escultura de madera', price: 1500.00, image: './madera.png' },
  { id: 27, name: 'Vaso tallado', price: 300.00, image: './baso.png' },
  { id: 28, name: 'Candelabro de hierro', price: 900.00, image: './candelabro.png' },
  { id: 29, name: 'Jarrón de cerámica', price: 1200.00, image: './jarron.webp' },
  { id: 30, name: 'Cesta de mimbre', price: 500.00, image: './cesta.png' }
]


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
