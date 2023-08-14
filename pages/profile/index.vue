<template>
  <div class="container sm:mt-6 mt-3 sm:mb-16 mb-4">
    <div class="md:grid flex flex-col grid-cols-12 gap-6">
      <div class="md:col-span-8">
        <CommonBlockPreloader
          :loading="projectLoading"
          width="100%"
          height="631px"
          borderRadius="28px"
        >
          <CardSaxovat
            :data="projectList?.results[0]"
            :end_time="new Date(projectList?.results[0]?.end_time)"
          />
        </CommonBlockPreloader>
        <!-- <pre>{{ projectDetail }}</pre> -->
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
                      ? postCount
                      : '' || index == 2
                      ? faqCount
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
              <ComponentsAbout :detail="projectDetail" v-if="currentTab === 0" />
              <ComponentsPosts
                :posts="posts"
                :postsCount="postCount"
                @load-more="fetchMorePost()"
                v-if="currentTab === 1 && postCount !== 0"
              />
              <ComponentsFAQ
                :faqs="faqs"
                :faqCount="faqCount"
                @load-more="fetchMoreFaq()"
                v-if="currentTab === 2 && faqCount !== 0"
              />
              <ComponentsComments
                :comments="comments"
                @load-more="fetchMoreComment()"
                :commentCount="commentCount"
                v-if="currentTab === 3 && commentCount !== 0"
              />
            </div>
          </Transition>
        </div>
        <SectionGenerous
          :data="donats"
          @load-more="fetchMoreDonat"
          :donatCount="donatCount"
        />
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

import CommonBlockPreloader from '@/components/Common/BlockPreloader.vue'
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
const donatParams = reactive({
  limit: 8,
  offset: 0,
})
const postParams = reactive({
  limit: 3,
  offset: 0,
})
const commentParams = reactive({
  limit: 10,
  offset: 0,
})
const faqParams = reactive({
  limit: 10,
  offset: 0,
})
const projectList = ref()
const ids = ref()

interface IPaginationResponse<T> {
  count: number
  next: string
  prev: string
  results: T[]
}

interface IProject {
  id: string
}
const projectLoading = ref(true)

const fetchProject = () => {
  return useApi()
    .$get<IPaginationResponse<IProject>>('care/api/v1/CareProjectList/')
    .then((res) => {
      projectList.value = res
      ids.value = res.results[0].id
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => (projectLoading.value = false))
}

interface IFaq {
  count: number
  next: string
  prev: string
  results: []
}

const faqs = ref<IFaq[]>([])
const faqCount = ref(0)

const fetchFaq = () => {
  return useApi()
    .$get<IPaginationResponse<IFaq>>(
      `care/api/v1/landing/CareProject/${ids.value}/FAQList/`,
      {
        // ?limit=${faqParams.value.limit}&offset=${faqParams.value.offset}
        params: faqParams,
      }
    )
    .then((res) => {
      faqCount.value = res.count
      faqs.value = [...faqs.value, ...res.results]
    })
    .catch((err) => {
      console.log(err)
    })
}
const fetchMoreFaq = () => {
  faqParams.offset += faqParams.limit
  fetchFaq()
}

interface IDonat {
  count: number
  next: string
  prev: string
  results: []
}

const donats = ref<IDonat[]>([])
const donatCount = ref(0)

const fetchDonat = () => {
  return useApi()
    .$get<IPaginationResponse<IDonat>>(
      `care/api/v1/landing/CareProject/${ids.value}/DonationList/`,
      {
        params: donatParams,
      }
    )
    .then((res) => {
      donatCount.value = res.count
      donats.value = [...donats.value, ...res.results]
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchMoreDonat = () => {
  donatParams.offset += donatParams.limit
  fetchDonat()
}

interface IPost {
  count: number
  next: string
  prev: string
  results: []
}

const posts = ref<IPost[]>([])
const postCount = ref(0)

const fetchPost = () => {
  return useApi()
    .$get<IPaginationResponse<IDonat>>(
      `care/api/v1/${ids.value}/CareProjectPostList/`,
      {
        params: postParams,
      }
    )
    .then((res) => {
      postCount.value = res.count
      posts.value = [...posts.value, ...res.results]
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchMorePost = () => {
  postParams.offset += postParams.limit
  fetchPost()
}

interface IComment {
  count: number
  next: string
  prev: string
  results: []
}

const comments = ref<IComment[]>([])
const commentCount = ref(0)

const fetchComment = () => {
  return useApi()
    .$get<IPaginationResponse<IComment>>(
      `care/api/v1/landing/${ids.value}/CareProjectCommentList/`,
      {
        params: commentParams,
      }
    )
    .then((res) => {
      commentCount.value = res.count
      comments.value = [...comments.value, ...res.results]
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchMoreComment = () => {
  commentParams.offset += commentParams.limit
  fetchComment()
}


const projectDetail = ref()

const fetchProjectDetail = () => {
  return useApi()
    .$get(
      `care/api/v1/landing/CareProjectDetail/${ids.value}/`
    )
    .then((res) => {
      projectDetail.value = res
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(async () => {
  await fetchProject()
  await fetchProjectDetail()
  await fetchComment()
  await fetchDonat()
  await fetchFaq()
  await fetchPost()
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
