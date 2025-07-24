// src/main.ts

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

// Crea la app
const app = createApp(App)

// Usa plugins
app.use(pinia)
app.use(router)

// Monta la app
app.mount('#app')