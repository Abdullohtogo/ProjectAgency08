<template>
  <div class="rounded-2xl bg-gray-800 p-4">
    <div class="flex gap-2 items-center">
      <span class="rounded-full w-[34px] h-[34px]" v-if="!item.user.avatar">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.3"
            y="0.3"
            width="33.4"
            height="33.4"
            rx="16.7"
            fill="white"
          />
          <path
            d="M17.0001 16.9999C18.841 16.9999 20.3334 15.5075 20.3334 13.6666C20.3334 11.8256 18.841 10.3333 17.0001 10.3333C15.1591 10.3333 13.6667 11.8256 13.6667 13.6666C13.6667 15.5075 15.1591 16.9999 17.0001 16.9999Z"
            stroke="#818582"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.7268 23.6667C22.7268 21.0867 20.1601 19 17.0001 19C13.8401 19 11.2734 21.0867 11.2734 23.6667"
            stroke="#818582"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="0.3"
            y="0.3"
            width="33.4"
            height="33.4"
            rx="16.7"
            stroke="#E6EBE7"
            stroke-width="0.6"
          />
        </svg>
      </span>
      <img v-else :src="item?.user?.avatar" class="w-[34px] h-[34px]" alt="profile" />
      <div class="flex flex-col">
        <p class="text-black-200 text-sm font-semibold leading-130">
          {{ item?.user?.first_name }} {{ item.user.last_name }}
        </p>
        <div
          class="flex items-center text-xs font-semibold mt-1 gap-1.5 text-gray-700"
        >
          <p>{{ dayjs(item?.created_at).format('HH:mm') }}</p>
          <div class="w-[3px] h-[3px] rounded-full bg-gray-700"></div>
          <p>{{ formatMoneyWithSpace(item.money_amount) }} UZS</p>
        </div>
      </div>
    </div>
    <p class="text-sm font-medium leading-130 text-black-200 mt-[9px]">
      {{ item.comment }}
    </p>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'

function formatMoneyWithSpace(number: string | number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
interface Props {
  item: Array
}

defineProps<Props>()
</script>
