import { reactive, watch } from 'vue'

// --- ESTADO GLOBAL ---
export const store = reactive({
  cart: [],
  products: [],
  categories: [
    { id: 'ceramica', name: 'Cerámica' },
    { id: 'joyeria', name: 'Joyería' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'madera', name: 'Madera' },
    { id: 'pinturas', name: 'Pinturas' },
    { id: 'regalos', name: 'Regalos' }
  ],
  userLogueado: false,
  userCorreo: '',
  isLoading: false
})

// --- AUTENTICACIÓN ---
export const initAuth = () => {
  store.userLogueado = localStorage.getItem('usuarioLogueado') === 'true'
  store.userCorreo = localStorage.getItem('correoUsuario') || ''
}

export const logout = () => {
  localStorage.removeItem('usuarioLogueado')
  localStorage.removeItem('correoUsuario')
  localStorage.removeItem('authToken')
  store.userLogueado = false
  store.userCorreo = ''
}

// --- CARRITO ---
export const loadCart = () => {
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart)
    parsedCart.forEach(item => {
      if (!item.quantity) item.quantity = 1
    })
    store.cart = parsedCart
  }
}

export const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(store.cart))
}

export const addToCart = (product) => {
  const existingItem = store.cart.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    store.cart.push({ ...product, quantity: 1 })
  }
  saveCart()
}

export const removeFromCart = (index) => {
  store.cart.splice(index, 1)
  saveCart()
}

export const updateCartQuantity = (id, newQuantity) => {
  const item = store.cart.find(i => i.id === id)
  if (item && newQuantity > 0) {
    item.quantity = newQuantity
    saveCart()
  }
}

// --- PRODUCTOS ---
export const fetchProducts = async () => {
  store.isLoading = true
  try {
    const response = await fetch('https://apitienda-production-f2ba.up.railway.app/producto/traer')
    if (response.ok) {
      const data = await response.json()
      store.products = data
    }
  } catch (error) {
    console.error("Error al obtener productos de la API, usando mock local si es necesario.", error)
  } finally {
    store.isLoading = false
  }
}

export const getProductsByCategory = (categorySlug) => {
  // Como la API principal no tiene tantas categorias, usaremos un mock inteligente
  // que mezcle productos reales si los hay, y rellene para dar volumen a la tienda.
  const apiProducts = store.products.filter(p => 
     p.nombre.toLowerCase().includes(categorySlug.toLowerCase()) ||
     p.descripcion.toLowerCase().includes(categorySlug.toLowerCase())
  )
  
  if (apiProducts.length > 0) return apiProducts;

  // Mock Fallback premium para el "cascarón" (Glassmorphism necesita mostrar datos para verse bien)
  return [
    { id: `mock-${categorySlug}-1`, nombre: `Articulo Premium de ${categorySlug} 1`, descripcion: `Exclusivo diseño de ${categorySlug} con acabados finos.`, precio: 450.00, stock: 10, category: categorySlug },
    { id: `mock-${categorySlug}-2`, nombre: `Colección ${categorySlug} Moderna`, descripcion: `Una pieza única de ${categorySlug} diseñada para interiores modernos.`, precio: 890.00, stock: 5, category: categorySlug },
    { id: `mock-${categorySlug}-3`, nombre: `Set de ${categorySlug} Artesanal`, descripcion: `Conjunto elaborado a mano mediante técnicas tradicionales.`, precio: 1200.00, stock: 2, category: categorySlug },
    { id: `mock-${categorySlug}-4`, nombre: `Edición Limitada de ${categorySlug}`, descripcion: `Pieza de autor que resalta por sus detalles únicos.`, precio: 2150.00, stock: 1, category: categorySlug },
  ]
}

// Inicializadores automáticos para no depender del ciclo de vida de los componentes sueltos
initAuth()
loadCart()
fetchProducts()

// Observador por si acaso algo muta directamente el carrito
watch(() => store.cart, () => {
  saveCart()
}, { deep: true })
