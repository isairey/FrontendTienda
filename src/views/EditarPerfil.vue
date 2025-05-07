<template>
    <div class="container py-5 product-list">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg p-4">
            <h2 class="text-center mb-4">Editar Perfil</h2>
            <form @submit.prevent="actualizarUsuario">
              <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="nombre" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Correo</label>
                <input v-model="correo" type="email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">Dirección</label>
                <input v-model="direccion" type="text" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input v-model="password" type="password" class="form-control" required>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-success">Guardar Cambios</button>
                <button @click="cancelar" type="button" class="btn btn-secondary mt-2">Cancelar</button>
              </div>
              <div v-if="mensaje" class="alert alert-info mt-3 text-center">{{ mensaje }}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  
  const router = useRouter()
  
  const id = ref(null)
  const nombre = ref('')
  const correo = ref('')
  const direccion = ref('')
  const password = ref('')
  const mensaje = ref('')
  
  onMounted(async () => {
    const correoGuardado = localStorage.getItem('correoUsuario')
    if (!correoGuardado) {
      router.push('/')
      return
    }
  
    try {
      const response = await axios.get(`https://apitienda-production-f2ba.up.railway.app/usuario/datos?correo=${correoGuardado}`)
      const usuario = response.data
      id.value = usuario.id // ← Guarda el ID para el PUT
      nombre.value = usuario.nombre
      correo.value = usuario.correo
      direccion.value = usuario.direccion
      password.value = usuario.password
    } catch (error) {
      console.error('Error al cargar datos:', error)
      router.push('/')
    }
  })
  
  const actualizarUsuario = async () => {
    try {
      const usuarioActualizado = {
        nombre: nombre.value,
        correo: correo.value,
        direccion: direccion.value,
        password: password.value
      }
  
      await axios.put(`https://apitienda-production-f2ba.up.railway.app/usuario/actualizar/${id.value}`, usuarioActualizado)
  
      mensaje.value = 'Perfil actualizado correctamente.'
      localStorage.setItem('usuario', JSON.stringify(usuarioActualizado))
      localStorage.setItem('correoUsuario', correo.value)
    } catch (error) {
      console.error('Error al actualizar:', error)
      mensaje.value = 'Hubo un error al actualizar el perfil.'
    }
  }
  
  const cancelar = () => {
    router.push('/profile')
  }
  </script>
  
  
  <style scoped>
  .card {
    border-radius: 12px;
  }
  .product-list {
  max-height: 70vh; /* Limita la altura para activar el scroll */
  overflow-y: auto; /* Activa el desplazamiento vertical */
}
  </style>
  
