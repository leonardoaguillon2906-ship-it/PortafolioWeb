import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'
import Portafolio from '../views/Portafolio.vue'
import Servicios from '../views/Servicios.vue'   // 👉 IMPORTAR

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/form', name: 'Contacto', component: Contacto },
  { path: '/portafolio', name: 'Portafolio', component: Portafolio },

  // 👉 NUEVA PÁGINA CON 10 CARDS
  { path: '/servicios', name: 'Servicios', component: Servicios },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
