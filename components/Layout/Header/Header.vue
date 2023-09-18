<template>
  <header
    id="header"
    :style="{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }"
    :class="{ 'bg-white shadow-header': !white }"
  >
    <div
      :class="white ? 'md:py-8 sm:py-7 py-6' : 'md:py-6 sm:py-5 py-4'"
      class="container flex justify-between items-center sticky z-50"
    >
      <button
        class="md:hidden block hover:cursor-pointer w-7 h-7"
        @click="showMenu = !showMenu"
      >
        <Transition mode="out-in" name="fade">
          <svg
            v-if="!showMenu"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="burger">
              <path
                id="Icon"
                d="M4.66666 7H23.3333M4.66666 14H16.3333M4.66666 21H10.5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <i v-else class="icon-close text-[28px] leading-7 text-dark" />
        </Transition>
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
            class="hover:text-green-400 text-sm leading-5 text-black-100 transition-all duration-300 ease-linear font-medium"
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

const props = defineProps({
  white: Boolean,
})

const yOffset = ref(0)
function handleScroll() {
  yOffset.value = window.pageYOffset
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
const opacity = computed(() => {
  return yOffset.value > 10 ? 1 : yOffset.value / 100
})
const showMenu = ref(false)
const route = useRoute()
const router = useRouter()

function scrollTo(url: string) {
  if (route.path !== '/') {
    router.push('/').finally(() => {
      const section = document.getElementById(url)
      setTimeout(() => {
        section?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'center',
        })
      }, 100)
    })
  } else {
    const section = document.getElementById(url)
    section?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'center',
    })
  }
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
</script>

<style>
header {
  transition: background-color 0.3s ease-in-out;
}
</style>
