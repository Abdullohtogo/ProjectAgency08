<template>
  <div class="relative max-md:min-h-screen">
    <LayoutHeader />
    <UI404 />
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
})
</script>
