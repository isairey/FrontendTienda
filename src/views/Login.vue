<template>
  <div class="login-container d-flex align-items-center justify-content-center vh-100">
    <div class="login-card p-4 shadow-lg rounded">
      <h2 class="text-center text-success">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label text-muted">Correo Electrónico</label>
          <input type="email" v-model="correo" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label text-muted">Contraseña</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-success w-100" :disabled="loading">Ingresar</button>
        <p v-if="errorMessage" class="text-danger text-center mt-3">{{ errorMessage }}</p>
      </form>
      <p class="mt-3 text-center text-muted">
        ¿No tienes cuenta? <router-link to="/register" class="text-success fw-bold">Regístrate</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const correo = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const router = useRouter()

const login = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    // Enviar las credenciales al backend como JSON con POST
    const response = await axios.post('http://localhost:8080/usuario/login', {
      correo: correo.value,
      password: password.value
    })

    // Si el login es exitoso, el backend devuelve "Login exitoso"
    if (response.status === 200 && response.data === 'Login exitoso') {
      // Almacenar el token (si el backend lo envía) o redirigir
      // Aquí asumimos que el backend solo responde con un mensaje
      localStorage.setItem('usuarioLogueado', 'true')
localStorage.setItem('correoUsuario', correo.value)

      localStorage.setItem('authToken', 'some-auth-token'); // Cambiar si el backend devuelve un token
      router.push('/Home')
    }
  } catch (error) {
    // Si el backend responde con 401 o un error, manejarlo
    if (error.response && error.response.status === 401) {
      errorMessage.value = 'Correo o contraseña incorrectos'
    } else {
      errorMessage.value = 'Hubo un error al intentar iniciar sesión.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #e3f2e1, #c8e6c9);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 12px;
}
</style>
