import { defineStore } from 'pinia'
import { ref } from 'vue'

import {useApi} from "~/composables/useApi";
import { isEmptyObject } from '~/utils/functions/common'
import type {ISocial, IContactInfo} from "~/types/contact";

export const useContactStore = defineStore('contact', () => {
    const contactInfo = ref()
    const contactSocials = ref()

    const fetchContactInfo = () => {
        if (isEmptyObject(contactInfo.value)) {
            return contactInfo.value
        }

        return new Promise((resolve, reject) => {
            useApi()
                .$get('care/api/v1/landing/ContactInfo/')
                .then((res: IContactInfo) => {
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
                .then((res: ISocial) => {
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
