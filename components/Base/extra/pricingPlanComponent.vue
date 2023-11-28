<template>
  <div
    class="sm:w-[350px] lg:w-[300px] w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md mb-[180px] hover:shadow-xl transition-all"
  >
<!--    <p-->
<!--      class="bg-yellow text-white gap-1 w-[118px] h-[32px] text-[15px] text-center absolute rounded-md -translate-y-4 translate-x-8"-->
<!--    >-->
<!--      <img-->
<!--        src="/icons/whiteLogo.svg"-->
<!--        class="w-[18px] ml-2"-->
<!--        alt=""-->
<!--      /><span class="mt-1">Suggested</span>-->
<!--    </p>-->
    <div class="m-[45px]">
      <h3 class="text-[22px] font-bold">{{ title }}</h3>
      <p class="text-[16px] mb-[40px]">{{desc}}</p>
      <div class="flex flex-col gap-5">
        <p class="flex gap-3">
          <img src="/icons/tick.svg" alt="" />Drag & Drop Builder
        </p>
        <p class="flex gap-3">
          <img src="/icons/tick.svg" alt="" />100's of Templates
        </p>
        <p class="flex gap-3">
          <img src="/icons/tick.svg" alt="" />Blog Support Tools
        </p>
        <p class="flex gap-3">
          <img src="/icons/tick.svg" alt="" />eCommerce Store
        </p>
      </div>
      <div class="mt-[35px] mx-auto w-[210px] flex flex-col">
        <h3 class="font-bold text-[30px] text-center">
          {{price}}<span class="text-[16px] font-normal">{{priceType}}</span>
        </h3>
        <div class="mx-7 md:mx-0">
          <BaseButtonsMainButton
            text="Start free trail"
            class="ml-7 mx-auto mt-[35px]"
          />
        </div>
<!--        <NuxtLink to="#" class="mt-[15px] text-blue text-center {{display}}"-->
<!--        >Or Start 14 Days trail-->
<!--        </NuxtLink>-->
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: 'Button',
  },
  desc:{
    type:String,
    default: 'Title'
  },
  price:{
    type:String,
    default: 'Price'
  },
  priceType:{
    type:String,
    default:'price type'
  },
  display:{
    type:String,
    default:'display: none;'
  }
})
</script>