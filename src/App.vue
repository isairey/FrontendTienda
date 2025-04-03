<template>
  <div class="app-container">
    <!-- Header con carrito (se oculta en login y registro) -->
    <Header v-if="!route.meta.hideLayout" :cart="cart" @toggle-sidebar="toggleSidebar" />

    <div class="main-content">
      <!-- Sidebar (se oculta en login y registro) -->
      

      <!-- Contenido principal -->
      <div class="content-container" :class="{ 'content-expanded': sidebarOpen }">
        <!-- Aquí se renderiza la vista actual -->
        <router-view :cart="cart" @add-to-cart="addToCart" @remove-item="removeItem" />
      </div>
    </div>

    <!-- Footer (se oculta en login y registro) -->
    <Footer v-if="!route.meta.hideLayout" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

const route = useRoute() // Para detectar la ruta actual
const cart = reactive([]) // Carrito de compras
const sidebarOpen = reactive(false) // Estado del sidebar

// Función para alternar el estado del sidebar
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

// Cargar carrito desde localStorage
const loadCart = () => {
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart)
    parsedCart.forEach(item => {
      if (!item.quantity) {
        item.quantity = 1
      }
    })
    Object.assign(cart, parsedCart)
  }
}

// Guardar carrito en localStorage cuando cambia
const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

// Agregar producto al carrito
const addToCart = (product) => {
  const existingProductIndex = cart.findIndex(item => item.id === product.id)

  if (existingProductIndex === -1) {
    cart.push({ ...product, quantity: 1 })
  } else {
    cart[existingProductIndex].quantity += 1
  }

  saveCart()
}

// Eliminar producto del carrito
const removeItem = (index) => {
  cart.splice(index, 1)
  saveCart()
}

// Llamamos a loadCart() cuando el componente se monta
onMounted(() => {
  loadCart()
})
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
  transition: margin-left 0.3s ease;
}

.content-container {
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
}

/* Aquí se ajusta el margen para el contenido cuando el sidebar está abierto */
.content-expanded {
  margin-left: 230px; /* Ancho del sidebar */
}

/* Sidebar */
.sidebar {
  width: 230px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: -230px;
  height: 100%;
  transition: left 0.3s ease;
  z-index: 1050;
}

/* Sidebar cuando está abierto */
.sidebar-open {
  left: 0; /* Sidebar visible */
}

/* Estilos del Footer */
footer {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
}
</style>
