<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
    <button class="navbar-brand btn btn-link text-primary fw-bold fs-4" @click="goToHome">
      TimShop
    </button>

    <div class="d-flex align-items-center flex-grow-1 justify-content-center">
      <input v-model="searchQuery" type="text" class="form-control me-2" placeholder="Buscar productos..." />
      <button @click="searchProduct" class="btn btn-outline-success">🔍</button>
    </div>

    <div class="d-flex">
      <button @click="goToUserProfile" class="btn btn-outline-secondary me-2">👤 Usuario</button>
      <button @click="goToCart" class="btn btn-outline-success">
        🛒 Carrito ({{ cart.length }})
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  cart: Array // Recibimos la prop cart, que es reactiva
})

const searchQuery = ref('')
const router = useRouter()

const searchProduct = () => {
  router.push({ path: '/search', query: { query: searchQuery.value } })
}

const goToHome = () => router.push('/home')
const goToUserProfile = () => router.push('/profile')
const goToCart = () => router.push('/cart') // Redirige a la vista del carrito
</script>

<style scoped>
/* Estilos del header con los colores suaves */
.navbar {
  background-color: #f4f9f7; /* Fondo suave de verde claro */
  border-bottom: 2px solid #b7d2a4; /* Borde inferior verde claro */
}

.navbar .navbar-brand {
  color: #4c8c4a; /* Texto de la marca en verde suave */
}

.navbar .navbar-brand:hover {
  color: #6e9b6b; /* Verde más oscuro al pasar el mouse */
}

.navbar input[type="text"] {
  border-radius: 25px;
  border: 1px solid #b7d2a4; /* Borde verde claro */
  background-color: #e7f4e4; /* Fondo verde suave */
}

.navbar .btn-outline-success {
  border-radius: 25px;
  border-color: #4c8c4a; /* Borde verde suave para los botones */
  color: #4c8c4a; /* Texto verde suave */
}

.navbar .btn-outline-success:hover {
  background-color: #6e9b6b; /* Verde más oscuro al pasar el mouse */
  color: white;
}

.navbar .btn-outline-secondary {
  border-radius: 25px;
  border-color: #d1d1d1; /* Gris claro para el botón de usuario */
  color: #4c8c4a; /* Texto verde suave */
}

.navbar .btn-outline-secondary:hover {
  background-color: #e0e0e0; /* Gris claro al pasar el mouse */
}
</style>
