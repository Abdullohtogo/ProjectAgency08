<template>
  <div class="bg-white rounded-28 border-2 border-white relative overflow-hidden">
    <div class="md:py-7 py-4 md:px-8 px-4 w-3/4">
      <p class="font-medium lg:text-base text-green-400">Bizning afzalliklar</p>
      <h3 class="lg:text-[32px] text-2xl  font-bold text-black-100 mt-1">{{item.title}}</h3>
      <p class="text-xs leading-128 text-gray-200 mt-4">{{item.text}}</p>
    </div>
    <div class="absolute right-0 bottom-0">
      <img :src="item.src" alt="icon">
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: object
}

defineProps<Props>()
</script>