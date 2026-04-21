<template>
  <div class="app-container glass-theme">
    <!-- Header -->
    <Header v-if="!route.meta.hideLayout" />

    <main class="main-content">
      <!-- Aquí se renderiza la vista actual -->
      <router-view />
    </main>

    <!-- Footer -->
    <Footer v-if="!route.meta.hideLayout" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { store } from './store/globalStore'

const route = useRoute()
</script>

<style>
/* Estilos Globales Extra para Glassmorphism */
body {
  background: #f0f4f8;
  background-image: 
    radial-gradient(at 0% 0%, hsla(153, 47%, 76%, 0.4) 0px, transparent 50%),
    radial-gradient(at 100% 0%, hsla(210, 50%, 85%, 0.4) 0px, transparent 50%),
    radial-gradient(at 100% 100%, hsla(153, 47%, 76%, 0.3) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(210, 50%, 85%, 0.3) 0px, transparent 50%);
  background-attachment: fixed;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #2d3748;
  min-height: 100vh;
}
</style>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
