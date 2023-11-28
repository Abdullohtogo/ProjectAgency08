<template>
  <section class="bg-white w-full fixed h-[80px] z-50">
    <div class="mx-auto container">
      <div class="flex justify-between w-full mt-4 z-50">
        <BaseExtraLogo />
        <div class="md:gap-6 md:flex mt-3 hidden">
          <NuxtLink to="#home" class="font-semibold hover:text-pink transition-all text-dark"
            >Home</NuxtLink
          >
          <NuxtLink to="#addvertise" class="font-semibold hover:text-pink transition-all text-dark"
            >Advertise
          </NuxtLink>
          <NuxtLink to="#pricing" class="font-semibold hover:text-pink transition-all text-dark"
            >Support
          </NuxtLink>
          <NuxtLink to="#contact" class="font-semibold  hover:text-pink transition-all text-dark"
            >Contact
          </NuxtLink>
        </div>
        <div>
          <BaseButtonsButton text="Get Started" class="md:block hidden" />
          <button @click="toggleModal" class="z-30 block md:hidden">
            <img src="/icons/bars.svg" alt="" class="w-[40px] mt-1" />
          </button>
        </div>
      </div>
    </div>
  </section>
  <div class="bg-white md:hidden block">
        <transition name="slide">
          <div v-if="isModalOpened" class="w-full h-[100vh] top-0 left-0 items-center justify-center fixed z-40">
            <div class="w-full bg-white flex flex-col p-[20px] absolute top-[70px]">
              <NuxtLink to="#home" class="text-center text-[18px] p-[30px] hover:bg-gray-100 transition-all">Home</NuxtLink>
              <NuxtLink to="#addvertise" class="text-center text-[18px] p-[30px] hover:bg-gray-100 transition-all">Advertise</NuxtLink>
              <NuxtLink to="#pricing" class="text-center text-[18px] p-[30px] hover:bg-gray-100 transition-all">Support</NuxtLink>
              <NuxtLink to="#contact" class="text-center text-[18px] p-[30px] hover:bg-gray-100 transition-all">Contact</NuxtLink>
              <BaseButtonsButton text="Get Started" class="mt-2 mx-auto w-[140px] h-[60px] text-[18px]" />
            </div>
          </div>
        </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpened = ref(false);

const toggleModal = () => {
  isModalOpened.value = !isModalOpened.value;
};

</script>