<template>
  <div>
    <p class="text-black-100 font-semibold lg:text-2xl md:text-xl text-lg mt-5">
      Saxovatchilar
    </p>
    <div class="mt-3 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-y-4 sm:gap-x-6 gap-y-2 gap-x-4">
      <CardGenerous :item="item" v-for="item in data" :key="item.id"/>
    </div>
    <CommonButton variant="primary" label="Yana yuklash" class="mt-3 block mx-auto">
      <img src="/icons/down.svg" alt="">
    </CommonButton>
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