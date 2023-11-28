<template>
  <div>
    <vueper-slides :slides="slides" :options="options"></vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueper-slides';
import 'vueper-slides/dist/vueper-slides.css';

export default {
  components: {
    VueperSlides,
    VueperSlide
  },
  data() {
    return {
      slides: [
        { src: 'image1.jpg', alt: 'Image 1' },
        { src: 'image2.jpg', alt: 'Image 2' },
        { src: 'image3.jpg', alt: 'Image 3' }
      ],
      options: {
        touch: true,
        mousewheel: false,
        autoplay: {
          delay: 5000
        }
      }
    };
  }
};
</script>