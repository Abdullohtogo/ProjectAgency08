<template>
  <div class="mx-auto container">
    <div class="lg:w-[590px] mt-[200px] mx-auto flex flex-col gap-2">
      <p class="uppercase text-pink text-[14px] text-center font-semibold mb-[5px]">Our Blog</p>
      <h3 class="font-bold lg:text-[36px] text-[20px] sm:text-[28px]  text-center mb-[72px] lg:w-[589px]">Explore our products for your business solution</h3>
    </div>
    <div class="custom-slider relative">
      <Swiper
        v-bind="{ modules }"
        :breakpoints="swiperOptions.breakpoints"
        ref="swiperEl"
        @swiper="onInit"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="sm:w-[422px] sm:h-[402px] xs:w-[300px] h-[320px] hover:shadow-xl transition-all border-[1px] border-gray-200 flex rounded-md">
            <div class="">
              <img :src="slide.image" alt=""/>
              <div class="mx-5">
                <h4 class="font-semibold mt-6 mb-3 sm:mt-7  sm:mb-4  leading-6 sm:text-[20px] sm:w-[300px] w-[250px]">{{ slide.title }}</h4>
                <p class="text-pink">{{ slide.name }}</p>
                <div class="mt-[35px] flex gap-2">
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
    image: '/images/caliCartel.jpg',
    title: 'Product Marketing: Monopoly \n' +
      'Market',
    name: ' Cali Carter',
  },
  {
    image: '/images/jamesCarter.jpg',
    title: 'Product Marketing: Creative \n' +
      'Market',
    name: 'James Carter ',
  },
  {
    image: '/images/AstonAagar.jpg',
    title: 'Product Marketing: Startup Product Sales',
    name: ' Aston Aagar',
  },
]

const swiperOptions = {
  breakpoints:{
  '300':{
    slidesPerView: .5,
      spaceBetween: 10,
  },
  '400':{
    slidesPerView: 1,
      spaceBetween:15,
  },
  '710':{
    slidesPerView:1.6,
      spaceBetween:15,
  },
  '940':{
    slidesPerView:2,
      spaceBetween:15,
  },
  '1100':{
    slidesPerView:2.5,
      spaceBetween:10
  }
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
</script>
