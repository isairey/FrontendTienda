<template>
    <div class="register-container d-flex align-items-center justify-content-center vh-100">
      <div class="register-card p-4 shadow-lg rounded">
        <h2 class="text-center text-success">Registro</h2>
  
        <!-- Mensaje de registro exitoso -->
        <div v-if="successMessage" class="alert alert-success text-center">
          {{ successMessage }}
        </div>
  
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="name" class="form-label text-muted">Nombre</label>
            <input type="text" v-model="name" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label text-muted">Correo Electrónico</label>
            <input type="email" v-model="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label text-muted">Contraseña</label>
            <input type="password" v-model="password" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-success w-100">Registrarse</button>
        </form>
  
        <p class="mt-3 text-center text-muted">
          ¿Ya tienes una cuenta? <router-link to="/" class="text-success fw-bold">Iniciar sesión</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const successMessage = ref('') // Para mostrar el mensaje de éxito
  
  const register = () => {
    console.log('Registrando usuario:', name.value, email.value, password.value)
  
    // Simular registro exitoso
    successMessage.value = 'Registro exitoso ✅'
  
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      successMessage.value = ''
    }, 3000)
  }
  </script>
  
  <style scoped>
  .register-container {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #e3f2e1, #c8e6c9);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .register-card {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 12px;
  }
  </style>
  