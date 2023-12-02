<template>
  <div>
    <Intro/>
    <div>
      <FeatureOfProducts/>
      <Service/>
      <UsefulFeatures/>
      <CoreFeatures/>
    </div>
    <Functions/>
    <div>
      <Pricing/>
      <TeamMembers/>
      <Testimonials/>
      <OurBlog/>
      <SubscribeBlog/>
      <Blogs/>
    </div>
  </div>
<!--  <Footer/>-->
</template>

<script lang="ts" setup>

import Modal from "~/components/Base/Extra/Modal.vue";

definePageMeta({
  layout:'custom',
})
</script>
