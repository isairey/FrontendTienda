<template>
  <div class="cart-container container py-5">
    <div class="d-flex align-items-center mb-5">
      <h2 class="display-5 fw-bold liquid-text m-0">Tu Carrito</h2>
      <span class="badge bg-success ms-3 rounded-pill glass-badge">{{ store.cart.length }} items</span>
    </div>

    <div v-if="store.cart.length === 0" class="text-center py-5 glass-card rounded-4 fade-in">
      <div class="empty-cart-icon mb-4">🛒</div>
      <h4 class="text-muted fw-bold">Tu carrito está vacío</h4>
      <p class="text-muted mb-4">¡Parece que aún no has agregado joyas o cerámicas a tu carrito!</p>
      <router-link to="/home" class="btn btn-primary px-4 py-2 rounded-pill glass-btn-primary">
        Explorar Productos
      </router-link>
    </div>

    <div v-else class="row g-4 fade-in">
      <!-- Items del Carrito -->
      <div class="col-lg-8">
        <div class="glass-card rounded-4 p-4 shadow-sm mb-4">
          <div v-for="(item, index) in store.cart" :key="item.id" class="cart-item d-flex align-items-center mb-4 pb-4 border-bottom last-no-border">
            <img :src="item.imagen || `https://picsum.photos/seed/${item.id || item.nombre}/100/100`" class="rounded-3 shadow-sm product-img" alt="Producto">
            
            <div class="ms-4 flex-grow-1">
              <h5 class="fw-bold mb-1 text-dark">{{ item.nombre }}</h5>
              <div class="text-success fw-bold fs-5">{{ formatCurrency(item.precio) }}</div>
            </div>

            <div class="d-flex align-items-center bg-light rounded-pill px-3 py-1 shadow-sm me-4 glass-qty">
              <button class="btn btn-sm text-secondary border-0 fw-bold" @click="updateQuantity(item.id, item.quantity - 1)">-</button>
              <span class="mx-3 fw-bold">{{ item.quantity }}</span>
              <button class="btn btn-sm text-success border-0 fw-bold" @click="updateQuantity(item.id, item.quantity + 1)">+</button>
            </div>

            <button class="btn btn-outline-danger rounded-pill btn-sm d-flex align-items-center delete-btn" @click="removeFromCart(index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Resumen (Subtotal/Total) -->
      <div class="col-lg-4">
        <div class="glass-card rounded-4 p-4 shadow-sm sticky-summary">
          <h4 class="fw-bold mb-4 border-bottom pb-3 text-dark">Resumen del Pedido</h4>
          
          <div class="d-flex justify-content-between mb-3">
            <span class="text-muted">Subtotal</span>
            <span class="fw-bold">{{ formatCurrency(cartTotal) }}</span>
          </div>
          <div class="d-flex justify-content-between mb-4 border-bottom pb-4">
            <span class="text-muted">Envío</span>
            <span class="text-success fw-bold">Gratis</span>
          </div>
          
          <div class="d-flex justify-content-between mb-4 align-items-center">
            <span class="text-dark fw-bold fs-5">Total</span>
            <span class="text-success fw-bold display-6">{{ formatCurrency(cartTotal) }}</span>
          </div>
          
          <button class="btn btn-success w-100 py-3 rounded-3 fw-bold glass-btn-success shadow-lg">
            Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { store, removeFromCart, updateCartQuantity } from '../store/globalStore'

const updateQuantity = (id, newQuantity) => {
  if (newQuantity < 1) return;
  updateCartQuantity(id, newQuantity)
}

const cartTotal = computed(() => {
  return store.cart.reduce((total, item) => total + (item.precio * item.quantity), 0)
})

const formatCurrency = (value) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
}
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
}

.liquid-text {
  background: linear-gradient(135deg, #1a202c 0%, #48bb78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass-badge {
  background: rgba(72, 187, 120, 0.2) !important;
  color: #2f855a;
  border: 1px solid rgba(72, 187, 120, 0.5);
}

.product-img {
  width: 90px;
  height: 90px;
  object-fit: cover;
}

.glass-qty {
  background: rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.delete-btn {
  background: rgba(229, 62, 62, 0.1);
  border-color: rgba(229, 62, 62, 0.3);
  color: #e53e3e;
  transition: all 0.3s;
}

.delete-btn:hover {
  background: #e53e3e;
  color: white;
  border-color: #e53e3e;
  transform: translateY(-2px);
}

.last-no-border:last-child {
  border-bottom: none !important;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

.empty-cart-icon {
  font-size: 5rem;
  opacity: 0.5;
}

.glass-btn-primary, .glass-btn-success {
  background: linear-gradient(135deg, rgba(72, 187, 120, 0.9) 0%, rgba(56, 161, 105, 0.9) 100%);
  border: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.glass-btn-primary:hover, .glass-btn-success:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(72, 187, 120, 0.3);
}

.sticky-summary {
  position: sticky;
  top: 100px;
}

.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>