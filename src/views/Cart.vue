<template>
    <div class="container mt-4">
      <h2>🛒 Carrito de Compras</h2>
  
      <div v-if="cart.length > 0" class="product-list">
        <div class="list-group">
          <div v-for="(item, index) in cart" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <img :src="item.image" alt="Producto" class="cart-img me-3" />
              {{ item.name }} - <strong>{{ formattedPrice(item.price) }}</strong> 
              (Cantidad: {{ item.quantity }})
            </div>
            <button class="btn btn-danger btn-sm" @click="removeFromCart(index)">❌ Quitar</button>
          </div>
        </div>
      </div>
  
      <p v-else class="text-muted">Tu carrito está vacío.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const cart = ref([])
  
  // Cargar carrito desde localStorage al montar el componente
  onMounted(() => {
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    cart.value = JSON.parse(storedCart).map(item => ({
      ...item,
      quantity: item.quantity || 1 // Asegurar que todos los productos tengan "quantity"
    }))
  }
})

  
  // Guardar carrito en localStorage
  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }
  
  // Eliminar un producto del carrito
  const removeFromCart = (index) => {
    cart.value.splice(index, 1) // Remover producto del array
    saveCart() // Guardar cambios en localStorage
  }
  
  // Formatear precio
  const formattedPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(price)
  }
  </script>
  
  <style scoped>
  .cart-img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
  .product-list {
    max-height: 70vh;
    overflow-y: auto;
  }
  </style>
  