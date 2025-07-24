<template>
    <div class="login-container">
      <h1>Bienvenido a EscuelaViva</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Correo" />
        <input v-model="password" type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default defineComponent({
    name: 'Login',
    setup() {
      const email = ref('')
      const password = ref('')
      const router = useRouter()
  
      const login = () => {
        if (email.value && password.value) {
          alert('Login exitoso')
          router.push('/dashboard')
        } else {
          alert('Completa todos los campos')
        }
      }
  
      return {
        email,
        password,
        login
      }
    }
  })
  </script>
  
  <style lang="scss" scoped>
@use "sass:color";
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #1A1A2E, #16213E);
    color: white;
  
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 300px;
  
      input {
        padding: 0.75rem;
        margin-bottom: 1rem;
        border: none;
        border-radius: 6px;
        outline: none;
      }
  
      button {
        padding: 0.75rem;
        background: #FF9F1C;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
  
        &:hover {
          background: color.adjust(#FF9F1C, $lightness: -10%);
        }
      }
    }
  }
  </style>