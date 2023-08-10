<template>
  <div class="sm:p-5 p-3">
    <CardPost
      v-for="(card, index) in posts"
      :item="card"
      :key="index"
      class="sm:mb-4 mb-2"
    />
    <CommonButton label="Yana yuklash" variant="primary" class="block mx-auto">
      <img src="/icons/down.svg" alt="" />
    </CommonButton>
  </div>
</template>

<script setup lang="ts">
interface Props {
  posts: {
    name: string
    sphere: string
    logo: number
    text: string
    date: string
    title: string
    img: string
  }
}

defineProps<Props>()
</script>
