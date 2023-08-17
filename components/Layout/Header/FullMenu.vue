<template>
  <Transition name="menu">
    <div
      v-if="openMenu"
      class="absolute w-full z-20 left-0 bg-gray-100 top-[72px] h-[calc(100vh-70px)]"
    >
      <div class="container h-full flex flex-col justify-between gap-16">
        <div class="flex items-start flex-col gap-6 mt-24">
          <button
            v-for="(item, index) in menu"
            :key="index"
            class="flex-center flex-col gap-3 group font-semibold text-[28px] leading-130 text-black-200 hover:text-green-400 transition-all duration-300 ease-in-out"
            @click="scrollTo(item.url)"
          >
            {{ $t(item?.text) }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

interface Props {
  menu: { text: string; url: string }[]
  phone?: string
  openMenu: boolean
  dark?: boolean
}

const emit = defineEmits(['close'])
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
  emit('close')
}

const props = defineProps<Props>()

watch(
  () => props.openMenu,
  (first) => {
    if (process.client) {
      const body = document.body

      if (body) {
        if (first) {
          body.style.overflow = 'hidden'
        } else {
          body.style.overflow = 'auto'
        }
      }
    }
  },
  {
    immediate: true,
  }
)
</script>

<style>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
