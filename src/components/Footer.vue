<template>
  <footer>
    <p>&copy; 2025 TimShop. Todos los derechos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
footer {
  background-color: #fefefe; /* Blanco suave */
  color: #006d77; /* Azul suave inicial */
  padding: 10px 0; /* Espaciado */
  font-weight: bold; /* Texto negrita */
  text-align: center; /* Centramos el texto */
  font-size: 14px; /* Tamaño del texto */
  border-top: 3px solid #83c5be; /* Borde decorativo */
  transition: background-color 0.3s ease, color 0.3s ease; /* Transición suave */
}

footer:hover {
  background-color: #e8f5f5; /* Fondo cambia a azul pastel */
  color: #ff6f61; /* Texto cambia a un coral vibrante */
}
</style>