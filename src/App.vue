<template>
  <div class="container-fluid" style="background-color: #f0f0f0; min-height: 100vh">
    <NavBar />
    <RouterView
      :passwords="passwords"
      @passwordAdded="addPasswordToList"
      @passwordDeleted="deletePasswordFromList"
    />
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    const passwords = ref(JSON.parse(localStorage.getItem('passwords')) || [])

    const addPasswordToList = (newPassword) => {
      passwords.value.push(newPassword)
      savePasswords()
    }

    const deletePasswordFromList = (index) => {
      passwords.value.splice(index, 1)
      savePasswords()
    }

    const savePasswords = () => {
      localStorage.setItem('passwords', JSON.stringify(passwords.value))
    }

    watchEffect(() => {
      savePasswords()
    })

    return { passwords, addPasswordToList, deletePasswordFromList }
  }
}
</script>

<style>
body,
.container-fluid {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
</style>
