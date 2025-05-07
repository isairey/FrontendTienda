<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-lg">
          <div class="card-body text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/10542/10542492.png" alt="User Avatar" class="rounded-circle mb-3">
            <h3 class="card-title">{{ nombre }}</h3>
            <p class="text-muted">{{ correo }}</p>
            <hr>
            <button @click="editProfile" class="btn btn-primary w-100 mb-2">Editar Perfil</button>
            <button @click="logout" class="btn btn-danger w-100">Cerrar Sesión</button>
          </div>
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

const nombre = ref('')
const correo = ref('')

onMounted(async () => {
  const correoGuardado = localStorage.getItem('correoUsuario')
  if (!correoGuardado) {
    router.push('/')
    return
  }

  try {
    const response = await axios.get(`http://localhost:8080/usuario/datos?correo=${correoGuardado}`)
    const usuario = response.data
    nombre.value = usuario.nombre
    correo.value = usuario.correo

    // Opcional: actualizar el localStorage con los datos completos
    localStorage.setItem('usuario', JSON.stringify(usuario))
  } catch (error) {
    console.error('Error al obtener datos del usuario:', error)
    router.push('/') // Redirige si hay error
  }
})

const editProfile = () => {
  router.push('/editaru')
}

const logout = () => {
  localStorage.removeItem('usuario')
  localStorage.removeItem('usuarioLogueado')
  localStorage.removeItem('correoUsuario')
  router.push('/')
}
</script>


  <style scoped>
  .profile {
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  
  button {
    margin-top: 10px;
    padding: 10px;
    border: none;
    background: #58595a;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background: #a7adb4;
  }
  </style>
  