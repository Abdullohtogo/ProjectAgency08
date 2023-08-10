<template>
  <div class="rounded-2xl bg-gray-800 p-4">
    <div class="flex gap-2 items-center">
      <img :src="item.img" class="w-[34px] h-[34px]" alt="profile">
      <div class="flex flex-col">
        <p class="text-black-200 text-sm font-semibold leading-130">{{ item.name }}
        </p>
        <div class="flex items-center text-xs font-semibold mt-1 gap-1.5 text-gray-700">
          <p>{{ item.time }}</p>
          <div class="w-[3px] h-[3px] rounded-full bg-gray-700"></div>
          <p>{{ item.price }} UZS</p>
        </div>
      </div>
    </div>
    <p class="text-sm font-medium leading-130 text-black-200 mt-[9px]">
      {{ item.text }}
    </p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  item: {
    img: string,
    name: string,
    time: string,
    price: number,
    text: string
  }
}

defineProps<Props>()
</script>