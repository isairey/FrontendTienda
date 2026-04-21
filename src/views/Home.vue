<template>
  <div class="home-wrapper">
    <!-- Hero Banner -->
    <section class="hero-section">
      <div class="container h-100 d-flex flex-column justify-content-center position-relative z-index-1">
        <h1 class="display-3 fw-bold liquid-text fade-in-up">Arte & Estilo para tu hogar</h1>
        <p class="lead text-muted fade-in-up delay-1 mt-3 w-md-50">Explora nuestra cuidada selección de productos en cerámica, joyería, textiles y más. Diseño premium al alcance de un clic.</p>
        <div class="mt-4 fade-in-up delay-2">
          <button class="btn btn-primary btn-lg rounded-pill px-5 py-3 glass-btn-primary shadow-sm" @click="scrollToProducts">Ver Colección</button>
        </div>
      </div>
      <div class="hero-bg-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
      </div>
    </section>

    <!-- Product Section -->
    <section class="container my-5" id="products-section">
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h2 class="display-6 fw-bold m-0 liquid-text">Últimos Productos</h2>
        <button class="btn btn-outline-secondary rounded-pill px-4" @click="showForm = !showForm">
          {{ showForm ? 'Ocultar Formulario' : '+ Nuevo Producto' }}
        </button>
      </div>

      <!-- Formulario (Se mantiene oculto tras diseño) -->
      <transition name="slide-fade">
        <div v-if="showForm" class="mb-5 p-4 rounded-4 glass-card form-container shadow-sm">
          <h4 class="mb-4 text-dark fw-bold">Detalles del Nuevo Producto</h4>
          <div class="row g-4">
            <div class="col-md-4">
              <input type="text" class="form-control mb-3" v-model="newProduct.nombre" placeholder="Nombre (ej. Jarrón Azul)" required>
              <input type="text" class="form-control" v-model="newProduct.imagen" placeholder="URL Imagen (Opcional)">
            </div>
            <div class="col-md-4">
              <textarea class="form-control h-100" v-model="newProduct.descripcion" placeholder="Descripción..."></textarea>
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-between">
              <input type="number" class="form-control mb-3" v-model="newProduct.precio" placeholder="Precio ($)" required>
              <input type="number" class="form-control" v-model="newProduct.stock" placeholder="Unidades" required>
            </div>
            <div class="col-md-2 d-flex align-items-end">
              <button class="btn btn-success w-100" style="height: 48px" @click="submitProduct">Guardar</button>
            </div>
          </div>
          <div v-if="addedMessage" class="alert alert-success mt-4 mb-0 text-center rounded-3">{{ addedMessage }}</div>
        </div>
      </transition>

      <div v-if="store.isLoading" class="text-center py-5">
        <div class="spinner-border text-success" role="status"></div>
      </div>

      <div v-else class="row g-4 product-list">
        <!-- Render from Store -->
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in store.products.slice(0, 8)" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
      
      <!-- Mock Showcase row si la API devuelve muy pocos datos -->
      <div v-if="!store.isLoading && store.products.length < 4" class="mt-5 pt-4 border-top">
         <h4 class="fw-bold mb-4 text-muted">Explora también lo más destacado</h4>
         <div class="row g-4">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in mockFeatured" :key="product.id">
              <ProductCard :product="product" />
            </div>
         </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { store, fetchProducts } from '../store/globalStore'
import ProductCard from '../components/ProductCard.vue'

const showForm = ref(false)
const addedMessage = ref("")

const newProduct = ref({
  nombre: '',
  descripcion: '',
  precio: 0,
  stock: 0,
  imagen: ''
})

const scrollToProducts = () => {
  document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })
}

const submitProduct = async () => {
  try {
    const response = await fetch('https://apitienda-production-f2ba.up.railway.app/producto/guardar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct.value)
    })

    if (response.ok) {
      addedMessage.value = "¡Producto agregado correctamente!"
      newProduct.value = { nombre: '', descripcion: '', precio: 0, stock: 0, imagen: '' }
      await fetchProducts() // Refresca el store
      setTimeout(() => { addedMessage.value = ''; showForm.value = false }, 3000)
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error)
  }
}

// Fallback por si el cascaron necesita llenarse
const mockFeatured = ref([
   { id: 'f1', nombre: 'Florero de Cerámica', descripcion: 'Minimalista y elegante', precio: 500, stock: 4 },
   { id: 'f2', nombre: 'Pulsera de Plata', descripcion: 'Con detalles finos artesanales', precio: 850, stock: 2 },
   { id: 'f3', nombre: 'Cojín de Lino', descripcion: 'Tejido a mano con tintes naturales', precio: 320, stock: 15 },
   { id: 'f4', nombre: 'Reloj de Madera', descripcion: 'Estilo nórdico, madera reciclada', precio: 1200, stock: 1 }
])
</script>

<style scoped>
.hero-section {
  height: 60vh;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(240,244,248,0.4) 100%);
}

.liquid-text {
  background: linear-gradient(135deg, #1a202c 0%, #48bb78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass-btn-primary {
  background: rgba(72, 187, 120, 0.9);
  backdrop-filter: blur(4px);
  border: none;
  font-weight: bold;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}
.glass-btn-primary:hover {
  background: rgba(56, 161, 105, 1);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(72, 187, 120, 0.2) !important;
}

.hero-bg-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: #68d391;
  top: -100px;
  right: -50px;
  animation: float 10s infinite alternate;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: #90cdf4;
  bottom: -50px;
  left: -100px;
  animation: float 12s infinite alternate-reverse;
}

@keyframes float {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(30px) scale(1.1); }
}

.z-index-1 {
  z-index: 1;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}

.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255, 0.8);
}

.form-control {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255,255,255, 0.8);
  border-radius: 8px;
  padding: 12px;
}
.form-control:focus {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 0 3px rgba(72,187,120,0.2);
  border-color: #48bb78;
}

/* Transiciones para Vue v-if */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
