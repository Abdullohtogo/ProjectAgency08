<template>
  <router-link
    :to="item?.url"
    v-if="item?.url"
    class="rounded-40 py-2.5 pl-2.5 pr-3 inline-flex items-center gap-2 bg-white w-fit shadow-partnersCard backdrop-blur-sm"
  >
    <img
      class="w-9 h-9 rounded-full object-cover"
      v-lazy="{ src: item?.brand_logo?.thumbnail?.small }"
      alt=""
    />
    <p class="font-medium text-black-100">{{ item?.name }}</p>
  </router-link>
  <div
    v-else
    class="rounded-40 py-2.5 pl-2.5 pr-3 inline-flex items-center gap-2 bg-white w-fit shadow-partnersCard backdrop-blur-sm"
  >
    <img
      v-lazy="{ src: item?.brand_logo?.thumbnail?.small }"
      class="w-9 h-9 rounded-full object-cover"
      alt=""
    />
    <p class="font-medium text-black-100">{{ item?.name }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: Array
}

const props = defineProps<Props>()
</script>
