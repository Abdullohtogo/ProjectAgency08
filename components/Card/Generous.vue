<template>
  <div class="p-2 bg-white rounded-xl">
    <div class="flex gap-2 items-center">
      <img
        :src="item?.user?.avatar?.thumbnail?.medium"
        alt=""
        class="w-8 h-8 border border-gray-600 rounded-full"
      />
      <p class="text-xs leading-130 text-black-100 font-semibold">
          {{ item?.user?.first_name }} {{ item?.user?.last_name }}
      </p>
    </div>
    <p class="mt-2 mb-1 text-green-400 text-xs font-semibold">
      {{ formatMoneyWithSpace(item.money_amount) }} UZS
    </p>
    <p class="text-gray-400 text-2xs">
      {{ dayjs(item?.created_at).format('DD MMMM, YYYY') }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
interface Props {
  item: {
    id: number
    user: string
    money_amount: number
    created_at: string
  }
}
function formatMoneyWithSpace(number: string | number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

defineProps<Props>()
</script>
