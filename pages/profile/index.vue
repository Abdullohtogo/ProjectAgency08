<template>
  <div class="container sm:mt-6 mt-3 sm:mb-16 mb-4">
    <div class="flex gap-6 md:flex-row flex-col">
      <div class="basis-2/3">
        <CardSaxovat/>
        <div class="sm:rounded-28 rounded-2xl bg-white backdrop-filter mt-5">
          <div class="border-b border-gray-300">
            <div class="sm:pt-4 pt-3 sm:px-5 px-4 flex gap-6">
              <nuxt-link
                  :to="tab.url"
                  v-for="(tab, index) in tabs"
                  :key="index"
                  @click="activeTab = tab"
                  class="text-gray-200 sm:text-base text-sm font-semibold leading-130 cursor-pointer relative h-full pb-2"
                  :class="{'!text-black-100': activeTab === tab}"
              >
                {{ tab.tab }}
                <span
                    v-if="activeTab === tab"
                    class="absolute -bottom-[0.5px] left-0 w-full h-0.5 bg-green-400 rounded-t-md"
                ></span>
              </nuxt-link>
            </div>
          </div>
          <NuxtPage
              v-if="activeTab.tab === 'Saxovat haqida'"
          />
          <NuxtPage
              v-if="activeTab.tab === 'Postlar'"
          />
          <NuxtPage
              v-if="activeTab.tab === 'T.B.S'"
          />
          <NuxtPage
              v-if="activeTab.tab === 'Izohlar'"
          />
        </div>
        <SectionGenerous/>
      </div>
      <div class="basis-1/3">
        <SectionSideBar/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {useRoute} from "vue-router";

const {t} = useI18n()
const route = useRoute()

const tabs = [
  {
    id: 1,
    tab: 'Saxovat haqida',
    url: '/profile/about'
  },
  {
    id: 2,
    tab: 'Postlar',
    url: '/profile/posts'
  },
  {
    id: 3,
    tab: 'T.B.S',
    url: '/profile/faq'
  },
  {
    id: 4,
    tab: 'Izohlar',
    url: '/profile/comments'
  },
];

let activeTab = tabs[0]

onMounted(() => {
  console.log(route.path)
})
</script>
<style scoped>
p {
  transition: color 0.3s ease-in-out;
}

p:not(.text-black-100):hover {
  color: #6b7280;
}
</style>