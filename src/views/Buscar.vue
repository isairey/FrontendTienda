<template>
    <div class="container my-4">
      <div v-if="filteredProducts.length > 0" class="row product-list">
        <div class="col-md-4 mb-3" v-for="product in filteredProducts" :key="product.id">
          <ProductCard :product="product" @add-to-cart="addToCart" />
        </div>
      </div>
      <p v-else class="text-center text-muted">No se encontraron productos.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import ProductCard from '../components/ProductCard.vue'
  import ProductCard2 from '../components/ProductCard2.vue'
  
  const route = useRoute()
  const cart = ref([]) // Carrito de compras
  
  const addToCart = (product) => {
    cart.value.push(product) // Agregamos el producto al carrito
    console.log('Producto añadido al carrito:', product)
  }
  
  const products = ref([
  { id: 1, name: 'Alebrije', price: '$799.97 MXN', image: './alebrije.webp' },
  { id: 2, name: 'Sombrero', price: '$2,999.00 MXN', image: './sombrero.webp' },
  { id: 3, name: 'Vestido de Telar', price: '$1,990.75 MXN', image: './Vestido.png' },
  { id: 4, name: 'Molcajete', price: '$250.00 MXN', image: './MOLCAJETE.webp' },
  { id: 5, name: 'Zapatos', price: '$1,500.00 MXN', image: './zapatos.webp' },
  { id: 6, name: 'Chamarra de cuero', price: '$3,500.00 MXN', image: './chamarra.png' },
  { id: 7, name: 'Guayabera', price: '$1,200.00 MXN', image: './guayavera.png' },
  { id: 8, name: 'Botas vaqueras', price: '$2,000.00 MXN', image: './Botas.webp' },
  { id: 9, name: 'Cinturón de cuero', price: '$600.00 MXN', image: './cinturon.png' },
  { id: 10, name: 'Bolso de mano', price: '$850.00 MXN', image: './bolso_mano.png' },
  { id: 11, name: 'Pantalón de mezclilla', price: '$1,200.00 MXN', image: './pantalon.png' },
  { id: 12, name: 'Blusa bordada', price: '$900.00 MXN', image: './blusa.png' },
  { id: 13, name: 'Faja', price: '$450.00 MXN', image: './faja.png' },
  { id: 14, name: 'Mochila de cuero', price: '$1,500.00 MXN', image: './mochila.png' },
  { id: 15, name: 'Pantalón de lino', price: '$1,100.00 MXN', image: './pantalon-lino.png' },
  { id: 16, name: 'Sandalias', price: '$800.00 MXN', image: './sandalia.png' },
  { id: 17, name: 'Bufanda de lana', price: '$350.00 MXN', image: './bufanda.png' },
  { id: 18, name: 'Gorra', price: '$250.00 MXN', image: './gorra.png' },
  { id: 19, name: 'Reloj', price: '$2,000.00 MXN', image: './reloj.png' },
  { id: 20, name: 'Pulsera de plata', price: '$650.00 MXN', image: './pulsera.png' },
  { id: 21, name: 'Anillo de oro', price: '$5,000.00 MXN', image: './anillo.png' },
  { id: 22, name: 'Camiseta', price: '$350.00 MXN', image: './camiseta.webp' },
  { id: 23, name: 'Chaqueta de mezclilla', price: '$1,200.00 MXN', image: './chaqueta-mezclilla.png' },
  { id: 24, name: 'Taza artesanal', price: '$200.00 MXN', image: './taza.png' },
  { id: 25, name: 'Plato decorativo', price: '$350.00 MXN', image: './plato.png' },
  { id: 26, name: 'Escultura de madera', price: '$1,500.00 MXN', image: './madera.png' },
  { id: 27, name: 'Vaso tallado', price: '$300.00 MXN', image: './baso.png' },
  { id: 28, name: 'Candelabro de hierro', price: '$900.00 MXN', image: './candelabro.png' },
  { id: 29, name: 'Jarrón de cerámica', price: '$1,200.00 MXN', image: './jarron.webp' },
  { id: 30, name: 'Cesta de mimbre', price: '$500.00 MXN', image: './cesta.png' }
  ])
  
  const searchQuery = ref(route.query.query || '')
  
  const filteredProducts = computed(() => {
    if (!searchQuery.value.trim()) return []
    return products.value.filter(product =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
  
  watch(() => route.query.query, (newQuery) => {
    searchQuery.value = newQuery || ''
  })
  </script>
  