<template>
  <div class="sm:p-4 p-2 rounded-2xl border border-gray-600">
    <div class="flex gap-2">
      <img
        :src="item?.image?.thumbnail?.small"
        alt="logo"
        class="border w-11 h-11 rounded-full border-blue-light"
      />
      <p class="text-black-100 font-semibold leading-130">
        {{ item?.name }}
        <span class="text-gray-400 font-normal text-sm mt-2 block">
          {{ item?.sphere }}
        </span>
      </p>
    </div>
    <h2
      class="text-black-100 font-semibold sm:text-xl text-lg leading-130 sm:mt-3.5 mt-2"
    >
      {{ item?.title }}
    </h2>
    <div
      class="text-black-100 leading-130 sm:mt-2 mt-1"
      v-html="item?.content"
    />
    <img
      :src="item?.thumbnail"
      alt=""
      class="sm:mt-3 mt-2 rounded-2xl w-full"
      v-if="item?.thumbnail"
    />
    <div class="sm:mt-3 mt-2 flex gap-1 items-center">
      <img src="/icons/calendar.svg" alt="" />
      <p class="text-sm text-gray-400">{{ item?.published_at }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: Array
}

defineProps<Props>()
</script>
