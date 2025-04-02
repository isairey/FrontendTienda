<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg">
            <div class="card-body text-center">
              <img src="https://via.placeholder.com/150" alt="User Avatar" class="rounded-circle mb-3">
              <h3 class="card-title">Nombre del Usuario</h3>
              <p class="text-muted">correo@ejemplo.com</p>
              <hr>
              <button class="btn btn-primary w-100 mb-2">Editar Perfil</button>
              <button class="btn btn-danger w-100">Cerrar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const editProfile = () => {
    alert('Función para editar perfil próximamente.')
  }
  
  const logout = () => {
    alert('Has cerrado sesión.')
    router.push('/') // Redirige a la página de inicio
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
  