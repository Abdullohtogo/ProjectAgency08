<template>
  <section id="pricing">
    <div class="container mx-auto">
      <div>
        <p
          class="uppercase text-pink text-[14px] text-center font-semibold mt-[100px]"
        >
          Pricing plan
        </p>
        <h1 class="font-bold text-[36px] text-center mb-[30px]">
          Amazing useful features
        </h1>
      </div>
      <div class="w-[302px] h-[62px] bg-gray-400 mx-auto">
        <ul class="flex">
          <li
            @click="activeTab = 'tab1'"
            :class="{ active: activeTab === 'tab1' }"
          >
            <div class="pt-3">Monthly plan</div>
          </li>
          <li
            @click="activeTab = 'tab2'"
            :class="{ active: activeTab === 'tab2' }"
          >
            <div class="pt-3">Annual plan</div>
          </li>
        </ul>
      </div>
      <section>
        <div v-if="activeTab === 'tab1'">
          <div
            class="grid lg:grid-cols-3 gap-10 xl:gap-10 lg:gap-5 sm:mx-auto justify-center mx-[1.5px] mt-14 mb-18"
          >
            <div
              class="sm:w-[350px] w-[300px] lg:w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md lg:mb-[180px] hover:shadow-xl transition-all"
            >
              <div class="m-[45px]">
                <h3 class="text-[22px] font-bold">Free Plan</h3>
                <p class="text-[16px] mb-[40px]">For Small teams or office</p>
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
                <div class="mt-[35px] mx-auto w-[210px]">
                  <h3 class="font-bold text-[30px] text-center">
                    $0<span class="text-[16px] font-normal">/Monthly</span>
                  </h3>
                  <div class="mx-7 md:mx-0">
                    <BaseButton
                      text="Start free trail"
                      class="ml-7 mx-auto mt-[35px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="sm:w-[350px] lg:w-[300px] w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md hover:shadow-xl transition-all"
            >
              <div class="m-[45px]">
                <h3 class="text-[22px] font-bold">Business King</h3>
                <p class="text-[16px] mb-[40px]">For Enterprise business</p>
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
                <div class="mt-[35px] flex flex-col mx-auto w-[210px]">
                  <h3 class="font-bold text-[30px] text-center">
                    $15<span class="text-[16px] font-normal">/Monthly</span>
                  </h3>
                  <div class="mx-7 md:mx-0">
                    <BaseButton
                      text="Create Account"
                      class="ml-7 mx-auto mt-[35px]"
                    />
                  </div>
                  <NuxtLink to="#" class="mt-[15px] text-blue text-center"
                  >Or Start 14 Days trail
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              class="sm:w-[350px] lg:w-[300px] w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md mb-[180px] hover:shadow-xl transition-all"
            >
              <p
                class="bg-yellow text-white flex gap-1 w-[118px] h-[32px] text-[15px] text-center absolute rounded-md -translate-y-4 translate-x-8"
              >
                <img
                  src="/icons/whiteLogo.svg"
                  class="w-[18px] ml-2"
                  alt=""
                /><span class="mt-1">Suggested</span>
              </p>
              <div class="m-[45px]">
                <h3 class="text-[22px] font-bold">Pro Master</h3>
                <p class="text-[16px] mb-[40px]">For pro level developers</p>
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
                    $24<span class="text-[16px] font-normal">/Monthly</span>
                  </h3>
                  <div class="mx-7 md:mx-0">
                    <BaseButton
                      text="Create Account"
                      class="ml-7 mx-auto mt-[35px]"
                    />
                  </div>
                  <NuxtLink to="#" class="mt-[15px] text-blue text-center"
                  >Or Start 14 Days trail
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 'tab2'">
          <div
            class="grid lg:grid-cols-3 gap-10 xl:gap-10 lg:gap-5 sm:mx-auto justify-center mx-[1.5px] mt-14 mb-18"
          >
            <div
              class="sm:w-[350px] w-[300px] lg:w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md lg:mb-[180px] hover:shadow-xl transition-all"
            >
              <div class="m-[45px]">
                <h3 class="text-[22px] font-bold">Free Plan</h3>
                <p class="text-[16px] mb-[40px]">For Small teams or office</p>
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
                <div class="mt-[35px] mx-auto w-[210px]">
                  <h3 class="font-bold text-[30px] text-center">
                    $0<span class="text-[16px] font-normal">/Annual</span>
                  </h3>
                  <div class="mx-7 md:mx-0">
                    <BaseButton
                      text="Start free trail"
                      class="ml-7 mx-auto mt-[35px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="sm:w-[350px] lg:w-[300px] w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md hover:shadow-xl transition-all"
            >
              <div class="m-[45px]">
                <h3 class="text-[22px] font-bold">Business King</h3>
                <p class="text-[16px] mb-[40px]">For Enterprise business</p>
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
                <div class="mt-[35px] flex flex-col mx-auto w-[210px]">
                  <h3 class="font-bold text-[30px] text-center">
                    $150<span class="text-[16px] font-normal">/Annual</span>
                  </h3>
                  <div class="mx-7 md:mx-0">
                    <BaseButton
                      text="Create Account"
                      class="ml-7 mx-auto mt-[35px]"
                    />
                  </div>
                  <NuxtLink to="#" class="mt-[15px] text-blue text-center"
                  >Or Start 14 Days trail
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              class="sm:w-[350px] lg:w-[300px] w-[300px] h-[540px] border-gray-200 border-[1px] rounded-md mb-[180px] hover:shadow-xl transition-all"
            >
              <p
                class="bg-yellow text-white flex gap-1 w-[118px] h-[32px] text-[15px] text-center absolute rounded-md -translate-y-4 translate-x-8"
              >
                <img
                  src="/icons/whiteLogo.svg"
                  class="w-[18px] ml-2"
                  alt=""
                /><span class="mt-1">Suggested</span>
              </p>
              <div class="m-[45px]">
                <h3 class="text-[22px] font-bold">Pro Master</h3>
                <p class="text-[16px] mb-[40px]">For pro level developers</p>
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
                    $240<span class="text-[16px] font-normal">/Annual</span>
                  </h3>
                  <div class="mx-7 md:mx-0">
                    <BaseButton
                      text="Create Account"
                      class="ml-7 mx-auto mt-[35px]"
                    />
                  </div>
                  <NuxtLink to="#" class="mt-[15px] text-blue text-center"
                  >Or Start 14 Days trail
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script setup>
</script>
<script>
export default {
  data() {
    return {
      activeTab: 'tab1',
    }
  },
}
</script>