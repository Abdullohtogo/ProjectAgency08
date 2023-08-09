<template>
  <div>
    <div class="bg-white rounded-28 p-5 flex flex-col gap-4">
      <CommonButton label="Hissa qo'shish" variant="secondary">
        <template #before>
          <img src="/icons/generous_heart.svg" alt="">
        </template>
      </CommonButton>
      <CommonButton label="Ulashish" variant="darker">
        <template #before>
          <img src="/icons/share.svg" alt="">
        </template>
      </CommonButton>
    </div>
    <div
        class="relative overflow-hidden mt-6 bg-gradient-to-b from-app-banner-1 to-app-banner-2 rounded-28 flex flex-col justify-center items-center p-6 pt-8">
      <div>
        <img src="/icons/hissa-main.svg" alt="">
      </div>
      <h3 class="text-white text-center text-2xl font-semibold mt-5">Mobil ilovani yuklab oling</h3>
      <p class="text-green-200 mt-3 text-center">
        Fondlar va xayriya loyihalarni smartfoningiz orqali kuzatib boring
      </p>
      <div class="absolute -right-5">
        <img src="/icons/heart-transparent.svg" alt="">
      </div>
      <div class="">
        <img src="/icons/QR-light.svg" alt="" class="mt-8 shadow-qrlight">
      </div>
      <div class="mt-4 flex gap-3 w-full">
        <router-link to="/" class="basis-1/2 hover:opacity-80 transition-all duration-300">
          <img src="/icons/Appstore.svg" alt="" class="w-full"/>
        </router-link>
        <router-link to="/" class="basis-1/2 hover:opacity-80 transition-all duration-300">
          <img src="/icons/Playmarket.svg" alt="" class="w-full"/>
        </router-link>
      </div>x
    </div>
  </div>
</template>
<script setup lang="ts">
</script>