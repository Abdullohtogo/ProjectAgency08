<template>
  <div>
    <div class="slider">
      <div v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
    <button @click="prevSlide">Previous</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: 'image1.jpg', alt: 'Image 1' },
        { src: 'image2.jpg', alt: 'Image 2' },
        { src: 'image3.jpg', alt: 'Image 3' }
      ],
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
};
</script>

<style>
.slider {
  display: flex;
  overflow: hidden;
}

.slider div {
  flex: 0 0 100%;
  transition: transform 0.5s;
}

.slider div.active {
  transform: translateX(0);
}

button {
  margin-top: 10px;
}
</style>