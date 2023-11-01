import { defineStore } from 'pinia'
import { ref } from 'vue'

import {useApi} from "~/composables/useApi";
import { isEmptyObject } from '~/utils/functions/common'

export const useContactStore = defineStore('common', () => {
    const contactInfo = ref()
    const contactSocials = ref()

    const fetchContactInfo = () => {
        if (isEmptyObject(contactInfo.value)) {
            return contactInfo.value
        }

        return new Promise((resolve, reject) => {
            useApi()
                .$get('care/api/v1/landing/ContactInfo/')
                .then((res) => {
                    contactInfo.value = res
                    resolve(res)
                })
                .catch((err) => {
                    reject(err?.data)
                })
        })
    }


    const fetchSocialsInfo = () => {
        if (isEmptyObject(contactSocials.value)) {
            return contactSocials.value
        }

        return new Promise((resolve, reject) => {
            useApi()
                .$get('care/api/v1/CareContact/')
                .then((res) => {
                    contactSocials.value = res
                    resolve(res)
                })
                .catch((err) => {
                    reject(err?.data)
                })
        })
    }

    return {
        contactInfo,
        contactSocials,
        fetchContactInfo,
        fetchSocialsInfo
    }
})
