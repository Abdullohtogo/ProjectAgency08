<template>
  <div class="p-4 rounded-2xl border border-gray-600">
    <div class="flex gap-2">
      <img :src="item.logo" alt="logo" class="border rounded-full border-blue-light">
      <p class="text-black-100 font-semibold leading-130">{{ item.name }}
        <span class="text-gray-400 font-normal text-sm mt-2 block"> {{ item.sphere }} </span>
      </p>
    </div>
    <h2 class="text-black-100 font-semibold text-xl leading-130 mt-3.5">{{ item.title }}</h2>
    <p class="text-black-100 leading-130 mt-2">{{ item.text }}</p>
    <img :src="item.img" alt="" class="mt-3 rounded-2xl w-full" v-if="item.img">
    <div class="mt-3 flex gap-1 items-center">
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