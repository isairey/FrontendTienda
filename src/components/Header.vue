<template>
  <header class="navbar navbar-expand-lg px-4 glass-header">
    <div class="d-flex align-items-center">
      <!-- Botón para mostrar/ocultar el sidebar -->
      <button 
        class="glass-btn btn-icon me-3"
        @click="toggleSidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>

      <button class="navbar-brand btn btn-link store-brand fw-bold fs-4 text-decoration-none" @click="goToHome">
        <span class="brand-text">Tim</span>Shop
      </button>
    </div>

    <div class="d-flex align-items-center flex-grow-1 justify-content-center px-4">
      <div class="search-bar-glass d-flex w-100" style="max-width: 500px">
        <input v-model="searchQuery" type="text" class="form-control glass-input" placeholder="Buscar productos..." @keyup.enter="searchProduct" />
        <button @click="searchProduct" class="glass-btn ms-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <button @click="goToUserProfile" class="glass-btn text-icon me-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span class="d-none d-md-inline">Perfil</span>
      </button>
      <button @click="goToCart" class="glass-btn cart-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="me-1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        <span class="cart-badge">{{ store.cart.length }}</span>
      </button>
      <button v-if="store.userLogueado" @click="handleLogout" class="glass-btn ms-2 danger-glass text-icon" title="Cerrar Sessión">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
      </button>
    </div>
  </header>

  <!-- Backdrop para Sidebar -->
  <div v-if="sidebarOpen" class="sidebar-backdrop" @click="toggleSidebar"></div>

  <!-- Sidebar Glass -->
  <div :class="['sidebar-glass', { 'sidebar-open': sidebarOpen }]">
    <div class="sidebar-header d-flex justify-content-between align-items-center mb-4">
      <h3 class="m-0 liquid-text">Categorías</h3>
      <button class="glass-btn btn-icon btn-sm" @click="toggleSidebar">✕</button>
    </div>
    <ul class="category-list">
      <li v-for="cat in store.categories" :key="cat.id">
         <router-link :to="'/categoria/' + cat.id" @click="sidebarOpen = false">
            <span class="cat-icon me-2">✧</span> {{ cat.name }}
         </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { store, logout } from '../store/globalStore'

const searchQuery = ref('')
const router = useRouter()
const sidebarOpen = ref(false)

const searchProduct = () => {
  if (searchQuery.value.trim() !== '') {
    router.push({ path: '/search', query: { query: searchQuery.value } })
    searchQuery.value = ''
  }
}

const goToHome = () => router.push('/home')

const goToUserProfile = () => {
  if (store.userLogueado) {
    router.push('/profile')
  } else {
    router.push('/')
  }
}

const goToCart = () => {
  if (store.userLogueado) {
    router.push('/cart')
  } else {
    router.push('/')
  }
}

const handleLogout = () => {
  logout()
  router.push('/')
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<style scoped>
/* Header Custom Glass */
.glass-header {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: sticky;
  top: 0;
  z-index: 1040;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

.store-brand {
  color: #2d3748 !important;
  font-family: 'Inter', sans-serif;
}
.brand-text {
  color: #48bb78;
}

/* Base Glass Button */
.glass-btn {
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  color: #4a5568;
  padding: 8px 16px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.btn-icon {
  padding: 8px;
}

.danger-glass:hover {
  color: #e53e3e;
  border-color: #fc8181;
}

.cart-btn {
  position: relative;
  border-color: rgba(72, 187, 120, 0.4);
  color: #38a169;
}
.cart-btn:hover {
  background: rgba(72, 187, 120, 0.1);
}

.cart-badge {
  background: #48bb78;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 6px;
}

/* Glass Input */
.glass-input {
  background: rgba(255, 255, 255, 0.5) !important;
  border: 1px solid rgba(255, 255, 255, 0.8) !important;
  border-radius: 12px;
  transition: all 0.3s ease;
  padding: 10px 16px;
}
.glass-input:focus {
  background: rgba(255, 255, 255, 0.9) !important;
  box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.2) !important;
  border-color: #48bb78 !important;
}

/* Sidebar Glass */
.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  z-index: 1045;
}

.sidebar-glass {
  position: fixed;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  padding: 20px;
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1050;
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.1);
}

.sidebar-open {
  left: 0;
}

.liquid-text {
  background: linear-gradient(135deg, #2d3748 0%, #48bb78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}

.category-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.category-list li {
  margin-bottom: 8px;
}

.category-list a {
  display: flex;
  align-items: center;
  color: #4a5568;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: transparent;
}

.category-list a:hover, .category-list a.router-link-active {
  background: rgba(72, 187, 120, 0.1);
  color: #2f855a;
  transform: translateX(4px);
}

.cat-icon {
  color: #48bb78;
  font-size: 18px;
}
</style>
