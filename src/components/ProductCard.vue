<template>
  <div class="card shadow-sm text-center bg-light border-0">
    <img
      :src="imageUrl"
      class="card-img-top"
      :alt="product.nombre"
    />
    <div class="card-body">
      <h5 class="card-title text-dark">{{ product.nombre }}</h5>
      <p class="card-text text-muted">{{ product.descripcion }}</p>
      <p class="card-text text-success fw-bold">{{ formattedPrice }}</p>
      <button class="btn btn-success w-100" @click="addToCart">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";

const props = defineProps({
  product: Object,
});

const emit = defineEmits(["add-to-cart"]);
const buttonText = ref("Añadir al carrito");

const formattedPrice = computed(() => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(props.product.precio);
});

// Ruta dinámica de la imagen
const imageUrl = computed(() => {
  return `https://picsum.photos/seed/${props.product.id}/400/300`;
});


const addToCart = () => {
  emit("add-to-cart", props.product);
  buttonText.value = "¡Agregado! ✅";

  setTimeout(() => {
    buttonText.value = "Añadir al carrito";
  }, 2000);
};
</script>

<style scoped>
.card {
  background-color: #f9fafb;
  border-radius: 8px;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.card-title {
  font-weight: bold;
  color: #4a4a4a;
}
.card-text {
  font-size: 1em;
}
.btn-success {
  background-color: #48bb78;
  border: none;
  color: #ffffff;
}
.btn-success:hover {
  background-color: #38a169;
}
</style>
