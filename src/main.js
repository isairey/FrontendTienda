import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // Importa el router

const app = createApp(App);
app.use(router); // Usa el router
app.mount('#app'); // Monta la aplicación
