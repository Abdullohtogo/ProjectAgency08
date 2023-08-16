<template>
  <div class="container sm:mt-6 mt-3 sm:mb-16 mb-4">
    <div class="md:grid flex flex-col grid-cols-12 gap-6">
      <div class="md:col-span-8">
        <CardSaxovat v-bind="{ data }" :end_time="new Date(data?.end_time)" />
        <div class="sm:rounded-28 rounded-2xl bg-white backdrop-filter mt-5">
          <div class="border-b border-gray-300">
            <div
              class="pt-4 md:px-5 sm:px-4 px-3 justify-center md:justify-start items-center flex md:gap-6 gap-2"
            >
              <button
                v-for="(item, index) in tabs"
                :key="index"
                @click="activate(index)"
                class="text-gray-200 sm:text-base text-sm font-semibold leading-130 cursor-pointer relative h-full pb-2"
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
              <ComponentsAbout
                :detail="projectDetail"
                v-if="currentTab === 0"
                :loading="detailLoading"
              />
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
          v-if="donatCount !== 0"
          :data="donats"
          @load-more="fetchMoreDonat"
          :donatCount="donatCount"
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

interface IProject {
  id: string
}

const fetchProject = () => {
  return useApi().$get<IPaginationResponse<IProject>>(
    'care/api/v1/CareProjectList/'
  )
}
const { data: projectList } = useAsyncData('fetchMuhammadjonAka', () =>
  fetchProject()
)

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
      `care/api/v1/landing/CareProject/${route.params.slug}/FAQList/`,
      {
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
      `care/api/v1/landing/CareProject/${route.params.slug}/DonationList/`,
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

const postError = ref()
const posts = ref<IPost[]>([])
const postCount = ref(0)

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
      `care/api/v1/landing/${route.params.slug}/CareProjectCommentList/`,
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

const fetchProjectDetail = () => {
  return useApi().$get(
    `care/api/v1/landing/CareProjectDetail/${route.params.slug}/`
  )
}
const { data: projectDetail } = useAsyncData('fetchMuhammadjon', () =>
  fetchProjectDetail()
)

const data = computed(() =>
  projectList.value?.results.find((el) => el.id === route.params.slug)
)
onMounted(async () => {
  // await fetchProject()
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
