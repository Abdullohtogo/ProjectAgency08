<template>
  <div
      class="bg-gradient-to-r from-app-banner-1 to-app-banner-2 md:mx-11 mx-5 rounded-40"
  >
    <div class="container flex justify-between">
      <div class="my-16">
        <h3 class="text-3xl text-white font-semibold">Bog‘lanish usullari</h3>
        <p class="mt-3 text-white/60 max-w-[425px]">
          Biz bilan quyida keltirilgan yo‘llar orqali aloqaga chiqishingiz
          mumkin
        </p>
        <div class="flex-col gap-2">
          <a
              :href="item?.url"
              target="_blank"
              class="mt-6 p-3 flex gap-2 rounded-40 border border-white/20"
              v-for="item in info"
              :key="item?.id"
          >
            <img :src="item?.src" alt="icon"/>
            <div class="flex flex-col gap-1">
              <p class="text-sm text-white/60">{{ item?.title }}</p>
              <div class="text-white font-medium flex gap-1.5">
                <p>{{ item?.text }}</p>
                <img :src="item?.icon" alt="" v-if="item?.icon"/>
              </div>
            </div>
          </a>
        </div>
        <div class="mt-3.5 flex flex-col gap-2">
          <p class="text-sm text-white font-semibold">
            Biz ijtimoiy tarmoqlarda
          </p>
          <div class="flex gap-3">
            <a
                :href="item.url"
                class="p-2 rounded-full bg-[#e8f0fe33]"
                v-for="item in social"
                :key="item.id"
            >
              <img :src="item.src" alt="social-icon"/>
            </a>
          </div>
        </div>
      </div>
      <div class="w-[43%] relative">
        <FormContact class="absolute top-1/2 -translate-y-1/2"
                     @open="toggleModal"
        />
        <div class="fixed top-0 left-0 w-full h-full z-50 bg-modal hidden opacity-0"
             :class="{'!block opacity-100 overflow-hidden ': showModal}">
          <FormModal class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-[434px]"
                     v-show="showModal"
                     @close="toggleModal"
                     :show="showModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'


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
    url: 'tel:+998 71 200 7007',
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
    url: 'instagram.com',
    src: '/icons/instagram1.svg',
  },
  {
    id: 2,
    url: 'youtube.com',
    src: '/icons/youtube1.svg',
  },
  {
    id: 3,
    url: 'twitter.com',
    src: '/icons/twitter1.svg',
  },
  {
    id: 4,
    url: 'telegram.com',
    src: '/icons/telegram1.svg',
  },
]

const showModal = ref(false);

function toggleModal() {
  showModal.value = !showModal.value
  console.log(showModal.value)
}

</script>

