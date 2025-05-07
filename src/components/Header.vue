<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
    <div class="d-flex align-items-center">
      <!-- Botón para mostrar/ocultar el sidebar -->
      <button
        class="btn btn-success me-3"
        @click="toggleSidebar"
        :aria-expanded="sidebarOpen.toString()"
      >
        ☰
      </button>

      <button class="navbar-brand btn btn-link text-success fw-bold fs-4" @click="goToHome">
        TimShop
      </button>
    </div>

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

  <!-- Sidebar -->
  <div :class="['sidebar', { 'sidebar-open': sidebarOpen }]">
    <h3>Categorías</h3>
    <ul>
      <li><router-link to="/ceramica">Cerámica</router-link></li>
      <li><router-link to="/joyeria">Joyería</router-link></li>
      <li><router-link to="/textiles">Textiles</router-link></li>
      <li><router-link to="/madera">Madera</router-link></li>
      <li><router-link to="/pinturas">Pinturas</router-link></li>
      <li><router-link to="/regalos">Regalos</router-link></li>
    </ul>
  </div>

  <!-- Contenedor principal -->
  <div :class="['main-content', { 'content-expanded': sidebarOpen }]">
    <!-- Contenido adaptable -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  cart: Array,
})

const searchQuery = ref('')
const router = useRouter()
const sidebarOpen = ref(false)

const searchProduct = () => {
  router.push({ path: '/search', query: { query: searchQuery.value } })
}

const goToHome = () => router.push('/home')

const goToUserProfile = () => {
  const logueado = localStorage.getItem('usuarioLogueado') === 'true'
  if (logueado) {
    router.push('/profile')
  } else {
    alert('Debes iniciar sesión para ver tu perfil')
    router.push('/')
  }
}

const goToCart = () => {
  const logueado = localStorage.getItem('usuarioLogueado') === 'true'
  if (logueado) {
    router.push('/cart')
  } else {
    alert('Debes iniciar sesión para ver el carrito')
    router.push('/')
  }
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<style scoped>
/* Header */
header {
  z-index: 1050;
}

/* Botones */
button {
  transition: background-color 0.3s ease;
}

.btn-success {
  background-color: #48bb78; /* Verde suave */
  border: none;
  color: #ffffff; /* Blanco */
}

.btn-success:hover {
  background-color: #38a169; /* Verde ligeramente más oscuro */
}

.btn-outline-success {
  border-color: #48bb78; /* Borde verde */
  color: #48bb78; /* Texto verde */
}

.btn-outline-success:hover {
  background-color: #48bb78; /* Fondo verde */
  color: #ffffff; /* Texto blanco */
}

/* Sidebar */
.sidebar {
  width: 230px;
  background-color: #f9fafb; /* Blanco suave */
  padding: 20px;
  position: fixed;
  top: 0;
  left: -230px;
  height: 100%;
  transition: left 0.3s ease;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.sidebar-open {
  left: 0;
}

.sidebar h3 {
  color: #4a4a4a; /* Gris suave */
  font-size: 20px;
  margin-bottom: 15px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  display: block;
  color: #4a4a4a; /* Gris suave */
  text-decoration: none;
  font-size: 16px;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.sidebar a:hover {
  background-color: #e2e8f0; /* Fondo gris claro */
}

/* Main Content */
.main-content {
  transition: margin-left 0.3s ease;
  margin-left: 0;
  padding-top: 5px;
}

.content-expanded {
  margin-left: 230px;
}
</style>