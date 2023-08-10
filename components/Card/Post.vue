<template>
  <div class="sm:p-4 p-2 rounded-2xl border border-gray-600">
    <div class="flex gap-2">
      <img :src="item.logo" alt="logo" class="border rounded-full border-blue-light">
      <p class="text-black-100 font-semibold leading-130">{{ item.name }}
        <span class="text-gray-400 font-normal text-sm mt-2 block"> {{ item.sphere }} </span>
      </p>
    </div>
    <h2 class="text-black-100 font-semibold sm:text-xl text-lg leading-130 sm:mt-3.5 mt-2">{{ item.title }}</h2>
    <p class="text-black-100 leading-130 sm:mt-2 mt-1">{{ item.text }}</p>
    <img :src="item.img" alt="" class="sm:mt-3 mt-2 rounded-2xl w-full" v-if="item.img">
    <div class="sm:mt-3 mt-2 flex gap-1 items-center">
      <img src="/icons/calendar.svg" alt="">
      <p class="text-sm text-gray-400">{{ item.date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: {
    name?: string
    sphere?: string
    logo?: string
    title?: string
    text?: string
    img?: string
    date?: string
  }
}

defineProps<Props>()
</script>