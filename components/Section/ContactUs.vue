<template>
  <div class="bg-gradient-to-r from-app-banner-1 to-app-banner-2 mx-11 rounded-40">
    <div class="container flex justify-between relative">
      <div class="my-16">
        <h3 class="text-3xl text-white font-semibold">Bog‘lanish usullari</h3>
        <p class="mt-3 text-white/60">Biz bilan quyida keltirilgan yo‘llar orqali aloqaga chiqishingiz mumkin</p>
        <div class="flex-col gap-2">
          <router-link :to="item?.url" target="_blank" class="mt-6 p-3 flex gap-2 rounded-40 border border-white/20"
                       v-for="item in info" :key="item?.id"
          >
            <img :src="item?.src" alt="icon"/>
            <div class="flex flex-col gap-1">
              <p class="text-sm text-white/60">{{ item?.title }}</p>
              <div class="text-white font-medium flex gap-1.5" target="_blank">
                <p>{{ item?.text }}</p>
                <img :src="item?.icon" alt="" v-if="item?.icon"/>
              </div>
            </div>
          </router-link>
        </div>
        <div class="mt-3.5 flex flex-col gap-2">
          <p class="text-sm text-white font-semibold">
            Biz ijtimoiy tarmoqlarda
          </p>
          <div class="flex gap-3">
            <router-link :to="item.url" class="p-2 rounded-full bg-[#e8f0fe33]" v-for="item in social" :key="item.id">
              <img :src="item.src" alt="social-icon"/>
            </router-link>
          </div>
        </div>
      </div>
      <div class="absolute right-0 -top-[5%] w-[43%]">
        <ContactForm/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ContactForm from "~/components/Form/ContactForm.vue";

const info = [
  {
    id: 1,
    src: '/icons/location1.svg',
    title: 'Manzilimiz',
    text: 'Oybek ko‘chasi 24-uy, Toshkent, O‘zbekiston',
    icon: '/icons/openin.svg',
    url: 'https://goo.gl/maps/Gn5ieiks1NbMdLQU6',
  },
  {
    id: 2,
    src: '/icons/phone.svg',
    title: 'Telefon raqamimiz:',
    text: '+998 71 200 7007',
    url: 'tel:+998 71 200 7007'
  },
  {
    id: 3,
    src: '/icons/email.svg',
    title: 'Elektron manzilimiz:',
    text: 'info@uic.group',
    url: 'mailto: info@uic.group',
  },
]

const social = [
  {
    id: 1,
    url: '/',
    src: '/icons/instagram1.svg',
  },
  {
    id: 2,
    url: '/',
    src: '/icons/youtube1.svg',
  },
  {
    id: 3,
    url: '/',
    src: '/icons/twitter1.svg',
  },
  {
    id: 4,
    url: '/',
    src: '/icons/telegram1.svg',
  },
]
</script>