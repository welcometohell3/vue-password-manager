<template>
  <div class="gallery-slider">
    <div class="image-container">
      <img :src="currentImage" alt="Gallery Image" />
    </div>
    <div class="controls">
      <button @click="prevImage" class="control-btn prev-btn">&lt;</button>
      <button @click="nextImage" class="control-btn next-btn">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GallerySlider',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    }
  }
}
</script>

<style scoped>
.gallery-slider {
  width: 300px; /* Уменьшаем ширину галереи */
  margin: 0 auto; /* Центрируем галерею по горизонтали */
}

.image-container {
  width: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  display: block;
}

.controls {
  margin-top: 10px; /* Добавляем небольшое расстояние между изображением и кнопками */
}

.control-btn {
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  color: #333;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.control-btn:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.prev-btn {
  margin-right: 5px; /* Добавляем небольшое расстояние между кнопками */
}

.next-btn {
  margin-left: 5px; /* Добавляем небольшое расстояние между кнопками */
}
</style>
