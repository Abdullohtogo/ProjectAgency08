<template>
  <div class="relative max-md:min-h-screen">
    <LayoutHeader />
    <UI404 />
  </div>
</template>

<script setup lang="ts">
import UI404 from '@/components/UI/404.vue'
defineProps({
  error: Object,
})
</script>
