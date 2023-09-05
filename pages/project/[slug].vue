<template>
  <div class="container sm:mt-6 mt-3 sm:mb-16 mb-4">
    <div class="md:grid flex flex-col grid-cols-12 gap-6">
      <div class="md:col-span-8">
        <CardSaxovat :data="data" :end_time="new Date(data?.end_time)" />
        <div class="sm:rounded-28 rounded-2xl bg-white backdrop-filter mt-5">
          <div class="border-b border-gray-300">
            <div
              class="pt-4 md:px-5 sm:px-4 px-3 md:justify-start items-center flex md:gap-6 gap-3 w-full overflow-x-auto overflow-y-hidden scroll-style max-md:pb-1"
            >
              <button
                v-for="(item, index) in tabs"
                :key="index"
                @click="activate(index)"
                class="text-gray-200 sm:text-base text-sm font-semibold leading-130 cursor-pointer relative pb-2 whitespace-nowrap shrink-0"
                :class="{ '!text-black-100': currentTab === item.id }"
              >
                {{ $t(item.tab) }}
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
              <ComponentsAbout :detail="data" v-if="currentTab === 0" />
              <ComponentsPosts
                :posts="posts"
                :loading="postsLoading"
                :postsCount="postCount"
                @load-more="fetchMorePost()"
                v-if="currentTab === 1 && postCount !== 0"
              />
              <ComponentsFAQ
                :faqs="faqs"
                :loading="faqLoading"
                :faqCount="faqCount"
                @on-type="fetchFaq"
                @load-more="fetchMoreFaq"
                v-if="currentTab === 2"
              />
              <ComponentsComments
                :comments="comments"
                :loading="commentLoading"
                @load-more="fetchMoreComment()"
                :commentCount="commentCount"
                v-if="currentTab === 3 && commentCount !== 0"
              />
            </div>
          </Transition>
        </div>
        <SectionGenerous
          v-if="donatCount !== 0"
          :data="donats"
          @load-more="fetchMoreDonat"
          :donatCount="donatCount"
          :loading="loadingDonat"
        />
      </div>
      <div class="md:col-span-4">
        <SectionSideBar :id="route.params.slug" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import ComponentsAbout from '@/pages/project/components/About.vue'
import ComponentsComments from '@/pages/project/components/Comments.vue'
import ComponentsFAQ from '@/pages/project/components/FAQ.vue'
import ComponentsPosts from '@/pages/project/components/Posts.vue'

const { t } = useI18n()
const route = useRoute()
const currentTab = ref(0)
const tabs = [
  {
    id: 0,
    tab: 'ab_saxovat',
    current: true,
  },
  {
    id: 1,
    tab: 'posts',
    current: false,
  },
  {
    id: 2,
    tab: 'faq',
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

interface IPaginationResponse<T> {
  count: number
  next: string
  prev: string
  results: T[]
}

interface IFaq {
  count: number
  next: string
  prev: string
  results: []
}

const faqs = ref<IFaq[]>([])
const faqCount = ref(0)
const faqLoading = ref(true)
const fetchFaq = (val: string, merge?: boolean) => {
  return useApi()
    .$get<IPaginationResponse<IFaq>>(
      `care/api/v1/landing/CareProject/${route.params.slug}/FAQList/?search=${
        val == undefined ? '' : val
      }`,
      {
        params: faqParams,
      }
    )
    .then((res) => {
      faqCount.value = res.count
      faqLoading.value = false
      faqs.value = res.results
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchMoreFaq = (val) => {
  faqParams.limit += 10
  faqLoading.value = true
  fetchFaq(val, true).then(() => (faqLoading.value = false))
}

interface IDonat {
  count: number
  next: string
  prev: string
  results: []
}

const donats = ref<IDonat[]>([])
const donatCount = ref(0)
const loadingDonat = ref(true)
const fetchDonat = () => {
  return useApi()
    .$get<IPaginationResponse<IDonat>>(
      `care/api/v1/landing/CareProject/${route.params.slug}/DonationList/`,
      {
        params: donatParams,
      }
    )
    .then((res) => {
      donatCount.value = res.count
      donats.value = [...donats.value, ...res.results]
      loadingDonat.value = false
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchMoreDonat = () => {
  donatParams.offset += donatParams.limit
  loadingDonat.value = true
  fetchDonat().then(() => (loadingDonat.value = false))
}

interface IPost {
  count: number
  next: string
  prev: string
  results: []
}

const postError = ref()
const posts = ref<IPost[]>([])
const postCount = ref(0)
const postsLoading = ref(true)
const fetchPost = () => {
  return useApi()
    .$get<IPaginationResponse<IDonat>>(
      `care/api/v1/${route.params.slug}/CareProjectPostList/`,
      {
        params: postParams,
      }
    )
    .then((res) => {
      postCount.value = res.count
      posts.value = [...posts.value, ...res.results]
      postsLoading.value = false
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchMorePost = () => {
  postParams.offset += postParams.limit
  postsLoading.value = true
  fetchPost().then(() => (postsLoading.value = false))
}

interface IComment {
  count: number
  next: string
  prev: string
  results: []
}

const comments = ref<IComment[]>([])
const commentCount = ref(0)
const commentLoading = ref(true)
const fetchComment = () => {
  return useApi()
    .$get<IPaginationResponse<IComment>>(
      `care/api/v1/landing/${route.params.slug}/CareProjectCommentList/`,
      {
        params: commentParams,
      }
    )
    .then((res) => {
      commentCount.value = res.count
      comments.value = [...comments.value, ...res.results]
      commentLoading.value = false
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchMoreComment = () => {
  commentLoading.value = true
  commentParams.offset += commentParams.limit
  fetchComment().then(() => (commentLoading.value = false))
}

const  fetchProjectDetail = () => {
  return useApi().$get(
    `care/api/v1/landing/CareProjectDetail/${route.params.slug}/`
  )
}
const { data, error } = await useAsyncData('fetchProductDetail', () =>
  fetchProjectDetail()
)
if (error.value) {
  showError({ statusCode: 404 })
}

onMounted(async () => {
  await fetchComment()
  await fetchDonat()
  await fetchFaq()
  await fetchPost()
  useSeoMeta({
    title: data?.value?.title,
    ogTitle: data?.value?.title,
    twitterTitle: data?.value?.title,
  })
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


.scroll-style::-webkit-scrollbar {
  height: 3px;
}

.scroll-style::-webkit-scrollbar-track {
  background: #DCE0E4;
}

.scroll-style::-webkit-scrollbar-thumb {
  background: #8E9BA8;
}


</style>
