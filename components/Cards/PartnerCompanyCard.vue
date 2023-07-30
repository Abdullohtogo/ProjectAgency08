<template>
  <a :href="item.url" class="rounded-40 py-2.5 pl-2.5 pr-3 inline-flex items-center gap-2 bg-white w-fit">
    <img :src="item.src" alt="">
    <p class="font-medium text-black-100">{{ item.text }}</p>
  </a>
</template>

<script setup lang="ts">
interface Props {
  item: object
}

defineProps<Props>()
</script>