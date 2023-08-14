<template>
  <div>
    <div class="bg-white rounded-28 p-5 flex flex-col gap-4">
      <CommonButton
        label="Hissa qo'shish"
        buttonStyle="flex items-center"
        variant="secondary"
        class="w-full"
      >
        <template #before>
          <span class="icon-heart text-2xl text-white" />
        </template>
      </CommonButton>
      <CommonButton
        label="Ulashish"
        buttonStyle="flex items-center"
        variant="darker"
        class="w-full"
        @click="toggleModal()"
      >
        <template #before>
          <span class="icon-share text-2xl text-green-400" />
        </template>
      </CommonButton>
    </div>
    <div
      class="relative overflow-hidden sm:mt-6 mt-3 bg-gradient-to-b from-app-banner-1 to-app-banner-2 rounded-28 flex flex-col justify-center items-center p-6 pt-8"
    >
      <div>
        <img src="/icons/hissa-main.svg" alt="" />
      </div>
      <h3 class="text-white text-center text-2xl font-semibold mt-5">
        Mobil ilovani yuklab oling
      </h3>
      <p class="text-green-200 mt-3 text-center">
        Fondlar va xayriya loyihalarni smartfoningiz orqali kuzatib boring
      </p>
      <div class="absolute -right-5">
        <img src="/icons/heart-transparent.svg" alt="" />
      </div>
      <div class="">
        <img src="/icons/QR-light.svg" alt="" class="mt-8 shadow-qrlight" />
      </div>
      <div class="mt-4 flex gap-3 w-full">
        <a
          href="/"
          class="basis-1/2 hover:opacity-80 transition-all duration-300"
        >
          <img src="/icons/Appstore.svg" alt="" class="w-full" />
        </a>
        <a
          href="/"
          class="basis-1/2 hover:opacity-80 transition-all duration-300"
        >
          <img src="/icons/Playmarket.svg" alt="" class="w-full" />
        </a>
      </div>
    </div>
  </div>
  <Transition name="fade">
    <div
      class="fixed top-0 left-0 w-full h-full z-50 bg-modal hidden opacity-0"
      v-if="showModal"
      :class="{ '!block opacity-100 overflow-hidden ': showModal }"
    >
      <UIModal
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:max-w-[434px] w-[70%] sm:w-full"
        @close="toggleModal"
        :show="showModal"
      />
    </div>
  </Transition>
</template>
<script setup lang="ts">
const showModal = ref(false)

function toggleModal() {
  if (showModal.value == true) {
    showModal.value = false
    console.log(showModal.value)
  } else {
    showModal.value = true
    console.log(showModal.value)
  }
}
</script>
