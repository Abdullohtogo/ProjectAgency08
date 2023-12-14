<template>
  <div class="container mx-auto">
    <section class="mt-[100px] mb-[100px] grid grid-cols-3">
      <div class="w-[300px]" v-for="(cardItem,index) in cardItems" :key="index">
        <img :src="cardItem.image" alt="" class="mx-auto"/>
        <h1 class="text-center font-semibold text-[19px] mt-5">
          {{ cardItem.title }}
        </h1>
        <p class="w-[250px] mx-auto text-center mt-[15px]">
          {{ cardItem.desc }}
        </p>
      </div>
    </section>
  </div>
</template>
<script setup>
const cardItems = [
  {
    image: '/icons/message.svg',
    title: 'Join the Community',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
  },
  {
    image: '/icons/community.svg',
    title: 'Chat Communication',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
  },
  {
    image: '/icons/github.svg',
    title: 'Github Access',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
  },
]
</script>