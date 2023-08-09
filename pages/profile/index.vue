<template>
  <div class="container mt-6 mb-16">
    <div class="flex gap-6">
      <div class="basis-2/3">
        <CardSaxovat/>
        <div class="rounded-28 bg-white backdrop-filter mt-5">
          <div class="border-b border-gray-300">
            <div class="pt-4 px-5 flex gap-6">
              <nuxt-link
                  :to="tab.url"
                  v-for="(tab, index) in tabs"
                  :key="index"
                  @click="activeTab = tab"
                  class="text-gray-200 font-semibold leading-130 cursor-pointer relative h-full pb-2"
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