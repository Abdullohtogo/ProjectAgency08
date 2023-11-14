<template>
      <section class="bg-pinkRed mt-[150px]">
        <div>
          <img src="/Shapes/fullshape2.svg" class="absolute opacity-10" alt="">
        </div>
        <div class="md:w-[600px] sm:w-[480px] mx-auto pt-[60px] pb-[60px]">
          <h2 class="text-white text-center lg:text-[36px] text-[28px] font-semibold">Subscribe to our Blog</h2>
          <p class="line text-white sm:w-[460px] md:text-[16px] text-[14.5px] md:w-[546px] text-center mx-auto mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor incididunt labore
            dolore.</p>
          <div class="md:w-[600px] md:h-[60px] sm:w-[400px] sm:h-[50px] w-[250px] h-[40px] md:mt-[60px] mt-[30px] flex rounded-[100px] bg-white md:mx-0 mx-auto">
            <input type="text" class="rounded-[100px] font-bold text-pinkRed sm:text-[15px] sm:h-[50px] md:h-[60px] sm:w-[270px] h-[40px] w-[140px] placeholder-pinkRed ml-6 md:w-[420px] text-[12px] border-none" placeholder="Enter your email address">
            <button class="transition-all border-2 mx-auto rounded-[50px] md:text-[16px] text-[15px] mt-0.5 md:mt-1 text-white hover:text-pinkRed border-solid w-[80px] sm:mt-0.5 sm:w-[100px] sm:h-[45px] h-[35px] md:w-[150px] group md:h-[50px] border-pinkRed bg-pinkRed hover:bg-white z-20">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <img src="/Shapes/fullshape.svg" class="absolute opacity-10 -translate-y-40" alt="">
        </div>
      </section>
</template>
<script setup lang="ts">
import MainButton from "~/components/Base/Buttons/MainButton.vue";
</script>