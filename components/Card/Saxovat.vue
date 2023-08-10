<template>
  <div class="bg-white/90 rounded-28 sm:p-5 p-3">
    <div class="relative">
      <img src="/images/saxovat-animals.png" alt="" class="rounded-2xl w-full">
      <div class="flex gap-2 absolute left-4 bottom-4 p-2 bg-white rounded-40">
        <img src="/icons/pawprint.svg" alt="icon">
        <p class="text-black-100 font-medium text-sm">Salomatlik</p>
      </div>
    </div>
    <h3 class="md:mt-5 sm:mt-4 mt-3 md:text-xl text-lg font-semibold max-w-[490px]">
      Ushbu yoqimtoy uy hayvonlariga zudlik bilan yurak plantatsiyasi operatsiyasi kerak
    </h3>

    <div class="md:mt-6 sm:mt-4 mt-3 flex flex-col gap-4">
      <div class="flex gap-5 md:flex-row flex-col">
        <div class="sm:p-3 p-2 rounded-2xl border border-gray-600 flex flex-col items-center w-full">
          <p class="text-black-100 font-medium text-center">
            Saxovat tugagunicha qolgan vaqt:
          </p>
          <div class="mt-3 flex gap-4 items-center">
            <div class="bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2">
              <p class="md:text-base text-sm font-bold text-green-400">30</p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium">kun</span>
            </div>
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            <div class="bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2">
              <p class="md:text-base text-sm font-bold text-green-400">16</p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium">soat</span>
            </div>
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            <div class="bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2">
              <p class="md:text-base text-sm font-bold text-green-400">59</p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium">daq</span>
            </div>
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            <div class="bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2">
              <p class="md:text-base text-sm font-bold text-green-400">23</p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium">sek</span>
            </div>
          </div>
        </div>
        <div class="sm:p-3 p-2 rounded-2xl border border-gray-600 flex flex-col items-center w-full">
          <div class="flex justify-between w-full">
            <div>
              <p class="text-sm text-gray-400">Yig'ildi:</p>
              <span class="font-bold text-green-400">21%</span>
            </div>
            <div>
              <p class="text-sm text-gray-400 text-end">Marra:</p>
              <span class="font-bold text-black-100">1 500 000 UZS</span>
            </div>
          </div>
          <div class="w-full h-2 rounded bg-green-100 my-2">
            <div class="w-[20%] h-full rounded bg-green-300"></div>
          </div>
          <div class="flex justify-between w-full">
            <p class="text-gray-400 text-sm">Saxovatchilar
              <span class="text-black-100 font-semibold">18 ta</span>
            </p>
            <p class="text-gray-400 text-sm">Hissangiz
              <span class="text-black-100 font-semibold">0</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex gap-5 w-full justify-between">
        <CommonButton label="Hissa qo'shish" variant="secondary" class="w-full">
          <template #before>
            <img src="/icons/generous_heart.svg" alt="">
          </template>
        </CommonButton>
        <CommonButton label="Ulashish" variant="darker" class="w-full">
          <template #before>
            <img src="/icons/share.svg" alt="">
          </template>
        </CommonButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>