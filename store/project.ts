import { defineStore } from 'pinia'
import { ref } from 'vue'

import { useApi } from '~/composables/useApi'
import {IPaginationresponse} from '~/types/common'
import type {IFaq, IProject, IDonat, IPost, IComment} from '~/types/project'

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<IProject[]>([])
  const projectsCount = ref<number>(0)
  const projectsLoading = ref<boolean>(false)

  const faqs = ref<IFaq[]>([])
  const faqCount = ref(0)
  const faqLoading = ref(true)

  const donats = ref<IDonat[]>([])
  const donatCount = ref(0)
  const donatLoading = ref(true)

  const posts = ref<IPost[]>([])
  const postCount = ref(0)
  const postsLoading = ref(true)

  const comments = ref<IComment[]>([])
  const commentCount = ref(0)
  const commentLoading = ref(true)

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



  const fetchProjectsInfo = (params: any) => {
    projectsLoading.value = true
    return new Promise<IPaginationresponse<IProject>[]>((resolve, reject) => {
      useApi()
        .$get('care/api/v1/CareProjectList/', params)
        .then((res:IPaginationresponse<IProject>[]) => {
          if (projects.value.length < projectsCount.value) {
            projects.value = [...projects.value, ...res.results]
          } else {
            projects.value = res.results
          }
          projectsCount.value = res.count
          resolve(res)
        })
        .catch((err) => reject(err?.data))
        .finally(() => (projectsLoading.value = false))
    })
  }

  const fetchFaqInfo = (val: string, merge?: boolean, id?: string) => {
        return useApi()
            .$get<IPaginationresponse<IFaq>>(
                `care/api/v1/landing/CareProject/${id}/FAQList/?search=${
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

    const fetchMoreFaq = (val: string) => {
        faqParams.limit += 10
        faqLoading.value = true
        fetchFaqInfo(val, true).then(() => (faqLoading.value = false))
    }

    const fetchDonatInfo = (id?: string) => {
        return useApi()
            .$get<IPaginationresponse<IDonat>>(
                `care/api/v1/landing/CareProject/${id}/DonationList/`,
                {
                    params: donatParams,
                }
            )
            .then((res) => {
                donatCount.value = res.count
                donats.value = [...donats.value, ...res.results]
                donatLoading.value = false
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const fetchMoreDonat = () => {
        donatParams.offset  += donatParams.limit
        donatLoading.value = true
        fetchDonatInfo().then(() => (donatLoading.value = false))
    }

    const fetchPostInfo = (id?: string) => {
        return useApi()
            .$get<IPaginationresponse<IDonat>>(
                `care/api/v1/${id}/CareProjectPostList/`,
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
        fetchPostInfo().then(() => (postsLoading.value = false))
    }
    const fetchCommentInfo = (id?: string) => {
        return useApi()
            .$get<IPaginationresponse<IComment>>(
                `care/api/v1/landing/${id}/CareProjectCommentList/`,
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
        fetchCommentInfo().then(() => (commentLoading.value = false))
    }
  return {
      projects, projectsCount, projectsLoading, // projects
      faqs,faqCount,faqLoading, // FAQ
      donats,donatCount,donatLoading,// Donating
      posts, postsLoading, postCount, // Posts
      comments, commentCount, commentLoading, // Comments
      fetchProjectsInfo, fetchFaqInfo, fetchMoreFaq, fetchDonatInfo, // Fetching functions
      fetchMoreDonat, fetchCommentInfo, fetchMoreComment, fetchPostInfo,
      fetchMorePost,
  }
})
