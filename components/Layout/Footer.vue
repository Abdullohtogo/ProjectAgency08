<template>
  <div
    class="sm:rounded-36 rounded-2xl border-4 border-white md:mx-11 mx-5 bg-white md:pt-10 sm:pt-9 pt-8 md:mb-10 sm:mb-8 mb-4 overflow-hidden"
  >
    <div class="container w-full">
      <div
        class="flex w-full justify-between pb-4 lg:pb-0 flex-col md:flex-row"
      >
        <div class="">
          <router-link to="/">
            <img src="@/public/logo.svg" alt="" />
          </router-link>
          <p class="md:mt-5 mt-3 text-gray-200 max-w-[497px] leading-130">
            {{ $t('saxovat_terms') }}
          </p>
          <div
            class="flex lg:flex-row flex-col md:gap-5 gap-3 lg:mt-[56px] md:mt-10 sm:mt-6 mt-3 lg:mb-10 md:mb-8 sm:mb-6 mb-3 lg:items-end"
          >
            <div class="">
              <img src="@/public/icons/QR.svg" class="qr" alt="qr" />
            </div>
            <div>
              <p
                class="text-black-100 font-medium sm:text-xl text-lg leading-130 mb-2"
              >
                {{ $t('ez_usage_app') }}
              </p>
              <div class="flex gap-3">
                <a
                  target="_blank"
                  :href="appstore"
                  class="hover:opacity-80 transition-all duration-300"
                >
                  <img
                    src="@/public/icons/AppStore-footer.svg"
                    alt="appstore"
                  />
                </a>
                <a
                  target="_blank"
                  :href="playstore"
                  class="hover:opacity-80 transition-all duration-300"
                >
                  <img
                    src="@/public/icons/PlayMarket-footer.svg"
                    alt="playmarket"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex lg:flex-row md:flex-row sm:flex-row flex-col lg:justify-between md:justify-normal sm:justify-between xl:gap-[125px] gap-5"
        >
          <div>
            <p
              class="text-green-500 sm:text-xl text-lg leading-130 font-medium"
            >
              {{ $t('main') }}
            </p>
            <ul class="mt-3 flex flex-col gap-3">
              <li
                v-for="item in main"
                :key="item.id"
                class="text-black-100 hover:text-green-300 transition-all duration-300 ease-in-out leading-130"
              >
                <a v-if="item.id == 3" target="_blank" :href="item.url">{{
                  $t(item.text)
                }}</a>
                <button @click="scrollTo(item.url)">{{ $t(item.text) }}</button>
              </li>
            </ul>
          </div>
          <div>
            <p
              class="text-green-500 sm:text-xl text-lg leading-130 font-medium"
            >
              {{ $t('for_contact') }}
            </p>
            <ul class="mt-3 flex flex-col gap-3">
              <li
                v-for="item in contact"
                :key="item.id"
                class="flex items-center group gap-2"
              >
                <span
                  :class="`icon-${item.type}`"
                  class="text-xl text-gray-400 transition transition-300 group-hover:text-green-400"
                />
                <a
                  :href="item.url"
                  :target="item.id == 3 ? '_blank' : ''"
                  class="text-black-100 transition-all duration-300 ease-in-out leading-130"
                  >{{ item.text }}</a
                >
              </li>
            </ul>
            <div class="md:mt-7 sm:mt-5 mt-3">
              <p
                class="text-green-500 sm:text-xl text-lg leading-130 font-medium"
              >
                {{ $t('check_us_on_socials') }}
              </p>
              <div class="mt-4 flex gap-3">
                <a
                  :href="item.url"
                  target="_blank"
                  v-for="item in share"
                  :key="item.id"
                  v-tooltip.top="item?.name"
                  class="hover:opacity-80 transition-all duration-300"
                >
                  <img :src="item.src" alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-300">
      <div class="container">
        <div
          class="sm:py-5 py-3 border-b-3 border-white flex md:justify-between justify-center items-center md:items-start md:flex-row flex-col md:gap-0 gap-2 sm:px-4 px-1"
        >
          <p class="text-black-100 text-center text-sm leading-130">
            © 2023 Hissa Inc. {{ $t('everything_reserved') }}
          </p>
          <ul class="flex gap-3 flexx-wrap sm:flex-nowrap">
            <li v-for="item in links" :key="item.id">
              <a
                :href="item.url"
                class="text-black-100 hover:text-green-300 text-sm transition-all duration-300 ease-in-out leading-130"
              >
                {{ $t(item.text) }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCareContact } from '@/composables/useCareContact'
import { resolveDirective } from 'nuxt/dist/app/compat/capi'
import { formatPhoneNumber } from '@/utils/index'

const appstore = ref(import.meta.env.VITE_APP_APP_STORE)
const playstore = ref(import.meta.env.VITE_APP_PLAY_STORE)
onMounted(() => {
  function fetchCareContact() {
    return new Promise((resolve, reject) => {
      useApi()
        .$get('care/api/v1/CareContact/')
        .then((res: any) => {
          contacts.value = res
          resolve(res)
        })
        .catch((err) => {
          reject(err?.data)
          console.log(err)
        })
    })
  }

  fetchCareContact()
})
const contacts = ref()
const businePanel = import.meta.env.VITE_APP_BUSINESS_PANEL
const router = useRouter()
const route = useRoute()
function scrollTo(url: string) {
  if (route.path !== '/') {
    router.push('/').finally(() => {
      const section = document.getElementById(url)
      setTimeout(() => {
        section?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'center',
        })
      }, 100)
    })
  } else {
    const section = document.getElementById(url)
    section?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'center',
    })
  }
}
const main = [
  {
    id: 1,
    text: 'about_us',
    url: 'about',
  },
  {
    id: 2,
    text: 'advantages',
    url: 'afzalliklar',
  },
  {
    id: 3,
    text: 'for_founds',
    url: businePanel,
  },
  {
    id: 5,
    text: 'for_contact',
    url: 'contact',
  },
]

const contact = computed(() => {
  return [
    {
      id: 1,
      text: formatPhoneNumber(contacts.value?.phone),
      url: `tel: ${contacts.value?.phone}`,
      type: 'call',
    },
    {
      id: 2,
      text: 'info@uic.group',
      url: 'mailto: info@uic.group',
      type: 'sms',
    },
    {
      id: 3,
      text: "24 Oybek ko'chasi, Tashkent, Узбекистан",
      url: 'https://goo.gl/maps/Gn5ieiks1NbMdLQU6',
      src: '/icons/location.svg',
      type: 'location',
    },
  ]
})

const share = computed(() => {
  return [
    {
      id: 1,
      url: contacts.value?.telegram,
      name: 'Telegram',
      src: '/icons/telegram.svg',
    },
    {
      id: 2,
      url: contacts.value?.twitter,
      src: '/icons/twitter.svg',
      name: 'X (Twitter)',
    },
    {
      id: 3,
      url: contacts.value?.youtube,
      src: '/icons/youtube.svg',
      name: 'YouTube',
    },
    {
      id: 4,
      url: contacts.value?.instagram,
      src: '/icons/instagram.svg',
      name: 'Instagram',
    },
  ]
})
const userPrivacy = ref(
  `${import.meta.env.VITE_APP_ID_URL}/help-center/privacy-policy`
)

const links = reactive([
  {
    id: 1,
    text: 'use_terms',
    url: userPrivacy,
  },
])
</script>

<style>
.qr {
  box-shadow: 0px 4.279999732971191px 20px 0px rgba(39, 164, 74, 0.3);
}
</style>
