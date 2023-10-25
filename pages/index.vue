<template>
  <div class="h-full">
    <!--    <SectionComingSoon />-->
    <SectionMainIntro class="mb-7 mt-6" />
    <SectionProjectAim id="about" class="lg:mb-12 md:mb-8 mb-6" />
    <SectionMainCards id="afzalliklar" class="lg:pb-10 md:pb-8 pb-6" />
    <!-- <SectionProjectsBlock class="my-8 md:my-16" /> -->
    <SectionAppBanner id="ilova" />
    <SectionPartners id="fonds" @scroll="scrollToSection()" class="mb-10" />
    <SectionContactUs id="contact" class="mb-[96px]" />
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'

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

definePageMeta({
  layout: 'custom',
})
</script>
