<template>
  <div class="container">
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
            <span class="text-white bg-green-300 rounded-xl px-2.5 mr-2">
              {{ total }}
            </span>
          </template>
        </i18n-t>
      </div>
    </div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-4 flex-wrap gap-6 mb-6 md:mb-8"
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
import { computed ,reactive} from 'vue';

// const projects = ref()
// const loading = ref(false)
// const total = ref()
//
// interface IPaginationresponse<T> {
//   count: number
//   next: string
//   previous: string
//   results: T[]
// }
// interface IProjectCategory {
//   id: string
//   name: string
//   icon: {
//     id: string
//     type: string
//     file_name: string
//     file: string
//     file_size: string
//   }
//   background_color: string
// }
// interface IProjectCard {
//   id: number
//   title: string
//   company: {
//     id: string
//     name: string
//     brand_logo: object
//   }
//   category: IProjectCategory
//   target_money: string
//   gained_money: string
//   gained_money_in_percent: number
//   about: string
//   is_favorite: boolean
//   user_donation_amount: string
//   donation_count: number
//   share_count: number
//   comment_count: number
//   views_count: number
//   is_active: number
//   is_project_report_ready: string
//   is_following_company: boolean
//   created_at: string
//   end_time: string
//   status: number
// }
// const fetchprojects = () => {
//   return useApi()
//       .$get<IPaginationresponse<IProjectCard>>(`care/api/v1/CareProjectList/`, {
//         params: { limit: 4 },
//       })
//       .then((res) => {
//         total.value = res.count
//         projects.value = res.results
//         loading.value = true
//       })
// }
//
// onMounted(async () => {
//   await fetchprojects()
// })
import {useAsyncData} from "#app/composables/asyncData";
import { useProjectStore } from '~/store/project';

const projectStore = useProjectStore();

const projects = computed(() => projectStore.projects)
const loading = computed(() => projectStore.loading)
const total = computed(() => projectStore.total)
const params = reactive({ offset: 0, limit: 4 })
useAsyncData(async () => {
  if (!projects.value.length) {
    await projectStore.fetchProjectsInfo({ params: params })
  }
})

</script>
