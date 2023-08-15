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
    src: "/images/circle-lock.png",
    link: '/',
  },
  {
    id: 2,
    title: "Shaffoflik",
    text: "Foydalanuvchilarning maxfiylik, xavfsizlik, shaffoflik va ishonchlilik orqali qurilgan onlayn platforma.",
    link: '/',
    src: "/images/circle-search.png",
  },
  {
    id: 3,
    title: "Oddiylik",
    text: "Foydalanuvchilarning maxfiylik, xavfsizlik, shaffoflik va ishonchlilik orqali qurilgan onlayn platforma.",
    src: "/images/circle-heart.png",
    link: '/',
  },
]
</script>