// src/store/cartStore.js
import { ref, watch } from 'vue'

// Estado global del carrito
export const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

// Guardar en localStorage automáticamente cuando cambie el carrito
watch(cart, () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}, { deep: true })

// Función para agregar producto al carrito
export const addToCart = (product) => {
  const existingProduct = cart.value.find(item => item.id === product.id)

  if (existingProduct) {
    existingProduct.quantity += 1
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
}

// Función para eliminar producto del carrito
export const removeFromCart = (index) => {
  cart.value.splice(index, 1)
}
