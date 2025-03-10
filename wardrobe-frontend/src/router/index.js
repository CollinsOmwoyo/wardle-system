import AddItem from '@/views/AddItem.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ClothingList from '@/views/ClothingList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/register', component: Register },
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/clothing', component: ClothingList, meta: { requiresAuth: true } },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  { path: '/add-item', component: AddItem },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
