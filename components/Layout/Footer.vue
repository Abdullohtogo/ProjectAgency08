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
            Saxovat amallari biplan shug‘ullanatigan fondlarni va ularning
            yaxshilik yo‘lida tashkil qilayotgan loyihalarini kuzatib boring.
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
                Ilova yanada qulayroq
              </p>
              <div class="flex gap-3">
                <a
                  href="/"
                  class="hover:opacity-80 transition-all duration-300"
                >
                  <img
                    src="@/public/icons/AppStore-footer.svg"
                    alt="appstore"
                  />
                </a>
                <a
                  href="/"
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
              Asosiy
            </p>
            <ul class="mt-3 flex flex-col gap-3">
              <li
                v-for="item in main"
                :key="item.id"
                class="text-black-100 hover:text-green-300 transition-all duration-300 ease-in-out leading-130"
              >
                <router-link :to="item.url">{{ item.text }}</router-link>
              </li>
            </ul>
          </div>
          <div>
            <p
              class="text-green-500 sm:text-xl text-lg leading-130 font-medium"
            >
              Bog‘lanish
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
                  class="text-black-100 transition-all duration-300 ease-in-out leading-130"
                  >{{ item.text }}</a
                >
              </li>
            </ul>
            <div class="md:mt-7 sm:mt-5 mt-3">
              <p
                class="text-green-500 sm:text-xl text-lg leading-130 font-medium"
              >
                Bizni ijtimoiy tarmoqlarda kuzatib boring
              </p>
              <div class="mt-4 flex gap-3">
                <a
                  :href="item.url"
                  v-for="item in share"
                  :key="item.id"
                  v-tooltip.bottom="'Facebook'"
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
            © 2023 Hissa Inc. Barcha huquqlar himoyalangan.
          </p>
          <pre>{{ contacts }}</pre>
          <ul class="flex gap-3 flexx-wrap sm:flex-nowrap">
            <li v-for="item in links" :key="item.id">
              <router-link
                :to="item.url"
                class="text-black-100 hover:text-green-300 text-sm transition-all duration-300 ease-in-out leading-130"
              >
                {{ item.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCareContact } from '@/composables/useCareContact'

const { loading, contacts, getContact } = useCareContact
const main = [
  {
    id: 1,
    text: 'Biz haqimizda',
    url: '/profile',
  },
  {
    id: 2,
    text: 'Afzalliklar',
    url: '/',
  },
  {
    id: 3,
    text: 'Ilova',
    url: '/',
  },
  {
    id: 4,
    text: 'Fondlar uchun',
    url: '/',
  },
  {
    id: 5,
    text: 'Bog‘lanish',
    url: '/',
  },
]

const contact = [
  {
    id: 1,
    text: '+998 71 200 7007',
    url: 'tel:+998 71 200 7007',
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

const share = [
  {
    id: 1,
    url: '',
    name: 'telegram',
    src: '/icons/telegram.svg',
  },
  {
    id: 2,
    url: '',
    src: '/icons/twitter.svg',
    name: 'twitter',
  },
  {
    id: 3,
    url: '',
    src: '/icons/youtube.svg',
    name: 'youtube',
  },
  {
    id: 4,
    url: '',
    src: '/icons/instagram.svg',
    name: 'instagram',
  },
]

const links = [
  {
    id: 1,
    text: 'Reklama',
    url: '/',
  },
  {
    id: 2,
    text: 'Maxfiylik',
    url: '/',
  },
  {
    id: 3,
    text: 'Foydalanish qoidalari',
    url: '/',
  },
]
</script>

<style>
.qr {
  box-shadow: 0px 4.279999732971191px 20px 0px rgba(39, 164, 74, 0.3);
}
</style>
