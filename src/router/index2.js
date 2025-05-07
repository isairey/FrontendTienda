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
import SearchResults from '../views/Buscar.vue';
import Login from '../views/Login.vue';
import Register from '../views/Registrer.vue';
import About from '../Pages/About.vue';
import Home2 from '../Pages/Home.vue';
import Index from '../Pages/Index.vue';
import Calculadora from '../Pages/Calculadora.vue';
import Tienda from '../Pages/Tienda.vue';
import Promp from '../Pages/Prom.vue';
import Evento from '../Pages/Evento.vue';

const routes = [
  { path: '/', component: Home2},
  { path: '/login', component: Login,  meta: { hideLayout: true } },
  { path: '/home', component: Home },
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
  { path: '/profile', component: Usuarios },
  { path: '/about', component: About},
  { path: '/tienda', component: Tienda},
  { path: '/calculadora', component: Calculadora},
  { path: '/prom', component: Promp},
  { path: '/evento', component: Evento},
  { path: '/register', component: Register,  meta: { hideLayout: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

