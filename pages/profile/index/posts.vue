<template>
  <div class="p-5">
    <CardPost v-for="(card, index) in cards" :item="card" :key="index" class="mb-4"/>
    <ButtonVButton label="Yana yuklash" variant="primary" class="block mx-auto">
      <img src="/icons/down.svg" alt="">
    </ButtonVButton>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    name: "Mehrli qo‘llar",
    sphere: 'Ta‘lim',
    logo: '/icons/Logo.svg',
    title: 'Barchangizdan minnatdormiz!',
    text: 'Azizlar, sizdek saxiy insonlar saxovati yordamida biz operatsiya uchun kerakli miqdordagi mablag‘ni yig‘ishga muvaffaq bo‘ldik.',
    img: '/images/Image.png',
    date: '22.11.2022, 22:22'
  },
  {
    name: "Mehrli qo‘llar",
    sphere: 'Ta‘lim',
    logo: '/icons/Logo.svg',
    title: 'Barchangizdan minnatdormiz!',
    text: 'Azizlar, sizdek saxiy insonlar saxovati yordamida biz operatsiya uchun kerakli miqdordagi mablag‘ni yig‘ishga muvaffaq bo‘ldik.',
    date: '22.11.2022, 22:22'
  },
  {
    name: "Mehrli qo‘llar",
    sphere: 'Ta‘lim',
    logo: '/icons/Logo.svg',
    title: 'Barchangizdan minnatdormiz!',
    text: 'Azizlar, sizdek saxiy insonlar saxovati yordamida biz operatsiya uchun kerakli miqdordagi mablag‘ni yig‘ishga muvaffaq bo‘ldik.',
    img: '/images/Image.png',
    date: '22.11.2022, 22:22'
  }
]
</script>