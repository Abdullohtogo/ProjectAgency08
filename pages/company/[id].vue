<template>
  <div class="flex items-center justify-center h-screen">
    <span class="spinner" />
  </div>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";

const route = useRoute()
const router = useRouter()

const loading = ref(false)

useApi().$get(`/care/api/v1/${route.params.id}/CompanyDetail/`).then((res) => {
  if (res?.slug){
    window.location.href = `https://sharh.commeta.uz/c/${res?.slug}`
  }
}).catch(() => {
  router.push('/')
}).finally(() => {
  loading.value = true
})


definePageMeta({
  layout: 'empty',
})
</script>