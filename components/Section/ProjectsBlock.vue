<template>
  <div class="md:mx-20 lg:mx-40">
    <div class="container">
      <div class="flex items-center justify-center flex-col pb-6 md:pb-11">
        <p class="font-medium text-green-300 text-center uppercase mb-3">
          {{ $t('projects') }}
        </p>
        <i18n-t
          keypath="over_projects"
          tag="h2"
          style="line-height: 1.6"
          class="text-green-500 lg:text-4xl md:text-3xl text-xl font-bold text-center max-w-[540px]"
        >
          <template #count>
            <span class="text-white bg-green-300 rounded-xl px-2.5 pr-0 mr-2">
              1000
            </span>
          </template>
        </i18n-t>
      </div>
    </div>

    <div
      class="grid md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-6 mb-6 md:mb-8"
    >
      <LoaderProject v-if="!loading" v-for="i in 4" :key="i" />
      <CardProjectSingle
        v-for="(data, i) in projects"
        v-bind="{ data }"
        :key="i"
      />
    </div>
    <nuxt-link to="/project" class="relative cursor-pointer z-10">
      <CommonButton
        label="all_projects"
        buttonStyle="flex items-center"
        variant="primary"
        class="mx-auto"
      />
    </nuxt-link>
  </div>
</template>
<script setup lang="ts">
const projects = ref()
const loading = ref(false)

interface IPaginationresponse<T> {
  count: number
  next: string
  previous: string
  results: T[]
}
interface IProjectCategory {
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
interface IProjectCard {
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
const fetchprojects = () => {
  return useApi()
    .$get<IPaginationresponse<IProjectCard>>(`care/api/v1/CareProjectList/`, {
      params: { limit: 4 },
    })
    .then((res) => {
      projects.value = res.results
      loading.value = true
    })
}

onMounted(async () => {
  await fetchprojects()
})
</script>
