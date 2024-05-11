import { createRouter, createWebHistory } from 'vue-router'
import AddPassword from '../components/AddPassword.vue'
import GeneratePassword from '../components/GeneratePassword.vue'
import PasswordList from '../components/PasswordList.vue'
import Home from '../components/PasswordManager.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PasswordManager',
      component: Home
    },
    {
      path: '/add-password',
      name: 'add-password',
      component: AddPassword
    },
    {
      path: '/passwords',
      name: 'passwords',
      component: PasswordList
    },
    {
      path: '/generate-password',
      name: 'generate-password',
      component: GeneratePassword
    }
  ]
})

export default router
