<template>
  <div class="container sm:mt-6 mt-3 sm:mb-16 mb-4">
    <div class="md:grid flex flex-col grid-cols-12 gap-6">
      <div class="md:col-span-8">
        <CardSaxovat
          :data="projectList?.results[0]"
          :end_time="new Date(projectList?.results[0]?.end_time)"
        />
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
                <span
                  v-if="item.id !== 0 && item.id !== null"
                  :class="
                    currentTab == item.id
                      ? 'text-green-400 bg-green-100'
                      : 'bg-gray-300 text-gray-400'
                  "
                  class="text-xs font-medium leading-130 transition transition-300 py-0.5 px-1.5 rounded-md"
                >
                  {{
                    index == 1
                      ? posts?.count
                      : '' || index == 2
                      ? faqs?.count
                      : '' || index == 3
                      ? comments.length
                      : ''
                  }}
                </span>
              </button>
            </div>
          </div>
          <Transition mode="out-in" name="fade">
            <div :key="currentTab">
              <ComponentsAbout v-if="currentTab === 0" />
              <ComponentsPosts
                :posts="posts?.results"
                v-if="currentTab === 1 && posts?.count !== 0"
              />
              <ComponentsFAQ
                :faqs="faqs"
                @load-more="loadMoreFaq()"
                v-if="currentTab === 2 && faqs?.count !== 0"
              />
              <ComponentsComments
                :comments="comments"
                v-if="currentTab === 3"
              />
            </div>
          </Transition>
        </div>
        <SectionGenerous :data="donations?.results" />
      </div>
      <div class="md:col-span-4">
        <SectionSideBar />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import ComponentsAbout from '@/pages/profile/components/About.vue'
import ComponentsComments from '@/pages/profile/components/Comments.vue'
import ComponentsFAQ from '@/pages/profile/components/FAQ.vue'
import ComponentsPosts from '@/pages/profile/components/Posts.vue'

const { t } = useI18n()
const route = useRoute()
const currentTab = ref(0)

const comments = [
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
]
const donations = ref()
const faqs = ref()

const posts = ref()

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
const donatParams = ref({
  limit: 8,
  offset: 0,
})

const faqParams = ref({
  limit: 1,
  offset: 0,
})
const projectList = ref()
const ids = ref()
onMounted(async () => {
  // getting project list
  function getProjectList() {
    return new Promise((resolve, reject) => {
      useApi()
        .$get('care/api/v1/CareProjectList/')
        .then((res) => {
          resolve(res)
          projectList.value = res
          ids.value = res.results[0].id
        })
        .catch((err) => {
          reject(err?.data)
          console.log(err)
        })
    })
  }

  // getting faq list
  function getFaqList() {
    return new Promise((resolve, reject) => {
      useApi()
        .$get(
          `care/api/v1/${ids.value}/CareProjectFAQList/?limit=${faqParams.value.limit}&offset=${faqParams.value.offset}`
        )
        .then((res) => {
          resolve(res)
          faqs.value = res
        })
        .catch((err) => {
          reject(err?.data)
          console.log(err)
        })
    })
  }

  function getDonatList() {
    return new Promise((resolve, reject) => {
      useApi()
        .$get(`care/api/v1/${ids.value}/CareProjectDonationList/`)
        .then((res) => {
          resolve(res)
          donations.value = res
        })
        .catch((err) => {
          reject(err?.data)
          console.log(err)
        })
    })
  }

  // getting posts list
  function getPostList() {
    return new Promise((resolve, reject) => {
      useApi()
        .$get(
          `care/api/v1/${ids.value}/CareProjectPostList/?limit=${donatParams.value.limit}&offset=${donatParams.value.offset}`
        )
        .then((res) => {
          resolve(res)
          posts.value = res
        })
        .catch((err) => {
          reject(err?.data)
          console.log(err)
        })
    })
  }
  await getProjectList()
  await getFaqList()
  await getPostList()
  await getDonatList()
})
function loadMoreFaq() {
  return new Promise((resolve, reject) => {
    faqParams.value.limit += 1
    useApi()
      .$get(
        `care/api/v1/${ids.value}/CareProjectFAQList/?limit=${faqParams.value.limit}&offset=${faqParams.value.offset}`
      )
      .then((res) => {
        resolve(res)
        faqs.value = [...faqs.value, ...res]
      })
      .catch((err) => {
        reject(err?.data)
        console.log(err)
      })
  })
}

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
