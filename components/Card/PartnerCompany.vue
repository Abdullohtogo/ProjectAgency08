<template>
  <a
    :href="`${reviewUrl}/c/${item?.slug}`"
    target="_blank"
    class="rounded-40 transition hover:bg-green-100 py-2.5 pl-2.5 pr-3 inline-flex items-center gap-2 bg-white w-fit shadow-partnersCard backdrop-blur-sm"
  >
    <img
      class="w-9 h-9 rounded-full object-cover"
      v-lazy="{ src: item?.brand_logo?.thumbnail?.small }"
      alt=""
    />
    <p class="font-medium text-black-100">{{ item?.name }}</p>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  item: Array
}

const props = defineProps<Props>()

const reviewUrl = computed(() => {
  return import.meta.env.VITE_APP_REVIEW_URL
})
</script>
