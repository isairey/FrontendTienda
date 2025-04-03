<template>
  <div class="sidebar-container">
    <!-- Botón para mostrar/ocultar el sidebar -->
    <button
      class="btn btn-primary toggle-btn"
      @click="toggleSidebar"
      :aria-expanded="sidebarOpen.toString()"
    >
      ☰
    </button>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false, // Estado del sidebar
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen; // Cambia el estado del sidebar
    },
  },
};
</script>

<style scoped>
/* Contenedor del sidebar */
.sidebar-container {
  position: relative;
}

/* Botón de mostrar/ocultar sidebar */
.toggle-btn {
  position: fixed;
  top: 20px;  /* Ajusta el valor para moverlo más abajo */
  left: 20px;
  background-color: #5cb85c;  /* Verde más suave */
  color: white;
  font-size: 24px;
  padding: 10px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1050; /* Asegura que el botón se muestre encima de otros elementos */
}

/* Sidebar */
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
