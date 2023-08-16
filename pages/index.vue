<template>
  <SectionMainIntro class="mb-7 mt-6" />
  <SectionProjectAim id="about" class="lg:mb-12 md:mb-8 mb-6" />
  <SectionMainCards id="afzalliklar" class="lg:mb-10 md:mb-8 mb-6" />
  <SectionAppBanner id="ilova" />
  <SectionPartners id="fonds" @scroll="scrollToSection()" class="mb-10" />
  <SectionContactUs id="contact" class="mb-[96px]" />
  <div></div>
</template>
<script lang="ts" setup>
function scrollToSection() {
  const section = document.getElementById('contact')
  section.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'center',
  })
}
</script>
