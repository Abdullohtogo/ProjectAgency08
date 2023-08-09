<template>
  <div class="bg-gradient-to-r from-app-banner-1 to-app-banner-2 md:mx-11 mx-5 rounded-28 py-9 mt-[130px] mb-[170px] relative">
    <div class="container flex lg:flex-row flex-col relative">
      <div class="flex flex-col  items-start">
        <img src="/icons/hissa-main.svg" alt="hissa">
        <h2 class="mt-6 md:text-2xl text-xl font-semibold text-white leading-120">Barcha fondlar qo‘lingiz ostida</h2>
        <p class="mt-2 text-base leading-130 text-green-200">
          Fondlar va xayriya loyihalarni smartfoningiz orqalik kuzatib boring
        </p>
        <div class="flex gap-4 mt-7">
          <img src="/icons/QR.svg" alt="qr">
          <div class="flex flex-col justify-between">
            <router-link to="/" class="cursor-pointer hover:opacity-80 transition-all duration-300">
              <img src="/icons/Appstore1.svg" alt="" />
            </router-link>
            <router-link to="/" class="cursor-pointer hover:opacity-80 transition-all duration-300">
              <img src="/icons/Playmarket1.svg" alt="" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="absolute lg:block hidden -bottom-[210px] xl:right-0 -right-[100px]">
        <img src="/images/phones.png" alt="">
      </div>
      <div class="absolute left-[23%]">
        <img src="/icons/heart-transparent.svg" alt="">
      </div>
    </div>
      <div class="absolute bottom-0 lg:left-1/4 md:left-[35%] sm:left-[40%] sm:block hidden">
        <img src="/images/arm.png" alt="">
      </div>
  </div>
</template>
<script setup lang="ts">
</script>