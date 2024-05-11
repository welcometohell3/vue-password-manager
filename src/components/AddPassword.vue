<template>
  <div class="container">
    <form @submit.prevent="addPassword" class="card mt-5 p-4">
      <div class="form-group row">
        <label for="username" class="col-sm-2 col-form-label">Логин:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="username" required placeholder="логин" />
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-sm-2 col-form-label">Пароль:</label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            v-model="password"
            required
            placeholder="пароль"
          />
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-secondary btn-lg mt-3">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AddPassword',
  setup(props, { emit }) {
    const username = ref('')
    const password = ref('')

    const addPassword = () => {
      const newPassword = {
        username: username.value,
        password: password.value
      }
      emit('passwordAdded', newPassword)
      username.value = ''
      password.value = ''
    }

    return { username, password, addPassword }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 600px;
}

.btn-secondary {
  width: 100%;
}

.form-group {
  margin-bottom: 1.5rem;
}
</style>
