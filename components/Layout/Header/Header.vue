<template>
  <header :class="{'bg-white shadow-header': route.params !== 'about'}">
    <div class="container md:py-8 sm:py-6 py-4 flex justify-between items-center sticky z-50">
      <button class="md:hidden block hover:cursor-pointer w-7 h-7" @click="showMenu = !showMenu">
        <img src="/icons/burger.svg" alt="" v-if="!showMenu">
        <img src="/icons/close.svg" alt="" v-else>
      </button>
      <div>
        <router-link to="/">
          <img src="../../../public/logo.svg" alt="logo"/>
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
      <UILanguageSwitcher v-bind="{ variant: 'default' }"/>
    </div>
    <LayoutHeaderFullMenu
        :open-menu="showMenu"
        :menu="menu"
        @close="showMenu = false"
    />
  </header>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useRoute} from "vue-router";

const showMenu = ref(false)
const route = useRoute()

console.log(route.params)

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