import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/list-view', name: 'ListView', component: ListView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
