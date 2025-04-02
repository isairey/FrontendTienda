<template>
  <div class="card shadow-sm text-center">
    <img :src="product.image" class="card-img-top" :alt="product.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text text-success fw-bold">{{ formattedPrice }}</p>
      <button class="btn btn-primary w-100" @click="addToCart">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue'

const props = defineProps({
  product: Object
})

const emit = defineEmits(['add-to-cart'])
const buttonText = ref("Añadir al carrito") // Estado para cambiar el texto del botón

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN'
  }).format(props.product.price)
})

const addToCart = () => {
  emit('add-to-cart', props.product)
  buttonText.value = "¡Agregado! ✅"

  setTimeout(() => {
    buttonText.value = "Añadir al carrito"
  }, 2000) // Restaurar el botón después de 2 segundos
}
</script>




<style scoped>
.product-card {
  border: 1px solid #444444;
  padding: 10px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  background-color: #000000;
}

.product-card img {
  max-width: 100%;
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.product-card h3 {
  margin: 10px 0;
  color: #FFFFFF;
}

.product-card p {
  color: #FFFFFF;
  font-size: 1.2em;
}

.product-card button {
  padding: 5px 10px;
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}
.card img {
  height: 200px;
  object-fit: contain;
}
</style>
