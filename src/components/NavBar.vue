<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <div class="mx-auto">
        <router-link to="/" class="navbar-brand">Password Manager</router-link>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        :class="{ collapsed: isCollapsed }"
        @click="toggleCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{ show: !isCollapsed }">
        <ul class="navbar-nav ml-auto flex-nowrap justify-content-start">
          <li class="nav-item">
            <router-link to="/passwords" class="nav-link">Список паролей</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add-password" class="nav-link">Добавить пароль</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/generate-password" class="nav-link">Сгенерировать пароль</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isCollapsed: true
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>
