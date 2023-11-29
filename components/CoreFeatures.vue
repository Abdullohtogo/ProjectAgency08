<template>
  <section class="mt-[170px] lg:flex-row flex-col flex xl:gap-8 lg:gap-1 container mx-auto">
    <img src="" alt="" />
    <img
      src="/images/AstonAagar.jpg"
      alt=""
      class="rounded-md lg:hidden lg:md:block mx-auto h-full w-[550px]"
    />
    <div class="mt-[65px] w-full">
      <p
        class="uppercase text-pink text-[14px] font-semibold mb-[5px] text-center lg:text-start"
      >
        Core features
      </p>
      <h1
        class="font-semibold xl:text-[48px] md:text-[36px] text-[28px] lg:mx-0 lg:w-[420px] mb-8 text-center lg:text-start mx-auto"
      >
        Smart Jackpots that you may love this anytime & anywhere
      </h1>
      <p
        class="lg:text-[18px] leading-8 lg:leading-10 lg:text-start text-center lg:mx-0 md:mx-auto lg:w-[400px] xl:w-full md:w-[600px]"
      >
        Get your tests delivered at let home collect sample from the victory of
        the managments that supplies best design system guidelines ever.
      </p>
      <div class="w-[100px] md:w-[150px] lg:mx-0 mx-auto">
        <MainButton text="Explore" class="mt-8" />
      </div>
    </div>
    <img
      src="/images/AstonAagar.jpg"
      alt=""
      class="rounded-md hidden lg:inline-block h-full w-[500px] xl:w-full xl:mt-0 lg:mt-10"
    />
  </section>
</template>
<script setup lang="ts">
import MainButton from '~/components/Base/Buttons/MainButton.vue'
</script>