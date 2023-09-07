<template>
  <div
    class="rounded-36 border-4 border-white bg-white md:mx-11 mx-5 relative overflow-hidden lg:pt-[248px] md:pt-[122px] sm:py-12 p-6 px-4"
  >
    <div class="absolute top-0 right-0 z-0 w-[48%] md:block hidden">
      <img src="@/public/icons/main-line.svg" alt="line" />
    </div>
    <img
      src="@/public/icons/green-elipse.svg"
      class="absolute top-0 left-0"
      alt="green-elipse"
    />

    <div
      class="container relative z-10 flex flex-col justify-center h-full p-0"
    >
      <div class="flex items-start gap-10 lg:gap-20 relative z-100">
        <div class="flex flex-col">
          <div class="flex flex-col lg:pb-[222px] md:pb-24 md:pb-15 pb-10">
            <div class="mb-10">
              <i18n-t
                keypath="prlatform_for"
                tag="h2"
                style="line-height: 1.3"
                class="md:text-3xl sm:text-2xl text-xl lg:text-[42px] lg:leading-10 relative font-bold  text-green-500 lg:max-w-[1090px]"
              >
                <template #store>
                  <span class="underlined relative">
                    {{ $t('hissa') }}
                  </span>
                </template>
              </i18n-t>
              <p class="text-gray-200 pt-2 text-base leading-128">
                {{ $t('contribute_safely_and_securely') }}
              </p>
            </div>
            <div class="flex gap-3">
              <a target="_blank" :href="appstore">
                <img
                  src="@/public/icons/Appstore.svg"
                  alt=""
                  class="cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
                />
              </a>
              <a target="_blank" :href="playstore">
                <img
                  src="@/public/icons/Playmarket.svg"
                  alt=""
                  class="cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
          <div
            class="flex md:gap-8 sm:gap-x-4 sm:gap-y-3 sm:justify-normal justify-between flex-wrap"
          >
            <div
              class="flex sm:gap-2 gap-0.5 items-center"
              v-for="item in items"
              :key="item.id"
            >
              <img :src="item.url" alt="icon" />
              <p class="font-medium text-black-100 sm:text-base text-sm">
                {{ $t(item.text) }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-[60%] relative hidden lg:block">
          <img
            class="absolute -top-24 left-0 z-10"
            src="@/public/icons/main-heart.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <img
      src="@/public/icons/yellow-elipse.svg"
      class="absolute bottom-0 right-0"
      alt="yellow-elipse"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const appstore = ref(import.meta.env.VITE_APP_APP_STORE)
const playstore = ref(import.meta.env.VITE_APP_PLAY_STORE)
const items = [
  {
    id: 1,
    text: 'realibility',
    url: '/icons/shield-tick.svg',
  },
  {
    id: 2,
    text: 'transparency',
    url: '/icons/search-status.svg',
  },
  {
    id: 3,
    text: 'simplicity',
    url: '/icons/heart.svg',
  },
]
</script>

<style>
.underlined {
  z-index: 1;
}

.underlined::before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 6px;
  height: 0;
  width: 103%;
  border-bottom: 8px solid #16cc53;
  transition: width 0.3s ease;
}

@media only screen and (max-width: 1024px) {
  .underlined::before {
    bottom: 3px;
  }
}

@media only screen and (max-width: 768px) {
  .underlined::before {
    bottom: 1.5px;
  }
}

@media only screen and (max-width: 640px) {
  .underlined::before {
    bottom: -1px;
  }
}
</style>
