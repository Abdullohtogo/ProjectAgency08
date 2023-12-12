<template>
  <section class="container mx-auto">
    <div class="flex flex-col lg:flex-row gap-14 w-full">
      <div class="relative">
        <img src="/images/serviceImg.jpg" alt="" class="z-40 lg:w-full md:mx-auto rounded-md"/>
        <Modal class="z-40"/>
        <BaseExtraShape class="absolute -z-20 -translate-y-72 -translate-x-20 hidden lg:block"/>
      </div>
      <div class="md:mx-auto lg:m-0">
        <div>
          <p class="uppercase text-pink text-[14px] font-semibold text-center lg:text-start">our services</p>
          <h3 class="font-semibold xl:text-[50px] text-[25px] mb-1 lg:text-[40px] md:w-[500px] md:text-[36px] lg:w-[400px] lg:text-start text-center">Business Goals
            Achieved with Design</h3>
        </div>
        <div class=" flex flex-col mt-[30px]">
          <div class="flex gap-[16px]">
            <img src="/icons/bagNoShade.svg" alt=""/>
            <div class="flex flex-col gap-4 mt-10">
              <h3 class="font-bold">Smart Features</h3>
              <p class="sm:text-[15px] sm:w-[335px] text-[12px] lg:w-[300px]">
                Get your blood tests delivered at let home collect sample from the victory of the managments. your blood tests.</p>
            </div>
          </div>
          <div class="flex gap-[16px]">
            <img src="/icons/crownNoShade.svg" alt=""/>
            <div class="flex flex-col gap-4 mt-10">
              <h3 class="font-bold">Smart Features</h3>
              <p class="sm:text-[15px] sm:w-[335px] text-[12px] lg:w-[300px]">
                Get your blood tests delivered at let home collect sample from the victory of the managments. your blood tests.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Modal from "~/components/Base/extra/Modal.vue";
</script>