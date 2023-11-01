import { defineStore } from 'pinia';
import { ref } from 'vue';

import { useApi } from '~/composables/useApi';

export const useProjectStore = defineStore('common', () => {
    const projects = ref([]);
    const total = ref(0);
    const loading = ref(false);

    const fetchProjectsInfo = () => {
        loading.value = true; // Set loading to true before making the API call
        return new Promise((resolve, reject) => {
            useApi()
                .$get('care/api/v1/CareProjectList/')
                .then((res) => {
                    if (projects.value.length < total.value) {
                        projects.value = [...projects.value, ...res.results];
                    } else {
                        projects.value = res.results;
                    }
                    total.value = res.count;
                    loading.value = true;
                    resolve(res);
                })
                .catch((err) => {
                    loading.value = false;
                    reject(err?.data);
                });
        });
    };


    return {
        projects,
        total,
        loading,
        fetchProjectsInfo,
    };
});
