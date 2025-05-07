<template>
    <div class="horario">
      <h1>Horario de la Semana</h1>
      <table class="tabla-horario">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sábado</th>
            <th>Domingo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hora, index) in horas" :key="index">
            <td>{{ hora }}</td>
            <td v-for="dia in dias" :key="dia">
              <span v-if="semana[dia][index]">{{ semana[dia][index] }}</span>
              <span v-else>No disponible</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Horario',
    data() {
      return {
        horas: ['08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'],
        dias: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        semana: {
          Lunes: ['IA', 'Aguil', 'IA', 'Aguil'],
          Martes: ['IA', 'Aguil', 'IA', 'Aguil'],
          Miércoles: ['IA', 'Aguil', 'IA', 'Aguil'],
          Jueves: ['IA', 'Aguil', 'IA', 'Aguil'],
          Viernes: ['IA', 'Aguil', 'IA', 'Aguil'],
          Sábado: ['IA', 'Aguil', 'IA', 'Aguil'],
          Domingo: ['IA', 'Aguil', 'IA', 'Aguil'],
        },
      };
    },
  };
  </script>
  
  <style scoped>

  
  .tabla-horario {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }.container {
    max-width: 1000px; /* Aumentar el ancho para un mejor uso del espacio */
    margin: 20px auto; /* Centrado en la página con un margen superior */
    padding: 10px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px; /* Bordes redondeados para mayor suavidad */
  }
  
  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: #f4f4f4;
    color: #333;
    font-weight: 500;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #eaeaea;
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 20px;
    }
  
    th, td {
      padding: 8px;
    }
  }
  .tabla-horario td {
    padding: 12px;
    text-align: center;
    border: 1px solid #ddd;
  }

  </style>
  