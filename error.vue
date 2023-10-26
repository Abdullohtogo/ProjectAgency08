<template>
  <div class="relative max-md:min-h-screen">
    <LayoutHeader />
    <CommonError404 />
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
})
</script>
