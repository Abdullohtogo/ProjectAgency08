<template>
  <div class="sm:p-5 p-3 !pt-6">
    <div class="flex flex-col items-center">
      <div class="flex flex-col gap-4">
        <CardComment v-for="(card, index) in comments" :item="card" :key="index" />
      </div>
      <CommonButton variant="primary" label="Yana yuklash" class="block mt-5">
        <img src="/icons/down.svg" alt="" />
      </CommonButton>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  comments: {
    price: number
    img: string
    name: string
    time: string
    text: string
  }
}

defineProps<Props>()
</script>
