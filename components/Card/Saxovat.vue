<template>
  <div class="bg-white/90 rounded-28 sm:p-5 p-3">
    <div v-if="data?.image" class="relative md:mb-5 sm:mb-4 mb-3">
      <img
        :src="data?.image.thumbnail?.small"
        alt=""
        class="rounded-2xl max-h-[320px] object-cover w-full"
      />
      <div class="flex gap-2 absolute left-4 bottom-4 p-2 bg-white rounded-40">
        <!--         :style="`background-color: ${data?.category?.background_color}`"-->
        <img :src="data?.category?.icon?.file" alt="icon" />
        <p class="text-black-100 font-medium text-sm">
          {{ data?.category?.name }}
        </p>
      </div>
    </div>
    <h3
      class="lg:text-xl md:text-lg text-black-100 leading-130 text-base font-semibold max-w-[490px]"
    >
      {{ data?.title }}
    </h3>

    <ClientOnly>
      <div class="md:mt-6 sm:mt-4 mt-3 flex flex-col gap-4">
        <div class="flex gap-5 lg:flex-row flex-col">
          <div
            class="sm:p-3 p-2 rounded-2xl border border-gray-600 flex flex-col items-center w-full"
          >
            <p
              class="text-black-100 font-medium leading-130 text-base text-center"
            >
              {{ $t('till_end_of_generous') }}
            </p>
            <div class="mt-3 flex gap-4 items-center">
              <div
                class="flex items-center flex-col bg-green-100 rounded-md md:py-1.5 py-1 md:px-3.5 px-2"
              >
                <p class="md:text-base text-sm font-bold text-green-400">
                  {{ remainingDays }}
                </p>
                <span
                  class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                  >{{ $t('day') }}</span
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
                <span
                  class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                  >{{ $t('hour') }}</span
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
                <span
                  class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                  >{{ $t('minute') }}</span
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
                <span
                  class="sm:mt-0.5 mt-0 text-green-400 text-xs font-medium"
                  >{{ $t('second') }}</span
                >
              </div>
            </div>
          </div>
          <div
            class="sm:p-3 p-2 rounded-2xl border border-gray-600 flex flex-col items-center w-full"
          >
            <div class="flex justify-between w-full">
              <div>
                <p class="text-sm text-gray-400">{{ $t('gathered') }}</p>
                <span class="font-bold text-green-400">
                  {{ data?.gained_money_in_percent }}%
                </span>
              </div>
              <div>
                <p class="text-sm text-gray-400 text-end">{{ $t('finish') }}</p>
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
                {{ $t('geneourses') }}:
                <span class="text-black-100 font-semibold"
                  >{{ data?.donation_count }}
                  <span v-if="data?.donation_count !== '0'">ta</span></span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="flex gap-5 w-full sm:flex-row flex-col justify-between">
          <CommonButton
            label="add_hissa"
            buttonStyle="flex items-center"
            variant="secondary"
            class="w-full"
            @click="openHissa"
          >
            <template #before>
              <span class="icon-heart text-2xl text-white" />
            </template>
          </CommonButton>
          <CommonButton
            label="connect"
            buttonStyle="flex items-center"
            variant="darker"
            class="w-full"
            @click="openModal()"
          >
            <template #before>
              <span class="icon-share text-2xl text-green-400" />
            </template>
          </CommonButton>
        </div>
        <Transition name="fade">
          <div
            class="fixed top-0 left-0 w-full h-full z-50 bg-modal hidden opacity-0"
            v-if="showHissa"
            @click="closeHissa()"
            :class="{ '!block opacity-100 overflow-hidden ': showHissa }"
          >
            <div
              @click="closeHissa()"
              class="fixed -right-full top-1/2 left-1/2 transform -translate-x-1/2 flex items-end flex-col -translate-y-1/2 z-50 max-w-[320px]"
            >
              <span
                @click="closeHissa()"
                class="icon-close text-white text-2xl translate-x-7 cursor-pointer"
              />
              <div
                class="relative max-w-[344px] w-full overflow-hidden bg-gradient-to-b from-app-banner-1 to-app-banner-2 rounded-28 flex flex-col justify-center items-center p-6 pt-8"
              >
                <div>
                  <img src="/icons/hissa-main.svg" alt="" />
                </div>
                <h3
                  class="text-white text-center lg:text-2xl md:text-xl text-lg font-semibold mt-5"
                >
                  {{ $t('download_app') }}
                </h3>
                <p class="text-green-200 mt-3 md:text-base text-sm text-center">
                  {{ $t('checkon_foundation') }}
                </p>
                <div class="absolute -right-5">
                  <img src="/icons/heart-transparent.svg" alt="" />
                </div>
                <div class="z-10">
                  <img
                    src="/icons/QR-light.svg"
                    alt=""
                    class="mt-8 shadow-qrlight rounded-[20px]"
                  />
                </div>
                <img
                  src="/images/arm.png"
                  class="-rotate-90 absolute -right-12 bottom-32"
                  alt="arm"
                />

                <div class="mt-4 flex gap-3 w-full">
                  <a
                    :href="appstore"
                    target="_blank"
                    class="basis-1/2 hover:opacity-80 transition-all duration-300"
                  >
                    <img src="/icons/Appstore-dark.svg" alt="" class="w-full" />
                  </a>
                  <a
                    target="_blank"
                    :href="playstore"
                    class="basis-1/2 hover:opacity-80 transition-all duration-300"
                  >
                    <img
                      src="/icons/Playmarket-dark.svg"
                      alt=""
                      class="w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition name="fade">
          <div
            class="fixed top-0 left-0 w-full h-full z-50 bg-modal hidden opacity-0"
            v-if="showModal == true"
            @click="closeModal()"
            :class="{ '!block opacity-100 overflow-hidden ': showModal }"
          >
            <UIModal
              class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 sm:max-w-[434px] w-[70%] sm:w-full"
              @close="toggleModal"
              :id="data?.id"
              :show="showModal"
            />
          </div>
        </Transition>
      </div>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import VueAwesomeCountdown from 'vue-awesome-countdown'

import { formatMoneyWithSpace } from '@/utils/index'

const gatheredmoneys = ref({
  percentage: 21,
  money: '1500000',
  investors: '18',
  invested: '0',
})
const appstore = ref(import.meta.env.VITE_APP_APP_STORE)
const playstore = ref(import.meta.env.VITE_APP_PLAY_STORE)

const ploader = ref(true)

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
const showHissa = ref(false)
function closeHissa() {
  showHissa.value = false
}
function openHissa() {
  showHissa.value = true
}
function openModal() {
  showModal.value = true
}
function toggleModal() {
  if (showModal.value == true) {
    showModal.value = false
  } else {
    showModal.value = true
  }
}
function closeModal() {
  showModal.value = false
  document.body.style.overflow = 'auto'
}

const remainingDays = ref(0)
const remainingHours = ref(0)
const remainingMinutes = ref(0)
const remainingSeconds = ref(0)

const timeNow = new Date().getTime()
let timeDifference = props.end_time - timeNow

function startTimer() {
  const millisecondsInOneSecond = 1000
  timeDifference = Math.abs(timeDifference) - millisecondsInOneSecond

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
  remainingDays.value = Math.abs(Math.floor(differenceInDays))
  remainingHours.value = Math.abs(Math.floor(remainderDifferenceInHours))
  remainingMinutes.value = Math.abs(Math.floor(remainderDifferenceInMinutes))
  remainingSeconds.value = Math.abs(Math.floor(remainderDifferenceInSeconds))
}
onMounted(() => {
  setInterval(() => {
    startTimer()
  }, 1000)
})
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
