<template>
    <div class="login-container d-flex align-items-center justify-content-center vh-100">
      <div class="login-card p-4 shadow-lg rounded">
        <h2 class="text-center text-success">Iniciar Sesión</h2>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label text-muted">Correo Electrónico</label>
            <input type="email" v-model="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label text-muted">Contraseña</label>
            <input type="password" v-model="password" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-success w-100">Ingresar</button>
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
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const login = () => {
    console.log('Iniciar sesión con:', email.value, password.value)
    router.push('/home')
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
  