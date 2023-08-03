<template>
  <div class="rounded-36 border-4 border-white mx-11 bg-white pt-10 mb-10 overflow-hidden">
    <div class="container">
      <div class="flex">
        <div class="basis-1/2">
          <router-link to="/">
            <img src="@/public/logo.svg" alt=""/>
          </router-link>
          <p class="mt-5 text-gray-200">
            Saxovat amallari bilan shug‘ullanatigan fondlarni va ularning yaxshilik yo‘lida tashkil qilayotgan
            loyihalarini kuzatib boring.
          </p>
          <div class="flex gap-5 mt-[56px] mb-10 items-end">
            <div class="qr">
              <img src="@/public/icons/QR.svg" alt="qr">
            </div>
            <div>
              <p class="text-black-100 font-medium text-xl mb-2">Ilova yanada qulayroq</p>
              <div class="flex gap-3">
                <router-link to="/">
                  <img src="@/public/icons/AppStore-footer.svg" alt="appstore"/>
                </router-link>
                <router-link to="/">
                  <img src="@/public/icons/PlayMarket-footer.svg" alt="playmarket"/>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between gap-[125px]">
          <div>
            <p class="text-green-500 text-xl font-medium">Asosiy</p>
            <ul class="mt-3 flex flex-col gap-3">
              <li v-for="item in main" :key="item.id"
                  class="text-black-100 hover:text-green-300 transition-all duration-300 ease-in-out">
                <router-link :to="item.url">{{ item.text }}</router-link>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-green-500 text-xl font-medium">Bog‘lanish</p>
            <ul class="mt-3 flex flex-col gap-3">
              <li v-for="item in contact" :key="item.id"
                  class="flex gap-2">
                <img :src="item.src" alt="icon">
                <router-link :to="item.url"
                   class="text-black-100 hover:text-green-300 transition-all duration-300 ease-in-out">{{
                    item.text
                  }}</router-link>
              </li>
            </ul>
            <div class="mt-7">
              <p class="text-green-500 text-xl font-medium">
                Bizni ijtimoiy tarmoqlarda kuzatib boring
              </p>
              <div class="mt-4 flex gap-3">
                <router-link :to="item.url" v-for="item in share" :key="item.id">
                  <img :src="item.src" alt="icon"/>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-300">
      <div class="container">
        <div class=" py-5 border-b-3 border-white flex justify-between">
          <p class="text-black-100">
            © 2023 Hissa Inc. Barcha huquqlar himoyalangan.
          </p>
          <ul class="flex gap-3">
            <li v-for="item in links" :key="item.id">
              <router-link :to="item.url"
                 class="text-black-100 hover:text-green-300 transition-all duration-300 ease-in-out">{{ item.text }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const main = [
  {
    id: 1,
    text: 'Biz haqimizda',
    url: '/about'
  },
  {
    id: 2,
    text: 'Afzalliklar',
    url: '/'
  },
  {
    id: 3,
    text: 'Ilova',
    url: '/'
  },
  {
    id: 4,
    text: 'Fondlar uchun',
    url: '/'
  },
  {
    id: 5,
    text: 'Bog‘lanish',
    url: '/'
  },
]

const contact = [
  {
    id: 1,
    text: '+998 71 200 7007',
    url: 'tel:+998 71 200 7007',
    src: '/icons/call.svg'
  },
  {
    id: 2,
    text: 'info@uic.group',
    url: 'mailto: info@uic.group',
    src: '/icons/sms.svg'
  },
  {
    id: 3,
    text: '24 Oybek ko\'chasi, Tashkent, Узбекистан',
    url: 'https://goo.gl/maps/Gn5ieiks1NbMdLQU6',
    src: '/icons/location.svg'
  },
]

const share = [
  {
    id: 1,
    url: '',
    src: '/icons/telegram.svg',
  },
  {
    id: 2,
    url: '',
    src: '/icons/twitter.svg',
  },
  {
    id: 3,
    url: '',
    src: '/icons/youtube.svg',
  },
  {
    id: 4,
    url: '',
    src: '/icons/instagram.svg',
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
  box-shadow: 0px 4.279999732971191px 20px 0px rgba(39, 164, 74, 0.30);
}
</style>