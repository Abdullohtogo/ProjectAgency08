<template>
  <div class="md:mx-11 mx-5 grid lg:grid-cols-3 md:grid-cols-2  flex-wrap gap-7">
    <CardMain v-for="item in cards" :item="item" :key="item.id"/>
  </div>
</template>

<script setup lang="ts">

const cards = [
  {
    id: 1,
    title: "Ishonchlilik",
    text: "Foydalanuvchilarning maxfiylik, xavfsizlik, shaffoflik va ishonchlilik orqali qurilgan onlayn platforma.",
    src: "/icons/circle-lock.svg",
    link: '/',
  },
  {
    id: 2,
    title: "Shaffoflik",
    text: "Foydalanuvchilarning maxfiylik, xavfsizlik, shaffoflik va ishonchlilik orqali qurilgan onlayn platforma.",
    link: '/',
    src: "/icons/circle-search.svg",
  },
  {
    id: 3,
    title: "Oddiylik",
    text: "Foydalanuvchilarning maxfiylik, xavfsizlik, shaffoflik va ishonchlilik orqali qurilgan onlayn platforma.",
    src: "/icons/circle-heart.svg",
    link: '/',
  },
]
</script>