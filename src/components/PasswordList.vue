<template>
  <div>
    <ul class="list-group" v-if="passwords.length > 0">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(password, index) in passwords"
        :key="index"
      >
        <div class="d-flex flex-column">
          <span><strong>Логин:</strong> {{ password.username }}</span>
          <span><strong>Пароль:</strong> {{ password.password }}</span>
        </div>
        <button class="btn btn-danger btn-sm" @click="deletePassword(index)">Удалить</button>
      </li>
    </ul>
    <p v-else>Пусто</p>
  </div>
</template>

<script>
export default {
  name: 'PasswordList',
  props: {
    passwords: Array
  },
  methods: {
    deletePassword(index) {
      this.$emit('passwordDeleted', index)
    }
  }
}
</script>
