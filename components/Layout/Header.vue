<template>
  <header class="container mt-8 flex justify-between items-center mb-10">
    <div>
      <a href="/">
        <img src="@/public/logo.svg" alt="logo">
      </a>
    </div>
    <nav>
      <ul class="flex justify-between gap-4 lg:gap-8">
        <li v-for="item in menu" :key="item.id">
          <a href="" class="hover:text-green-300 text-black-100 transition-all duration-300 ease-in-out">{{
              item.text
            }}</a>
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
import {reactive} from "vue";

const menu = reactive(
    [
      {
        id: 1,
        text: "Biz haqimizda"
      },
      {
        id: 2,
        text: "Afzalliklar"
      },
      {
        id: 3,
        text: "Ilova"
      },
      {
        id: 4,
        text: "Fondlar uchun"
      },

      {
        id: 5,
        text: "Bog'lanish"
      }
    ]
)
</script>