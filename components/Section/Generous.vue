<template>
  <div>
    <p class="text-black-100 font-semibold text-2xl">
      Saxovatchilar
    </p>
    <div class="mt-3 flex gap-6 flex-wrap">
      <CardGenerous :item="item" v-for="item in data" :key="item.id"/>
    </div>
    <ButtonVButton variant="primary" label="Yana yuklash" class="mt-3"/>
  </div>
</template>
<script setup lang="ts">
const data = [
  {
    id: 1,
    avatar: '/images/profile_photo.png',
    fullname: 'Shohruh Baxtiyarov',
    price: 125000000,
    date: '2022.12.24'
  },
  {
    id: 2,
    avatar: '/images/profile_photo.png',
    fullname: 'Shohruh Baxtiyarov',
    price: 125000000,
    date: '2022.12.24'
  },
  {
    id: 3,
    avatar: '/images/profile_photo.png',
    fullname: 'Shohruh Baxtiyarov',
    price: 125000000,
    date: '2022.12.24'
  },
  {
    id: 4,
    avatar: '/images/profile_photo.png',
    fullname: 'Shohruh Baxtiyarov',
    price: 125000000,
    date: '2022.12.24'
  },
  {
    id: 5,
    avatar: '/images/profile_photo.png',
    fullname: 'Shohruh Baxtiyarov',
    price: 125000000,
    date: '2022.12.24'
  },
  {
    id: 6,
    avatar: '/images/profile_photo.png',
    fullname: 'Shohruh Baxtiyarov',
    price: 125000000,
    date: '2022.12.24'
  },
  {
    id: 7,
    avatar: '/images/profile_photo.png',
    fullname: 'Shohruh Baxtiyarov',
    price: 125000000,
    date: '2022.12.24'
  },
  {
    id: 8,
    avatar: '/images/profile_photo.png',
    fullname: 'Shohruh Baxtiyarov',
    price: 125000000,
    date: '2022.12.24'
  },
]
</script>