<template>
  <header class="container mt-8 flex justify-between items-center mb-10">
    <div>
      <router-link to="/">
        <img src="@/public/logo.svg" alt="logo"/>
      </router-link>
    </div>
    <nav>
      <ul class="flex justify-between gap-4 lg:gap-8">
        <li v-for="item in menu" :key="item.id">
          <nuxt-link :to="item?.url"
                       class="hover:text-green-300 text-black-100 transition-all duration-300 ease-in-out">
            {{ item.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="flex gap-1 cursor-pointer">
      <img src="../../public/icons/language-outline.svg" alt="">
      <p>O'zbekcha</p>
      <img src="../../public/icons/arrow-down.svg" alt="">
    </div>
  </header>
</template>

<script setup lang="ts">
const menu = [
  {
    id: 1,
    text: "Biz haqimizda",
    url: "/profile"
  },
  {
    id: 2,
    text: "Afzalliklar",
    url: "/advantages"

  },
  {
    id: 3,
    text: "Ilova",
    url: "/app"
  },
  {
    id: 4,
    text: "Fondlar uchun",
    url: "/forfonds"
  },

  {
    id: 5,
    text: "Bog'lanish",
    url: "/contact"
  }
]
</script>