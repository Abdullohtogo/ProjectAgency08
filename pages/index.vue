<template>
  <div class="h-full">
    <MainIntro class="mb-7 mt-6" />
    <MainProjectAim id="about" class="lg:mb-12 md:mb-8 mb-6" />
    <div class="md:mx-11 mx-5 grid lg:grid-cols-3 md:grid-cols-2 flex-wrap gap-7">
      <MainCard
          v-for="card in cards"
          :card="card" :key="card.id"
          id="afzalliklar"
          class="lg:pb-10 md:pb-8 pb-6" />
    </div>

    <!-- <MainProjectsBlock  class="my-8 md:my-16" /> -->
    <WidgetAppBanner id="ilova" />
    <MainPartners id="fonds" @scroll="scrollToSection()" class="mb-10" />
    <MainContactUs id="contact" class="mb-[96px]" />

  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'custom',
})
const cards = [
  {
    id: 1,
    title: 'realibility',
    text: 'online_platfor_build_for',
    src: '/images/circle-lock.png',
    link: '/',
  },
  {
    id: 2,
    title: 'transparency',
    text: 'online_platfor_build_for',
    link: '/',
    src: '/images/circle-search.png',
  },
  {
    id: 3,
    title: 'simplicity',
    text: 'online_platfor_build_for',
    src: '/images/circle-heart.png',
    link: '/',
  },
]

function scrollToSection() {
  const section = document.getElementById('contact')

  if (!section) {
    return
  }

  section.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'center',
  })
}
</script>
