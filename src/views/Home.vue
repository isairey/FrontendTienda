<template>
  <section class="container my-4">
    <h2 class="text-center mb-4">Productos</h2>

    <!-- Botón para mostrar/ocultar formulario -->
    <div class="text-end mb-3">
      <button class="btn btn-primary" @click="showForm = !showForm">
        {{ showForm ? 'Cancelar' : 'Agregar producto' }}
      </button>
    </div>

    <!-- Formulario de nuevo producto -->
    <div v-if="showForm" class="mb-4 border p-3 rounded bg-light">
      <h4 class="mb-3">Nuevo Producto</h4>
      <div class="row g-3">
        <div class="col-md-4">
          <input type="text" class="form-control" v-model="newProduct.nombre" placeholder="Nombre" required>
        </div>
        <div class="col-md-4">
          <input type="text" class="form-control" v-model="newProduct.descripcion" placeholder="Descripción">
        </div>
        <div class="col-md-2">
          <input type="number" class="form-control" v-model="newProduct.precio" placeholder="Precio" required>
        </div>
        <div class="col-md-2">
          <input type="number" class="form-control" v-model="newProduct.stock" placeholder="Stock" required>
        </div>
        <div class="col-12 text-end">
          <button class="btn btn-success" @click="submitProduct">Guardar</button>
        </div>
      </div>
    </div>

    <div class="product-list">
      <div class="row overflow-auto">
        <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
          <ProductCard :product="product" @add-to-cart="addToCart" />
        </div>
      </div>
    </div>

    <div v-if="addedMessage" class="alert alert-success text-center mt-3">
      {{ addedMessage }}
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const cart = ref([])
const addedMessage = ref("")
const showForm = ref(false)

const newProduct = ref({
  nombre: '',
  descripcion: '',
  precio: 0,
  stock: 0,
  imagen: ''
})

// Array de productos desde la API
const products = ref([])

// Obtener productos desde el backend
const fetchProductos = async () => {
  try {
    const response = await fetch('https://apitienda-production-f2ba.up.railway.app/producto/traer')
    const data = await response.json()
    products.value = data
  } catch (error) {
    console.error("Error al obtener productos:", error)
  }
}

const loadCart = () => {
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    cart.value = JSON.parse(storedCart)
  }
}

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const addToCart = (product) => {
  const existingProduct = cart.value.find(item => item.id === product.id)
  if (existingProduct) {
    existingProduct.quantity += 1
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
  cart.value = [...cart.value]
  saveCart()
}

const submitProduct = async () => {
  try {
    const response = await fetch('https://apitienda-production-f2ba.up.railway.app/producto/guardar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct.value)
    })

    if (response.ok) {
      addedMessage.value = "Producto agregado correctamente"
      showForm.value = false
      newProduct.value = { nombre: '', descripcion: '', precio: 0, stock: 0, imagen: '' }
      await fetchProductos() // Actualizar la lista desde backend
    } else {
      console.error("Error al agregar producto")
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error)
  }
}

onMounted(() => {
  loadCart()
  fetchProductos()
})
</script>


<style scoped>
.product-list {
  max-height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
