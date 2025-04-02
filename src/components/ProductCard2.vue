<template>
  <div class="container mt-4">
    <h2>🛒 Carrito de Compras</h2>

    <div v-if="cart.length > 0">
      <div class="list-group">
        <div v-for="(item, index) in cart" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <img :src="item.image" alt="Producto" class="cart-img me-3" />
            {{ item.name }} - <strong>{{ item.price }}</strong>
          </div>
          <button class="btn btn-danger btn-sm" @click="removeFromCart(index)">❌ Quitar</button>
        </div>
      </div>
    </div>

    <p v-else class="text-muted">Tu carrito está vacío.</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  cart: Array // Recibimos el carrito desde App.vue
})

const removeFromCart = (index) => {
  props.cart.splice(index, 1) // Eliminar producto del carrito
}
</script>

<style scoped>
.cart-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
</style>
