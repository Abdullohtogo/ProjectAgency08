<template>
  <div class="fixed w-full bg-white z-30 transition-all">
    <div class="flex container mx-auto">
      <div class="w-full mt-[25px] mb-[25px] justify-between flex">
        <logo/>
        <div class="mt-3 gap-7 lg:flex hidden">
          <NuxtLink to="#home" class="text-[16px] text-darkBlue">Home</NuxtLink>
          <NuxtLink to="#" class="text-[16px] text-darkBlue">Advertise</NuxtLink>
          <NuxtLink to="#pricing" class="text-[16px] text-darkBlue">Support</NuxtLink>
          <NuxtLink to="#contact" class="text-[16px] text-darkBlue">Contact</NuxtLink>
        </div>
        <Button text="Qozi"/>
      </div>
      <button class="lg:hidden text-darkBlue flex"><img src="/Icons/bars.svg" class="mt-7 ml-1 w-10 h-10" alt=""></button>
    </div>
  </div>
<!--  <div class="lg:hidden flex flex-col mt-6 w-full h-full bg-white " >-->
<!--    <NuxtLink to="#" class="text-[16px] text-darkBlue text-center w-full hover:bg-gray-100 transition-all rounded-2xl h-20"><div class="h-6"></div>Home</NuxtLink>-->
<!--    <NuxtLink to="#" class="text-[16px] text-darkBlue text-center w-full hover:bg-gray-100 transition-all rounded-2xl h-20"><div class="h-6"></div>Advertise</NuxtLink>-->
<!--    <NuxtLink to="#" class="text-[16px] text-darkBlue text-center w-full hover:bg-gray-100 transition-all rounded-2xl h-20"><div class="h-6"></div>Support</NuxtLink>-->
<!--    <NuxtLink to="#" class="text-[16px] text-darkBlue text-center w-full hover:bg-gray-100 transition-all rounded-2xl h-20"><div class="h-6"></div>Contact</NuxtLink>-->
<!--  </div>-->
</template>
<script setup lang="js">
import Logo from "~/components/Base/extra/logo.vue";
import Button from "~/components/Base/Buttons/Button.vue";


</script>
