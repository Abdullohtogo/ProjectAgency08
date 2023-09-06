<template>
  <Transition mode="out-in" name="fade">
    <div :key="loading">
      <div v-if="loading" class="flex items-center justify-center h-screen">
        <span class="spinner" />
      </div>
      <NuxtLayout v-if="!loading">
        <div>
          <NuxtPage />
        </div>
      </NuxtLayout>
    </div>
  </Transition>
  <span class="absolute -top-48 -left-60">Verification: 5a0618bd000f1245</span>
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
}, 0)
useSeoMeta({
  title: 'Hissa',
  ogTitle: 'Hissa',
  twitterTitle: 'Hissa',
})
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
