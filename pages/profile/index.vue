<template>
  <div class="container sm:mt-6 mt-3 sm:mb-16 mb-4">
    <div class="md:grid flex flex-col grid-cols-12 gap-6">
      <div class="md:col-span-8">
        <CardSaxovat />
        <div class="sm:rounded-28 rounded-2xl bg-white backdrop-filter mt-5">
          <div class="border-b border-gray-300">
            <div class="sm:pt-4 pt-3 sm:px-5 px-4 flex gap-6">
              <button
                v-for="(item, index) in tabs"
                :key="index"
                @click="activate(index)"
                class="text-gray-200 sm:text-base text-sm font-semibold leading-130 cursor-pointer relative h-full pb-2"
                :class="{ '!text-black-100': currentTab === item.id }"
              >
                {{ item.tab }}
                <span
                  v-if="currentTab === item.id"
                  class="absolute -bottom-[0.5px] left-0 w-full h-0.5 bg-green-400 rounded-t-md"
                ></span>
              </button>
            </div>
          </div>
          <Transition mode="out-in" name="fade">
            <div :key="currentTab">
              <ComponentsAbout v-if="currentTab === 0" />
              <ComponentsPosts v-if="currentTab === 1" />
              <ComponentsFAQ v-if="currentTab === 2" />
              <ComponentsComments v-if="currentTab === 3" />
            </div>
          </Transition>
        </div>
        <SectionGenerous />
      </div>
      <div class="md:col-span-4">
        <SectionSideBar />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import ComponentsAbout from '@/pages/profile/components/About.vue'
import ComponentsComments from '@/pages/profile/components/Comments.vue'
import ComponentsFAQ from '@/pages/profile/components/FAQ.vue'
import ComponentsPosts from '@/pages/profile/components/Posts.vue'

const { t } = useI18n()
const route = useRoute()
const currentTab = ref(0)

const tabs = [
  {
    id: 0,
    tab: 'Saxovat haqida',
    current: true,
  },
  {
    id: 1,
    tab: 'Postlar',
    current: false,
  },
  {
    id: 2,
    tab: 'T.B.S',
    current: false,
  },
  {
    id: 3,
    tab: 'Izohlar',
    current: false,
  },
]

onMounted(() => {
  console.log(route.path)
})

function activate(index) {
  currentTab.value = index
}
</script>
<style scoped>
p {
  transition: color 0.3s ease-in-out;
}

p:not(.text-black-100):hover {
  color: #6b7280;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
