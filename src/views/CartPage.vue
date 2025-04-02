<template>
  <div class="product-page">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <button @click="addProductToCart">Agregar al carrito</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Recibe el producto como prop
const props = defineProps({
  product: Object
})

// Emitir evento para agregar al carrito
const emit = defineEmits()

const addProductToCart = () => {
  emit('add-to-cart', props.product)
}
</script>

  
  <style scoped>
  .cart-page {
    padding: 20px;
    max-width: 600px;
    margin: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }
  
  h1 {
    text-align: center;
  }
  
  button {
    margin-top: 15px;
    background: #555;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  button:hover {
    background: #333;
  }
  </style>
  