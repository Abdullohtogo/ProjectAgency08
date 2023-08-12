<template>
  <div class="bg-white/90 rounded-28 sm:p-5 p-3">
    <div class="relative">
      <img
        src="/images/saxovat-animals.png"
        alt=""
        class="rounded-2xl w-full"
      />
      <div class="flex gap-2 absolute left-4 bottom-4 p-2 bg-white rounded-40">
        <img src="/icons/pawprint.svg" alt="icon" />
        <p class="text-black-100 font-medium text-sm">Salomatlik</p>
      </div>
    </div>
    <h3
      class="md:mt-5 sm:mt-4 mt-3 lg:text-xl md:text-lg text-black-100 leading-130 text-base font-semibold max-w-[490px]"
    >
      Ushbu yoqimtoy uy hayvonlariga zudlik bilan yurak plantatsiyasi
      operatsiyasi kerak
    </h3>

    <div class="md:mt-6 sm:mt-4 mt-3 flex flex-col gap-4">
      <div class="flex gap-5 md:flex-row flex-col">
        <div
          class="sm:p-3 p-2 rounded-2xl border border-gray-600 flex flex-col items-center w-full"
        >
          <p
            class="text-black-100 font-medium leading-130 text-base text-center"
          >
            Saxovat tugagunicha qolgan vaqt:
          </p>
          <div class="mt-3 flex gap-4 items-center">
            <div class="bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2">
              <p class="md:text-base text-sm font-bold text-green-400">30</p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                >kun</span
              >
            </div>
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            <div class="bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2">
              <p class="md:text-base text-sm font-bold text-green-400">16</p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                >soat</span
              >
            </div>
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            <div class="bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2">
              <p class="md:text-base text-sm font-bold text-green-400">59</p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                >daq</span
              >
            </div>
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            <div class="bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2">
              <p class="md:text-base text-sm font-bold text-green-400">23</p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                >sek</span
              >
            </div>
          </div>
        </div>
        <div
          class="sm:p-3 p-2 rounded-2xl border border-gray-600 flex flex-col items-center w-full"
        >
          <div class="flex justify-between w-full">
            <div>
              <p class="text-sm text-gray-400">Yig'ildi:</p>
              <span class="font-bold text-green-400"
                >{{ gatheredmoneys.percentage }}%</span
              >
            </div>
            <div>
              <p class="text-sm text-gray-400 text-end">Marra:</p>
              <span class="font-bold text-black-100"
                >{{ formatMoneyWithSpace(gatheredmoneys?.money) }} UZS</span
              >
            </div>
          </div>
          <div class="w-full h-2 rounded bg-green-100 my-2">
            <div
              :style="`width: ${gatheredmoneys.percentage}%`"
              class="h-full rounded bg-green-300"
            ></div>
          </div>
          <div class="flex justify-between w-full">
            <p class="text-gray-400 text-sm">
              Saxovatchilar
              <span class="text-black-100 font-semibold"
                >{{ gatheredmoneys.investors }}
                <span v-if="gatheredmoneys.investors !== '0'">ta</span></span
              >
            </p>
            <p class="text-gray-400 text-sm">
              Hissangiz
              <span class="text-black-100 font-semibold"
                >{{ gatheredmoneys.invested }}
                <span v-if="gatheredmoneys.invested !== '0'">ta</span></span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="flex gap-5 w-full sm:flex-row flex-col justify-between">
        <CommonButton
          label="Hissa qo'shish"
          buttonStyle="flex items-center"
          variant="secondary"
          class="w-full"
        >
          <template #before>
            <span class="icon-heart text-2xl text-white" />
          </template>
        </CommonButton>
        <CommonButton
          label="Ulashish"
          buttonStyle="flex items-center"
          variant="darker"
          class="w-full"
          @click="toggleModal()"
        >
          <template #before>
            <span class="icon-share text-2xl text-green-400" />
          </template>
        </CommonButton>
      </div>

      <div
        class="fixed top-0 left-0 w-full h-full z-50 bg-modal hidden opacity-0"
        :class="{ '!block opacity-100 overflow-hidden ': showModal }"
      >
        <UIModal
          class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:max-w-[434px] w-[70%] sm:w-full"
          v-if="showModal"
          @close="toggleModal"
          :show="showModal"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const gatheredmoneys = ref({
  percentage: 21,
  money: '1500000',
  investors: '18',
  invested: '0',
})

const showModal = ref(false)

function toggleModal() {
  if (showModal.value == true) {
    showModal.value = false
    console.log(showModal.value)
  } else {
    showModal.value = true
    console.log(showModal.value)
  }
}

function formatMoneyWithSpace(number: string | number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
</script>
