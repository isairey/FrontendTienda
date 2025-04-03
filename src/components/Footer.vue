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
  background-color: #f3f9f3; /* Verde muy pálido, casi blanco */
  color: #333; /* Texto oscuro para buen contraste */
  padding: 6px 0;
  font-weight: bold; /* Texto en negrita */
  text-align: center;
  font-size: 14px;
  border-top: 2px solid #e1f0e1; /* Verde muy suave para el borde */
}

footer:hover {
  background-color: #eaf4ea; /* Un verde un poco más marcado para hover */
}

</style>
