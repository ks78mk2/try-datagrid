import { createRouter, createWebHistory } from 'vue-router'
import DataGrid from '@/views/DataGrid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DataGrid',
      component: DataGrid
    }
  ]
})

export default router
