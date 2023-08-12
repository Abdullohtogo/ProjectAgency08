export function useCareContact() {
    const loading = ref(true)
    const contacts = ref([])

    function getContact() {
        loading.value = true
        return useApi()
            .$get(`/care/api/v1/CareContact/`)
            .then(res => {
                contacts.value = res
            })
            .finally(() => {
                loading.value = false
            })
    }


    onMounted(() => {
        getContact()
    })


    return {
        getContact,
        loading,
        contacts
    }
}

import { TDefaultResponse } from '~/types/common'

export const useBestCategoriesStore = defineStore('bestCategoriesStore', {
  state: () => ({
    categories: {
      list: [] as IBestCategory[],
      pending: true,
    },
  }),
  actions: {
    fetchBestCategories(isMobile: boolean) {
      return new Promise((resolve, reject) => {
        if (this.categories.list.length > 0) {
          resolve(this.categories)
        } else {
          this.categories.pending = true
          useApi()
            .$get<TDefaultResponse<IBestCategory>>(
              'review/api/v1/front_office/BestCategoriesList/'
            )
            .then((res) => {
              this.categories.list = res.results
              if (!isMobile) {
                this.fetchCompanies()
              }
              resolve(res)
            })
            .catch((err) => {
              reject(err._data)
            })
            .finally(() => {
              if (isMobile) this.categories.pending = false
            })
        }
      })
    },
  },
})
