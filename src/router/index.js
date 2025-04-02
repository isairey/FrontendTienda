import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductPage from '../views/ProductPage.vue';
import CartPage from '../views/CartPage.vue';
import Ceramica from '../views/Ceramica.vue';
import Joyería from '../views/Joyeria.vue';
import Textiles from '../views/Textiles.vue';
import Madera from '../views/Madera.vue';
import Pinturas from '../views/Pinturas.vue';
import Regalos from '../views/Regalos.vue';
import Cart from '../views/Cart.vue';
import Usuarios from '../views/Usuarios.vue';
import SearchResults from '../views/Buscar.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductPage },
  { path: '/cartpage', component: CartPage },
  { path: '/ceramica', component: Ceramica },
  { path: '/joyeria', component: Joyería },
  { path: '/textiles', component: Textiles },
  { path: '/madera', component: Madera },
  { path: '/pinturas', component: Pinturas },
  { path: '/regalos', component: Regalos },
  { path: '/cart', component: Cart },
  { path: '/search', component: SearchResults },
  { path: '/profile', component: Usuarios }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
