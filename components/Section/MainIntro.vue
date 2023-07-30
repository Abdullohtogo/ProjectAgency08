<template>
  <div
      class="rounded-36 border-4 border-white bg-white mx-11 relative overflow-hidden h-[calc(100vh-136px)]">
    <div class="absolute top-0 right-0 z-0 w-[48%]">
      <img src="@/public/icons/main-line.svg" alt="line">
    </div>
    <div class="green-ellipse absolute top-[25%] -left-[12%]"></div>
    <div class="container flex flex-col justify-center h-full">
      <div class="flex items-center gap-10 lg:gap-20 relative z-100">
        <div>
          <div class="mb-10">
            <h2 class="text-3xl lg:text-[42px] lg:leading-10 font-bold uppercase text-green-500">Xayrli ishlarga <span class="underline">
            hissa
          </span> qo‘shish uchun
              platforma</h2>
            <p class="text-gray-200 mt-2">
              O‘z hissangizni xavfsiz va ishonchli qo‘shing.
            </p>
          </div>
          <div class="flex gap-3">
            <a href="/">
              <img src="@/public/icons/Appstore.svg" alt=""
                   class="cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out">
            </a>
            <a href="/">
              <img src="@/public/icons/Playmarket.svg" alt=""
                   class="cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out">
            </a>
          </div>
        </div>
        <div class="w-[60%]">
          <img src="@/public/icons/main-heart.svg" alt="">
        </div>
      </div>
      <div class="flex gap-8 mb-12 absolute bottom-0">
        <div class="flex gap-2 items-center" v-for="item in items" :key="item.id">
          <img :src="item.url" alt="icon">
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <div class="yellow-ellipse absolute -bottom-[25%] -right-[10%]"></div>
  </div>
</template>
<script setup lang="ts">
const items = [
  {
    id: 1,
    text: 'Ishonchlilik',
    url: '/icons/shield-tick.svg'
  },
  {
    id: 2,
    text: 'Shaffoflik',
    url: '/icons/search-status.svg'
  },
  {
    id: 3,
    text: 'Oddiylik',
    url: '/icons/heart.svg'
  },
]
</script>

<style>
.green-ellipse, .yellow-ellipse {
  width: 295px;
  height: 295px;
  flex-shrink: 0;
  border-radius: 295px;
  opacity: 0.4000000059604645;
  filter: blur(103.77342224121094px);
}

.green-ellipse {
  background: #16CC53;
}

.yellow-ellipse {
  background: #F3C63E;
}
</style>