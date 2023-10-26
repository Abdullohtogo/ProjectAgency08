<template>
  <div class="relative flex items-center justify-between bg-transparent">
    <div class="flex items-center pl-3 py-5">
      <img :src="images[type]" alt="icon" />
      <div class="ml-2">
        <h2 class="text-white font-medium text-base leading-130">
          {{ title }}
        </h2>
      </div>
    </div>

    <span
        class="icon-xmark m-3 text-xl text-gray hover:text-gray-100 cursor-pointer transition-300"
    />
  </div>
</template>
<script setup lang="ts">
interface Props {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
}
defineProps<Props>()
const images = computed(() => {
  return {
    success: '/icons/toast/success.svg',
    error: '/icons/toast/error.svg',
    warning: '/icons/toast/warning.svg',
    info: '/icons/toast/info.svg',
  }
})
</script>
<style>
.toast {
  box-shadow: 0px 8px 20px rgba(18, 28, 37, 0.16);
}
</style>
