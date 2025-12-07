import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // <-- IMPORTA EL ROUTER

const app = createApp(App)

app.use(router)                 // <-- MONTA EL ROUTER
app.mount('#app')
