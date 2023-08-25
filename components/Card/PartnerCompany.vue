<template>
  <router-link
    :to="item?.url"
    v-if="item?.url"
    class="rounded-40 py-2.5 pl-2.5 pr-3 inline-flex items-center gap-2 bg-white w-fit shadow-partnersCard backdrop-blur-sm"
  >
    <img class="object-cover" :src="innerImage ?? '/images/default.svg'" alt="" @error="innerImage = null" />
    <p class="font-medium text-black-100">{{ item?.name }}</p>
  </router-link>
  <div
    v-else
    class="rounded-40 py-2.5 pl-2.5 pr-3 inline-flex items-center gap-2 bg-white w-fit shadow-partnersCard backdrop-blur-sm"
  >
    <img :src="innerImage ?? '/images/default.svg'" class="w-9 h-9 rounded-full object-cover" alt="" @error="innerImage = null" />
    <p class="font-medium text-black-100">{{ item?.name }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: Array
}

const props = defineProps<Props>()
const innerImage = ref(props.item?.brand_logo?.thumbnail?.small)

</script>
