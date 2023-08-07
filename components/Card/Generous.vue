<template>
  <div class="p-2 bg-white rounded-xl">
    <div class="flex gap-2 items-center">
      <img :src="item?.avatar" alt="" class="w-8 h-8 border border-gray-600 rounded-full"/>
      <p class="text-xs leading-130 text-black-100 font-semibold">
        {{ item.fullname }}
      </p>
    </div>
    <p class="mt-2 mb-1 text-green-400 text-xs font-semibold">
      {{ item.price }} UZS
    </p>
    <p class="text-gray-400 text-2xs">
      {{ dayjs(item?.date).format('DD MMMM, YYYY') }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
interface Props {
  item: {
    avatar: string,
    fullname: string,
    price: number,
    date: string
  }
}

defineProps<Props>()
</script>