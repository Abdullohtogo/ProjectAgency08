<template>
  <div
      class="grid w-full items-start gap-y-2 gap-x-4 mt-4"
  >
    <div
        v-for="(item, index) in faqs"
        :key="index"
        class="group transition-300 col-span-2 md:col-span-1 rounded-xl bg-gray-800 mb-4"
        :class="[{'bg-white border border-green-400': selectedItem === item.id}]"
    >
      <div
          class="flex items-center justify-between cursor-pointer py-[13px] md:py-[15px] px-5"
          @click="openItem(item.id)"
      >
        <h4
            class="font-semibold leading-140 text-xl text-black-200 transition-300 group-hover:text-purple line-clamp-2"
        >
          {{ item?.question }}
        </h4>
        <div class="ml-4">
          <img src="/icons/arrow-down.svg" alt=""
               :class="{'rotate-180 ease-in-out': selectedItem === item.id}"
          >
        </div>
      </div>

      <CollapseTransition>
        <div
            v-if="selectedItem === item.id"
            class="p-4 pt-0"
        >
          <p class="text-black-200 text-sm leading-140">
            {{ item?.answer }}
          </p>
        </div>
      </CollapseTransition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

const faqs = [
  {
    id: 1,
    question: "Yig'ilgan mablag'lar nimaga sarflanadi?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 2,
    question: "Nima uchun zamonaviy dunyoda hayvonlarning boshpanalariga muhtojmiz?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 3,
    question: "Yig'ilgan mablag'lar nimaga sarflanadi?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 4,
    question: "Men sarmoya kiritsam bo'ladimi va siz agentlar va distribyutorlarni qidiryapsizmi?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 5,
    question: "Qaytarishni talab qilish mumkinmi?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 6,
    question: "Yig'ilgan mablag'lar nimaga sarflanadi?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 7,
    question: "Men sarmoya kiritsam bo'ladimi va siz agentlar va distribyutorlarni qidiryapsizmi?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 8,
    question: "Qaytarishni talab qilish mumkinmi?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 9,
    question: "Yig'ilgan mablag'lar nimaga sarflanadi?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
  {
    id: 10,
    question: "Men sarmoya kiritsam bo'ladimi va siz agentlar va distribyutorlarni qidiryapsizmi?",
    answer: "Boshpana hayvonlarni himoya qilishning asosiy tarkibiy qismlaridan biri bo'lib, to'rtta asosiy funktsiyani bajaradi: hayvonga tezkor yordam va g'amxo'rlik, shu jumladan veterinariya yordami yoki evtanaziya orqali azob-uqubatlarni engillashtirish; eski yoki yangi egasini darhol topa olmaydigan hayvonga uzoq muddatli g'amxo'rlik",
  },
]
const selectedItem = ref(0)

const openItem = (id: number) => {
  if (selectedItem.value === id) {
    selectedItem.value = 0
    return
  }
  selectedItem.value = id
}
</script>
