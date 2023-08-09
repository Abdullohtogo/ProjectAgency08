<template>
  <header class="">
    <div class="container py-8 flex justify-between items-center">
      <div>
        <router-link to="/">
          <img src="@/public/logo.svg" alt="logo"/>
        </router-link>
      </div>
      <ul class="gap-4 lg:gap-8 hidden  md:flex">
        <li v-for="item in menu" :key="item.id">
          <nuxt-link :to="item?.url"
                     class="hover:text-green-400 text-sm leading-5 text-black-100 transition-all duration-300 ease-linear">
            {{ item.text }}
          </nuxt-link>
        </li>
      </ul>
      <UILanguageSwitcher v-bind="{ variant: 'default' }" />
    </div>
  </header>
</template>

<script setup lang="ts">

const menu = [
  {
    id: 1,
    text: "Biz haqimizda",
    url: "/profile/about"
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