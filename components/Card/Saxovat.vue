<template>
  <div
    v-if="
      remainingDays &&
      remainingHours &&
      remainingMinutes &&
      remainingSeconds !== 0
    "
    class="bg-white/90 rounded-28 sm:p-5 p-3"
  >
    <div class="relative">
      <img
        :src="data?.company?.brand_logo.thumbnail?.medium"
        alt=""
        class="rounded-2xl max-h-[320px] object-cover w-full"
      />
      <div class="flex gap-2 absolute left-4 bottom-4 p-2 bg-white rounded-40">
        <img src="/icons/pawprint.svg" alt="icon" />
        <p class="text-black-100 font-medium text-sm">Salomatlik</p>
      </div>
    </div>
    <h3
      class="md:mt-5 sm:mt-4 mt-3 lg:text-xl md:text-lg text-black-100 leading-130 text-base font-semibold max-w-[490px]"
    >
      {{ data?.title }}
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
            <div
              class="flex items-center flex-col bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2"
            >
              <p class="md:text-base text-sm font-bold text-green-400">
                {{ remainingDays }}
              </p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                >kun</span
              >
            </div>
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            <div
              class="flex items-center flex-col bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2"
            >
              <p class="md:text-base text-sm font-bold text-green-400">
                {{ remainingHours }}
              </p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                >soat</span
              >
            </div>
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            <div
              class="flex items-center flex-col bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2"
            >
              <p class="md:text-base text-sm font-bold text-green-400">
                {{ remainingMinutes }}
              </p>
              <span class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                >daq</span
              >
            </div>
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
              <div class="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            <div
              class="flex items-center flex-col bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2"
            >
              <p class="md:text-base text-sm font-bold text-green-400">
                {{ remainingSeconds }}
              </p>
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
                >{{ data?.gained_money_in_percent }}%</span
              >
            </div>
            <div>
              <p class="text-sm text-gray-400 text-end">Marra:</p>
              <span class="font-bold text-black-100"
                >{{ formatMoneyWithSpace(data?.target_money) }} UZS</span
              >
            </div>
          </div>
          <div class="w-full h-2 rounded bg-green-100 my-2">
            <div
              :style="`width: ${data?.gained_money_in_percent}%`"
              class="h-full rounded bg-green-300"
            ></div>
          </div>
          <div class="flex justify-between w-full">
            <p class="text-gray-400 text-sm">
              Saxovatchilar
              <span class="text-black-100 font-semibold"
                >{{ data?.donation_count }}
                <span v-if="data?.donation_count !== '0'">ta</span></span
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

      <Transition name="fade">
        <div
          class="fixed top-0 left-0 w-full h-full z-50 bg-modal hidden opacity-0"
          v-if="showModal"
          :class="{ '!block opacity-100 overflow-hidden ': showModal }"
        >
          <UIModal
            class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:max-w-[434px] w-[70%] sm:w-full"
            @close="toggleModal"
            :show="showModal"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import CommonBlockPreloader from '@/components/Common/BlockPreloader.vue'

import { ref } from 'vue'
import VueAwesomeCountdown from 'vue-awesome-countdown'

const gatheredmoneys = ref({
  percentage: 21,
  money: '1500000',
  investors: '18',
  invested: '0',
})

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
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

const remainingDays = ref()
const remainingHours = ref()
const remainingMinutes = ref()
const remainingSeconds = ref()
function startTimer() {
  const timeNow = new Date().getTime()
  const timeDifference = props.end_time - timeNow
  const millisecondsInOneSecond = 1000
  const millisecondsInOneMinute = millisecondsInOneSecond * 60
  const millisecondsInOneHour = millisecondsInOneMinute * 60
  const millisecondsInOneDay = millisecondsInOneHour * 24
  const differenceInDays = timeDifference / millisecondsInOneDay
  const remainderDifferenceInHours =
    (timeDifference % millisecondsInOneDay) / millisecondsInOneHour
  const remainderDifferenceInMinutes =
    (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute
  const remainderDifferenceInSeconds =
    (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond
  remainingDays.value = Math.floor(differenceInDays)
  remainingHours.value = Math.floor(remainderDifferenceInHours)
  remainingMinutes.value = Math.floor(remainderDifferenceInMinutes)
  remainingSeconds.value = Math.floor(remainderDifferenceInSeconds)
}
onMounted(() => {
  setInterval(() => {
    startTimer()
  }, 1000)
})

function formatMoneyWithSpace(number: string | number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
