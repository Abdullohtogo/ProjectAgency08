<template>
  <div
    class="bg-gradient-to-r from-app-banner-1 to-app-banner-2 md:mx-11 mx-5 rounded-28 py-9 lg:mt-[147px] mb-6 relative"
  >
    <div class="container pl- flex lg:flex-row flex-col relative">
      <div class="flex flex-col items-start">
        <img src="/icons/hissa-main.svg" alt="hissa" />
        <h2
          class="mt-6 md:text-2xl text-xl font-semibold text-white leading-120"
        >
          {{ $t('all_founds_on_ur_hands') }}
        </h2>
        <p class="mt-2 text-base leading-130 text-green-200">
          {{ $t('check_founds_on_phone') }}
        </p>
        <div class="flex gap-4 mt-7">
          <!--          <img src="/icons/QR.svg" alt="qr" /> -->
          <QRCode dark />
          <div class="flex flex-col justify-between">
            <a
              target="_blank"
              :href="appstore"
              class="cursor-pointer hover:opacity-80 transition-all duration-300"
            >
              <img src="/icons/Appstore1.svg" alt="" />
            </a>
            <a
              target="_blank"
              :href="playstore"
              class="cursor-pointer hover:opacity-80 transition-all duration-300"
            >
              <img src="/icons/Playmarket1.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="absolute lg:block hidden -bottom-[244px] 2xl:-right-[100px] -right-[214px]"
      >
        <img
          src="/images/phones.png"
          class="max-w-[900px] max-h-[778px]"
          alt=""
        />
      </div>
      <div class="absolute left-[23%]">
        <img src="/icons/heart-transparent.svg" alt="" />
      </div>
    </div>
    <div
      class="absolute bottom-0 lg:left-[32%] md:left-[35%] sm:left-[40%] sm:block hidden"
    >
      <img src="/images/arm.png" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import QRCode from '~/components/Common/QRCode.vue'

const appstore = ref(import.meta.env.VITE_APP_APP_STORE)
const playstore = ref(import.meta.env.VITE_APP_PLAY_STORE)
</script>
