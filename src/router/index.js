import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'
import Portafolio from '../views/Portafolio.vue'
import Servicios from '../views/Servicios.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import Login from '../views/Login.vue'
import CrudView from '../views/CrudView.vue'   // 👉 IMPORTACIÓN DEL CRUD

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/form', name: 'Contacto', component: Contacto },
  { path: '/portafolio', name: 'Portafolio', component: Portafolio },

  // Página principal de servicios
  { path: '/servicios', name: 'Servicios', component: Servicios },

  // Página de detalle dinámica
  {
    path: '/service/:id',
    name: 'ServiceDetail',
    component: ServiceDetail,
    props: true
  },

  // RUTA LOGIN
  { path: '/login', name: 'Login', component: Login },

  // 👉 NUEVA RUTA: CRUD
  { path: '/crud', name: 'Crud', component: CrudView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
  