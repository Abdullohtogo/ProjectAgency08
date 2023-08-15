<template>
  <div class="md:mx-11 mx-5 grid lg:grid-cols-3 md:grid-cols-2 flex-wrap gap-7">
    <CardMain v-for="item in cards" :item="item" :key="item.id" />
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    id: 1,
    title: 'realibility',
    text: 'online_platfor_build_for',
    src: '/images/circle-lock.png',
    link: '/',
  },
  {
    id: 2,
    title: 'transparency',
    text: 'online_platfor_build_for',
    link: '/',
    src: '/images/circle-search.png',
  },
  {
    id: 3,
    title: 'simplicity',
    text: 'online_platfor_build_for',
    src: '/images/circle-heart.png',
    link: '/',
  },
]
</script>
