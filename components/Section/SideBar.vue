<template>
  <div class="md:hidden">
    <button @click="redirectToApp(id)" class="w-full">
      <CommonButton
        label="open_on_app"
        buttonStyle="flex items-center"
        variant="primary"
        customButton="!bg-[#ffffffe0] !border-white"
        class="w-full"
      >
        <template #before>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.05317 2.83337H18.9465C20.5192 2.83337 21.4427 3.12319 21.9919 3.6782C22.5427 4.23471 22.8332 5.17468 22.8332 6.77837V21.2217C22.8332 22.8254 22.5427 23.7651 21.9909 24.3215C21.4402 24.8767 20.5138 25.1667 18.9348 25.1667H9.05317C7.48047 25.1667 6.55698 24.8769 6.00773 24.3219C5.457 23.7654 5.1665 22.8254 5.1665 21.2217V6.77837C5.1665 5.17468 5.457 4.23471 6.00773 3.6782C6.55698 3.12319 7.48047 2.83337 9.05317 2.83337ZM11.4582 20.475C11.4582 21.8712 12.6037 23.0167 13.9998 23.0167C15.396 23.0167 16.5415 21.8712 16.5415 20.475C16.5415 19.0789 15.396 17.9334 13.9998 17.9334C12.6037 17.9334 11.4582 19.0789 11.4582 20.475ZM11.6665 7.79171H16.3332C17.0876 7.79171 17.7082 7.17118 17.7082 6.41671C17.7082 5.66223 17.0876 5.04171 16.3332 5.04171H11.6665C10.912 5.04171 10.2915 5.66223 10.2915 6.41671C10.2915 7.17118 10.912 7.79171 11.6665 7.79171Z"
              fill="#27A44A"
              stroke="#27A44A"
            />
          </svg>
        </template>
      </CommonButton>
    </button>
    <div
      class="relative overflow-hidden sm:mt-6 mt-3 bg-gradient-to-b from-app-banner-1 to-app-banner-2 rounded-28 flex flex-col justify-center items-center p-6 pt-8"
    >
      <div>
        <img src="/icons/hissa-main.svg" alt="" />
      </div>
      <h3 class="text-white text-center text-2xl font-semibold mt-5">
        {{ $t('download_app') }}
      </h3>
      <p class="text-green-200 mt-3 text-center">
        {{ $t('checkon_foundation') }}
      </p>
      <div class="absolute -right-5">
        <img src="/icons/heart-transparent.svg" alt="" />
      </div>
      <div class="z-10">
        <img src="/icons/QR-light.svg" alt="" class="mt-8 shadow-qrlight" />
      </div>
      <div class="mt-4 flex gap-3 w-full">
        <a
          :href="appstore"
          class="basis-1/2 hover:opacity-80 transition-all duration-300"
        >
          <img src="/icons/Appstore.svg" alt="" class="w-full" />
        </a>
        <a
          :href="playstore"
          class="basis-1/2 hover:opacity-80 transition-all duration-300"
        >
          <img src="/icons/Playmarket.svg" alt="" class="w-full" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {CONFIG} from "~/config";

interface Props {
  id: string
}
const appstore = ref(import.meta.env.VITE_APP_APP_STORE)
const playstore = ref(import.meta.env.VITE_APP_PLAY_STORE)

defineProps<Props>()
const redirectToApp = (id: string) => {
  window.location.href = `${CONFIG.APP_URL}/project/${id}`
  setTimeout(() =>{
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.open(appstore.value, '_blank')
    } else {
      window.open(playstore.value, '_blank')
    }
  }, 20)
}
</script>
