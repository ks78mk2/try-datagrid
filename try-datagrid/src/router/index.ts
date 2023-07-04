import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DataGrid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DataGrid',
      component: HomeView
    }
  ]
})

export default router
