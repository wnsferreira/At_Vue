import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Adicionar from '../views/Adicionar'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/adicionar',
    name: 'adicionar',
    component: Adicionar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router