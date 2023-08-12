import { IAddress, IProjectInfo, TDefaultResponse } from '~/types/common'

export const useCommonStore = defineStore('commonStore', {
  state: () => ({
    complainList: [] as any,
    projectInfo: {} as IProjectInfo,
    ads: [] as any,
  }),
  actions: {
    fetchComplainList() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('review/api/v1/front_office/ComplaintTypeList/')
          .then((res: TDefaultResponse<any>) => {
            this.complainList = res.results
            resolve(res)
          })
          .catch((err) => {
            reject(err?.data)
          })
      })
    },
    fetchProjectInfo() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('review/api/v1/front_office/ReviewPlatformInfo/')
          .then((res: IProjectInfo) => {
            this.projectInfo = res
            resolve(res)
          })
          .catch((err) => {
            reject(err?.data)
          })
      })
    },
    fetchAds() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('review/api/v1/front_office/AdvertisingList/')
          .then((res: TDefaultResponse<any>) => {
            this.ads = res?.results
            resolve(res)
          })
          .catch((err) => {
            reject(err?.data)
          })
      })
    },
    postMyCompany(data: any) {
      return new Promise((resolve, reject) => {
        useApi()
          .$post('review/api/v1/front_office/IsMyCompanyCreate/', {
            body: data,
          })
          .then((res: TDefaultResponse<any>) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err?.data)
          })
      })
    },
    deleteCommentSingle(data: any, id: string) {
      return new Promise((resolve, reject) => {
        useApi()
          .$post(`review/api/v1/front_office/ReviewDelete/${id}/`, {
            body: data,
          })
          .then((res: TDefaultResponse<any>) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err?.data)
          })
      })
    },
    fetchAddress(q: string) {
      return new Promise((resolve, reject) => {
        useApi()
          .$get<IAddress[]>('https://maps.commeta.io/search', {
            params: { q },
          })
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
})
