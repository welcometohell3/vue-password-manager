<template>
  <div class="container">
    <div class="card mt-5">
      <div class="card-body text-center">
        <h2 class="card-title mb-4">Генератор паролей</h2>
        <button class="btn btn-secondary btn-lg mb-3" @click="generatePassword">
          Сгенерировать пароль
        </button>
        <p v-if="generatedPassword" class="lead font-weight-bold">
          Сгенерированный пароль: {{ generatedPassword }}
        </p>
      </div>
    </div>
  </div>
  <GallerySlider :images="galleryImages" />
</template>

<script>
import { ref } from 'vue'
import GallerySlider from './GallerySlider.vue'

export default {
  name: 'GeneratePassword',
  components: {
    GallerySlider
  },
  data() {
    return {
      galleryImages: [
        'https://placehold.co/600x400/orange/white',
        'https://placehold.co/600x400/pink/blue',
        'https://placehold.co/600x400/yellow/green'
      ]
    }
  },
  setup() {
    const generatedPassword = ref('')

    const generatePassword = () => {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      let newPassword = ''
      for (let i = 0; i < 16; i++) {
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
      }
      generatedPassword.value = newPassword
    }

    return { generatedPassword, generatePassword }
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
  width: 400px;
}

.card-title {
  color: #333;
}

.btn-primary {
  width: 100%;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.card-body {
  background-color: #f8f9fa;
  border-radius: 10px;
}
</style>
