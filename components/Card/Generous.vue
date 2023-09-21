<template>
  <div class="p-2 bg-white rounded-xl">
    <div class="flex gap-2 items-center">
      <img
        v-if="isImgError && item?.user?.avatar?.original"
        :src="item?.user?.avatar?.thumbnail?.medium"
        alt=""
        class="w-8 h-8 border border-gray-600 rounded-full"
        @error="isImgError = false"
      />
      <span class="rounded-full w-[34px] h-[34px]" v-else>
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
      <p class="text-xs leading-130 text-black-100 font-semibold line-clamp-2">
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
import { formatMoneyWithSpace } from '@/utils/index'
interface Props {
  item: {
    id: number
    user: string
    money_amount: number
    created_at: string
  }
}

defineProps<Props>()

const isImgError = ref(true)
</script>
