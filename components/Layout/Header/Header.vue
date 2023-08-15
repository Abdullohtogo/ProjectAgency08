<template>
  <header :class="{ 'bg-white shadow-header': route.params !== 'about' }">
    <div
      class="container md:py-6 sm:py-5 py-4 flex justify-between items-center sticky z-50"
    >
      <pre>{{ $route.path == '/' }}</pre>
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
            @click="item.id == 1 ? $router.push(item.url) : scrollTo(item.url)"
            class="hover:text-green-400 text-sm leading-5 text-black-100 transition-all duration-300 ease-linear"
          >
            {{ item.text }}
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

interface IPaginationResponse<T> {
  count: number
  next: string
  prev: string
  results: T[]
}

interface IProject {
  id: string
}

const fetchProject = () => {
  return useApi()
    .$get<IPaginationResponse<IProject>>('care/api/v1/CareProjectList/')
    .then((res) => {
      ids.value = res.results[0].id
    })
    .catch((err) => {
      console.log(err)
    })
}
const ids = ref()

onMounted(() => {
  fetchProject()
})

const showMenu = ref(false)
const route = useRoute()
const router = useRouter()

function scrollTo(url: string) {
  console.log(document.getElementById(url))

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
      text: 'Biz haqimizda',
      url: `/profile/${ids.value}`,
    },
    {
      id: 2,
      text: 'Afzalliklar',
      url: 'afzalliklar',
    },
    {
      id: 3,
      text: 'Fondlar uchun',
      url: 'fonds',
    },

    {
      id: 4,
      text: "Bog'lanish",
      url: 'contact',
    },
  ]
})
// console.log(ids.value)
</script>
