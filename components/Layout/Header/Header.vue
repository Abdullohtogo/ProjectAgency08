<template>
  <header :class="{ 'bg-white shadow-header': route.params !== 'about' }">
    <div
      class="container md:py-6 sm:py-5 py-4 flex justify-between items-center sticky z-50"
    >
      <button
        class="md:hidden block hover:cursor-pointer w-7 h-7"
        @click="showMenu = !showMenu"
      >
        <img src="/icons/burger.svg" alt="" v-if="!showMenu" />
        <img src="/icons/close.svg" alt="" v-else />
      </button>
      <div>
        <router-link to="/">
          <img src="../../../public/logo.svg" alt="logo" />
        </router-link>
      </div>
      <ul class="gap-4 lg:gap-8 hidden md:flex">
        <li v-for="item in menu" :key="item.id">
          <button
            @click="scrollTo(item.url)"
            class="hover:text-green-400 text-sm leading-5 text-black-100 transition-all duration-300 ease-linear"
          >
            {{ $t(item.text) }}
          </button>
        </li>
      </ul>
      <UILanguageSwitcher v-bind="{ variant: 'default' }" />
    </div>
    <LayoutHeaderFullMenu
      :open-menu="showMenu"
      :menu="menu"
      @close="showMenu = false"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const showMenu = ref(false)
const route = useRoute()
const router = useRouter()

function scrollTo(url: string) {
  console.log(document.getElementById(url))
  const section = document.getElementById(url)
  section?.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'center',
  })
}

const menu = computed(() => {
  return [
    {
      id: 1,
      text: 'about_us',
      url: `about`,
    },
    {
      id: 2,
      text: 'advantages',
      url: 'afzalliklar',
    },
    {
      id: 3,
      text: 'for_founds',
      url: 'fonds',
    },

    {
      id: 4,
      text: 'for_contact',
      url: 'contact',
    },
  ]
})
// console.log(ids.value)
</script>
