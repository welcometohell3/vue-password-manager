<template>
  <div class="home">
    <h1>Добро пожаловать в Password Manager!</h1>
    <p>Это приложение предназначено для управления вашими паролями с удобством и безопасностью.</p>
    <h4>В Password Manager вы можете:</h4>
    <ul>
      <li>Добавлять новые пароли для хранения.</li>
      <li>Генерировать надежные пароли с помощью инструмента генерации паролей.</li>
      <li>Просматривать список ваших сохраненных паролей.</li>
      <li>Удалять ненужные или устаревшие пароли из списка.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PasswordManager'
}
</script>

<style scoped>
.home {
  margin: 20px;
}
</style>
