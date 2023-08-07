<template>
  <router-link :to="item?.url" v-if="item?.url"
               class="rounded-40 py-2.5 pl-2.5 pr-3 inline-flex items-center gap-2 bg-white w-fit shadow-partnersCard backdrop-blur-sm">
    <img :src="item?.src" alt=""/>
    <p class="font-medium text-black-100">{{ item?.text }}</p>
  </router-link>
  <div v-else
       class="rounded-40 py-2.5 pl-2.5 pr-3 inline-flex items-center gap-2 bg-white w-fit shadow-partnersCard backdrop-blur-sm">
    <img :src="item?.src" alt=""/>
    <p class="font-medium text-black-100">{{ item?.text }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: {
    id?: number,
    text?: string,
    src?: string,
    url?: string
  }
}

defineProps<Props>()
</script>