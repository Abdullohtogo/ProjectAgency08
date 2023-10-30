import { defineStore } from 'pinia'
import { IProjectCard, IPaginationresponse } from '~/pages/project/index.vue'

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projects: [] as IProjectCard[],
        total: 0 as number,
        loading: true as boolean,
    }),

    actions: {
        fetchProjects(params: any) {
            return new Promise<IPaginationresponse<IProjectCard[]>>(
                (resolve, reject) => {
                    useApi()
                        .$get('care/api/v1/CareProjectList/', params)
                        .then((res: IPaginationresponse<IProjectCard[]>) => {
                            if (this.projects.length < this.total) {
                                this.projects = [...this.projects, ...res.results]
                            } else this.projects = res.results
                            console.log(res, 'projects all: ')
                            this.total = res.count
                            this.loading = false
                            resolve(res)
                        })
                        .catch((err) => {
                            reject(err?.data)
                        })
                }
            )
        },
    },
})
