<template>
  <div>
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

<script setup lang="ts">
import {computed} from 'vue';

import {advantageInfo} from "~/data/advantageCard";
import ClibBoard from "~/components/Widget/ClibBoard.vue";

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

const cards = computed(() => advantageInfo())
</script>

<style scoped>

</style>