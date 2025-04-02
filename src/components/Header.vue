<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4">
    <button class="navbar-brand btn btn-link text-primary fw-bold fs-4" @click="goToHome">
      TimShop
    </button>

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
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  cart: Array
})

const searchQuery = ref('')
const router = useRouter()

const searchProduct = () => {
  router.push({ path: '/search', query: { query: searchQuery.value } })
}

const goToHome = () => router.push('/')
const goToUserProfile = () => router.push('/profile')
const goToCart = () => router.push('/cart') // Redirige a la vista del carrito
</script>
