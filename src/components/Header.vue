<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
    <div class="d-flex align-items-center">
      <!-- Botón para mostrar/ocultar el sidebar -->
      <button
        class="btn btn-primary me-3"
        @click="toggleSidebar"
        :aria-expanded="sidebarOpen.toString()"
      >
        ☰
      </button>

      <button class="navbar-brand btn btn-link text-primary fw-bold fs-4" @click="goToHome">
        TimShop
      </button>
    </div>

    <div class="d-flex align-items-center flex-grow-1 justify-content-center">
      <input v-model="searchQuery" type="text" class="form-control me-2" placeholder="Buscar productos..." />
      <button @click="searchProduct" class="btn btn-outline-primary">🔍</button>
    </div>

    <div class="d-flex">
      <button @click="goToUserProfile" class="btn btn-outline-secondary me-2">👤 Usuario</button>
      <button @click="goToCart" class="btn btn-outline-primary">
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

  <!-- Contenedor principal donde se adapta el contenido -->
  <div :class="['main-content', { 'content-expanded': sidebarOpen }]">
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  cart: Array, // Recibimos la prop cart, que es reactiva
});

const searchQuery = ref('');
const router = useRouter();
const sidebarOpen = ref(false); // Estado del sidebar

const searchProduct = () => {
  router.push({ path: '/search', query: { query: searchQuery.value } });
};

const goToHome = () => router.push('/home');
const goToUserProfile = () => router.push('/profile');
const goToCart = () => router.push('/cart'); // Redirige a la vista del carrito

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value; // Cambiar el estado del sidebar
};
</script>

<style scoped>
/* Estilos generales */
header {
  z-index: 1050; /* Asegura que el header esté sobre el sidebar */
}

/* Estilo para el botón dentro del header */
button {
  transition: background-color 0.3s ease;
}

/* Estilos del sidebar */
.sidebar {
  width: 230px;
  background-color: #f8f9fa;  /* Color más claro */
  padding: 20px;
  position: fixed;
  top: 0;
  left: -230px; /* Ocultamos el sidebar */
  height: 100%;
  transition: left 0.3s ease;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Cuando el sidebar está abierto */
.sidebar-open {
  left: 0;  /* Muestra el sidebar */
}

/* Ajusta el padding-left en el header cuando el sidebar está abierto */
.sidebar-open ~ header {
  padding-left: 230px; /* Da espacio al sidebar cuando está abierto */
}

/* Contenedor principal */
.main-content {
  transition: margin-left 0.3s ease; /* Transición suave */
  margin-left: 0; /* Por defecto el contenido no tiene desplazamiento */
  padding-top: 70px; /* Asegura que el contenido no quede debajo del header */
}

/* Cuando el sidebar está abierto */
.content-expanded {
  margin-left: 230px; /* Desplaza el contenido hacia la derecha cuando el sidebar está abierto */
}

/* Estilo para la barra de navegación */
.navbar-brand {
  font-weight: bold;
}

.navbar-nav .nav-link {
  color: #333;
}

.navbar-nav .nav-link:hover {
  color: #5cb85c;
}

/* Estilos de la barra de búsqueda */
input.form-control {
  max-width: 400px;
}

/* Estilos del sidebar */
.sidebar h3 {
  color: #333;
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
  color: #333;
  text-decoration: none;
  font-size: 16px;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.sidebar a:hover {
  background-color: #f1f1f1;
}
</style>
