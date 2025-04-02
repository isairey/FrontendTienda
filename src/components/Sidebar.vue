<template>
  <div class="sidebar">
    <h3>Categorías</h3>
    <ul>
      <li><router-link to="/ceramica">Cerámica</router-link></li>
      <li><router-link to="/joyeria">Joyería</router-link></li>
      <li><router-link to="/textiles">Textiles</router-link></li>
      <li><router-link to="/madera">Madera</router-link></li>
      <li><router-link to="/pinturas">Pinturas</router-link></li>
      <li><router-link to="/regalos">Regalos</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  width: 230px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
}

.sidebar h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  display: block;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  border-radius: 8px;
  transition: 0.3s;
}

.sidebar a:hover {
  background-color: #f1f1f1;
}
</style>
