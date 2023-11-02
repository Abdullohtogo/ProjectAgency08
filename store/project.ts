import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useApi } from '~/composables/useApi'
import {IPaginationresponse, TDefaultResponse} from '~/types/common'
import { IProject } from '~/types/project'

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<IProject[]>([])
  const total = ref<number>(0)
  const loading = ref<boolean>(false)

  const fetchProjectsInfo = (params: any) => {
    loading.value = true
    return new Promise<IPaginationresponse<IProject>[]>((resolve, reject) => {
      useApi()
        .$get('care/api/v1/CareProjectList/', params)
        .then((res:IPaginationresponse<IProject>[]) => {
          if (projects.value.length < total.value) {
            projects.value = [...projects.value, ...res.results]
          } else {
            projects.value = res.results
          }
          total.value = res.count
          resolve(res)
        })
        .catch((err) => reject(err?.data))
        .finally(() => (loading.value = false))
    })
  }

  return {
    projects,
    total,
    loading,
    fetchProjectsInfo,
  }
})
