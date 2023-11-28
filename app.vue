<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>