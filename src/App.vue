<template>
  <div class="app-container">
    <!-- Header con carrito -->
    <Header :cart="cart" />

    <div class="main-content">
      <Sidebar />
      <router-view :cart="cart" @add-to-cart="addToCart" @remove-item="removeItem" />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

const cart = ref([]) // Carrito de compras

// Cargar el carrito desde localStorage al iniciar la aplicación
const loadCart = () => {
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    cart.value = JSON.parse(storedCart)
  }
}

// Guardar el carrito en localStorage cuando cambia
const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

// Agregar producto al carrito
const addToCart = (product) => {
  // Verificamos si el producto ya existe en el carrito
  const existingProductIndex = cart.value.findIndex(item => item.id === product.id)

  if (existingProductIndex === -1) {
    // Si no existe, lo agregamos
    cart.value = [...cart.value, product]
  } else {
    // Si ya existe, actualizamos la cantidad o lo que necesites
    // Puedes agregar lógica adicional para manejar la cantidad si es necesario.
  }

  saveCart() // Guardar el carrito actualizado en localStorage
}

// Eliminar producto del carrito
const removeItem = (index) => {
  cart.value.splice(index, 1) // Eliminar el producto en el índice especificado
  saveCart() // Guardar el carrito actualizado en localStorage
}

// Llamar a loadCart() cuando el componente se monta
onMounted(() => {
  loadCart()
})
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 230px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
}
</style>
