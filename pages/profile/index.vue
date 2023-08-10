<template>
  <div class="container sm:mt-6 mt-3 sm:mb-16 mb-4">
    <div class="md:grid flex flex-col grid-cols-12 gap-6">
      <div class="md:col-span-8">
        <CardSaxovat />
        <div class="sm:rounded-28 rounded-2xl bg-white backdrop-filter mt-5">
          <div class="border-b border-gray-300">
            <div class="sm:pt-4 pt-3 sm:px-5 px-4 flex gap-6">
              <button
                v-for="(item, index) in tabs"
                :key="index"
                @click="activate(index)"
                class="text-gray-200 sm:text-base text-sm font-semibold leading-130 cursor-pointer relative h-full pb-2"
                :class="{ '!text-black-100': currentTab === item.id }"
              >
                {{ item.tab }}
                <span
                  v-if="currentTab === item.id"
                  class="absolute -bottom-[0.5px] left-0 w-full h-0.5 bg-green-400 rounded-t-md"
                ></span>
                <span
                  v-if="item.id !== 0"
                  :class="
                    currentTab == item.id
                      ? 'text-green-400 bg-green-100'
                      : 'bg-gray-300 text-gray-400'
                  "
                  class="text-xs font-medium leading-130 transition transition-300 py-0.5 px-1.5 rounded-md"
                >
                  {{
                    index == 1
                      ? posts.length
                      : '' || index == 2
                      ? faqs.length
                      : '' || index == 3
                      ? comments.length
                      : ''
                  }}
                </span>
              </button>
            </div>
          </div>
            <Transition mode="out-in" name="fade">
            <div :key="currentTab">
              <ComponentsAbout v-if="currentTab === 0" />
              <ComponentsPosts :posts="posts" v-if="currentTab === 1" />
              <ComponentsFAQ :faqs="faqs" v-if="currentTab === 2" />
              <ComponentsComments
                :comments="comments"
                v-if="currentTab === 3"
              />
            </div>
          </Transition>
        </div>
        <SectionGenerous />
      </div>
      <div class="md:col-span-4">
        <SectionSideBar />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import ComponentsAbout from '@/pages/profile/components/About.vue'
import ComponentsComments from '@/pages/profile/components/Comments.vue'
import ComponentsFAQ from '@/pages/profile/components/FAQ.vue'
import ComponentsPosts from '@/pages/profile/components/Posts.vue'

const { t } = useI18n()
const route = useRoute()
const currentTab = ref(0)

const comments = [
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
  {
    img: '/images/profile_photo.png',
    name: 'Jasurbek Po‘latov',
    time: '17:23',
    price: 50000000,
    text: 'Пусть малышка скорее выздороит. Будем молиться и надеяться что она выздоровит как можно скорее и проживет долгую, прекрасную жизнь🙏',
  },
]

const faqs = [
  {
    id: 1,
    question: "Yig'ilgan mablag'lar nimaga sarflanadi?",
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 2,
    question:
      'Nima uchun zamonaviy dunyoda hayvonlarning boshpanalariga muhtojmiz?',
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 3,
    question: "Yig'ilgan mablag'lar nimaga sarflanadi?",
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 4,
    question:
      "Men sarmoya kiritsam bo'ladimi va siz agentlar va distribyutorlarni qidiryapsizmi?",
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 5,
    question: 'Qaytarishni talab qilish mumkinmi?',
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 6,
    question: "Yig'ilgan mablag'lar nimaga sarflanadi?",
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 7,
    question:
      "Men sarmoya kiritsam bo'ladimi va siz agentlar va distribyutorlarni qidiryapsizmi?",
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 8,
    question: 'Qaytarishni talab qilish mumkinmi?',
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 9,
    question: "Yig'ilgan mablag'lar nimaga sarflanadi?",
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 10,
    question:
      "Men sarmoya kiritsam bo'ladimi va siz agentlar va distribyutorlarni qidiryapsizmi?",
    answer:
      "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
]

const posts = [
  {
    name: 'Mehrli qo‘llar',
    sphere: 'Ta‘lim',
    logo: '/icons/Logo.svg',
    title: 'Barchangizdan minnatdormiz!',
    text: 'Azizlar, sizdek saxiy insonlar saxovati yordamida biz operatsiya uchun kerakli miqdordagi mablag‘ni yig‘ishga muvaffaq bo‘ldik.',
    img: '/images/Image.png',
    date: '22.11.2022, 22:22',
  },
  {
    name: 'Mehrli qo‘llar',
    sphere: 'Ta‘lim',
    logo: '/icons/Logo.svg',
    title: 'Barchangizdan minnatdormiz!',
    text: 'Azizlar, sizdek saxiy insonlar saxovati yordamida biz operatsiya uchun kerakli miqdordagi mablag‘ni yig‘ishga muvaffaq bo‘ldik.',
    date: '22.11.2022, 22:22',
  },
  {
    name: 'Mehrli qo‘llar',
    sphere: 'Ta‘lim',
    logo: '/icons/Logo.svg',
    title: 'Barchangizdan minnatdormiz!',
    text: 'Azizlar, sizdek saxiy insonlar saxovati yordamida biz operatsiya uchun kerakli miqdordagi mablag‘ni yig‘ishga muvaffaq bo‘ldik.',
    img: '/images/Image.png',
    date: '22.11.2022, 22:22',
  },
]

const tabs = [
  {
    id: 0,
    tab: 'Saxovat haqida',
    current: true,
  },
  {
    id: 1,
    tab: 'Postlar',
    current: false,
  },
  {
    id: 2,
    tab: 'T.B.S',
    current: false,
  },
  {
    id: 3,
    tab: 'Izohlar',
    current: false,
  },
]

onMounted(() => {
  console.log(route.path)
})

function activate(index) {
  currentTab.value = index
}
</script>
<style scoped>
p {
  transition: color 0.3s ease-in-out;
}

p:not(.text-black-100):hover {
  color: #6b7280;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
