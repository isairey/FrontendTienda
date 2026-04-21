<template>
  <div class="card glass-card border-0 h-100">
    <div class="image-wrapper">
      <img
        :src="imageUrl"
        class="card-img-top"
        :alt="product.nombre"
      />
      <div v-if="product.stock <= 5" class="stock-badge">
        ¡Solo {{ product.stock }} disponibles!
      </div>
    </div>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title text-dark fw-bold mb-1">{{ product.nombre }}</h5>
      <p class="card-text text-muted small flex-grow-1">{{ product.descripcion }}</p>
      
      <div class="d-flex justify-content-between align-items-center mt-3 mb-3">
        <span class="price-text">{{ formattedPrice }}</span>
      </div>
      
      <button class="btn glass-btn-success w-100 mt-auto" @click="handleAddToCart">
        <span v-if="!added">{{ buttonText }}</span>
         <span v-else>¡Agregado! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { addToCart } from "../store/globalStore";
import { useRouter } from "vue-router";
import { store } from "../store/globalStore";

const props = defineProps({
  product: Object,
});

const buttonText = ref("Añadir al carrito");
const added = ref(false);
const router = useRouter();

const formattedPrice = computed(() => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(props.product.precio);
});

// Ruta dinámica de la imagen
const imageUrl = computed(() => {
  return props.product.imagen || `https://picsum.photos/seed/${props.product.id || props.product.nombre}/400/300`;
});


const handleAddToCart = () => {
  if (!store.userLogueado) {
    alert("Debes iniciar sesión para añadir productos al carrito.");
    router.push("/");
    return;
  }

  addToCart(props.product);
  added.value = true;

  setTimeout(() => {
    added.value = false;
  }, 2000);
};
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.6);
  border-color: rgba(255, 255, 255, 0.8);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
}

.card-img-top {
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.glass-card:hover .card-img-top {
  transform: scale(1.05);
}

.stock-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(229, 62, 62, 0.8);
  backdrop-filter: blur(4px);
  color: white;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: bold;
}

.price-text {
  font-size: 1.25rem;
  font-weight: 800;
  color: #2f855a;
}

.glass-btn-success {
  background: linear-gradient(135deg, rgba(72, 187, 120, 0.9) 0%, rgba(56, 161, 105, 0.9) 100%);
  border: none;
  color: white;
  border-radius: 10px;
  font-weight: 600;
  padding: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(72, 187, 120, 0.3);
}

.glass-btn-success:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(72, 187, 120, 0.4);
}
</style>
