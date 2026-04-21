import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductPage from '../views/ProductPage.vue';
import Categorias from '../views/Categorias.vue';
import Cart from '../views/Cart.vue';
import Usuarios from '../views/Usuarios.vue';
import SearchResults from '../views/Buscar.vue';
import Login from '../views/Login.vue';
import Register from '../views/Registrer.vue';
import Editaru from '../views/EditarPerfil.vue';
import { store } from '../store/globalStore';

const routes = [
  { path: '/', component: Login, meta: { hideLayout: true } },
  { path: '/home', component: Home },
  { path: '/product/:id', component: ProductPage },
  { path: '/categoria/:id', component: Categorias },
  { path: '/cart', component: Cart, meta: { requiresAuth: true } },
  { path: '/search', component: SearchResults },
  { path: '/profile', component: Usuarios, meta: { requiresAuth: true } },
  { path: '/editaru', component: Editaru, meta: { requiresAuth: true } },
  { path: '/register', component: Register, meta: { hideLayout: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Guard global sencillo
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.userLogueado) {
    next('/');
  } else {
    next();
  }
});

export default router;
