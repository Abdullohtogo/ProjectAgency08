<template>
  <div class="container mt-6 md:mt-8 mb-8 md:mb-16">
    <div class="container">
      <div class="flex items-center justify-center flex-col pb-6 md:pb-11">
        <p class="font-medium text-green-300 text-center uppercase mb-3">
          {{ $t('projects') }}
        </p>
        <i18n-t
            keypath="over_projects"
            tag="h2"
            style="line-height: 1.6"
            class="text-green-500 lg:text-4xl md:text-3xl text-xl font-bold text-center max-w-[580px]"
        >
          <template #count>
            <span class="text-white bg-green-300 rounded-xl px-2.5 pr-2 mr-2">
              {{ total }}
            </span>
          </template>
        </i18n-t>
      </div>
    </div>
    <div
        class="grid md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-6 mb-6 md:mb-8"
    >
      <LoaderProject v-if="!loading" v-for="i in 12" :key="i" />
      <CardProjectSingle
          v-for="(data, i) in projects"
          v-bind="{ data }"
          :key="i"
      />
    </div>
    <CommonButton
        v-if="projects?.length < total"
        label="show_more"
        buttonStyle="flex items-center"
        variant="primary"
        class="mx-auto"
        @click="fetchMore()"
    />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useProjectStore } from '~/store/project'
import { computed } from 'vue'

const { t } = useI18n()
const projectStore = useProjectStore()

const projects = computed(() => projectStore.projects)
const loading = computed(() => projectStore.loading)
const total = computed(() => projectStore.total)

export interface IPaginationresponse<T> {
  count: number
  next: string
  previous: string
  results: T[]
}
export interface IProjectCategory {
  id: string
  name: string
  icon: {
    id: string
    type: string
    file_name: string
    file: string
    file_size: string
  }
  background_color: string
}
export interface IProjectCard {
  id: number
  title: string
  company: {
    id: string
    name: string
    brand_logo: object
  }
  category: IProjectCategory
  target_money: string
  gained_money: string
  gained_money_in_percent: number
  about: string
  is_favorite: boolean
  user_donation_amount: string
  donation_count: number
  share_count: number
  comment_count: number
  views_count: number
  is_active: number
  is_project_report_ready: string
  is_following_company: boolean
  created_at: string
  end_time: string
  status: number
}
const params = reactive({ offset: 0, limit: 12 })

useAsyncData(async () => {
  if (!projects.value.length) {
    await projectStore.fetchProjectsInfo({ params: params })
  }
})

const fetchMore = () => {
  params.offset += params.limit
  projectStore.fetchProjectsInfo({ params: params })
}

useSeoMeta({
  title: () => t('projects'),
  ogTitle: () => t('projects'),
  description: () => t('projects'),
  ogDescription: () => t('projects'),
  twitterTitle: () => t('projects'),
})

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
</script>
