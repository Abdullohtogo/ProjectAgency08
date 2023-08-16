<template>
  <div v-if="loading" class="flex items-center justify-center h-screen"><span class="spinner" /></div>
  <NuxtLayout v-else>
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loading = ref(true)
if ('setup' in route.query) {
  throw new Error('error in setup')
}
if ('mounted' in route.query) {
  onMounted(() => {
    throw new Error('error in mounted')
  })
}
setTimeout(() => {
  loading.value = false
}, 1000);
</script>

<style>
.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #27a44a);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner-zp9dbg 1s infinite linear;
}

@keyframes spinner-zp9dbg {
  to {
    transform: rotate(1turn);
  }
}
</style>
