<template>
  <section>
    <div
        class="border-solid border-gray-200 border-[1px] w-full mb-[40px]"
    ></div>
    <div class="w-full">
      <logo class="justify-center mb-[25px]"/>
      <div class="flex justify-center sm:text-[16px] gap-2 mb-[14px] sm:gap-6">
        <NuxtLink to="#home" class="text-[14px] sm:text-[15px] font-semibold text-dark hover:text-pink">Home</NuxtLink>
        <NuxtLink to="#addvertise" class="text-[14px] sm:text-[15px] font-semibold text-dark hover:text-pink">Advertise</NuxtLink>
        <NuxtLink to="#pricing" class="text-[14px] sm:text-[15px] font-semibold text-dark hover:text-pink">Supports</NuxtLink>
        <NuxtLink to="#contact" class="text-[14px] sm:text-[15px] font-semibold text-dark hover:text-pink">Contact</NuxtLink>
      </div>
      <p class="text-center text-[13px] sm:text-[15px] mb-20">Copyright 2019 By Redq, Inc</p>
    </div>
  </section>
</template>
<script setup lang="ts">
import Logo from "~/components/Base/extra/logo.vue";
</script>