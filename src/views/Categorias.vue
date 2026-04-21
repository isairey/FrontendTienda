<template>
  <section class="container my-5">
    <div class="category-header mb-5 text-center fade-in">
      <h2 class="display-4 fw-bold liquid-text text-uppercase">{{ currentCategoryName }}</h2>
      <p class="text-muted fs-5">Descubre nuestra exclusiva selección de {{ currentCategoryName.toLowerCase() }}</p>
    </div>

    <div v-if="store.isLoading" class="text-center py-5">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>

    <div v-else>
      <div v-if="products.length === 0" class="text-center py-5">
        <h4 class="text-muted">No encontramos productos en esta categoría.</h4>
      </div>
      
      <div v-else class="row g-4 product-list">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 fade-in-up" 
             v-for="(product, index) in products" 
             :key="product.id"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { store, getProductsByCategory } from '../store/globalStore'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()

// Computed property para extraer el ID de la ruta activa y buscar los productos
const categoryId = computed(() => route.params.id)

const currentCategoryName = computed(() => {
  const cat = store.categories.find(c => c.id === categoryId.value)
  return cat ? cat.name : categoryId.value
})

const products = computed(() => {
  return getProductsByCategory(categoryId.value)
})
</script>

<style scoped>
.category-header {
  position: relative;
  padding: 3rem 0;
}

.liquid-text {
  background: linear-gradient(135deg, #2d3748 0%, #48bb78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 20px rgba(72, 187, 120, 0.2);
}

.product-list {
  padding-bottom: 2rem;
}

/* Animaciones */
.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
