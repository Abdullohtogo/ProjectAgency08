import { onMounted, ref } from 'vue'

import { useApi } from "./useApi"

export function useCareContact() {
    const loading = ref(true)
    const contacts = ref([])

    function getContact() {
        loading.value = true
        useApi()
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
