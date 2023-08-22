<template>
  <div
    class="bg-gradient-to-r from-app-banner-1 to-app-banner-2 md:mx-11 mx-5 sm:rounded-40 rounded-2xl relative z-50"
  >
    <div class="container flex justify-between flex-col lg:flex-row">
      <div class="lg:my-16 md:my-8 my-7 sm:mx-auto">
        <h3
          class="lg:text-[32px] md:text-[28px] text-2xl leading-130 text-white font-semibold"
        >
          {{ $t('contact_types') }}
        </h3>
        <p class="md:mt-3 mt-2 leading-130 text-white/60 max-w-[436px]">
          {{ $t('contact_with_us_these_ways') }}
        </p>
        <div class="flex flex-col gap-2 mt-6">
          <a
            :href="item?.url"
            target="_blank"
            class="sm:p-3 p-1.5 group flex items-center gap-2 rounded-40 transition transition-300 hover:border-white border border-white/20"
            v-for="item in info"
            :key="item?.id"
          >
            <img :src="item?.src" alt="icon" class="w-[42px] h-[42px]" />
            <div class="flex flex-col gap-[3px]">
              <p class="sm:text-sm text-xs text-white/60 leading-130">
                {{ $t(item?.title) }}
              </p>
              <div
                class="text-white sm:text-base text-sm font-medium leading-130 flex items-center gap-1.5"
              >
                <p>{{ item?.text }}</p>
                <i v-if="item?.icon">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66699 7.83337L14.1337 2.3667"
                      class="group-hover:stroke-white"
                      stroke="#8EAF9B"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6668 5.0335V1.8335H11.4668"
                      class="group-hover:stroke-white"
                      stroke="#8EAF9B"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.33301 1.8335H5.99967C2.66634 1.8335 1.33301 3.16683 1.33301 6.50016V10.5002C1.33301 13.8335 2.66634 15.1668 5.99967 15.1668H9.99967C13.333 15.1668 14.6663 13.8335 14.6663 10.5002V9.16683"
                      class="group-hover:stroke-white"
                      stroke="#8EAF9B"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-3.5 flex flex-col">
          <p class="text-sm text-white mb-2 font-semibold">
            {{ $t('we_on_social') }}
          </p>
          <div class="flex flex-row md:gap-3 gap-2">
            <a
              target="_blank"
              :href="item.url"
              class="p-2 rounded-full group transition transition-300 hover:bg-[#33573e] bg-[#e8f0fe33]"
              v-for="item in social"
              v-tooltip.top="item.name"
              :key="item.id"
            >
              <img :src="item.src" alt="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="lg:w-[43%] md:w-2/3 w-full relative mx-auto">
        <FormContact
          class="static lg:absolute lg:top-1/2 lg:-translate-y-1/2 translate-y-5"
          @open="toggleModal"
        />
        <Transition name="fade">
          <div
            v-if="showModal"
            @click="onClickOutside()"
            class="fixed top-0 left-0 w-full h-full z-50 bg-modal hidden opacity-0"
            :class="{ '!block opacity-100 overflow-hidden ': showModal }"
          >
            <FormModal
              class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:max-w-[434px] w-[70%] sm:w-full"
              @close="toggleModal"
              :show="showModal"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { formatPhoneNumber } from '@/utils/index'

const contactInfo = ref()

function onClickOutside() {
  document.body.style.overflow = 'auto'
  showModal.value = false
}
const contacts = ref()

const fetchCareContact = () => {
  useApi()
    .$get('care/api/v1/CareContact/')
    .then((res: any) => {
      contacts.value = res
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(async () => {
  function getContactInfo() {
    return new Promise((resolve, reject) => {
      useApi()
        .$get('care/api/v1/landing/ContactInfo/')
        .then((res) => {
          resolve(res)
          contactInfo.value = res
        })
        .catch((err) => {
          reject(err?.data)
          console.log(err)
        })
    })
  }

  await fetchCareContact()
  await getContactInfo()
})
const info = computed(() => {
  return [
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
  ]
})

const social = computed(() => {
  return [
    {
      id: 1,
      url: contacts.value?.instagram,
      src: '/icons/instagram1.svg',
      name: 'Instagram',
    },
    {
      id: 2,
      url: contacts.value?.youtube,
      src: '/icons/youtube1.svg',
      name: 'YouTube',
    },
    {
      id: 3,
      url: contacts.value?.twitter,
      src: '/icons/twitter1.svg',
      name: 'X (Twitter)',
    },
    {
      id: 4,
      url: contacts.value?.telegram,
      name: 'Telegram',
      src: '/icons/telegram1.svg',
    },
  ]
})

const showModal = ref(false)

function toggleModal() {
  if (showModal.value == true) {
    showModal.value = false
  } else {
    showModal.value = true
  }
}
</script>
