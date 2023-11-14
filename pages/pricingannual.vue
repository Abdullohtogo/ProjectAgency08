<template>
  <section class="mt-[150px]">
    <div>
      <p class="uppercase text-pinkRed text-[14px] text-center font-semibold mb-[5px]" id="pricing">Pricing plan</p>
      <h1 class="font-bold text-[36px] text-center mb-[30px]">Amazing useful features</h1>
      <div class="w-[302px] h-[62px] bg-gray-400 rounded-md mx-auto mb-[50px]">
        <button class="w-[146px] h-[50px] bg-white m-[6px] rounded-md">Monthly Plan</button>
        <button class="ml-5">Annual Plan</button>
      </div>
      <div class="grid lg:grid-cols-3 gap-10 xl:gap-10 lg:gap-5 sm:mx-auto justify-center mx-[1.5px]">
        <div class="sm:w-[350px] w-[300px] lg:w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md lg:mb-[180px] hover:shadow-xl transition-all">
          <div class="m-[45px]">
            <h3 class="text-[22px] font-bold">Free Plan</h3>
            <p class="text-[16px] mb-[40px]">For Small teams or office</p>
            <div class="flex flex-col gap-5">
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">Drag & Drop Builder</p>
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">100's of Templates</p>
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">Blog Support Tools</p>
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">eCommerce Store</p>
            </div>
            <div class="mt-[35px] mx-auto w-[210px]">
              <h3 class="font-bold text-[30px] text-center">$0<span class="text-[16px] font-normal">/Monthly</span></h3>
              <MainButton text="Start free trail" class="ml-7 mt-[35px]"/>
            </div>
          </div>
        </div>
        <div class="sm:w-[350px] lg:w-[300px] w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md hover:shadow-xl transition-all">
          <div class="m-[45px]">
            <h3 class="text-[22px] font-bold">Business King</h3>
            <p class="text-[16px] mb-[40px]">For Enterprise business</p>
            <div class="flex flex-col gap-5">
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">Drag & Drop Builder</p>
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">100's of Templates</p>
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">Blog Support Tools</p>
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">eCommerce Store</p>
            </div>
            <div class="mt-[35px] flex flex-col mx-auto w-[210px]">
              <h3 class="font-bold text-[30px] text-center">$0<span class="text-[16px] font-normal">/Monthly</span></h3>
              <MainButton text="Start free trail" class="ml-7 mt-[35px]"/>
              <NuxtLink to="#" class="mt-[15px] text-blue text-center">Or Start 14 Days trail</NuxtLink>
            </div>
          </div>
        </div>
        <div class="sm:w-[350px] lg:w-[300px] w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md mb-[180px] hover:shadow-xl transition-all">
          <p class="bg-yellow text-white flex gap-1 w-[118px] h-[32px] text-[15px] text-center absolute rounded-md -translate-y-4 translate-x-8"><img src="../../public/Icons/whiteLogo.svg" class="w-[18px] ml-2" alt=""><span class="mt-1">Suggested</span></p>
          <div class="m-[45px]">
            <h3 class="text-[22px] font-bold">Pro Master</h3>
            <p class="text-[16px] mb-[40px]">For pro level developers</p>
            <div class="flex flex-col gap-5">
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">Drag & Drop Builder</p>
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">100's of Templates</p>
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">Blog Support Tools</p>
              <p class="flex gap-3"><img src="/Icons/tick.svg" alt="">eCommerce Store</p>
            </div>
            <div class="mt-[35px] mx-auto w-[210px] flex flex-col">
              <h3 class="font-bold text-[30px] text-center">$0<span class="text-[16px] font-normal">/Monthly</span></h3>
              <MainButton text="Start free trail" class="ml-7 mt-[35px]"/>
              <NuxtLink to="#" class="mt-[15px] text-blue text-center">Or Start 14 Days trail</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import MainButton from "~/components/Base/Buttons/MainButton.vue";

  definePageMeta({
    layout:'pricing-plan-layout',
  })
</script>