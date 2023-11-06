  <template>
    <div class="container sm:mt-6 mt-3 sm:mb-16 mb-4">
      <div class="md:grid flex flex-col grid-cols-12 gap-6">
        <div class="md:col-span-8">
          <CollapseTransition class="transition duration-300">
            <CardSaxovat :data="data" :end_time="new Date(data?.end_time)" />
          </CollapseTransition>
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
                        ? faqsCount
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
                  v-bind="{ data, posts }"
                  :loading="postsLoading"
                  :postsCount="postCount"
                  @load-more="projectStore.fetchMorePost"
                  v-if="currentTab === 1"
                />
                <ComponentsFAQ
                  :faqs="faqs"
                  :loading="faqsLoading"
                  :faqCount="faqsCount"
                  @on-type="projectStore.fetchFaqInfo"
                  @load-more="projectStore.fetchMoreFaq"
                  v-if="currentTab === 2"
                />
                <ComponentsComments
                  :comments="comments"
                  :loading="commentLoading"
                  @load-more="projectStore.fetchMoreComment"
                  :commentCount="commentCount"
                  v-if="currentTab === 3"
                />
              </div>
            </Transition>
          </div>
          <WidgetGenerous
            v-if="donatCount !== 0"
            :data="donats"
            @load-more="projectStore.fetchMoreDonat"
            :donatCount="donatCount"
            :loading="donatLoading"
          />
        </div>
        <div class="md:col-span-4 hidden md:block">
          <WidgetSideBar :id="route.params.id.toString()" />
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import {computed, onMounted, reactive, ref} from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute, useRouter } from 'vue-router'
  import {useProjectStore} from "~/store/project";
  import ComponentsAbout from '@/pages/project/components/About.vue'
  import ComponentsComments from '@/pages/project/components/Comments.vue'
  import ComponentsFAQ from '@/pages/project/components/FAQ.vue'
  import ComponentsPosts from '@/pages/project/components/Posts.vue'
  import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
  import {useAsyncData} from "#app/composables/asyncData";

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
      tab: 'comments',
      current: false,
    },
  ]


  const faqs = computed(() => projectStore.faqs)
  const faqsLoading = computed(() => projectStore.faqLoading)
  const faqsCount = computed(() => projectStore.faqCount)

  const donats = computed(() => projectStore.donats)
  const donatLoading = computed(() => projectStore.donatLoading)
  const donatCount = computed(() => projectStore.donatCount)

  const posts = computed(() => projectStore.posts)
  const postsLoading = computed(() => projectStore.postsLoading)
  const postCount = computed(() => projectStore.postCount)

  const comments = computed(() => projectStore.comments)
  const commentLoading = computed(() => projectStore.commentLoading)
  const commentCount = computed(() => projectStore.commentCount)


  const projectStore = useProjectStore()
  useAsyncData(async () => {
    if (!faqs.value.length) {
      await projectStore.fetchFaqInfo('', false, '1e64c35f-09d6-4354-a64e-82020086ede5')
      await projectStore.fetchDonatInfo('1e64c35f-09d6-4354-a64e-82020086ede5')
      await projectStore.fetchPostInfo('1e64c35f-09d6-4354-a64e-82020086ede5')
      await projectStore.fetchCommentInfo('1e64c35f-09d6-4354-a64e-82020086ede5')
    }
  })


  const fetchProjectDetail = () => {
    return useApi().$get(
      `care/api/v1/landing/CareProjectDetail/${route.params.id}/`
    )
  }
  const { data, error } = await useAsyncData('fetchProductDetail', () =>
    fetchProjectDetail()
  )
  if (error.value) {
    showError({ statusCode: 404 })
  }
    useSeoMeta({
      title: () => data?.value?.title,
      ogTitle: () => data?.value?.title,
      description: () => data?.value?.about,
      ogDescription: () => data?.value?.about,
      ogImage: () => data?.value?.image?.original,
      twitterTitle: () => data?.value?.title,
    })

  function activate(index: number) {
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
    background: #dce0e4;
  }

  .scroll-style::-webkit-scrollbar-thumb {
    background: #8e9ba8;
  }
  </style>
