<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <p>Bienvenido a EscuelaViva.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'Dashboard'
  })
  </script>
  
  <style lang="scss" scoped>
  .dashboard {
    padding: 2rem;
    h1 {
      color: #1A1A2E;
    }
  }
  </style>