import {computed} from 'vue'

import {useContactStore} from "~/store/contactInfo";
import {formatPhoneNumber} from "~/utils";

export function useProjectContact() {
    const store = useContactStore()
    const contactInfo = computed(() => store.contactInfo)
    const contactSocials = computed(() => store.contactSocials)
    const fetchInfo = async  () => {
        await store.fetchContactInfo()
        await store.fetchSocialsInfo()
    }
    const contactInfoDetails = computed(() => [
            {
                id: 1,
                src: '/icons/location1.svg',
                title: 'location',
                text: contactInfo.value?.address,
                icon: '/icons/openin.svg',
                url: 'https://goo.gl/maps/Gn5ieiks1NbMdLQU6',
            },
            {
                id: 2,
                src: '/icons/phone.svg',
                title: 'our_phone_num',
                text: formatPhoneNumber(contactInfo?.value?.phone),
                url: `tel:${contactInfo?.value?.phone}`,
            },
            {
                id: 3,
                src: '/icons/email.svg',
                title: 'email',
                text: contactInfo?.value?.email,
                url: `mailto:${contactInfo?.value?.email}`,
            },
    ])
    const contactSocialDetails = computed(() => [
            {
                id: 1,
                url: contactSocials.value?.instagram,
                src: '/icons/instagram1.svg',
                name: 'Instagram',
            },
            {
                id: 2,
                url: contactSocials.value?.youtube,
                src: '/icons/youtube1.svg',
                name: 'YouTube',
            },
            {
                id: 3,
                url: contactSocials.value?.twitter,
                src: '/icons/twitter1.svg',
                name: 'X (Twitter)',
            },
            {
                id: 4,
                url: contactSocials.value?.telegram,
                name: 'Telegram',
                src: '/icons/telegram1.svg',
            },
        ]
    )
    return {
        fetchInfo,
        contactInfoDetails,
        contactSocialDetails
    }
}
