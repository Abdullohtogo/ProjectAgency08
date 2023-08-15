<template>
  <SectionMainIntro class="mb-7 mt-6" />
  <SectionProjectAim class="lg:mb-12 md:mb-8 mb-6" />
  <SectionMainCards class="lg:mb-10 md:mb-8 mb-6" />
  <SectionAppBanner />
  <SectionPartners @scroll="scrollToSection()" class="mb-10" />
  <SectionContactUs id="mySection" class="mb-[96px]" />
</template>
<script lang="ts" setup>
function scrollToSection() {
  const section = document.getElementById('mySection')
  section.scrollIntoView({ behavior: 'smooth' })
}
</script>
