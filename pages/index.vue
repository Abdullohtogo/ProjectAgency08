<template>
  <div>
    <IntroPage/>
    <div>
      <FeatureOfProductsPage/>
      <ServicePage/>
      <UsefulFeaturesPage/>
      <CoreFeatures/>
    </div>
    <FunctionsPage/>
    <div>
      <PricingPlan/>
      <TeamMembersPage/>
      <TestimonialsPage/>
      <SubscribeBlogPage/>
      <BlogsPage/>
    </div>
  </div>
<!--  <Footer/>-->
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'custom',
})
</script>
