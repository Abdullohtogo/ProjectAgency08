<template>
  <div class="mx-auto container">
    <div class="lg:w-[590px]  mx-auto flex flex-col gap-2">
      <p class="uppercase text-pink text-[14px] text-center font-semibold mb-[5px]">Testimonial</p>
      <h1 class="font-bold lg:text-[36px] text-[20px] sm:text-[28px]  text-center mb-[72px] lg:w-[589px]">Meet Client Satisfaction</h1>
    </div>
    <div class="custom-slider relative">
      <Swiper
        v-bind="{ modules }"
        :breakpoints="swiperOptions.breakpoints"
        ref="swiperEl"
        @swiper="onInit"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="sm:w-[422px] h-[402px] xs:w-[350px] hover:shadow-xl transition-all border-[1px] border-gray-200">
            <div class="w-[368px] mt-[35px] lg:mx-auto xs:mx-4">
              <img src="/shapes/stars.svg" alt="">
              <h4 class="font-bold mt-6 mb-4">{{ slide.title }}</h4>
              <p class="line w-[320px] text-[18px]">{{ slide.description }}</p>
              <div class="mt-[35px] flex gap-2">
                <img :src="slide.image" alt="">
                <div class="">
                  <h4 class="text-[16px] font-bold">
                    Denny Hilguston
                  </h4>
                  <p class="text-pink text-[15px]">
                    @denny.hil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="absolute flex items-center gap-5 translate-y-10 -bottom-10 left-0 xl:mx-[500px] lg:mx-[400px] md:mx-72 sm:mx-48 xs:mx-10">
        <button class="swiper-prev w-10" @click="prevSlide"><img src="" alt=""><img src="/shapes/sliderArrowLeft.svg" alt=""></button>
        <button class="swiper-next w-10" @click="nextSlide"><img src="/shapes/sliderArrow.svg" alt=""></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const modules = [Navigation]

const slides = [
  {
    image: '/members/Denny.svg',
    title: 'Modern look & trending design',
    description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  },
  {
    image: '/members/denny2.svg',
    title: 'Modern look & trending design',
    description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  },
  {
    image: '/members/denny3.svg',
    title: 'Modern look & trending design',
    description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  },
  {
    image: '/members/denny4.svg',
    title: 'Modern look & trending design',
    description: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  },
]

const swiperOptions = {
  breakpoints :{
    '300': {
      slidesPerView: 0.8,
      spaceBetween: 30,
    },
    '480': {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    '710': {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
  '940': {
    slidesPerView: 2.5,
      spaceBetween: 10,
  },
},
  loop: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
  modules: [Navigation]
}


const swiperEl = ref()

const onInit = (e) => {
  swiperEl.value = e
}

const prevSlide = () => {
  swiperEl.value?.slidePrev()
}

const nextSlide = () => {
  swiperEl.value?.slideNext()
}

// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   data() {
//     return {
//       swiperOptions: {
//         // Swiper options here
//         // loop: true,
//         // navigation: {
//         //   nextEl: '.swiper-button-next',
//         //   prevEl: '.swiper-button-prev',
//         // },
//       },
//       slides: [
//         {
//           image: 'slide1.jpg',
//           title: 'Slide 1',
//           description: 'Description for slide 1',
//         },
//         {
//           image: 'slide2.jpg',
//           title: 'Slide 2',
//           description: 'Description for slide 2',
//         },
//         // Add more slides as needed
//       ],
//     };
//   },
//   methods: {
//     prevSlide() {
//       this.$refs.mySwiper.swiper.prev();
//     },
//     nextSlide() {
//       this.$refs.mySwiper.swiper.next();
//     },
//   },
// };
</script>
