<template>
  <SectionMainIntro class="mb-7 mt-6" />
  <SectionProjectAim class="mb-12" />
  <SectionMainCards class="mb-10" />
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
